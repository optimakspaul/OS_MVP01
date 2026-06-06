# HARDEN-003 Workpack

**Hardening Item:** HARDEN-003  
**Title:** Workspace Dashboard Polish  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** UI / Flow / Copy Hardening  
**Depends On:** HARDEN-002  
**Previous Gate Required:** HARDEN-002 PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** `harden/harden-003-workspace-dashboard-polish`  
**Normalized Path:** `12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/`

---

## 1. Purpose

HARDEN-003 improves the MVP01 workspace dashboard route so the owner/admin flow is clearer for founder-guided and limited self-guided walkthroughs.

This is a hardening item, not MVP02 and not a feature expansion.

The main target is:

```text
/workspace
```

The goal is to polish dashboard UI/copy without changing the MVP01 product boundary.

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
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Walkthrough_Review.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_UX_Friction_Log.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Copy_and_Scope_Risk_Register.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Hardening_Backlog.md
12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/HARDEN-002_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/HARDEN-002_Boundary_Safety_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_Workpack.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_Source_Alignment_Reference.md
```

If older files are missing, Codex must report them as warnings and continue with available files.

---

## 3. Required UI / Flow / Copy Scope

Codex should improve `/workspace` for:

```text
1. Clearer dashboard hero / owner positioning
2. Clearer workflow map from lead to report
3. Better section grouping and labels
4. Safer quote estimate / booking / payment / admin / reminder / report boundary wording
5. Visible demo-preview / local-only boundary
6. Clearer "how to demo this page" guidance
7. Clearer action labels for local preview controls
8. Optional lightweight route navigation to /end-customer and /optimaks-os if consistent with existing style
```

The page must remain static/local and demo-safe.

---

## 4. Required Documentation Outputs

Codex must create:

```text
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_Workspace_Flow_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_UI_Polish_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_Boundary_Safety_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_DONE_Report.md
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
src/app/workspace/page.tsx
src/app/globals.css
```

Allowed documentation files:

```text
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/**
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
Do not create real lead persistence.
Do not create real customer persistence.
Do not create real quote calculation.
Do not create real booking scheduler.
Do not create payment integration.
Do not create reminder automation.
Do not create report generation.
Do not create full client portal.
Do not create full Optimaks OS admin console.
Do not modify package/env files unless validation is impossible and founder approval is requested.
```

---

## 7. Validation

Codex must run:

```text
npm run lint
npm run build
npm run typecheck
route existence audit for /workspace
forbidden-scope audit
secret check for changed files
```

If possible, Codex should also inspect rendered copy manually or via available browser tooling. If browser automation is unavailable, record as a non-blocking warning.

---

## 8. Success Criteria

HARDEN-003 is PASS if:

```text
1. /workspace copy and dashboard flow are clearer.
2. Workflow from lead to report is easier to understand.
3. Demo-preview boundary is visible.
4. Quote/booking/payment/admin/reminder/report overpromise risk is reduced.
5. Documentation notes are created.
6. Change control log is updated.
7. Validation passes.
8. No MVP02 or forbidden backend scope is created.
```

HARDEN-003 is PASS WITH WARNINGS if the polish is complete and warnings are non-blocking.

HARDEN-003 is FAIL if validation fails, forbidden scope is created, MVP02 work is started, or the page overpromises production behavior.

---

## 9. Founder Acceptance Gate

After Codex completes HARDEN-003, founder must decide:

```text
Accepted as PASS
Accepted as PASS WITH WARNINGS
Rejected / Requires Cleanup
```

Only after founder acceptance may the next hardening item or MVP02 planning workpack proceed.
