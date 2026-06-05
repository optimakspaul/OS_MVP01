# ISSUE-016 Handoff to Reminder + Basic Report

**Issue:** ISSUE-016
**Next Issue:** ISSUE-017 - Reminder + Basic Report

---

## 1. Handoff Purpose

ISSUE-017 should use the Admin Setting Basic assumptions to define Reminder + Basic Report.

ISSUE-016 does not create reminder automation, report generation, stored report preferences, tenant settings, API routes, server actions, Supabase writes, RLS changes, Optimaks OS UI, or technician portal features.

---

## 2. Files ISSUE-017 Should Read

```text
src/app/workspace/page.tsx
src/app/globals.css
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Admin_Setting_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Implementation_Notes.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

---

## 3. Carry-Forward Admin Setting Assumptions

ISSUE-017 may use these conceptual assumptions:

```text
business information exists only as static demo copy
GST setting is local preview only
PayNow instruction setting is static copy only
payment terms are static preview copy only
reminder default is local preview only
report preference is local preview only
manual admin setup checklist is local preview only
```

ISSUE-017 must not infer that real tenant settings, reminder records, report preferences, report metrics, PayNow QR records, GST settings, or admin permissions already exist.

---

## 4. Reserved Boundary for ISSUE-017

ISSUE-017 must use its own approved workpack before creating:

```text
Reminder + Basic Report UI
reminder records
report records
report generation
notification automation
WhatsApp API integration
API submissions
server actions
Supabase writes
RLS changes
Optimaks OS UI
technician portal
```

---

## 5. ISSUE-017 Gate

ISSUE-017 may start only after:

```text
ISSUE-016 is PASS or PASS WITH WARNINGS.
ISSUE-016 founder acceptance is recorded.
ISSUE-017 workpack is approved.
ISSUE-017 runs on its own branch.
```
