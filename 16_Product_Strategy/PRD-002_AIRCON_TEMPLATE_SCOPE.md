# PRD-002 Aircon Template Scope

| Field | Value |
|---|---|
| Current Library Version | v1.5.5 Strategic Constitution Guardrails Patch |
| Last Consolidated | 2026-05-16 |
| Status | Active / Current unless explicitly marked as historical |


| Field | Value |
|---|---|
| Document Code | PRD-002 |
| Version | v1.5.5 Current Consolidated Release |
| Effective Date | 2026-05-16 |
| Owner | Optimaks Pte Ltd |
| Status | Active Product Draft |
| Purpose | Define the first industry template for Optimaks Service OS. |

---

## 1. Template Positioning

Aircon Template is the first industry-specific preset for Optimaks Service OS.

Positioning:

```text
From WhatsApp enquiry to completed aircon job.
```

---

## 2. Target Workflow

```text
Website / Google / Referral Enquiry
↓
WhatsApp Lead Capture
↓
Lead Dashboard
↓
Quote
↓
Booking
↓
Technician Job Card
↓
Completion Photo / Notes
↓
Invoice Status
↓
Maintenance Reminder
```

---

## 3. Aircon Service Types

Initial values:

```text
- General servicing
- Chemical wash
- Chemical overhaul
- Troubleshooting
- Gas top-up
- Installation
- Maintenance contract
- Commercial servicing
```

---

## 4. Job Card Fields

```text
- customer_id
- booking_id
- service_type
- unit_count
- technician_name
- arrival_time
- completion_time
- before_photo_url
- after_photo_url
- issue_found
- work_done
- recommendation
- customer_signature_status
- job_status
```

---

## 5. Maintenance Reminder Logic

Default reminder rule:

```text
After completed service, create next maintenance reminder at +6 months.
```

Future configurable options:

```text
- 3 months
- 4 months
- 6 months
- 12 months
- custom interval
```

---

## 6. Non-Goals for First Aircon MVP

```text
- full technician GPS tracking
- inventory / spare parts management
- accounting software sync
- automated payment reconciliation
- AI price quotation
- marketplace customer matching
```
