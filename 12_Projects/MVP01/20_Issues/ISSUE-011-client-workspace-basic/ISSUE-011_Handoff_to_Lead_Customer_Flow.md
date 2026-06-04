# ISSUE-011 Handoff to Lead / Customer Flow

**Issue:** ISSUE-011
**Next Issue:** ISSUE-012 - Lead / Customer Flow

---

## 1. Handoff Purpose

ISSUE-012 should use the Client Workspace Basic route to define the real Lead / Customer Flow.

ISSUE-011 does not create real lead or customer records.

---

## 2. Files ISSUE-012 Must Read

```text
src/app/workspace/page.tsx
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Workspace_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Client_Workspace_UX_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Implementation_Notes.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 3. Carry-forward Workspace Assumptions

The workspace uses these conceptual request and customer fields:

```text
request ID
customer context
service issue
service area
starter workflow stage
manual next step
quote estimate status
booking status
payment status
reminder status
```

ISSUE-012 may use these assumptions to define Lead / Customer Flow, but must not infer that persistence already exists.

---

## 4. Reserved Boundary for ISSUE-012

ISSUE-012 must use its own approved workpack before creating:

```text
lead records
customer records
lead detail pages
customer profile pages
status transitions
Supabase client writes
API submissions
server actions
auth / login
RLS changes
```

---

## 5. ISSUE-012 Gate

ISSUE-012 may start only after:

```text
ISSUE-011 is PASS or PASS WITH WARNINGS.
ISSUE-011 founder acceptance is recorded.
ISSUE-012 workpack is approved.
ISSUE-012 runs on its own branch.
```
