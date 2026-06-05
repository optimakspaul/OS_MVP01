# ISSUE-016 README

**Issue:** ISSUE-016  
**Title:** Admin Setting Basic  
**Project:** MVP01  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Primary Template:** Aircon / Home Service Starter Template  
**Path:** `12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/`

---

## Purpose

ISSUE-016 creates the basic Admin Setting layer for MVP01.

It shows how Starter-level business settings support quote, booking, payment, reminder, and report flows:

```text
Payment -> Admin Setting -> Reminder + Basic Report
```

---

## Allowed

```text
Frontend route / page enhancement
Local component state
Static demo business settings
Accessible setting toggles / previews
Static GST setting preview
Static PayNow instruction setting
Static payment terms preview
Default reminder/report preference preview
Manual-assisted admin workflow copy
Documentation
Issue chain / change log updates
```

---

## Not Allowed

```text
migrations
database tables
Supabase client writes
API routes
server actions
RLS
auth/login
real tenant settings
role-based admin permissions
GST compliance engine
PayNow QR generation / upload storage
payment gateway settings
reminder automation
report generation
Optimaks OS UI
technician portal
ISSUE-017 work
```

---

## Handoff

ISSUE-017 will use this Admin Setting Basic flow to define Reminder + Basic Report.
