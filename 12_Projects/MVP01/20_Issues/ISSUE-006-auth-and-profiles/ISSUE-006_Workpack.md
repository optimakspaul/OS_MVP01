# ISSUE-006 Workpack

**Issue:** ISSUE-006  
**Title:** Auth and Profiles  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Database Foundation Implementation  
**Depends On:** ISSUE-005  
**Previous Issue Status:** PASS WITH WARNINGS, Founder Accepted  
**Branch:** feature/issue-006-auth-and-profiles  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/`

---

## 1. Purpose

ISSUE-006 creates the minimal Supabase Auth profile foundation for MVP01.

This issue connects future authenticated users to the existing MVP01 workspace model without implementing RLS policies, app login UI, Supabase client code, auth provider configuration, or product workflows.

Allowed implementation scope:

1. Create a `public.profiles` table linked to `auth.users(id)`.
2. Add minimal role and status constraints.
3. Preserve `workspace_id` as the tenant-scoping relationship for tenant-bound users.
4. Support platform founder / owner users without forcing workspace membership.
5. Add minimal indexes required for future profile lookup.
6. Use existing `public.set_updated_at()` trigger function if present.
7. Document auth/profile notes and migration notes.
8. Update issue chain register for ISSUE-006.

Forbidden in this issue:

- No RLS enablement.
- No RLS policies.
- No Supabase client source code.
- No login UI.
- No auth provider configuration.
- No workspace membership table.
- No business feature tables.
- No real secrets.
- No ISSUE-007 work.

---

## 2. Dependency Gate

Codex must stop with `FAIL - Dependency gate not satisfied` unless all are true:

1. ISSUE-005 is `PASS` or `PASS WITH WARNINGS`.
2. ISSUE-005 Founder Acceptance is recorded as `Accepted`.
3. ISSUE-004 and ISSUE-005 migrations exist:
   - `supabase/migrations/0001_create_p0_core_tables.sql`
   - `supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql`
4. ISSUE-005 DONE Report exists in the normalized path.
5. ISSUE-006 workpack exists and is approved.
6. ISSUE-006 runs on its own branch.
7. Normalized issue path is used:
   `12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/`

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
12_Projects/MVP01/20_Issues/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Index_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Trigger_Notes.md
supabase/migrations/0001_create_p0_core_tables.sql
supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
.env.example
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Workpack.md
```

---

## 4. Required Outputs

Create or complete:

```text
supabase/migrations/0003_create_auth_profiles.sql
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Profile_Model_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Auth_Boundary_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_DONE_Report.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 5. Required Migration Content

Recommended migration file:

```text
supabase/migrations/0003_create_auth_profiles.sql
```

Create `public.profiles`.

Minimum columns:

```text
id uuid primary key references auth.users(id) on delete cascade
workspace_id uuid null references public.workspaces(id)
display_name text
email text
role text not null default 'client_admin'
status text not null default 'pending'
created_at timestamptz not null default now()
updated_at timestamptz not null default now()
```

Allowed roles:

```text
platform_owner
client_admin
staff
technician
```

Allowed statuses:

```text
pending
active
inactive
archived
```

Required rules:

1. `platform_owner` may have `workspace_id is null`.
2. Tenant-bound roles should have `workspace_id is not null`:
   - `client_admin`
   - `staff`
   - `technician`
3. Implement the above as a check constraint if practical.
4. Do not create a separate workspace membership table in ISSUE-006.
5. Do not create customer portal membership.
6. Do not create RLS.
7. Do not create app login UI or Supabase client source code.

Suggested indexes:

```text
idx_profiles_workspace_id on public.profiles(workspace_id)
idx_profiles_role on public.profiles(role)
idx_profiles_status on public.profiles(status)
```

If `public.set_updated_at()` exists from ISSUE-005, add:

```text
set_profiles_updated_at before update on public.profiles
```

Do not recreate `public.set_updated_at()` unless absent. If absent, stop and report a dependency mismatch.

---

## 6. Allowed Files

```text
supabase/migrations/0003_create_auth_profiles.sql
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/README_ISSUE-006.md
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Profile_Model_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Auth_Boundary_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Open_Questions.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 7. Forbidden Scope

Codex must not modify app source files, package files, `.env.example`, constitution files, templates, MVP01 scope/phase baselines, or ISSUE-007 files.

Codex must not create real secrets, Supabase client source code, login UI, auth provider setup, RLS enablement, RLS policies, business feature tables, workspace membership tables, customer portal tables, API routes, server actions, or Vercel setup.

---

## 8. Success Criteria

ISSUE-006 is PASS only if:

1. ISSUE-005 founder acceptance is confirmed.
2. Migration `0003_create_auth_profiles.sql` is created.
3. `public.profiles` is created with `id` referencing `auth.users(id)`.
4. `workspace_id` references `public.workspaces(id)`.
5. Role and status constraints exist.
6. Tenant-bound role boundary is documented.
7. No RLS, app auth UI, Supabase client code, business tables, or secrets are created.
8. SQL review or local validation is completed.
9. App validation remains healthy.
10. Issue Chain Register is updated for ISSUE-006 status / output / handoff.
11. ISSUE-007 handoff is clear.

ISSUE-006 is PASS WITH WARNINGS if migration is created and statically reviewed but Supabase CLI is unavailable.

ISSUE-006 is FAIL if dependency gate fails, migration or notes are missing, forbidden scope is touched, auth/profile boundary is unclear, or ISSUE-007 cannot safely start.

---

## 9. Handoff to ISSUE-007

ISSUE-007 may start only if ISSUE-006 provides:

```text
ISSUE-006_DONE_Report.md
ISSUE-006_Profile_Model_Notes.md
ISSUE-006_Auth_Boundary_Notes.md
supabase/migrations/0003_create_auth_profiles.sql
Updated MVP01_ISSUE_CHAIN_REGISTER.md
```

ISSUE-007 must use these outputs to create RLS helper functions and policies without redesigning the profile model.
