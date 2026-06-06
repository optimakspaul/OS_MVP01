# HARDEN-004 Workpack

**Hardening Item:** HARDEN-004  
**Title:** Optimaks OS + Pitch Pack Polish  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** UI / Copy / Pitch Readiness Hardening  
**Depends On:** HARDEN-003  
**Previous Gate Required:** HARDEN-003 PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** `harden/harden-004-optimaks-os-pitch-pack-polish`  
**Normalized Path:** `12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/`

---

## 1. Purpose

HARDEN-004 improves the MVP01 Optimaks OS route and creates pitch-ready notes for founder-led demos.

This is a hardening item, not MVP02 and not a feature expansion.

The main target is:

```text
/optimaks-os
```

The secondary target is pitch/demo documentation that helps the founder explain MVP01:

```text
Starter Complete + Optimaks OS Basic
```

---

## 2. Required Review Inputs

Codex must read these files if present:

```text
AGENTS.md
README.md
package.json
tsconfig.json
eslint.config.mjs
src/app/end-customer/page.tsx
src/app/workspace/page.tsx
src/app/optimaks-os/page.tsx
src/app/globals.css
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Checkpoint_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Demo_Script.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Hardening_Backlog.md
12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/HARDEN-002_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_Boundary_Safety_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Workpack.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Source_Alignment_Reference.md
```

If older files are missing, Codex must report them as warnings and continue with available files.

---

## 3. Required UI / Pitch / Copy Scope

Codex should improve `/optimaks-os` for:

```text
1. Clearer Optimaks OS Basic positioning
2. Clearer sample client / plan / onboarding / workspace link meaning
3. Better demo pack checklist wording
4. Better release pack checklist wording
5. Clearer MVP01 included vs reserved boundary
6. Clearer founder sales-demo talk track
7. Better CTA / next-step copy for founder-led pitch
8. Optional lightweight route navigation to /end-customer and /workspace if consistent with existing app style
```

The page must remain static/local and demo-safe.

---

## 4. Required Documentation Outputs

Codex must create:

```text
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Optimaks_OS_Copy_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Pitch_Pack_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Demo_Talk_Track.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Boundary_Safety_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may update `MVP01_ISSUE_CHAIN_REGISTER.md` only if an existing hardening/checkpoint tracking section supports it.

---

## 5. Allowed Files

Allowed app files:

```text
src/app/optimaks-os/page.tsx
src/app/globals.css
```

Allowed documentation files:

```text
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/**
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md only if existing hardening/checkpoint tracking supports it
```

---

## 6. Forbidden Scope

```text
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create new backend features.
Do not create migrations.
Do not create database tables.
Do not create Supabase integration.
Do not create API routes.
Do not create server actions.
Do not create RLS.
Do not create auth.
Do not create real Optimaks OS admin console.
Do not create real client management backend.
Do not create tenant provisioning.
Do not create billing/subscription management.
Do not create deployment automation.
Do not create module entitlement logic.
Do not modify package/env files unless validation is impossible and founder approval is requested.
```

---

## 7. Validation

Codex must run:

```text
npm run lint
npm run build
npm run typecheck
route existence audit for /optimaks-os
forbidden-scope audit
secret check for changed files
```

If possible, Codex should also inspect rendered copy manually or via available browser tooling. If browser automation is unavailable, record as a non-blocking warning.

---

## 8. Success Criteria

HARDEN-004 is PASS if:

```text
1. /optimaks-os copy and pitch flow are clearer.
2. Optimaks OS Basic is easy to explain.
3. Demo pack and release pack are pitch-ready.
4. MVP01 included/reserved boundary is clear.
5. Founder demo talk track is created.
6. Documentation notes are created.
7. Change control log is updated.
8. Validation passes.
9. No MVP02 or forbidden backend scope is created.
```

HARDEN-004 is PASS WITH WARNINGS if the polish is complete and warnings are non-blocking.

HARDEN-004 is FAIL if validation fails, forbidden scope is created, MVP02 work is started, or the page overpromises production behavior.

---

## 9. Founder Acceptance Gate

After Codex completes HARDEN-004, founder must decide:

```text
Accepted as PASS
Accepted as PASS WITH WARNINGS
Rejected / Requires Cleanup
```

Only after founder acceptance may the next hardening item or MVP02 planning workpack proceed.
