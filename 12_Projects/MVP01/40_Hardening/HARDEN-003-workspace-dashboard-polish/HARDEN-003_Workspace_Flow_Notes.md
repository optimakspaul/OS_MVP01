# HARDEN-003 Workspace Flow Notes

**Hardening Item:** HARDEN-003
**Route:** `/workspace`
**Scope:** Owner/admin dashboard flow clarity

---

## Flow Goal

Make the long Starter workspace understandable as one guided owner walkthrough:

```text
Request -> Lead -> Customer -> Quote -> Booking -> Payment -> Settings -> Reminder / Report
```

## Demo Path

The page now starts with an eight-link presenter guide:

```text
1. Requests
2. Lead and customer
3. Quote
4. Booking
5. Payment
6. Settings
7. Reminder and report
8. Owner summary
```

Each link moves to an existing section. No new workflow or route behavior was added.

## Section Positioning

### Requests

Review static incoming-request cards and choose which request needs attention.

### Lead and Customer

Select a sample lead, inspect service context, and preview qualification or conversion locally.

### Quote

Choose sample service items, preview estimate display math, and change local status wording.

### Booking

Choose a demo date/time and preview booking status without checking availability or creating a booking.

### Payment

Review cash or non-scannable PayNow placeholder wording and preview local payment status.

### Settings

Preview business information, GST wording, payment terms, reminder defaults, and report preferences.

### Reminder and Report

Prepare manual follow-up copy and view static monthly value signals.

### Owner Summary

Close with sample operational status cards, a local action queue, and a static monthly snapshot.

## Product-Facing Copy Result

Internal issue IDs and implementation handoff language were removed from the visible workspace. Section introductions now describe owner tasks and customer-flow outcomes.

## Behavior Result

All controls remain local React state. The flow does not create, update, schedule, send, calculate, or persist real business records.
