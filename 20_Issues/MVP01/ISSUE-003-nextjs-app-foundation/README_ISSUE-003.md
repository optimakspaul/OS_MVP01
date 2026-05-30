# ISSUE-003 README

**Issue:** ISSUE-003  
**Title:** Next.js App Foundation  
**Project:** MVP01  
**Phase:** Phase 1 - Foundation  
**Branch:** feature/issue-003-nextjs-app-foundation  

---

## Purpose

This issue creates the minimal Next.js application foundation for MVP01.

---

## Why this issue exists

MVP01 needs a working app foundation before database table work, app shell, shared UI, client workspace, or field-service workflows begin.

This issue answers:

1. Is a Next.js app foundation present?
2. Is TypeScript configured?
3. Does the root app route build?
4. Are lint / build / typecheck commands available?
5. Is the ISSUE-002 environment contract preserved?
6. Is the app still free of Supabase client, schema, auth, RLS, and product feature implementation?

---

## Expected Output

Codex should produce:

```text
ISSUE-003_App_Foundation_Notes.md
ISSUE-003_Validation_Notes.md
ISSUE-003_DONE_Report.md
Working minimal Next.js app foundation
```

---

## Not Allowed

This issue must not create:

```text
Supabase client source code
Database schema
Migrations
RLS policies
Auth provider setup
Workspace / client / lead / booking / job / invoice / payment / reminder / portal features
Business API routes
Business server actions
Vercel project setup
Real secrets
.env.local
```

---

## Handoff

If this issue passes, ISSUE-004 may use the app foundation to begin Supabase P0 table planning / implementation under its own approved workpack.
