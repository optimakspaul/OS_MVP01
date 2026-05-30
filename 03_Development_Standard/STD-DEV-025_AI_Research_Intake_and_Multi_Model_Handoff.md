# STD-DEV-025 AI Research Intake and Multi-Model Handoff Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-025 |
| Version | v1.5.4 Current Consolidated Release / Introduced in v1.5.3 |
| Effective Date | 2026-05-16 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define when Gemini, ChatGPT, Codex, Antigravity, VS Code, and GitHub should be used in a controlled multi-AI development workflow. |

---

## 1. Purpose

This standard defines the Optimaks rule for using multiple AI tools without creating confusion, duplicated context, or uncontrolled code changes.

It introduces a formal Research Intake stage before AI implementation when the project involves large documents, external APIs, public datasets, competitor research, or client SOP material.

---

## 2. Core Principle

```text
Gemini reads large information.
ChatGPT decides structure, risk, scope, and execution strategy.
Codex implements logic, backend, data, API, and tests.
Antigravity implements UI, app shell, interaction, and browser verification.
VS Code and GitHub remain the control center and source of truth.
```

中文原則：

```text
Gemini 負責大量資料導讀。
ChatGPT 負責判斷、架構、治理、風險審查。
Codex 負責後端、資料、API、測試與實作。
Antigravity 負責 UI、App Shell、互動與瀏覽器驗證。
VS Code + GitHub 負責最後審查、留證據、合併與回滾。
```

---

## 3. When to Use Gemini Research Intake

Use Gemini as a standalone research intake tool only when at least one of the following is true:

```text
[ ] Document is longer than 30 pages.
[ ] API documentation includes more than 5 endpoints.
[ ] External dataset includes more than 20 fields.
[ ] Research requires more than 3 websites or documents.
[ ] The topic involves government open data or third-party SaaS integration.
[ ] The source is a large existing codebase.
[ ] The source is a client SOP package with many files.
[ ] The task is market / competitor research with many companies.
```

Examples:

```text
- ACRA / data.gov.sg company dataset research
- Zoho Sign / Signwell API integration review
- Xero / Stripe / accounting API research
- PSG vendor and SME automation competitor research
- Client SOP digitization review
- Long PDF or policy document summary
- Existing repo architecture digest
```

Do not use Gemini when the task is small and already clear:

```text
- simple bug fix
- single React component
- small SQL table change
- short landing page copy
- one-page requirement
- isolated UI adjustment
```

---

## 4. Required Gemini Output: Research Digest

Gemini must not produce implementation instructions directly for Codex or Antigravity.

Gemini should produce a structured Research Digest using `TPL-DEV-014_Gemini_Research_Digest_Template.md`.

The digest should include:

```text
- source list
- source date / version when known
- key facts
- data fields
- API endpoints
- authentication method
- rate limits / constraints
- risks
- open questions
- recommended review topics for ChatGPT
```

---

## 5. ChatGPT Review Requirement

Every Gemini Research Digest must be reviewed by ChatGPT before it becomes execution context.

ChatGPT review should convert the digest into:

```text
- MVP scope
- data model
- architecture decision
- edge cases
- security / PDPA notes
- GitHub Issues
- AI Context Package
- Codex prompt
- Antigravity prompt
- QA checklist
```

Gemini output alone is not approved for implementation.

---

## 6. AI Handoff Context Rule

A Research Digest may be copied into an AI handoff file such as:

```text
docs/context/AI_RESEARCH_DIGEST.md
docs/context/AI_HANDOFF_CONTEXT.md
```

However, the handoff file is not the final source of truth.

The official source of truth remains:

```text
- formal docs under /docs or project document folders
- GitHub Issues
- Pull Requests
- CHANGELOG
- VERSION_HISTORY
- approved architecture documents
```

---

## 7. No Secret / No Client Sensitive Data Rule

Do not upload the following to external AI tools unless explicitly approved and properly sanitized:

```text
- .env files
- API keys
- Supabase service role keys
- OAuth secrets
- client personal data
- real customer names, phone numbers, email addresses, addresses, invoices, or contracts
- payment records
- confidential pricing or commercial terms
- signed contracts
```

Allowed inputs should be sanitized or public:

```text
- public API documentation
- public dataset descriptions
- fake sample data
- schema drafts
- anonymized SOP summaries
- non-sensitive workflow descriptions
- public competitor website content
```

---

## 8. Multi-AI Workflow

```text
Idea / Research Need
↓
Research Intake Decision
↓
Gemini Research Digest, optional
↓
ChatGPT Architecture / Strategy / Risk Review
↓
AI Context Package
↓
GitHub Issue
↓
Feature Branch
↓
Codex / Antigravity implementation
↓
Local Test
↓
VS Code Git Diff Review
↓
Pull Request
↓
Vercel Preview / Staging
↓
Human Approval
↓
Merge
↓
CHANGELOG / Docs Update
```

---

## 9. Tool Boundary Matrix

| Tool | Official Role | Use When | Must Not Do |
|---|---|---|---|
| Gemini | Research Intake / Large Context Digest | Long docs, API docs, datasets, competitor research, client SOPs, existing codebase digest | Decide final architecture alone, generate production-ready implementation tasks without review, handle secrets |
| ChatGPT | Governance Architect / Strategy Reviewer | Scope, architecture, risk, edge cases, GitHub Issues, AI Context Package, prompts, documentation | Act as the only source of truth after files are created |
| Codex | Implementation Engineer | Backend, data model, Supabase, API, Auth, RLS, CRUD, tests, refactor | Expand scope beyond approved Issue / CR |
| Antigravity | UI / Agentic Execution Workspace | App Shell, UI, layout, navigation, responsive design, browser verification | Rewrite DB/Auth/RLS without approved backend/security issue |
| VS Code + GitHub | Control Center / Evidence System | Diff, commit, PR, review, preview, merge, rollback | Be skipped or treated as backup only |

---

## 10. ACRA Radar Example

Use Gemini for:

```text
- ACRA / data.gov.sg dataset documentation
- field dictionary
- API parameters
- pagination and rate limits
- data quality notes
```

Use ChatGPT for:

```text
- deciding whether UEN should be unique key
- company enrichment table design
- import log design
- deduplication logic
- lead status model
- confidence score rule
- GitHub Issue breakdown
```

Use Codex for:

```text
- fetch script
- normalization logic
- Supabase tables
- import logs
- API routes
- tests
```

Use Antigravity for:

```text
- searchable table UI
- filter panel
- company detail drawer
- lead status interaction
```

---

## 11. Market Research Example

Use Gemini for:

```text
- collecting and summarizing automation companies
- web agencies
- PSG vendors
- CRM vendors
- public pricing and package claims
- landing page positioning patterns
```

Use ChatGPT for:

```text
- deciding Optimaks positioning
- identifying red ocean vs niche
- designing packages
- pricing strategy
- cold outreach pitch
- landing page structure
```

---

## 12. Done Definition for Research Intake

A Research Intake task is done only when:

```text
[ ] Research Digest is created.
[ ] Sources and dates are noted where possible.
[ ] Unknowns and assumptions are clearly listed.
[ ] Sensitive data was not included.
[ ] ChatGPT review converted the digest into execution-ready context.
[ ] Follow-up GitHub Issues or CRs are created if implementation is needed.
```


---

## v1.5.4 Clarification

This standard remains the v1.5.3 research intake layer, and is included as active within the v1.5.4 consolidated release. Market strategy decisions are governed by `STD-DEV-026`.
