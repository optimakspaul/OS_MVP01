# MVP01 Issue Chain Register

**Document Type:** MVP Issue Chain Register
**Version:** v1.7.9.4-project-baseline-governance / v0.3 Flow alignment
**Status:** Active
**Applies To:** MVP01 issue dependency, handoff, PR, and merge tracking
**Related Standards:** `03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md`, `03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md`

---

## 1. Purpose

This register tracks MVP01 issue sequence, dependency, handoff, validation status, warnings, and completion evidence.

It must be read with:

```text
MVP01_SCOPE_BASELINE.md
MVP01_PHASE_AND_ISSUE_BASELINE.md
MVP01_CHANGE_CONTROL_LOG.md
```

---

## 2. Core Rule

```text
One Issue = One Branch = One PR = One Merge = One DONE Report = One Handoff Entry
```

Each issue must confirm:

```text
Phase
Depends On
Required Previous Outputs
This Issue Outputs
Next Issue Handoff
Status
Warnings / Risks
PR / Branch / Commit
```

---

## 3. MVP01 Issue Chain

| Issue | Phase | Name | Depends On | Required Previous Outputs | Output For Next Issue | Status | Branch / PR / Commit | Notes |
|---|---|---|---|---|---|---|---|---|
| ISSUE-000 | Phase 0 | Repo / Constitution Verification | None | None | ISSUE-000_DONE_Report. Unlocks ISSUE-001 after ISSUE-001 workpack is created and approved. | PASS WITH WARNINGS | `feature/issue-000-repo-constitution-verification` | Founder Acceptance: Accepted. Metadata cleanup and legacy path residue remain non-blocking governance cleanup items. |
| ISSUE-001 | Phase 0 | Project / Workspace Foundation | ISSUE-000 | ISSUE-000_DONE_Report; verification result | ISSUE-001_DONE_Report; ISSUE-001_Foundation_Assessment; ISSUE-001_Workspace_Tenant_Model. Unlocks ISSUE-002 after founder acceptance and ISSUE-002 workpack approval. | PASS WITH WARNINGS | `feature/issue-001-core-workspace-tenant-foundation` | Founder Acceptance: Accepted. Workspace remains the MVP01 tenant boundary foundation. |
| ISSUE-002 | Phase 1 | Supabase / Env Setup | ISSUE-001 | ISSUE-001_DONE_Report; foundation assessment; workspace tenant model | ISSUE-002_DONE_Report; ISSUE-002_Supabase_Setup_Notes; ISSUE-002_Env_Key_Plan; placeholder-only .env.example. Unlocks ISSUE-003 after founder acceptance and ISSUE-003 workpack approval. | PASS WITH WARNINGS | `feature/issue-002-supabase-client-environment-foundation` | Founder Acceptance: Accepted. Current Supabase guidance prefers publishable keys; required baseline anon-key variable retained as a compatibility contract pending later approved naming review. |
| ISSUE-003 | Phase 1 | Next.js App Foundation | ISSUE-002 | ISSUE-002_DONE_Report; Supabase setup notes; environment key plan; placeholder-only .env.example | ISSUE-003_DONE_Report; ISSUE-003_App_Foundation_Notes; ISSUE-003_Validation_Notes; working Next.js App Router foundation. Unlocks ISSUE-004 after founder acceptance and ISSUE-004 workpack approval. | PASS WITH WARNINGS | `feature/issue-003-nextjs-app-foundation` | Founder Acceptance: Accepted. Patched PostCSS override retained; in-app browser automation was unavailable, while build, typecheck, lint, audit, secret check, and local HTTP smoke checks passed. |
| ISSUE-004 | Phase 1 | Database P0 Tables | ISSUE-003 | ISSUE-003_DONE_Report; app foundation notes | ISSUE-004_DONE_Report; ISSUE-004_DB_Table_Notes; ISSUE-004_Migration_Notes; `supabase/migrations/0001_create_p0_core_tables.sql`. Unlocks ISSUE-005 after founder acceptance and ISSUE-005 workpack approval. | PASS WITH WARNINGS | `feature/issue-004-supabase-p0-tables` | Founder Acceptance: Accepted. RLS remains intentionally deferred; do not expose P0 tables through production Data APIs until an approved RLS issue is complete. |
| ISSUE-005 | Phase 1 | Indexes / updated_at | ISSUE-004 | ISSUE-004_DONE_Report; DB table notes | ISSUE-005_DONE_Report; ISSUE-005_Index_Notes; ISSUE-005_Trigger_Notes; `supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql`. Unlocks ISSUE-006 after founder acceptance and ISSUE-006 workpack approval. | PASS WITH WARNINGS | `feature/issue-005-indexes-updated-at-triggers` | Founder Acceptance: Accepted. Supabase CLI unavailable during execution; SQL validation was static only. |
| ISSUE-006 | Phase 1 | Auth / Profiles | ISSUE-005 | ISSUE-005_DONE_Report; index / trigger notes | ISSUE-006_DONE_Report; ISSUE-006_Profile_Model_Notes; ISSUE-006_Auth_Boundary_Notes; `supabase/migrations/0003_create_auth_profiles.sql`. Unlocks CHECKPOINT-001 and ISSUE-007 architecture alignment after founder acceptance. | PASS WITH WARNINGS | `feature/issue-006-auth-and-profiles` | Founder Acceptance: Accepted. Profile provisioning and workspace membership remain deferred. Supabase CLI unavailable; SQL validation was static only. |
| CHECKPOINT-001 | Gate | ISSUE-000 to ISSUE-006 Foundation Review | ISSUE-006 | ISSUE-000 through ISSUE-006 accepted outputs | CHECKPOINT-001_Findings_Report; CHECKPOINT-001_Risk_Register; CHECKPOINT-001_Go_No_Go_Decision. Unlocks ISSUE-007 after founder acceptance and ISSUE-007 workpack approval. | GO WITH WARNINGS | `checkpoint/checkpoint-001-issue-000-to-006-review` | Founder Acceptance: Accepted. Non-blocking warnings accepted for architecture alignment. |
| ISSUE-007 | Phase 0 | Architecture Alignment | CHECKPOINT-001 | CHECKPOINT-001_Go_No_Go_Decision; CHECKPOINT-001_Findings_Report; ISSUE-007_Source_Alignment_Reference | ISSUE-007_DONE_Report; ISSUE-007_Architecture_Alignment_Notes; ISSUE-007_Phase_Issue_Alignment_Notes; ISSUE-007_Flow_Alignment_Notes; ISSUE-007_Reserved_Boundary_Notes; updated MVP01 baseline docs. Unlocks ISSUE-008 after founder acceptance and ISSUE-008 workpack approval. | PASS WITH WARNINGS | `feature/issue-007-architecture-alignment` | Founder Acceptance: Accepted. ISSUE-007 is Architecture Alignment, not RLS. Legacy path residue and stale historical handoff wording remain non-blocking cleanup items. |
| ISSUE-008 | Phase 2 | Module Library Foundation | ISSUE-007 | ISSUE-007_DONE_Report; architecture, phase/issue, flow, and reserved-boundary notes; updated baseline docs | MVP01_MODULE_LIBRARY_MATRIX; ISSUE-008_DONE_Report; ISSUE-008_Module_Library_Notes; ISSUE-008_Plan_Depth_Matrix_Notes; ISSUE-008_Included_Reserved_Rules; ISSUE-008_Handoff_to_Industry_Template. Unlocks ISSUE-009 after founder acceptance and ISSUE-009 workpack approval. | PASS WITH WARNINGS | `feature/issue-008-module-library-foundation` | Founder Acceptance: Accepted. Module library is documentation-only; plan depth is not RLS or data isolation. Legacy path residue and stale historical handoff wording remain non-blocking cleanup items. |
| ISSUE-009 | Phase 2 | Industry Template Foundation | ISSUE-008 | ISSUE-008_DONE_Report; module library notes; MVP01_MODULE_LIBRARY_MATRIX; ISSUE-008 handoff to industry template | MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md; ISSUE-009_DONE_Report.md; ISSUE-009_Industry_Template_Notes.md; ISSUE-009_Template_Module_Mapping.md; ISSUE-009_Template_Flow_Notes.md; ISSUE-009_Handoff_to_End_Customer_Interface.md. Unlocks ISSUE-010 after founder acceptance and ISSUE-010 workpack approval. | PASS WITH WARNINGS | `feature/issue-009-industry-template-foundation` | Founder Acceptance: Accepted. Industry template foundation is documentation-only; Aircon / Home Service Starter Template is the MVP01 primary template. ISSUE-010 may proceed after workpack approval and execution on its own branch. |
| ISSUE-010 | Phase 3 | End Customer Interface Basic | ISSUE-009 | ISSUE-009_DONE_Report; industry template notes; MVP01_INDUSTRY_TEMPLATE_FOUNDATION; ISSUE-009 handoff to End Customer Interface | src/app/end-customer/page.tsx; ISSUE-010_DONE_Report.md; ISSUE-010_Interface_Scope_Notes.md; ISSUE-010_UX_Flow_Notes.md; ISSUE-010_Implementation_Notes.md; ISSUE-010_Handoff_to_Client_Workspace.md. Unlocks ISSUE-011 after founder acceptance and ISSUE-011 workpack approval. | PASS WITH WARNINGS | `feature/issue-010-end-customer-interface-basic` | Founder Acceptance: Accepted. End Customer Interface Basic is local and non-persistent; WhatsApp CTA is manual-assisted only. ISSUE-011 may proceed after workpack approval and execution on its own branch. |
| ISSUE-011 | Phase 3 | Client Workspace Basic | ISSUE-010 | ISSUE-010_DONE_Report; end customer interface notes | src/app/workspace/page.tsx; ISSUE-011_DONE_Report.md; ISSUE-011_Workspace_Scope_Notes.md; ISSUE-011_Client_Workspace_UX_Notes.md; ISSUE-011_Implementation_Notes.md; ISSUE-011_Handoff_to_Lead_Customer_Flow.md. Unlocks ISSUE-012 after founder acceptance and ISSUE-012 workpack approval. | PASS WITH WARNINGS | `feature/issue-011-client-workspace-basic` | Founder Acceptance: Accepted. Client Workspace Basic is static and non-persistent; manual-assisted workflow only. ISSUE-012 may proceed after workpack approval and execution on its own branch. |
| ISSUE-012 | Phase 4 | Lead / Customer Flow | ISSUE-011 | ISSUE-011_DONE_Report; client workspace notes; src/app/workspace/page.tsx; ISSUE-011 handoff to Lead / Customer Flow | src/app/workspace/page.tsx; ISSUE-012_DONE_Report.md; ISSUE-012_Lead_Customer_Scope_Notes.md; ISSUE-012_UX_Flow_Notes.md; ISSUE-012_Implementation_Notes.md; ISSUE-012_Handoff_to_Quote_Estimate.md. Unlocks ISSUE-013 after founder acceptance and ISSUE-013 workpack approval. | PASS WITH WARNINGS | `feature/issue-012-lead-customer-flow` | Founder Acceptance: Accepted. Lead / Customer Flow is static and non-persistent; convert-to-customer is local preview only. ISSUE-013 may proceed after workpack approval and execution on its own branch. |
| ISSUE-013 | Phase 4 | Quote Estimate Basic | ISSUE-012 | ISSUE-012_DONE_Report; lead/customer notes; src/app/workspace/page.tsx; ISSUE-012 handoff to Quote Estimate | src/app/workspace/page.tsx; ISSUE-013_DONE_Report.md; ISSUE-013_Quote_Estimate_Scope_Notes.md; ISSUE-013_UX_Flow_Notes.md; ISSUE-013_Implementation_Notes.md; ISSUE-013_Handoff_to_Booking_Basic.md. Unlocks ISSUE-014 after founder acceptance and ISSUE-014 workpack approval. | PASS WITH WARNINGS | `feature/issue-013-quote-estimate-basic` | Founder Acceptance: Accepted. Quote Estimate Basic is static and non-persistent; estimate preview is not a real quote engine. ISSUE-014 may proceed after workpack approval and execution on its own branch. |
| ISSUE-014 | Phase 4 | Booking Basic | ISSUE-013 | ISSUE-013_DONE_Report; quote estimate notes; src/app/workspace/page.tsx; ISSUE-013 handoff to Booking Basic | src/app/workspace/page.tsx; ISSUE-014_DONE_Report.md; ISSUE-014_Booking_Scope_Notes.md; ISSUE-014_UX_Flow_Notes.md; ISSUE-014_Implementation_Notes.md; ISSUE-014_Handoff_to_Payment_Basic.md. Unlocks ISSUE-015 after founder acceptance and ISSUE-015 workpack approval. | PASS WITH WARNINGS | `feature/issue-014-booking-basic` | Founder Acceptance: Accepted. Booking Basic is static and non-persistent; date/time, booking status, and confirmation copy are local preview only. ISSUE-015 may proceed after workpack approval and execution on its own branch. |
| ISSUE-015 | Phase 4 | Payment Basic | ISSUE-014 | ISSUE-014_DONE_Report; booking notes | Cash; static PayNow QR; payment status; paid/outstanding tracking | Pending |  | Locked until ISSUE-015 workpack approval and execution on its own branch. |
| ISSUE-016 | Phase 5 | Admin Setting Basic | ISSUE-015 | ISSUE-015_DONE_Report; payment notes | Business info; GST setting; PayNow QR; payment terms | Pending |  |  |
| ISSUE-017 | Phase 5 | Reminder + Basic Report | ISSUE-016 | ISSUE-016_DONE_Report; admin setting notes | Payment, follow-up, maintenance reminder basics; monthly value view | Pending |  |  |
| ISSUE-018 | Phase 6-7 | Optimaks OS Basic + Demo / Release Pack | ISSUE-017 | ISSUE-017_DONE_Report; reminder/report notes | Client list; plan status; onboarding status; workspace link; demo pack; release pack | Pending |  |  |

