# ISSUE-016 UX Flow Notes

**Issue:** ISSUE-016
**Title:** Admin Setting Basic
**Project:** MVP01
**Route:** `/workspace`

---

## 1. User Story

An SME owner or admin has completed the Starter-depth quote, booking, and payment preview flow and now needs to see the admin settings that will shape manual payment, reminder, and report behavior.

The owner can review business info, GST display copy, PayNow instruction text, payment terms, reminder defaults, and basic report preferences before moving to Reminder + Basic Report.

---

## 2. Workspace Entry Point

The Admin Setting Basic section is added to the existing Client Workspace page after Payment Basic.

```text
Lead / Customer -> Quote Estimate -> Booking Basic -> Payment Basic -> Admin Setting Basic -> Reminder + Basic Report
```

No new route was created because the existing workspace already contains the Starter operation flow and support panels.

---

## 3. Visible UX Sections

```text
Admin Setting Basic heading
Admin setting demo boundary notice
Business information card
GST setting preview / toggle
Static PayNow instruction setting
Payment terms preview
Default reminder setting preview
Basic report preference preview
Manual admin setup checklist
Next step to Reminder + Basic Report
```

---

## 4. Interaction Model

```text
GST setting checkbox updates local preview copy.
Reminder default buttons update local preview state.
Report preference buttons update local preview state.
Manual admin checklist buttons toggle local checked state.
```

The flow does not submit forms, call APIs, run server actions, write to Supabase, upload PayNow QR images, save tenant settings, configure payment gateways, automate reminders, or generate reports.

---

## 5. Accessibility Notes

```text
The Admin Setting Basic section has an aria-labelledby heading.
Reminder and report preference button groups use aria-label values.
The GST toggle uses a labeled checkbox.
Checklist button text changes visibly between Manual and Checked.
The demo boundary is visible before the admin setting panels.
```

---

## 6. Demo Boundary Copy

The page explicitly states that Admin Setting Basic:

```text
does not save business settings
does not upload PayNow QR images
does not run GST compliance
does not configure payment gateways
does not automate reminders
does not generate reports
does not submit APIs or server actions
does not write to Supabase
does not start ISSUE-017
```

---

## 7. ISSUE-017 Handoff

The final admin setting handoff card explains that ISSUE-017 may define Reminder + Basic Report using these static admin setting assumptions after founder acceptance and workpack approval.
