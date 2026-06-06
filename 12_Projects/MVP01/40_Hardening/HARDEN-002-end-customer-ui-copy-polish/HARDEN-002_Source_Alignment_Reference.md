# HARDEN-002 Source Alignment Reference

**Hardening Item:** HARDEN-002  
**Title:** End Customer UI / Copy Polish  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**MVP01 Status:** Final Checkpoint Accepted as PASS WITH WARNINGS  
**Previous Hardening:** HARDEN-001 MVP01 Walkthrough Review  
**MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Execution Mode:** UI / Copy Hardening  
**Branch:** `harden/harden-002-end-customer-ui-copy-polish`

---

## 1. Source of Truth

HARDEN-002 must align with the accepted MVP01 scope:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Demo routes = /end-customer, /workspace, /optimaks-os
HARDEN-001 = PASS WITH WARNINGS / Founder Accepted
```

HARDEN-001 identified that founder-guided demo is ready, but self-guided preview needs navigation/copy hardening.

HARDEN-002 focuses only on:

```text
/end-customer UI and copy polish
```

---

## 2. Purpose

The purpose is to make the end customer demo page clearer, more trustworthy, and safer for self-guided preview.

The page should communicate:

```text
1. What the end customer is doing
2. What happens after they submit interest
3. That this is a demo / preview
4. That quote / booking / payment / reminder behavior is not automated production behavior yet
5. How the customer-facing journey connects to the business workspace
```

---

## 3. Allowed Scope

Allowed:

```text
Polish /end-customer UI copy
Improve layout clarity
Add demo boundary copy
Add next-step explanation
Add section labels
Add trust / safety wording
Add clearer CTA wording
Add lightweight navigation links if already consistent with app style
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
Do not create real form submission.
Do not create real quote engine.
Do not create booking scheduler.
Do not create payment integration.
Do not create reminder automation.
Do not create full customer portal.
Do not modify /workspace or /optimaks-os unless route links require tiny navigation consistency and workpack permits it.
```

---

## 5. Expected Route

Primary route:

```text
src/app/end-customer/page.tsx
```

Support file if needed:

```text
src/app/globals.css
```

Do not add libraries.
