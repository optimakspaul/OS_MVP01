# TPL-DEV-036 Issue Pack Master Prompt v1.7.9

## Purpose

This template is used to ask ChatGPT to generate a ready-to-paste Issue document pack for Optimaks MVP01 using v1.7.9 AI Harness.

The user should only change the first line:

```text
Issue: ISSUE-XXX — [Issue Name]
```

ChatGPT must automatically infer filenames, paths, tool routing, platform routing, `/goal`, Codex prompt, Antigravity prompt, DONE report, and commit message.

---

## Master Prompt

Issue: ISSUE-XXX — [Issue Name]

請使用 v1.7.9 AI Harness + Template-driven Issue Pack + Codex / Antigravity / Platform Routing 格式，幫我產出 ready-to-paste Issue 文件包。

不要手把手長篇教學。  
不要叫我填很多欄位。  
不要讓我手動修改每個檔案名稱。  
請只根據最上面的 Issue ID / Issue 名稱，自動產生所有檔案、路徑、prompt、commit message。

---

## Required Output Files

請直接生成以下 7 個檔案：

1. `ISSUE-XXX_Workpack.md`
2. `ISSUE-XXX_Codex_Prompt.md`
3. `ISSUE-XXX_Antigravity_Prompt.md`
4. `ISSUE-XXX_DONE_Report.md`
5. `README_ISSUE-XXX.md`
6. `WHERE_TO_PASTE.md`
7. `COMMIT_MESSAGE.md`

---

## Required Template References

請在 `ISSUE-XXX_Workpack.md` 裡加入：

```text
Template References:
- TPL-DEV-036_Issue_Pack_Master_Prompt_v1.7.9.md
- TPL-DEV-034_Goal_Execution_Brief_Harness_Template.md
- TPL-DEV-029_Issue_Workpack_Template.md
- TPL-DEV-032_Issue_DONE_Report_Template.md
- TPL-DEV-037_Antigravity_Prompt_Template_v1.7.9.md
- TPL-DEV-038_Tool_Platform_Routing_Template.md
```

如果某個 template 目前尚未正式存在，仍然要在 Workpack 裡標記為：

```text
Planned / Recommended Template Reference
```

---

## Required Workpack Sections

`ISSUE-XXX_Workpack.md` 必須包含：

1. Issue Identity
2. Purpose
3. Required Preconditions
4. Template References
5. Allowed Scope
6. Forbidden Scope
7. Required Reference Documents
8. AI Harness Settings
9. Tool / Platform Routing Decision
10. Codex / Antigravity Routing Decision
11. Supabase / Vercel / n8n Routing Decision
12. Related Test Cases
13. Harness Review References
14. File Boundary
15. Validation Plan
16. Required Output
17. Definition of Done

---

## AI Harness Rules

請遵守 v1.7.9 AI Harness 四大原則：

1. Think Before Coding
2. Simplicity First
3. Surgical Changes
4. Goal-Driven Execution

請確保所有 prompt 明確限制：

- 不准做下一個 Issue
- 不准做 future MVP features
- 不准擴張 scope
- 不准重構 unrelated files
- 不准改 `.env` secrets
- 不准改 production config
- 不准改 DB / RLS / Auth，除非本 Issue 明確允許
- 不准引入 n8n，除非本 Issue 明確要求 automation / webhook / scheduled workflow
- 不准使用 Supabase 做超出本 Issue 的 Auth / DB / RLS 工作
- 不准修改 Vercel production setting，除非本 Issue 明確要求

---

## Required `/goal` Block

請在 `ISSUE-XXX_Codex_Prompt.md` 裡面直接內建 `/goal` 區塊。

`/goal` 必須包含：

```text
/goal
Complete ISSUE-XXX only.

Context:
- Product:
- MVP:
- Phase:
- Issue:
- Purpose:

Execution Mode:
-

Selected Agent Skill(s):
-

Reference Documents:
-

Priority Order:
1. Constitution
2. Locked Architecture
3. Active Standards Index
4. Issue Workpack
5. /goal Execution Brief
6. Selected Agent Skill(s)
7. File Boundary
8. Execution Mode

Agent Behavior Rules:
1. Think Before Coding
2. Simplicity First
3. Surgical Changes
4. Goal-Driven Execution

Tool / Platform Routing Decision:
- Codex:
- Antigravity:
- Supabase:
- Vercel:
- n8n:

Success Criteria:
1.
2.
3.

Allowed Scope:
-

Forbidden Scope:
-

Allowed Files / Directories:
-

Forbidden Files / Directories:
-

Required Validation:
-

Required Output:
-

Stop Conditions:
- Stop if scope is unclear.
- Stop if file boundary is unclear.
- Stop if DB / RLS / Auth impact is detected but not approved.
- Stop if production config or secrets would be touched.
- Stop if future MVP features would be unlocked.
- Stop if this issue requires work from the next issue.
```

