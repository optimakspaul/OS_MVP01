# ISSUE-004 Migration Notes

**Issue:** ISSUE-004  
**Migration:** `supabase/migrations/0001_create_p0_core_tables.sql`  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  

---

## 1. Migration Summary

The migration creates exactly two `public` schema tables:

```text
public.clients
public.workspaces
```

It adds:

```text
- UUID primary keys with gen_random_uuid() defaults
- status check constraints for clients and workspaces
- workspaces.client_id foreign key to public.clients(id)
- unique(workspaces.client_id) for one workspace per client
- created_at and updated_at timestamp columns with now() defaults
```

---

## 2. Extension Decision

The migration does not create `pgcrypto`.

Current PostgreSQL provides the built-in `gen_random_uuid()` function. The migration therefore uses that function directly and avoids enabling an extension that is not required.

Reference:

```text
https://www.postgresql.org/docs/current/functions-uuid.html
```

---

## 3. Explicit Exclusions

The migration does not create:

```text
- RLS enablement or policies
- auth, profile, or membership tables
- updated_at trigger functions or triggers
- explicit performance indexes
- business workflow tables
- seed data or real client data
```

Primary keys and the `unique(client_id)` constraint create only the indexes inherent to those required constraints.

---

## 4. Security Warning

The approved ISSUE-004 boundary explicitly defers RLS. Supabase documents that tables in an exposed `public` schema without RLS are unsafe for Data API exposure.

Reference:

```text
https://supabase.com/docs/guides/database/database-advisors?queryGroups=lint&lint=0013_rls_disabled_in_public
```

Required operational restriction:

```text
Do not expose or use these P0 tables through production Data APIs until the approved RLS issue is complete.
```

---

## 5. Rollback Plan

If rollback is required before later migrations depend on these tables:

```sql
drop table if exists public.workspaces;
drop table if exists public.clients;
```

Rollback must be reviewed before use. No rollback SQL is embedded in the forward migration.
