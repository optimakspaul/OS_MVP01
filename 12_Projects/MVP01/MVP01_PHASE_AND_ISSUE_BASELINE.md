# MVP01_PHASE_AND_ISSUE_BASELINE.md

## 1. Baseline Status

- Project: MVP01
- Version: v1.7.9.4-project-baseline-governance
- Status: Locked v0.1 / Founder Review Required for changes
- Phase Range: Phase 0 to Phase 5
- Issue Range: ISSUE-000 to ISSUE-018
- Total Issues: 19

## 2. Phase Baseline

| Phase | Name | Objective | Entry Criteria | Exit Criteria |
|---|---|---|---|---|
| Phase 0 | Repository / Constitution Verification | Verify repo, constitution, baseline, and issue-chain readiness | Document library present | ISSUE-000 accepted or accepted with warnings |
| Phase 1 | App / Environment Foundation | Establish app foundation, workspace assumptions, Supabase client, and Vercel preview path | Phase 0 accepted | ISSUE-001 to ISSUE-003 complete |
| Phase 2 | Database / Auth / RLS Foundation | Establish P0 tables, indexes, triggers, auth, profiles, RLS helper functions and policies | Phase 1 complete | ISSUE-004 to ISSUE-007 complete |
| Phase 3 | Core Workflow Foundation | Establish client workspace, app shell, WhatsApp follow-up, booking calendar, and job card | Phase 2 complete | ISSUE-008 to ISSUE-012 complete |
| Phase 4 | Commercial / Reminder / Portal-Light Foundation | Establish invoice tracker, maintenance reminder, and lightweight client access / portal boundary | Phase 3 complete | ISSUE-013 to ISSUE-015 complete |
| Phase 5 | Automation / Governance / Deployment Gate | Establish GitHub automation, additional gating, and deployment checklist | Phase 4 complete | ISSUE-016 to ISSUE-018 complete |

## 3. Issue Baseline

| Issue | Phase | Title | Purpose | Depends On | Required Output |
|---|---|---|---|---|---|
| ISSUE-000 | Phase 0 | Repository and Constitution Context Verification | Verify repo, constitution, and governance readiness | None | Verification report / DONE report |
| ISSUE-001 | Phase 1 | Core Workspace and Tenant Foundation | Establish workspace and tenant foundation assumptions | ISSUE-000 | Workspace / tenant model notes |
| ISSUE-002 | Phase 1 | Supabase Client and Environment Foundation | Establish Supabase client and env foundation | ISSUE-001 | Supabase setup notes |
| ISSUE-003 | Phase 1 | Next.js App Foundation | Establish app foundation and route baseline | ISSUE-002 | App shell / route foundation notes |
| ISSUE-004 | Phase 2 | Supabase P0 Tables | Create P0 database table foundation | ISSUE-003 | DB table foundation notes |
| ISSUE-005 | Phase 2 | Indexes and updated_at Triggers | Add DB performance and timestamp support | ISSUE-004 | Index / trigger notes |
| ISSUE-006 | Phase 2 | Auth and Profiles | Establish auth and profile foundation | ISSUE-005 | Auth / profile notes |
| ISSUE-007 | Phase 2 | RLS Helper Functions and Policies | Establish RLS helper functions and policies | ISSUE-006 | RLS policy notes |
| ISSUE-008 | Phase 3 | Client Workspace | Establish client workspace foundation | ISSUE-007 | Client workspace notes |
| ISSUE-009 | Phase 3 | App Shell and Shared UI | Establish shared app UI foundation | ISSUE-008 | App shell / shared UI notes |
| ISSUE-010 | Phase 3 | Follow-up WhatsApp | Add manual-assisted WhatsApp follow-up flow | ISSUE-009 | WhatsApp follow-up notes |
| ISSUE-011 | Phase 3 | Booking Calendar | Add booking calendar foundation | ISSUE-010 | Booking calendar notes |
| ISSUE-012 | Phase 3 | Job Card | Add technician lightweight job card foundation | ISSUE-011 | Job card notes |
| ISSUE-013 | Phase 4 | Invoice Tracker | Add manual invoice and payment status tracker | ISSUE-012 | Invoice tracker notes |
| ISSUE-014 | Phase 4 | Maintenance Reminder | Add maintenance reminder foundation | ISSUE-013 | Maintenance reminder notes |
| ISSUE-015 | Phase 4 | Client Portal / Lightweight Access Boundary | Add lightweight client access boundary without full portal expansion | ISSUE-014 | Client access boundary notes |
| ISSUE-016 | Phase 5 | GitHub Automation | Add issue / label / repo automation governance | ISSUE-015 | GitHub automation notes |
| ISSUE-017 | Phase 5 | Additional Gating | Add validation and governance gates | ISSUE-016 | Gating notes |
| ISSUE-018 | Phase 5 | Deployment Checklist | Add deployment checklist and launch readiness control | ISSUE-017 | Deployment checklist notes |

## 4. Baseline Lock Rule

Once this file is marked `Locked v0.1` or `Accepted`, changes to phase order, phase meaning, issue ID, issue title, issue dependency, issue split, issue merge, or issue insertion require `MVP01_CHANGE_CONTROL_LOG.md`.

## 5. AI Rule

AI must use this file as the canonical MVP01 phase and issue source of truth.
