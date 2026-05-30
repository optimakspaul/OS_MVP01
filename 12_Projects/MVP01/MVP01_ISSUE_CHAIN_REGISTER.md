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
| ISSUE-002 | Phase 1 | Supabase Client and Environment Foundation | ISSUE-001 | ISSUE-001_DONE_Report; foundation assessment; workspace tenant model | Supabase setup notes | Pending |  |  |
| ISSUE-003 | Phase 1 | Next.js App Foundation | ISSUE-002 | ISSUE-002_DONE_Report; Supabase setup notes | App shell / route foundation | Pending |  |  |
| ISSUE-004 | Phase 2 | Supabase P0 Tables | ISSUE-003 | ISSUE-003_DONE_Report; app foundation notes | DB table foundation | Pending |  |  |
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
| ISSUE-000 | Metadata cleanup and issue-record path normalization remain follow-up governance cleanup items. | Non-blocking; does not prevent ISSUE-001 workpack preparation or approved execution. | Governance cleanup issue to be created separately. | Open |

---

## 5. Cross-Issue Decisions

| Decision ID | Source Issue | Decision | Affects Issues | Notes |
|---|---|---|---|---|
| DEC-MVP01-001 | ISSUE-000 | Founder accepted ISSUE-000 as PASS WITH WARNINGS. | ISSUE-001 | ISSUE-001 unlocks after its workpack is created and approved. |

---

## 6. Handoff Review Notes

Use this section after every issue merge or accepted PASS WITH WARNINGS.

```text
Latest completed issue: ISSUE-000 - Repository and Constitution Context Verification
Next issue allowed to start? Yes with warnings, after ISSUE-001 workpack is created and approved
Warnings carried forward: Metadata cleanup and issue-record path normalization remain follow-up governance cleanup items
Required files next issue must read: 20_Issues/ISSUE-000/ISSUE-000_DONE_Report.md; AGENTS.md; 01_Constitution/CURRENT_CONSTITUTION.md; 01_Constitution/ACTIVE_STANDARDS_INDEX.md; 12_Projects/MVP01/README_MVP01.md; 12_Projects/MVP01/MVP01_SCOPE_BASELINE.md; 12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md; 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 7. 3–5 Issue Harness Review Input

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
