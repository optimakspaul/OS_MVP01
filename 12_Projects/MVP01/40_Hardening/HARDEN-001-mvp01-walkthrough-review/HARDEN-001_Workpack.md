# HARDEN-001 Workpack

**Hardening Item:** HARDEN-001  
**Title:** MVP01 Walkthrough Review  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Execution Mode:** Walkthrough Review / QA / Demo Readiness Hardening  
**Depends On:** MVP01 Final Checkpoint Review  
**Required Previous Gate:** Final Checkpoint PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** `harden/harden-001-mvp01-walkthrough-review`  
**Normalized Path:** `12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/`

---

## 1. Purpose

HARDEN-001 reviews the accepted MVP01 end-to-end. It should find demo blockers, confusing UI/copy, overpromising wording, route handoff issues, static/local-only warning gaps, and hardening items before MVP02 planning.

## 2. Required Source Files

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
12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md
12_Projects/MVP01/00_Project_Baseline/MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Checkpoint_DONE_Report.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Checkpoint_Review.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Demo_Route_Audit.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Scope_Audit.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Warnings_Register.md
12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_MVP02_Lock_Notice.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Workpack.md
12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/HARDEN-001_Source_Alignment_Reference.md
```

If historical files are missing, report them as warnings and continue with available sources.

## 3. Required Outputs

Create:

```text
HARDEN-001_Walkthrough_Review.md
HARDEN-001_Demo_Script.md
HARDEN-001_UX_Friction_Log.md
HARDEN-001_Copy_and_Scope_Risk_Register.md
HARDEN-001_Hardening_Backlog.md
HARDEN-001_DONE_Report.md
```

May update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

May update `MVP01_ISSUE_CHAIN_REGISTER.md` only if an existing hardening/checkpoint tracking section supports it.

## 4. Required Review Areas

```text
1. Overall demo readiness rating
2. Route-by-route walkthrough
3. End-customer flow review
4. Client workspace flow review
5. Optimaks OS Basic flow review
6. Copy / scope safety review
7. Static/local-only warning review
8. UX friction log
9. Recommended hardening backlog
10. MVP02 lock confirmation
```

## 5. Finding Classification

Each finding should be classified as:

```text
Blocker
Important
Nice-to-have
MVP02 candidate
Already acceptable
```

## 6. Validation

Run:

```text
npm run lint
npm run build
npm run typecheck
route existence audit for /end-customer, /workspace, /optimaks-os
forbidden-scope audit
secret check for changed files
```

## 7. Success Criteria

HARDEN-001 is PASS or PASS WITH WARNINGS if the review docs are complete, demo script is founder-ready, route audit passes, no MVP02 work is created, and warnings are non-blocking.
