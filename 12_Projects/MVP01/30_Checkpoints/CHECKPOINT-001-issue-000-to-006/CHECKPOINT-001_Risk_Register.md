# CHECKPOINT-001 Risk Register

**Checkpoint:** CHECKPOINT-001
**Review Range:** ISSUE-000 through ISSUE-006
**Next Gate:** ISSUE-007
**Status:** GO WITH WARNINGS

---

## Risk Register

| ID | Risk | Severity | Blocking? | Evidence | Recommended Action | Owner |
|---|---|---:|---|---|---|---|
| R-001 | Issue chain summary sections are partially stale after ISSUE-003. | Low | No | ISSUE rows are current through ISSUE-006, but Cross-Issue Decisions and Handoff Review Notes stop at ISSUE-003. | Clean up in a governance maintenance issue or later accepted checkpoint update. | Founder / Governance |
| R-002 | Older DONE reports contain pre-acceptance "next issue cannot start" handoff text. | Low | No | ISSUE-001 through ISSUE-005 Founder Review sections are accepted, while older handoff sections still say the next issue could not start before acceptance. | Treat founder acceptance and chain register as current source; optionally normalize prior report text in a cleanup issue. | Founder / Governance |
| R-003 | Legacy path residue remains outside normalized MVP01 issue path. | Low | No | `20_Issues/PREP-000` and `20_Issues/_TEMPLATE` remain. | Leave untouched for checkpoint scope; clean up only through approved governance maintenance. | Founder / Governance |
| R-004 | Supabase SQL validation is static only. | Medium | No | Supabase CLI unavailable; `supabase/config.toml` absent. | Validate migrations in an approved Supabase-enabled environment before production use. | Founder / DB |
| R-005 | RLS is not yet implemented. | High | No for ISSUE-007; Yes for production exposure | Static scan confirms no RLS enablement or policies exist before ISSUE-007. | ISSUE-007 must implement RLS helper functions and policies before any production Data API exposure. | ISSUE-007 |
| R-006 | Production Data API exposure before RLS would be unsafe. | High | No for ISSUE-007; Yes for production exposure | Public tables exist; Supabase guidance requires RLS on exposed schema tables. | Do not expose P0/profile tables through production Data APIs until ISSUE-007 passes. | Founder / ISSUE-007 |
| R-007 | Auth/profile provisioning remains deferred. | Medium | No | ISSUE-006 notes state no automatic profile provisioning was created. | Define provisioning in a later approved onboarding/auth flow; do not add during ISSUE-007 unless workpack allows. | Future issue |
| R-008 | Workspace membership remains deferred. | Low | No | ISSUE-006 uses direct `profiles.workspace_id` and explicitly excludes membership tables. | Keep ISSUE-007 policies aligned to current direct profile workspace model. | ISSUE-007 |
| R-009 | App foundation regression risk. | Low | No | `npm run lint`, `npm run build`, and `npm run typecheck` passed. | Continue running validation on future implementation issues. | Codex / Founder |
| R-010 | Secret exposure risk. | Low | No | `.env.example` values are empty placeholders; no real secret patterns found; `.env.local` absent and not tracked. | Maintain no-real-secrets rule for all future issues. | All agents |

---

## Required Risk Categories

```text
1. Issue chain continuity risk: Low - chain rows current, lower summaries stale.
2. Founder acceptance risk: Low - acceptance recorded for ISSUE-001 through ISSUE-006.
3. Path normalization risk: Low - normalized MVP01 paths used; legacy residue remains outside active issue records.
4. Environment secret risk: Low - placeholder-only env contract and no real secrets found.
5. App foundation regression risk: Low - lint, build, and typecheck pass.
6. Migration sequence risk: Medium - sequence is present, but runtime SQL validation was not run.
7. Auth/profile boundary risk: Medium - current boundary is documented; provisioning remains deferred.
8. RLS readiness risk: High - RLS is the next required issue and must not be skipped.
9. Production Data API exposure risk: High - blocks production exposure until ISSUE-007 passes.
10. Scope leakage risk: Low - no business tables, membership tables, client code, login UI, API routes, or server actions found.
```

---

## Severity Scale

```text
Low:
Non-blocking and can be tracked.

Medium:
Needs attention but does not block ISSUE-007 if documented.

High:
Should be handled by ISSUE-007 or before production exposure.

Critical:
Blocks ISSUE-007.
```

No Critical risks were found.
