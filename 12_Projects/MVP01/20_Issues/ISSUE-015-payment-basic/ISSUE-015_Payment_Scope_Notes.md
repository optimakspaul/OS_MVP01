# ISSUE-015 Payment Scope Notes

**Issue:** ISSUE-015
**Title:** Payment Basic
**Project:** MVP01
**Phase:** Phase 4 - Starter Operation Flow
**Context Level:** Full
**Constitution Version Used:** MVP01 v1.7.9.4 AI Harness

---

## 1. Scope Purpose

ISSUE-015 establishes the Starter-depth Payment Basic flow inside the existing Client Workspace route.

The purpose is to let an SME owner or admin review a coordinated booking, show manual cash / PayNow instruction options, preview payment status, and see paid / outstanding amounts without creating real payment infrastructure.

---

## 2. Included Scope

```text
Frontend workspace payment section
Selected booking / customer / quote context
Payment method display
Cash option copy
Static PayNow QR placeholder / instruction card
Payment status selector / preview
Paid / outstanding summary
Manual payment checklist
Customer payment instruction copy
Demo / non-persistent boundary
Next step to Admin Setting Basic
```

---

## 3. Local State Boundary

```text
Payment status is local browser state only.
Payment checklist is local browser state only.
Paid / outstanding amounts are display-only preview math.
No payment, invoice, receipt, or customer record is created.
No payment status is persisted after page reload.
```

---

## 4. Reserved Scope

The following remain reserved and were not implemented:

```text
Migrations
Database tables
Seed data
Supabase client integration
API routes
Server actions
RLS / policies
Auth / login
Real payment gateway
PayNow API / QR generation
Stripe / HitPay integration
Invoice generation
Receipt generation
Accounting integration
GST compliance engine
Reminder implementation
Optimaks OS UI
Technician portal
ISSUE-016 Admin Setting Basic
Package or env changes
```

---

## 5. L1-L5 Alignment

```text
L1 Business Flow: Booking -> Payment -> Reminder / Report
L2 Plan Flow: Starter Complete, manual-assisted depth
L3 Role Flow: Owner / Admin previews payment status for Customer context
L4 Status Flow: payment_status display only - unpaid, partially paid, paid, follow-up needed
L5 Module / Template Flow: Payment Module = Status; Aircon / Home Service Starter Template
```

---

## 6. Commercial Workflow Boundary

ISSUE-015 affects the Payment step as a manual status display only.

```text
Money movement: none
Provider affected: none
Invoice / PO / PDF effect: none
Receipt effect: none
Refund / suspension effect: none
Tax / GST effect: no compliance engine; GST remains an earlier display note only
```

ISSUE-015 must not be treated as approval for payment gateway integration, invoice generation, receipt generation, accounting integration, or GST compliance logic.
