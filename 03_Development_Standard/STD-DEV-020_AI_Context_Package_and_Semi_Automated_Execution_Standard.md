# STD-DEV-020 AI Context Package and Semi-Automated Execution Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-020 |
| Version | v1.5.4 Current Consolidated Release |
| Owner | Optimaks Pte Ltd |
| Status | Active Stable Standard |
| Supersedes | STD-DEV-015, parts of STD-DEV-018, TPL-DEV-007 |
| Applies to | ChatGPT, Codex, Antigravity, GitHub Issues, MVP implementation, client workflow automation projects |

---

## 1. Purpose

This standard defines how Optimaks prepares context for AI-assisted development and how semi-automated execution should be controlled.

It fuses the previous AI pipeline, prompt standard, UI/backend parallel rule, and context control rule into one active v1.5 standard.

The purpose is to accelerate development while keeping Paul in control of direction, scope, business priority, implementation quality, and production release.

---

## 2. Core Principle

AI accelerates execution. It does not replace governance.

```text
Paul decides direction.
Gemini supports large document / research intake when needed.
ChatGPT structures thinking, reviews risk, and documents.
Antigravity supports UI / UX and interaction flow.
Codex supports implementation, refactor, data model, API logic, and tests.
GitHub records the truth.
Staging verifies safety.
Production changes only after review.
```

中文原則：

```text
Paul 負責方向、取捨與最後決策。
AI 負責加速整理、拆解、產出與實作。
GitHub 負責留下真相。
Staging 負責驗證安全。
Production 必須經過審查後才可更新。
```

---

## 3. Research Intake Pre-Check

Before preparing an AI Context Package, decide whether the task requires Research Intake.

Use Research Intake when:

```text
- source document is longer than 30 pages
- API documentation has more than 5 endpoints
- dataset has more than 20 fields
- research requires more than 3 websites or source documents
- task involves government open data, third-party SaaS API, competitor research, client SOPs, or large codebase review
```

When Research Intake is required, create a Research Digest first using `TPL-DEV-014_Gemini_Research_Digest_Template.md`, then ask ChatGPT to review it and convert it into AI Context Package input.

Gemini Research Digest is not implementation approval.

---

## 4. AI Context Package Rule

Before asking AI to implement a meaningful feature, module, MVP, or client-facing change, prepare an AI Context Package.

Minimum required context:

1. Constitution version.
2. Project name and project context.
3. Business objective.
4. Target user / operator.
5. Problem statement.
6. In-scope items.
7. Out-of-scope items.
8. User flow.
9. Page map.
10. Component map.
11. Data model draft.
12. Field list.
13. Status logic.
14. Acceptance criteria.
15. Testing method.
16. Files or folders likely affected.
17. Expected AI output.
18. Forbidden changes.

A one-line prompt is acceptable only for small copy edits, minor bug fixes, or clearly isolated Mini Issues.

---

## 5. Standard Semi-Automated Pipeline

```text
Idea
↓
Capture
↓
Research Intake Decision
↓
Gemini Research Digest, if needed
↓
ChatGPT Review
↓
Triage
↓
Project Brief
↓
User Flow
↓
Architecture / Data Model Draft
↓
Page Map / Component Map
↓
Issue Breakdown
↓
AI Context Package
↓
Codex / Antigravity Implementation
↓
Testing Checklist
↓
GitHub Diff Review
↓
Documentation Update
↓
Changelog
↓
Staging Preview
↓
Production Release, if approved
```

---

## 6. Tool Role Separation

| Tool | Main Role | Should Avoid |
|---|---|---|
| Gemini | Large document / API / dataset / market research digest | Making final architecture decisions or sending direct implementation prompts to Codex / Antigravity |
| ChatGPT | Thinking, requirement structuring, CR drafting, MVP decomposition, research review, document drafting, prompt preparation | Acting as the only source of truth after files are created |
| Antigravity | UI / UX, visual flow, layout, interaction, screen review, frontend prototyping | Redefining backend data models alone |
| Codex | Implementation, refactor, data structure, API logic, tests, repository-level changes | Expanding scope beyond the approved Issue / CR / context package |
| GitHub | Source of truth, Issues, commits, diffs, changelog, version history | Being used only as backup without review discipline |

---

## 7. UI / Backend Parallel Rule

UI and backend may be developed in parallel only after a shared context package exists.

UI may start first when:

1. The workflow is still being explored.
2. A sales demo or client explanation is needed.
3. Mock data is enough to validate the flow.
4. The risk is mainly usability or positioning.

Backend may start first when:

1. The data model is already clear.
2. Integration, security, auth, database, or API design is the main risk.
3. The feature affects production or client data.
4. The output must be stable before UI is added.

For most Optimaks MVPs, UI and backend should be planned together, but implementation can be staged.

---

## 8. Reconciliation Rule

After AI-assisted or parallel development, outputs must be reconciled through:

1. GitHub diff review.
2. Data field comparison.
3. Page behavior check.
4. Component responsibility check.
5. Acceptance criteria testing.
6. Documentation update.
7. Changelog entry.

A UI that cannot connect to the planned data model is not complete.

A backend that does not support the approved user flow is not complete.

---

## 9. AI Execution Guardrails

AI should not:

1. Treat Gemini Research Digest as direct implementation approval.
2. Add features outside the approved scope.
2. Introduce auth, payment, e-sign, invoice, client portal, or multi-tenant logic unless explicitly approved.
3. Rewrite large parts of the system without impact analysis.
4. Change data structures without documenting migration risk.
5. Bypass GitHub diff review.
6. Treat archive files as current instructions.

---

## 10. Required Output From AI Implementation Tasks

For implementation work, the expected AI output should normally include:

1. Summary of changed files.
2. Explanation of implementation approach.
3. Testing instructions.
4. Known limitations.
5. Any assumptions made.
6. Recommended follow-up Issue or CR, if needed.

---

## 11. Related Files

| File | Relationship |
|---|---|
| `TPL-DEV-009_AI_Context_Package_Template.md` | Template for preparing AI execution context |
| `TPL-DEV-014_Gemini_Research_Digest_Template.md` | Template for large-context research intake before ChatGPT review |
| `STD-DEV-025` | AI Research Intake and Multi-Model Handoff Standard |
| `CHK-DEV-008_v1.5_AI_and_MVP_Readiness_Checklist.md` | Readiness checklist before AI execution |
| `STD-DEV-021` | MVP layering and Small Core First rule |
| `STD-DEV-022` | Internal MVP and client delivery version control |
