# ISSUE-009 Workpack

**Issue:** ISSUE-009  
**Title:** Industry Template Foundation  
**Project:** MVP01  
**Phase:** Phase 2 — Module Foundation  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Documentation / Architecture Alignment Only  
**Depends On:** ISSUE-008  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-009-industry-template-foundation  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/`

---

## 1. Purpose

ISSUE-009 creates the MVP01 Industry Template Foundation.

It translates the shared module library from ISSUE-008 into one concrete Starter-depth industry template pattern.

For MVP01, the first industry template should be:

```text
Aircon / Home Service / Field Service starter template
```

This issue is documentation and architecture alignment only.

It must define how modules are arranged for one target industry without creating database tables, app UI, template tables, module registry tables, entitlement logic, migrations, or implementation code.

---

## 2. Scope

ISSUE-009 must document:

```text
1. Industry template definition
2. Primary MVP01 industry template
3. Template-to-module mapping
4. Starter-depth template flow
5. End customer interface handoff assumptions
6. Client workspace handoff assumptions
7. Optimaks OS Basic handoff assumptions
8. Included vs reserved industry template depth
9. ISSUE-010 handoff
```

---

## 3. Required Source Files

Codex must read these files if present:

```text
AGENTS.md
README.md
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
12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Architecture_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Flow_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Module_Library_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Plan_Depth_Matrix_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Included_Reserved_Rules.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Handoff_to_Industry_Template.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Source_Alignment_Reference.md
```

---

## 4. Required Outputs

Codex must create:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Industry_Template_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Module_Mapping.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Handoff_to_End_Customer_Interface.md
```

Codex must update:

```text
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_DONE_Report.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

---

## 5. Required Template Content

The MVP01 primary template must be documented as:

```text
Template Name: Aircon / Home Service Starter Template
Template Type: Starter-depth industry template
Primary User: SME owner / admin
End Customer Flow: request / enquiry / quote estimate / booking / payment status / reminder
Client Workspace Flow: lead / customer / quote / booking / payment / reminder / report
Optimaks OS Flow: demo setup / onboarding / workspace link / release tracking
```

The template must map MVP01 modules:

```text
Lead Module -> Request capture and lead conversion
Customer Module -> Customer profile and service context
Quote Module -> Estimate / quote guidance
Booking Module -> Manual booking / appointment scheduling
Payment Module -> Payment status / manual tracking
Reminder Module -> Maintenance / follow-up reminder
Report Module -> Basic monthly / operational report
```

---

## 6. Included Scope

ISSUE-009 may document:

```text
1. Primary industry template name
2. Template purpose
3. Target user
4. MVP01 module-to-template mapping
5. Starter-depth operating flow
6. End customer interface requirements for ISSUE-010
7. Client workspace assumptions for ISSUE-011
8. Reserved template depth for MVP02+
9. Demo data concept at documentation level only
```

---

## 7. Forbidden Scope

Codex must not:

```text
Create migrations
Create database tables
Create template tables
Create module tables
Create entitlement tables
Create seed data
Create app code
Create UI
Create Supabase client code
Create API routes
Create server actions
Create RLS
Create RLS policies
Modify package files
Modify env files
Modify constitution files
Modify templates
Modify ISSUE-010 files
Start ISSUE-010 execution
```

---

## 8. Validation

Codex must run if available:

```text
npm run lint
npm run build
npm run typecheck
```

Codex must also run a forbidden-scope audit to confirm that no implementation files were created or modified.

---

## 9. Success Criteria

ISSUE-009 is PASS if:

```text
1. ISSUE-008 founder acceptance is confirmed.
2. MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md is created.
3. Primary MVP01 industry template is documented.
4. Template-to-module mapping is documented.
5. Starter-depth flow is documented.
6. Reserved boundaries are documented.
7. ISSUE-010 handoff is clear.
8. No implementation scope is created.
9. Validation and forbidden-scope audit pass.
```

ISSUE-009 is PASS WITH WARNINGS if all required outputs exist and warnings are documentation/governance-only.

ISSUE-009 is FAIL if forbidden scope is touched, ISSUE-008 acceptance is missing, or ISSUE-010 cannot be safely planned.

---

## 10. ISSUE-010 Handoff

ISSUE-010 may start only after:

```text
1. ISSUE-009 is PASS or PASS WITH WARNINGS.
2. ISSUE-009 founder acceptance is recorded.
3. ISSUE-010 workpack is approved.
4. ISSUE-010 runs on its own branch.
```

ISSUE-010 should use the Industry Template Foundation to create the End Customer Interface Basic scope.
