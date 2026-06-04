# ISSUE-009 Handoff to End Customer Interface

**Issue:** ISSUE-009
**Next Issue:** ISSUE-010 - End Customer Interface Basic

---

## 1. Handoff Purpose

ISSUE-010 must use the Industry Template Foundation to scope the customer-facing request entry and CTA boundary for the Aircon / Home Service Starter Template.

ISSUE-010 must not expand ISSUE-009 into template tables, module tables, entitlement logic, RLS, migrations, Supabase client code, or multi-industry template work unless its own approved workpack explicitly allows it.

---

## 2. Files ISSUE-010 Must Read

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md
12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Industry_Template_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Module_Mapping.md
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Flow_Notes.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 3. ISSUE-010 Starting Boundary

ISSUE-010 should use this customer-facing flow:

```text
Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
```

ISSUE-010 should preserve this template identity:

```text
Template Name: Aircon / Home Service Starter Template
Template Type: Starter-depth industry template
Primary User: SME owner / admin
```

---

## 4. Carry-forward Rules

ISSUE-010 must preserve:

```text
MVP01 = Starter Complete + Optimaks OS Basic
one primary industry template
Starter-depth module list
Grow / Pro / Platform / AI reserved boundaries
Plan-depth vs data-isolation boundary
documentation-only template foundation
```

---

## 5. ISSUE-010 Gate

ISSUE-010 may start only after:

```text
ISSUE-009 is PASS or PASS WITH WARNINGS.
ISSUE-009 founder acceptance is recorded.
ISSUE-010 workpack is approved.
ISSUE-010 runs on its own branch.
```
