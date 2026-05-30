# CHK-DEV-009 Workflow Positioning and Scope Checklist

| Field | Value |
|---|---|
| Document Code | CHK-DEV-009 |
| Version | v1.5.1 WAS Positioning Patch |
| Effective Date | 2026-05-14 |
| Owner | Optimaks Pte Ltd |
| Status | Active Checklist |
| Purpose | Check whether a project fits Optimaks WAS / SME OS positioning before implementation. |

---

## 1. Positioning Check

- [ ] The project is for a specific industry or clearly defined SME workflow.
- [ ] The project is not positioned as generic SaaS for everyone.
- [ ] The project is not only a website or isolated landing page unless it supports a workflow system.
- [ ] The project has a clear operational pain point.
- [ ] The project supports human operations rather than claiming full human replacement.

---

## 2. Workflow Check

- [ ] Lead / enquiry flow is defined.
- [ ] Customer profile or customer record need is defined.
- [ ] Quote / proposal / pricing step is defined, if applicable.
- [ ] Booking / scheduling step is defined, if applicable.
- [ ] Job execution or service status is defined, if applicable.
- [ ] Invoice / payment / follow-up step is defined, if applicable.
- [ ] Maintenance / repeat customer / reactivation logic is considered.

---

## 3. Small Core MVP Check

- [ ] MVP_01 can be described in one simple workflow loop.
- [ ] MVP_01 avoids auth, payment, e-sign, multi-tenant, invoice, and client portal unless essential.
- [ ] MVP_01 has a clear data model.
- [ ] MVP_01 has a clear page map.
- [ ] MVP_01 has a simple test method.
- [ ] Later modules are listed separately and not forced into MVP_01.

---

## 4. Client Value Check

- [ ] The system reduces repetitive admin coordination.
- [ ] The system makes operational status visible.
- [ ] The system creates measurable value for the owner.
- [ ] The monthly value / maintenance proof can be reported.
- [ ] The client delivery boundary is clear.

---

## 5. Decision

| Result | Meaning |
|---|---|
| Pass | Can proceed to Project Context / MVP document / AI Context Package. |
| Partial | Needs discovery or workflow clarification before development. |
| Fail | Should remain as research, sales idea, or market note. |
