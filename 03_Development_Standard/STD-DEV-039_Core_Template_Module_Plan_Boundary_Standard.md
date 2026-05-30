# STD-DEV-039 Core Template Module Plan Boundary Standard

**Version:** v1.7.3  
**Status:** Active  
**Applies To:** Core architecture, client versions, industry templates, plan tiers, modules, feature toggles.

---

## 1. Purpose

This standard defines how Optimaks OS separates stable foundation from configurable business variations.

It prevents AI tools from changing Core when the correct solution is a template, module, feature flag, or client configuration.

---

## 2. Classification Rule

Every product change must be classified before implementation:

```text
Core Foundation
Industry Template
Module
Plan Feature Set
Client-specific Configuration
Owner Console Operation
```

---

## 3. Core Foundation

Core Foundation contains shared system capabilities required by all product tiers and industries.

Examples:

```text
Auth
Workspace / Tenant
RLS
Feature Flags
Plan Rules
App Shell
Audit Log
Basic Notification
Commercial Foundation
```

Core must be stable, small, and protected.

Core may be changed only when:

```text
The capability is required by multiple plans or modules, and
The change improves shared foundation rather than one client exception, and
The issue includes migration / rollback / test notes where relevant.
```

---

## 4. Industry Template

Industry Template contains workflow presets, copy, fields, labels, and default configuration for a specific vertical.

Examples:

```text
Aircon service template
Restaurant direct-order template
Cleaning service template
Tuition center template
```

Templates should not fork Core.

---

## 5. Module

A Module is a reusable capability that may be enabled by plan, client, or industry.

Examples:

```text
Booking
Quote Builder
Lead CRM
Invoice Tracker
Maintenance Reminder
Job Card
Worker Photo Submission
Monthly Report
```

Modules should integrate with Core through stable interfaces.

---

## 6. Plan Feature Set

A Plan Feature Set defines what a client can access.

Examples:

```text
Starter
Growth
Pro
Internal Optimaks Owner Version
```

Plan behavior should be controlled by:

```text
Feature flags
Plan rules
Workspace settings
Owner Console assignment
```

Do not duplicate codebases for each plan unless explicitly approved.

---

## 7. Decision Rule

Use this sequence before changing code:

```text
Can this be solved by configuration?
If no, can this be solved by template?
If no, can this be solved by module?
If no, can this be solved by feature flag / plan rule?
Only then consider Core change.
```

---

## 8. DONE Report Requirement

Any issue touching this standard must record:

```text
Classification used
Why Core was or was not changed
Plan/template/module impact
Backward compatibility risk
Rollback note
```
