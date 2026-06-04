# ISSUE-010 Workpack

**Issue:** ISSUE-010  
**Title:** End Customer Interface Basic  
**Project:** MVP01  
**Phase:** Phase 3 — End Customer Interface + Client Workspace Basic  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-009  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-010-end-customer-interface-basic  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/`

---

## 1. Purpose

ISSUE-010 creates the basic end-customer-facing interface for MVP01.

This interface is for the Aircon / Home Service Starter Template defined in ISSUE-009.

The purpose is to show how an end customer can enter a request, understand an estimate-style quote path, express booking interest, see payment-status expectations, and opt into reminder/follow-up.

This is the first visible MVP01 customer journey.

---

## 2. Product Boundary

ISSUE-010 is allowed to create a basic frontend interface.

It is not allowed to create backend product persistence unless the repository already has an approved pattern for local/static demo state.

ISSUE-010 must not create migrations, database tables, RLS, Supabase client writes, API routes, server actions, payment gateway, WhatsApp API, auth, client workspace management, or Optimaks OS admin functionality.

---

## 3. Required UX Scope

The End Customer Interface Basic should support the following visible journey:

```text
1. Landing / request entry
2. Service category / issue type selection
3. Customer contact capture fields
4. Service address / area field
5. Quote estimate guidance panel
6. Booking interest / preferred timing fields
7. Payment status / manual payment explanation
8. Reminder / maintenance follow-up consent copy
9. WhatsApp CTA / manual-assisted handoff
10. Clear "demo / not final booking" boundary if persistence is not implemented
```

---

## 4. Required Content Alignment

The interface must align with:

```text
Template: Aircon / Home Service Starter Template
End Customer Flow: Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
Starter depth: Basic / manual-assisted
MVP01 scope: Starter Complete + Optimaks OS Basic
```

Recommended copy direction:

```text
Request a service
Get an estimated quote range
Choose a preferred time
Confirm payment method / payment status expectation
Receive maintenance reminder / follow-up
Continue via WhatsApp
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
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Industry_Template_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Module_Mapping.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Handoff_to_End_Customer_Interface.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing the route and file locations.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Interface_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Handoff_to_Client_Workspace.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify app frontend files needed for the basic end-customer interface, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose a minimal route.

Preferred route if compatible:

```text
/app/end-customer/page.tsx
```

Alternative acceptable routes if existing conventions suggest otherwise:

```text
/app/(public)/end-customer/page.tsx
/app/request/page.tsx
/app/demo/end-customer/page.tsx
```

The UI should be self-contained and simple.

Recommended component sections:

```text
Hero / request intro
Service issue selector
Customer details form
Quote estimate guidance card
Booking preference card
Payment status information card
Reminder consent card
WhatsApp CTA / manual handoff
Demo boundary notice
```

Use existing styling conventions. If Tailwind is already used, use Tailwind classes. Do not add new UI libraries.

---

## 8. Functional Boundary

Allowed:

```text
Frontend route / page
Local component state
Static demo data
Accessible form fields
Non-persistent submit preview / summary
WhatsApp CTA link or placeholder copy
Documentation updates
Issue chain and change log updates
```

Forbidden:

```text
Database writes
Supabase client integration
API route submission
Server action submission
New migrations
New database tables
Seed data
RLS / policies
Payment gateway
WhatsApp API integration
Auth / login
Client Workspace UI
Optimaks OS UI
ISSUE-011 files
ISSUE-012 lead persistence
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

ISSUE-010 is PASS if:

```text
1. ISSUE-009 founder acceptance is confirmed.
2. A basic end-customer interface exists.
3. The interface matches Aircon / Home Service Starter Template.
4. The interface shows the flow: Request -> Quote Estimate -> Booking -> Payment Status -> Reminder.
5. The interface clearly remains Starter-depth / manual-assisted.
6. No backend persistence or forbidden implementation scope is created.
7. Documentation outputs are created.
8. Issue chain and change log are updated.
9. Validation passes.
10. ISSUE-011 handoff is clear.
```

ISSUE-010 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or purely static/demo UI limitations.

ISSUE-010 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or ISSUE-011 cannot be safely planned.

---

## 11. ISSUE-011 Handoff

ISSUE-011 may start only after:

```text
1. ISSUE-010 is PASS or PASS WITH WARNINGS.
2. ISSUE-010 founder acceptance is recorded.
3. ISSUE-011 workpack is approved.
4. ISSUE-011 runs on its own branch.
```

ISSUE-011 should use the end-customer flow and interface assumptions to create Client Workspace Basic.
