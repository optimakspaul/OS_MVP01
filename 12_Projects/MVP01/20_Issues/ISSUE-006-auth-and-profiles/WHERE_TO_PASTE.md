# WHERE TO PASTE - ISSUE-006

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/
```

## Branch

Use this branch:

```text
feature/issue-006-auth-and-profiles
```

## Files Included

```text
ISSUE-006_Workpack.md
ISSUE-006_Codex_Prompt.md
ISSUE-006_DONE_Report.md
README_ISSUE-006.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-006): add auth profiles workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-006 using:
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Codex_Prompt.md

Follow the workpack exactly.
Do not start ISSUE-007.
Do not create RLS, RLS policies, workspace membership tables, customer portal tables, business feature tables, Supabase client code, login UI, Vercel setup, or real secrets.
Return final status, created files, changed files, migration summary, validation command results, secret check result, warnings, and whether ISSUE-007 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-006_DONE_Report.md
3. ISSUE-006_Profile_Model_Notes.md
4. ISSUE-006_Auth_Boundary_Notes.md
5. supabase/migrations/0003_create_auth_profiles.sql
6. MVP01_ISSUE_CHAIN_REGISTER.md
7. Codex changed files summary
8. Validation command results
9. Any warnings
```

## Completion Commit Message

```text
feat(issue-006): add auth profiles foundation
```
