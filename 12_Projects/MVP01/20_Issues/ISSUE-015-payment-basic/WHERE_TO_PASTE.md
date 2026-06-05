# WHERE TO PASTE - ISSUE-015

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/
```

## Branch

Use this branch:

```text
feature/issue-015-payment-basic
```

## Files Included

```text
ISSUE-015_Source_Alignment_Reference.md
ISSUE-015_Workpack.md
ISSUE-015_Codex_Prompt.md
ISSUE-015_DONE_Report.md
README_ISSUE-015.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-015): add payment basic workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-015 using:
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-015 is Payment Basic.
Enhance the frontend workspace flow and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real payment gateway, PayNow API / QR generation, Stripe/HitPay integration, invoice generation, receipt generation, accounting integration, GST compliance engine, reminder implementation, Optimaks OS UI, technician portal, or ISSUE-016 work.
Return final status, created files, changed files, route/UI summary, Payment flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-016 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-015_DONE_Report.md
3. ISSUE-015_Payment_Scope_Notes.md
4. ISSUE-015_UX_Flow_Notes.md
5. ISSUE-015_Implementation_Notes.md
6. ISSUE-015_Handoff_to_Admin_Setting_Basic.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-015): add payment basic
```
