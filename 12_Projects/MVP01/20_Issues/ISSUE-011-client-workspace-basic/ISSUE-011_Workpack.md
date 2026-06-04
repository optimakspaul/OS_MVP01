# ISSUE-011 Workpack

**Issue:** ISSUE-011  
**Title:** Client Workspace Basic  
**Project:** MVP01  
**Phase:** Phase 3 — End Customer Interface + Client Workspace Basic  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-010  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-011-client-workspace-basic  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/`

---

## 1. Purpose

ISSUE-011 creates the basic client workspace interface for MVP01.

The workspace is for the SME owner / admin using the Aircon / Home Service Starter Template.

The purpose is to show how incoming customer requests can be managed internally through the MVP01 Starter workflow:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
```

This is the first visible client-side operating workspace.

---

## 2. Product Boundary

ISSUE-011 is allowed to create a basic frontend interface.

It is not allowed to create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, payment gateway, WhatsApp API, Optimaks OS admin functionality, or ISSUE-012 implementation.

The interface may use static demo data and local component state only.

---

## 3. Required UX Scope

The Client Workspace Basic should support the following visible structure:

```text
1. Workspace header / business context
2. Starter workflow summary
3. Lead / customer intake overview
4. Quote estimate status overview
5. Booking status overview
6. Payment status overview
7. Reminder / follow-up status overview
8. Manual action queue
9. Basic report snapshot
10. Clear demo / non-persistent boundary
```

The workspace should help the founder demo this story:

```text
A customer submits a request through /end-customer.
The business owner sees the request conceptually in the workspace.
The owner can understand next manual steps:
- review request
- contact customer
- prepare estimate
- schedule booking
- mark payment status
- set reminder
```

---

## 4. Required Content Alignment

The interface must align with:

```text
Template: Aircon / Home Service Starter Template
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Starter depth: Basic / manual-assisted
MVP01 scope: Starter Complete + Optimaks OS Basic
```

Recommended copy direction:

```text
Manage customer requests
Track quote estimate status
Plan manual booking follow-up
Track payment status
Prepare maintenance reminders
Review basic monthly snapshot
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
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Interface_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Handoff_to_Client_Workspace.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing the route and file locations.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Workspace_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Client_Workspace_UX_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Handoff_to_Lead_Customer_Flow.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify app frontend files needed for the basic client workspace interface, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose a minimal route.

Preferred route if compatible:

```text
/app/workspace/page.tsx
```

Alternative acceptable routes if existing conventions suggest otherwise:

```text
/app/client-workspace/page.tsx
/app/demo/workspace/page.tsx
/app/(app)/workspace/page.tsx
```

The UI should be self-contained and simple.

Recommended component sections:

```text
Workspace header / company context
Workflow overview cards
Lead/customer intake panel
Quote status panel
Booking status panel
Payment status panel
Reminder status panel
Manual action queue
Basic report snapshot
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
Accessible workspace panels
Non-persistent action toggles / filters / previews
Manual-assisted action copy
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
Payment gateway
WhatsApp API integration
Auth / login
Optimaks OS UI
Technician portal
ISSUE-012 files
ISSUE-012 lead/customer persistence
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

ISSUE-011 is PASS if:

```text
1. ISSUE-010 founder acceptance is confirmed.
2. A basic client workspace interface exists.
3. The interface matches Aircon / Home Service Starter Template.
4. The interface shows the flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report.
5. The interface clearly remains Starter-depth / manual-assisted.
6. No backend persistence or forbidden implementation scope is created.
7. Documentation outputs are created.
8. Issue chain and change log are updated.
9. Validation passes.
10. ISSUE-012 handoff is clear.
```

ISSUE-011 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or purely static/demo UI limitations.

ISSUE-011 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or ISSUE-012 cannot be safely planned.

---

## 11. ISSUE-012 Handoff

ISSUE-012 may start only after:

```text
1. ISSUE-011 is PASS or PASS WITH WARNINGS.
2. ISSUE-011 founder acceptance is recorded.
3. ISSUE-012 workpack is approved.
4. ISSUE-012 runs on its own branch.
```

ISSUE-012 should use the workspace assumptions to define Lead / Customer Flow.
