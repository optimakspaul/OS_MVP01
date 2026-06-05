# ISSUE-015 Handoff to Admin Setting Basic

**Issue:** ISSUE-015
**Next Issue:** ISSUE-016 - Admin Setting Basic

---

## 1. Handoff Purpose

ISSUE-016 should use the Payment Basic assumptions to define Admin Setting Basic.

ISSUE-015 does not create admin settings, business profile persistence, GST settings, payment terms storage, PayNow QR upload, reminders, API routes, server actions, Supabase writes, or payment provider integrations.

---

## 2. Files ISSUE-016 Should Read

```text
src/app/workspace/page.tsx
src/app/globals.css
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Payment_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Implementation_Notes.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

---

## 3. Carry-Forward Payment Assumptions

ISSUE-016 may use these conceptual assumptions:

```text
customer and booking context exists only as demo UI
payment method display currently supports cash and static PayNow instruction copy
PayNow QR is a placeholder, not uploaded or generated
payment status is local preview only
paid / outstanding summary is local display math only
payment terms are not yet configurable
```

ISSUE-016 must not infer that payment records, invoice records, receipt records, PayNow QR records, GST settings, or admin settings already exist.

---

## 4. Reserved Boundary for ISSUE-016

ISSUE-016 must use its own approved workpack before creating:

```text
Admin Setting Basic UI
business info settings
GST setting UI or copy
PayNow QR / payment terms settings
settings persistence
API submissions
server actions
Supabase writes
RLS changes
payment provider integration
invoice or receipt generation
```

---

## 5. ISSUE-016 Gate

ISSUE-016 may start only after:

```text
ISSUE-015 is PASS or PASS WITH WARNINGS.
ISSUE-015 founder acceptance is recorded.
ISSUE-016 workpack is approved.
ISSUE-016 runs on its own branch.
```
