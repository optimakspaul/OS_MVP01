# STD-DEV-035 — Batch and Issue Revision Impact Control Standard

**Status:** Active in v1.6.0  
**Applies to:** MVP-01 batch documents, issue workpacks, constitution changes, completed issue review

---

## 1. Purpose

This standard prevents uncontrolled rewriting of previously completed issue and batch documents when the constitution changes.

---

## 2. Core Rule

A new constitution version does not automatically require rewriting all existing batches.

Instead, every change should classify its impact.

---

## 3. Impact Classification

Use the following levels for existing batch / issue impact:

```text
A. No action required
B. Forward-only adoption
C. Supplemental note required
D. Affected issue review required
E. New issue or change request required
```

---

## 4. When No Action Is Required

Use this when the constitution change does not affect the completed issue's scope, files, data model, security, deployment, or client workflow.

Example:

```text
A new onboarding checklist is added, but an old issue only initialized the Next.js project.
```

---

## 5. When Forward-Only Adoption Is Enough

Use this when the new rule should apply to future work but does not require editing old files.

Example:

```text
New DONE report fields are required from the next issue onward.
```

---

## 6. When a Supplemental Note Is Required

Use this when an existing batch remains valid but needs a short note explaining how the new constitution relates to it.

Example:

```text
A client workspace batch should mention that future client launch must complete CLT-009.
```

---

## 7. When Affected Issue Review Is Required

Use this when the new rule may affect security, data access, client isolation, plan behavior, template behavior, deployment, or billing setup.

Examples:

```text
RLS / client isolation changes
plan feature toggle changes
admin activation changes
production deployment changes
onboarding or billing gate changes
```

---

## 8. When a New Issue or Change Request Is Required

Use this when the new constitution creates new product work that was not originally included.

Examples:

```text
Add admin plan selector
Add template management table
Add client launch checklist UI
Add billing status tracking
Add feature flag enforcement
```

Do not silently insert these into completed 20_Issues.

---

## 9. MVP-01 Batch 1-18 Guidance

For v1.6.0:

```text
Do not rewrite all batch 1-18 files automatically.
Review only batches/20_Issues that touch client workspace, plan tiers, templates, admin control, deployment, onboarding, billing, demo setup, or production launch.
For new functionality, create new 20_Issues or change requests.
```

---

## 10. DONE Report Requirement

If an issue is affected by a constitution change, its DONE report or supplemental note must include:

```text
constitution version
change record reference
impact classification
affected files
affected behavior
whether code change is required
founder decision
```
