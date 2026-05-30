# PRD-001 Optimaks Service OS Product Scope

| Field | Value |
|---|---|
| Current Library Version | v1.5.5 Strategic Constitution Guardrails Patch |
| Last Consolidated | 2026-05-16 |
| Status | Active / Current unless explicitly marked as historical |


| Field | Value |
|---|---|
| Document Code | PRD-001 |
| Version | v1.5.5 Current Consolidated Release |
| Effective Date | 2026-05-16 |
| Owner | Optimaks Pte Ltd |
| Status | Active Product Draft |
| Purpose | Define reusable core modules for Optimaks Service OS. |

---

## 1. Product Definition

Optimaks Service OS is the reusable core system for service-based SMEs.

It should support industry templates such as:

```text
- Aircon
- Cleaning
- Pest Control
- Plumbing
- Electrical
- Appliance Repair
- Facility Maintenance
```

---

## 2. Core Modules

```text
Optimaks Service OS Core
├── Landing Page / Lead Capture
├── Customer Profile
├── Quote Builder
├── Booking Schedule
├── Job Card
├── Invoice Tracker
├── Reminder / Follow-up
├── WhatsApp Template Toolkit
└── Dashboard / Reporting
```

---

## 3. Product Principle

```text
Industry Template = workflow preset + copy + fields + reports.
Core System = reusable modules and data model.
```

Do not hard-code the system only for aircon if a reusable service workflow pattern can be used.

---

## 4. MVP Core

The smallest useful core:

```text
Lead → Customer → Quote → Booking → Job → Invoice Status
```

Not required in the first MVP:

```text
- full accounting integration
- advanced inventory
- payroll
- complex technician routing
- multi-country tax logic
- marketplace matching
```

---

## 5. Cross-Industry Reusable Fields

```text
- lead_source
- customer_name
- customer_phone
- customer_email
- service_address
- service_type
- quote_status
- booking_date
- technician_assigned
- job_status
- completion_photo_url
- invoice_status
- next_follow_up_date
```

---

## 6. Upgrade Path

```text
Starter = Landing Page + Lead Capture
Growth = Lead + Customer + Quote + Booking
Pro = Job Card + Invoice Tracker + Reminder + Dashboard
```
