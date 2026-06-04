# ISSUE-007 Source Alignment Reference

**Source Package:** `Optimaks_MVP01_to_MVP05_Phase_Issue_Package_v0.3_with_Flow.zip`  
**Alignment Target:** MVP01 = Starter Complete + Optimaks OS Basic  
**Purpose:** Use this reference to align MVP01 baseline, phase map, issue chain, flow map, and reserved boundaries.

---

## 1. MVP01 Canonical Definition

```text
MVP01 = Starter Complete + Optimaks OS Basic
```

### Goal

```text
先賣得出去：完成 1 個主行業 + Starter Complete + 最小可 demo / 可交付操作系統。
```

### Scope

```text
1 個主行業 Template（建議 Aircon / Home Service）
+ Shared Core
+ Module Library Foundation
+ Starter 基本完整流程
+ Optimaks OS Basic
```

### Reserved / Not Included

```text
Grow 完整協作
Pro 技師/分店管理
完整 Payment Gateway
完整 Automation
完整 SaaS Billing
完整 Optimaks Platform
```

---

## 2. MVP01 Phase Map

| Phase | Title | Outcome |
|---|---|---|
| Phase 0 | Context / Constitution Verification | 確認 repo、憲法、baseline、AI harness、issue chain 可承接融合後架構。 |
| Phase 1 | Shared Core Foundation | 建立 Auth、Workspace、RLS、Profile、Base DB、App Shell 等共用底座。 |
| Phase 2 | Module Foundation | 建立 Module Library 基礎與 Starter/Grow/Pro plan depth mapping。 |
| Phase 3 | End Customer Interface + Client Workspace Basic | 完成外部 request 入口與 SME 老闆操作工作區。 |
| Phase 4 | Starter Operation Flow | 完成 Request→Lead→Customer→Quote→Booking→Payment 的 Starter 核心流程。 |
| Phase 5 | Admin Setting / Reminder / Report | 完成 Business/GST/PayNow 設定、基本提醒、基本報表。 |
| Phase 6 | Demo Readiness | 準備 demo data、demo flow、known limitations、reserved features。 |
| Phase 7 | Release / Handover | 完成 release note、handover guide、onboarding checklist、founder review。 |

---

## 3. MVP01 Issue Chain

| Issue ID | Title | Phase | Expected Outcome |
|---|---|---|---|
| ISSUE-000 | Repo / Constitution Verification | Phase 0 | 確認 repo、文件結構、憲法與開發標準可用。 |
| ISSUE-001 | Project / Workspace Foundation | Phase 0 | 確認專案 workspace 與基礎資料域。 |
| ISSUE-002 | Supabase / Env Setup | Phase 1 | 建立 Supabase client、env、基本連線設定。 |
| ISSUE-003 | Next.js App Foundation | Phase 1 | 建立 Next.js app foundation、routing、layout skeleton。 |
| ISSUE-004 | Database P0 Tables | Phase 1 | 建立 MVP01 必要 P0 tables。 |
| ISSUE-005 | Indexes / updated_at | Phase 1 | 建立 indexes、updated_at trigger、基本 DB hygiene。 |
| ISSUE-006 | Auth / Profiles | Phase 1 | 建立 auth boundary、profile model、登入後使用者基礎。 |
| ISSUE-007 | Architecture Alignment | Phase 0 | 鎖定 Starter/Grow/Pro/Platform 命名與 MVP01 scope。 |
| ISSUE-008 | Module Library Foundation | Phase 2 | 建立 module list、plan depth matrix、included/reserved rule。 |
| ISSUE-009 | Industry Template Foundation | Phase 2 | 建立主行業 template 與未來多行業 placeholder。 |
| ISSUE-010 | End Customer Interface Basic | Phase 3 | 建立 intent page、request form、WhatsApp/social CTA。 |
| ISSUE-011 | Client Workspace Basic | Phase 3 | 建立 client dashboard、navigation、工作區入口。 |
| ISSUE-012 | Lead / Customer Flow | Phase 4 | 建立 lead list、lead detail、customer profile、status notes。 |
| ISSUE-013 | Quote Estimate Basic | Phase 4 | 建立估價、服務項目、折扣、GST 套用、quote status。 |
| ISSUE-014 | Booking Basic | Phase 4 | 建立手動預約、日期時間、狀態、customer/quote linkage。 |
| ISSUE-015 | Payment Basic | Phase 4 | 建立 Cash、Static PayNow QR、payment status、paid/outstanding。 |
| ISSUE-016 | Admin Setting Basic | Phase 5 | 建立 business info、GST setting、PayNow QR、payment terms。 |
| ISSUE-017 | Reminder + Basic Report | Phase 5 | 建立 payment/follow-up/maintenance reminder basic 與 monthly value view。 |
| ISSUE-018 | Optimaks OS Basic + Demo / Release Pack | Phase 6-7 | 建立 client list、plan status、onboarding status、workspace link、demo/release pack。 |

---

## 4. Global Flow Architecture

```text
End Customer Interface
  ↓
Client Workspace
  ↓
Optimaks OS / Platform
```

| Layer | User | Responsibility |
|---|---|---|
| End Customer Interface | 客戶的客戶 | 送出需求、預約、確認、查看狀態 |
| Client Workspace | SME 老闆 / 團隊 | 接單、客戶、報價、預約、付款、提醒、報表 |
| Optimaks OS / Platform | Optimaks 自己 | 客戶、方案、模組、模板、onboarding、billing、support、analytics |

---

## 5. MVP01 Flow Target

```text
Request → Lead → Customer → Quote → Booking → Payment → Reminder / Report
```

MVP01 must be flow-aware but not overbuilt into Grow / Pro / Platform scope.

---

## 6. Alignment Decisions for ISSUE-007

```text
1. ISSUE-007 is Architecture Alignment, not RLS implementation.
2. MVP01 is Starter Complete + Optimaks OS Basic.
3. Starter / Grow / Pro are plan depth levels, not separate apps.
4. Optimaks OS Basic is included only to support onboarding, client list, plan status, workspace link, demo and release pack.
5. Grow / Pro / Platform / AI capabilities are reserved to MVP02-MVP05.
6. Module Library Foundation begins in ISSUE-008.
7. Industry Template Foundation begins in ISSUE-009.
8. End Customer Interface begins in ISSUE-010.
9. Client Workspace Basic begins in ISSUE-011.
10. ISSUE-007 must not create app code, migrations, RLS, module tables, template tables, or UI.
```
