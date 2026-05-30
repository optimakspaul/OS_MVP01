# ISSUE-002 Supabase Setup Notes

**Issue:** ISSUE-002
**Title:** Supabase Client and Environment Foundation
**Project:** MVP01
**Execution Mode:** Documentation + Environment Contract Only
**Implementation Status:** Documentation only - no Supabase project, app client, schema, auth, RLS, or deployment setup created

---

## 1. ISSUE-001 Dependency Summary

ISSUE-001 is recorded as `PASS WITH WARNINGS` with founder acceptance. Its required outputs exist and define the MVP01 tenant boundary:

```text
one client company -> one workspace -> one tenant isolation boundary
```

Future tenant-scoped operational records must use `workspace_id` as the canonical isolation key. `client_id` links a workspace to the client profile. A separate competing `tenant_id` column must not be introduced without approved change control.

---

## 2. Supabase Purpose for MVP01

Supabase is reserved as the future backend foundation for shared application data, authentication, and tenant-scoped access control. ISSUE-002 defines the handling contract only.

This issue does not:

```text
- create a Supabase project
- initialize a client library
- create app code
- create tables or migrations
- create auth configuration
- create RLS functions or policies
- configure Vercel
```

---

## 3. Environment Variable Naming Contract

The approved ISSUE-002 baseline is:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=
```

Only empty placeholders are committed in `.env.example`.

---

## 4. Browser-Safe Variables

The following variables may be referenced by frontend code in a later approved issue:

| Variable | Purpose | Rule |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Public Supabase project API URL | Browser-visible configuration only. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Approved MVP01 compatibility name for the browser-safe low-privilege key | Browser use is permitted only with correctly enabled and reviewed RLS. |

Any `NEXT_PUBLIC_` variable is treated as browser-visible and must never contain a privileged secret.

---

## 5. Server-Only Variables

| Variable | Purpose | Rule |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | Legacy privileged server-only Supabase credential | Never expose to browser code, public documents, or Git values. |
| `SUPABASE_JWT_SECRET` | Sensitive JWT secret | Never commit or expose to browser code. |
| `DATABASE_URL` | Sensitive database connection string | Never commit or expose to browser code. |

Privileged operations must remain isolated to reviewed server-side implementation in a later approved issue.

---

## 6. Forbidden Secrets

Never commit:

```text
- real Supabase project URLs
- anon, publishable, service-role, or secret key values
- JWT secrets
- database connection strings or passwords
- access tokens
- real client credentials or production-only values
- .env.local
```

If a secret is exposed, stop work, remove it from code, rotate it immediately, review Git history exposure, and record the incident.

---

## 7. Local Development Handling

Local values belong in `.env.local`, which must remain local and untracked. The committed `.env.example` file is a names-only contract with empty values.

No local environment values were created, read, or copied during ISSUE-002.

---

## 8. Vercel Environment Handling

Vercel environment configuration is reserved for a later deployment issue. Production and preview values must be stored through the approved secure environment-management process, with founder review where required.

ISSUE-002 does not configure Vercel or any production environment.

---

## 9. Future Supabase Client Initialization Assumptions

ISSUE-003 may create the Next.js application foundation only after its own approved workpack and branch exist. Any later approved frontend client initialization may use only:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

No future browser client may read `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_JWT_SECRET`, or `DATABASE_URL`.

Current Supabase guidance recommends publishable keys for new browser clients and secret keys for secure backend components. The ISSUE-002 baseline names are retained because the approved workpack explicitly requires them. A later approved issue should review whether the project contract should migrate from the compatibility name `NEXT_PUBLIC_SUPABASE_ANON_KEY` to a publishable-key name before client initialization.

---

## 10. Future Auth and Profile Assumptions

Future auth and profile implementation must remain isolated to approved issues. User identity and workspace access are separate:

```text
user identity -> future workspace membership -> tenant-scoped role
```

Customer contacts must not automatically receive authenticated workspace membership. Optimaks internal admin access must be explicit, separately controlled, and auditable.

---

## 11. Future Workspace Isolation Implications

Future database and RLS work must preserve:

```text
1. workspace_id as the canonical tenant-scoping key.
2. Tenant-bound users require authorized workspace membership.
3. Client owners and admins cannot access another workspace.
4. Staff and technicians receive only approved task-level access.
5. Customer access remains narrow and does not imply workspace membership.
6. Internal admin access is explicit and auditable.
7. Privileged credentials are never exposed to frontend code.
```

No schema, auth, or RLS implementation is authorized by ISSUE-002.

---

## 12. Handoff Requirements for ISSUE-003

ISSUE-003 may be prepared only after founder acceptance of ISSUE-002 and approval of an ISSUE-003 workpack on its own branch.

ISSUE-003 must read:

```text
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Supabase_Setup_Notes.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Env_Key_Plan.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
.env.example
```

ISSUE-003 must not guess additional keys, expose privileged values, or start schema, auth, RLS, or deployment work.

---

## 13. Current Supabase Guidance Reviewed

Official references reviewed on May 30, 2026:

```text
https://supabase.com/docs/guides/api/api-keys
https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs
https://supabase.com/docs/guides/functions/secrets
https://supabase.com/changelog/29260-upcoming-changes-to-supabase-api-keys
```
