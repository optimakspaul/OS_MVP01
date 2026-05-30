# Optimaks Development Constitution v1.3

生效日期：2026-05-13

> Optimaks Pte Ltd 開發憲法完整主文件。

## 0. 文件控制 Document Control

文件名稱：Optimaks Development Constitution / Optimaks 開發憲法
版本：v1.3
生效日期：2026-05-13
文件擁有者：Optimaks Pte Ltd
適用範圍：Optimaks OS、Aircon OS、ACRA Radar、公司內部工具、客戶專案、MVP/Prototype/Production 系統
文件目的：建立一套可重複、可追蹤、可審查、可交付、可擴充的 AI 時代開發標準流程。

本文件不是單純的程式開發筆記，而是 Optimaks 的開發制度主文件。所有新功能、Bug 修正、客戶客製需求、文件更新、部署行為、AI 工具使用、GitHub Issue 管理、Change Request 流程，皆應以本憲法作為最高操作原則。

本版本 v1.3 整合今天討論的重點：手機輔助開發流程、工具角色劃分、Codex + Antigravity 的 AI 開發架構、Claude/Gemini 屬於 Antigravity 內部模型選項、GitHub Issue/Change Request 流程強化、Staging/Preview 先行測試制度。

## 1. 憲法核心原則 Core Principles

Optimaks 的開發模式必須符合以下原則：

1. 先制度化，再規模化。
2. 先文件化，再開發。
3. 先 Change Request，再動程式碼。
4. 先 GitHub Issue，再交給 AI 開發。
5. 先 Staging / Preview 測試，再正式部署。
6. 先確認影響範圍，再修改核心系統。
7. 核心系統穩定優先，產業模板彈性調整。
8. AI 可以加速，但不得取代審查、測試與版本控制。
9. 手機可輔助需求收集與測試，但不作為主要程式碼施工環境。
10. 每一次變更，都必須留下可追蹤紀錄。

本憲法的精神不是讓開發變慢，而是避免 AI 快速開發造成系統失控。Optimaks 是一人公司起步，但制度上必須以可擴充團隊、可交付客戶、可申請補助、可接政府/企業案的標準建立。

## 2. Optimaks 開發定位與適用專案

Optimaks 的開發制度適用於以下類型：

1. Optimaks OS：公司內部 CRM、Automation、Proposal、Contract、Maintenance Report、Client Portal 等核心系統。
2. Aircon OS：第一個產業化垂直系統，包含 Landing Page、Lead CRM、Quote Builder、WhatsApp Toolkit、Invoice Tracker、Booking Schedule、Job Card、Customer Profile、Maintenance Reminder。
3. ACRA Radar：用於尋找與篩選新加坡潛在 SME 客戶的內部工具。
4. 客戶專案：為 SME 製作的 Landing Page、CRM、Automation、Dashboard、Booking、Invoice、Report 等工具。
5. MVP / Prototype：在正式整合前進行快速驗證的小工具或模組。
6. Internal Tools：報告產生器、客戶健診報告、一鍵產生 Proposal、Lead 管理、自動化流程等。

所有專案都應遵守同一套憲法，但可依專案大小調整文件深度。小型 MVP 可以使用精簡版流程，但不可跳過 Issue、版本紀錄與測試。

## 3. 主開發流程 Standard Development Workflow

標準開發流程如下：

需求 / 想法 / 客戶痛點
        ↓
整理成 Change Request
        ↓
建立 GitHub Issue
        ↓
影響範圍分析
        ↓
確認是否需要更新文件
        ↓
建立 Branch
        ↓
Codex / Antigravity 協助開發
        ↓
部署到 Staging / Vercel Preview
        ↓
手機測試 + 桌機測試
        ↓
QA Checklist
        ↓
通過後 Merge
        ↓
Deploy Production
        ↓
更新 Handover / Version Log / Documentation

任何功能不得從「想法」直接跳到「正式版修改」。中間至少要經過 Change Request、Issue、開發、Preview、QA、Merge、Production 的基本流程。

## 4. 10-Step Delivery Process 十步交付流程

Optimaks 對內與對客戶的專案交付，採用以下十步流程：

