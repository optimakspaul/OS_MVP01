# TPL-DEV-044 Project Issue Chain Register Template

**Purpose:** Generic issue chain register template for any MVP or project.

---

```markdown
# [PROJECT]_ISSUE_CHAIN_REGISTER.md

## 1. Purpose

This register tracks issue sequence, dependency, handoff, validation status, and completion evidence for [PROJECT].

## 2. Issue Chain Register

| Issue | Phase | Title | Status | Depends On | Required Previous Outputs | This Issue Outputs | Next Issue Handoff | Evidence / Link | Warnings / Risks |
|---|---|---|---|---|---|---|---|---|---|
| ISSUE-000 | Phase 0 |  | Pending | None | None |  |  |  |  |
| ISSUE-001 | Phase 0 |  | Pending | ISSUE-000 |  |  |  |  |  |

## 3. Status Values

Use only:

```text
Pending
In Progress
Blocked
PASS
PASS WITH WARNINGS
FAIL
Accepted
Archived
```

## 4. Dependency Rule

No issue may begin implementation until its required previous outputs are available or explicitly waived through change control.

## 5. Handoff Rule

Every completed issue must state what the next issue should read, reuse, or avoid.
```
