# WHERE TO PASTE - ISSUE-011

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/
```

## Branch

Use this branch:

```text
feature/issue-011-client-workspace-basic
```

## Files Included

```text
ISSUE-011_Source_Alignment_Reference.md
ISSUE-011_Workpack.md
ISSUE-011_Codex_Prompt.md
ISSUE-011_DONE_Report.md
README_ISSUE-011.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-011): add client workspace workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-011 using:
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-011 is Client Workspace Basic.
Create the basic frontend workspace interface and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, payment gateway, WhatsApp API, Optimaks OS UI, technician portal, or ISSUE-012 work.
Return final status, created files, changed files, route/UI summary, workspace flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-012 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-011_DONE_Report.md
3. ISSUE-011_Workspace_Scope_Notes.md
4. ISSUE-011_Client_Workspace_UX_Notes.md
5. ISSUE-011_Implementation_Notes.md
6. ISSUE-011_Handoff_to_Lead_Customer_Flow.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-011): add client workspace basic
```
