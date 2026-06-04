# ISSUE-010 UX Flow Notes

**Issue:** ISSUE-010
**Project:** MVP01
**Route:** `src/app/end-customer/page.tsx`

---

## 1. Purpose

This file records the customer-facing flow implemented for End Customer Interface Basic.

---

## 2. UX Flow

The visible flow is:

```text
Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
```

---

## 3. Request

The customer sees a simple request entry page for the Aircon / Home Service Starter Template.

The form asks for:

```text
service issue
name
phone / WhatsApp
address / service area
preferred timing
extra notes
maintenance reminder consent
```

---

## 4. Quote Estimate

The page shows guidance copy based on the selected service issue.

The guidance is not a pricing engine. It explains what the business may need to check before confirming an estimate.

---

## 5. Booking

The page captures booking interest with simple preferred timing options:

```text
Today
Tomorrow
This week
Need advice first
```

This does not create a booking record or scheduler event.

---

## 6. Payment Status

The page explains that payment is handled manually by the business.

No payment gateway, invoice, receipt, payment link, or transaction status integration is created.

---

## 7. Reminder

The page includes a maintenance / follow-up reminder consent checkbox.

This is customer intent only. It does not create reminder records, notifications, or automation.

---

## 8. Manual-assisted Handoff

The WhatsApp CTA is a manual handoff link.

It does not call the WhatsApp API or send an automated message from the application.
