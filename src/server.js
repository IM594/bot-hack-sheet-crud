process.removeAllListeners('warning');

const { authenticate, initialize } = require('./auth');
const { google } = require('googleapis');
const express = require('express');
const cors = require('cors');
const convert2constant = require('./converter/sheet2constant');
const path = require('path');
const fs = require('fs').promises;

const app = express();

app.use(cors());
app.use(express.json());

// 处理 sheet 更新的 webhook
app.post('/sheet-update', async (req, res) => {
    console.log('\n');
    console.log('Sheet:', req.body);
    try {
        // auth
        const auth = await authenticate();
        const sheets = google.sheets({ version: 'v4', auth });

        // 获取三个 Sheet 的数据
        const sheetRanges = ['GGMeet', 'Zoom', 'Teams'];
        const results = await Promise.all(sheetRanges.map(range =>
            sheets.spreadsheets.values.get({
                spreadsheetId: req.body.spreadsheetId,
                range: range
            })
        ));

        // 处理所有 Sheet 的数据
        const allData = {};
        results.forEach((result, index) => {
            allData[sheetRanges[index]] = result.data.values || [];
        });

        console.log('allData:', allData);

        if (Object.values(allData).every(data => data.length === 0)) {
            console.log('所有 Sheet 中都没有数据');
            return res.status(200).json({ message: '所有 Sheet 为空' });
        }

        // 转换数据并写入文件
        const metadata = {
            timestamp: req.body.timestamp,
            version: req.body.newValue
        };
        const fileContents = convert2constant(allData, metadata);
        await Promise.all(
            Object.entries(fileContents).map(([filePath, content]) =>
                fs.writeFile(path.join(process.cwd(), filePath), content)
            )
        );

        console.log('文件更新成功');

        res.status(200).json({
            message: '更新通知接收成功，文件已更新',
            data: allData
        });

        console.log('\n');
    } catch (error) {
        console.error('处理更新失败:', error);
        res.status(500).json({ error: '处理更新失败' });
    }
});

const PORT = process.env.PORT || 3000;

// 在服务器启动之前，先进行认证初始化
async function startServer() {
    try {
        await initialize();
    } catch (error) {
        process.exit(1);
    }
}

startServer();

app.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
}); 