---

## Tool / Platform Routing Decision

請自動判斷本 Issue 是否需要以下工具 / 平台：

1. Codex
2. Antigravity
3. Supabase
4. Vercel
5. n8n

請在 Workpack 裡加入以下格式：

```text
## Tool / Platform Routing Decision

- Codex: Required / Optional / Not Required
  Reason:
  Scope:

- Antigravity: Required / Optional / Not Required
  Reason:
  Scope:

- Supabase: Required / Optional / Reserved / Not Required
  Reason:
  Scope:
  Forbidden:

- Vercel: Required / Optional / Reserved / Not Required
  Reason:
  Scope:
  Forbidden:

- n8n: Required / Optional / Reserved / Not Required
  Reason:
  Scope:
  Forbidden:
```

---

## Routing Rules

### Codex

Codex is usually Required for:

- code implementation
- docs generation
- repo changes
- issue execution
- validation summary
- DONE report update

Codex is Not Required only for pure discussion, strategy, or non-repo planning.

---

### Antigravity

Antigravity is Required or Optional when the Issue touches:

- UI
- page
- layout
- component
- dashboard
- form
- table
- modal
- responsive behavior
- visual polish
- client portal
- admin console
- landing page
- demo page

Antigravity is usually Not Required for:

- pure docs
- repo verification
- Supabase setup
- DB migration
- RLS policy
- Auth backend
- CI / script
- README / changelog / manifest
- governance / constitution

If Antigravity is needed, generate:

```text
ISSUE-XXX_Antigravity_Prompt.md
```

If Antigravity is not needed, still generate:

```text
ISSUE-XXX_Antigravity_Prompt.md
```

but content must say:

```text
Antigravity not required for this issue.

Reason:
-
```

---

### Supabase

Supabase is Required or Optional when the Issue touches:

- Supabase client setup
- Auth
- login / session
- profiles
- tenants / workspace
- DB schema
- migrations
- RLS policies
- storage
- edge functions
- query helper
- tenant isolation
- real data queries

Supabase is Not Required for:

- pure UI layout
- README / docs
- landing page
- static dashboard mockup
- governance
- PR checklist
- issue planning

If Supabase is Reserved, write:

```text
Supabase: Reserved
Reason:
Supabase may be required in a future issue, but this issue must not implement DB / RLS / Auth / tenant logic.
```

---

### Vercel

Vercel is Required or Optional when the Issue touches:

- preview deployment
- build failure
- route / page deployment check
- env variable deployment setting
- production / staging / preview config
- Next.js deployment readiness

Vercel is Not Required for:

- pure Supabase schema
- local-only documents
- test case library
- governance docs
- DB-only issue

If Vercel is Reserved, write:

```text
Vercel: Reserved
Reason:
Preview or deployment may be checked later, but this issue does not modify deployment settings.
```

---

### n8n

n8n is Required only when the Issue explicitly touches:

- automation
- webhook workflow
- scheduled workflow
- external API sync
- notification pipeline
- CRM automation
- maintenance reminder automation
- WhatsApp / email automation bridge

n8n is usually Not Required or Reserved for:

- Supabase client setup
- DB schema
- RLS
- Next.js page
- basic dashboard
- lead form
- quote form
- governance docs

If n8n is Reserved, write:

```text
n8n: Reserved
Reason:
Automation is reserved for a future issue. Do not implement n8n workflows in this issue.
```

---

## Codex Prompt Requirements

`ISSUE-XXX_Codex_Prompt.md` 必須包含：

1. Issue identity
2. Execution mode
3. Embedded `/goal`
4. Required reference documents
5. Selected Agent Skill(s)
6. Allowed scope
7. Forbidden scope
8. Tool / Platform Routing Decision
9. Required output
10. Validation requirements
11. Stop conditions

Codex Prompt 必須明確要求 Codex 回傳：

```text
1. PASS / PASS WITH WARNINGS / FAIL
2. DONE Report
3. changed-file summary
4. validation result
5. risks / warnings
```

---

