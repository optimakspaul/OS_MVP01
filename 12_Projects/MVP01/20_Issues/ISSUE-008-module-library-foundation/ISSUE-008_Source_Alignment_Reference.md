# ISSUE-008 Source Alignment Reference

**Issue:** ISSUE-008  
**Title:** Module Library Foundation  
**Source Package:** Optimaks_MVP01_to_MVP05_Phase_Issue_Package_v0.3_with_Flow  
**Alignment Date:** 2026-06-04  

---

## 1. Canonical MVP01 Alignment

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
ISSUE-007 = Architecture Alignment
ISSUE-008 = Module Library Foundation
```

## 2. ISSUE-008 Canonical Definition

From the v0.3 source package:

```text
ISSUE-008 — Module Library Foundation
Phase: Phase 2
Expected Outcome: 建立 module list、plan depth matrix、included/reserved rule。
```

## 3. MVP01 Scope Context

```text
Goal:
先賣得出去：完成 1 個主行業 + Starter Complete + 最小可 demo / 可交付操作系統。

Scope:
1 個主行業 Template（建議 Aircon / Home Service）+ Shared Core + Module Library Foundation + Starter 基本完整流程 + Optimaks OS Basic。

Reserved / Not Included:
Grow 完整協作、Pro 技師/分店管理、完整 Payment Gateway、完整 Automation、完整 SaaS Billing、完整 Optimaks Platform。
```

## 4. Module Library Matrix Source

Canonical matrix source:

| Module | Starter | Grow | Pro | MVP 建議 |
|---|---|---|---|---|
| Lead Module | Basic | Full | Full | MVP01 起 |
| Customer Module | Basic | Full | Full | MVP01 起 |
| Quote Module | Estimate | Full | Approval | MVP01 / MVP02 / MVP03 |
| Booking Module | Manual | Calendar | Branch / Technician Scheduling | MVP01 / MVP02 / MVP03 |
| Payment Module | Status | Reminder | Advanced View | MVP01 / MVP02 / MVP03 |
| Reminder Module | Basic | Full | Workflow-based | MVP01 / MVP02 / MVP03 |
| Report Module | Basic | Monthly | Dashboard | MVP01 / MVP02 / MVP03 |
| Team Module | Reserved | Basic | Advanced | MVP02 起 |
| Service History Module | Reserved / Basic | Full | Full | MVP02 起 |
| Job Card Module | Reserved | Optional | Full | MVP03 起 |
| Technician Module | Reserved | Reserved / Optional | Full | MVP03 起 |
| Branch Module | Reserved | Reserved | Full | MVP03 起 |
| Workflow Template Module | Reserved | Reserved / Basic | Full | MVP03 起 |
| Approval Module | Reserved | Reserved / Optional | Full | MVP03 起 |
| Client Lifecycle Module | Reserved | Reserved | Reserved / Basic | MVP04 起 |
| Plan / Module Control | Reserved | Reserved | Reserved / Basic | MVP04 起 |
| Template Library | Reserved | Reserved | Reserved / Basic | MVP04 起 |
| Billing Module | Reserved | Reserved | Reserved | MVP04 起 |
| Support Tracker | Reserved | Reserved | Reserved | MVP04 起 |
| Platform Analytics | Reserved | Reserved | Reserved | MVP04 起 |
| AI Copilot | Future | Future | Future | MVP05 |
| Automation Engine | Future | Future | Future | MVP05 |
| Integration Ecosystem | Future | Future | Future | MVP05 |

## 5. ISSUE-008 Boundary

ISSUE-008 is a documentation / architecture foundation issue.

It should define:

```text
1. Canonical module list
2. Starter / Grow / Pro depth mapping
3. MVP01 included modules
4. MVP02–MVP05 reserved modules
5. Plan-depth vs data-isolation boundary
6. Handoff to ISSUE-009 Industry Template Foundation
```

It must not create:

```text
module database tables
plan entitlement tables
template tables
app UI
app feature code
Supabase migrations
RLS policies
ISSUE-009 work
```
