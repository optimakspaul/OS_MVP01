# MVP Module Integration Policy

| Field | Value |
|---|---|
| Document Code | STD-DEV-010 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define core system, industry templates, MVP boundaries and integration flow. |

---


## Strategy

Optimaks uses:

```text
One core system + module switches + industry templates
```

## Core System

- Authentication
- Customer Profile
- Lead CRM
- Quotation
- Invoice
- Booking
- Reporting
- Settings
- Permission
- Deployment / Monitoring

## Industry Templates

- Aircon OS
- Salon template
- Accounting / Receipt template
- Maintenance service template
- Future SME industry templates

## MVP Principles

1. MVP can be developed independently but must have clear boundaries.
2. MVP should not directly pollute the core system.
3. Validated MVPs should enter formal integration through Change Request.
4. Impact analysis is required before integration.
5. Workflows may differ by industry, but core data and permission principles should remain stable.

## Integration Flow

```text
MVP Prototype
     ↓
Validation
     ↓
Integration Change Request
     ↓
Impact Analysis
     ↓
Core Compatibility Review
     ↓
Branch Implementation
     ↓
Staging Test
     ↓
Production Merge
```
