# ISSUE-006 Profile Model Notes

**Issue:** ISSUE-006
**Project:** MVP01
**Scope:** Auth and profile database foundation only

---

## 1. Profile Table

`public.profiles` extends the Supabase-managed `auth.users` identity record with MVP01 application profile data.

```text
id           uuid primary key references auth.users(id) on delete cascade
workspace_id uuid null references public.workspaces(id)
display_name text
email        text
role         text not null default 'client_admin'
status       text not null default 'pending'
created_at   timestamptz not null default now()
updated_at   timestamptz not null default now()
```

The foreign key uses the managed `auth.users.id` primary key. Deleting an auth user cascades to the associated profile record.

---

## 2. Role and Status Model

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

The database enforces these values with check constraints.

---

## 3. Workspace Boundary

The approved ISSUE-006 foundation uses a direct `profiles.workspace_id` link.

```text
platform_owner: workspace_id may be null
client_admin:   workspace_id must be non-null
staff:          workspace_id must be non-null
technician:     workspace_id must be non-null
```

The migration enforces the tenant-bound role requirement with:

```sql
check (role = 'platform_owner' or workspace_id is not null)
```

This is the current profile foundation only. Workspace membership tables and multi-workspace access rules remain deferred until a separately approved issue.

---

## 4. Index and Timestamp Behavior

The migration adds lookup indexes for:

```text
workspace_id
role
status
```

The `set_profiles_updated_at` trigger reuses the `public.set_updated_at()` function created by ISSUE-005.

---

## 5. Deferred Security Work

RLS and RLS policies are intentionally excluded from ISSUE-006 and reserved for ISSUE-007. Do not expose `public.profiles` through production Data APIs before the approved RLS issue is complete.
