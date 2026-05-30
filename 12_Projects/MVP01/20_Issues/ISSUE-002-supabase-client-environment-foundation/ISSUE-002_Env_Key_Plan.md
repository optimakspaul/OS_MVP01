# ISSUE-002 Environment Key Plan

**Issue:** ISSUE-002
**Project:** MVP01
**Execution Mode:** Documentation + Environment Contract Only
**Values Committed:** None

---

## 1. Approved Variable Set

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=
```

The root `.env.example` contains this exact names-only contract with empty values.

---

## 2. Classification

| Variable | Classification | May Later Appear in Frontend Code? | May Commit a Real Value? |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Browser-visible configuration | Yes | No |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser-visible low-privilege compatibility key | Yes, only with correctly enabled and reviewed RLS | No |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only privileged secret | No | No |
| `SUPABASE_JWT_SECRET` | Server-only privileged secret | No | No |
| `DATABASE_URL` | Server-only privileged connection string | No | No |

---

## 3. Handling Rules

```text
1. No actual value may be committed.
2. .env.local remains local and untracked.
3. .env.example contains empty placeholders only.
4. Any NEXT_PUBLIC_ variable is browser-visible.
5. SUPABASE_SERVICE_ROLE_KEY must never be exposed to client-side code.
6. SUPABASE_JWT_SECRET must never be exposed to client-side code.
7. DATABASE_URL must never be exposed to client-side code.
8. Additional key names require an approved issue and explicit DONE-report justification.
```

---

## 4. Supabase Key-Model Compatibility Warning

Official Supabase documentation reviewed on May 30, 2026 recommends publishable keys for public browser components and secret keys for secure backend components. It describes `anon` and `service_role` keys as legacy compatibility keys.

The approved ISSUE-002 workpack explicitly requires `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY`, so this plan records those names without changing product scope or introducing additional variables.

Before future client initialization, an approved issue should decide whether to:

```text
- retain the compatibility names temporarily, or
- update the project environment contract to publishable-key naming.
```

This warning is non-blocking for ISSUE-002 documentation completion. It must be considered before production use.

---

## 5. Local and Deployment Handling

| Environment | Handling |
|---|---|
| Local development | Put real local values in untracked `.env.local`. |
| Preview / staging | Add values through the approved secure environment-management process in a later deployment issue. |
| Production | Add values only through the approved secure environment-management process with founder review. |
| Git repository | Commit `.env.example` with empty placeholders only. |

ISSUE-002 does not configure Supabase, Vercel, preview, staging, or production values.