## Antigravity Prompt Requirements

`ISSUE-XXX_Antigravity_Prompt.md` 必須根據 routing decision 自動生成。

如果 Antigravity Required / Optional：

內容必須限制在：

- UI / layout / frontend refinement
- page preview
- responsive notes
- visual polish
- component consistency
- form / table / dashboard review

Antigravity 禁止：

- 不准改 DB
- 不准改 RLS
- 不准改 Auth
- 不准改 environment config
- 不准改 production config
- 不准改 pricing / payment / billing
- 不准做 future MVP features
- 不准重構 unrelated files
- 不准新增 n8n workflow
- 不准修改 Supabase schema / migration / RLS

Antigravity 必須回傳：

```text
1. UI changes summary
2. changed-file summary
3. preview notes
4. responsive notes
5. risks / warnings
6. PASS / PASS WITH WARNINGS / FAIL
```

如果 Antigravity Not Required：

內容必須寫：

```text
Antigravity not required for this issue.

Reason:
-

Do not run Antigravity for this issue unless a later review explicitly identifies UI / layout / frontend refinement work.
```

---

## DONE Report Requirements

`ISSUE-XXX_DONE_Report.md` 必須包含：

1. Issue identity
2. Execution mode used
3. Selected skill(s)
4. Codex result
5. Antigravity result
6. Tool / Platform Execution Summary
7. Supabase / Vercel / n8n Usage Summary
8. Harness Review Notes
9. Related Test Cases
10. Changed-file summary
11. Validation result
12. Scope confirmation
13. Risks / warnings
14. PASS / PASS WITH WARNINGS / FAIL

DONE Report 的 Tool / Platform Execution Summary 必須包含：

```text
Codex:
- Used / Not Used
- Result:

Antigravity:
- Used / Not Used
- Result:

Supabase:
- Used / Not Used / Reserved
- Result:
- Secrets exposed? Yes / No
- DB / RLS / Auth touched? Yes / No

Vercel:
- Used / Not Used / Reserved
- Result:
- Preview checked? Yes / No
- Production config touched? Yes / No

n8n:
- Used / Not Used / Reserved
- Result:
- Workflow created? Yes / No
- Automation activated? Yes / No
```

---

## Harness Review References

請在每個 Workpack 和 DONE Report 裡加入：

```text
Harness Review References:
- TEST-CORE-001: Required / Optional / Future Reference / Not Applicable
- TEST-AIRCON-001: Required / Optional / Future Reference / Not Applicable
- STD-DEV-049: Future Review Reference
- CHK-DEV-020: Future PR Checklist Reference
- PROD-006: Required / Future Reference / Not Applicable
```

注意：

`TEST-CORE-001`、`TEST-AIRCON-001`、`STD-DEV-049`、`CHK-DEV-020`、`PROD-006` 目前不要完整塞進每個 Issue 文件包。

只需要在每個 Issue 裡引用它們，並留下 Harness Review Notes，方便跑完 3～5 個 Issue 後再正式整理。

---

## Final Response Format

最後請只告訴我：

1. 這包要放到哪個 repo 路徑
2. 我貼給 Codex 的短 prompt 是什麼
3. 如果需要 Antigravity，我貼給 Antigravity 的短 prompt 是什麼
4. Codex / Antigravity 回傳後，我要貼哪幾段給你判斷 PASS / FAIL

不要在最後輸出長篇教學。  
不要額外加入手動步驟。

---

## Issue Linkage / Handoff Requirements

Every generated issue pack must include issue-to-issue traceability according to:

```text
STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
TPL-DEV-039_Issue_Linkage_and_Handoff_Insert.md
12_Projects/[PROJECT]/[PROJECT]_ISSUE_CHAIN_REGISTER.md
```

`ISSUE-XXX_Workpack.md` must include:

```text
Issue Linkage
- Previous Issue Dependency
- Required Previous Outputs
- Dependency Status
- This Issue Outputs
- Next Issue Handoff
- Issue Chain Register reference
```

`ISSUE-XXX_DONE_Report.md` must include:

```text
Handoff to Next Issue
- Next Issue
- Ready for next issue?
- Required Follow-up Before Next Issue
- Files / Decisions Next Issue Should Read
- Risks Carried Forward
- Issue Chain Register updated?
```

The generated Codex Prompt must instruct Codex not to start a dependent issue if the previous issue is FAIL / BLOCKED / missing DONE Report / missing validation / missing handoff notes.
