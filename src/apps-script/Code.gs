// 当文档编辑时触发
function onEdit(e) {
  // 检查是否是 Version Control 这个 Sheet 的 B1 单元格
  if (e.range.getA1Notation() === 'B1' && e.source.getActiveSheet().getName() === 'Version Control') {
    const WEBHOOK_URL = 'https://4985-122-231-184-235.ngrok-free.app/sheet-update';
    
    try {
      const sheet = e.source.getActiveSheet();
      const newValue = e.range.getValue();
      
      const response = UrlFetchApp.fetch(WEBHOOK_URL, {
        'method': 'post',
        'contentType': 'application/json',
        'payload': JSON.stringify({
          'timestamp': new Date().toISOString(),
          'spreadsheetId': SpreadsheetApp.getActiveSpreadsheet().getId(),
          'newValue': newValue,
          'cell': 'B1'
        })
      });
      
      Logger.log('B1更新通知发送成功: ' + response.getContentText());
    } catch (error) {
      Logger.log('发送通知失败: ' + error.toString());
    }
  }
}

// 设置触发器
function createTriggers() {
  const ss = SpreadsheetApp.getActive();
  
  // 先清空
  ScriptApp.getProjectTriggers().forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  
  // 设置 onEdit 触发器
  ScriptApp.newTrigger('onEdit')
    .forSpreadsheet(ss) // 指定文档
    .onEdit() // 触发时执行 onEdit() 函数
    .create(); // 创建
    
  Logger.log('onEdit 触发器设置成功');
}
