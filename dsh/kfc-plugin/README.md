# KFC Personal Plugin

KFC Personal Plugin routes personal development work through local requirement, design, implementation, verification, acceptance, and feedback stages.

- package source: `kfc-plugin/`
- workflow state: `<project>/.kfc/`
- personal registry: `KFC_CONFIG_HOME` or `~/.config/kfc-plugin/`
- entry skill: `kfc/SKILL.md`
- plugin manifest: `plugin.json`

The package contains no network reporting, company workflow integration, automatic dependency installation, or company quality gate. Package-level worker removal uses the preview and plan hash flow in `kfc-flow-router/scripts/package-workers.js`.

Run `node scripts/release-marketplace.js <workflow-party-git-root>` to build the Codex, Claude Code, Kiro and DSH packages. The installed skill locates the bundled Node script from its own directory.
