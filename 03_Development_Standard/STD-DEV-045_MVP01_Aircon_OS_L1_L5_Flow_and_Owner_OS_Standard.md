# STD-DEV-045 — MVP01 Aircon OS L1-L5 Flow and Owner OS Standard

**Version:** v1.7.5-safe  
**Status:** Active  
**Applies To:** MVP01 planning, issue creation, Codex prompts, Antigravity prompts, database/page/workflow maps

---

## 1. Purpose

This standard defines how the Solo / Flow / Command business model must be converted into product architecture before coding.

It prevents:

- coding from pricing-card wording only;
- building Command-level features too early;
- mixing Optimaks internal owner operations with client-facing Aircon OS operations;
- creating orphan modules or templates without flow/status ownership.

---

## 2. Official MVP01 Formula

```text
MVP01 = Core Foundation + Solo Complete + Flow Basic + Command Reserved + Owner Console Basic
```

This formula is mandatory for MVP01 scoping.

---

## 3. L1-L5 Checklist

Before creating or executing an MVP01 issue, fill this checklist.

| Layer | Required Question | Example |
|---|---|---|
| L1 Business Flow | Which business journey step does this support? | Lead → Booking → Job |
| L2 Plan Flow | Which plan activates this feature? | Solo / Flow / Command |
| L3 Role Flow | Which role uses or sees it? | Owner / Technician / Customer |
| L4 Status Flow | Which status changes? | booking_status: requested → confirmed |
| L5 Module / Template | Which module or template owns it? | Booking Module / WhatsApp Task Card Template |

No issue may skip L1-L5 unless it explicitly states why a layer is not applicable.

---

## 4. Official L1 Business Flow

```text
Lead → Customer → Booking → Job → Completion → Payment → Review → Maintenance Reminder → Repeat Booking
```

MVP01 must prioritize this journey over secondary features.

---

## 5. Official L2 Plan Flow

```text
Solo    = Lead capture + online presence + payment reference + review invite
Flow    = Scheduling + dispatch + service history + invoice tracking + maintenance reminder
Command = Quality control + evidence + approval + permissions + advanced assignment
```

For MVP01:

```text
Solo = Complete
Flow = Basic
Command = Reserved
```

---

## 6. Official L3 Role Flow

MVP01 roles:

- Optimaks Internal Admin
- Owner
- Admin
- Technician
- Customer
- Contractor reserved

Minimum role behavior:

| Role | MVP01 Responsibility |
|---|---|
| Optimaks Internal Admin | Manage clients, workspace, plan, feature toggles, launch status |
| Owner | View leads, customers, bookings, jobs, payment status, reminders |
| Admin | Reserved / optional for Flow and Command |
| Technician | Receive task card and update job status |
| Customer | Submit enquiry, confirm booking, pay, review, rebook |

---

## 7. Official L4 Status Flow

Use the following status names unless a change request approves otherwise.

```text
lead_status: new, contacted, quoted, won, lost
customer_status: new, active, inactive, repeat
booking_status: requested, confirmed, scheduled, completed, cancelled
job_status: created, assigned, in_progress, completed, rescheduled, failed
quote_status: draft, sent, accepted, rejected, expired
invoice_status: draft, sent, paid, overdue, cancelled
payment_status: unpaid, partially_paid, paid, refunded
review_status: not_requested, requested, reviewed, no_response
maintenance_status: not_set, scheduled, reminder_due, reminder_sent, rebooked, no_response
notification_status: pending, sent, failed, acknowledged
```

---

## 8. Official L5 Module and Template Flow

### 8.1 MVP01 Modules

- Workspace Module
- User Role Module
- Plan Rule Module
- Feature Toggle Module
- Lead Module
- Customer Module
- Booking Module
- Job Module
- Technician Assignment Module
- Quote Module
- Invoice Module
- Payment Status Module
- Review Module
- Maintenance Reminder Module
- Notification Module
- Owner Console Module
- Report Module

### 8.2 MVP01 Templates

- Aircon Industry Template
- Solo Plan Feature Template
- Flow Plan Feature Template
- Command Reserved Feature Template
- Landing Page Template
- Enquiry Form Template
- WhatsApp Enquiry Template
- WhatsApp Technician Task Card Template
- Review Request Template
- Maintenance Reminder Template
- Quote Template
- Invoice Template
- E-Receipt Template
- Monthly Report Template

---

## 9. Owner OS Boundary

Owner Console Basic is part of MVP01, but it is not the same as the client-facing Aircon OS.

Owner Console Basic controls:

- client profile;
- workspace status;
- plan assignment;
- feature toggle;
- industry template;
- onboarding checklist;
- setup fee status;
- monthly fee status;
- launch status;
- support notes.

Client-facing Aircon OS controls:

- leads;
- customers;
- bookings;
- jobs;
- technician tasks;
- invoices and payment status;
- reviews;
- maintenance reminders.

---

## 10. AI Prompt Requirement

Codex and Antigravity prompts for MVP01 20_Issues must include this line:

```text
Before implementation, verify this issue maps to L1 Business Flow, L2 Plan Flow, L3 Role Flow, L4 Status Flow, and L5 Module / Template Flow according to STD-DEV-045.
```

---

## 11. Forbidden Scope Expansion

Unless explicitly approved, MVP01 20_Issues must not implement:

- full Command workflow;
- full WhatsApp Business API automation;
- Stripe / HitPay recurring auto-charge;
- Grab PayLater;
- auto-refund;
- auto-suspension;
- complex installment logic;
- tax report;
- multi-currency accounting;
- full PDF generator beyond template placeholder;
- social media automation as a product module.
