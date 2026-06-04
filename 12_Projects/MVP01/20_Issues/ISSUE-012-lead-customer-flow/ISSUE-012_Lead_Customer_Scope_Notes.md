# ISSUE-012 Lead Customer Scope Notes

**Issue:** ISSUE-012
**Title:** Lead / Customer Flow
**Project:** MVP01
**Phase:** Phase 4 - Starter Operation Flow

---

## 1. Purpose

ISSUE-012 enhances the client workspace with the Starter-depth Lead / Customer Flow for the Aircon / Home Service Starter Template.

The visible flow is:

```text
Request -> Lead -> Customer -> Quote Estimate
```

This issue implements only:

```text
Lead -> Customer
```

---

## 2. Route

```text
src/app/workspace/page.tsx
```

The workpack preferred enhancing the existing workspace route. No subroute was required.

---

## 3. Included Scope

The interface includes:

```text
lead inbox / request list
lead status filters
lead detail panel
customer profile summary
contact / address / service context
manual action checklist
convert-to-customer demo action
next step to quote estimate
demo / non-persistent boundary notice
```

---

## 4. Data and Persistence Boundary

The Lead / Customer Flow uses static demo data and local browser state only.

```text
No database writes
No lead table implementation
No customer table implementation
No Supabase client integration
No API routes
No server actions
No auth / login
No RLS
```

The convert-to-customer action only marks a local preview state in the browser session.

---

## 5. Reserved Scope

Reserved for later approved issues:

```text
real lead records
real customer records
lead detail pages backed by persistence
customer profile pages backed by persistence
quote engine
booking implementation
payment implementation
reminder implementation
Optimaks OS UI
technician portal
ISSUE-013 quote implementation
```
