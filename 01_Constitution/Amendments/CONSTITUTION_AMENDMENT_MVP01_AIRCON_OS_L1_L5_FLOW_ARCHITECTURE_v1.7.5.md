# Constitution Amendment — MVP01 Aircon OS L1-L5 Flow Architecture

**Version:** v1.7.5-safe  
**Status:** Active Amendment  
**Effective Date:** 2026-05-21  
**Applies To:** Optimaks OS / Aircon OS MVP01 / Owner Console Basic  
**Supersedes / Extends:** v1.7.4-clean for MVP01 flow architecture decisions

---

## 1. Purpose

This amendment makes the MVP01 architecture safer by converting the Solo / Flow / Command commercial package logic into an official implementation control model.

The purpose is to prevent premature coding, uncontrolled feature expansion, and confusion between customer-facing product features and Optimaks internal owner operations.

---

## 2. Official MVP01 Boundary

MVP01 shall be defined as:

```text
Core Foundation + Solo Complete + Flow Basic + Command Reserved + Owner Console Basic
```

### 2.1 Core Foundation

Required for all plans and all workspaces:

- Authentication
- Workspace / Tenant structure
- User roles
- Permission baseline
- Plan rules
- Feature flags
- Audit-ready operational records
- RLS-ready data structure

### 2.2 Solo Complete

Solo is the sellable entry package for independent aircon technicians.

Solo includes:

- Service landing page
- Service price guide
- WhatsApp smart enquiry CTA
- Enquiry form
- Light CRM contact capture
- PayNow QR reference
- E-Receipt
- Google Review invite link

### 2.3 Flow Basic

Flow Basic is the demo-ready and early sellable workflow package for 2-5 person aircon teams.

Flow Basic includes:

- Everything in Solo
- Booking management
- Job scheduling
- Technician assignment
- WhatsApp technician task card
- Customer CRM
- Service history
- Quote / invoice tracking
- Maintenance reminder
- Monthly performance summary

### 2.4 Command Reserved

Command shall be reserved in architecture but not fully built in MVP01 unless explicitly approved.

Reserved placeholders include:

- Before / after completion photo upload
- Customer approval signature
- Multi-user dashboard
- Role-based access control
- Advanced technician assignment logic
- Contractor management
- Complaint evidence trail

### 2.5 Owner Console Basic

Optimaks must have a basic internal management system for the first founding partner clients.

Owner Console Basic includes:

- Client list
- Client profile
- Workspace creation / tracking
- Plan assignment
- Feature toggle
- Industry template assignment
- Onboarding checklist
- Setup fee status
- Monthly fee status
- Launch status
- Support notes

---

## 3. Official L1-L5 Flow Model

Optimaks OS shall use five flow layers for MVP01 planning and issue creation.

### L1 — Business Flow

L1 defines how business value moves from lead capture to repeat booking.

Official MVP01 L1:

```text
Lead → Customer → Booking → Job → Completion → Payment → Review → Maintenance Reminder → Repeat Booking
```

### L2 — Plan Flow

L2 defines the commercial package depth.

```text
Solo   = 接單與形象 / Lead capture and online presence
Flow   = 派單與回流 / Dispatch and repeat business
Command = 品管與管理 / Quality control and management
```

### L3 — Role Flow

L3 defines who can act in the system.

Official MVP01 roles:

- Optimaks Internal Admin
- Owner
- Admin
- Technician
- Customer
- Contractor reserved

### L4 — Status Flow

L4 defines state transitions.

```text
Lead Status:         new → contacted → quoted → won / lost
Customer Status:     new → active → inactive → repeat
Booking Status:      requested → confirmed → scheduled → completed / cancelled
Job Status:          created → assigned → in_progress → completed → rescheduled / failed
Quote Status:        draft → sent → accepted / rejected / expired
Invoice Status:      draft → sent → paid → overdue → cancelled
Payment Status:      unpaid → partially_paid → paid → refunded
Review Status:       not_requested → requested → reviewed → no_response
Maintenance Status:  not_set → scheduled → reminder_due → reminder_sent → rebooked / no_response
Notification Status: pending → sent → failed → acknowledged
```

### L5 — Module / Template Flow

L5 defines reusable product building blocks and reusable templates.

Official MVP01 L5 categories:

- Module Registry
- Industry Template
- Plan Feature Template
- Page Template
- Message Template
- Document Template
- Automation Template
- Workflow Template
- Report Template

---

## 4. Module and Template Rule

A module is a reusable product capability. A template is a reusable configuration, message, document, workflow, or layout.

```text
Plan decides which Modules are available.
Modules use Templates.
Templates adapt to Industry.
Flows define operation order.
Statuses define data transitions.
```

No feature shall be treated as an active product module merely because it appears in a strategy, sales, social media, or roadmap document.

---

## 5. Aircon OS vs Optimaks Owner OS Boundary

### Aircon OS

Customer-facing system used by aircon SMEs.

It manages:

- Leads
- Customers
- Bookings
- Jobs
- Technicians
- Service history
- Invoices / payments
- Reviews
- Maintenance reminders

### Optimaks Owner OS

Internal system used by Optimaks to manage client workspaces.

It manages:

- Client onboarding
- Workspace setup
- Plan assignment
- Feature toggles
- Industry templates
- Payment status
- Launch readiness
- Support notes

The two systems may share Core Foundation but must not mix customer workspace operations with Optimaks internal control records.

---

## 6. Issue Creation Rule

Every MVP01 issue must declare:

- Related L1 Business Flow
- Related L2 Plan Flow
- Related L3 Role Flow
- Related L4 Status Flow
- Related L5 Module / Template
- Related database tables
- Related pages
- Allowed files / directories
- Forbidden files / directories
- Acceptance criteria
- Validation level
- Constitution references

If an issue cannot map to L1-L5, it must be classified as one of:

- future
- experiment
- client-specific configuration
- documentation only
- rejected

---

## 7. Safe Execution Rule

MVP01 must not attempt to build all future features at once.

Allowed MVP01 implementation priority:

```text
1. Core Foundation
2. Owner Console Basic
3. Solo Complete
4. Flow Basic
5. Command Reserved placeholders
```

Command full implementation, advanced payment automation, WhatsApp API full automation, auto-refund, auto-suspension, complex installment logic, and full PDF automation require future explicit 20_Issues.