Step 1 - Discovery：了解客戶產業、痛點、流程、目前工具、預算、決策者與成功標準。
Step 2 - Scope Definition：定義專案範圍、功能邊界、不包含項目、交付成果與付款里程碑。
Step 3 - Solution Blueprint：設計模組、資料流程、使用者角色、UI 流程、整合方式。
Step 4 - Proposal / Quotation：產生正式報價與 T&C，說明 setup fee、monthly fee、維護範圍、交付物。
Step 5 - Contract / E-Sign：透過 Zoho Sign / Signwell 等工具完成簽署與專案啟動。
Step 6 - Implementation：以 GitHub Issue + Branch + AI 工具進行實作。
Step 7 - Staging / Preview：先部署測試版，不直接覆蓋正式版。
Step 8 - QA & Acceptance：依 QA Checklist 完成手機、桌機、資料、權限、流程測試。
Step 9 - Production Deployment：驗收通過後再 Merge / Deploy 正式版。
Step 10 - Handover & Maintenance：交付操作說明、帳號權限、維護報告、後續月費服務。

此流程也適用於 Optimaks OS 自身開發，只是客戶角色可替換為內部使用者或未來客戶。

## 5. Change Request Management 變更需求管理

Change Request 是所有新增功能、修改功能、Bug 修正、UI 調整、資料庫變更、流程變更、文件更新的正式入口。

Change Request 必須回答：

1. 要改什麼？
2. 為什麼要改？
3. 誰會使用？
4. 會影響哪些模組？
5. 是否影響資料庫？
6. 是否影響權限 / Auth / RLS？
7. 是否影響 UI / UX？
8. 是否影響既有客戶資料？
9. 怎樣算完成？
10. 是否需要更新文件？

標準 Change Request 格式：

CR Title:
Background / Purpose:
User Story:
Functional Requirements:
Impact Scope:
Database Impact:
UI/UX Impact:
Security / Permission Impact:
Testing Requirements:
Acceptance Criteria:
Priority:
Codex Development Prompt:

任何「中途想到的小功能」也應先寫成 CR，不應直接叫 AI 修改程式碼。

## 6. Change Request Workflow 流程圖

新想法 / 新功能 / Bug / 客戶要求
        ↓
建立 Change Request
        ↓
填寫原因、目的、影響範圍
        ↓
判斷影響：
- UI
- Database
- API
- Auth / Permission
- Documentation
- Testing
        ↓
建立 GitHub Issue
        ↓
標記 Priority / Module / Status
        ↓
進入開發排程
        ↓
開 Branch
        ↓
AI / Codex 開發
        ↓
測試版部署
        ↓
驗收
        ↓
合併正式版
        ↓
更新 Version Log / Documentation

Control Rule：
如果影響 Database、Auth、Permission、Billing、Customer Data、Production Deployment，必須視為高風險變更，不得只用手機完成，也不得跳過桌機審查。

## 7. GitHub Issue Workflow

GitHub Issue 是 Optimaks 的正式任務來源。所有開發任務都應盡量從 Issue 開始，而不是從零散聊天、口頭想法或 AI 對話直接進入程式碼修改。

Issue 標題建議格式：

[CR] Add Customer Health Report Generator
[BUG] Mobile dashboard layout broken
[DOC] Update Change Request Workflow
[UI] Improve Quote Builder mobile layout
[SEC] Review Supabase RLS for customer table
[OPS] Add staging deployment checklist

建議 Labels：

type:change-request
type:bug
type:doc
type:ui
type:security
priority:high
priority:medium
priority:low
module:crm
module:quotation
module:invoice
module:booking
module:report
module:auth
module:dashboard
module:documentation
status:pending-review
status:ready-for-codex
status:in-progress
status:qa
status:done

Issue 最少應包含：
1. 背景與目的
2. 功能需求
3. 影響範圍
4. 驗收標準
5. 優先級
6. 給 Codex / AI 的開發 Prompt
7. 測試結果與截圖連結（若有）

Issue 完成後，必須標記結果：Done、Won't Do、Deferred、Needs More Info、Duplicate。

## 8. Branch / Commit / Push / Merge Policy

Branch 的目的不是為了讓 GitHub 才能比對，而是為了隔離風險。GitHub 即使不開 Branch 也能看到 diff，但不開 Branch 代表直接在主線上修改，風險較高。

建議 Branch 命名：

feature/customer-health-report
fix/mobile-dashboard-layout
doc/update-mobile-workflow
refactor/quotation-calculation
security/review-customer-rls

Commit 與 Push 差異：

Commit：把本機或開發環境中的變更存成一個版本紀錄。
Push：把 commit 上傳到 GitHub 遠端 repository。
Merge：把 branch 的變更合併進 main 或 production branch。

基本流程：

GitHub Issue
     ↓
Create Branch
     ↓
