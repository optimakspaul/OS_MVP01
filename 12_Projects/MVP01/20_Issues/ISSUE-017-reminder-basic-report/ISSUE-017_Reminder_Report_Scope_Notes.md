# ISSUE-017 Reminder Report Scope Notes

**Issue:** ISSUE-017  
**Title:** Reminder + Basic Report  
**Project:** MVP01  
**Phase:** Phase 5 - Admin Setting / Reminder / Report  
**MVP Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template

---

## 1. Scope Purpose

ISSUE-017 establishes a Starter-depth Reminder + Basic Report preview inside the existing client workspace.

The scope continues the approved flow:

```text
Admin Setting Basic -> Reminder + Basic Report -> Optimaks OS Basic + Demo / Release Pack
```

The output is frontend and documentation only.

---

## 2. Included Scope

ISSUE-017 includes:

```text
Reminder panel
Payment follow-up reminder preview
Maintenance reminder preview
Customer follow-up checklist
Reminder status preview
Basic monthly value report snapshot
Starter KPI summary
Manual report checklist
Demo / non-persistent boundary
Handoff to ISSUE-018
```

The implemented UI uses static demo data and local browser state only.

---

## 3. Reminder Boundary

Reminder capability is limited to:

```text
manual reminder copy preview
manual reminder status selector
manual customer follow-up checklist
payment follow-up reminder preview
maintenance reminder preview
```

ISSUE-017 does not create:

```text
real reminder automation
scheduled jobs
notification queue
WhatsApp API
email automation
SMS integration
reminder records
Supabase writes
API submissions
server actions
```

---

## 4. Basic Report Boundary

Report capability is limited to:

```text
static monthly value snapshot
Starter KPI summary
manual report checklist
owner review talking points
```

ISSUE-017 does not create:

```text
report generation engine
PDF export
CSV export
analytics database
stored metrics
report scheduler
automated monthly reports
```

---

## 5. L1-L5 Alignment

```text
L1 Business Flow: Payment -> Maintenance Reminder -> Repeat Booking
L2 Plan Flow: Starter Complete / Flow Basic preview
L3 Role Flow: Owner / Admin uses the workspace; Customer is contacted manually
L4 Status Flow: payment_status and maintenance_status preview only; no stored status update
L5 Module / Template Flow: Reminder Module Basic, Report Module Basic, Aircon / Home Service Starter Template
```

---

## 6. Reserved Scope

Reserved for later approved issues:

```text
real automation
scheduled jobs / cron
WhatsApp, email, or SMS sending
report generation
exports
analytics database
Optimaks OS full admin console
technician portal
ISSUE-018 demo/release implementation
```

ISSUE-018 may use this scope note as input only after ISSUE-017 founder acceptance and ISSUE-018 workpack approval.
