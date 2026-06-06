# HARDEN-001 Demo Script

**Project:** MVP01
**Audience:** Founder-led prospect or internal walkthrough
**Target Duration:** 10 to 15 minutes
**Demo Mode:** Static / local / non-persistent

---

## 1. Opening

Say:

> MVP01 demonstrates Starter Complete + Optimaks OS Basic for an Aircon / Home Service business. The current routes are static previews, so no customer data, bookings, payments, or reminders are saved or automated.

Open routes directly in this order:

```text
1. /end-customer
2. /workspace
3. /optimaks-os
```

---

## 2. End Customer Interface

Open `/end-customer`.

Show:

```text
Service issue selection
Customer contact and area
Preferred timing
Reminder consent
Quote guidance
Manual WhatsApp handoff
Local request summary
```

Suggested action:

1. Select a service issue.
2. Enter a demo name and service area.
3. Choose a preferred timing.
4. Submit the local preview.
5. Point out that the summary is not saved.

Say:

> This is the customer-facing request entry. It demonstrates the information needed for a manual-assisted handoff, not a live lead submission or WhatsApp automation.

---

## 3. Client Workspace

Open `/workspace` directly.

Show in this order:

```text
Workflow overview
Lead / Customer
Quote Estimate
Booking
Payment
Admin Setting
Reminder + Basic Report
```

Keep the walkthrough focused:

1. Select one lead.
2. Preview conversion to customer.
3. Select quote service items.
4. Show the estimate range and GST display.
5. Show the manual booking date/time and status.
6. Show cash/PayNow status preview.
7. Show admin defaults.
8. Show reminder and monthly value preview.

Say:

> The workspace demonstrates the Starter operating flow with local state. It does not create persistent records, move money, schedule a technician, or send reminders.

Avoid spending time on every repeated status card or checklist.

---

## 4. Optimaks OS Basic

Open `/optimaks-os`.

Show:

```text
Sample client list
Starter plan status
Onboarding status
Workspace links
Demo checklist
Release checklist
MVP01 flow summary
Included / reserved boundary
```

Say:

> Optimaks OS Basic is the internal demo and release tracking layer for MVP01. It is not the full Optimaks OS admin console.

Call out:

```text
MVP01 included: Starter Complete + Optimaks OS Basic
Reserved: backend client management, tenant provisioning, billing, entitlements, automation, and MVP02 implementation
```

---

## 5. Close

Say:

> MVP01 is accepted as a static, demo-ready Starter Complete flow. The next planning step may begin only through an approved workpack. Production persistence, auth, integrations, automation, and full admin capability remain separate future decisions.

---

## 6. Presenter Guardrails

Do not claim:

```text
Data is saved
WhatsApp messages are sent automatically
Quotes or invoices are generated
Bookings are scheduled against real availability
Payments are processed
PayNow QR is functional
Reminders or reports are automated
Optimaks OS is a full admin console
MVP02 has started
```
