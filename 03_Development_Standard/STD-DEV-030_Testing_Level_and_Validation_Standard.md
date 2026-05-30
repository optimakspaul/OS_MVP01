# STD-DEV-030 Testing Level and Validation Standard

## 1. Purpose

This standard defines required testing levels for Optimaks AI-assisted development.

The goal is to avoid accepting code only because it "looks okay."

---

## 2. Core Principle

```text
Testing depth must match change risk.
```

A simple UI copy update does not need the same testing as a database/RLS/auth change.

---

## 3. Testing Levels

### Level 0 — Document / Prompt Only

Applies to:

- docs only
- issue prompt
- README
- templates
- checklists

Required:

- markdown renders
- links/path references are correct
- version number correct

### Level 1 — Smoke Test

Applies to:

- simple UI
- static pages
- route additions
- layout changes

Required:

- app starts locally
- target route loads
- no fatal console errors
- no broken import

### Level 2 — UI / Responsive Test

Applies to:

- landing page
- dashboard
- forms
- app shell
- navigation
- mobile views

Required:

- desktop view pass
- tablet view pass
- mobile view pass
- empty/loading/error states considered
- no obvious overflow
- CTA / navigation works

### Level 3 — Data Flow Test

Applies to:

- Supabase queries
- forms saving data
- customer/job/quote records
- API routes
- auth-dependent pages

Required:

- read path works
- write path works
- validation works
- error handling works
- unauthorized access blocked
- tenant/workspace boundary respected

### Level 4 — Security / RLS / Auth Test

Applies to:

- RLS policy changes
- auth changes
- tenant isolation
- service role usage
- permissions

Required:

- authenticated user can access allowed data
- authenticated user cannot access other tenant data
- unauthenticated user blocked
- service role key not exposed
- RLS not bypassed in client
- manual founder review required

### Level 5 — Release Gate Test

Applies to:

- staging
- production
- client demo
- pilot release

Required:

- local pass
- preview pass
- no secret exposure
- no hardcoded client data
- rollback plan available
- founder approval

---

## 4. AI Output Requirement

After implementation, AI must report:

```text
Testing level required:
Testing performed:
Testing not performed:
Known risks:
Recommended next test:
```

---

## 5. Prohibited Behavior

Do not merge based only on:

- AI says it is done
- UI screenshot looks good
- no visible error in one screen
- code compiles but data/security not checked
