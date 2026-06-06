# WHERE TO PASTE - HARDEN-002

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/
```

## Branch

Use this branch:

```text
harden/harden-002-end-customer-ui-copy-polish
```

## Workpack Commit Message

```text
docs(harden-002): add end customer ui copy polish workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute HARDEN-002 using:
12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/HARDEN-002_Codex_Prompt.md

Follow the workpack exactly.
HARDEN-002 is End Customer UI / Copy Polish.
Focus on /end-customer copy and UI clarity only.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create backend features, migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, real form submission, quote engine, booking scheduler, payment integration, reminder automation, or full customer portal.
Return final hardening status, files created, files changed, /end-customer UI/copy summary, boundary safety summary, validation results, forbidden-scope result, warnings, MVP02 lock confirmation, and whether founder can accept HARDEN-002.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final hardening status
2. HARDEN-002_DONE_Report.md
3. HARDEN-002_End_Customer_Copy_Notes.md
4. HARDEN-002_UI_Polish_Notes.md
5. HARDEN-002_Boundary_Safety_Notes.md
6. src/app/end-customer/page.tsx
7. src/app/globals.css if changed
8. MVP01_CHANGE_CONTROL_LOG.md
9. MVP01_ISSUE_CHAIN_REGISTER.md if changed
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```