---

## 4. Open Warnings

| Source | Warning | Impact | Follow-up | Status |
|---|---|---|---|---|
| ISSUE-000 / CHECKPOINT-001 | Legacy top-level `20_Issues/PREP-000` and `20_Issues/_TEMPLATE` path residue remains. | Non-blocking; normalized MVP01 issue records use `12_Projects/MVP01/20_Issues/`. | Governance cleanup issue if founder wants repository cleanup. | Open |
| ISSUE-001 to ISSUE-005 | Older DONE reports contain stale pre-acceptance "next issue cannot start" handoff text. | Non-blocking; Founder Review sections and this chain register record acceptance. | Optional historical report normalization issue. | Open |
| ISSUE-003 | Patched PostCSS override retained because `next@16.2.6` pulls an advisory-affected PostCSS version without override. | Non-blocking; audit passed after override. | Recheck during future dependency upgrade. | Open |
| ISSUE-003 | In-app browser automation unavailable due to Windows sandbox bootstrap issue. | Non-blocking; local HTTP smoke check passed. | Optional visual browser review during founder review. | Open |
| ISSUE-002 / ISSUE-003 | Supabase key naming review remains deferred before client initialization. | Non-blocking; no Supabase client initialized yet. | Supabase client integration issue. | Open |
| ISSUE-004 to ISSUE-006 | Supabase CLI unavailable; SQL validation was static only. | Non-blocking for documented foundation work; runtime validation still needed before production use. | Approved Supabase-enabled validation environment. | Open |
| ISSUE-007 | CHECKPOINT-001 still contains old RLS next-gate wording in its historical report title/body. | Non-blocking; ISSUE-007 workpack and this aligned baseline supersede the old label. | Optional checkpoint wording cleanup if founder approves. | Open |

