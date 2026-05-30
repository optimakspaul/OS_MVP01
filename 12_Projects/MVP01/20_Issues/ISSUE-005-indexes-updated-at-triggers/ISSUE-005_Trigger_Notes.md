# ISSUE-005 Trigger Notes

**Issue:** ISSUE-005  
**Title:** Indexes and updated_at Triggers  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Execution Mode:** Database Foundation Implementation  

---

## 1. Scope

ISSUE-005 creates one generic trigger function:

```text
public.set_updated_at()
```

It adds two row-level `before update` triggers:

```text
set_clients_updated_at on public.clients
set_workspaces_updated_at on public.workspaces
```

---

## 2. Expected Behavior

Before an existing `clients` or `workspaces` row is updated, its trigger calls `public.set_updated_at()`.

The function:

```text
1. assigns now() to new.updated_at
2. returns the modified new row
```

This keeps `updated_at` current without adding application-side timestamp logic.

---

## 3. Explicit Exclusions

The migration does not create:

```text
- RLS enablement or policies
- auth, profile, or membership tables
- security-definer behavior
- event triggers
- business workflow tables
- new table columns
- seed data
```

References:

```text
https://www.postgresql.org/docs/current/sql-createtrigger.html
https://www.postgresql.org/docs/current/plpgsql-trigger.html
```

---

## 4. Rollback Plan

If rollback is required before later migrations depend on this support layer:

```sql
drop trigger if exists set_workspaces_updated_at on public.workspaces;
drop trigger if exists set_clients_updated_at on public.clients;
drop function if exists public.set_updated_at();
drop index if exists public.idx_workspaces_plan_key;
drop index if exists public.idx_workspaces_status;
drop index if exists public.idx_clients_status;
```

Rollback must be reviewed before use. No rollback SQL is embedded in the forward migration.
