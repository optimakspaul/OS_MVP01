# WHERE TO PASTE - ISSUE-005

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/
```

## Branch

Use this branch:

```text
feature/issue-005-indexes-updated-at-triggers
```

## Files Included

```text
ISSUE-005_Workpack.md
ISSUE-005_Codex_Prompt.md
ISSUE-005_DONE_Report.md
README_ISSUE-005.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-005): add indexes updated-at triggers workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-005 using:
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Codex_Prompt.md

Follow the workpack exactly.
Do not start ISSUE-006.
Do not create RLS, auth, membership tables, business feature tables, Supabase client code, app feature code, Vercel setup, or real secrets.
Return final status, created files, changed files, migration summary, validation command results, secret check result, warnings, and whether ISSUE-006 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-005_DONE_Report.md
3. ISSUE-005_Index_Notes.md
4. ISSUE-005_Trigger_Notes.md
5. supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
6. MVP01_ISSUE_CHAIN_REGISTER.md
7. Codex changed files summary
8. Validation command results
9. Any warnings
```

## Completion Commit Message

```text
feat(issue-005): add indexes and updated-at triggers
```
