# ISSUE-012 Source Alignment Reference

**Issue:** ISSUE-012  
**Title:** Lead / Customer Flow  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-011 Client Workspace Basic  
**Next Issue:** ISSUE-013 Quote Estimate Basic  
**Primary Template:** Aircon / Home Service Starter Template  

---

## 1. Source of Truth

ISSUE-012 must align to the current MVP01 architecture:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-012 is:

```text
Lead / Customer Flow
```

It creates the Starter-depth lead and customer operating flow inside the client workspace.

---

## 2. Relationship to ISSUE-010 and ISSUE-011

ISSUE-010 created:

```text
/end-customer
End Customer Flow: Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
```

ISSUE-011 created:

```text
/workspace
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
```

ISSUE-012 must focus only on the first internal workflow segment:

```text
Lead -> Customer
```

This issue should make the workspace more useful by adding a clear lead list, lead detail, and customer profile concept using static/local demo state only unless an approved persistence pattern already exists.

---

## 3. Implementation Direction

ISSUE-012 may create basic frontend UI for:

```text
1. Lead list / request inbox
2. Lead status tabs or filters
3. Lead detail panel
4. Customer profile summary
5. Contact / address / service context
6. Manual action notes
7. Convert-to-customer demo action
8. Handoff to Quote Estimate Basic
```

ISSUE-012 should remain Starter-depth and manual-assisted.

---

## 4. Reserved Boundaries

Reserved for later issues:

```text
Database persistence
Supabase client integration
Lead table implementation
Customer table implementation
API routes
Server actions
Auth-gated client workspace
Real CRM workflow
Real quote calculation
Booking implementation
Payment implementation
Reminder implementation
RLS / DB policy work
Optimaks OS admin console
Technician portal
ISSUE-013 quote implementation
```

ISSUE-012 must not start ISSUE-013.