---

## 5. Cross-Issue Decisions

| Decision ID | Source | Decision | Affects | Notes |
|---|---|---|---|---|
| DEC-MVP01-001 | ISSUE-000 | Founder accepted ISSUE-000 as PASS WITH WARNINGS. | ISSUE-001 | ISSUE-001 unlocked after workpack approval. |
| DEC-MVP01-002 | ISSUE-001 | Founder accepted ISSUE-001 as PASS WITH WARNINGS. | ISSUE-002 | ISSUE-002 unlocked after workpack approval. |
| DEC-MVP01-003 | ISSUE-002 | Founder accepted ISSUE-002 as PASS WITH WARNINGS. | ISSUE-003 | ISSUE-003 unlocked after workpack approval. |
| DEC-MVP01-004 | ISSUE-003 | Founder accepted ISSUE-003 as PASS WITH WARNINGS. | ISSUE-004 | ISSUE-004 unlocked after workpack approval. |
| DEC-MVP01-005 | ISSUE-004 | Founder accepted ISSUE-004 as PASS WITH WARNINGS. | ISSUE-005 | ISSUE-005 unlocked after workpack approval. |
| DEC-MVP01-006 | ISSUE-005 | Founder accepted ISSUE-005 as PASS WITH WARNINGS. | ISSUE-006 | ISSUE-006 unlocked after workpack approval. |
| DEC-MVP01-007 | ISSUE-006 | Founder accepted ISSUE-006 as PASS WITH WARNINGS. | CHECKPOINT-001 / ISSUE-007 | CHECKPOINT-001 completed and was accepted as GO WITH WARNINGS. |
| DEC-MVP01-008 | CHECKPOINT-001 | Founder accepted CHECKPOINT-001 as GO WITH WARNINGS. | ISSUE-007 | ISSUE-007 architecture alignment unlocked after workpack approval. |
| DEC-MVP01-009 | ISSUE-007 | ISSUE-007 corrects architecture drift and aligns MVP01 to Starter Complete + Optimaks OS Basic. | ISSUE-008 onward | Recorded by CR-MVP01-002; founder review pending. |
| DEC-MVP01-010 | ISSUE-008 | ISSUE-008 establishes the module library and plan-depth matrix as documentation-only baseline guidance. | ISSUE-009 onward | Recorded by CR-MVP01-003; founder accepted. |
| DEC-MVP01-011 | ISSUE-009 | ISSUE-009 establishes the Aircon / Home Service Starter Template foundation as documentation-only template guidance. | ISSUE-010 onward | Recorded by CR-MVP01-004; founder accepted. |
| DEC-MVP01-012 | ISSUE-010 | ISSUE-010 establishes the public End Customer Interface Basic route for the Aircon / Home Service Starter Template. | ISSUE-011 onward | Recorded by CR-MVP01-005; founder accepted. |
| DEC-MVP01-013 | ISSUE-011 | ISSUE-011 establishes the Client Workspace Basic route for the Aircon / Home Service Starter Template. | ISSUE-012 onward | Recorded by CR-MVP01-006; founder accepted. |
| DEC-MVP01-014 | ISSUE-012 | ISSUE-012 establishes the Lead / Customer Flow inside Client Workspace Basic for the Aircon / Home Service Starter Template. | ISSUE-013 onward | Recorded by CR-MVP01-007; founder accepted. |
| DEC-MVP01-015 | ISSUE-013 | ISSUE-013 establishes Quote Estimate Basic inside Client Workspace Basic for the Aircon / Home Service Starter Template. | ISSUE-014 onward | Recorded by CR-MVP01-008; founder review pending. |
| DEC-MVP01-016 | ISSUE-014 | ISSUE-014 establishes Booking Basic inside Client Workspace Basic for the Aircon / Home Service Starter Template. | ISSUE-015 onward | Recorded by CR-MVP01-009; founder review pending. |

