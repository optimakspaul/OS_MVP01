# ISSUE-002 README

**Issue:** ISSUE-002  
**Title:** Supabase Client and Environment Foundation  
**Project:** MVP01  
**Phase:** Phase 1 - Foundation  
**Branch:** feature/issue-002-supabase-client-environment-foundation  

---

## Purpose

This issue defines the Supabase environment foundation for MVP01 before Next.js app foundation, Supabase client code, database schema, auth, RLS, migrations, or deployment setup begins.

---

## Why this issue exists

MVP01 must not guess environment variable names or expose secrets when the Next.js app is created later.

This issue answers:

1. Which Supabase environment variable names are allowed?
2. Which keys are browser-safe?
3. Which keys are server-only?
4. Which secrets must never be committed?
5. How should `.env.example` be handled?
6. What does ISSUE-003 need before Next.js app foundation begins?

---

## Expected Output

Codex should produce:

```text
ISSUE-002_Supabase_Setup_Notes.md
ISSUE-002_Env_Key_Plan.md
ISSUE-002_DONE_Report.md
```

Optional:

```text
.env.example
ISSUE-002_Open_Questions.md
```

---

## Not Allowed

This issue must not create:

```text
Next.js app
React components
package.json
npm dependencies
Supabase client source code
Database schema
Migrations
RLS policies
Auth provider setup
Vercel setup
Real secrets
.env.local
```

---

## Handoff

If this issue passes, ISSUE-003 may use the environment contract to create the Next.js app foundation safely.
