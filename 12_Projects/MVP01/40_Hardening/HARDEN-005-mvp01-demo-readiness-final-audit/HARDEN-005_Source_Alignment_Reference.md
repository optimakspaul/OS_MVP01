# HARDEN-005 Source Alignment Reference

**Hardening Item:** HARDEN-005  
**Title:** MVP01 Demo Readiness Final Audit  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**MVP01 Status:** Final Checkpoint Accepted as PASS WITH WARNINGS  
**Previous Hardening:** HARDEN-004 Optimaks OS + Pitch Pack Polish  
**MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Execution Mode:** Final Demo Readiness Audit / Governance / Release Readiness  
**Branch:** `harden/harden-005-mvp01-demo-readiness-final-audit`

---

## 1. Source of Truth

HARDEN-005 must align with accepted MVP01 scope and completed hardening:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Demo routes = /end-customer, /workspace, /optimaks-os
HARDEN-001 = MVP01 Walkthrough Review accepted
HARDEN-002 = End Customer UI / Copy Polish accepted
HARDEN-003 = Workspace Dashboard Polish accepted
HARDEN-004 = Optimaks OS + Pitch Pack Polish accepted
```

HARDEN-005 focuses only on final demo readiness audit.

It must not add product features.

---

## 2. Purpose

The purpose is to confirm MVP01 is ready for founder-led demo after all route polish work.

The audit should answer:

```text
1. Can the founder demo MVP01 end-to-end?
2. Are all demo routes coherent?
3. Is the pitch pack usable?
4. Are known warnings non-blocking?
5. Are MVP01 boundaries clear?
6. Is MVP02 still locked?
7. What should the founder do next?
```

---

## 3. Final Audit Scope

Audit these routes and documentation areas:

```text
/end-customer
/workspace
/optimaks-os
HARDEN-001 walkthrough review
HARDEN-002 end customer polish
HARDEN-003 workspace polish
HARDEN-004 Optimaks OS + pitch pack polish
MVP01 change control log
MVP01 final checkpoint docs
```

---

## 4. Allowed Scope

Allowed:

```text
Final audit documentation
Demo readiness checklist
Founder demo runbook
Go / No-Go recommendation
Known warnings summary
MVP02 lock notice
Change control log update
```

---

## 5. Forbidden Scope

Forbidden:

```text
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create MVP02 planning workpack.
Do not create new product features.
Do not modify app UI unless a build-breaking issue requires founder-approved fix.
Do not create migrations.
Do not create database tables.
Do not create Supabase integration.
Do not create API routes.
Do not create server actions.
Do not create RLS.
Do not create auth.
Do not create payment/calendar/reminder automation.
Do not create full Optimaks OS admin console.
Do not modify package/env files unless validation is impossible and founder approval is requested.
```
