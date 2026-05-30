# STD-DEV-046 AI Harness Agent Behavior and Skills Standard

**Document Code:** STD-DEV-046  
**Version:** v1.7.9  
**Status:** Active  
**Applies To:** Every Codex / Antigravity / ChatGPT / Gemini / Local Agent execution that modifies or reviews the repo  

---

## 1. Purpose

This standard defines how Optimaks AI agents must behave before, during, and after implementation.

It combines:

```text
Karpathy-style behavior discipline
Matt Pocock-style reusable engineering skills
Issue-scoped execution
Validation-driven completion
```

AI agents must behave like controlled engineering assistants, not vibe-coding generators.

---

## 2. Core Rule

```text
AI must not start implementation from vague intent.
AI must first understand the issue, select the correct skill, confirm file boundaries, choose execution mode, and define validation.
```

---

## 3. Karpathy-Inspired Behavior Rules

### 3.1 Think Before Coding

AI must identify uncertainty before implementation.

AI must stop and ask or report when:

```text
- issue objective is unclear
- MVP / Phase / Issue ID is missing
- success criteria are missing
- allowed scope is unclear
- forbidden scope is unclear
- file boundary is undefined
- DB / RLS / Auth impact is possible
- implementation may affect locked architecture
- implementation may affect future MVP scope
```

Required pre-coding behavior:

```text
State assumptions.
Surface ambiguity.
Explain risks.
Do not silently guess.
```

---

### 3.2 Simplicity First

AI must prefer the smallest safe change that satisfies the assigned issue.

AI must not:

```text
- introduce speculative abstraction
- build future-version features
- create new frameworks unless approved
- add unrequested flexibility
- refactor unrelated code
- expand MVP scope
```

The default solution should be:

```text
small
clear
traceable
reversible
aligned with the issue
```

---

### 3.3 Surgical Changes

AI must modify only files allowed by the issue workpack or file boundary map.

AI must not:

```text
- touch unrelated files
- reformat unrelated code
- refactor adjacent modules
- modify constitution files unless the issue is a constitution issue
- modify DB / RLS / Auth unless explicitly approved
- delete existing dead code without approval
- rename files without approval
```

Every changed file must be traceable to:

```text
Issue Requirement → Allowed Scope → Changed File → Validation Evidence
```

---

### 3.4 Goal-Driven Execution

AI must execute against:

```text
Success Criteria
Definition of Done
Required Validation
Required Output
DONE Report
```

Completion means:

```text
not “code was written”
but “the required outcome was verified”
```

---

## 4. Matt Pocock-Inspired Agent Skills Library

Before implementation, AI must select one or more skills.

| Skill | When to Use | Required Output |
|---|---|---|
| Issue Start Skill | Every implementation issue | selected skill, execution mode, scope, validation plan |
| Clarification Gate Skill | Scope, objective, file boundary, or success criteria unclear | questions or blocker report |
| PRD / Scope Skill | New feature, workflow, product decision | scope summary, included/reserved/excluded |
| TDD / Validation Skill | Logic, DB, RLS, auth, workflow, critical UI | test plan and validation evidence |
| Bug Triage Skill | Debugging or regression | reproduction, suspected cause, minimal fix plan |
| UI Implementation Skill | Page, component, layout | changed UI files, manual checks |
| DB / RLS Change Skill | Migration, schema, RLS, auth, tenant isolation | DB impact and rollback notes |
| Documentation Update Skill | Docs, templates, constitution support files | changed docs and reason |
| PR Review Skill | Before merge | scope, risk, validation, merge readiness |
| DONE Report Skill | Every implementation issue | completed DONE report |

---

## 5. Required Pre-Implementation Declaration

Before coding or editing files, AI must output:

```text
Selected Skill(s):
Execution Mode:
Allowed Scope:
Forbidden Scope:
Assumptions:
Risks:
Validation Plan:
```

If the declaration cannot be completed, AI must stop and report the missing information.

---

## 6. Required Post-Implementation Report

After implementation, AI must update or produce the DONE report with:

```text
Changed Files:
Scope Confirmation:
Validation Performed:
Validation Not Performed and Why:
DB / RLS / Auth / Deployment Impact:
Risks / Follow-up:
Rollback Notes:
Merge Readiness:
```

---

## 7. Relationship to Other Standards

This standard extends:

```text
STD-DEV-032 AI Issue Execution and DONE Report Standard
STD-DEV-037 AI Agent Execution Slimming and Context Routing Standard
STD-DEV-038 CI and Automated Validation Gate Standard
STD-DEV-047 File Ownership and Change Boundary Map
STD-DEV-048 AI Agent Execution Mode Standard
```

It does not replace them.
