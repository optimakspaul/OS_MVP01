# CURRENT_CONSTITUTION.md

**Current Active Constitution Version:** v1.6.1  
**Release Name:** AI Agent Execution Slimming Patch  
**Status:** Active  
**Effective Date:** 2026-05-19  
**Canonical Source:** `01_Constitution/CURRENT_CONSTITUTION.md`  
**Mirror Pointer:** `docs/constitution/CURRENT_CONSTITUTION.md`

---

## 1. Active Version

```text
Optimaks Document Library v1.6.1
```

v1.6.1 supersedes v1.6.0 as the active working constitution.

v1.6.1 is a governance and execution slimming patch. It does not change product scope, pricing, database schema, RLS design, client delivery scope, or MVP-01 feature commitments unless a specific issue workpack says so.

The main purpose of v1.6.1 is:

```text
Keep the full document library complete.
Give AI agents a smaller, clearer execution entrypoint.
Prevent old or strategic documents from confusing daily coding work.
Clarify which files are active, reference-only, archived, or client-delivery-only.
```

---

## 2. Canonical Document Rule

The canonical constitution is:

```text
01_Constitution/CURRENT_CONSTITUTION.md
```

The `docs/constitution/CURRENT_CONSTITUTION.md` file may exist as a mirror for repo tools, but it must contain the same effective constitution or point back to the canonical source.

AI agents must not choose between duplicate constitution files. If there is a conflict, the canonical source wins.

---

## 3. AI Agent Entrypoint Rule

All AI implementation tools must first read:

```text
AGENTS.md
```

Then read only the context package required for the assigned issue:

```text
Mini Context
Standard Context
Full Context
```

The controlled standard is:

```text
03_Development_Standard/STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md
```

The active context templates are:

```text
09_Templates/TPL-DEV-023_AI_CONTEXT_MINI.md
09_Templates/TPL-DEV-024_AI_CONTEXT_STANDARD.md
09_Templates/TPL-DEV-025_AI_CONTEXT_FULL.md
```

---

## 4. Active Standards Index Rule

The active standards index is mandatory for resolving which documents are active for execution:

```text
01_Constitution/ACTIVE_STANDARDS_INDEX.md
```

AI tools must not treat every file in the library as active execution context.

The document role map is:

```text
00_Admin/DOCUMENT_ROLE_MAP.md
```

This map separates documents into:

```text
Daily AI Coding Context
Client Delivery Context
Governance Context
Strategy / Sales Context
Archive / Reference Context
Examples
```

---

## 5. Active Standards

AI tools and founder execution must follow the active constitution plus the following controlled standards when relevant to the assigned issue:

```text
STD-DEV-032 AI Issue Execution and DONE Report Standard
STD-DEV-033 Plan, Feature Toggle and Template Control Standard
STD-DEV-034 Client Deployment and Environment Provisioning Standard
STD-DEV-035 Batch and Issue Revision Impact Control Standard
STD-DEV-036 Visual Concept to MVP Issue Decomposition Standard
STD-DEV-037 AI Agent Execution Slimming and Context Routing Standard
STD-DEV-038 CI and Automated Validation Gate Standard
STD-GOV-001 Constitution Change Control Standard
STD-GOV-002 Constitution Change Level Decision Rule
CLT-009 Client Onboarding and Launch Intake Checklist
```

Older standards may remain in the library for history or reference, but only the active standards index decides what must be followed for execution.

---

## 6. Required AI Tool Behavior

Before starting any issue, Codex / Antigravity / other AI implementation tools must:

```text
1. Read AGENTS.md
2. Read this CURRENT_CONSTITUTION.md
3. Read the assigned issue workpack
4. Read the required context package: Mini / Standard / Full
5. Read only relevant active standards listed in ACTIVE_STANDARDS_INDEX.md
6. Apply only rules effective for the current issue
7. Respect Allowed Files / Forbidden Files in the issue workpack
8. Record constitution version used in ISSUE-XXX_DONE.md
9. Record changed files, tests, risks, rollback notes, and merge readiness
```

