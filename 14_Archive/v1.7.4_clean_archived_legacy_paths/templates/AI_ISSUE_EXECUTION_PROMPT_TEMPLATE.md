# TPL-DEV-017 AI Issue Execution Prompt Template

**Document Code:** TPL-DEV-017  
**Version:** v1.5.9  
**Status:** Active  

---

Use this template for every Codex / Antigravity implementation issue.

```text
You are working on the repository:

optimaks-os-mvp01

Current issue:
ISSUE-XXX — <ISSUE TITLE>

Branch:
feature/issue-xxx-<short-name>

Before implementation, read these files:

- docs/01_SYSTEM_ARCHITECTURE.md
- docs/02_DATABASE_SCHEMA.md
- docs/03_PAGE_AND_WORKFLOW_MAP.md
- docs/04_DEVELOPMENT_ISSUES.md
- docs/05_DATA_ACCESS_AND_CLIENT_ISOLATION.md
- <BATCH-SPEC-DOC>
- <ISSUE-WORKPACK-DOC>

Constitution rules:
- Small Core First
- Workflow First
- One Core + Aircon Template
- Internal MVP ≠ Client Delivery Version
- Change Request before Scope Expansion
- Staging Test before Production Deploy
- Repo/workspace is the source of truth
- Do not expose secrets
- Do not use real client data
- Do not modify DB/RLS/Auth unless explicitly required
- Keep this issue scope small and reviewable

Scope:
<PASTE ISSUE SCOPE>

Do not do:
<PASTE DO-NOT-DO LIST>

Acceptance criteria:
<PASTE ACCEPTANCE CRITERIA>

Implementation rules:
1. Implement only this issue.
2. Do not modify unrelated modules.
3. Do not create future-version features.
4. Use existing components and project structure where possible.
5. Keep all client data queries scoped by current_client_id.
6. If unsure, choose the smallest safe implementation and record the assumption.
7. Do not create a code zip.
8. Keep code in this branch.

After implementation, you must create or update this file:

20_Issues/ISSUE-XXX/ISSUE-XXX_DONE.md

The DONE.md must include:

# ISSUE-XXX Done Report

## 1. What was done
Explain what was implemented.

## 2. Changed files
List all changed files.

## 3. Tests run
List commands or manual checks performed.

## 4. Acceptance criteria check
Mark each acceptance criteria as:
- Done
- Not done
- Blocked
- Not applicable

## 5. Scope check
Confirm:
- No unrelated modules were changed
- No future-version features were added
- No secrets were committed
- No real client data was used

## 6. Risks / Notes
List risks, assumptions, or known limitations.

## 7. Rollback plan
Explain how to rollback this issue if needed.

## 8. Ready to merge?
Answer:
Yes / No

At the end, reply with:
1. Summary
2. Changed files
3. Tests run
4. Location of DONE.md
5. Ready to merge: Yes / No
```
