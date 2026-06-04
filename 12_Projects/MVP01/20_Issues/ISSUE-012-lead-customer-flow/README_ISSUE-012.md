# ISSUE-012 README

**Issue:** ISSUE-012  
**Title:** Lead / Customer Flow  
**Project:** MVP01  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Path:** `12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/`

---

## Purpose

ISSUE-012 creates the basic Lead / Customer Flow for MVP01.

It shows how an incoming request becomes a lead and how a lead becomes a customer conceptually:

```text
Request -> Lead -> Customer -> Quote Estimate
```

---

## Allowed

```text
Frontend route / page enhancement
Local component state
Static demo leads / customers
Accessible filters / buttons / previews
Non-persistent convert-to-customer demo action
Manual-assisted workflow copy
Documentation
Issue chain / change log updates
```

---

## Not Allowed

```text
migrations
database tables
Supabase client writes
API routes
server actions
RLS
auth/login
quote engine
booking implementation
payment implementation
reminder implementation
Optimaks OS UI
technician portal
ISSUE-013 work
```

---

## Handoff

ISSUE-013 will use this Lead / Customer Flow to define Quote Estimate Basic.