AI tools must not silently change product scope, pricing plan behavior, client isolation rules, deployment mode, onboarding requirements, production configuration, database policies, or secrets handling.

---

## 7. Founder Operating Mode

```text
Founder selects issue
Founder provides standard prompt
AI reads AGENTS.md and scoped context package
AI implements only assigned scope
AI writes DONE.md with tests, changed files, risks, rollback notes, and constitution version
Founder reviews DONE.md
Founder tests main workflow / preview
Founder approves merge
Founder approves production deployment only after checklist and preview validation
```

The founder should not manually rewrite repeated instructions for every issue. The issue workpack and templates should carry the execution rules.

---

## 8. Client Onboarding Rule

All new client setup, demo setup, production deployment, billing setup, or client workspace activation must complete the controlled onboarding checklist:

```text
05_Client_Delivery/CLT-009_Client_Onboarding_and_Launch_Intake_Checklist.md
```

The constitution records the mandatory rule. CLT-009 records the detailed form fields and checklist items.

If CLT-009 is incomplete, the project may proceed only with a documented Founder Decision and risk note.

---

## 9. Plan, Template and Feature Toggle Rule

Optimaks OS / Aircon OS must be developed as one stable core system with controlled plan and template variation.

```text
One core codebase
Plan-based feature flags
Industry workflow templates
Client workspace configuration
Manual activation first, automated activation later
```

Lite / Standard / Plus / Pro differences must be implemented through controlled configuration, feature toggles, module permissions, and templates unless a documented architecture decision approves otherwise.

The controlled standard is:

```text
03_Development_Standard/STD-DEV-033_Plan_Feature_Toggle_and_Template_Control_Standard.md
```

---

## 10. Client Deployment Rule

MVP-stage client delivery should use a shared application with client/workspace isolation rather than one separate codebase per client.

Production deployment requires founder approval. Secrets must not be committed. Client launch must reference onboarding status, workspace status, plan/template status, and preview validation.

The controlled standard is:

```text
03_Development_Standard/STD-DEV-034_Client_Deployment_and_Environment_Provisioning_Standard.md
```

---

## 11. Batch and Issue Revision Rule

Completed batches and 20_Issues must not be rewritten silently when the constitution changes.

If a new constitution version affects existing MVP-01 batches or 20_Issues, the change must be classified as one of the following:

```text
No action required
Forward-only adoption
Supplemental note required
Affected issue review required
New change request / new issue required
```

The controlled standard is:

```text
03_Development_Standard/STD-DEV-035_Batch_and_Issue_Revision_Impact_Control_Standard.md
```

---

## 12. Visual Concept to MVP Issue Rule

Screenshots, hand-drawn flows, demo sketches, competitor references, and UI concept images may be converted into executable MVP scope only through a controlled decomposition process.

The controlled standard is:

```text
03_Development_Standard/STD-DEV-036_Visual_Concept_to_MVP_Issue_Decomposition_Standard.md
```

---

## 13. Automated Validation Rule

Every implementation issue must record the validation level used and the checks completed.

Minimum MVP-stage validation should include:

```text
lint or static check where available
build check where available
no secrets committed
DONE.md exists
changed files are inside allowed scope
preview / workflow test notes when UI or flow changes
```

The controlled standard is:

```text
03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
```

---

## 14. Rule for Constitution Changes

No constitution change may be applied silently.

Every constitution change must be recorded under:

```text
04_Governance_Standard/constitution-changes/
```

Every change must define:

```text
change level
reason
effective from
affected 20_Issues
whether completed 20_Issues require review
founder decision
```

The v1.6.1 change record is:

```text
04_Governance_Standard/constitution-changes/CC-002_v1.6.0-to-v1.6.1_ai-agent-execution-slimming.md
```
