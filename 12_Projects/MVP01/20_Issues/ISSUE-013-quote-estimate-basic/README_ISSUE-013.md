# ISSUE-013 README

**Issue:** ISSUE-013  
**Title:** Quote Estimate Basic  
**Project:** MVP01  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Path:** `12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/`

---

## Purpose

ISSUE-013 creates the basic Quote Estimate flow for MVP01.

It shows how a qualified lead/customer moves into a manual-assisted quote estimate:

```text
Lead / Customer -> Quote Estimate -> Booking
```

---

## Allowed

```text
Frontend route / page enhancement
Local component state
Static demo service items
Accessible estimate controls / buttons / previews
Non-persistent discount preview
GST information card / static toggle
Manual-assisted quote workflow copy
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
real quote engine
invoice generation
payment gateway
PDF generation
booking implementation
reminder implementation
Optimaks OS UI
technician portal
ISSUE-014 work
```

---

## Handoff

ISSUE-014 will use this Quote Estimate flow to define Booking Basic.
