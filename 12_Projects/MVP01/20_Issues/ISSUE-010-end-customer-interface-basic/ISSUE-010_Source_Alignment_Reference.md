# ISSUE-010 Source Alignment Reference

**Issue:** ISSUE-010  
**Title:** End Customer Interface Basic  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-009 Industry Template Foundation  
**Next Issue:** ISSUE-011 Client Workspace Basic  
**Primary Template:** Aircon / Home Service Starter Template  

---

## 1. Source of Truth

ISSUE-010 must align to the current MVP01 architecture:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-010 is:

```text
End Customer Interface Basic
```

It is the first customer-facing interface scope for the MVP01 Starter flow.

---

## 2. Relationship to ISSUE-009

ISSUE-009 defined:

```text
Aircon / Home Service Starter Template
End Customer Flow: Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
Optimaks OS Flow: Demo Setup -> Onboarding -> Workspace Link -> Release Tracking
```

ISSUE-010 must create the basic public-facing customer interface boundary for the first flow segment:

```text
Request -> Quote Estimate -> Booking Interest -> Payment Status Info -> Reminder Consent
```

This issue should not create backend persistence unless explicitly already supported by existing approved app structure.

---

## 3. Implementation Direction

ISSUE-010 may create basic frontend UI for:

```text
1. End customer request entry
2. Service category / problem selection
3. Customer contact fields
4. Quote estimate guidance display
5. Booking interest / preferred time capture
6. Payment status explanation / manual payment expectation
7. Reminder consent / maintenance follow-up copy
8. WhatsApp CTA / manual-assisted handoff copy
```

ISSUE-010 should prioritize a demo-ready interface that shows the intended customer journey.

---

## 4. Reserved Boundaries

Reserved for later issues:

```text
Lead persistence
Customer database write
Quote calculation engine
Real booking scheduler
Payment gateway
WhatsApp API
Authentication
Client Workspace management UI
Optimaks OS admin UI
RLS / DB policy work
Template builder
Multi-industry template switching
```

ISSUE-010 must not start ISSUE-011 or ISSUE-012.
