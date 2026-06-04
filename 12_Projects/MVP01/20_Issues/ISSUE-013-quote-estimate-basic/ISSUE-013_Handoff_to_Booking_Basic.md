# ISSUE-013 Handoff to Booking Basic

**Issue:** ISSUE-013
**Next Issue:** ISSUE-014 - Booking Basic

---

## 1. Handoff Purpose

ISSUE-014 should use the Quote Estimate Basic assumptions to define Booking Basic.

ISSUE-013 does not create bookings, booking records, calendar scheduling, technician assignment, route handlers, server actions, Supabase writes, or booking persistence.

---

## 2. Files ISSUE-014 Must Read

```text
src/app/workspace/page.tsx
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Quote_Estimate_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Implementation_Notes.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 3. Carry-Forward Quote Estimate Assumptions

ISSUE-014 may use these conceptual fields:

```text
selected lead/customer
lead ID
customer name
phone
service address
service issue
preferred timing
selected service item assumptions
estimate range preview
quote status preview
manual quote checklist
```

ISSUE-014 must not infer that quote records or booking records already exist.

---

## 4. Reserved Boundary for ISSUE-014

ISSUE-014 must use its own approved workpack before creating:

```text
booking UI
booking date/time controls
booking status controls
customer/quote linkage UI
booking records
calendar behavior
API submissions
server actions
Supabase writes
RLS changes
```

---

## 5. ISSUE-014 Gate

ISSUE-014 may start only after:

```text
ISSUE-013 is PASS or PASS WITH WARNINGS.
ISSUE-013 founder acceptance is recorded.
ISSUE-014 workpack is approved.
ISSUE-014 runs on its own branch.
```
