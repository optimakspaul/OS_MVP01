# TPL-DEV-015 Issue Starter Pack Governance Insert

Copy this section into every issue starter pack.

---

## Governance Reference

This issue must follow:

- `AGENTS.md`
- `README.md`
- `02_Foundation/FND-002_Development_Constitution_Overview.md`
- `03_Development_Standard/STD-DEV-024_AI_Collaboration_GitHub_Execution_Governance.md`
- `03_Development_Standard/STD-DEV-027_Repo_Workspace_and_AI_Execution_Boundary_Standard.md`
- `03_Development_Standard/STD-DEV-028_Interruption_Recovery_and_WIP_Preservation_Standard.md`
- `10_Checklists/CHK-DEV-012_Repo_Workspace_Execution_Checklist.md`
- `10_Checklists/CHK-DEV-013_Interruption_Recovery_Checklist.md`

If this issue conflicts with the constitution, stop and report the conflict.

---

## MVP Reference

This issue belongs to:

- `12_Projects/[PROJECT_NAME]/`
- `[PROJECT README / SCOPE / ISSUE MAP]`

---

## Dependency Map

This issue depends on:

- ISSUE-___
- ISSUE-___

Existing files to inspect:

- `src/...`
- `docs/...`

---

## Allowed Files to Modify

- `src/...`
- `docs/...`

---

## Do Not Modify

Unless explicitly required by this issue, do not modify:

- `docs/constitution/`
- `supabase/migrations/`
- RLS policies
- Auth logic
- Tenant isolation logic
- Production deployment settings
- Unrelated routes/components

---

## Branch Convention

Recommended branch:

```text
feature/issue-XXX-short-description
```

---

## Interruption and Recovery Reference

This issue must follow:

- `03_Development_Standard/STD-DEV-028_Interruption_Recovery_and_WIP_Preservation_Standard.md`

If implementation is interrupted, update:

```text
20_Issues/ISSUE-XXX/ISSUE-XXX_PROGRESS_LOG.md
```

---

## Recovery Rule

If work resumes later or switches tools, the next tool must:

1. Inspect the current branch
2. Inspect `git status`
3. Inspect the latest commit
4. Read this starter pack
5. Read `20_Issues/ISSUE-XXX/ISSUE-XXX_PROGRESS_LOG.md`
6. Continue only unfinished work
7. Do not restart the issue from scratch
