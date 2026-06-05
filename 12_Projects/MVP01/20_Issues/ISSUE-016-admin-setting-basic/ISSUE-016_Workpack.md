# ISSUE-016 Workpack

**Issue:** ISSUE-016  
**Title:** Admin Setting Basic  
**Project:** MVP01  
**Phase:** Phase 5 — Admin Setting / Reminder / Report  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-015  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-016-admin-setting-basic  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/`

---

## 1. Purpose

ISSUE-016 creates the basic Admin Setting layer for MVP01.

This is the next Starter support layer after Payment Basic.

The purpose is to let a small business owner / admin see and adjust local/static business settings that affect quote/payment/reminder/report behavior in a demo-ready way.

Starter support flow:

```text
Payment -> Admin Setting -> Reminder / Basic Report
```

This issue focuses only on:

```text
Admin Setting Basic
```

---

## 2. Product Boundary

ISSUE-016 is allowed to create frontend UI and local/static demo behavior.

It is not allowed to create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real tenant settings, GST compliance engine, PayNow QR generation/upload, payment gateway settings, reminder automation, report generation, Optimaks OS admin functionality, or ISSUE-017 work.

The interface may use static demo data and local component state only.

---

## 3. Required UX Scope

The Admin Setting Basic flow should support the following visible structure:

```text
1. Admin setting workspace section
2. Business information card
3. GST setting preview / toggle
4. Static PayNow QR instruction setting
5. Payment terms preview
6. Default reminder setting preview
7. Basic report preference preview
8. Manual admin setup checklist
9. Clear demo / non-persistent boundary
10. Next step to Reminder + Basic Report
```

The flow should help demo this story:

```text
A business has completed quote, booking, and payment setup at Starter depth.
The owner reviews business/admin settings.
The owner can see GST setting and PayNow instruction settings.
The owner can preview payment terms and default reminder preferences.
The next step is Reminder + Basic Report in ISSUE-017.
```

---

## 4. Required Content Alignment

The interface must align with:

```text
Template: Aircon / Home Service Starter Template
Starter Module: Admin Setting Basic
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Starter depth: Basic / manual-assisted
MVP01 scope: Starter Complete + Optimaks OS Basic
```

Recommended copy direction:

```text
Set business information
Preview GST setting
Show PayNow instruction
Set payment terms
Set reminder defaults
Prepare basic reporting preferences
Move to Reminder + Basic Report
```

---

## 5. Required Source Files

Codex must read these files if present:

```text
AGENTS.md
README.md
package.json
tsconfig.json
eslint.config.mjs
src/app/end-customer/page.tsx
src/app/workspace/page.tsx
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
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Handoff_to_Admin_Setting_Basic.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing whether to extend `/workspace` or create a subroute.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Admin_Setting_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Handoff_to_Reminder_Report.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify frontend files needed for Admin Setting Basic, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose the smallest compatible implementation.

Preferred option:

```text
Enhance src/app/workspace/page.tsx with Admin Setting Basic sections.
```

Alternative acceptable route:

```text
src/app/workspace/admin-settings/page.tsx
```

Only choose a subroute if it better fits the existing structure.

Recommended UI sections:

```text
Admin setting panel
Business info card
GST setting preview
Static PayNow instruction setting
Payment terms preview
Default reminder settings
Basic report preferences
Manual admin setup checklist
Next step to Reminder + Basic Report
Demo boundary notice
```

Use existing styling conventions. If Tailwind is already used, use Tailwind classes. Do not add new UI libraries.

---

## 8. Functional Boundary

Allowed:

```text
Frontend route / page enhancement
Local component state
Static demo business settings
Accessible setting toggles / previews
Static GST setting preview
Static PayNow instruction setting
Static payment terms preview
Default reminder/report preference preview
Manual-assisted admin workflow copy
Documentation updates
Issue chain and change log updates
```

Forbidden:

```text
Database writes
Supabase client integration
API routes
Server actions
New migrations
New database tables
Seed data
RLS / policies
Auth / login
Real tenant settings
Role-based admin permissions
GST compliance engine
PayNow QR generation / upload storage
Payment gateway settings
Reminder automation
Report generation
Optimaks OS UI
Technician portal
ISSUE-017 files
ISSUE-017 reminder/report implementation
```

---

## 9. Validation

Codex must run:

```text
npm run lint
npm run build
npm run typecheck
```

Codex must also run:

```text
forbidden-scope audit
secret check for changed files
```

---

## 10. Success Criteria

ISSUE-016 is PASS if:

```text
1. ISSUE-015 founder acceptance is confirmed.
2. An Admin Setting Basic flow exists in the client workspace.
3. The interface shows business info, GST setting, PayNow instruction setting, payment terms, reminder defaults, and report preferences.
4. The flow remains Starter-depth / manual-assisted.
5. No backend persistence or forbidden implementation scope is created.
6. Documentation outputs are created.
7. Issue chain and change log are updated.
8. Validation passes.
9. ISSUE-017 handoff is clear.
```

ISSUE-016 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or static/demo limitations.

ISSUE-016 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or ISSUE-017 cannot be safely planned.

---

## 11. ISSUE-017 Handoff

ISSUE-017 may start only after:

```text
1. ISSUE-016 is PASS or PASS WITH WARNINGS.
2. ISSUE-016 founder acceptance is recorded.
3. ISSUE-017 workpack is approved.
4. ISSUE-017 runs on its own branch.
```

ISSUE-017 should use the admin setting assumptions to define Reminder + Basic Report.
