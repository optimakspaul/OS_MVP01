# WHERE TO PASTE - ISSUE-004

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/
```

## Branch

Use this branch:

```text
feature/issue-004-supabase-p0-tables
```

## Files Included

```text
ISSUE-004_Workpack.md
ISSUE-004_Codex_Prompt.md
ISSUE-004_DONE_Report.md
README_ISSUE-004.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-004): add supabase p0 tables workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-004 using:
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Codex_Prompt.md

Follow the workpack exactly.
Do not start ISSUE-005.
Do not create RLS, auth, updated_at triggers, business feature tables, Supabase client code, app feature code, Vercel setup, or real secrets.
Return final status, created files, changed files, migration summary, validation command results, secret check result, warnings, and whether ISSUE-005 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-004_DONE_Report.md
3. ISSUE-004_DB_Table_Notes.md
4. ISSUE-004_Migration_Notes.md
5. supabase/migrations/0001_create_p0_core_tables.sql
6. MVP01_ISSUE_CHAIN_REGISTER.md
7. Codex changed files summary
8. Validation command results
9. Any warnings
```

## Completion Commit Message

```text
feat(issue-004): add supabase p0 core tables
```
