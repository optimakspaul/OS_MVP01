# WHERE TO PASTE - ISSUE-003

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/
```

## Branch

Use this branch:

```text
feature/issue-003-nextjs-app-foundation
```

## Files Included

```text
ISSUE-003_Workpack.md
ISSUE-003_Codex_Prompt.md
ISSUE-003_DONE_Report.md
README_ISSUE-003.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-003): add nextjs app foundation workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-003 using:
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Codex_Prompt.md

Follow the workpack exactly.
Do not start ISSUE-004.
Do not create Supabase client code.
Do not create database schema, migrations, auth, RLS, Vercel setup, or product features.
Do not commit real secrets.
Return final status, created files, changed files, validation command results, secret check result, warnings, and whether ISSUE-004 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-003_DONE_Report.md
3. ISSUE-003_App_Foundation_Notes.md
4. ISSUE-003_Validation_Notes.md
5. MVP01_ISSUE_CHAIN_REGISTER.md
6. Codex changed files summary
7. Validation command results
8. Any warnings
```

## Completion Commit Message

```text
feat(issue-003): initialize nextjs app foundation
```
