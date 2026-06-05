# ISSUE-014 Handoff to Payment Basic

**Issue:** ISSUE-014
**Next Issue:** ISSUE-015 - Payment Basic

---

## 1. Handoff Purpose

ISSUE-015 should use the Booking Basic assumptions to define Payment Basic.

ISSUE-014 does not create payments, payment records, payment gateway integration, PayNow integration, receipt logic, route handlers, server actions, Supabase writes, or payment persistence.

---

## 2. Files ISSUE-015 Must Read

```text
src/app/workspace/page.tsx
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Booking_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Implementation_Notes.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 3. Carry-Forward Booking Assumptions

ISSUE-015 may use these conceptual fields:

```text
selected customer
customer contact
service address
service issue
estimate range preview
selected service item assumptions
booking date preview
booking time preview
booking status preview
customer confirmation copy
```

ISSUE-015 must not infer that quote records, booking records, or payment records already exist.

---

## 4. Reserved Boundary for ISSUE-015

ISSUE-015 must use its own approved workpack before creating:

```text
payment UI
payment status controls
cash / PayNow status display
paid / outstanding tracking
payment records
API submissions
server actions
Supabase writes
RLS changes
```

---

## 5. ISSUE-015 Gate

ISSUE-015 may start only after:

```text
ISSUE-014 is PASS or PASS WITH WARNINGS.
ISSUE-014 founder acceptance is recorded.
ISSUE-015 workpack is approved.
ISSUE-015 runs on its own branch.
```
