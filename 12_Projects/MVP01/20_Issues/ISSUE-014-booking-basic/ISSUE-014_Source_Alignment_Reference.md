# ISSUE-014 Source Alignment Reference

**Issue:** ISSUE-014  
**Title:** Booking Basic  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-013 Quote Estimate Basic  
**Next Issue:** ISSUE-015 Payment Basic  
**Primary Template:** Aircon / Home Service Starter Template  

---

## 1. Source of Truth

ISSUE-014 must align to the current MVP01 architecture:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-014 is:

```text
Booking Basic
```

It creates the Starter-depth manual booking operating flow inside the client workspace.

---

## 2. Relationship to ISSUE-013

ISSUE-013 created the static Quote Estimate Basic flow:

```text
Lead / Customer -> Quote Estimate -> Booking handoff
```

ISSUE-014 must focus only on the next workflow segment:

```text
Quote Estimate -> Booking
```

The booking flow is **manual-assisted**, not a real scheduler, not calendar sync, not Google Calendar / Calendly / Cal.com integration, and not a confirmed booking engine.

---

## 3. Implementation Direction

ISSUE-014 may create basic frontend UI for:

```text
1. Booking panel in workspace
2. Selected quote/customer context
3. Preferred date and time display/input
4. Service address / area summary
5. Booking status
6. Manual scheduling checklist
7. Customer confirmation copy
8. Calendar integration reserved notice
9. Handoff to Payment Basic
```

ISSUE-014 should remain Starter-depth and manual-assisted.

---

## 4. Reserved Boundaries

Reserved for later issues:

```text
Real booking scheduler
Database persistence
Supabase client integration
Booking table implementation
API routes
Server actions
Google Calendar integration
Calendly / Cal.com integration
Automated availability rules
Technician assignment
Calendar conflict detection
Payment implementation
Reminder implementation
RLS / DB policy work
Optimaks OS admin console
ISSUE-015 payment implementation
```

ISSUE-014 must not start ISSUE-015.
