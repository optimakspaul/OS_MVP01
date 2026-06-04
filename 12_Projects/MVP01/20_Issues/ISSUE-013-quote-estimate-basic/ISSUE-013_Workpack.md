# ISSUE-013 Workpack

**Issue:** ISSUE-013  
**Title:** Quote Estimate Basic  
**Project:** MVP01  
**Phase:** Phase 4 — Starter Operation Flow  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-012  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-013-quote-estimate-basic  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/`

---

## 1. Purpose

ISSUE-013 creates the basic Quote Estimate flow for MVP01.

This is the next Starter operation flow after Lead / Customer Flow.

The purpose is to let a small business owner / admin review a qualified lead/customer and prepare a manual-assisted estimate.

Starter flow:

```text
Request -> Lead -> Customer -> Quote Estimate -> Booking
```

This issue focuses only on:

```text
Quote Estimate Basic
```

---

## 2. Product Boundary

ISSUE-013 is allowed to create frontend UI and local/static demo behavior.

It is not allowed to create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real quote engine, invoice generation, payment gateway, PDF generation, booking implementation, Optimaks OS admin functionality, or ISSUE-014 work.

The interface may use static demo data and local component state only.

---

## 3. Required UX Scope

The Quote Estimate Basic flow should support the following visible structure:

```text
1. Quote estimate workspace section
2. Selected lead/customer context
3. Service item list
4. Estimate range or subtotal preview
5. Discount display / adjustment preview
6. GST application note / toggle or info card
7. Quote status
8. Manual follow-up checklist
9. Next step to Booking Basic
10. Clear demo / non-persistent boundary
```

The flow should help demo this story:

```text
A business owner has qualified a lead.
The owner reviews customer and service context.
The owner sees suggested service items.
The owner prepares an estimate range.
The owner can show discount / GST notes.
The owner marks quote status conceptually.
The next step is Booking Basic in ISSUE-014.
```

---

## 4. Required Content Alignment

The interface must align with:

```text
Template: Aircon / Home Service Starter Template
Starter Module: Quote Module = Estimate
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Starter depth: Basic / manual-assisted
MVP01 scope: Starter Complete + Optimaks OS Basic
```

Recommended copy direction:

```text
Prepare estimate
Review service items
Apply manual discount
Check GST setting / note
Send quote estimate manually
Move to booking
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
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Handoff_to_Quote_Estimate.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing whether to extend `/workspace` or create a subroute.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Quote_Estimate_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Handoff_to_Booking_Basic.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify frontend files needed for Quote Estimate Basic, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose the smallest compatible implementation.

Preferred option:

```text
Enhance src/app/workspace/page.tsx with Quote Estimate Basic sections.
```

Alternative acceptable route:

```text
src/app/workspace/quotes/page.tsx
```

Only choose a subroute if it better fits the existing structure.

Recommended UI sections:

```text
Quote estimate panel
Selected lead/customer summary
Service item list
Estimate range card
Discount preview
GST note / setting explanation
Quote status selector / preview
Manual quote action checklist
Next step to booking
Demo boundary notice
```

Use existing styling conventions. If Tailwind is already used, use Tailwind classes. Do not add new UI libraries.

---

## 8. Functional Boundary

Allowed:

```text
Frontend route / page enhancement
Local component state
Static demo service items
Accessible estimate controls / buttons / previews
Non-persistent discount preview
GST information card / static toggle
Manual-assisted quote workflow copy
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
Real quote calculation engine
Invoice generation
Payment gateway
PDF generation
Booking implementation
Reminder implementation
Optimaks OS UI
Technician portal
ISSUE-014 files
ISSUE-014 booking implementation
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

ISSUE-013 is PASS if:

```text
1. ISSUE-012 founder acceptance is confirmed.
2. A Quote Estimate Basic flow exists in the client workspace.
3. The interface shows Customer/Lead -> Quote Estimate clearly.
4. Estimate, service items, discount, GST note, and quote status are visible.
5. The flow remains Starter-depth / manual-assisted.
6. No backend persistence or forbidden implementation scope is created.
7. Documentation outputs are created.
8. Issue chain and change log are updated.
9. Validation passes.
10. ISSUE-014 handoff is clear.
```

ISSUE-013 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or static/demo limitations.

ISSUE-013 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or ISSUE-014 cannot be safely planned.

---

## 11. ISSUE-014 Handoff

ISSUE-014 may start only after:

```text
1. ISSUE-013 is PASS or PASS WITH WARNINGS.
2. ISSUE-013 founder acceptance is recorded.
3. ISSUE-014 workpack is approved.
4. ISSUE-014 runs on its own branch.
```

ISSUE-014 should use the quote estimate assumptions to define Booking Basic.
