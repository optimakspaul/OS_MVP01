# WHERE TO PASTE - HARDEN-004

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/
```

## Branch

Use this branch:

```text
harden/harden-004-optimaks-os-pitch-pack-polish
```

## Workpack Commit Message

```text
docs(harden-004): add optimaks os pitch pack polish workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute HARDEN-004 using:
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Codex_Prompt.md

Follow the workpack exactly.
HARDEN-004 is Optimaks OS + Pitch Pack Polish.
Focus on /optimaks-os UI/copy and pitch pack documentation only.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create backend features, migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, real Optimaks OS admin console, client backend, tenant provisioning, billing/subscription management, deployment automation, or module entitlement logic.
Return final hardening status, files created, files changed, /optimaks-os UI/copy summary, pitch pack summary, demo talk track summary, boundary safety summary, validation results, forbidden-scope result, warnings, MVP02 lock confirmation, and whether founder can accept HARDEN-004.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final hardening status
2. HARDEN-004_DONE_Report.md
3. HARDEN-004_Optimaks_OS_Copy_Notes.md
4. HARDEN-004_Pitch_Pack_Notes.md
5. HARDEN-004_Demo_Talk_Track.md
6. HARDEN-004_Boundary_Safety_Notes.md
7. src/app/optimaks-os/page.tsx
8. src/app/globals.css if changed
9. MVP01_CHANGE_CONTROL_LOG.md
10. MVP01_ISSUE_CHAIN_REGISTER.md if changed
11. Codex changed files summary
12. Validation / forbidden-scope results
13. Any warnings
```
