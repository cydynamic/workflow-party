# 万花境（KaleidoSphere）

> **核心仓库与起源之地 (The Core Repository & Origin)**
> _Infinite Patterns from Simple Elements._

这是新一代 `万花境（KaleidoSphere）` 的本体仓库。万花境是一个面向
Human-in-the-loop 的 AI 工作操作层，为多 Agent、多项目和本地能力提供可持续的
工作环境、项目资产管理、上下文恢复与能力路由，而不绑定单一 Agent、工作流或供应商。

### 🌌 命名寓意

- **Sphere（境）**：一个自包含、可持续存在且有明确边界的 AI 工作环境，管理
  用户级项目资产、局部上下文、能力与可恢复状态。
- **Kaleidoscope（万花筒）**：由简单、可替换、可组合的 Skills、CLI、MCP、
  provider、项目规则与本地资产，形成适应不同任务的工作形态。

### 🧠 核心哲学

- **棱镜（Prism）**：将用户意图、项目身份、局部上下文与可用能力折射为合适的
  工作现场，而非把所有请求强推入固定流程。
- **资产化（Assetization）**：项目身份、路径、副本关系和局部上下文独立于单次
  对话存在，支持项目移动和切换 Agent 后恢复。
- **知识沉淀（Knowledge Sedimentation）**：将可复用知识关联到合适载体，不把
  短期过程噪音强行塞进项目本体。
- **人在回路（Human in the Loop）**：万花境协助组织和推进工作，但不替用户决定
  项目归类、迁移、发布或能力选择。

## 🛡️ 当前能力

### KS 入口与能力路由

`ks` 是 KS 的轻量入口。它识别用户的自然语言诉求，只将确实相关的请求路由到已安装的 KS 能力。即使 plugin 已激活，它也不会自动扫描项目、读取本地上下文或启动任何工作流。

当前 release 可路由项目资产管理、全局火花、可选版本管理、可选长期项目规则管理，以及显式复杂协同；它不替代 AFK、KFC 等交付流程 provider。

### 项目资产管理

`project-distribution-manager` 是第一个 KS 能力。其 `ks` CLI 管理用户级注册表，
支持初始化、登记工作空间、创建项目、登记既有 Git 项目、开发现场合规检查，以及全局火花的定位与受控章节追加。

```text
ks init
ks workspace add
ks workspace list
ks project create
ks project register
ks project update
ks project list
ks project check
ks spark configure
ks spark list
ks spark find
ks spark inspect
ks spark create
ks spark append-section
ks spark check
```

### 可选项目治理能力

- `version-manager`：管理经用户确认的项目版本模型，并校验已声明的版本目标。
- `project-rule-manager`：识别候选长期项目规则，仅在用户确认后沉淀。

### 显式执行协调

`execution-coordination` 只在用户明确提出、且确有复杂协同必要性时使用。它维护同一任务锚点的唯一可恢复执行单元、项目本体外的受控 `ks-coordination/` 投影，以及绑定 revision 的聊天室操作；不会自动拆分工作、创建人工子会话或替代 runtime 原生子代理能力。

```text
ks coordination open
ks coordination find
ks coordination resume
ks coordination archive
ks chat-room open
ks chat-room append
ks chat-room split
ks chat-room archive
```

`$KS_HOME` 在 macOS/Linux 默认位于 `~/.ks`，Windows 默认位于
`%USERPROFILE%\\.ks`，且只能由 CLI 读写。

### 产出

`outputs/` 是被 Git 忽略的本地构建缓存。可分发的 Agent 产物发布到各自的
marketplace 仓库。

> 不会预建或猜测 Codex、Claude、Kiro 的具体交付格式；各平台产物只在明确要
> 生成时，通过对应平台的创建能力产生。

详见[产出治理](docs/outputs.md)。

## 🌌 仓库架构

```text
KaleidoSphere
├── cli/                  ks CLI
├── skills/               KS 能力开发源
├── mcp/                  未来服务集成
├── docs/                 设计与维护文档
├── outputs/              可分发产物
└── $KS_HOME              用户级注册表与可恢复状态
```

## 🚀 开发现场

受管项目使用开发现场，将原始项目本体与 KS 局部上下文隔离：

```text
<workspace>/<project-name>-proj/
├── <project-name>/           项目本体
├── ks-context/              项目局部上下文
├── .gitignore               忽略 <project-name>/
└── .git/                    外层本地 Git
```

开发现场外层必须使用 `<project-name>-proj` 后缀。项目本体目录由登记的项目名推导，使 Git 根与远程身份保持一致。

## 🛠 开发

执行自动化测试：

```bash
npm test
```

涉及产出、安装、同步或打包时，先阅读[产出治理](docs/outputs.md)。

[English](README.md)
