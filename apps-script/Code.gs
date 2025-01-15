// 当文档编辑时触发
function onEdit(e) {
  // 检查 B1 （版本号所在单元格）
  if (e.range.getA1Notation() === 'B1') {
    const WEBHOOK_URL = 'https://ac01-122-231-184-235.ngrok-free.app/sheet-update';
    
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
  
  // 删除所有现有触发器
  ScriptApp.getProjectTriggers().forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  
  // 只设置编辑触发器
  ScriptApp.newTrigger('onEdit')
    .forSpreadsheet(ss)
    .onEdit()
    .create();
    
  Logger.log('编辑触发器设置成功');
}