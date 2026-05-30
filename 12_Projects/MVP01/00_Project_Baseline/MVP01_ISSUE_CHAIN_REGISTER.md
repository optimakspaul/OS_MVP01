# MVP01 Issue Chain Register

**Document Type:** MVP Issue Chain Register  
**Version:** v1.7.9.4-project-baseline-governance  
**Status:** Active  
**Applies To:** MVP01 issue dependency, handoff, PR, and merge tracking  
**Related Standards:** `03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md`, `03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md`

---

## 1. Purpose

This register tracks issue sequence, dependency, handoff, validation status, and completion evidence for MVP01.

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
| ISSUE-000 | Phase 0 | Repository and Constitution Context Verification | None | None | Unlocks ISSUE-001 after ISSUE-001 workpack is created and approved | PASS WITH WARNINGS | `feature/issue-000-repo-constitution-verification` | Founder Acceptance: Accepted. Metadata cleanup and issue-record path normalization remain follow-up governance cleanup items. |
| ISSUE-001 | Phase 1 | Core Workspace and Tenant Foundation | ISSUE-000 | ISSUE-000_DONE_Report; verification result | ISSUE-001_DONE_Report; ISSUE-001_Foundation_Assessment; ISSUE-001_Workspace_Tenant_Model. Unlocks ISSUE-002 after founder acceptance and ISSUE-002 workpack approval. | PASS WITH WARNINGS | `feature/issue-001-core-workspace-tenant-foundation` | Founder Acceptance: Accepted. Workspace is the MVP01 tenant boundary; metadata cleanup and issue-record path normalization remain non-blocking follow-up items. |
| ISSUE-002 | Phase 1 | Supabase Client and Environment Foundation | ISSUE-001 | ISSUE-001_DONE_Report; foundation assessment; workspace tenant model | ISSUE-002_DONE_Report; ISSUE-002_Supabase_Setup_Notes; ISSUE-002_Env_Key_Plan; placeholder-only .env.example. Unlocks ISSUE-003 after founder acceptance and ISSUE-003 workpack approval. | PASS WITH WARNINGS | `feature/issue-002-supabase-client-environment-foundation` | Founder Acceptance: Accepted. Current Supabase guidance prefers publishable keys; required baseline anon-key variable retained as a compatibility contract pending later approved naming review. |
| ISSUE-003 | Phase 1 | Next.js App Foundation | ISSUE-002 | ISSUE-002_DONE_Report; Supabase setup notes; environment key plan; placeholder-only .env.example | ISSUE-003_DONE_Report; ISSUE-003_App_Foundation_Notes; ISSUE-003_Validation_Notes; working Next.js App Router foundation; placeholder-only .env.example. Unlocks ISSUE-004 after founder acceptance and ISSUE-004 workpack approval. | PASS WITH WARNINGS | `feature/issue-003-nextjs-app-foundation` | Founder Acceptance: Accepted. Patched PostCSS override retained; in-app browser automation was unavailable, while build, typecheck, lint, audit, secret check, and local HTTP smoke checks passed. Issue path normalization has been manually corrected into `12_Projects/MVP01/20_Issues`. |
| ISSUE-004 | Phase 2 | Supabase P0 Tables | ISSUE-003 | ISSUE-003_DONE_Report; app foundation notes | ISSUE-004_DONE_Report; ISSUE-004_DB_Table_Notes; ISSUE-004_Migration_Notes; `supabase/migrations/0001_create_p0_core_tables.sql`. Unlocks ISSUE-005 after founder acceptance and ISSUE-005 workpack approval. | PASS WITH WARNINGS | `feature/issue-004-supabase-p0-tables` | Founder review pending. RLS is intentionally deferred to ISSUE-007; do not expose the P0 tables through production Data APIs until the approved RLS issue is complete. updated_at triggers and performance indexes remain deferred to ISSUE-005. Supabase CLI unavailable; SQL validation was static only. |
| ISSUE-005 | Phase 2 | Indexes and updated_at Triggers | ISSUE-004 | ISSUE-004_DONE_Report; DB table notes | DB performance / timestamp support | Pending |  |  |
| ISSUE-006 | Phase 2 | Auth and Profiles | ISSUE-005 | ISSUE-005_DONE_Report; index / trigger notes | Auth / profile foundation | Pending |  |  |
| ISSUE-007 | Phase 2 | RLS Helper Functions and Policies | ISSUE-006 | ISSUE-006_DONE_Report; auth / profile notes | RLS policy foundation | Pending |  |  |
| ISSUE-008 | Phase 3 | Client Workspace | ISSUE-007 | ISSUE-007_DONE_Report; RLS policy notes | Client workspace foundation | Pending |  |  |
| ISSUE-009 | Phase 3 | App Shell and Shared UI | ISSUE-008 | ISSUE-008_DONE_Report; client workspace notes | Shared app UI foundation | Pending |  |  |
| ISSUE-010 | Phase 3 | Follow-up WhatsApp | ISSUE-009 | ISSUE-009_DONE_Report; app shell notes | Manual-assisted WhatsApp follow-up | Pending |  |  |
| ISSUE-011 | Phase 3 | Booking Calendar | ISSUE-010 | ISSUE-010_DONE_Report; WhatsApp follow-up notes | Booking calendar foundation | Pending |  |  |
| ISSUE-012 | Phase 3 | Job Card | ISSUE-011 | ISSUE-011_DONE_Report; booking notes | Technician lightweight job card | Pending |  |  |
| ISSUE-013 | Phase 4 | Invoice Tracker | ISSUE-012 | ISSUE-012_DONE_Report; job card notes | Invoice / payment tracker foundation | Pending |  |  |
| ISSUE-014 | Phase 4 | Maintenance Reminder | ISSUE-013 | ISSUE-013_DONE_Report; invoice tracker notes | Maintenance reminder foundation | Pending |  |  |
| ISSUE-015 | Phase 4 | Client Portal / Lightweight Access Boundary | ISSUE-014 | ISSUE-014_DONE_Report; reminder notes | Client access boundary | Pending |  |  |
| ISSUE-016 | Phase 5 | GitHub Automation | ISSUE-015 | ISSUE-015_DONE_Report; client access boundary notes | GitHub automation notes | Pending |  |  |
| ISSUE-017 | Phase 5 | Additional Gating | ISSUE-016 | ISSUE-016_DONE_Report; automation notes | Additional validation gates | Pending |  |  |
| ISSUE-018 | Phase 5 | Deployment Checklist | ISSUE-017 | ISSUE-017_DONE_Report; gating notes | Deployment readiness checklist | Pending |  |  |

