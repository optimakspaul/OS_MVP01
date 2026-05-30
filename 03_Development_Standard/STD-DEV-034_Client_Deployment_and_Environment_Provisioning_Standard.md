# STD-DEV-034 — Client Deployment and Environment Provisioning Standard

**Status:** Active in v1.6.0  
**Applies to:** Client setup, preview deployment, production launch, workspace activation

---

## 1. Purpose

This standard defines how Optimaks should prepare and launch client workspaces during MVP and early delivery stages.

---

## 2. MVP Deployment Principle

During MVP stage, use a shared application and controlled workspace isolation where practical.

Preferred default:

```text
one main repo
one main app
client/workspace isolation via database + configuration
plan/template behavior via feature flags
manual founder/admin activation first
automation later
```

Avoid creating a separate repo or custom codebase for each client unless approved by founder decision.

---

## 3. Environment Layers

Use at least these logical environments:

```text
local development
preview / staging
production
```

Production deployment requires founder approval.

---

## 4. Client Launch Gate

Before demo setup, production launch or billing activation, confirm:

```text
CLT-009 onboarding checklist completed or exception recorded
client workspace created
selected plan confirmed
selected industry template confirmed
required modules enabled
admin user created or invited
notification email/WhatsApp configured
billing/payment/invoice info confirmed
preview link tested
no real secrets committed
no unauthorized client data exposed
rollback plan known
```

---

## 5. Secrets and API Keys

Secrets must never be committed.

Allowed in documentation:

```text
key name
where to configure it
what it is used for
who owns it
```

Not allowed in documentation or Git:

```text
actual API secret
private key
service role key
password
client credential
production token
```

Refer to:

```text
STD-SEC-001 Environment Secrets and API Key Governance
```

---

## 6. Client Isolation

Any client-facing production setup must respect:

```text
client_id / workspace_id separation
RLS policy rules
role-based access
no cross-client data leakage
```

If a feature cannot guarantee isolation, it must remain internal, demo-only, or disabled until fixed.

---

## 7. Deployment Record

Each launch should record:

```text
client name
workspace_id
plan
template
enabled modules
domain/subdomain if any
preview URL
production URL
onboarding checklist status
founder approval status
launch date
rollback note
```

---

## 8. DONE Report Requirement

Any issue that changes deployment, workspace, environment, or client provisioning behavior must include:

```text
deployment impact
client isolation impact
environment variable impact
preview validation steps
production gate notes
rollback notes
```
