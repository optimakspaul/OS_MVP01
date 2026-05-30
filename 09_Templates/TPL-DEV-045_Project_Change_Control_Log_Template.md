# TPL-DEV-045 Project Change Control Log Template

**Purpose:** Generic change control log template for any MVP or project.

---

```markdown
# [PROJECT]_CHANGE_CONTROL_LOG.md

## 1. Purpose

This log records all changes to project scope, phase baseline, issue baseline, issue chain, reserved feature status, and project execution baseline.

## 2. Change Control Log

| Change ID | Date | Request | Request Type | Affected Project / Phase / Issue | Impact Review | Decision | Status | Files Updated | Follow-up Required |
|---|---|---|---|---|---|---|---|---|---|
| CR-[PROJECT]-001 | YYYY-MM-DD |  |  |  |  | Proposed / Approved / Rejected / Deferred | Open / Closed |  |  |

## 3. Request Types

Use one of:

```text
Scope Clarification
Scope Expansion
Scope Reduction
Issue Split
Issue Merge
New Issue
New Phase
Phase Reorder
Issue Reorder
Reserved Feature Unlock
Move to Next MVP
Reject / Not Aligned
Constitution / Standard Change
```

## 4. Decision Rule

No baseline file may be updated until the change control entry is marked Approved.

## 5. AI Rule

If AI detects a conflict with the project baseline, it must propose a change control entry instead of modifying the baseline directly.
```
