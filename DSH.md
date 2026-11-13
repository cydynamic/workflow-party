# Workflow Party 与 DeepSeek Harness

Workflow Party 的 DSH 索引提供两个可独立安装的插件。

- KaleidoSphere 提供万花境的六个技能、原生协调派发工具和同版本 `ks` CLI tarball。
- KFC Personal Plugin 通过 `/kfc-personal` 提供个人开发工作流，状态保存在项目的 `.kfc/` 和本机个人配置中。

## 使用

支持 DSH `0.2.2-rc.1` 和 `0.2.2-rc.2`。通过 Node.js 运行 DSH 时，需要 24.9 以上。

在 DSH 插件安装界面导入发布后的 Workflow Party Git 仓库，或执行
`dsh plugin --profile web add github:cydynamic/workflow-party`。
根目录的 `package.json` 声明 DSH bundle，安装后会发现随包技能并注册
绑定 DSH 本地 `spawn` 的 `ks_subagent`。选择根 bundle 或独立 KS bundle 其中一个安装。

也可在 Plugins 的 Experimental plugins 中开启 Custom plugin indexes，进入
Discover → Add index source，填写发布后的 `dsh/index.json` HTTPS 地址，
选择 KaleidoSphere 或 KFC Personal Plugin 并确认安装。索引绑定包含产物的完整 Git 提交。

通过 `/ks` 使用万花境。首次执行依赖 CLI 的任务时，随包检查器检查 `ks` 版本，
必要时安装随包 tarball，安装后再次检查。执行协调遵循原有显式协同和复杂性条件，
并优先使用 DSH 本地子代理。启动和运行证据来自 DSH 原生工具。

Installed 中的 `kaleidosphere-subagent` 组件提供 `ks_subagent`，用于将已授权的独立工作
派给 DSH 本地子代理。关闭组件后仍可使用 KS 的技能和 CLI。协调时可以使用会话提供的
原生子代理工具。DSH `0.2.2-rc.2` 的 Agent Teams 使用同一套具名子代理工具。
`0.2.2-rc.1` 的实验性 Agent Teams 会话可使用 `spawn_teammate` 和配套的 Team 工具。

## 构建与索引

在 KS 源码仓执行以下命令，`<marketplace-root>` 为 Workflow Party Git 根目录。

```sh
npm run release:marketplace -- --marketplace <marketplace-root> --dsh
```

产物包含根目录的 `package.json`、`cordis.patch.yml`，以及 `dsh/kaleidosphere/`。
先检查并提交 bundle，再用包含该产物的完整提交生成索引。

```sh
npm run release:marketplace -- --marketplace <marketplace-root> --dsh-index <full-commit-sha>
```

KFC 由个人版源码仓的 `scripts/release-marketplace.js <marketplace-root>` 生成。
提交产物后，以上索引命令追加 `--dsh-plugin kfc-plugin` 即可更新对应条目。

索引生成只读取已提交的产物，保留其他插件条目，并拒绝无效提交或同版本更换来源。
再提交索引并推送这两个提交后，远程导入地址才包含新产物。

原生协议依据 DSH 官方的 bundle、skill provider、subagent 和插件索引文档。
DSH 升级后需重新执行兼容性验证。
