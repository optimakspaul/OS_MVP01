# GitHub Documentation SOP

| Field | Value |
|---|---|
| Document Code | STD-DEV-003 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define GitHub as the official task and documentation system. |

---


## GitHub Role

GitHub is the official place for:

1. Source code
2. Markdown documentation
3. GitHub Issues
4. Change Request tracking
5. Branch / commit / pull request history
6. Version comparison
7. Release notes

## GitHub Issue Workflow

GitHub Issue is the formal task source. Development should not start from scattered chat messages alone.

### Issue Title Format

```text
[CR] Add Customer Health Report Generator
[BUG] Mobile dashboard layout broken
[DOC] Update Change Request Workflow
[UI] Improve Quote Builder mobile layout
[SEC] Review Supabase RLS for customer table
[OPS] Add staging deployment checklist
```

### Recommended Labels

```text
type:change-request
type:bug
type:doc
type:ui
type:security
priority:high
priority:medium
priority:low
module:crm
module:quotation
module:invoice
module:booking
module:report
module:auth
module:dashboard
module:documentation
status:pending-review
status:ready-for-codex
status:in-progress
status:qa
status:done
```

### Minimum Issue Content

1. Background / purpose
2. Functional requirements
3. Impact scope
4. Acceptance criteria
5. Priority
6. Codex / AI development prompt
7. Test result and screenshots, if any

## Issue Closure Result

Every issue should end with one of:

- Done
- Won't Do
- Deferred
- Needs More Info
- Duplicate
