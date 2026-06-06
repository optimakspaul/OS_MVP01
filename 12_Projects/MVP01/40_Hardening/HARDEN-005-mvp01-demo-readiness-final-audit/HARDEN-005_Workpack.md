# HARDEN-005 Workpack

**Hardening Item:** HARDEN-005  
**Title:** MVP01 Demo Readiness Final Audit  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Final Demo Readiness Audit / Governance / Release Readiness  
**Depends On:** HARDEN-004  
**Previous Gate Required:** HARDEN-004 PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** `harden/harden-005-mvp01-demo-readiness-final-audit`  
**Normalized Path:** `12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/`

---

## 1. Purpose

HARDEN-005 is the final demo readiness audit after HARDEN-001 through HARDEN-004.

This is not a product feature issue and not MVP02 planning.

It should determine whether MVP01 is ready for:

```text
Founder-guided demo
Limited self-guided preview
Sales pitch use
MVP02 planning preparation
```

The final output should be a clear GO / GO WITH WARNINGS / NO-GO recommendation.

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
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Checkpoint_Review.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Demo_Route_Audit.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Warnings_Register.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_MVP02_Lock_Notice.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Demo_Script.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Hardening_Backlog.md
12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/HARDEN-002_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/HARDEN-002_Boundary_Safety_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/HARDEN-003_Boundary_Safety_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_DONE_Report.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Demo_Talk_Track.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Pitch_Pack_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/HARDEN-004_Boundary_Safety_Notes.md
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_Workpack.md
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_Source_Alignment_Reference.md
```

If older files are missing, Codex must report them as warnings and continue with available files.

---

## 3. Required Audit Scope

Codex must audit:

```text
1. /end-customer readiness
2. /workspace readiness
3. /optimaks-os readiness
4. Founder demo script readiness
5. Pitch pack readiness
6. Copy and boundary safety
7. Known warnings
8. MVP02 lock status
9. Remaining hardening backlog
10. Final GO / GO WITH WARNINGS / NO-GO decision
```

---

## 4. Required Documentation Outputs

Codex must create:

```text
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_Final_Demo_Readiness_Audit.md
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_Founder_Demo_Runbook.md
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_Go_NoGo_Decision.md
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_Known_Warnings_Summary.md
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_MVP02_Lock_and_Next_Step_Notice.md
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/HARDEN-005_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may update `MVP01_ISSUE_CHAIN_REGISTER.md` only if an existing hardening/checkpoint tracking section supports it.

---

## 5. Allowed Files

Allowed documentation files:

```text
12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/**
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md only if existing hardening/checkpoint tracking supports it
```

App files should not be modified unless validation reveals a build-breaking issue and founder approval is requested.

---

## 6. Forbidden Scope

```text
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create MVP02 planning workpack.
Do not create new product features.
Do not modify app UI unless a build-breaking issue requires founder-approved fix.
Do not create migrations.
Do not create database tables.
Do not create Supabase integration.
Do not create API routes.
Do not create server actions.
Do not create RLS.
Do not create auth.
Do not create payment/calendar/reminder automation.
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
route existence audit for /end-customer, /workspace, /optimaks-os
rendered-copy/stale-copy audit if available
forbidden-scope audit
secret check for changed files
```

If visual browser automation is unavailable, record as a non-blocking warning.

---

## 8. Success Criteria

HARDEN-005 is PASS if:

```text
1. Final demo readiness audit is complete.
2. Founder demo runbook is created.
3. GO / GO WITH WARNINGS / NO-GO decision is documented.
4. Known warnings are classified.
5. MVP02 lock and next steps are documented.
6. Change control log is updated.
7. Validation passes.
8. No MVP02 or forbidden backend scope is created.
```

HARDEN-005 is PASS WITH WARNINGS if the audit is complete and warnings are non-blocking.

HARDEN-005 is FAIL if validation fails, forbidden scope is created, MVP02 work is started, or a demo blocker remains unresolved without documentation.

---

## 9. Founder Acceptance Gate

After Codex completes HARDEN-005, founder must decide:

```text
Accepted as PASS
Accepted as PASS WITH WARNINGS
Rejected / Requires Cleanup
```

Only after founder acceptance may MVP02 planning workpack proceed.