Implement Changes
     ↓
Commit
     ↓
Push
     ↓
Pull Request / Review
     ↓
Preview Deploy
     ↓
QA Pass
     ↓
Merge to main
     ↓
Production Deploy

不得直接在 main 上進行大型功能開發。小型文案修改可視情況直接修改，但仍應有 commit message 與 Issue/版本紀錄。

## 9. AI Development Tooling Policy

Optimaks 目前正式使用的主要 AI 開發工具為：

1. ChatGPT
2. Codex
3. Antigravity

其中 Codex 與 Antigravity 是主要開發工具；Claude、Gemini 是 Antigravity 內部可切換的模型選項，不列為獨立開發工具。

正確架構：

ChatGPT
- Change Request drafting
- GitHub Issue preparation
- Architecture discussion
- Documentation
- Prompt writing

Codex
- Main implementation agent
- Repository-level changes
- Bug fixing
- Refactoring
- PR / code change preparation
- Following GitHub Issue requirements

Antigravity
- AI IDE
- UI iteration
- Frontend review
- Code exploration
- Interactive debugging support
- Comparing implementation approaches

Models inside Antigravity
- Claude model：需求理解、架構審查、重構分析、長上下文審查
- Gemini model：UI 發想、多模態理解、快速方案比較、Google ecosystem 相關輔助

重要規則：
Claude / Gemini 在本憲法中不是獨立開發工具，而是 Antigravity 內部模型選項。

## 10. AI Tooling Workflow 流程圖

GitHub Issue / Change Request
        ↓
Codex
主要工程實作 / Bug Fix / Refactor
        ↓
Antigravity
AI IDE 審查 / UI 調整 / 測試輔助
        ↓
Antigravity 內部模型
   ├── Claude：需求理解 / 架構審查 / 重構分析
   └── Gemini：UI 發想 / 多模態 / 快速方案比較
        ↓
Vercel Preview / Staging
        ↓
手機 + 桌機測試
        ↓
Merge / Deploy

AI 使用原則：

1. AI 可以提出方案，但必須依 GitHub Issue 與 Change Request 執行。
2. AI 可以修改程式碼，但必須經過測試與 Preview。
3. AI 不可直接決定 Production Deploy。
4. AI 產出的變更必須有 commit、diff、測試步驟與回滾方案。
5. 對 Database/Auth/Permission 相關變更，必須特別審查。

## 11. Mobile-Assisted Development Workflow 手機輔助開發流程

本流程以工具角色劃分，而非以工作時間劃分。手機端主要作為需求收集、Change Request 草稿、GitHub Issue 建立、Preview 測試與 Bug 回報工具；桌機端則作為正式開發、整合、審查、合併與正式部署工具。

Mobile 角色：
1. 記錄新功能想法
2. 記錄 Bug 與 UI 問題
3. 記錄客戶需求與測試回饋
4. 使用 ChatGPT 整理 Change Request
5. 建立或補充 GitHub Issue
6. 測試 Vercel Preview / Staging Link
7. 截圖並回報手機版問題
8. 補充驗收結果

Desktop 角色：
1. 審查 GitHub Issue
2. 補充影響範圍分析
3. 建立 Branch
4. 執行主要程式開發
5. 處理資料庫 schema / migration
6. 處理 Supabase RLS / authentication / permission
7. 解決 merge conflict
8. 完成 QA Checklist
9. Merge to main
10. Production deployment

Control Principle：
Mobile is for capture, clarification, issue management, and preview testing.
Desktop is for implementation, integration, merge, and production release.
AI tools are for acceleration, but all changes must still pass GitHub Issue tracking, staging testing, and QA review.

## 12. Mobile-Assisted Workflow 流程圖

Mobile
Idea / Bug / Client Feedback / Testing Feedback
        ↓
Mobile + ChatGPT
Draft Idea / Reason / Done When
        ↓
ChatGPT
Convert to Change Request
        ↓
GitHub
Create or update GitHub Issue
        ↓
Desktop
Review Issue + Impact Scope
        ↓
Desktop
Create Branch
        ↓
Codex / Antigravity
Implementation / Debug / UI Iteration
        ↓
Vercel Preview / Staging
Deploy test version
        ↓
Mobile + Desktop
Cross-device Testing
        ↓
GitHub Issue
Record Bugs / QA Notes / Acceptance Result
        ↓
Desktop
Fix / QA / Merge
        ↓
Production
Deploy official version

手機快速記錄格式：

Idea:
我想新增什麼？

