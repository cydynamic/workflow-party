# KS CLI 边界说明

KS CLI 是供 Agent 进行精确状态读写和校验的工具层，不接收自然语言，也不承担意图分类。

`ks` 统一入口默认不调用 CLI。只有项目身份已成为已命中专项的必要输入时，入口才可进行一次最小定位；其余 CLI 使用、运行时可用性检查、随包 runtime 获取和复检，均由已命中的专项 skill 按自己的 runtime contract 处理。

这类专项 runtime bootstrap 只补足该专项的运行条件，不代表 KS 已支持安装、更新、卸载、doctor 或 plugin repair。当前没有 `runtime-helper` 时，`ks` 入口必须对 KS self-management 诚实降级。

任何入口或专项都不得绕过 CLI 直接读写 `$KS_HOME` 或 `~/.ks`。
