---
name: project-distribution-manager
description: 管理本地项目工作空间、开发现场、项目身份、路径映射和项目归类。适用于创建、登记、查找、移动或接手需要持续开发的本地项目。
---

# Project Distribution Manager

此能力是 KaleidoSphere 的内部能力，也可以被直接调用。它通过 `ks` CLI 管理项目资产，不直接读写 `$KS_HOME`。

## 体系定位

KaleidoSphere 是面向 Human-in-the-loop 的 AI 工作操作层。它的目标是为多 Agent、
多项目和本地能力提供可持续的工作现场、上下文恢复与能力路由。

`project-distribution-manager` 是 KS 当前第一项已实现能力，用于管理本地项目资产；
它不是 KS 的完整定义，也不代表其他规划中能力已经可用。介绍 KS 时，先说明这一
目标，再明确当前可用能力仅包括项目资产管理。

## KS CLI 前置条件

执行任何项目资产操作前，先运行 `ks --version`。若命令不可用或版本不符合当前
plugin 随附版本，读取同目录的 [KS CLI 安装说明](references/ks-cli.md)，使用该
plugin 内随附的 npm tarball 安装后再次检查。安装或复检失败时停止，不得改为直接
读写 `$KS_HOME`。

## 处理原则

- 先询问用户项目要进入哪个空间：`work`、`personal`、`tooling`、`playground` 或 `temporary-proj`。
- 只有需要持续开发、修改或维护的项目才纳入 KaleidoSphere 管理。
- 仅下载、研究、打包或临时查看的材料应由用户决定是否放入 `unmanaged`，不得自行登记为项目。
- 项目本体必须是 Git 仓库。ZIP 或非 Git 材料只有在用户明确要求转换为受管项目后，才能通过 clone 或初始化 Git 进入受管空间。
- 项目移动、重新归类和 adoption 必须由用户显式提出，不能根据路径或内容自行执行。
- `repo/` 是项目本体；`ks-context/` 是项目本体之外的局部上下文。不得向 `repo/` 写入 KS 专用文件。
- 本地项目创建可不提供 Git 身份；CLI 在 `ks-context/project.json` 中记录 `gitIdentity: null`，并使用固定的本地专用提交作者完成内外 Git 初始化，不读取全局 Git 配置。
- 只有配置远程、推送或需要远程身份校验时，才询问用户 Git 姓名和邮箱；两项必须同时显式传入，CLI 才将非敏感身份元数据写入 `ks-context/project.json` 并用于后续本地提交。

## 当前 CLI 接口

```text
ks init
ks workspace add --id <id> --path <path>
ks workspace list
ks project create --workspace <id> --name <kebab-case-name> [--git-name <name> --git-email <email>]
ks project register --workspace <id> --name <kebab-case-name> --path <path> --layout direct
ks project update --id <project-id> [--name <kebab-case-name>] [--workspace <id>] [--path <existing-git-repository>]
ks project list
```

`project register` 只接管用户明确指定的、位于受管工作空间中的既有 Git 仓库；
它不移动文件、不写入项目本体，也不支持把 `unmanaged/` 中的内容直接标为受管项目。

`project update` 仅修正已有登记，不移动项目文件；必须用 `--id` 指定登记项。指定的新路径
必须是目标工作空间内已存在的 Git 仓库，避免登记与实际项目脱节。

后续接口会覆盖项目导入、复制、移动、火花关联和知识关联。
