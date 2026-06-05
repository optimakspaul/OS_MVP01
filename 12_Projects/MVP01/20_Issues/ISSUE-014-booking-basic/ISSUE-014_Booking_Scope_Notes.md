# ISSUE-014 Booking Scope Notes

**Issue:** ISSUE-014
**Title:** Booking Basic
**Project:** MVP01
**Phase:** Phase 4 - Starter Operation Flow
**Constitution Version:** MVP01 v1.7.9.4 AI Harness

---

## 1. Scope Purpose

ISSUE-014 establishes the Starter-depth Booking Basic flow inside the existing client workspace.

The scope is frontend-only and manual-assisted. It helps an SME owner/admin move from a selected quote/customer context into a booking preview before Payment Basic.

MVP01 flow segment:

```text
Quote Estimate -> Booking -> Payment
```

---

## 2. Included Scope

ISSUE-014 includes:

```text
Booking panel
Selected quote/customer summary
Service address / area summary
Preferred date and time preview fields
Booking status selector
Manual scheduling checklist
Customer confirmation copy
Calendar integration reserved note
Next step to Payment Basic handoff
Demo / non-persistent boundary copy
```

---

## 3. Starter-Depth Rule

Booking Basic is Starter-depth only.

It supports demo and manual-assisted workflow storytelling. It does not create a real scheduler, booking record, availability engine, calendar integration, technician assignment, payment step, or reminder workflow.

The visible date/time and booking status values are local preview values only and must be confirmed manually by the business owner/admin.

---

## 4. Reserved / Forbidden Scope

ISSUE-014 does not create:

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
real scheduler engine
Google Calendar integration
Calendly / Cal.com integration
technician assignment
calendar conflict detection
payment implementation
reminder implementation
Optimaks OS UI
technician portal
ISSUE-015 files
ISSUE-015 payment implementation
package/env changes
```

---

## 5. Handoff Boundary

ISSUE-014 prepares the context that ISSUE-015 may read for Payment Basic:

```text
selected customer
service address
service issue
quote estimate preview
selected service item assumptions
preferred booking date
preferred booking time
booking status preview
customer confirmation copy
manual scheduling checklist concept
```

ISSUE-015 remains locked until ISSUE-014 founder acceptance, ISSUE-015 workpack approval, and ISSUE-015 execution on its own branch.
