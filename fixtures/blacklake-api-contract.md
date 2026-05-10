# 黑湖小工单 API 契约 (Phase 0 发现)

## 1. 认证

### 登录
```
POST /api/user/v1/users/_login
Content-Type: application/json

Body:
{
  "username": "admin",
  "password": "<SHA3-224 hash of password>",
  "orgCode": "135851"
}

Response:
{
  "code": "01000000",
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9..."
  }
}
```

### Token 存储
- localStorage key: `token`
- 结构: `{"meta": {"exp": 15552000000, "time": 1778319279620, ...}, "data": "<JWT>"}`
- JWT 算法: HS512
- JWT payload: `{"userId": 3549705, "orgId": 647755, "ssoToken": "...", "environment": ""}`

### API 认证头
- **Header: `X-AUTH`** (NOT x-auth-token!)
- 值: JWT token (localStorage token.data)
- 额外必需 Header: `X-CLIENT: lite-web`
- Cookie: `acw_tc` (Cloudflare/anti-bot, 由登录时自动设置)

## 2. 任务查询 API

### 端点
```
POST /api/dytin/bizDataSearch/queryTaskListBySearchCondition
Content-Type: application/json
X-AUTH: <JWT>
X-CLIENT: lite-web
```

### 请求格式
```json
{
  "fieldQueryValues": [
    {"fieldName": "processStatus", "queryOperator": "in", "fieldValue": ["0", "10"]},
    {"fieldName": "createdAt", "queryOperator": "dynamicFilter", "fieldValue": ["dynamicCustomRange", "past", "365", "day", "current", "1", "day"]},
    {"fieldName": "taskPlanEndTime", "queryOperator": "dynamicFilter", "fieldValue": ["dynamicCustomRange", "past", "365", "day", "current", "1", "day"]}
  ],
  "page": {"pageNum": 1, "pageSize": 100},
  "orders": [{"orderBy": "projectId", "sort": "DESC"}, {"orderBy": "seq", "sort": "ASC"}]
}
```

### processStatus 枚举
| value | 含义 |
|-------|------|
| 0 | 未开始 |
| 10 | 执行中 |
| 20 | 已完成 (推测) |

### 响应格式 (关键字段)
```json
{
  "code": "01000000",
  "msg": "成功",
  "data": {
    "pageNum": 1,
    "pageSize": 100,
    "total": 94,
    "data": [
      {
        "id": 168539539,
        "orgId": 647755,
        "projectId": 28087557,
        "projectCode": "BLF-1149 返单",
        "processId": 67680,
        "processName": "供应商已发货",
        "productCode": "CP202503030002",
        "productName": "旗子",
        "processStatus": 10,
        "processStatusDisplay": "执行中",
        "expiredDayCount": 1,
        "outputObject": [
          {
            "id": 4026684,
            "name": "周细妹",
            "type": 2,
            "detail": [{"id": 4026684, "username": "18922767131", "name": "周细妹", "phone": "18922767131"}]
          },
          {
            "id": 3551227,
            "name": "王艳辉",
            "type": 2,
            "detail": [{"id": 3551227, "username": "15915723186", "name": "王艳辉", "phone": "15915723186"}]
          }
        ],
        "planAmount": 1800.0,
        "fineAmount": 0.0,
        "outputRate": 1.0,
        "processStartTime": "2026-05-07 00:00:00",
        "processEndTime": "2026-05-07 23:59:59",
        "processStartRealTime": "2026-05-07 13:02:09",
        "processEndRealTime": null,
        "projectVO": {
          "id": 28087557,
          "projectCode": "BLF-1149 返单",
          "customFieldValues": [...]
        }
      }
    ]
  }
}
```

## 3. 逾期判定逻辑

- **服务端无直接的逾期筛选器** — 逾期是客户端概念
- 查询 `processStatus IN [0, 10]`（所有非完成工序）
- 客户端过滤: `expiredDayCount > 0`（逾期天数 > 0）
- 等价判定: `processEndTime < now() AND processEndRealTime === null`

## 4. 负责人映射

- `outputObject[]` 字段包含负责人列表
- 每个对象: `{"id": <userId>, "name": "<姓名>", "type": 2, "detail": [{...}]}`
- `detail[0].phone` 为手机号
- 一个工序可有多个负责人
- 通过 `name` 字段在 users.yaml 中查找企微 UserID

## 5. 已验证的 curl 命令

```bash
JWT="<token_from_localStorage.token.data>"

curl -s -X POST 'https://liteweb.blacklake.cn/api/dytin/bizDataSearch/queryTaskListBySearchCondition' \
  -H 'Content-Type: application/json' \
  -H "X-AUTH: $JWT" \
  -H 'X-CLIENT: lite-web' \
  -d '{
    "fieldQueryValues": [
      {"fieldName":"processStatus","queryOperator":"in","fieldValue":["0","10"]},
      {"fieldName":"createdAt","queryOperator":"dynamicFilter","fieldValue":["dynamicCustomRange","past","365","day","current","1","day"]},
      {"fieldName":"taskPlanEndTime","queryOperator":"dynamicFilter","fieldValue":["dynamicCustomRange","past","365","day","current","1","day"]}
    ],
    "page":{"pageNum":1,"pageSize":100},
    "orders":[{"orderBy":"projectId","sort":"DESC"},{"orderBy":"seq","sort":"ASC"}]
  }'
```
