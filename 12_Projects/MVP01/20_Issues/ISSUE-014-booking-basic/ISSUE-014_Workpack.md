# ISSUE-014 Workpack

**Issue:** ISSUE-014  
**Title:** Booking Basic  
**Project:** MVP01  
**Phase:** Phase 4 — Starter Operation Flow  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-013  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-014-booking-basic  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/`

---

## 1. Purpose

ISSUE-014 creates the basic Booking flow for MVP01.

This is the next Starter operation flow after Quote Estimate Basic.

The purpose is to let a small business owner / admin manually coordinate a customer booking after preparing a quote estimate.

Starter flow:

```text
Request -> Lead -> Customer -> Quote Estimate -> Booking -> Payment
```

This issue focuses only on:

```text
Booking Basic
```

---

## 2. Product Boundary

ISSUE-014 is allowed to create frontend UI and local/static demo behavior.

It is not allowed to create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real scheduler logic, calendar integration, technician assignment, payment implementation, reminder implementation, Optimaks OS admin functionality, or ISSUE-015 work.

The interface may use static demo data and local component state only.

---

## 3. Required UX Scope

The Booking Basic flow should support the following visible structure:

```text
1. Booking workspace section
2. Selected quote/customer context
3. Service address / area summary
4. Preferred date and time fields or preview
5. Booking status selector / preview
6. Manual scheduling checklist
7. Customer confirmation copy
8. Calendar integration reserved note
9. Next step to Payment Basic
10. Clear demo / non-persistent boundary
```

The flow should help demo this story:

```text
A quote estimate has been prepared.
The business owner checks the customer and quote context.
The owner records preferred booking timing manually.
The owner confirms scheduling status manually.
The owner prepares customer confirmation copy.
The next step is Payment Basic in ISSUE-015.
```

---

## 4. Required Content Alignment

The interface must align with:

```text
Template: Aircon / Home Service Starter Template
Starter Module: Booking Module = Manual
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Starter depth: Basic / manual-assisted
MVP01 scope: Starter Complete + Optimaks OS Basic
```

Recommended copy direction:

```text
Plan booking manually
Review quote and customer context
Choose preferred time
Confirm booking status
Send customer confirmation manually
Move to payment tracking
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
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Handoff_to_Booking_Basic.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing whether to extend `/workspace` or create a subroute.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Booking_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Handoff_to_Payment_Basic.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify frontend files needed for Booking Basic, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose the smallest compatible implementation.

Preferred option:

```text
Enhance src/app/workspace/page.tsx with Booking Basic sections.
```

Alternative acceptable route:

```text
src/app/workspace/bookings/page.tsx
```

Only choose a subroute if it better fits the existing structure.

Recommended UI sections:

```text
Booking panel
Selected quote/customer summary
Preferred date/time card
Service address summary
Booking status selector / preview
Manual scheduling checklist
Customer confirmation copy card
Calendar integration reserved note
Next step to Payment Basic
Demo boundary notice
```

Use existing styling conventions. If Tailwind is already used, use Tailwind classes. Do not add new UI libraries.

---

## 8. Functional Boundary

Allowed:

```text
Frontend route / page enhancement
Local component state
Static demo booking context
Accessible date/time fields or previews
Non-persistent booking status preview
Manual-assisted booking workflow copy
Customer confirmation copy
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
Real scheduler engine
Google Calendar integration
Calendly / Cal.com integration
Technician assignment
Calendar conflict detection
Payment implementation
Reminder implementation
Optimaks OS UI
Technician portal
ISSUE-015 files
ISSUE-015 payment implementation
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

ISSUE-014 is PASS if:

```text
1. ISSUE-013 founder acceptance is confirmed.
2. A Booking Basic flow exists in the client workspace.
3. The interface shows Quote Estimate -> Booking clearly.
4. Date/time, booking status, customer confirmation, and manual scheduling checklist are visible.
5. The flow remains Starter-depth / manual-assisted.
6. No backend persistence or forbidden implementation scope is created.
7. Documentation outputs are created.
8. Issue chain and change log are updated.
9. Validation passes.
10. ISSUE-015 handoff is clear.
```

ISSUE-014 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or static/demo limitations.

ISSUE-014 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or ISSUE-015 cannot be safely planned.

---

## 11. ISSUE-015 Handoff

ISSUE-015 may start only after:

```text
1. ISSUE-014 is PASS or PASS WITH WARNINGS.
2. ISSUE-014 founder acceptance is recorded.
3. ISSUE-015 workpack is approved.
4. ISSUE-015 runs on its own branch.
```

ISSUE-015 should use the booking assumptions to define Payment Basic.
