# ISSUE-005 Workpack

**Issue:** ISSUE-005  
**Title:** Indexes and updated_at Triggers  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Database Foundation Implementation  
**Depends On:** ISSUE-004  
**Previous Issue Status:** PASS WITH WARNINGS, Founder Accepted  
**Branch:** feature/issue-005-indexes-updated-at-triggers  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/`

---

## 1. Purpose

ISSUE-005 adds the minimal performance indexes and `updated_at` automation for the P0 tables created in ISSUE-004.

Allowed implementation scope:

1. Create an `updated_at` trigger function.
2. Add `updated_at` triggers for `public.clients` and `public.workspaces`.
3. Add minimal safe indexes for P0 operational lookup.
4. Document index and trigger notes.
5. Update issue chain register for ISSUE-005.
6. Preserve the ISSUE-004 table scope.

Forbidden in this issue:

- No new business tables.
- No RLS.
- No RLS policies.
- No auth/profile/membership tables.
- No Supabase client source code.
- No app feature code.
- No real secrets.
- No ISSUE-006 work.

---

## 2. Dependency Gate

Codex must stop with `FAIL - Dependency gate not satisfied` unless all are true:

1. ISSUE-004 is `PASS` or `PASS WITH WARNINGS`.
2. ISSUE-004 Founder Acceptance is recorded as `Accepted`.
3. ISSUE-004 migration exists: `supabase/migrations/0001_create_p0_core_tables.sql`
4. ISSUE-004 DONE Report exists in the normalized path.
5. ISSUE-005 workpack exists and is approved.
6. ISSUE-005 runs on its own branch.
7. Normalized issue path is used: `12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/`

---

## 3. Required Reference Files

Read before making changes:

```text
AGENTS.md
README.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
03_Development_Standard/STD-DB-001_Database_Migration_and_RLS_Change_Control.md
03_Development_Standard/STD-SEC-001_Environment_Secrets_and_API_Key_Governance.md
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DB_Table_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Migration_Notes.md
supabase/migrations/0001_create_p0_core_tables.sql
.env.example
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Workpack.md
```

---

## 4. Required Outputs

Create or complete:

```text
supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Index_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Trigger_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_DONE_Report.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 5. Required Migration Content

Recommended migration file:

```text
supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
```

The migration must add:

### 5.1 updated_at trigger function

Create one generic trigger function:

```sql
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
```

### 5.2 updated_at triggers

Add triggers for:

```text
public.clients
public.workspaces
```

Expected behavior:

```text
before update on public.clients
before update on public.workspaces
execute function public.set_updated_at()
```

### 5.3 Minimal indexes

Add only safe P0 lookup indexes:

```text
idx_clients_status on public.clients(status)
idx_workspaces_status on public.workspaces(status)
idx_workspaces_plan_key on public.workspaces(plan_key)
```

Do not add an explicit `workspaces(client_id)` index if `unique(client_id)` already exists from ISSUE-004.

---

## 6. Allowed Files

```text
supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/README_ISSUE-005.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Index_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Trigger_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Open_Questions.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 7. Forbidden Scope

Codex must not modify app files, package files, `.env.example`, constitution files, templates, MVP01 scope/phase baselines, or ISSUE-006 files.

Codex must not create real secrets, Supabase client source code, auth/profile/membership tables, RLS enablement, RLS policies, business feature tables, new columns, seed data, API routes, server actions, or Vercel setup.

---

## 8. Success Criteria

ISSUE-005 is PASS only if:

1. ISSUE-004 founder acceptance is confirmed.
2. Migration `0002_add_indexes_and_updated_at_triggers.sql` is created.
3. `public.set_updated_at()` or equivalent trigger function exists.
4. `clients` updated_at trigger exists.
5. `workspaces` updated_at trigger exists.
6. Required indexes are created.
7. No RLS, auth, membership, business tables, app feature code, or real secrets are created.
8. SQL review or local validation is completed.
9. App validation remains healthy.
10. Issue Chain Register is updated for ISSUE-005 status / output / handoff.
11. ISSUE-006 handoff is clear.

ISSUE-005 is PASS WITH WARNINGS if migration is created and statically reviewed but Supabase CLI is unavailable.

ISSUE-005 is FAIL if dependency gate fails, migration or notes are missing, forbidden scope is touched, or ISSUE-006 cannot safely start.

---

## 9. Validation Plan

Run available app validation:

```text
npm run lint
npm run build
npm run typecheck
```

If Supabase CLI is available, optionally validate SQL. If not available, document `NOT RUN` and perform static SQL review.

---

## 10. Handoff to ISSUE-006

ISSUE-006 may start only if ISSUE-005 provides:

```text
ISSUE-005_DONE_Report.md
ISSUE-005_Index_Notes.md
ISSUE-005_Trigger_Notes.md
supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
Updated MVP01_ISSUE_CHAIN_REGISTER.md
```

ISSUE-006 must use these outputs to create auth and profiles without changing the P0 table/index/trigger scope.
