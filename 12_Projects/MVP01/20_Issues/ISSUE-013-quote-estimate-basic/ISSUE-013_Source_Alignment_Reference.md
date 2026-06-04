# ISSUE-013 Source Alignment Reference

**Issue:** ISSUE-013  
**Title:** Quote Estimate Basic  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-012 Lead / Customer Flow  
**Next Issue:** ISSUE-014 Booking Basic  
**Primary Template:** Aircon / Home Service Starter Template  

---

## 1. Source of Truth

ISSUE-013 must align to the current MVP01 architecture:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-013 is:

```text
Quote Estimate Basic
```

It creates the Starter-depth quote estimate operating flow inside the client workspace.

---

## 2. Relationship to ISSUE-012

ISSUE-012 created the static Lead / Customer Flow:

```text
Request -> Lead -> Customer -> Quote Estimate
```

ISSUE-013 must focus only on the next internal workflow segment:

```text
Customer / Lead -> Quote Estimate
```

The quote estimate is a **manual-assisted estimate**, not a real quote engine, pricing engine, invoice, payment gateway, or binding quotation.

---

## 3. Implementation Direction

ISSUE-013 may create basic frontend UI for:

```text
1. Quote estimate panel in workspace
2. Selected lead/customer context
3. Service item list
4. Estimate range display
5. Optional discount display
6. GST application explanation
7. Quote status
8. Manual follow-up checklist
9. Handoff to Booking Basic
```

ISSUE-013 should remain Starter-depth and manual-assisted.

---

## 4. Reserved Boundaries

Reserved for later issues:

```text
Real quote calculation engine
Persistent quote records
Supabase client integration
Database tables
API routes
Server actions
Invoice creation
Payment gateway
GST compliance engine
PDF quote generation
Customer approval workflow
Booking implementation
RLS / DB policy work
Optimaks OS admin console
ISSUE-014 booking implementation
```

ISSUE-013 must not start ISSUE-014.
