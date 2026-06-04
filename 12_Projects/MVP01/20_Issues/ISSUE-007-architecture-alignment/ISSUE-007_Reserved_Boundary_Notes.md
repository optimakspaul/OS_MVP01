# ISSUE-007 Reserved Boundary Notes

**Issue:** ISSUE-007
**Project:** MVP01
**Purpose:** Keep MVP01 aligned to Starter Complete + Optimaks OS Basic without unlocking later MVP scope.

---

## 1. Reserved Capabilities

The following capabilities are reserved and must not be implemented in MVP01 unless future change control approves otherwise:

```text
Grow full collaboration
Pro technician / branch management
Full customer portal
Full payment gateway
Full WhatsApp API automation
Full workflow automation
Full PDF automation
Full SaaS billing
Full Optimaks Platform
AI, marketplace, and ecosystem capability
Multi-industry rollout beyond the first primary template
```

---

## 2. MVP01 Allowed Depth

MVP01 may include:

```text
Starter Complete
one primary industry template
Shared Core
Module Library Foundation
Industry Template Foundation
End Customer Interface Basic
Client Workspace Basic
Starter operation flow
Admin Setting Basic
Reminder + Basic Report
Optimaks OS Basic
Demo / Release Pack
```

---

## 3. ISSUE-007 Forbidden Boundary

ISSUE-007 must not create:

```text
RLS
RLS policies
migrations
app code
Supabase client code
login UI
module tables
template tables
business workflow tables
payment gateway integration
WhatsApp API integration
ISSUE-008 execution records or implementation
```

---

## 4. Next Issue Boundary

ISSUE-008 is Module Library Foundation. It must establish the module list, plan depth matrix, and included/reserved rules without jumping into business workflow implementation or UI expansion unless its own approved workpack explicitly allows it.
