# STD-DEV-031 Issue Size and Splitting Standard

## 1. Purpose

This standard prevents AI implementation 20_Issues from becoming too large, vague or risky.

---

## 2. Core Principle

```text
Small 20_Issues are controllable.
Large 20_Issues create debugging and review risk.
```

---

## 3. Recommended Issue Size

A good AI implementation issue should usually:

- have one objective
- touch one feature area
- modify 1–5 primary files
- avoid mixing UI, DB, RLS, auth and deployment in the same issue
- be reviewable in one sitting

---

## 4. Split Required When

An issue should be split if it:

- touches more than 8 meaningful files
- modifies both UI and database schema
- modifies both UI and RLS
- modifies auth and business logic together
- changes shared layout and feature page together
- includes new feature + refactor + bug fix
- requires both Antigravity and Codex in the same pass
- cannot be tested clearly

---

## 5. Suggested Split Pattern

Instead of:

```text
ISSUE-020 Customer Module
```

Split into:

```text
ISSUE-020A Customer UI Skeleton
ISSUE-020B Customer Table with Mock Data
ISSUE-020C Customer Supabase Query
ISSUE-020D Customer Create/Edit Flow
ISSUE-020E Customer RLS Validation
ISSUE-020F Customer Mobile QA
```

---

## 6. Tool-Based Split

Use Antigravity for:

- UI skeleton
- page layout
- responsive layout
- dashboard visual structure

Use Codex for:

- data queries
- API routes
- Supabase integration
- auth logic
- validation
- tests

Use ChatGPT for:

- issue splitting
- acceptance criteria
- governance review

Use Gemini for:

- docs consistency
- research review
- PR risk review

---

## 7. Prohibited Behavior

Do not ask one AI tool to:

- build an entire module end-to-end in one vague issue
- modify UI + DB + RLS + auth together
- refactor unrelated areas while adding features
- decide its own issue boundaries
