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

function generateTSContent(constantName, data) {
  const { constantObj, comments } = data;
  
  // 生成带comment的constant 文件
  const lines = [];
  
  // ggmeet 写死的类型import
  if (constantName === 'GMEET_QUERIES_MAP') {
    lines.push(`import { IGMeetQKeys } from "../../schema/queryKeys";`);
    lines.push('');
  }
  
  // 添加类型声明(仅针对 gmeet.ts)
  const typeDeclaration = constantName === 'GMEET_QUERIES_MAP' 
    ? `Record<IGMeetQKeys, string[]>` 
    : `Record<string, string[]>`;
  
  // 开始
  lines.push(`export const ${constantName}: ${typeDeclaration} = {`);
  
  // 每个 constant 和对应 comment
  Object.entries(constantObj).forEach(([key, value]) => {
    if (comments[key]) {
      lines.push(`  // ${comments[key]}`);
    }
    lines.push(`  "${key}": ${JSON.stringify(value, null, 2).replace(/\n/g, '\n  ')},`);
    lines.push('');
  });
  
  // 结束
  lines.push('};');
  
  return lines.join('\n');
}

function convert2constant(allData) {
  try {
    // Google Meet
    const gmeetData = convertSheetDataToConstant(allData.GGMeet);
    const gmeetContent = generateTSContent('GMEET_QUERIES_MAP', gmeetData);
    
    // Zoom
    const zoomData = convertSheetDataToConstant(allData.Zoom);
    const zoomContent = generateTSContent('ZOOMSDK_QUERIES_MAP', zoomData);
    
    // Teams
    const teamsData = convertSheetDataToConstant(allData.Teams);
    const teamsContent = generateTSContent('TEAMS_QUERIES_MAP', teamsData);
    
    return {
      'src/result/gmeet.ts': gmeetContent,
      'src/result/zoomSDK.ts': zoomContent, 
      'src/result/teams.ts': teamsContent
    };
  } catch (error) {
    console.error('转换失败:', error);
    throw error;
  }
}

module.exports = convert2constant;
