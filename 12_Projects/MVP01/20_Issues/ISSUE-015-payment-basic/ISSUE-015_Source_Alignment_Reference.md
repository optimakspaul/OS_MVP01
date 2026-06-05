# ISSUE-015 Source Alignment Reference

**Issue:** ISSUE-015  
**Title:** Payment Basic  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-014 Booking Basic  
**Next Issue:** ISSUE-016 Admin Setting Basic  
**Primary Template:** Aircon / Home Service Starter Template  

---

## 1. Source of Truth

ISSUE-015 must align to the current MVP01 architecture:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-015 is:

```text
Payment Basic
```

It creates the Starter-depth manual payment tracking flow inside the client workspace.

---

## 2. Relationship to ISSUE-014

ISSUE-014 created the static Booking Basic flow:

```text
Quote Estimate -> Booking -> Payment handoff
```

ISSUE-015 must focus only on the next workflow segment:

```text
Booking -> Payment Basic
```

The payment flow is **manual-assisted**, not a real payment gateway, not PayNow API, not Stripe / HitPay integration, not invoice automation, and not accounting integration.

---

## 3. Implementation Direction

ISSUE-015 may create basic frontend UI for:

```text
1. Payment panel in workspace
2. Selected booking/customer/quote context
3. Payment method display
4. Cash option
5. Static PayNow QR placeholder / instruction card
6. Payment status selector / preview
7. Paid / outstanding amount summary
8. Manual payment checklist
9. Customer payment instruction copy
10. Handoff to Admin Setting Basic
```

ISSUE-015 should remain Starter-depth and manual-assisted.

---

## 4. Reserved Boundaries

Reserved for later issues:

```text
Real payment gateway
PayNow API / QR generation
Stripe / HitPay integration
Invoice generation
Receipt generation
Accounting integration
Database persistence
Supabase client integration
Payment table implementation
API routes
Server actions
RLS / DB policy work
GST compliance engine
Automated reminder engine
Optimaks OS admin console
ISSUE-016 admin setting implementation
```

ISSUE-015 must not start ISSUE-016.
