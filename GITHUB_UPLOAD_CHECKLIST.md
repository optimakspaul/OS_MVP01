# GitHub Upload Checklist — Optimaks Document Library v1.5.9 Consolidated

## 1. Recommended Commit Message

```text
docs(constitution): consolidate v1.5.9 ai issue execution and change control
```

## 2. Recommended Commit Description

```text
Consolidated Optimaks Document Library v1.5.9 on top of v1.5.8.

Added:
- AI Issue Execution and DONE Report Standard
- Constitution Change Control Standard
- Constitution Change Level Decision Rule
- CURRENT_CONSTITUTION pointer
- PREP-000 environment and access preparation
- AI issue execution prompt template
- Issue DONE report template

This is a governance/process update only.
No MVP-01 product scope, DB schema, RLS, production deployment, pricing, or client delivery scope was changed.
```

## 3. Before Commit

```text
[ ] No `.env.local` included
[ ] No real secret values included
[ ] No real client data included
[ ] `01_Constitution/CURRENT_CONSTITUTION.md` exists
[ ] `docs/constitution/CURRENT_CONSTITUTION.md` exists
[ ] `templates/AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md` exists
[ ] `templates/ISSUE_DONE_REPORT_TEMPLATE.md` exists
[ ] `20_Issues/PREP-000/` exists
```

## 4. After Commit

```text
[ ] Run PREP-000 before ISSUE-001
[ ] Test the AI prompt on one low-risk issue
[ ] Confirm AI creates 20_Issues/ISSUE-XXX/ISSUE-XXX_DONE.md
[ ] Confirm founder only reviews/tests/merges
```
