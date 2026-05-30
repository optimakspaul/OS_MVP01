# STD-DEV-041 Optimaks OS Product Architecture Starter Growth Pro Standard

**Version:** v1.7.3  
**Status:** Active  
**Applies To:** Optimaks OS product planning, MVP scope, tier strategy, module roadmap.

---

## 1. Purpose

This standard defines the product architecture for Optimaks OS.

It converts many possible features into a layered product structure.

---

## 2. Architecture

```text
Optimaks OS
│
├─ Core Foundation
│  ├─ Auth
│  ├─ Workspace / Tenant
│  ├─ RLS
│  ├─ Feature Flags
│  ├─ Plan Rules
│  └─ App Shell
│
├─ Owner Console
│  ├─ Client Management
│  ├─ Plan Assignment
│  ├─ Feature Toggle
│  ├─ Industry Template Assignment
│  ├─ Onboarding Checklist
│  ├─ Payment Status
│  └─ Internal Notes
│
├─ Starter Launch System
│  ├─ Landing Page
│  ├─ Enquiry Form
│  ├─ WhatsApp CTA
│  ├─ Lead CRM
│  ├─ Review Link
│  └─ Starter Dashboard
│
├─ Growth Workflow System
│  ├─ Booking
│  ├─ Quote
│  ├─ Customer CRM
│  ├─ Service History
│  ├─ Maintenance Reminder
│  ├─ Invoice Tracker
│  └─ Monthly Report
│
└─ Pro Automation System
   ├─ Job Card
   ├─ Worker Submission
   ├─ Photo Proof
   ├─ Approval Workflow
   ├─ Auto Invoice Trigger
   ├─ Advanced Analytics
   └─ Multi-role Operation
```

---

## 3. Execution Priority

Architecture does not equal immediate development.

Execution priority:

```text
First: Core + Starter
Second: Growth
Third: Pro
Fourth: Additional Industry Templates
```

---

## 4. Starter Definition

Starter must be:

```text
Demo-able
Sellable
Collectible
Deliverable
Repeatable
```

Starter should focus on lead capture, landing page, WhatsApp CTA, simple CRM, and basic owner visibility.

---

## 5. Growth Definition

Growth starts only after Starter has real customer feedback.

Growth focuses on workflow depth:

```text
Booking
Quote
Customer history
Maintenance reminder
Invoice tracking
Reports
```

---

## 6. Pro Definition

Pro productizes repeated operational pain.

Pro should focus on:

```text
Job card
Worker proof
Approval flow
Auto invoice trigger
Advanced analytics
Multi-role operations
```

---

## 7. DONE Report Requirement

Any issue touching this standard must record:

```text
Which layer is affected
Whether the issue is Core / Starter / Growth / Pro
Why it belongs in that layer
Whether it creates dependency for later layers
```
