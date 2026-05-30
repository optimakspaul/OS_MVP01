# TPL-DEV-046 AGENTS.md Project Baseline Governance Insert

**Purpose:** Insert this generic rule into `AGENTS.md`. This rule applies to all MVPs and projects, not only MVP01.

---

```markdown
## Project Baseline Governance Rule

For any MVP or project-related task, AI agents must first identify the active project.

After identifying the active project, AI agents must read that project's baseline contract before planning, workpack generation, implementation, or review.

Required project baseline files:

1. `README_[PROJECT].md`
2. `[PROJECT]_SCOPE_BASELINE.md`
3. `[PROJECT]_PHASE_AND_ISSUE_BASELINE.md`
4. `[PROJECT]_ISSUE_CHAIN_REGISTER.md`
5. `[PROJECT]_CHANGE_CONTROL_LOG.md`

Default project path pattern:

```text
12_Projects/[PROJECT]/
```

If a repository uses a different project folder number, use the active project folder defined by the repo index.

AI must not change project scope, phase order, issue order, issue dependency, reserved feature status, or issue split / merge decisions unless the task explicitly invokes the project change control process.

If a request conflicts with the active project baseline, AI must stop and report:

- active project
- conflicting baseline file
- affected phase / issue / scope item
- reason for conflict
- recommended placement decision
- required change control entry

AI must not convert a project-specific decision into a Constitution rule. The Constitution defines generic governance only. Project details must remain inside the project folder.
```
