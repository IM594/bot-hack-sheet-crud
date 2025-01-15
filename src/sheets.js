// 读取示例
// const { google } = require('googleapis');
// const { authenticate } = require('./auth');

// async function readSheetData() {
//     // 认证并获取 auth client
//     const auth = await authenticate();
//     const sheets = google.sheets({ version: 'v4', auth });

//     // spreadsheet ID
//     const spreadsheetId = '1k22ToL4VlNiPJ1dtwaVEvZtGP4pmpvtmL6pSmM_UizY';

//     try {
//         const readResult = await sheets.spreadsheets.values.get({
//             spreadsheetId,
//             range: 'Sheet1!A1:E10', // 读取的范围
//         });
//         return readResult.data.values;
//     } catch (err) {
//         console.error('读取 Sheet 出错:', err);
//         throw err;
//     }
// }

// module.exports = {
//     readSheetData
// }; 