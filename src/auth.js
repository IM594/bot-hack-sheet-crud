const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');
const express = require('express');
const http = require('http');

// 如果修改了这里的 scope，记得删除 token.json 然后重新oauth
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = path.join(process.cwd(), 'src', 'secrets', 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'src', 'secrets', 'client_secret.json');

async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);

        // 验证必要的凭据是否存在
        if (!credentials.client_id || !credentials.client_secret || !credentials.refresh_token) {
            console.log('Token格式无效，需要重新认证');
            return null;
        }

        const client = new OAuth2Client(
            credentials.client_id,
            credentials.client_secret,
            'http://localhost:3001/oauth2callback'
        );

        client.setCredentials({
            refresh_token: credentials.refresh_token
        });

        // 尝试刷新 token
        try {
            await client.getAccessToken();
            return client;
        } catch (error) {
            console.log('Token刷新失败，需要重新认证:', error.message);
            return null;
        }
    } catch (err) {
        return null;
    }
}

async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}

async function authenticateGoogle() {
    // 先尝试从本地文件中加载token.json
    let client = await loadSavedCredentialsIfExist();

    // 如果加载成功，则直接返回
    if (client) {
        return client;
    }

    // 如果加载失败，重新认证
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;

    const oAuth2Client = new OAuth2Client(
        key.client_id,
        key.client_secret,
        'http://localhost:3001/oauth2callback' //自定义的回调地址。配合后面server.js的3001端口
    );

    // 生成授权URL
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('在浏览器里打开这个链接:', authUrl);

    // 创建临时服务器接收回调
    const code = await new Promise((resolve, reject) => {
        const app = express();
        const server = http.createServer(app);

        app.get('/oauth2callback', async (req, res) => {
            const code = req.query.code;
            res.send('认证成功！可以关闭此窗口了。');
            server.close();
            resolve(code);
        });

        server.listen(3001, () => {
            console.log('等待 OAuth2 回调...');
        });

        // 设置超时
        setTimeout(() => {
            server.close();
            reject(new Error('认证超时'));
        }, 300000); // 5分钟超时
    });

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    await saveCredentials(oAuth2Client);
    return oAuth2Client;
}

async function initializeAuth() {
    try {
        const client = await authenticateGoogle();
        console.log('Google 认证成功！');
        return client;
    } catch (error) {
        console.error('Google 认证失败:', error);
        throw error;
    }
}

module.exports = {
    authenticate: authenticateGoogle,
    initialize: initializeAuth
}; 