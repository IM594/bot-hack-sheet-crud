process.removeAllListeners('warning');

const { google } = require('googleapis');
const { authenticate } = require('./auth');

const SPREADSHEET_ID = '1k22ToL4VlNiPJ1dtwaVEvZtGP4pmpvtmL6pSmM_UizY';
const SHEET_RANGE = 'Sheet1!A:Z'; // 这样能支持动态的行数

async function initializeSheets() {
    const auth = await authenticate();
    return google.sheets({ version: 'v4', auth });
}

// 读取Sheet
async function readSheet() {
    try {
        const sheets = await initializeSheets();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: SHEET_RANGE,
        });

        console.log('读取到的数据:', response.data.values);
        return response.data.values;
    } catch (error) {
        console.error('读取失败:', error);
        throw error;
    }
}

// 添加一行数据
async function appendRow(rowData) {
    try {
        const sheets = await initializeSheets();
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: SHEET_RANGE,
            valueInputOption: 'USER_ENTERED', // 允许公式等输入
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [rowData]
            },
        });

        console.log('添加成功:', response.data);
        return response.data;
    } catch (error) {
        console.error('添加失败:', error);
        throw error;
    }
}

// 更新特定单元格
async function updateCell(range, value) {
    try {
        const sheets = await initializeSheets();
        const response = await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: range, // 例如: 'Sheet1!A2'
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[value]]
            },
        });

        console.log('更新成功:', response.data);
        return response.data;
    } catch (error) {
        console.error('更新失败:', error);
        throw error;
    }
}

// 删除行（实际上是清空内容）
async function deleteRow(rowIndex) {
    try {
        const sheets = await initializeSheets();
        const range = `Sheet1!A${rowIndex}:Z${rowIndex}`;
        const response = await sheets.spreadsheets.values.clear({
            spreadsheetId: SPREADSHEET_ID,
            range: range,
        });

        console.log('删除成功:', response.data);
        return response.data;
    } catch (error) {
        console.error('删除失败:', error);
        throw error;
    }
}

// 示例
async function runDemo() {
    try {
        // 1. 读取当前数据
        console.log('1. 读取当前数据');
        await readSheet();

        // 2. 添加新行
        console.log('\n2. 添加新行');
        await appendRow(['张三', '25', 'zhangsan@example.com']);

        // 3. 更新单元格
        console.log('\n3. 更新单元格');
        await updateCell('Sheet1!B2', '26');

        // 4. 删除行
        console.log('\n4. 删除第3行');
        await deleteRow(3);

        // 5. 确认最终结果
        console.log('\n5. 最终结果');
        await readSheet();

    } catch (error) {
        console.error('演示过程出错:', error);
    }
}

// 用 api 修改文档不回触发 app script 的 onEdit 函数。
runDemo();

module.exports = {
    readSheet,
    appendRow,
    updateCell,
    deleteRow
}; 