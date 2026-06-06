# HARDEN-003 Source Alignment Reference

**Hardening Item:** HARDEN-003  
**Title:** Workspace Dashboard Polish  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**MVP01 Status:** Final Checkpoint Accepted as PASS WITH WARNINGS  
**Previous Hardening:** HARDEN-002 End Customer UI / Copy Polish  
**MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Execution Mode:** UI / Flow / Copy Hardening  
**Branch:** `harden/harden-003-workspace-dashboard-polish`

---

## 1. Source of Truth

HARDEN-003 must align with the accepted MVP01 scope:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Demo routes = /end-customer, /workspace, /optimaks-os
HARDEN-001 = MVP01 Walkthrough Review accepted
HARDEN-002 = End Customer UI / Copy Polish accepted
```

HARDEN-003 focuses only on:

```text
/workspace dashboard polish
```

The workspace route is the client/business owner dashboard where the founder demonstrates:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Admin Setting -> Reminder -> Basic Report
```

---

## 2. Purpose

The purpose is to make `/workspace` clearer, easier to walkthrough, and safer for self-guided preview.

The dashboard should communicate:

```text
1. What the business owner is looking at
2. How the workflow progresses
3. Which actions are preview/local-only
4. What is included in Starter Complete
5. What is intentionally reserved
6. How the workspace connects to /end-customer and /optimaks-os
```

---

## 3. Allowed Scope

Allowed:

```text
Polish /workspace UI copy
Improve dashboard hierarchy
Improve section labels
Add clearer workflow steps
Add demo boundary copy
Add preview/local-only notices
Clarify quote/booking/payment/admin/reminder/report boundaries
Add lightweight demo navigation links if consistent with app style
Update hardening documentation
Update change control log
```

---

## 4. Forbidden Scope

Forbidden:

```text
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create new backend functionality.
Do not create migrations.
Do not create database tables.
Do not create Supabase integration.
Do not create API routes.
Do not create server actions.
Do not create RLS.
Do not create auth.
Do not create real lead persistence.
Do not create real quote engine.
Do not create booking scheduler.
Do not create payment integration.
Do not create reminder automation.
Do not create report generation.
Do not create full client portal.
Do not create full Optimaks OS admin console.
Do not modify /end-customer or /optimaks-os unless tiny navigation consistency is explicitly needed and safe.
```

---

## 5. Expected Route

Primary route:

```text
src/app/workspace/page.tsx
```

Support file if needed:

```text
src/app/globals.css
```

Do not add libraries.
