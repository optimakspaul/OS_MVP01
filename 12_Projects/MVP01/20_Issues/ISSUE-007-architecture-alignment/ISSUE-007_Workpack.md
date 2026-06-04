# ISSUE-007 Workpack

**Issue:** ISSUE-007  
**Title:** Architecture Alignment  
**Project:** MVP01  
**MVP Definition:** Starter Complete + Optimaks OS Basic  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Source Alignment Package:** Optimaks MVP01–MVP05 Phase Issue Package v0.3 with Flow  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Architecture / Baseline Alignment Only  
**Depends On:** CHECKPOINT-001 Founder Acceptance  
**Previous Gate Status:** GO WITH WARNINGS, Founder Accepted  
**Branch:** feature/issue-007-architecture-alignment  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/`

---

## 1. Purpose

ISSUE-007 aligns MVP01 to the current approved architecture from the v0.3 Flow package.

This issue is not a coding issue and not a database implementation issue. It exists because MVP01's earlier baseline drifted toward a DB/RLS-centered issue chain, while the current approved architecture defines MVP01 as:

```text
Starter Complete + Optimaks OS Basic
```

ISSUE-007 must lock the naming, phase map, issue chain, scope, flow, and reserved boundaries before ISSUE-008 begins.

---

## 2. Canonical Alignment Target

Codex must align MVP01 baseline to this canonical definition:

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

## 3. Correct Phase Map

MVP01 must use Phase 0 through Phase 7:

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

## 4. Correct Issue Chain

MVP01 must use this issue chain:

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

## 5. Required Flow Alignment

MVP01 must use the three-layer flow model:

```text
End Customer Interface
  ↓
Client Workspace
  ↓
Optimaks OS / Platform
```

For MVP01, flow must stay focused on:

```text
Request → Lead → Customer → Quote → Booking → Payment → Reminder / Report
```

---

## 6. Dependency Gate

Codex must stop with `FAIL - Dependency gate not satisfied` unless all are true:

1. CHECKPOINT-001 exists.
2. CHECKPOINT-001 decision is `GO` or `GO WITH WARNINGS`.
3. CHECKPOINT-001 Founder Acceptance is recorded as `Accepted`.
4. ISSUE-007 workpack exists and is approved.
5. ISSUE-007 runs on its own branch:
   `feature/issue-007-architecture-alignment`
6. Normalized issue path is used:
   `12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/`

---

## 7. Required Reference Files

Read before making changes:

```text
AGENTS.md
README.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Go_No_Go_Decision.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Findings_Report.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Source_Alignment_Reference.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Workpack.md
```

If any expected baseline file does not exist, Codex must report it and create/adjust only within the allowed file boundary.

---

## 8. Required Outputs

Create or complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Architecture_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Phase_Issue_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Flow_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Reserved_Boundary_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_DONE_Report.md
```

Update baseline documents where present and necessary:

```text
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

---

## 9. Allowed Files

Codex may create or update only:

```text
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/README_ISSUE-007.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Source_Alignment_Reference.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Codex_Prompt.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Architecture_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Phase_Issue_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Flow_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Reserved_Boundary_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Open_Questions.md
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

---

## 10. Forbidden Scope

Codex must not:

```text
Modify app source files
Modify package files
Modify migrations
Create new migrations
Create RLS
Create RLS policies
Create Supabase client source code
Create login UI
Create module tables
Create template tables
Create business workflow tables
Create payment gateway integration
Create WhatsApp API integration
Modify .env.example
Create .env.local
Modify constitution files
Modify templates
Start ISSUE-008
```

---

## 11. Success Criteria

ISSUE-007 is PASS only if:

1. MVP01 is aligned as `Starter Complete + Optimaks OS Basic`.
2. Phase map is aligned to Phase 0–7.
3. Issue chain is aligned to ISSUE-000 through ISSUE-018 as defined in the v0.3 Flow package.
4. ISSUE-007 is correctly defined as `Architecture Alignment`, not RLS implementation.
5. MVP01 reserved boundaries are clearly documented.
6. Flow alignment uses `End Customer Interface → Client Workspace → Optimaks OS / Platform`.
7. Baseline docs and issue chain register are updated only within allowed scope.
8. No code, migrations, RLS, UI, module tables, template tables, or ISSUE-008 work are created.
9. Validation confirms no forbidden files were changed.
10. Handoff to ISSUE-008 is clear.

ISSUE-007 is PASS WITH WARNINGS if alignment is complete but some historical stale text or legacy path residue remains as documented non-blocking governance cleanup.

ISSUE-007 is FAIL if architecture alignment is incomplete, issue chain remains old, RLS is started, code is modified, or ISSUE-008 work is started.

---

## 12. Handoff to ISSUE-008

ISSUE-008 may start only if ISSUE-007 provides:

```text
ISSUE-007_DONE_Report.md
ISSUE-007_Architecture_Alignment_Notes.md
ISSUE-007_Phase_Issue_Alignment_Notes.md
ISSUE-007_Flow_Alignment_Notes.md
ISSUE-007_Reserved_Boundary_Notes.md
Updated MVP01 baseline docs
Updated MVP01 issue chain register
```

ISSUE-008 must then implement `Module Library Foundation`, not business workflow or UI expansion.
