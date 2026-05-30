# ISSUE-006 Auth Boundary Notes

**Issue:** ISSUE-006
**Project:** MVP01
**Scope:** Auth and profile database boundary only

---

## 1. Identity Boundary

Supabase Auth remains the identity source of truth. ISSUE-006 adds `public.profiles` as the application-facing profile table and links each profile to the managed `auth.users.id` primary key.

```text
public.profiles.id -> auth.users.id
delete behavior: on delete cascade
```

No auth provider configuration, login UI, session handling, or Supabase client code is included.

---

## 2. Profile Provisioning Boundary

ISSUE-006 does not create an automatic signup trigger or insert profile rows. A later approved implementation must define the server-side profile provisioning flow before end-user onboarding is enabled.

This keeps authentication automation outside the current migration and avoids silently expanding ISSUE-006.

---

## 3. Workspace Boundary

The direct nullable `profiles.workspace_id` relationship is the approved current tenant link:

```text
platform_owner may be unassigned to a workspace
client_admin, staff, and technician must be assigned to a workspace
```

Workspace membership tables, customer portal tables, and multi-workspace permissions are not part of ISSUE-006.

---

## 4. RLS Boundary

RLS is intentionally deferred to ISSUE-007. Until the approved RLS migration is complete:

```text
Do not expose public.profiles through production Data APIs.
Do not treat the role column as an authorization policy by itself.
Do not enable end-user profile reads or writes.
```

---

## 5. Rollback Plan

Rollback is limited to ISSUE-006 objects:

```sql
drop trigger if exists set_profiles_updated_at on public.profiles;
drop index if exists public.idx_profiles_status;
drop index if exists public.idx_profiles_role;
drop index if exists public.idx_profiles_workspace_id;
drop table if exists public.profiles;
```

Do not drop `public.set_updated_at()` because ISSUE-005 created it for existing tables.

---

## 6. Supabase References

- [User Management](https://supabase.com/docs/guides/auth/managing-user-data)
- [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
