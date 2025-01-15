const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');

// 如果修改了这里的 scope，记得删除 token.json 然后重新oauth
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = path.join(process.cwd(), 'src', 'secrets', 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'src', 'secrets', 'client_secret_117427074209-4gpnpl3a3agqmjnuf9hoeu2roh04ugq8.apps.googleusercontent.com.json');

async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
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
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }

    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;

    const oAuth2Client = new OAuth2Client(
        key.client_id,
        key.client_secret,
        key.redirect_uris[0]
    );

    // 生成授权URL
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('在浏览器里打开这个链接:', authUrl);

    // 这里需要手动输入一下授权码
    const code = await new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question('请输入授权码（"code=" 和 "&scope=" 之间的内容）: ', (code) => {
            readline.close();
            resolve(code);
        });
    });

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    await saveCredentials(oAuth2Client);
    return oAuth2Client;
}

module.exports = {
    authenticate: authenticateGoogle
}; 