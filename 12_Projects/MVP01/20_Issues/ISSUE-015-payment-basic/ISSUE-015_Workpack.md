# ISSUE-015 Workpack

**Issue:** ISSUE-015  
**Title:** Payment Basic  
**Project:** MVP01  
**Phase:** Phase 4 — Starter Operation Flow  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-014  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-015-payment-basic  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/`

---

## 1. Purpose

ISSUE-015 creates the basic Payment flow for MVP01.

This is the next Starter operation flow after Booking Basic.

The purpose is to let a small business owner / admin manually track payment status after a booking is coordinated.

Starter flow:

```text
Request -> Lead -> Customer -> Quote Estimate -> Booking -> Payment -> Admin Setting / Reminder
```

This issue focuses only on:

```text
Payment Basic
```

---

## 2. Product Boundary

ISSUE-015 is allowed to create frontend UI and local/static demo behavior.

It is not allowed to create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real payment gateway, PayNow API, Stripe / HitPay integration, invoice generation, receipt generation, accounting integration, reminder implementation, Optimaks OS admin functionality, or ISSUE-016 work.

The interface may use static demo data and local component state only.

---

## 3. Required UX Scope

The Payment Basic flow should support the following visible structure:

```text
1. Payment workspace section
2. Selected booking/customer/quote context
3. Payment method display
4. Cash payment option
5. Static PayNow QR placeholder / instruction card
6. Payment status selector / preview
7. Paid / outstanding summary
8. Manual payment checklist
9. Customer payment instruction copy
10. Clear demo / non-persistent boundary
11. Next step to Admin Setting Basic
```

The flow should help demo this story:

```text
A booking has been coordinated.
The business owner reviews the customer, quote, and booking context.
The owner manually records whether payment is unpaid, partially paid, paid, or follow-up needed.
The owner can show cash and static PayNow QR instruction options.
The next step is Admin Setting Basic in ISSUE-016.
```

---

## 4. Required Content Alignment

The interface must align with:

```text
Template: Aircon / Home Service Starter Template
Starter Module: Payment Module = Status
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Starter depth: Basic / manual-assisted
MVP01 scope: Starter Complete + Optimaks OS Basic
```

Recommended copy direction:

```text
Track payment manually
Accept cash
Show static PayNow QR instruction
Mark payment status
Record paid / outstanding preview
Move to admin settings / reminder setup
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
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Handoff_to_Payment_Basic.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing whether to extend `/workspace` or create a subroute.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Payment_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Handoff_to_Admin_Setting_Basic.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify frontend files needed for Payment Basic, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose the smallest compatible implementation.

Preferred option:

```text
Enhance src/app/workspace/page.tsx with Payment Basic sections.
```

Alternative acceptable route:

```text
src/app/workspace/payments/page.tsx
```

Only choose a subroute if it better fits the existing structure.

Recommended UI sections:

```text
Payment panel
Selected booking/customer/quote summary
Payment method card
Cash option
Static PayNow QR placeholder / instruction card
Payment status selector / preview
Paid / outstanding summary
Manual payment checklist
Customer payment instruction copy
Next step to Admin Setting Basic
Demo boundary notice
```

Use existing styling conventions. If Tailwind is already used, use Tailwind classes. Do not add new UI libraries.

---

## 8. Functional Boundary

Allowed:

```text
Frontend route / page enhancement
Local component state
Static demo payment context
Accessible payment status controls / previews
Static PayNow QR placeholder or instruction card
Cash option copy
Non-persistent paid / outstanding preview
Manual-assisted payment workflow copy
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
Real payment gateway
PayNow API / QR generation
Stripe / HitPay integration
Invoice generation
Receipt generation
Accounting integration
GST compliance engine
Reminder implementation
Optimaks OS UI
Technician portal
ISSUE-016 files
ISSUE-016 admin setting implementation
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

ISSUE-015 is PASS if:

```text
1. ISSUE-014 founder acceptance is confirmed.
2. A Payment Basic flow exists in the client workspace.
3. The interface shows Booking -> Payment clearly.
4. Cash option, static PayNow QR instruction, payment status, and paid/outstanding tracking are visible.
5. The flow remains Starter-depth / manual-assisted.
6. No backend persistence or forbidden implementation scope is created.
7. Documentation outputs are created.
8. Issue chain and change log are updated.
9. Validation passes.
10. ISSUE-016 handoff is clear.
```

ISSUE-015 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or static/demo limitations.

ISSUE-015 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or ISSUE-016 cannot be safely planned.

---

## 11. ISSUE-016 Handoff

ISSUE-016 may start only after:

```text
1. ISSUE-015 is PASS or PASS WITH WARNINGS.
2. ISSUE-015 founder acceptance is recorded.
3. ISSUE-016 workpack is approved.
4. ISSUE-016 runs on its own branch.
```

ISSUE-016 should use the payment assumptions to define Admin Setting Basic.
