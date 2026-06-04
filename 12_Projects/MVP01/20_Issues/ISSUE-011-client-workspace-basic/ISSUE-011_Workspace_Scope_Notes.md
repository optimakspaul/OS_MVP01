# ISSUE-011 Workspace Scope Notes

**Issue:** ISSUE-011
**Title:** Client Workspace Basic
**Project:** MVP01
**Phase:** Phase 3 - End Customer Interface + Client Workspace Basic

---

## 1. Purpose

ISSUE-011 creates the basic client workspace interface for the Aircon / Home Service Starter Template.

The workspace supports the Starter-depth internal flow:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
```

---

## 2. Route

```text
src/app/workspace/page.tsx
```

The workpack preferred `app/workspace/page.tsx`. This repository uses `src/app`, so the compatible route is `src/app/workspace/page.tsx`.

---

## 3. Included Interface Scope

The interface includes:

```text
workspace header / company context
Starter workflow overview
lead / customer intake overview
quote estimate status
booking status
payment status
reminder / follow-up status
manual action queue
basic report snapshot
demo / non-persistent boundary notice
```

---

## 4. Starter Depth Boundary

The workspace is manual-assisted and demo-first.

It uses static demo requests and local browser state only. It does not create real records, persist state, or connect to a backend.

---

## 5. Reserved Scope

Reserved for later approved issues:

```text
lead persistence
customer persistence
quote persistence
booking persistence
payment persistence
reminder persistence
reporting logic
Supabase client integration
API routes
server actions
auth / login
RLS / database policy work
payment gateway
WhatsApp API
Optimaks OS UI
technician portal
ISSUE-012 lead / customer implementation
```
