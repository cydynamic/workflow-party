# KaleidoSphere (万花境)

> **The Core Repository & Origin.**
> _Infinite Patterns from Simple Elements._

This is the core repository of the next generation of **KaleidoSphere**.
KaleidoSphere is a Human-in-the-loop AI work operating layer. It provides a
durable work environment, project asset management, context recovery, and
capability routing without binding users to one Agent, workflow, or provider.

### 🌌 Naming

- **Sphere**: A bounded and durable AI work environment for user-level project
  assets, local context, capabilities, and recoverable state.
- **Kaleidoscope**: Simple, replaceable, composable units such as skills, CLI,
  MCP, providers, project rules, and local assets form adaptive work patterns.

### 🧠 Core Philosophy

- **Prism**: Refract user intent, project identity, local context, and available
  capabilities into an appropriate work environment rather than forcing every
  request through one fixed workflow.
- **Assetization**: Project identity, paths, replica relationships, and local
  context outlive a single conversation and support Agent switching.
- **Knowledge Sedimentation**: Associate reusable knowledge with suitable
  carriers without forcing transient process noise into project repositories.
- **Human in the Loop**: KaleidoSphere assists organization and delivery; it
  does not decide project classification, migration, publication, or capability
  selection on the user's behalf.

## 🛡️ Current Capabilities

### KS Entry And Capability Routing

`ks` is the lightweight KS entry. It recognizes the user's natural-language
request and routes only relevant requests to an installed KS capability. It
does not automatically scan a project, load local context, or start a workflow
merely because the plugin is active.

This release routes to project asset management, global sparks, optional version
management, optional long-term project-rule management, and explicit complex
execution coordination. It does not replace delivery workflow providers such as
AFK or KFC.

### Project Asset Management

`project-distribution-manager` is the first KS capability. Its `ks` CLI owns
the user-level registry and supports workspace initialization, workspace
registration, project creation, existing Git-project registration, worksite
compliance checks, and global spark discovery and controlled section appends.

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

### Optional Project Governance

- `version-manager` manages a user-confirmed project version model and checks
  declared version targets.
- `project-rule-manager` identifies candidate long-term project rules and
  persists them only after user confirmation.

### Explicit Execution Coordination

`execution-coordination` is available only for a user-requested, genuinely
complex collaboration. It maintains a single recoverable execution unit per
task anchor, controlled external `ks-coordination/` projections, and revision-
bound room operations. It does not automatically split work, create manual
sub-sessions, or replace a runtime's native sub-agent capability.

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

`$KS_HOME` defaults to `~/.ks` on macOS and Linux, and `%USERPROFILE%\\.ks`
on Windows. Only the CLI may read or write it.

### Outputs

`outputs/` is a Git-ignored local build cache. Distributable Agent artifacts
are published to their dedicated marketplace repository.

> Platform artifacts are never prebuilt or guessed. They are created only when
> explicitly requested, through the target Agent's own plugin or Power creation
> capability.

See [Output Governance](docs/outputs.md).

## 🌌 Repository Architecture

```text
KaleidoSphere
├── cli/                  ks CLI
├── skills/               KS source capabilities
├── mcp/                  Future service integrations
├── docs/                 Design and maintenance documentation
├── outputs/              Distributable artifacts
└── $KS_HOME              User-level registry and recoverable state
```

## 🚀 Development Workspace

Managed projects use a development worksite that keeps the original repository
and KS-specific local context separate:

```text
<workspace>/<project-name>-proj/
├── <project-name>/           Original project repository
├── ks-context/              Local project context
├── .gitignore               Ignores <project-name>/
└── .git/                    Local envelope history
```

The worksite root must use the `<project-name>-proj` suffix. The project
repository directory is derived from the registered project name, so its Git
root and remote naturally keep the same identity.

## 🛠 Development

Run the automated tests:

```bash
npm test
```

For output, installation, synchronization, or packaging work, read
[Output Governance](docs/outputs.md) first.

[中文文档](README_CN.md)
