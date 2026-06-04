# ISSUE-008 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-008 — Module Library Foundation only.

Context:
- Product: Optimaks MVP01
- Architecture Source: Optimaks_MVP01_to_MVP05_Phase_Issue_Package_v0.3_with_Flow
- Current Issue: ISSUE-008
- Current Issue Title: Module Library Foundation
- Phase: Phase 2 — Module Foundation
- Previous Issue: ISSUE-007 Architecture Alignment
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Execution Mode: Architecture / Documentation Alignment
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/

Purpose:
Create the MVP01 Module Library Foundation by documenting the canonical module list, Starter/Grow/Pro plan-depth matrix, MVP01 included modules, reserved modules, and handoff to ISSUE-009 Industry Template Foundation.

Important:
ISSUE-008 is not a coding issue.
Do not create migrations, RLS, app code, module tables, template tables, entitlement tables, UI, or ISSUE-009 work.

Dependency Gate:
1. Confirm ISSUE-007 is PASS or PASS WITH WARNINGS.
2. Confirm ISSUE-007 Founder Acceptance is recorded as Accepted.
3. Confirm MVP01 baseline says MVP01 = Starter Complete + Optimaks OS Basic.
4. Confirm ISSUE-008 is Module Library Foundation under Phase 2.
5. If any dependency is missing, stop and return FAIL - dependency gate not satisfied.

Required Tasks:
1. Read ISSUE-008 workpack and source reference.
2. Create or update `12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md`.
3. Create `ISSUE-008_Module_Library_Notes.md`.
4. Create `ISSUE-008_Plan_Depth_Matrix_Notes.md`.
5. Create `ISSUE-008_Included_Reserved_Rules.md`.
6. Create `ISSUE-008_Handoff_to_Industry_Template.md`.
7. Complete `ISSUE-008_DONE_Report.md`.
8. Update `MVP01_ISSUE_CHAIN_REGISTER.md` only for ISSUE-008 status / output / handoff.
9. Update `MVP01_CHANGE_CONTROL_LOG.md` with ISSUE-008 documentation alignment entry.
10. Do not start ISSUE-009.

Required Module Matrix:
Use the matrix from `ISSUE-008_Source_Alignment_Reference.md` and `ISSUE-008_Workpack.md`.

MVP01 Included Module Rule:
- Lead Module = Basic
- Customer Module = Basic
- Quote Module = Estimate
- Booking Module = Manual
- Payment Module = Status
- Reminder Module = Basic
- Report Module = Basic

Reserved Rule:
- Grow complete collaboration is reserved to MVP02.
- Pro technician / branch management is reserved to MVP03.
- Full Optimaks Platform / plan control / billing / support / analytics are reserved to MVP04.
- AI Copilot / Automation Engine / Integration Ecosystem are reserved to MVP05.

Boundary Rule:
- Plan depth controls feature availability.
- Workspace / tenant boundary controls data isolation.
- Do not represent Starter / Grow / Pro as RLS policies.

Allowed Files:
- 12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
- 12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/README_ISSUE-008.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Source_Alignment_Reference.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Workpack.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Codex_Prompt.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Module_Library_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Plan_Depth_Matrix_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Included_Reserved_Rules.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Handoff_to_Industry_Template.md
- 12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_DONE_Report.md

Forbidden Scope:
- Do not create migrations.
- Do not modify existing migrations.
- Do not create RLS.
- Do not create RLS policies.
- Do not create database tables.
- Do not create module tables.
- Do not create template tables.
- Do not create entitlement tables.
- Do not modify app source files.
- Do not modify package files.
- Do not modify env files.
- Do not create Supabase client code.
- Do not create UI.
- Do not implement plan gating in code.
- Do not start ISSUE-009.
- Do not modify constitution files or templates.

Validation:
Run available validation commands:
- npm run lint
- npm run build
- npm run typecheck

Also perform a forbidden-scope audit confirming no migrations, app code, package/env files, RLS, module/template tables, UI, or ISSUE-009 files were created or modified.

Required DONE Report:
Create or complete:
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_DONE_Report.md

The DONE report must include:
- Final Status: PASS / PASS WITH WARNINGS / FAIL
- Dependency gate result
- Files read
- Files created
- Files changed
- Module library summary
- Plan-depth matrix summary
- Included / reserved boundary summary
- Plan-depth vs data-isolation boundary summary
- Handoff to ISSUE-009
- Forbidden-scope result
- Validation command results
- Warnings
- Whether ISSUE-009 can start

Return:
1. Final status
2. Created files
3. Changed files
4. Module library summary
5. Plan-depth matrix summary
6. Included / reserved boundary summary
7. Forbidden-scope result
8. Validation results
9. Warnings
10. Whether ISSUE-009 can start
