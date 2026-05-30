# ISSUE-003 App Foundation Notes

**Issue:** ISSUE-003
**Title:** Next.js App Foundation
**Project:** MVP01
**Execution Mode:** App Foundation Implementation
**Implementation Boundary:** Minimal framework scaffold only

---

## 1. Dependency Summary

ISSUE-002 is recorded as `PASS WITH WARNINGS` with founder acceptance. Its environment contract remains unchanged:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=
```

ISSUE-003 does not read, wire, or expose any of these values.

---

## 2. App Foundation Summary

The created foundation uses:

```text
Next.js: 16.2.6
React: 19.2.6
React DOM: 19.2.6
TypeScript: 6.0.3
App Router: Yes
Source layout: src/app
Package manager: npm
```

The root route is a static placeholder page only. It contains:

```text
Optimaks MVP01
App foundation initialized.
No client data, tenant data, Supabase integration, or product workflow is implemented in ISSUE-003.
```

---

## 3. Created App Files

| File | Purpose |
|---|---|
| `package.json` | Minimal Next.js scripts, dependencies, and patched PostCSS override. |
| `package-lock.json` | Reproducible npm dependency lockfile. |
| `tsconfig.json` | Strict TypeScript baseline normalized by Next.js build. |
| `eslint.config.mjs` | Current flat ESLint configuration using Next.js core-web-vitals and TypeScript rules. |
| `.gitignore` | Standard generated-output, local-cache, and environment-value exclusions. |
| `src/app/layout.tsx` | Minimal root layout and metadata. |
| `src/app/page.tsx` | Static ISSUE-003 placeholder page. |
| `src/app/globals.css` | Small generic styling baseline. |

The generated `next-env.d.ts`, `.next/`, `node_modules/`, and repository-local `.npm-cache/` paths are ignored and are not issue outputs.

---

## 4. Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "typecheck": "tsc --noEmit"
}
```

Next.js 16 uses the ESLint CLI directly rather than `next lint`.

---

## 5. Environment Contract

```text
PASS - .env.example remains unchanged and placeholder-only.
PASS - .env.local was not created.
PASS - No environment variable is read by app code.
PASS - No server-only key is exposed.
PASS - No Supabase client is initialized.
```

---

## 6. Security Override

The current `next@16.2.6` package declares `postcss@8.4.31`. The reviewed PostCSS advisory affects versions below `8.5.10`.

The package baseline uses this narrow compatible override:

```json
{
  "overrides": {
    "postcss": "8.5.15"
  }
}
```

`npm audit --audit-level=moderate` reports zero vulnerabilities after the override.

Official references reviewed on May 30, 2026:

```text
https://nextjs.org/docs/app/getting-started/installation
https://nextjs.org/docs/app/api-reference/config/eslint
https://github.com/advisories/GHSA-qx2v-qp2m-jg93
```

---

## 7. Explicitly Deferred Scope

ISSUE-003 does not create:

```text
- Supabase client code or packages
- database schema or migrations
- auth or RLS implementation
- Vercel project setup
- workspace, CRM, booking, job, invoice, payment, reminder, or portal features
- business API routes or server actions
- ISSUE-004 execution files
```

---

## 8. Handoff to ISSUE-004

ISSUE-004 may use this app foundation only after founder acceptance of ISSUE-003 and approval of an ISSUE-004 workpack on its own branch.

ISSUE-004 must preserve:

```text
- placeholder-only .env.example
- no real secrets in Git
- workspace_id as the canonical tenant-scoping key
- database changes isolated to ISSUE-004 scope
- no auth or RLS implementation unless its approved workpack allows it
```