---

## 6. Handoff Review Notes

```text
Latest completed issue: ISSUE-014 - Booking Basic
Latest execution status: PASS WITH WARNINGS
Founder Acceptance: Accepted
Next issue allowed to start? Yes, ISSUE-015 may proceed after ISSUE-015 workpack approval and execution on its own branch.
Warnings carried forward:
1. Legacy path residue remains outside normalized MVP01 records.
2. Older DONE report handoff sections contain stale pre-acceptance wording.
3. CHECKPOINT-001 historical wording still references the old RLS next-gate label.
4. Supabase CLI remained unavailable for prior SQL runtime validation.
5. ISSUE-010 is local and non-persistent; Client Workspace intake, persistence, API routes, server actions, Supabase writes, auth, payment gateway, and WhatsApp API remain forbidden until later approved workpacks.
6. ISSUE-011 is static and non-persistent; Lead / Customer persistence, API routes, server actions, Supabase writes, auth, RLS, Optimaks OS UI, technician portal, and ISSUE-012 implementation remain forbidden until later approved workpacks.
7. ISSUE-012 is static and non-persistent; quote estimate persistence, booking, payment, reminder, persistence, API routes, server actions, Supabase writes, auth, RLS, Optimaks OS UI, technician portal, and future issue work remain forbidden until later approved workpacks.
8. ISSUE-013 is static and non-persistent; real quote engine, invoice generation, PDF generation, payment gateway, booking implementation, persistence, API routes, server actions, Supabase writes, auth, RLS, Optimaks OS UI, technician portal, and ISSUE-014 implementation remain forbidden until later approved workpacks.
9. ISSUE-014 is static and non-persistent; real scheduler engine, calendar integration, technician assignment, payment implementation, reminder implementation, persistence, API routes, server actions, Supabase writes, auth, RLS, Optimaks OS UI, technician portal, and ISSUE-015 implementation remain forbidden until later approved workpacks.

Required files next issue must read:
- AGENTS.md
- 01_Constitution/CURRENT_CONSTITUTION.md
- 01_Constitution/ACTIVE_STANDARDS_INDEX.md
- 12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- src/app/end-customer/page.tsx
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Interface_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Handoff_to_Client_Workspace.md
- src/app/workspace/page.tsx
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Workspace_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Client_Workspace_UX_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Handoff_to_Lead_Customer_Flow.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Booking_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Handoff_to_Payment_Basic.md
```

---

## 7. Normalized MVP01 Path Convention

Use these paths for MVP01 project baseline and issue execution records:

```text
12_Projects/MVP01/00_Project_Baseline/
12_Projects/MVP01/20_Issues/
12_Projects/MVP01/30_Checkpoints/
```

Deprecated paths must not be used for new MVP01 work:

```text
20_Issues/MVP01/...
12_Projects/MVP01/ISSUE-xxx...
```
