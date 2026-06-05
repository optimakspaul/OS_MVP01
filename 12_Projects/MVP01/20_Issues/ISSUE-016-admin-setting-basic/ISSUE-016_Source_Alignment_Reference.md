# ISSUE-016 Source Alignment Reference

**Issue:** ISSUE-016  
**Title:** Admin Setting Basic  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-015 Payment Basic  
**Next Issue:** ISSUE-017 Reminder + Basic Report  
**Primary Template:** Aircon / Home Service Starter Template  

---

## 1. Source of Truth

ISSUE-016 must align to the current MVP01 architecture:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-016 is:

```text
Admin Setting Basic
```

It creates the Starter-depth business/admin settings layer that supports the payment, quote, reminder, and report flow.

---

## 2. Relationship to ISSUE-015

ISSUE-015 created the static Payment Basic flow:

```text
Booking -> Payment -> Admin Setting handoff
```

ISSUE-016 must focus only on the next workflow support layer:

```text
Payment Basic -> Admin Setting Basic
```

Admin Setting Basic is **local/static and manual-assisted**, not a database-backed settings system, not real tenant configuration, not real GST compliance automation, and not a payment configuration engine.

---

## 3. Implementation Direction

ISSUE-016 may create basic frontend UI for:

```text
1. Admin setting panel in workspace
2. Business information preview
3. GST setting preview
4. Static PayNow QR / payment instruction setting
5. Payment terms preview
6. Reminder default setting preview
7. Basic report preference preview
8. Manual admin checklist
9. Handoff to Reminder + Basic Report
```

ISSUE-016 should remain Starter-depth and manual-assisted.

---

## 4. Reserved Boundaries

Reserved for later issues:

```text
Real admin setting persistence
Tenant settings table
Supabase client integration
API routes
Server actions
Auth-gated admin settings
Role-based setting permissions
GST compliance engine
PayNow QR generation / upload storage
Payment gateway configuration
Reminder automation engine
Report generation engine
Optimaks OS admin console
ISSUE-017 reminder/report implementation
```

ISSUE-016 must not start ISSUE-017.
