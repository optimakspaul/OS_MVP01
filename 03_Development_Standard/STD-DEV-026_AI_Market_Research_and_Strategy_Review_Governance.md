# STD-DEV-026 AI Market Research and Strategy Review Governance

| Field | Value |
|---|---|
| Document Code | STD-DEV-026 |
| Version | v1.5.4 AI Market Research & Strategy Governance |
| Effective Date | 2026-05-16 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define how AI-generated market research, competitor research, pricing analysis, positioning advice, and GTM recommendations are reviewed before they become Optimaks strategy or product scope. |

---

## 1. Purpose

This standard prevents market research digests from becoming unreviewed product, pricing, sales, or development decisions.

Optimaks may use Gemini, ChatGPT, search tools, uploaded documents, or other AI tools to perform first-level market research. However, AI research output must be treated as input evidence, not as approved business strategy.

---

## 2. Core Principle

```text
Research Digest is not Strategy.
Strategy Review is not Product Scope.
Product Scope is not Implementation until it becomes an approved Issue / CR / PR.
```

中文原則：

```text
市場研究摘要不是最終策略。
策略建議不是產品範圍。
產品範圍在沒有 Issue / CR / PR 前，不得直接進入實作。
```

---

## 3. Required Workflow

When Optimaks uses AI for market research, competitor analysis, pricing, GTM, or positioning, the following workflow must be followed:

```text
Research Need
↓
Gemini / Deep Research / Search Digest, optional
↓
Research Digest saved as supporting material
↓
ChatGPT Strategy Review
↓
Approved Strategy Documents
↓
Product / Sales / GTM Documents
↓
GitHub Issue or Change Request, if implementation is required
↓
Codex / Antigravity execution, only after approved context
```

---

## 4. When This Standard Applies

This standard applies when the research touches any of the following:

```text
[ ] Competitor list or market segmentation
[ ] Pricing package design
[ ] Product positioning
[ ] Landing page messaging
[ ] GTM plan or outreach campaign
[ ] Target industry selection
[ ] Sales script / cold outreach playbook
[ ] PSG / grant positioning
[ ] Cross-industry expansion strategy
[ ] Client-facing promise or guarantee
```

---

## 5. Research Digest Rules

Research Digest may include:

```text
- competitor names
- websites
- public package claims
- observed positioning
- public price signals
- market segmentation
- opportunities and gaps
- unresolved questions
```

Research Digest must not be treated as final truth unless verified.

Every research digest should include, where possible:

```text
- source URL or source file
- access / review date
- confidence level
- whether the claim is verified, inferred, or speculative
```

---

## 6. ChatGPT Strategy Review Requirement

Before a research digest changes Optimaks direction, ChatGPT must review it from the following angles:

```text
- competitor category correctness
- direct vs indirect competitor distinction
- target customer fit
- product positioning implication
- pricing feasibility
- GTM feasibility
- sales message clarity
- MVP scope impact
- implementation risk
- evidence gap
```

Required outputs:

```text
- positioning statement
- competitor positioning map
- pricing package recommendation
- target industry recommendation
- landing page structure
- cold outreach direction
- 30-day action plan
- documentation updates required
```

---

## 7. Source of Truth Rule

The following are supporting materials only:

```text
- Gemini Digest
- Deep Research output
- raw AI chat output
- unverified competitor tables
- ad-hoc pricing suggestions
```

The following may become official source of truth after review:

```text
- docs/strategy/*.md
- docs/product/*.md
- docs/sales/*.md
- GitHub Issues
- Pull Requests
- CHANGELOG
- VERSION_HISTORY
```

In this document library, official strategy documents are stored under:

```text
15_Strategy/
16_Product_Strategy/
17_Sales_GTM/
```

---

## 8. PSG and Grant Positioning Rule

If Optimaks is not operating as a PSG vendor, Optimaks should not compete primarily on grant eligibility.

Approved positioning:

```text
No grant paperwork.
No long approval wait.
No heavy ERP setup.
Launch fast.
Start with the workflow the business actually needs.
```

Avoid positioning:

```text
We are cheaper because we do not have PSG.
We can replace all PSG vendors.
Grant is not useful.
```

PSG may be discussed as a market factor, but Optimaks' primary advantage should be speed, practicality, productized delivery, and website-to-workflow integration.

---

## 9. Product Scope Boundary

A strategy review may recommend new product ideas, but those ideas must not enter implementation directly.

Before implementation, convert recommendations into:

```text
- product scope document
- GitHub Issue
- acceptance criteria
- non-goals
- data model impact
- UI impact
- QA checklist
```

---

## 10. Review Checklist

Before accepting a strategy recommendation, verify:

```text
[ ] Is this based on verified data or inferred data?
[ ] Is the recommendation aligned with FND-005 and STD-DEV-023?
[ ] Does it strengthen the industry workflow-first positioning?
[ ] Does it avoid becoming a generic web agency offer?
[ ] Does it avoid overbuilding heavy CRM / ERP scope?
[ ] Does it clarify direct vs indirect competitors?
[ ] Does it create a clear sales message?
[ ] Does it require product scope change?
[ ] If yes, has a GitHub Issue / CR been created?
```

---

## 11. Relationship to Other Standards

This standard works with:

```text
FND-005 Product Positioning and WAS Principle
STD-DEV-023 Industry Workflow First and SME OS Scope Standard
STD-DEV-025 AI Research Intake and Multi-Model Handoff Standard
TPL-DEV-014 Gemini Research Digest Template
CHK-DEV-011 AI Research Intake and Handoff Checklist
```
