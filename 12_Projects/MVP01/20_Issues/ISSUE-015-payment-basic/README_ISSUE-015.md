# ISSUE-015 README

**Issue:** ISSUE-015  
**Title:** Payment Basic  
**Project:** MVP01  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Path:** `12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/`

---

## Purpose

ISSUE-015 creates the basic Payment flow for MVP01.

It shows how a booking moves into manual payment tracking:

```text
Booking -> Payment -> Admin Setting
```

---

## Allowed

```text
Frontend route / page enhancement
Local component state
Static demo payment context
Accessible payment status controls / previews
Static PayNow QR placeholder / instruction card
Cash option copy
Non-persistent paid / outstanding preview
Manual-assisted payment workflow copy
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
real payment gateway
PayNow API / QR generation
Stripe / HitPay integration
invoice generation
receipt generation
accounting integration
GST compliance engine
reminder implementation
Optimaks OS UI
technician portal
ISSUE-016 work
```

---

## Handoff

ISSUE-016 will use this Payment Basic flow to define Admin Setting Basic.