---

## 4. Open Warnings

| Source Issue | Warning | Impact | Follow-up Issue | Status |
|---|---|---|---|---|
| ISSUE-000 | Metadata cleanup remains a follow-up governance cleanup item. | Non-blocking; does not prevent ISSUE-001 workpack preparation or approved execution. | Governance cleanup issue to be created separately. | Open |
| ISSUE-003 | Patched PostCSS override retained because `next@16.2.6` pulls an advisory-affected PostCSS version without override. | Non-blocking; audit passes with zero vulnerabilities after override. | Recheck during future dependency upgrade. | Open |
| ISSUE-003 | In-app browser automation unavailable due to Windows sandbox bootstrap issue. | Non-blocking; local HTTP smoke check passed with HTTP 200. | Optional visual browser review during founder review. | Open |
| ISSUE-003 | Supabase key naming review remains deferred before client initialization. | Non-blocking; ISSUE-003 does not initialize Supabase client. | Supabase client integration issue. | Open |
| ISSUE-003 | Issue path normalization was manually corrected into project-local structure. | Non-blocking; ensure all future issue references use `12_Projects/MVP01/20_Issues/...`. | ISSUE-004 workpack and future docs. | Controlled |

---

## 5. Cross-Issue Decisions

| Decision ID | Source Issue | Decision | Affects Issues | Notes |
|---|---|---|---|---|
| DEC-MVP01-001 | ISSUE-000 | Founder accepted ISSUE-000 as PASS WITH WARNINGS. | ISSUE-001 | ISSUE-001 unlocks after its workpack is created and approved. |
| DEC-MVP01-002 | ISSUE-001 | Founder accepted ISSUE-001 as PASS WITH WARNINGS. | ISSUE-002 | ISSUE-002 unlocks after its workpack is created and approved. |
| DEC-MVP01-003 | ISSUE-002 | Founder accepted ISSUE-002 as PASS WITH WARNINGS. | ISSUE-003 | ISSUE-003 unlocks after its workpack is created and approved. |
| DEC-MVP01-004 | ISSUE-003 | Founder accepted ISSUE-003 as PASS WITH WARNINGS. | ISSUE-004 | ISSUE-004 unlocks after ISSUE-004 workpack is created and approved on its own branch. |

---

## 6. Handoff Review Notes

Use this section after every issue merge or accepted PASS WITH WARNINGS.

```text
Latest completed issue: ISSUE-003 - Next.js App Foundation
Latest accepted status: PASS WITH WARNINGS
Founder Acceptance: Accepted
Next issue allowed to start? Yes with warnings, after ISSUE-004 workpack is created and approved on its own branch.
Warnings carried forward:
1. Patched PostCSS override retained; recheck during future dependency upgrade.
2. In-app browser automation unavailable; HTTP smoke check passed with HTTP 200.
3. Supabase key naming review remains deferred before client initialization.
4. Issue path normalization has been manually corrected into 12_Projects/MVP01/20_Issues; future docs must use the normalized path.

Required files next issue must read:
- AGENTS.md
- 01_Constitution/CURRENT_CONSTITUTION.md
- 01_Constitution/ACTIVE_STANDARDS_INDEX.md
- 12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_App_Foundation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_Validation_Notes.md
- .env.example
```

---

## 7. Normalized MVP01 Path Convention

Use these paths for MVP01 project baseline and issue execution records:

```text
12_Projects/MVP01/00_Project_Baseline/
12_Projects/MVP01/20_Issues/
```

Project baseline files belong in:

```text
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

Issue execution records belong in:

```text
12_Projects/MVP01/20_Issues/ISSUE-000/
12_Projects/MVP01/20_Issues/ISSUE-001-core-workspace-tenant-foundation/
12_Projects/MVP01/20_Issues/ISSUE-002-supabase-client-environment-foundation/
12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/
```

Deprecated paths must not be used for new work:

```text
20_Issues/MVP01/...
12_Projects/MVP01/ISSUE-xxx...
```

---

## 8. 3–5 Issue Harness Review Input

After ISSUE-003 to ISSUE-005, use this register to support review of:

```text
TEST-CORE-001
TEST-AIRCON-001
STD-DEV-049
CHK-DEV-020
PROD-006
```

Review Questions:

```text
1. Which issues had repeated warnings?
2. Which issues lacked validation evidence?
3. Which issue dependencies were unclear?
4. Which file boundaries were insufficient?
5. Which checks should be automated?
6. Which business or RLS test cases should be added?
```
