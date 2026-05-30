# STD-DEV-021 MVP Layering, Small Core, and Dependency Execution Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-021 |
| Version | v1.5 Cleanup + Fusion |
| Owner | Optimaks Pte Ltd |
| Status | Active Stable Standard |
| Supersedes | STD-DEV-016, STD-DEV-017, parts of STD-DEV-010, TPL-DEV-008 |
| Applies to | Optimaks OS, Aircon OS, ACRA Radar, internal CRM, client workflow automation systems, reusable modules |

---

## 1. Purpose

This standard defines how Optimaks breaks large ideas into MVPs, starts from a small core, controls dependency, and expands layer by layer.

It fuses the previous MVP decomposition rule and Small Core First rule into one active v1.5 standard.

---

## 2. Core Rule

A large project must not go directly into code.

A large project must first be decomposed into MVPs or modules.

Each MVP must start from the smallest useful core, then expand layer by layer.

```text
Do not start from the full system.
Start from the smallest useful core.
Make it understandable.
Make it testable.
Make it extendable.
Then add modules layer by layer.
```

中文原則：

```text
不要一開始就做完整大系統。
先做最小、可用、可理解、可測試、可延伸的小核心。
核心穩定後，再一層一層加功能。
```

---

## 3. MVP Classification

Before creating code, classify the work item:

| Type | Meaning | Route |
|---|---|---|
| Mini Issue | Small, isolated fix or copy/UI adjustment | GitHub Issue / quick patch |
| Issue | Normal task or bounded feature | GitHub Issue + testing note |
| CR | Change affecting workflow, data structure, delivery scope, or client promise | Change Request + impact analysis |
| Full CR | Large feature, cross-module change, pricing/contract impact, multi-tenant or architecture-level change | Full CR + architecture review + timeline |
| MVP | A testable product/module stage | MVP document package + AI context package |

---

## 4. Small Core Definition

A small core is the minimum system that can prove the workflow.

It usually includes:

1. Main user or operator.
2. Main object or record.
3. Basic list view.
4. Basic detail view.
5. Basic status tracking.
6. Basic note or value field.
7. Mock data, localStorage, or simple data source when appropriate.
8. Clear extension points.

It usually excludes:

1. Auth.
2. Payment.
3. E-sign.
4. Invoice automation.
5. Client portal.
6. Multi-tenant architecture.
7. Full dashboard/reporting.
8. Complex role permission.
9. Advanced workflow automation.
10. Production-grade integrations.

Excluded items may be added later through Issue, CR, or Full CR.

---

## 5. Dependent vs Independent MVP Rule

| Type | Meaning | Execution Rule |
|---|---|---|
| Dependent MVP | Depends on previous data, flow, UI, or architecture decisions | Must inherit previous documents and decisions |
| Independent MVP | Can be explored without affecting the core system | May prepare documents in parallel |

Dependent MVPs must follow sequence and inherit:

1. Data model assumptions.
2. Naming conventions.
3. User roles.
4. Status logic.
5. UI patterns.
6. Technical constraints.
7. Testing outcomes.
8. Known limitations.

Independent MVPs may be prepared while other work is ongoing, but must become dependent modules before integration into Optimaks OS or a shared platform.

---

## 6. Layered Execution Flow

```text
Large Idea
↓
MVP Decomposition
↓
Dependency Classification
↓
Small Core Definition
↓
MVP Document Package
↓
AI Context Package
↓
Implementation
↓
Test / Review
↓
Next Layer Decision
```

---

## 7. MVP Document Package

Each meaningful MVP should have a document package containing:

1. MVP objective.
2. Target user.
3. Business value.
4. In-scope list.
5. Out-of-scope list.
6. Core data objects.
7. Page list.
8. Component list.
9. User flow.
10. Acceptance criteria.
11. Test method.
12. Dependency map.
13. Future extension notes.

---

## 8. Next-Layer Rule

A next layer should be started only when the previous layer has:

1. Clear data structure.
2. Clear user flow.
3. Basic working UI or prototype.
4. Basic testing result.
5. Known limitations recorded.
6. Changelog updated.
7. Decision made: continue, revise, pause, or discard.

---

## 9. Commercial Delivery Caution

Internal MVP speed should not be confused with client delivery readiness.

An internal MVP can be fast and simple. A client delivery version requires the controls described in `STD-DEV-022`.

---

## 10. Related Files

| File | Relationship |
|---|---|
| `TPL-DEV-010_MVP_Layering_Template.md` | Template for MVP decomposition and small core planning |
| `CHK-DEV-008_v1.5_AI_and_MVP_Readiness_Checklist.md` | Readiness checklist before AI implementation |
| `STD-DEV-020` | AI context package and execution standard |
| `STD-DEV-022` | Client delivery and monthly value standard |
