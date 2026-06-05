# ISSUE-016 Admin Setting Scope Notes

**Issue:** ISSUE-016
**Title:** Admin Setting Basic
**Project:** MVP01
**Phase:** Phase 5 - Admin Setting / Reminder / Report
**Context Level:** Full
**Constitution Version Used:** MVP01 v1.7.9.4 AI Harness

---

## 1. Scope Purpose

ISSUE-016 establishes the Starter-depth Admin Setting Basic layer inside the existing Client Workspace route.

The purpose is to let an SME owner or admin preview business information, GST display copy, static PayNow instructions, payment terms, reminder defaults, and basic report preferences without creating real tenant settings or backend configuration.

---

## 2. Included Scope

```text
Frontend workspace admin setting section
Business information card
GST setting preview / toggle
Static PayNow instruction setting
Payment terms preview
Default reminder setting preview
Basic report preference preview
Manual admin setup checklist
Demo / non-persistent boundary
Next step to Reminder + Basic Report
```

---

## 3. Local State Boundary

```text
GST setting toggle is local browser state only.
Reminder default selector is local browser state only.
Report preference selector is local browser state only.
Admin setup checklist is local browser state only.
No settings persist after page reload.
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
Real tenant settings
Role-based admin permissions
GST compliance engine
PayNow QR generation / upload storage
Payment gateway settings
Reminder automation
Report generation
Optimaks OS UI
Technician portal
ISSUE-017 Reminder + Basic Report implementation
Package or env changes
```

---

## 5. L1-L5 Alignment

```text
L1 Business Flow: Payment -> Reminder / Report support layer
L2 Plan Flow: Starter Complete, manual-assisted depth
L3 Role Flow: Owner / Admin previews admin settings for the Customer / Payment flow
L4 Status Flow: payment_status remains display-only; reminder/report preferences are preview-only
L5 Module / Template Flow: Admin Setting Basic supporting Payment, Reminder, and Report modules in the Aircon / Home Service Starter Template
```

---

## 6. Commercial / Settings Boundary

ISSUE-016 touches payment and GST-related copy only as static admin-setting previews.

```text
Money movement: none
Payment provider affected: none
PayNow QR upload / generation: none
Invoice / receipt effect: none
GST compliance effect: none
Tenant settings persistence: none
Reminder / report automation effect: none
```

ISSUE-016 must not be treated as approval for real tenant configuration, payment gateway settings, GST compliance logic, PayNow QR storage, reminder automation, report generation, or Optimaks OS admin console work.
