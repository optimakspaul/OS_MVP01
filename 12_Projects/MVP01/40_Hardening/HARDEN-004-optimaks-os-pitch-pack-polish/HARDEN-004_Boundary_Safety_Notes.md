# HARDEN-004 Boundary Safety Notes

**Hardening Item:** HARDEN-004
**Project Boundary:** MVP01 Starter Complete + Optimaks OS Basic

## Preserved Boundary

HARDEN-004 changes presentation, copy, navigation, and pitch documentation only.

The `/optimaks-os` route remains:

```text
Static
Server-rendered
Non-persistent
Sample-data only
Founder-demo oriented
```

## Meaning Of Displayed Data

```text
Client name = sample pitch record
Template = presentation label
Plan = positioning label, not entitlement
Onboarding = readiness cue, not workflow state
Workspace link = navigation to an existing static route
Release checklist = manual review guidance
```

## Forbidden-Scope Confirmation

HARDEN-004 does not create or modify:

```text
MVP02 files or execution
Migrations or database tables
Supabase integration
API routes or server actions
RLS or auth
Real Optimaks OS admin console
Client management backend
Tenant provisioning
Billing or subscription management
Deployment automation
Module entitlement logic
Package or environment files
/end-customer or /workspace route files
```

## L1-L5 Alignment

```text
L1 Business Flow: Existing customer-to-follow-up demo story only
L2 Plan Flow: Starter Complete positioning unchanged
L3 Role Flow: Founder presentation and owner workflow explanation only
L4 Status Flow: Static labels only; no state is persisted
L5 Module / Template Flow: Aircon / Home Service Starter presentation only
```

## MVP02 Lock

HARDEN-004 does not unlock MVP02 planning or execution. Any future work requires a separate approved workpack.
