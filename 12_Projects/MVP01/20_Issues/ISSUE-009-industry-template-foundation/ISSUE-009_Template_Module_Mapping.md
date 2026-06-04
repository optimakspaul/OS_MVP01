# ISSUE-009 Template Module Mapping

**Issue:** ISSUE-009
**Project:** MVP01
**Template:** Aircon / Home Service Starter Template

---

## 1. Purpose

This file maps the ISSUE-008 Starter-depth module library to the MVP01 Aircon / Home Service Starter Template.

It is documentation-only and does not create module tables, template tables, entitlement logic, app code, or UI.

---

## 2. Module Mapping

| Module | Starter Depth | Template Use |
|---|---|---|
| Lead Module | Basic | Request capture and lead conversion |
| Customer Module | Basic | Customer profile and service context |
| Quote Module | Estimate | Estimate / quote guidance |
| Booking Module | Manual | Manual booking / appointment scheduling |
| Payment Module | Status | Payment status / manual tracking |
| Reminder Module | Basic | Maintenance / follow-up reminder |
| Report Module | Basic | Basic monthly / operational report |

---

## 3. Flow Placement

```text
Request capture -> Lead Module
Customer context -> Customer Module
Estimate / quote guidance -> Quote Module
Manual appointment scheduling -> Booking Module
Manual payment tracking -> Payment Module
Follow-up / maintenance reminder -> Reminder Module
Monthly / operational summary -> Report Module
```

---

## 4. Reserved Module Depth

The following are not unlocked by ISSUE-009:

```text
Team Module
Service History Full
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

These remain reserved according to `MVP01_MODULE_LIBRARY_MATRIX.md` and ISSUE-008 included/reserved rules.
