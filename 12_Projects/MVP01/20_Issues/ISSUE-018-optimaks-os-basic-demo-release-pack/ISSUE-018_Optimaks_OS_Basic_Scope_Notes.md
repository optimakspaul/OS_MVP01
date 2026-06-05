# ISSUE-018 Optimaks OS Basic Scope Notes

**Issue:** ISSUE-018
**Project:** MVP01
**Scope Type:** Static frontend preview + documentation
**Route:** `src/app/optimaks-os/page.tsx`

---

## 1. Purpose

ISSUE-018 establishes the MVP01 Optimaks OS Basic preview as a static demo and release handoff page.

The preview supports this founder story:

```text
Client list -> Plan status -> Onboarding status -> Workspace link -> Demo pack -> Release pack
```

It closes MVP01 by showing how Starter Complete can be presented without creating a real Optimaks OS backend.

---

## 2. Included Scope

The Optimaks OS Basic preview includes:

```text
1. Static sample client list
2. Static Starter Complete plan status
3. Static onboarding status
4. Static workspace link preview
5. Demo pack checklist
6. Release pack checklist
7. MVP01 flow summary
8. Included / reserved boundary summary
9. MVP01 closeout notice
```

All client, plan, onboarding, checklist, and status records are local display content.

---

## 3. Reserved Scope

ISSUE-018 does not create:

```text
1. Real Optimaks OS admin console
2. Client management backend
3. Tenant provisioning
4. Billing or subscription management
5. Role-based admin permissions
6. Deployment automation
7. Module entitlement logic
8. MVP02 files or execution
```

These remain locked until later approved workpacks.

---

## 4. Persistence Boundary

The route is non-persistent.

```text
Database writes: No
Supabase client integration: No
API routes: No
Server actions: No
Auth / login: No
RLS / policies: No
Real admin backend: No
```

The page uses static arrays rendered by the Next.js App Router.

---

## 5. Final Checkpoint Handoff

MVP01 final checkpoint may review the Optimaks OS Basic preview as the final Phase 6-7 output after ISSUE-018 founder acceptance is recorded.

MVP02 must remain locked until the MVP01 final checkpoint is accepted.
