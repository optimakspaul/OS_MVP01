# STR-005 AI Market Research to Strategy Review Workflow

| Field | Value |
|---|---|
| Current Library Version | v1.5.5 Strategic Constitution Guardrails Patch |
| Last Consolidated | 2026-05-16 |
| Status | Active / Current unless explicitly marked as historical |


| Field | Value |
|---|---|
| Document Code | STR-005 |
| Version | v1.5.5 Current Consolidated Release |
| Effective Date | 2026-05-16 |
| Owner | Optimaks Pte Ltd |
| Status | Active Strategy Draft |
| Purpose | Define how market research digests are converted into Optimaks strategy decisions. |

---

## 1. Rule

```text
Gemini Digest does not enter the constitution.
The rule for handling Gemini Digest enters governance.
The approved strategy output enters strategy/product/sales docs.
```

---

## 2. Workflow

```text
Market Research Question
↓
Gemini / Deep Research Digest
↓
Source and confidence check
↓
ChatGPT Strategy Review
↓
Approved strategy docs
↓
Product / Sales / GTM docs
↓
Issue / CR if implementation is needed
```

---

## 3. ChatGPT Review Prompt Template

```text
You are Optimaks' business positioning and product strategy advisor.

The following is a market research digest for Singapore SME digital automation / web agency / PSG vendor / CRM vendor / FSM vendor market.

Do not summarize the digest again. Perform Strategy Review.

Analyze:
1. Is the competitor classification reasonable?
2. Which companies are direct competitors?
3. Which companies are alternatives, not direct competitors?
4. Should Optimaks focus first on aircon / field service?
5. If focusing on aircon, how should the positioning be written?
6. Which features can be reused across industries later?
7. Is the pricing recommendation reasonable?
8. Should Optimaks lead with acquisition or admin savings?
9. How should Optimaks avoid the PSG battlefield if PSG is not its advantage?
10. Output:
   - positioning statement
   - 3 pricing packages
   - landing page section structure
   - cold outreach message
   - competitor positioning map
   - 30-day GTM action plan
   - docs that must enter GitHub
```

---

## 4. Acceptance Criteria

A strategy review is acceptable only when it produces:

```text
[ ] clear target customer
[ ] clear non-target customer
[ ] direct vs indirect competitor separation
[ ] pricing ladder
[ ] landing page message
[ ] GTM action plan
[ ] documentation update list
[ ] product scope boundary
```
