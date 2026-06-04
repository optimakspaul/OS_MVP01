# ISSUE-012 Workpack

**Issue:** ISSUE-012  
**Title:** Lead / Customer Flow  
**Project:** MVP01  
**Phase:** Phase 4 — Starter Operation Flow  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-011  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-012-lead-customer-flow  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/`

---

## 1. Purpose

ISSUE-012 creates the basic Lead / Customer Flow for MVP01.

This is the first detailed client workspace workflow after the workspace shell exists.

The purpose is to let a small business owner / admin understand how incoming service requests become leads, and how leads become customer records conceptually.

Starter flow:

```text
Request -> Lead -> Customer -> Quote Estimate
```

This issue focuses only on:

```text
Lead -> Customer
```

---

## 2. Product Boundary

ISSUE-012 is allowed to create frontend UI and local/static demo behavior.

It is not allowed to create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, quote engine, booking implementation, payment implementation, reminder implementation, Optimaks OS admin functionality, or ISSUE-013 work.

The interface may use static demo data and local component state only.

---

## 3. Required UX Scope

The Lead / Customer Flow should support the following visible structure:

```text
1. Lead list / request inbox
2. Lead status filter or tabs
3. Lead detail panel
4. Customer profile summary card
5. Contact details and service address
6. Service context / issue type
7. Manual action checklist
8. Demo convert-to-customer action
9. Next step to quote estimate
10. Clear demo / non-persistent boundary
```

The flow should help demo this story:

```text
A customer request arrives from /end-customer.
The business owner sees it as a lead in /workspace.
The owner reviews contact and service context.
The owner marks the lead as qualified / contacted.
The owner conceptually converts the lead into a customer profile.
The next step is Quote Estimate Basic in ISSUE-013.
```

---

## 4. Required Content Alignment

The interface must align with:

```text
Template: Aircon / Home Service Starter Template
Starter Module: Lead Module Basic + Customer Module Basic
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Starter depth: Basic / manual-assisted
MVP01 scope: Starter Complete + Optimaks OS Basic
```

Recommended copy direction:

```text
Review new requests
Qualify lead
Contact customer manually
Create customer profile
Prepare quote estimate
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
12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Handoff_to_Lead_Customer_Flow.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing whether to extend `/workspace` or create a subroute.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Lead_Customer_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Handoff_to_Quote_Estimate.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify frontend files needed for the Lead / Customer Flow, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose the smallest compatible implementation.

Preferred option:

```text
Enhance src/app/workspace/page.tsx with Lead / Customer Flow sections.
```

Alternative acceptable route:

```text
src/app/workspace/leads/page.tsx
```

Only choose a subroute if it better fits the existing structure.

Recommended UI sections:

```text
Lead inbox / list
Lead status filters
Lead detail panel
Customer profile card
Manual action checklist
Convert-to-customer demo control
Next step to quote estimate
Demo boundary notice
```

Use existing styling conventions. If Tailwind is already used, use Tailwind classes. Do not add new UI libraries.

---

## 8. Functional Boundary

Allowed:

```text
Frontend route / page enhancement
Local component state
Static demo leads / customers
Accessible filters / buttons / previews
Non-persistent convert-to-customer demo action
Manual-assisted workflow copy
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
Quote engine
Booking implementation
Payment implementation
Reminder implementation
Optimaks OS UI
Technician portal
ISSUE-013 files
ISSUE-013 quote implementation
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

ISSUE-012 is PASS if:

```text
1. ISSUE-011 founder acceptance is confirmed.
2. A Lead / Customer Flow exists in the client workspace.
3. The interface shows Lead -> Customer clearly.
4. The flow remains Starter-depth / manual-assisted.
5. No backend persistence or forbidden implementation scope is created.
6. Documentation outputs are created.
7. Issue chain and change log are updated.
8. Validation passes.
9. ISSUE-013 handoff is clear.
```

ISSUE-012 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or static/demo limitations.

ISSUE-012 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or ISSUE-013 cannot be safely planned.

---

## 11. ISSUE-013 Handoff

ISSUE-013 may start only after:

```text
1. ISSUE-012 is PASS or PASS WITH WARNINGS.
2. ISSUE-012 founder acceptance is recorded.
3. ISSUE-013 workpack is approved.
4. ISSUE-013 runs on its own branch.
```

ISSUE-013 should use the lead/customer flow assumptions to define Quote Estimate Basic.
