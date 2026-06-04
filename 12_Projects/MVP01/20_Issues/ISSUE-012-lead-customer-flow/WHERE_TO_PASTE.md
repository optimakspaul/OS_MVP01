# WHERE TO PASTE - ISSUE-012

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/
```

## Branch

Use this branch:

```text
feature/issue-012-lead-customer-flow
```

## Files Included

```text
ISSUE-012_Source_Alignment_Reference.md
ISSUE-012_Workpack.md
ISSUE-012_Codex_Prompt.md
ISSUE-012_DONE_Report.md
README_ISSUE-012.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-012): add lead customer flow workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-012 using:
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-012 is Lead / Customer Flow.
Enhance the frontend workspace flow and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, quote engine, booking implementation, payment implementation, reminder implementation, Optimaks OS UI, technician portal, or ISSUE-013 work.
Return final status, created files, changed files, route/UI summary, Lead/Customer flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-013 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-012_DONE_Report.md
3. ISSUE-012_Lead_Customer_Scope_Notes.md
4. ISSUE-012_UX_Flow_Notes.md
5. ISSUE-012_Implementation_Notes.md
6. ISSUE-012_Handoff_to_Quote_Estimate.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-012): add lead customer flow
```
