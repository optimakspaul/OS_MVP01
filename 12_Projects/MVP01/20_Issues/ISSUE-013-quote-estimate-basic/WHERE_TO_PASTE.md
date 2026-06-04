# WHERE TO PASTE - ISSUE-013

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/
```

## Branch

Use this branch:

```text
feature/issue-013-quote-estimate-basic
```

## Files Included

```text
ISSUE-013_Source_Alignment_Reference.md
ISSUE-013_Workpack.md
ISSUE-013_Codex_Prompt.md
ISSUE-013_DONE_Report.md
README_ISSUE-013.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-013): add quote estimate basic workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-013 using:
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-013 is Quote Estimate Basic.
Enhance the frontend workspace flow and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real quote engine, invoice generation, payment gateway, PDF generation, booking implementation, Optimaks OS UI, technician portal, or ISSUE-014 work.
Return final status, created files, changed files, route/UI summary, Quote Estimate flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-014 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-013_DONE_Report.md
3. ISSUE-013_Quote_Estimate_Scope_Notes.md
4. ISSUE-013_UX_Flow_Notes.md
5. ISSUE-013_Implementation_Notes.md
6. ISSUE-013_Handoff_to_Booking_Basic.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-013): add quote estimate basic
```
