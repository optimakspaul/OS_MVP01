# ISSUE-008 Plan Depth Matrix Notes

**Issue:** ISSUE-008
**Project:** MVP01
**Purpose:** Define Starter / Grow / Pro module depth boundaries

---

## 1. Plan Depth Meaning

Starter, Grow, and Pro are plan depth levels.

They are not separate apps, not database schemas, and not security policies.

```text
Starter = MVP01 included depth
Grow = later collaboration and workflow depth
Pro = later technician, branch, and operational management depth
```

---

## 2. Starter Depth

Starter depth is the MVP01 included baseline:

```text
Lead = Basic
Customer = Basic
Quote = Estimate
Booking = Manual
Payment = Status
Reminder = Basic
Report = Basic
```

---

## 3. Grow Depth

Grow depth is reserved to MVP02 and later approved work:

```text
Lead = Full
Customer = Full
Quote = Full
Booking = Calendar
Payment = Reminder
Reminder = Full
Report = Monthly
Team = Basic
Service History = Full
```

Grow complete collaboration is not part of MVP01 implementation.

---

## 4. Pro Depth

Pro depth is reserved to MVP03 and later approved work:

```text
technician / branch management
branch or technician scheduling
advanced payment view
workflow-based reminders
dashboard reporting
job card
technician module
branch module
workflow template module
approval module
```

---

## 5. Platform and AI Depth

Platform depth is reserved to MVP04:

```text
client lifecycle
plan / module control
template library
billing
support tracker
platform analytics
```

AI and ecosystem depth are reserved to MVP05:

```text
AI Copilot
Automation Engine
Integration Ecosystem
```

---

## 6. Boundary Statement

Plan depth controls product availability. Workspace / tenant boundary controls data isolation.

Starter / Grow / Pro must not be represented as RLS policies.