Reason:
為什麼要做？

Done When:
怎樣算完成？

此格式可在外勤、通勤、客戶拜訪、測試 Preview 時快速使用。

## 13. Documentation Architecture 文件架構

Optimaks 的文件架構應分為公司層、專案層、模組層、客戶交付層。

A. Company-Level Documents 公司層文件
1. Development Constitution
2. Company Positioning
3. 10-Step Delivery Process
4. Standard Change Request Policy
5. GitHub Workflow Policy
6. AI Tooling Policy
7. Legal / PDPA / T&C Policy
8. Security and Deployment Policy

B. Project-Level Documents 專案層文件
1. README.md
2. Product Brief
3. Scope of Work
4. Solution Blueprint
5. Data Model
6. API / Integration Notes
7. QA Checklist
8. Deployment Checklist
9. Handover Guide
10. Version Log / Changelog

C. Module-Level Documents 模組層文件
1. Module Purpose
2. User Flow
3. Database Tables
4. API Endpoints
5. UI Components
6. Permission Rules
7. Test Cases

D. Client Delivery Documents 客戶交付文件
1. Proposal
2. Quotation
3. Scope of Work
4. Contract / Agreement
5. T&C
6. PDPA Notice
7. User Guide
8. Handover Checklist
9. Maintenance Report

大專案只需要一份主憲法放在 root，不需要每個 MVP 複製一份憲法。但每個 MVP 資料夾應有自己的 README、Scope、Issue 連結與 Version Log。

## 14. MVP / Module / Integration Policy

Optimaks 的開發策略是「一套核心系統 + 模組開關 + 產業模板」。

Core System：
- Authentication
- Customer Profile
- Lead CRM
- Quotation
- Invoice
- Booking
- Reporting
- Settings
- Permission
- Deployment/Monitoring

Industry Template：
- Aircon OS
- Salon template
- Accounting/Receipt template
- Maintenance service template
- Future SME industry templates

MVP 開發原則：
1. MVP 可以獨立做，但必須有清楚邊界。
2. MVP 不應直接污染 Core System。
3. MVP 驗證成功後，再以 Change Request 進入正式整合。
4. 整合前必須做 impact analysis。
5. 模組可以有不同 workflow，但核心資料結構與權限原則應保持穩定。

整合流程：

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

## 15. Staging / Preview / Production Policy

任何正式部署前，必須先通過 Staging 或 Vercel Preview。

原則：
1. 不直接把未測試功能推上 Production。
2. Preview 用於功能驗證、手機測試、客戶 Demo。
3. Staging 用於接近正式環境的整合測試。
4. Production 只接受已通過 QA 的版本。

流程：

Branch
  ↓
Development
  ↓
Vercel Preview / Staging
  ↓
Mobile Test
  ↓
Desktop Test
  ↓
QA Checklist
  ↓
Issue Acceptance
  ↓
Merge to main
  ↓
Production Deploy
  ↓
Post-Deploy Check

Production Deploy 後需要檢查：
1. 首頁/核心頁面可載入
2. 登入/權限正常
3. 表單正常
4. 資料沒有異常
5. CTA / WhatsApp / Email 正常
6. 無明顯 UI 破版
7. 無重大 console/runtime error

## 16. QA Checklist 品質檢查

每個功能上線前至少檢查以下項目：

Functional QA：
- 功能是否符合 Issue acceptance criteria
- 正常流程是否可完成
- 錯誤流程是否有提示
- 表單驗證是否正確
- 舊資料是否不受影響

UI/UX QA：
- 手機版是否可用
- 桌機版是否可用
- 按鈕是否容易點擊
- 字體是否可讀
- 表格是否破版
- loading / empty / error state 是否清楚

Data QA：
- 資料是否正確寫入
- 資料是否可讀取
- 資料是否有重複
- migration 是否安全
- 是否需要 backup

Security QA：
- 權限是否正確
- Supabase RLS 是否正確
- 不同使用者是否看到正確資料
- API 是否暴露敏感資料
- secret / API key 是否未外洩

Deployment QA：
- Preview 是否正常
- Production 是否正常
- 環境變數是否正確
- build 是否成功
- rollback 方式是否清楚

Documentation QA：
- README 是否需要更新
- Handover 是否需要更新
- User Guide 是否需要更新
- Changelog 是否需要更新

## 17. Security / PDPA / Legal Considerations

Optimaks 的系統與客戶專案必須注意安全、資料保護與法律文件。

