# ISSUE-008 Module Library Notes

**Issue:** ISSUE-008
**Title:** Module Library Foundation
**Project:** MVP01
**Phase:** Phase 2 - Module Foundation

---

## 1. Purpose

ISSUE-008 establishes the MVP01 module library as an architecture and documentation baseline.

It defines what modules exist conceptually, which module depths are included in MVP01, and which module depths are reserved for later MVPs.

---

## 2. Canonical Module List

The canonical module list is:

```text
Lead Module
Customer Module
Quote Module
Booking Module
Payment Module
Reminder Module
Report Module
Team Module
Service History Module
Job Card Module
Technician Module
Branch Module
Workflow Template Module
Approval Module
Client Lifecycle Module
Plan / Module Control
Template Library
Billing Module
Support Tracker
Platform Analytics
AI Copilot
Automation Engine
Integration Ecosystem
```

---

## 3. MVP01 Included Module Foundation

MVP01 includes the Starter-depth foundation only:

```text
Lead Module = Basic
Customer Module = Basic
Quote Module = Estimate
Booking Module = Manual
Payment Module = Status
Reminder Module = Basic
Report Module = Basic
```

These are module definitions and product boundaries only. ISSUE-008 does not implement workflows, database tables, UI, or plan gating.

---

## 4. Module Library Source of Truth

The project-level module matrix is:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md
```

ISSUE-009 must use this matrix when defining the first industry template.
