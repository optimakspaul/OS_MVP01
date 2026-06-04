# ISSUE-012 Handoff to Quote Estimate

**Issue:** ISSUE-012
**Next Issue:** ISSUE-013 - Quote Estimate Basic

---

## 1. Handoff Purpose

ISSUE-013 should use the Lead / Customer Flow assumptions to define Quote Estimate Basic.

ISSUE-012 does not create quote records, quote calculations, quote documents, invoice logic, or pricing behavior.

---

## 2. Files ISSUE-013 Must Read

```text
src/app/workspace/page.tsx
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Lead_Customer_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Implementation_Notes.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 3. Carry-forward Lead / Customer Assumptions

The workspace uses these conceptual fields:

```text
lead ID
customer name
phone
service address
service issue
service context
lead status
preferred timing
customer type
customer summary
next quote estimate step
```

ISSUE-013 may use these assumptions to define Quote Estimate Basic, but must not infer that persistence already exists.

---

## 4. Reserved Boundary for ISSUE-013

ISSUE-013 must use its own approved workpack before creating:

```text
quote estimate UI
quote records
quote calculations
service item pricing
discount behavior
GST application
quote status transitions
API submissions
server actions
Supabase writes
RLS changes
```

---

## 5. ISSUE-013 Gate

ISSUE-013 may start only after:

```text
ISSUE-012 is PASS or PASS WITH WARNINGS.
ISSUE-012 founder acceptance is recorded.
ISSUE-013 workpack is approved.
ISSUE-013 runs on its own branch.
```
