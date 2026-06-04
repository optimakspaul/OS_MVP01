# ISSUE-009 Template Flow Notes

**Issue:** ISSUE-009
**Project:** MVP01
**Template:** Aircon / Home Service Starter Template

---

## 1. Purpose

This file defines the documentation-level Starter flow for the MVP01 primary industry template.

It prepares ISSUE-010 and later issues to implement approved flow slices without expanding ISSUE-009 into app code, UI, database work, RLS, or runtime template logic.

---

## 2. End Customer Flow

The End Customer Interface flow is:

```text
Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
```

Meaning:

```text
Request: customer expresses service intent.
Quote Estimate: business provides estimate / quote guidance.
Booking: appointment is arranged manually.
Payment Status: payment is tracked manually as status.
Reminder: follow-up or maintenance reminder is captured at basic depth.
```

ISSUE-010 should use this flow to scope End Customer Interface Basic.

---

## 3. Client Workspace Flow

The Client Workspace flow is:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
```

Meaning:

```text
Lead: owner/admin reviews incoming request.
Customer: owner/admin maintains customer profile and service context.
Quote: owner/admin creates estimate / quote guidance.
Booking: owner/admin records manual appointment details.
Payment: owner/admin tracks payment status manually.
Reminder: owner/admin tracks basic maintenance or follow-up reminder.
Report: owner/admin reviews basic monthly / operational view.
```

ISSUE-011 and later Starter operation issues should use this flow after ISSUE-010 is accepted.

---

## 4. Optimaks OS Basic Flow

The Optimaks OS Basic flow is:

```text
Demo Setup -> Onboarding -> Workspace Link -> Release Tracking
```

Meaning:

```text
Demo Setup: prepare the template for demonstration.
Onboarding: support the first SME owner/admin setup.
Workspace Link: connect the client to their workspace.
Release Tracking: track demo/release readiness and handover.
```

ISSUE-018 carries the Optimaks OS Basic + Demo / Release Pack outcome.

---

## 5. Reserved Flow Boundaries

ISSUE-009 does not unlock:

```text
template builder flow
multi-industry marketplace flow
AI automation flow
full workflow automation
full customer portal
advanced payment gateway flow
Grow / Pro technician or branch operations
Platform lifecycle, billing, support, or analytics flow
```
