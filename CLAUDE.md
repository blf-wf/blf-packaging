# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

黑湖小工单 → 企业微信逾期工单每日播报。定时扫描黑湖中所有未完成工序（processStatus 0/10），筛选 `expiredDayCount > 0` 的逾期项，按负责人分组后通过企业微信自建应用推送个人提醒 + 管理群日报。

## 常用命令

```bash
# 开发运行
npm run dev              # daemon 模式（启动后立即运行一次，然后每日 08:00 定时）
npm run dev:dry          # dry-run：执行扫描但不发送消息，日志输出预览
npm run dev:run          # run-now：立即执行并发送真实消息

# 构建
npm run build            # tsc 编译到 dist/

# 生产部署
npm start                # node dist/index.js（需先 build）

# 测试
npm test                 # vitest run
npm run test:watch       # vitest watch 模式

# Docker
docker compose up -d     # 生产模式部署
```

运行模式可通过 CLI 参数 `--daemon` / `--run-now` / `--dry-run` 覆盖，优先级高于 `.env` 的 `RUN_MODE`。

## 架构

```
src/
├── index.ts              # 入口：解析运行模式，调度 scan → notify 流水线
├── config/index.ts       # .env 加载 + zod 校验，导出类型安全的 env 对象
├── auth/
│   ├── blacklake-auth.ts # 黑湖登录：SHA3-224 密码哈希 → JWT，内存缓存 + 过期前复用
│   └── wecom-auth.ts     # 企微 gettoken：corpid/secret → access_token，内存缓存
├── api/
│   ├── blacklake-client.ts # 黑湖 API 客户端（axios），自动注入 X-AUTH + X-CLIENT 头，401 自动刷新 token
│   └── wecom-client.ts     # 企微 API 客户端，sendMarkdown / sendMarkdownToChat，token 过期自动刷新
├── scanners/
│   ├── overdue-scanner.ts  # 扫描主流程：查询 API → parse → filter overdue → dedup(今日已通知跳过) → 按负责人分组 → 映射企微 ID
│   └── parser.ts           # API 响应解析 + expiredDayCount > 0 过滤 + 按姓名分组
├── notifiers/
│   ├── wecom-notifier.ts   # 通知发送编排：首次运行仅发管理群汇总(bootstrap)；日常逐人推送(间隔1s防限流)→管理群汇总→state 清理
│   └── message-template.ts # 消息模板：个人提醒 Markdown + 管理群日报表格（含未映射用户警告）
├── mappers/
│   └── user-mapper.ts      # config/users.yaml → Map<姓名, {wecomId, department}>，提供 lookupWecomId / lookupDepartment
├── models/
│   ├── task.ts             # Task、TaskOutputObject 等黑湖 API 响应类型
│   └── notification.ts     # OverdueProcess、NotificationGroup、ScanResult 等内部类型
└── utils/
    ├── cron.ts             # node-cron 封装，每日 08:00 触发
    ├── logger.ts           # pino 日志（开发环境 pino-pretty 彩色输出）
    ├── retry.ts            # 通用指数退避重试（默认 3 次，base 1s）
    └── state.ts            # lowdb 持久化状态：已通知任务去重 + bootstrap 标记 + 7 天自动清理
```

## 关键设计决策

### 首次运行 Bootstrap
首次运行（`state.bootstrapped === false`）时**只发管理群汇总，不发个人通知**。避免在未验证数据正确性前向大量用户推送。Bootstrap 成功后写 `bootstrapped: true`，后续运行恢复正常流水线。

### 认证刷新
- 黑湖：JWT 过期前 60 秒复用，过期后重新登录。401 拦截器被动刷新。
- 企微：access_token 过期前 5 分钟复用。errcode 40001/42001 时被动刷新。

### 去重
以 `YYYY-MM-DD:taskId` 为 key 记录已通知任务，同日同任务不重复推送。保留 7 天自动清理。

### 用户映射
`config/users.yaml` 维护黑湖姓名 → 企微 UserID 的映射。未映射用户在管理群日报中以「未映射」行警告。

## 外部 API 要点

- **黑湖认证**：`POST /api/alien/v1/user/login`，密码需 SHA3-224 哈希，返回 JWT。所有 API 请求需带 `X-AUTH` + `X-CLIENT: lite-web` 头。
- **黑湖任务查询**：`POST /api/dytin/bizDataSearch/queryTaskListBySearchCondition`，使用 `fieldQueryValues` 结构筛选。逾期判定为客户端 `expiredDayCount > 0`（服务端无直接逾期筛选器）。
- **企微消息**：`POST /cgi-bin/message/send`（个人）+ `POST /cgi-bin/appchat/send`（群聊），OAuth2 access_token 通过 `gettoken` 端点获取。

详见 `fixtures/blacklake-api-contract.md` 和 `fixtures/task-query-response.json`。

## 环境变量

复制 `.env.example` 为 `.env`，填入黑湖账号密码、企业微信应用凭证、管理群 chat_id。所有变量经 zod 校验，启动时缺失会直接退出。
