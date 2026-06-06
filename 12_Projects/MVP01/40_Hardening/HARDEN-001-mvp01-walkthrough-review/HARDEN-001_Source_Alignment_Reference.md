# HARDEN-001 Source Alignment Reference

**Hardening Item:** HARDEN-001  
**Title:** MVP01 Walkthrough Review  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**MVP01 Status:** Final Checkpoint Accepted as PASS WITH WARNINGS  
**MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Previous Gate:** MVP01 Final Checkpoint Review  
**Next Gate:** HARDEN-002 or MVP02 Planning / Scope Alignment  
**Branch:** `harden/harden-001-mvp01-walkthrough-review`

---

## Source of Truth

HARDEN-001 must align to the accepted MVP01 scope:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Primary Template = Aircon / Home Service Starter Template
Issue Range = ISSUE-000 through ISSUE-018
Final Checkpoint = PASS WITH WARNINGS / Founder Accepted
```

MVP01 demo routes:

```text
/end-customer
/workspace
/optimaks-os
```

## Purpose

This is a walkthrough review, not a feature issue. It verifies that MVP01 can be demoed coherently from end customer to client workspace to Optimaks OS Basic.

## Walkthrough Scope

```text
/end-customer:
Request -> Quote Estimate -> Booking Interest -> Payment Status Info -> Reminder Consent

/workspace:
Lead -> Customer -> Quote -> Booking -> Payment -> Admin Setting -> Reminder -> Basic Report

/optimaks-os:
Client list -> Plan status -> Onboarding status -> Workspace link -> Demo pack -> Release pack -> Closeout
```

## Forbidden Scope

```text
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create new product features.
Do not modify app UI unless a build-breaking issue requires a founder-approved fix.
Do not create migrations, tables, Supabase integration, API routes, server actions, RLS, auth, payment/calendar/reminder automation, or a full Optimaks OS admin console.
```
