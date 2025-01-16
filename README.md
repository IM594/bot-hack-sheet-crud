## 安装

1. 克隆仓库

```bash
git clone https://github.com/IM594/bot-hack-sheet-crud.git
```

2. 安装依赖：

```bash
npm install
```

3. 配置：
   - 将 [Google Cloud Platform](https://console.cloud.google.com/apis/credentials/oauthclient/117427074209-4gpnpl3a3agqmjnuf9hoeu2roh04ugq8.apps.googleusercontent.com?authuser=0&invt=AbmXSg&project=bot-hack-query) 下载下来的 `client_secret_<project_id>.json` 文件放在 `src/secrets/` 目录下，然后改名成 `client_secret.json`
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

## 常用命令

见 package.json。

## 注意事项

- `Code.gs` 在哪儿用？
  - 需要放到 Google Sheet - Extension - App Script 中，不是在 nodejs 环境跑的。
  - 它的主要作用是：
    - 监听 Google Sheet 的更新，然后通过 webhook 通知到 nodejs 服务器。
- `WEBHOOK_URL` 需要手动修改

```
const WEBHOOK_URL = 'https://4985-122-231-184-235.ngrok-free.app/sheet-update';

// 这个 url 分为两部分：

// 第一部分： https://4985-122-231-184-235.ngrok-free.app
//   这个需要指向当前服务器所在地址 + 端口。目前代码这部分是 ngrok 内网穿透后的地址，这个地址背后监听的端口已经是3000，所以不用加端口号。
//   但是，最终需要换成自己的服务器地址 + 端口。

// 第二部分： /sheet-update
//   这个是 server.js 中 app.post('/sheet-update', async (req, res) => { }) 中的 url
```

## 参考资料

- [Google Sheets API 文档](https://developers.google.com/sheets/api/guides/concepts)
- [Google App Script Trigger 文档](https://developers.google.com/apps-script/guides/triggers?hl=zh-cn)
