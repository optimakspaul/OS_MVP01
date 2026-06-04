# ISSUE-010 Interface Scope Notes

**Issue:** ISSUE-010
**Title:** End Customer Interface Basic
**Project:** MVP01
**Phase:** Phase 3 - End Customer Interface + Client Workspace Basic

---

## 1. Purpose

ISSUE-010 creates the basic public end-customer interface for the Aircon / Home Service Starter Template.

The route is a customer-facing request preview for the MVP01 Starter flow:

```text
Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
```

---

## 2. Route

```text
src/app/end-customer/page.tsx
```

The route is implemented as a client component because it uses local browser state to preview the request summary.

---

## 3. Included Interface Scope

The interface includes:

```text
request entry
service issue selection
customer contact fields
address / service area field
quote estimate guidance
booking interest / preferred timing
payment status / manual payment explanation
reminder / maintenance follow-up consent
WhatsApp CTA / manual-assisted handoff
demo / non-persistent boundary notice
```

---

## 4. Data and Persistence Boundary

The interface does not persist data.

```text
No database writes
No Supabase client integration
No API routes
No server actions
No lead creation
No customer record creation
No quote record creation
No booking record creation
No payment record creation
```

The submit action only creates a local request preview inside the browser session.

---

## 5. Reserved Scope

Reserved for later approved issues:

```text
Client Workspace UI
Optimaks OS UI
lead persistence
customer persistence
quote calculation engine
real booking scheduler
payment gateway
WhatsApp API
auth / login
RLS / database policy work
ISSUE-011 work
ISSUE-012 lead persistence
```
