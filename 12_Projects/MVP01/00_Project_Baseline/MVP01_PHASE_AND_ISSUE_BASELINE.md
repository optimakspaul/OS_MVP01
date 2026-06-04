# MVP01_PHASE_AND_ISSUE_BASELINE.md

## 1. Baseline Status

- Project: MVP01
- Version: v1.7.9.4-project-baseline-governance / v0.3 Flow alignment
- Status: Locked v0.3 architecture alignment / Founder Review Required for changes
- Canonical MVP Definition: Starter Complete + Optimaks OS Basic
- Phase Range: Phase 0 to Phase 7
- Issue Range: ISSUE-000 to ISSUE-018
- Total Issues: 19

## 2. Phase Baseline

| Phase | Name | Objective | Entry Criteria | Exit Criteria |
|---|---|---|---|---|
| Phase 0 | Context / Constitution Verification | Confirm repo, constitution, baseline, AI Harness, issue chain, checkpoint, and architecture alignment are ready. | Document library and project baseline present | ISSUE-000, ISSUE-001, CHECKPOINT-001, and ISSUE-007 accepted or accepted with warnings |
| Phase 1 | Shared Core Foundation | Establish shared Auth, Workspace, RLS, Profile, Base DB, environment, and app-shell foundations. | Phase 0 bootstrap accepted | ISSUE-002 to ISSUE-006 complete and accepted |
| Phase 2 | Module Foundation | Establish Module Library Foundation and Starter / Grow / Pro plan depth mapping. | Architecture alignment accepted | ISSUE-008 and ISSUE-009 complete |
| Phase 3 | End Customer Interface + Client Workspace Basic | Establish external request intake and SME owner workspace entry. | Module and template boundaries accepted | ISSUE-010 and ISSUE-011 complete |
| Phase 4 | Starter Operation Flow | Establish Request to Lead to Customer to Quote to Booking to Payment at Starter depth. | Phase 3 foundations complete | ISSUE-012 to ISSUE-015 complete |
| Phase 5 | Admin Setting / Reminder / Report | Establish business settings, GST / PayNow basics, reminders, and basic value reporting. | Starter operation flow complete | ISSUE-016 and ISSUE-017 complete |
| Phase 6 | Demo Readiness | Prepare demo data, demo flow, known limitations, and reserved-feature boundaries. | Starter and admin/report flow complete | Demo readiness portion of ISSUE-018 complete |
| Phase 7 | Release / Handover | Complete release note, handover guide, onboarding checklist, and founder review. | Demo readiness complete | Release / handover portion of ISSUE-018 complete |

## 3. Issue Baseline

| Issue | Phase | Title | Purpose | Depends On | Required Output |
|---|---|---|---|---|---|
| ISSUE-000 | Phase 0 | Repo / Constitution Verification | Confirm repo, file structure, constitution, and development standards are usable. | None | Verification report / DONE report |
| ISSUE-001 | Phase 0 | Project / Workspace Foundation | Confirm project workspace and foundation data-domain assumptions. | ISSUE-000 | Foundation assessment and workspace / tenant model notes |
| ISSUE-002 | Phase 1 | Supabase / Env Setup | Establish Supabase client contract, environment placeholders, and basic connection setup notes. | ISSUE-001 | Supabase setup notes and environment key plan |
| ISSUE-003 | Phase 1 | Next.js App Foundation | Establish Next.js app foundation, routing, and layout skeleton. | ISSUE-002 | App foundation and validation notes |
| ISSUE-004 | Phase 1 | Database P0 Tables | Establish required MVP01 P0 database tables. | ISSUE-003 | DB table and migration notes |
| ISSUE-005 | Phase 1 | Indexes / updated_at | Establish indexes, updated_at trigger, and basic DB hygiene. | ISSUE-004 | Index and trigger notes |
| ISSUE-006 | Phase 1 | Auth / Profiles | Establish auth boundary, profile model, and post-login user foundation. | ISSUE-005 | Auth and profile notes |
| ISSUE-007 | Phase 0 | Architecture Alignment | Lock Starter / Grow / Pro / Platform naming and MVP01 scope. | CHECKPOINT-001 | Architecture, phase/issue, flow, and reserved-boundary notes |
| ISSUE-008 | Phase 2 | Module Library Foundation | Establish module list, plan depth matrix, and included/reserved rule. | ISSUE-007 | Module library foundation notes |
| ISSUE-009 | Phase 2 | Industry Template Foundation | Establish the primary industry template and future multi-industry placeholders. | ISSUE-008 | Industry template foundation notes |
| ISSUE-010 | Phase 3 | End Customer Interface Basic | Establish intent page, request form, and WhatsApp/social CTA boundary. | ISSUE-009 | End customer interface notes |
| ISSUE-011 | Phase 3 | Client Workspace Basic | Establish client dashboard, navigation, and workspace entry. | ISSUE-010 | Client workspace notes |
| ISSUE-012 | Phase 4 | Lead / Customer Flow | Establish lead list, lead detail, customer profile, and status notes. | ISSUE-011 | Lead / customer flow notes |
| ISSUE-013 | Phase 4 | Quote Estimate Basic | Establish estimate, service item, discount, GST application, and quote status. | ISSUE-012 | Quote estimate notes |
| ISSUE-014 | Phase 4 | Booking Basic | Establish manual booking, date/time, status, and customer/quote linkage. | ISSUE-013 | Booking notes |
| ISSUE-015 | Phase 4 | Payment Basic | Establish Cash, static PayNow QR, payment status, paid, and outstanding tracking. | ISSUE-014 | Payment basic notes |
| ISSUE-016 | Phase 5 | Admin Setting Basic | Establish business info, GST setting, PayNow QR, and payment terms. | ISSUE-015 | Admin setting notes |
| ISSUE-017 | Phase 5 | Reminder + Basic Report | Establish payment, follow-up, maintenance reminder basics, and monthly value view. | ISSUE-016 | Reminder and basic report notes |
| ISSUE-018 | Phase 6-7 | Optimaks OS Basic + Demo / Release Pack | Establish client list, plan status, onboarding status, workspace link, demo pack, and release pack. | ISSUE-017 | Optimaks OS Basic, demo readiness, and release handover notes |

## 4. Flow Baseline

Global flow:

```text
End Customer Interface -> Client Workspace -> Optimaks OS / Platform
```

MVP01 flow:

```text
Request -> Lead -> Customer -> Quote -> Booking -> Payment -> Reminder / Report
```

## 5. Baseline Lock Rule

Once this file is marked `Locked v0.3 architecture alignment` or `Accepted`, changes to phase order, phase meaning, issue ID, issue title, issue dependency, issue split, issue merge, or issue insertion require `MVP01_CHANGE_CONTROL_LOG.md`.

## 6. AI Rule

AI must use this file as the canonical MVP01 phase and issue source of truth.

AI must not treat the old ISSUE-007 RLS implementation label as active after ISSUE-007 Architecture Alignment.
