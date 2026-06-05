# WHERE TO PASTE - ISSUE-016

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/
```

## Branch

Use this branch:

```text
feature/issue-016-admin-setting-basic
```

## Files Included

```text
ISSUE-016_Source_Alignment_Reference.md
ISSUE-016_Workpack.md
ISSUE-016_Codex_Prompt.md
ISSUE-016_DONE_Report.md
README_ISSUE-016.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-016): add admin setting basic workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-016 using:
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-016 is Admin Setting Basic.
Enhance the frontend workspace flow and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real tenant settings, GST compliance engine, PayNow QR generation/upload, payment gateway settings, reminder automation, report generation, Optimaks OS UI, technician portal, or ISSUE-017 work.
Return final status, created files, changed files, route/UI summary, Admin Setting flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-017 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-016_DONE_Report.md
3. ISSUE-016_Admin_Setting_Scope_Notes.md
4. ISSUE-016_UX_Flow_Notes.md
5. ISSUE-016_Implementation_Notes.md
6. ISSUE-016_Handoff_to_Reminder_Report.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-016): add admin setting basic
```
