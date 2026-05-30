# STD-DB-001 Database Migration and RLS Change Control

## 1. Purpose

This standard controls database schema, migration, authentication and RLS changes.

---

## 2. Core Principle

```text
Database, RLS and auth changes must be isolated, reviewable and documented.
```

---

## 3. Migration Rule

Each database migration issue should have:

- clear objective
- migration file
- affected tables
- affected policies
- rollback note
- test plan
- documentation update

---

## 4. RLS Rule

RLS changes must be treated as high risk.

RLS changes should not be mixed with:

- UI layout 20_Issues
- landing page 20_Issues
- copywriting 20_Issues
- unrelated feature work

---

## 5. Auth Rule

Auth logic changes require:

- isolated issue
- clear expected behavior
- unauthenticated test
- authenticated test
- cross-tenant access test if applicable

---

## 6. Service Role Rule

Service role key must never be exposed to browser/client code.

Privileged operations must be server-side and reviewed.

---

## 7. Documentation Requirement

Schema or RLS changes must update the relevant docs:

```text
database schema docs
data access docs
RLS policy docs
issue starter pack
CHANGELOG if behavior changes
```

---

## 8. AI Tool Rule

Codex may implement database/RLS work only if the issue explicitly authorizes it.

Antigravity must not modify database/RLS/auth logic.

Gemini may review database/RLS docs but should not directly change sensitive policies unless explicitly assigned.

---

## 9. Prohibited Behavior

Do not:

- modify RLS inside UI issue
- weaken RLS for faster demo
- use service role in frontend
- skip migration notes
- merge DB changes without test plan
- make schema changes without updating documentation
