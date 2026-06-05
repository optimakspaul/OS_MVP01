# ISSUE-018 Workpack

**Issue:** ISSUE-018  
**Title:** Optimaks OS Basic + Demo / Release Pack  
**Project:** MVP01  
**Phase:** Phase 6-7 — Demo Readiness / Release Handover  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-017  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-018-optimaks-os-basic-demo-release-pack  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/`

---

## 1. Purpose

ISSUE-018 creates the final MVP01 Optimaks OS Basic + Demo / Release Pack.

This is the closing issue of MVP01.

The purpose is to give the founder a demo-ready and release-ready package that explains:

```text
1. What MVP01 includes
2. How the end customer flow works
3. How the client workspace flow works
4. How Optimaks OS Basic supports demo/onboarding/release tracking
5. What is included in Starter Complete
6. What remains reserved for MVP02+
```

MVP01 final flow:

```text
End Customer Interface
-> Client Workspace
-> Starter Operation Flow
-> Admin Setting / Reminder / Basic Report
-> Optimaks OS Basic
-> Demo / Release Pack
```

---

## 2. Product Boundary

ISSUE-018 is allowed to create frontend UI and release documentation.

It is not allowed to create full Optimaks OS backend, real client management, auth-gated admin console, tenant provisioning, billing, subscriptions, module entitlement logic, deployment automation, or MVP02 work.

The interface may use static demo data and local component state only.

---

## 3. Required UX Scope

ISSUE-018 should support the following visible structure:

```text
1. Optimaks OS Basic preview section or page
2. Client list preview
3. Plan status preview
4. Onboarding status preview
5. Workspace link preview
6. Demo pack checklist
7. Release pack checklist
8. MVP01 flow summary
9. Included / reserved boundary summary
10. Clear demo / non-persistent boundary
```

The flow should help demo this story:

```text
Optimaks can show a client workspace demo.
Optimaks can track a sample client, plan status, onboarding status, and workspace link.
The founder can present what MVP01 includes.
The founder can explain what is reserved for MVP02+.
The repo has a final MVP01 demo/release handoff record.
```

---

## 4. Required Content Alignment

The interface and documents must align with:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Primary Template = Aircon / Home Service Starter Template
Starter Client Flow = Request -> Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Optimaks OS Basic Flow = Client list -> Plan status -> Onboarding status -> Workspace link -> Demo pack -> Release pack
```

Recommended copy direction:

```text
Track demo client
Review plan status
Confirm onboarding status
Open workspace link
Prepare demo checklist
Prepare release checklist
Close MVP01
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
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Handoff_to_Demo_Release.md
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Source_Alignment_Reference.md
```

Codex must inspect the existing app structure before choosing whether to extend `/workspace`, add an `/optimaks-os` route, or add a `/demo` route.

---

## 6. Required Outputs

Codex must create documentation:

```text
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Optimaks_OS_Basic_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Demo_Pack_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Release_Pack_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_MVP01_Closeout_Notes.md
```

Codex must complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_DONE_Report.md
```

Codex must update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may create or modify frontend files needed for Optimaks OS Basic + Demo / Release Pack, according to the existing repository structure.

---

## 7. Recommended App Implementation

Codex should inspect the existing Next.js structure and choose the smallest compatible implementation.

Preferred option:

```text
Create src/app/optimaks-os/page.tsx
```

Alternative acceptable options:

```text
src/app/demo/page.tsx
Enhance src/app/workspace/page.tsx with a final demo/release section
```

Use the route that best preserves clarity without overbuilding.

Recommended UI sections:

```text
Optimaks OS Basic overview
Sample client list
Client / plan status card
Onboarding status card
Workspace link card
Demo pack checklist
Release pack checklist
MVP01 flow summary
Included / reserved boundary card
MVP01 closeout notice
```

Use existing styling conventions. If Tailwind is already used, use Tailwind classes. Do not add new UI libraries.

---

## 8. Functional Boundary

Allowed:

```text
Frontend route / page enhancement
Local component state
Static demo client data
Static plan status / onboarding status previews
Static workspace link preview
Demo checklist
Release checklist
MVP01 flow summary
Included / reserved boundary summary
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
Real Optimaks OS admin console
Real client management backend
Tenant provisioning
Billing/subscription management
Role-based admin permissions
Deployment automation
Module entitlement logic
MVP02 files
MVP02 execution
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

ISSUE-018 is PASS if:

```text
1. ISSUE-017 founder acceptance is confirmed.
2. Optimaks OS Basic preview exists.
3. Demo pack and release pack are documented.
4. MVP01 flow summary is visible.
5. Included/reserved MVP01 boundary is clear.
6. No backend persistence or forbidden implementation scope is created.
7. Documentation outputs are created.
8. Issue chain and change log are updated.
9. Validation passes.
10. MVP01 final checkpoint handoff is clear.
```

ISSUE-018 is PASS WITH WARNINGS if the interface and docs are complete but there are non-blocking warnings, such as line-ending normalization warnings or static/demo limitations.

ISSUE-018 is FAIL if dependency gate fails, implementation scope is missing, app validation fails, forbidden scope is touched, or MVP01 final checkpoint cannot be safely planned.

---

## 11. MVP01 Final Checkpoint Handoff

After ISSUE-018 is PASS or PASS WITH WARNINGS and founder acceptance is recorded:

```text
MVP01 ISSUE-000 through ISSUE-018 can proceed to final checkpoint review.
MVP02 must not start until MVP01 final checkpoint is accepted.
```
