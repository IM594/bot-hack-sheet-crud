function convertSheetDataToConstant(sheetData) {
  // 跳过第一行
  const rows = sheetData.slice(1);
  
  const constantObj = {};
  const comments = {};
  
  rows.forEach(row => {
    const [key, description, selector1, selector2, selector3, selector4] = row;
    
    // 过滤掉空的Selector
    const selectors = [selector1, selector2, selector3, selector4].filter(Boolean);

    // 把Selectors赋给对应的key
    constantObj[key] = selectors;
    
    // 如果description不为空，则加上
    if (description) {
      comments[key] = description;
    }
  });
  
  return { constantObj, comments };
}

function generateTSContent(constantName, data, metadata) {
  const { constantObj, comments } = data;
  const { timestamp, version } = metadata;
  
  // 生成带comment的constant 文件
  const lines = [];
  
  // 添加更新时间和版本信息
  lines.push('/**');
  lines.push(` * Last Updated: ${new Date(timestamp).toLocaleString()}`);
  lines.push(` * Version: ${version}`);
  lines.push(' */');
  lines.push('');
  
  // ggmeet 写死的类型import
  if (constantName === 'GMEET_QUERIES_MAP') {
    lines.push(`import { IGMeetQKeys } from "../../schema/queryKeys";`);
    lines.push('');
  }
  
  // 类型声明
  const typeDeclaration = constantName === 'GMEET_QUERIES_MAP' 
    ? `Record<IGMeetQKeys, string[]>` 
    : `Record<string, string[]>`;
  
  // 开始{
  lines.push(`export const ${constantName}: ${typeDeclaration} = {`);
  
  // 每个 constant 和对应 comment
  Object.entries(constantObj).forEach(([key, value]) => {
    if (comments[key]) {
      lines.push(`  // ${comments[key]}`);
    }
    lines.push(`  "${key}": ${JSON.stringify(value, null, 2).replace(/\n/g, '\n  ')},`);
    lines.push('');
  });
  
  // 结束}
  lines.push('};');
  
  return lines.join('\n');
}

function convert2constant(allData, metadata) {
  try {
    // Google Meet
    const gmeetData = convertSheetDataToConstant(allData.GGMeet);
    const gmeetContent = generateTSContent('GMEET_QUERIES_MAP', gmeetData, metadata);
    
    // Zoom
    const zoomData = convertSheetDataToConstant(allData.Zoom);
    const zoomContent = generateTSContent('ZOOMSDK_QUERIES_MAP', zoomData, metadata);
    
    // Teams
    const teamsData = convertSheetDataToConstant(allData.Teams);
    const teamsContent = generateTSContent('TEAMS_QUERIES_MAP', teamsData, metadata);
    
    return {
      'src/results/gmeet.ts': gmeetContent,
      'src/results/zoomSDK.ts': zoomContent, 
      'src/results/teams.ts': teamsContent
    };
  } catch (error) {
    console.error('转换失败:', error);
    throw error;
  }
}

module.exports = convert2constant;
