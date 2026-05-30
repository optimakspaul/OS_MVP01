# ISSUE-004 Workpack

**Issue:** ISSUE-004  
**Title:** Supabase P0 Tables  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Database Foundation Implementation  
**Depends On:** ISSUE-003  
**Previous Issue Status:** PASS WITH WARNINGS, Founder Accepted  
**Branch:** feature/issue-004-supabase-p0-tables  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/`

---

## 1. Purpose

ISSUE-004 creates the minimal Supabase P0 database foundation for MVP01.

Allowed implementation scope:

1. Create P0 database migration for `clients` and `workspaces`.
2. Document DB table notes.
3. Document migration notes.
4. Update issue chain register for ISSUE-004.
5. Preserve ISSUE-001 tenant model: one client company -> one workspace -> one tenant isolation boundary.

Forbidden in this issue:

- No RLS.
- No RLS policies.
- No auth/profile/membership tables.
- No updated_at triggers.
- No business feature tables.
- No Supabase client source code.
- No app feature code.
- No real secrets.
- No ISSUE-005 work.

---

## 2. Dependency Gate

Codex must stop with `FAIL - Dependency gate not satisfied` unless all are true:

1. ISSUE-003 is `PASS` or `PASS WITH WARNINGS`.
2. ISSUE-003 Founder Acceptance is recorded as `Accepted`.
3. ISSUE-004 workpack exists and is approved.
4. ISSUE-004 runs on its own branch.
5. Normalized issue path is used:
   `12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/`

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
12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_App_Foundation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_Validation_Notes.md
.env.example
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Workpack.md
```

---

## 4. Required Outputs

Create or complete:

```text
supabase/migrations/0001_create_p0_core_tables.sql
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DB_Table_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Migration_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DONE_Report.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

If an existing migration naming convention is present, follow it and explain the chosen file name.

---

## 5. Required P0 Tables

### clients

Purpose: SME / field-service company being onboarded.

Minimum fields:

```text
id uuid primary key default gen_random_uuid()
name text not null
status text not null default 'draft'
created_at timestamptz not null default now()
updated_at timestamptz not null default now()
```

Allowed statuses:

```text
draft
active
inactive
archived
```

### workspaces

Purpose: one client workspace and the MVP01 tenant boundary.

Minimum fields:

```text
id uuid primary key default gen_random_uuid()
client_id uuid not null references clients(id)
name text not null
status text not null default 'draft'
plan_key text not null default 'solo_complete'
template_key text
created_at timestamptz not null default now()
updated_at timestamptz not null default now()
unique(client_id)
```

Allowed statuses:

```text
draft
active
inactive
archived
```

Tenant model:

```text
one client company -> one workspace -> one tenant isolation boundary
workspace_id = future canonical tenant-scoping key
client_id = client profile / commercial onboarding link
```

---

## 6. Migration Rules

The migration must:

1. Use `public` schema unless repo convention says otherwise.
2. Enable `pgcrypto` only if needed for `gen_random_uuid()`.
3. Create `clients` and `workspaces`.
4. Add primary keys.
5. Add `workspaces.client_id` foreign key.
6. Add status check constraints.
7. Add `unique(client_id)` for the MVP01 one-workspace-per-client baseline.
8. Avoid all business workflow tables.
9. Avoid seed data.

The migration must not:

1. Enable RLS.
2. Create RLS policies.
3. Create auth/profile tables.
4. Create workspace membership tables.
5. Create updated_at trigger functions.
6. Create updated_at triggers.
7. Create extra performance indexes beyond PK / unique / required FK constraints.
8. Create leads, customers, bookings, jobs, invoices, payments, reminders, reviews, or portal tables.
9. Include real client data.

---

## 7. Allowed Files

```text
supabase/migrations/0001_create_p0_core_tables.sql
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/README_ISSUE-004.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DB_Table_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Migration_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Open_Questions.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 8. Validation Plan

Run available app validation commands:

```text
npm run lint
npm run build
npm run typecheck
```

If Supabase CLI is available, optionally validate SQL. If not available, document `NOT RUN` and perform static SQL review.

DONE Report must include:

- Final Status.
- Dependency gate result.
- Files read / created / changed.
- P0 table summary.
- Migration summary.
- Tenant boundary result.
- Secret handling result.
- Forbidden scope confirmation.
- Validation command results.
- Warnings.
- Issue Chain Register update result.
- Handoff to ISSUE-005.
- Whether ISSUE-005 can start.
