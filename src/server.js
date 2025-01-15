const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const { authenticate } = require('./auth');
const app = express();

app.use(cors());
app.use(express.json());

// 处理 sheet 更新的 webhook
app.post('/sheet-update', async (req, res) => {
    // console.log('Sheet:', req.body);
    console.log('Sheet:', req.body.spreadsheetId, '版本更新到了:', req.body.newValue);
    try {
        // 获取数据
        const auth = await authenticate();
        const sheets = google.sheets({ version: 'v4', auth });

        const result = await sheets.spreadsheets.values.get({
            spreadsheetId: req.body.spreadsheetId,
            range: 'Sheet1'
        });

        // console.log('获取到的完整数据:', result.data);
        console.log('当前 Sheet 的 values:', result.data.values);

        if (!result.data.values || result.data.values.length === 0) {
            console.log('Sheet 中没有数据');
            return res.status(200).json({ message: 'Sheet 为空' });
        }

        const sheetData = result.data.values[0][1];
        console.log('当前 Sheet 的版本号:', sheetData);

        res.status(200).json({ message: '更新通知接收成功' });
    } catch (error) {
        console.error('处理更新失败:', error);
        res.status(500).json({ error: '处理更新失败' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
}); 