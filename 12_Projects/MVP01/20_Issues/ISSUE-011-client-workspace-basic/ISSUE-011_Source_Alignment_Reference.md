# ISSUE-011 Source Alignment Reference

**Issue:** ISSUE-011  
**Title:** Client Workspace Basic  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-010 End Customer Interface Basic  
**Next Issue:** ISSUE-012 Lead / Customer Flow  
**Primary Template:** Aircon / Home Service Starter Template  

---

## 1. Source of Truth

ISSUE-011 must align to the current MVP01 architecture:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-011 is:

```text
Client Workspace Basic
```

It creates the first basic client-side internal workspace interface for the Starter flow.

---

## 2. Relationship to ISSUE-010

ISSUE-010 created the end-customer-facing interface:

```text
/end-customer
End Customer Flow: Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
```

ISSUE-011 must create the client-side workspace that can conceptually receive and manage that flow:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
```

This issue should remain local / demo-first unless existing approved repository patterns support otherwise.

---

## 3. Implementation Direction

ISSUE-011 may create basic frontend UI for:

```text
1. Client workspace overview
2. Starter workflow board / pipeline
3. Lead / customer summary cards
4. Quote estimate status
5. Booking status
6. Payment status
7. Reminder / follow-up status
8. Basic report snapshot
9. Manual-assisted action list
10. Handoff notes for ISSUE-012 Lead / Customer Flow
```

ISSUE-011 should prioritize a demo-ready client workspace that shows how a small business owner / admin would manage requests after they arrive.

---

## 4. Reserved Boundaries

Reserved for later issues:

```text
Persistent lead database writes
Real CRM records
Supabase client integration
Authentication-gated workspace
Role-based workspace permissions UI
Real quote engine
Real booking scheduler
Payment gateway
WhatsApp API
Technician portal
Optimaks OS admin console
ISSUE-012 lead/customer implementation
```

ISSUE-011 must not start ISSUE-012.
