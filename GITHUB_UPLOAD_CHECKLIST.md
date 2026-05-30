# GitHub Upload Checklist — Optimaks Document Library v1.7.9.4 Clean Logical Patch

## 1. Recommended Commit Message

```text
docs(constitution): clean v1.7.9.4 linkage paths and future references
```

## 2. Recommended Commit Description

```text
Cleaned Optimaks Document Library v1.7.9.4 linkage and reference consistency.

Updated:
- Removed obsolete v1.5.9 upload checklist references.
- Standardized canonical Constitution and template paths.
- Clarified project baseline versus issue execution record locations.
- Added future-reference placeholders for harness/test/product review files.
- Clarified Core PDF Generation placement under ISSUE-013.
- Fixed minor template and document numbering issues.

Not changed:
- ISSUE-000 status was intentionally not updated.
- MVP01 issue chain execution status remains available for a fresh ISSUE-000 rerun.
- No application code, DB schema, RLS, production deployment, pricing, or client delivery scope was changed.
```

## 3. Before Commit

```text
[ ] No `.env.local` included
[ ] No real secret values included
[ ] No real client data included
[ ] `AGENTS.md` exists
[ ] `README.md` exists
[ ] `01_Constitution/CURRENT_CONSTITUTION.md` exists
[ ] `01_Constitution/ACTIVE_STANDARDS_INDEX.md` exists
[ ] `03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md` exists
[ ] `03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md` exists
[ ] `09_Templates/TPL-DEV-029_Issue_Workpack_Template.md` exists
[ ] `09_Templates/TPL-DEV-031_AI_Issue_Execution_Prompt_Template.md` exists
[ ] `09_Templates/TPL-DEV-032_Issue_DONE_Report_Template.md` exists
[ ] `12_Projects/MVP01/README_MVP01.md` exists
[ ] `12_Projects/MVP01/MVP01_SCOPE_BASELINE.md` exists
[ ] `12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md` exists
[ ] `12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md` exists
[ ] `12_Projects/MVP01/MVP01_CHANGE_CONTROL_LOG.md` exists
[ ] `20_Issues/PREP-000/` exists
```

## 4. Canonical Path Rules

```text
Constitution canonical source:
01_Constitution/CURRENT_CONSTITUTION.md

Project baseline source of truth:
12_Projects/[PROJECT]/

Issue execution records:
20_Issues/[PROJECT]/ISSUE-XXX-short-name/

Legacy mirrors such as docs/constitution/ or templates/ are not canonical unless explicitly created as compatibility mirrors.
```

## 5. After Commit

```text
[ ] Re-run ISSUE-000 from scratch if the founder wants a fresh repository / constitution verification
[ ] Confirm AI creates issue records under 20_Issues/[PROJECT]/ISSUE-XXX-short-name/
[ ] Confirm AI reads project baseline from 12_Projects/[PROJECT]/
[ ] Confirm founder only reviews/tests/merges
```
