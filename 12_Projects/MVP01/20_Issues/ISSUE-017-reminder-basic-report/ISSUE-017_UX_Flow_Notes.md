# ISSUE-017 UX Flow Notes

**Issue:** ISSUE-017  
**Title:** Reminder + Basic Report  
**Route:** `/workspace`

---

## 1. UX Goal

The Reminder + Basic Report UX gives the founder and demo user a clear final Starter-flow section after Admin Setting Basic.

It shows how an SME owner can manually review:

```text
payment follow-up
maintenance reminder
customer follow-up checklist
reminder status
monthly value snapshot
Starter KPI summary
manual report checklist
```

---

## 2. Page Placement

The section is placed after Admin Setting Basic and before the existing workspace status panels.

This keeps the visible flow in order:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Admin Setting -> Reminder + Basic Report -> Demo / Release
```

---

## 3. Interaction Model

Local controls include:

```text
Reminder status selector
Customer follow-up checklist toggles
Manual report checklist toggles
```

All interaction is browser-local only.

No interaction creates records, sends messages, schedules reminders, generates reports, exports files, or writes to a backend.

---

## 4. Visible UX Sections

```text
Reminder panel
Payment follow-up reminder preview
Maintenance reminder preview
Customer follow-up checklist
Reminder status preview
Basic monthly value report snapshot
Starter KPI summary
Manual report checklist
Next step to Optimaks OS Basic + Demo / Release Pack
Demo boundary notice
```

---

## 5. Accessibility Notes

The implementation keeps the same accessibility patterns as earlier workspace sections:

```text
section heading with aria-labelledby
button controls with visible labels
status selector with aria-label
semantic definition lists for summary fields
plain text boundary notice
```

---

## 6. Demo Boundary Copy

The UI explicitly states that ISSUE-017 does not:

```text
automate reminders
schedule jobs
send WhatsApp/email/SMS
generate reports
export PDF/CSV
query analytics
write to Supabase
submit APIs
run server actions
create Optimaks OS full admin console
create technician portal
start ISSUE-018
```

---

## 7. ISSUE-018 UX Handoff

ISSUE-018 may use this frontend flow as demo/release context for Optimaks OS Basic + Demo / Release Pack.

ISSUE-018 must remain locked until founder acceptance, workpack approval, and execution on its own branch.
