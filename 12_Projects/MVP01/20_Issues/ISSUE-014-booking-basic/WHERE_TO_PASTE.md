# WHERE TO PASTE - ISSUE-014

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/
```

## Branch

Use this branch:

```text
feature/issue-014-booking-basic
```

## Files Included

```text
ISSUE-014_Source_Alignment_Reference.md
ISSUE-014_Workpack.md
ISSUE-014_Codex_Prompt.md
ISSUE-014_DONE_Report.md
README_ISSUE-014.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-014): add booking basic workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-014 using:
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-014 is Booking Basic.
Enhance the frontend workspace flow and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real scheduler engine, Google Calendar integration, Calendly/Cal.com integration, technician assignment, payment implementation, reminder implementation, Optimaks OS UI, technician portal, or ISSUE-015 work.
Return final status, created files, changed files, route/UI summary, Booking flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-015 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-014_DONE_Report.md
3. ISSUE-014_Booking_Scope_Notes.md
4. ISSUE-014_UX_Flow_Notes.md
5. ISSUE-014_Implementation_Notes.md
6. ISSUE-014_Handoff_to_Payment_Basic.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-014): add booking basic
```