基本原則：
1. 不在前端暴露 secret key。
2. 不把客戶敏感資料放在公開 repository。
3. 不把 production database credentials 交給不必要的人或工具。
4. 使用 Supabase RLS / auth policy 保護客戶資料。
5. 客戶網站應具備基本 T&C、Privacy Policy、PDPA Notice。
6. 合約與 quotation 應說明交付範圍、月費範圍、資料所有權、取消服務後的資料交接方式。

對客戶月費服務應明確列出：
- Hosting / deployment maintenance
- Basic bug fixes
- Basic security updates
- Basic backup setup
- Basic uptime monitoring
- 1 small content update per month
- Email / WhatsApp basic support
- Data export assistance

取消月費時，應可交付：
1. 靜態網站檔案或 repository access（依合約）
2. 客戶資料匯出
3. Domain/DNS/hosting 說明
4. 最終備份
5. Handover note

## 18. Client Proposal / Contract / E-Sign Flow

Optimaks 對客戶的合作流程建議：

Client chooses package / confirms interest
        ↓
Collect client basic information
        ↓
Generate Proposal / Quotation / Scope of Work
        ↓
Generate Contract with T&C / PDPA clauses
        ↓
Send for e-sign via Zoho Sign / Signwell
        ↓
Milestone payment / deposit
        ↓
Project kickoff
        ↓
GitHub Issue / Project Board setup
        ↓
Development + Preview
        ↓
Acceptance + Production
        ↓
Maintenance monthly service

工具策略：
- Zoho Sign：可作為 Optimaks 自己內部正式簽署流程。
- Signwell：可作為較簡單的客戶簽署方案。
- CRM：應儲存 proposal、contract、status、payment milestone、handover records。

任何簽署文件都應對應專案版本與 Scope，避免客戶後續擴大要求但沒有 Change Request。

## 19. Customer Health Report / Maintenance Report Policy

Optimaks 的月費服務應盡量提供可量化的維護價值。建議在 Optimaks OS 中建立一鍵產生客戶系統健診報告功能。

報告內容可包含：
1. Uptime / availability summary
2. Backup status
3. Security update status
4. Bug fixes completed
5. Content update completed
6. Support tickets handled
7. Form submissions / leads summary
8. Website performance notes
9. Recommendations for next month
10. Risk / attention items

此功能可提升月費服務價值，讓客戶清楚看到 Optimaks 每月做了什麼。

此功能應透過 Change Request 開發，影響範圍包括：
- CRM Customer Profile
- Maintenance Report Module
- Database
- Report Export
- WhatsApp / Email format
- Permission Control

## 20. Aircon OS Module Policy

Aircon OS 是 Optimaks 第一個垂直產業化系統，初期可用較低 setup + monthly pricing 取得市場測試與案例。

Aircon OS 核心模組：
1. Landing Page Builder
2. Lead Capture CRM
3. Quote Builder
4. WhatsApp Toolkit
5. Invoice Tracker
6. Booking Schedule
7. Job Card
8. Customer Profile
9. Maintenance Reminder
10. Monthly Health Report

定價可依方案設計：
- Starter：基本網站 + lead capture + WhatsApp CTA + basic CRM
- Problem：加入 quotation、invoice、booking、follow-up
- Growth：加入 automation、maintenance reminder、reporting、client portal

開發原則：
1. Starter 不必等所有功能完成才 pitch。
2. Proposal 要寫清楚哪些是已包含、哪些是 roadmap/add-on。
3. Demo 可以先呈現價值，不一定所有後台都已完整。
4. 不要把 demo code 與完整 automation code 全部交給客戶。
5. 客戶需求進階功能時，應轉成 Change Request / Add-on Quote。

## 21. ACRA Radar / Prospecting Tool Policy

ACRA Radar 屬於 Optimaks 內部 prospecting tool，用於尋找與整理潛在客戶。此類工具若重新開始開發，仍應遵守本憲法。

開發流程：
1. 定義資料來源
2. 定義篩選條件
3. 定義資料欄位
4. 定義可手動補充的聯絡資訊
5. 定義匯出格式
6. 定義 CRM 整合方式
7. 建立 GitHub Issue
8. Codex/Antigravity 開發
9. Preview 測試
10. 文件更新

免費版資料來源與聯絡資訊蒐集應注意：
- 不違反網站條款
- 不大量侵入式爬取
- 不收集不必要個資
- 對於電話/email 資料保留來源註記
- 以手動驗證或低頻查詢為主

