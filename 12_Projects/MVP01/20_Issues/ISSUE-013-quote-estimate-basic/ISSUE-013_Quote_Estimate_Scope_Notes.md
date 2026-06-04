# ISSUE-013 Quote Estimate Scope Notes

**Issue:** ISSUE-013
**Title:** Quote Estimate Basic
**Project:** MVP01
**Phase:** Phase 4 - Starter Operation Flow
**Constitution Version:** MVP01 v1.7.9.4 AI Harness

---

## 1. Scope Purpose

ISSUE-013 establishes the Starter-depth Quote Estimate Basic flow inside the existing client workspace.

The scope is frontend-only and manual-assisted. It helps an SME owner/admin move from a selected lead/customer context into a quote estimate preview before Booking Basic.

MVP01 flow segment:

```text
Lead -> Customer -> Quote Estimate -> Booking
```

---

## 2. Included Scope

ISSUE-013 includes:

```text
Selected lead/customer summary
Quote estimate panel
Static service item list
Estimate range preview
Discount display / adjustment preview
GST information note and preview toggle
Quote status selector
Manual follow-up checklist
Next step to Booking Basic handoff
Demo / non-persistent boundary copy
```

---

## 3. Starter-Depth Rule

Quote Estimate Basic is Starter-depth only.

It supports demo and manual-assisted workflow storytelling. It does not create a pricing engine, approval workflow, quote record, invoice, payment flow, PDF, or booking.

The visible estimate values are static demo values with local preview math only. They are not binding quotations and must be confirmed manually by the business owner/admin.

---

## 4. Reserved / Forbidden Scope

ISSUE-013 does not create:

```text
migrations
database tables
seed data
Supabase client integration
Supabase writes
API routes
server actions
RLS
RLS policies
auth/login
real quote calculation engine
invoice generation
payment gateway
PDF generation
booking implementation
reminder implementation
Optimaks OS UI
technician portal
ISSUE-014 files
ISSUE-014 booking implementation
package/env changes
```

---

## 5. Handoff Boundary

ISSUE-013 prepares the context that ISSUE-014 may read for Booking Basic:

```text
selected lead/customer
service issue
service address
preferred timing
selected service item assumptions
quote status preview
manual checklist state concept
```

ISSUE-014 remains locked until ISSUE-013 founder acceptance, ISSUE-014 workpack approval, and ISSUE-014 execution on its own branch.
