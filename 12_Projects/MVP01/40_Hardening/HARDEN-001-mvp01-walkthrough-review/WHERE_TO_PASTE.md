# WHERE TO PASTE - HARDEN-001

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/
```

## Branch

Use this branch:

```text
harden/harden-001-mvp01-walkthrough-review
```

## Workpack Commit Message

```text
docs(harden-001): add mvp01 walkthrough review workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute HARDEN-001 using:
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Codex_Prompt.md

Follow the workpack exactly.
This is a walkthrough review, not a feature issue.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create new product features, migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, payment/calendar/reminder automation, or full Optimaks OS admin console.
Return final hardening status, files created, files changed, route walkthrough summary, demo readiness summary, UX friction summary, copy/scope risk summary, hardening backlog summary, validation results, forbidden-scope result, MVP02 lock confirmation, and whether founder can accept HARDEN-001.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final hardening status
2. HARDEN-001_DONE_Report.md
3. HARDEN-001_Walkthrough_Review.md
4. HARDEN-001_Demo_Script.md
5. HARDEN-001_UX_Friction_Log.md
6. HARDEN-001_Copy_and_Scope_Risk_Register.md
7. HARDEN-001_Hardening_Backlog.md
8. MVP01_CHANGE_CONTROL_LOG.md
9. MVP01_ISSUE_CHAIN_REGISTER.md if changed
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```
