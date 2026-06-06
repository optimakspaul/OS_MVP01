# WHERE TO PASTE - HARDEN-003

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/
```

## Branch

Use this branch:

```text
harden/harden-003-workspace-dashboard-polish
```

## Workpack Commit Message

```text
docs(harden-003): add workspace dashboard polish workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute HARDEN-003 using:
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_Codex_Prompt.md

Follow the workpack exactly.
HARDEN-003 is Workspace Dashboard Polish.
Focus on /workspace dashboard flow and copy clarity only.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create backend features, migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, real lead/customer persistence, quote engine, booking scheduler, payment integration, reminder automation, report generation, full client portal, or full Optimaks OS admin console.
Return final hardening status, files created, files changed, /workspace UI/flow/copy summary, boundary safety summary, validation results, forbidden-scope result, warnings, MVP02 lock confirmation, and whether founder can accept HARDEN-003.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final hardening status
2. HARDEN-003_DONE_Report.md
3. HARDEN-003_Workspace_Flow_Notes.md
4. HARDEN-003_UI_Polish_Notes.md
5. HARDEN-003_Boundary_Safety_Notes.md
6. src/app/workspace/page.tsx
7. src/app/globals.css if changed
8. MVP01_CHANGE_CONTROL_LOG.md
9. MVP01_ISSUE_CHAIN_REGISTER.md if changed
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```
