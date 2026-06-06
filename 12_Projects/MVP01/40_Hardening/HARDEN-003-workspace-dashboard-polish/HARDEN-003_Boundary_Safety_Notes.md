# HARDEN-003 Boundary Safety Notes

**Hardening Item:** HARDEN-003
**Project Boundary:** MVP01 Starter Complete + Optimaks OS Basic

---

## Preserved Boundary

HARDEN-003 changes dashboard hierarchy, copy, navigation, and presentation only.

The route remains:

```text
Static demo data
Local React state
Non-persistent
Manual-assisted
Owner/admin walkthrough only
```

## Explicit Boundaries

### Lead and Customer

Selection, qualification checklists, and convert-to-customer controls are local previews. No lead or customer is saved.

### Quote

Amounts are display math for demonstration. No quote, pricing engine, approval, invoice, or PDF is created.

### Booking

Date/time and status controls do not check availability, schedule work, assign technicians, or connect to calendars.

### Payment

No payment is processed. The PayNow tile is explicitly non-scannable and contains no payment destination.

### Admin Settings

Business, GST, payment-term, reminder, and report preferences are local display choices only. No tenant configuration is saved.

### Reminder and Report

No message, job, report, export, analytics query, or persistent metric is created.

## Forbidden-Scope Confirmation

HARDEN-003 did not create or modify:

```text
MVP02 files or execution
Migrations or database tables
Supabase integration
API routes or server actions
RLS or auth
Real lead/customer persistence
Quote engine
Booking scheduler
Payment integration
Reminder automation
Report generation
Full client portal
Full Optimaks OS admin console
Package or environment files
/end-customer or /optimaks-os route files
```

## L1-L5 Alignment

```text
L1 Business Flow: Existing Request-to-Report presentation only
L2 Plan Flow: Starter Complete depth unchanged
L3 Role Flow: Owner/admin walkthrough only
L4 Status Flow: Local preview labels only; no transitions persisted
L5 Module / Template Flow: Aircon / Home Service Starter presentation only
```

## MVP02 Lock

MVP02 planning and execution remain gated by separate approved workpacks. HARDEN-003 does not unlock reserved capabilities.
