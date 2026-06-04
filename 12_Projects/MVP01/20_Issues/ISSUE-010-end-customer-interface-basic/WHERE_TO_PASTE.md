# WHERE TO PASTE - ISSUE-010

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/
```

## Branch

Use this branch:

```text
feature/issue-010-end-customer-interface-basic
```

## Files Included

```text
ISSUE-010_Source_Alignment_Reference.md
ISSUE-010_Workpack.md
ISSUE-010_Codex_Prompt.md
ISSUE-010_DONE_Report.md
README_ISSUE-010.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-010): add end customer interface workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-010 using:
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-010 is End Customer Interface Basic.
Create the basic frontend interface and required notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, payment gateway, WhatsApp API, Client Workspace UI, Optimaks OS UI, or ISSUE-011 work.
Return final status, created files, changed files, route/UI summary, UX flow summary, validation results, forbidden-scope result, warnings, and whether ISSUE-011 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-010_DONE_Report.md
3. ISSUE-010_Interface_Scope_Notes.md
4. ISSUE-010_UX_Flow_Notes.md
5. ISSUE-010_Implementation_Notes.md
6. ISSUE-010_Handoff_to_Client_Workspace.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-010): add end customer interface basic
```
