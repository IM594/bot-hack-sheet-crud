## 安装

1. 克隆仓库

2. 安装依赖：

```bash
npm install
```

3. 配置：
   - 将 Google Cloud Platform 生成的 `client_secret_<project_id>.json` 文件放在 `src/secrets/` 目录下，记得改名成 `client_secret.json`
   - 首次运行时会自动让你配合生成 `token.json`

## 项目结构

```
.
├── apps-script/
│   ├── Code.gs            # App Script 代码，放到 Google Sheet - Extension - App Script 中
├── src/
│   ├── server.js          # 主服务器文件
│   ├── auth.js            # Google Oauth 认证用
│   ├── crud-demo.js       # 增删改查示例代码
│   └── secrets/           # 敏感文件集合
├── package.json
└── README.md
```

常用命令见 package.json。

## 参考资料

- [Google Sheets API 文档](https://developers.google.com/sheets/api/guides/concepts)
- [Google App Script Trigger 文档](https://developers.google.com/apps-script/guides/triggers?hl=zh-cn)
