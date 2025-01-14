const { google } = require('googleapis');
const { authenticate } = require('./auth');

async function main() {
    // 认证并获取 auth client
    const auth = await authenticate();
    const sheets = google.sheets({ version: 'v4', auth });

    // spreadsheet ID
    const spreadsheetId = '1k22ToL4VlNiPJ1dtwaVEvZtGP4pmpvtmL6pSmM_UizY';

    try {
        // 读
        const readResult = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!A1:E10', // 读取的范围
        });
        console.log('读取的数据:', readResult.data.values);

        // 写
        const updateResult = await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: 'Sheet1!A1', // 哪个单元格
            valueInputOption: 'RAW',
            resource: {
                values: [['Hello', 'World']], // 要写入的数据
            },
        });
        console.log('更新成功:', updateResult.status);

    } catch (err) {
        console.error('出错了:', err);
    }
}

main(); 