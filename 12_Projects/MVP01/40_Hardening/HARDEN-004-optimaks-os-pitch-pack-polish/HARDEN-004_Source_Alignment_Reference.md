# HARDEN-004 Source Alignment Reference

**Hardening Item:** HARDEN-004  
**Title:** Optimaks OS + Pitch Pack Polish  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**MVP01 Status:** Final Checkpoint Accepted as PASS WITH WARNINGS  
**Previous Hardening:** HARDEN-003 Workspace Dashboard Polish  
**MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Execution Mode:** UI / Copy / Pitch Readiness Hardening  
**Branch:** `harden/harden-004-optimaks-os-pitch-pack-polish`

---

## 1. Source of Truth

HARDEN-004 must align with accepted MVP01 scope:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Demo routes = /end-customer, /workspace, /optimaks-os
HARDEN-001 = MVP01 Walkthrough Review accepted
HARDEN-002 = End Customer UI / Copy Polish accepted
HARDEN-003 = Workspace Dashboard Polish accepted
```

HARDEN-004 focuses only on:

```text
/optimaks-os UI/copy polish
Pitch pack / demo handoff polish
Founder sales-demo readiness
```

---

## 2. Purpose

The purpose is to make the Optimaks OS demo and pitch pack clearer, safer, and more useful for founder-led selling.

The `/optimaks-os` route should communicate:

```text
1. What Optimaks OS Basic is
2. How it supports client/demo/release tracking
3. What the founder should say during a demo
4. What is included in MVP01
5. What is intentionally reserved for MVP02+
6. How this connects back to /end-customer and /workspace
```

---

## 3. Allowed Scope

Allowed:

```text
Polish /optimaks-os UI copy
Improve demo/release checklist wording
Improve pitch-ready explanation
Improve included vs reserved boundary wording
Add founder demo guidance
Add lightweight navigation across demo routes if consistent with app style
Create pitch pack notes
Create demo talk track notes
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
Do not create real Optimaks OS admin console.
Do not create real client management backend.
Do not create tenant provisioning.
Do not create billing/subscription management.
Do not create deployment automation.
Do not create module entitlement logic.
Do not modify /end-customer or /workspace unless tiny navigation consistency is explicitly needed and safe.
```

---

## 5. Expected Route

Primary route:

```text
src/app/optimaks-os/page.tsx
```

Support file if needed:

```text
src/app/globals.css
```

Do not add libraries.
