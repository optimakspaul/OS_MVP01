# ISSUE-007 Architecture Alignment Notes

**Issue:** ISSUE-007
**Title:** Architecture Alignment
**Project:** MVP01
**Alignment Target:** Starter Complete + Optimaks OS Basic

---

## 1. Canonical Definition

MVP01 is now aligned as:

```text
Starter Complete + Optimaks OS Basic
```

This replaces the earlier DB/RLS-centered interpretation of ISSUE-007. ISSUE-007 is an architecture and baseline alignment issue, not an RLS implementation issue.

---

## 2. Starter / Grow / Pro / Platform Naming

Starter, Grow, and Pro are plan depth levels, not separate applications.

```text
Starter: included in MVP01 as Starter Complete.
Grow: reserved for later collaboration and deeper workflow capability.
Pro: reserved for later technician, branch, and advanced operations capability.
Platform / AI: reserved for MVP02-MVP05 or later approved roadmap.
```

---

## 3. Optimaks OS Basic Boundary

Optimaks OS Basic is included only for MVP01 owner-operation support:

```text
client list
plan status
onboarding status
workspace link
demo readiness
release handover
```

It does not unlock full Platform, SaaS billing, advanced analytics, marketplace, AI, or multi-industry operations.

---

## 4. MVP01 Product Boundary

MVP01 remains sellable and demo-focused:

```text
one primary industry template
shared core
module library foundation
Starter-depth operation flow
Optimaks OS Basic
```

The first primary template is recommended as Aircon / Home Service.

---

## 5. Superseded Interpretation

The old `ISSUE-007 = RLS Helper Functions and Policies` wording is superseded by this architecture alignment.

RLS remains a shared-core foundation concern, but ISSUE-007 does not create RLS, policies, migrations, database objects, Supabase client code, app code, or UI.
