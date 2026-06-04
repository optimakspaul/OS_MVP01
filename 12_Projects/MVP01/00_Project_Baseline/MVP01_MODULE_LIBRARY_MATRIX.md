# MVP01_MODULE_LIBRARY_MATRIX.md

## 1. Purpose

This file defines the canonical MVP01 module library foundation and Starter / Grow / Pro plan-depth matrix.

It is documentation and architecture guidance only. It does not create database tables, entitlement tables, RLS policies, app code, UI, or Supabase client code.

## 2. Canonical Context

```text
Project: MVP01
MVP Definition: Starter Complete + Optimaks OS Basic
Source: Optimaks_MVP01_to_MVP05_Phase_Issue_Package_v0.3_with_Flow
Issue Source: ISSUE-008 Module Library Foundation
```

## 3. Plan-Depth Rule

Plan depth decides which modules and feature depth are available.

Workspace / tenant boundary decides which data a user can access.

Plan depth must not be treated as RLS or data isolation.

## 4. Canonical Module Matrix

| Module | Starter | Grow | Pro | MVP Recommendation |
|---|---|---|---|---|
| Lead Module | Basic | Full | Full | MVP01 starts |
| Customer Module | Basic | Full | Full | MVP01 starts |
| Quote Module | Estimate | Full | Approval | MVP01 / MVP02 / MVP03 |
| Booking Module | Manual | Calendar | Branch / Technician Scheduling | MVP01 / MVP02 / MVP03 |
| Payment Module | Status | Reminder | Advanced View | MVP01 / MVP02 / MVP03 |
| Reminder Module | Basic | Full | Workflow-based | MVP01 / MVP02 / MVP03 |
| Report Module | Basic | Monthly | Dashboard | MVP01 / MVP02 / MVP03 |
| Team Module | Reserved | Basic | Advanced | MVP02 starts |
| Service History Module | Reserved / Basic | Full | Full | MVP02 starts |
| Job Card Module | Reserved | Optional | Full | MVP03 starts |
| Technician Module | Reserved | Reserved / Optional | Full | MVP03 starts |
| Branch Module | Reserved | Reserved | Full | MVP03 starts |
| Workflow Template Module | Reserved | Reserved / Basic | Full | MVP03 starts |
| Approval Module | Reserved | Reserved / Optional | Full | MVP03 starts |
| Client Lifecycle Module | Reserved | Reserved | Reserved / Basic | MVP04 starts |
| Plan / Module Control | Reserved | Reserved | Reserved / Basic | MVP04 starts |
| Template Library | Reserved | Reserved | Reserved / Basic | MVP04 starts |
| Billing Module | Reserved | Reserved | Reserved | MVP04 starts |
| Support Tracker | Reserved | Reserved | Reserved | MVP04 starts |
| Platform Analytics | Reserved | Reserved | Reserved | MVP04 starts |
| AI Copilot | Future | Future | Future | MVP05 |
| Automation Engine | Future | Future | Future | MVP05 |
| Integration Ecosystem | Future | Future | Future | MVP05 |

## 5. MVP01 Included Modules

MVP01 includes only Starter-depth foundation for:

```text
Lead Module = Basic
Customer Module = Basic
Quote Module = Estimate
Booking Module = Manual
Payment Module = Status
Reminder Module = Basic
Report Module = Basic
```

## 6. Reserved Boundaries

```text
MVP02 reserved: Grow complete collaboration; Team Module Basic; Service History Full; deeper Quote, Booking, Payment, Reminder, and Report capability.
MVP03 reserved: Pro technician / branch management; Job Card; Technician; Branch; Workflow Template; Approval; Pro-depth operations.
MVP04 reserved: Full Optimaks Platform; client lifecycle; plan/module control; template library; billing; support tracker; platform analytics.
MVP05 reserved: AI Copilot; Automation Engine; Integration Ecosystem.
```

## 7. Implementation Boundary

ISSUE-008 documents module availability and reserved depth only.

Do not implement:

```text
module tables
template tables
entitlement tables
plan-gating code
RLS policies
migrations
app UI
Supabase client code
```

Those require later approved workpacks.
