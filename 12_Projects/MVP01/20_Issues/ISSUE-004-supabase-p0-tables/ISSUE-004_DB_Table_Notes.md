# ISSUE-004 DB Table Notes

**Issue:** ISSUE-004  
**Title:** Supabase P0 Tables  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Execution Mode:** Database Foundation Implementation  

---

## 1. Scope

ISSUE-004 adds the minimum P0 database foundation:

```text
clients
workspaces
```

No application integration, auth, RLS, triggers, business workflow tables, or seed data are included.

---

## 2. Tenant Model

```text
one client company -> one workspace -> one tenant isolation boundary
workspace_id = future canonical tenant-scoping key
client_id = client profile / commercial onboarding link
```

The `workspaces.client_id` unique constraint preserves the MVP01 one-workspace-per-client baseline.

---

## 3. Table: clients

Purpose: SME / field-service company being onboarded.

| Column | Type | Rules |
|---|---|---|
| `id` | `uuid` | Primary key; defaults to `gen_random_uuid()` |
| `name` | `text` | Required |
| `status` | `text` | Required; defaults to `draft`; constrained to `draft`, `active`, `inactive`, or `archived` |
| `created_at` | `timestamptz` | Required; defaults to `now()` |
| `updated_at` | `timestamptz` | Required; defaults to `now()` |

---

## 4. Table: workspaces

Purpose: one client workspace and the MVP01 tenant boundary.

| Column | Type | Rules |
|---|---|---|
| `id` | `uuid` | Primary key; defaults to `gen_random_uuid()` |
| `client_id` | `uuid` | Required; references `public.clients(id)`; unique |
| `name` | `text` | Required |
| `status` | `text` | Required; defaults to `draft`; constrained to `draft`, `active`, `inactive`, or `archived` |
| `plan_key` | `text` | Required; defaults to `solo_complete` |
| `template_key` | `text` | Optional |
| `created_at` | `timestamptz` | Required; defaults to `now()` |
| `updated_at` | `timestamptz` | Required; defaults to `now()` |

---

## 5. Deferred Work

```text
ISSUE-005:
- performance indexes
- updated_at trigger function and triggers

Later approved database issues:
- auth and profiles
- RLS helper functions and policies
- business feature tables
```

Until the approved RLS issue is complete, these `public` tables must not be exposed for production Data API use.
