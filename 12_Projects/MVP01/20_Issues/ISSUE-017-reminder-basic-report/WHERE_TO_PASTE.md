# WHERE TO PASTE - ISSUE-017

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/
```

## Branch

Use this branch:

```text
feature/issue-017-reminder-basic-report
```

## Files Included

```text
ISSUE-017_Source_Alignment_Reference.md
ISSUE-017_Workpack.md
ISSUE-017_Codex_Prompt.md
ISSUE-017_DONE_Report.md
README_ISSUE-017.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-017): add reminder basic report workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-017 using:
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-017 is Reminder + Basic Report.
Enhance the frontend workspace flow and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real reminder automation, scheduled jobs, WhatsApp API, email automation, SMS integration, report generation engine, exports, analytics database, Optimaks OS full admin console, technician portal, or ISSUE-018 work.
Return final status, created files, changed files, route/UI summary, Reminder + Basic Report flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-018 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-017_DONE_Report.md
3. ISSUE-017_Reminder_Report_Scope_Notes.md
4. ISSUE-017_UX_Flow_Notes.md
5. ISSUE-017_Implementation_Notes.md
6. ISSUE-017_Handoff_to_Demo_Release.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-017): add reminder basic report
```
