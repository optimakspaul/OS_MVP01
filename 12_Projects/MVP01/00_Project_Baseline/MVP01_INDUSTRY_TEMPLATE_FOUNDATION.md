# MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md

## 1. Purpose

This file defines the MVP01 Industry Template Foundation for the first Starter-depth industry template.

It is documentation and architecture guidance only. It does not create database tables, template tables, module tables, entitlement tables, RLS policies, migrations, app code, UI, seed data, API routes, server actions, or Supabase client code.

## 2. Canonical Context

```text
Project: MVP01
MVP Definition: Starter Complete + Optimaks OS Basic
Template Name: Aircon / Home Service Starter Template
Template Type: Starter-depth industry template
Primary User: SME owner / admin
Issue Source: ISSUE-009 Industry Template Foundation
Previous Source: ISSUE-008 Module Library Foundation
```

## 3. Industry Template Rule

An Industry Template is not a separate product, app, database schema, or security policy.

For MVP01, the industry template is a packaged operating pattern that applies the Starter-depth module library to one target industry.

```text
Shared Modules + Starter Depth + Aircon / Home Service Template = Demo-ready MVP01 template foundation
```

## 4. Primary Template Definition

The MVP01 primary template is:

```text
Template Name: Aircon / Home Service Starter Template
Template Type: Starter-depth industry template
Primary User: SME owner / admin
Target Business Type: Aircon service, home service, or similar field-service SME
Template Depth: Documentation-level Starter pattern only
```

## 5. Template Module Mapping

| MVP01 Module | Starter Depth | Industry Template Use |
|---|---|---|
| Lead Module | Basic | Request capture and lead conversion |
| Customer Module | Basic | Customer profile and service context |
| Quote Module | Estimate | Estimate / quote guidance |
| Booking Module | Manual | Manual booking / appointment scheduling |
| Payment Module | Status | Payment status / manual tracking |
| Reminder Module | Basic | Maintenance / follow-up reminder |
| Report Module | Basic | Basic monthly / operational report |

## 6. Starter Flow Foundation

End Customer Flow:

```text
Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
```

Client Workspace Flow:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
```

Optimaks OS Basic Flow:

```text
Demo Setup -> Onboarding -> Workspace Link -> Release Tracking
```

## 7. ISSUE-010 Handoff Boundary

ISSUE-010 may use this foundation to define End Customer Interface Basic.

ISSUE-010 should preserve:

```text
primary template = Aircon / Home Service Starter Template
end customer flow = Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
included modules = Lead, Customer, Quote, Booking, Payment, Reminder, Report at Starter depth
reserved scope = no template tables, module tables, entitlement logic, RLS, migrations, UI beyond ISSUE-010 workpack, or multi-industry marketplace
```

## 8. Reserved Boundaries

Reserved for later MVPs or later approved workpacks:

```text
multi-industry marketplace
template builder UI
template tables
module tables
entitlement logic
seed data
AI automation
Grow / Pro / Platform depth
multiple live industry templates
industry-specific automation engine
advanced workflow variations
```

## 9. Implementation Boundary

ISSUE-009 documents the industry template foundation only.

Do not implement:

```text
migrations
database tables
template tables
module tables
entitlement tables
seed data
RLS policies
app code
UI
Supabase client code
API routes
server actions
ISSUE-010 work
```

Those require later approved workpacks.