## 22. AI Prompt Standard for Codex

交給 Codex 的 prompt 應盡量結構化，不要只說「幫我做這個」。

標準格式：

Context:
這是什麼專案？目前模組是什麼？

Issue / Change Request:
貼上 GitHub Issue 或 CR 內容。

Task:
請明確說明要做什麼。

Constraints:
不要破壞哪些既有功能？不要改哪些檔案？是否需要先分析？

Expected Output:
要產出哪些變更？程式碼？測試？說明？

Testing:
請提供測試步驟。

Example Prompt:

Please implement the Customer Health Report Generator for Optimaks OS based on this Change Request. First inspect the current project structure, identify affected modules, propose a small implementation plan, then modify only the necessary files. Do not break existing CRM functions. Add comments where needed and provide testing steps after implementation.

重要規則：
大型變更要先叫 Codex 分析，不要直接叫它修改。

## 23. Documentation Update Workflow 文件更新流程

當功能、流程、架構、工具、定價、交付方式、法律文件、部署方式發生變更時，文件必須同步更新。

流程：

Change Request or Feature Change
        ↓
Check affected documents
        ↓
Update relevant markdown/doc files
        ↓
Commit documentation changes
        ↓
Update CHANGELOG
        ↓
If major, bump version number
        ↓
Tag / release if needed

文件更新原則：
1. 不需要每次都整份文件重寫。
2. 小改動可更新相關章節。
3. 大改動可產生新版本完整包。
4. 上 GitHub 前可用 branch 進行比對。
5. 不建議直接覆蓋而沒有 diff。

文件版本建議：
- v1.0：初始憲法
- v1.1：補充文件與專案結構
- v1.2：補充 Change Request、Staging、測試版先行
- v1.3：補充 Mobile-Assisted Workflow、AI 工具架構修正、Codex + Antigravity 分工

## 24. GitHub Repository Structure 建議結構

建議 root repository 結構：

optimaks-os/
├── README.md
├── docs/
│   ├── constitution/
│   │   ├── OPTIMAKS_DEVELOPMENT_CONSTITUTION_v1.3.md
│   │   └── CHANGELOG.md
│   ├── process/
│   │   ├── 10_STEP_DELIVERY_PROCESS.md
│   │   ├── CHANGE_REQUEST_POLICY.md
│   │   └── DEPLOYMENT_POLICY.md
│   ├── templates/
│   │   ├── GITHUB_ISSUE_TEMPLATE_change_request.md
│   │   ├── MOBILE_CAPTURE_TEMPLATE.md
│   │   ├── QA_CHECKLIST.md
│   │   └── HANDOVER_GUIDE_TEMPLATE.md
│   └── legal/
│       ├── TERMS_TEMPLATE.md
│       ├── PDPA_NOTICE_TEMPLATE.md
│       └── CLIENT_SERVICE_AGREEMENT_TEMPLATE.md
├── apps/
│   ├── optimaks-os/
│   ├── aircon-os/
│   └── acra-radar/
├── packages/
│   ├── ui/
│   ├── shared/
│   └── config/
└── .github/
    └── ISSUE_TEMPLATE/

此結構可隨專案成長調整，不需一開始就全部建立，但 docs/constitution 與 .github/ISSUE_TEMPLATE 建議優先建立。

## 25. Version 1.3 Change Summary 本版調整摘要

v1.3 相較 v1.2 的主要調整：

1. 新增完整 Mobile-Assisted Development Workflow。
2. 將手機流程從「白天/晚上」改為「工具角色」劃分。
3. 明確定義 Mobile、Desktop、ChatGPT、Codex、Antigravity 的責任。
4. 修正 AI 工具架構：正式主工具為 Codex + Antigravity。
5. 明確寫入 Claude / Gemini 是 Antigravity 內部模型選項，不是獨立工具。
6. 補強 GitHub Issue 工作流與 label 建議。
7. 補強 Branch / Commit / Push / Merge 的使用原則。
8. 補強 Change Request 進入開發前的影響範圍分析。
9. 強化 Staging / Vercel Preview 先行測試制度。
10. 加入手機快速記錄模板：Idea / Reason / Done When。
11. 加入 AI Tooling Workflow 流程圖。
12. 加入 Mobile-Assisted Workflow 流程圖。
13. 保留 v1.2 的核心精神：先測試版部署，確認可行後才取代正式版。
14. 將文件調整為「完整主憲法」而非單純摘要或附錄。

本版本可作為 GitHub 上的完整主文件使用。
