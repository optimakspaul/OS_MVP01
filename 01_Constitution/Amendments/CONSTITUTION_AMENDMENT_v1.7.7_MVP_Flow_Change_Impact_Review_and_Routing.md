# CONSTITUTION_AMENDMENT_v1.7.7 — MVP Flow Change Impact Review and Routing Rule

**Version:** v1.7.7  
**Status:** Integrated into v1.7.8-safe-integrated  
**Effective Date:** 2026-05-26  
**Applies To:** MVP01 flow changes, new feature requests, workflow changes, role/status changes, payment/provider changes, and reserved-feature unlock requests  
**Does Not Replace:** STD-DEV-035 Batch and Issue Revision Impact Control or STD-GOV-002 Constitution Change Level Decision Rule.

---

## 1. Purpose

This amendment adds a product-flow-specific change routing rule for MVP01.

When a new idea appears during MVP01 execution, it must not be implemented immediately. It must first be classified and routed.

Examples:

```text
add Stripe / HitPay / PayNow
change booking flow
add technician login
add customer portal
add invoice tracker
change job status
add automation
unlock Command features
```

---

## 2. Core Rule

Any MVP01 workflow, feature, status, role, module, payment, automation, or reserved-scope change must be reviewed before implementation.

The review must decide one of the following outcomes:

```text
1. Bug fix inside the current issue
2. Supplemental note only
3. New MVP01 Change Issue
4. Forward-only adoption in the next issue
5. Reserved for MVP02 / MVP03
6. Excluded from current product scope
7. Constitution-level change request required
```

---

## 3. Required Impact Review Areas

Check whether the proposed change affects:

| Layer / Area | Review Question |
|---|---|
| L1 Business Flow | Does the business journey change? |
| L2 Plan Flow | Does Solo / Flow / Command boundary change? |
| L3 Role Flow | Does Owner / Admin / Technician / Customer behavior change? |
| L4 Status Flow | Does a status, stage, or transition change? |
| L5 Module / Template Flow | Does a module, template, or feature toggle change? |
| Database / RLS | Are tables, policies, relationships, or permissions affected? |
| Pages / UI | Are pages, forms, buttons, dashboards, or workflows affected? |
| Pricing / Package | Does package value or price positioning change? |
| Deployment / Env | Are provider keys, production settings, or integrations affected? |
| Documentation | Do roadmap, issue map, workpack, README, or changelog need update? |

---

## 4. Routing Rule

Do not edit an already-planned issue unless the change is clearly a bug fix inside that issue's approved scope.

For new scope, create a separate change issue or reserve it for a later MVP.

---

## 5. Relationship to v1.7.5

v1.7.5 already defines L1-L5, scope boundaries, and reserved functionality.

This amendment adds a practical mid-development decision gate so new ideas do not accidentally break the MVP01 baseline.
