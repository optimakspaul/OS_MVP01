# CURRENT_CONSTITUTION.md

**Current Active Constitution Version:** `v1.7.9.4-project-baseline-governance`
**Release Name:** Project Baseline Governance Patch  
**Status:** Active  
**Effective Date:** 2026-05-30  
**Canonical Source:** `01_Constitution/CURRENT_CONSTITUTION.md`  
**AI Agent Entrypoint:** `AGENTS.md`  
**Supersedes Active Baseline:** v1.7.9.3-agency-skill-registry  
**Includes Prior Compatible Standards From:** v1.6.1+

---

## 1. Active Version

```text
Optimaks Document Library v1.7.9.4-project-baseline-governance
```

v1.7.9.4 extends the v1.7.9.3 agency skill registry and the v1.7.9.2 normalized package layout by adding a generic project baseline governance layer.

The Constitution must remain generic. It defines how projects are governed, how AI agents execute, how issues are linked, and how changes are controlled.

Concrete MVP / project scope, phase order, issue order, feature inclusion, reserved feature status, pricing decisions, and product-specific execution details must live under the relevant project folder:

```text
12_Projects/[PROJECT]/
```

Prior MVP01 architecture references remain valid only as project-specific references when MVP01 is the active project. They must not be treated as universal Constitution rules for all projects.

---

## v1.7.9.4 Project Baseline Governance Principle

v1.7.9.4 adds a generic project baseline governance layer. It does not define MVP01-specific scope, phases, issues, pricing, or feature inclusions inside the Constitution.

For any MVP or project execution, the project-specific source of truth must live under the project layer, normally:

```text
12_Projects/[PROJECT]/
```

Every MVP / project must maintain a project-level baseline contract before implementation execution:

```text
README_[PROJECT].md
[PROJECT]_SCOPE_BASELINE.md
[PROJECT]_PHASE_AND_ISSUE_BASELINE.md
[PROJECT]_ISSUE_CHAIN_REGISTER.md
[PROJECT]_CHANGE_CONTROL_LOG.md
```

The Constitution defines the universal governance rule. The project folder defines the concrete MVP / project content.

Required active reference documents:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.4_Project_Baseline_Governance.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
09_Templates/TPL-DEV-041_Project_README_Template.md
09_Templates/TPL-DEV-042_Project_Scope_Baseline_Template.md
09_Templates/TPL-DEV-043_Project_Phase_and_Issue_Baseline_Template.md
09_Templates/TPL-DEV-044_Project_Issue_Chain_Register_Template.md
09_Templates/TPL-DEV-045_Project_Change_Control_Log_Template.md
09_Templates/TPL-DEV-046_AGENTS_MD_Project_Baseline_Governance_Insert.md
```

## v1.7.9.1 Issue Linkage and Handoff Principle

v1.7.9.1 extends v1.7.9 AI Harness with formal issue dependency, output handoff, and chain register governance.

All implementation 20_Issues must declare:

```text
Previous Issue Dependency
Required Previous Outputs
Dependency Status
This Issue Outputs
Next Issue Handoff
Issue Chain Register reference
```

All DONE reports must declare:

```text
Handoff to Next Issue
Ready for next issue?
Required Follow-up Before Next Issue
Files / Decisions Next Issue Should Read
Risks Carried Forward
Issue Chain Register updated?
```

The actual project issue dependency map must be maintained in:

```text
12_Projects/[PROJECT]/[PROJECT]_ISSUE_CHAIN_REGISTER.md
```

For MVP01, the active project instance is:

```text
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

This patch does not change product scope. It strengthens traceability and prevents `20_Issues/[PROJECT]/ISSUE-XXX-short-name/` records from becoming isolated work units.

## v1.7.9 AI Harness Execution Principle

v1.7.9 extends v1.7.8 `/goal` and harness-style scope control with AI execution governance.

All AI-assisted implementation must now be controlled by:

```text
1. Constitution
2. Locked Architecture
3. Issue Workpack
4. /goal Execution Brief
5. AI Agent Behavior Rules
6. Selected Agent Skill(s)
7. File Boundary
8. Execution Mode
9. Validation Gate
10. Human Review
```

The active AI Harness behavior rules are:

```text
Think Before Coding
Simplicity First
Surgical Changes
Goal-Driven Execution
```

The active v1.7.9 AI Harness standards are:

```text
STD-DEV-046_AI_Harness_Agent_Behavior_and_Skills_Standard.md
STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
```

v1.7.9 does not unlock additional MVP features. It only strengthens how AI agents are allowed to execute existing approved issue work.

## v1.7.5 to v1.7.8 Change Summary

| Version | Role | What Changed |
|---|---|---|
| `v1.7.5-safe` | Architecture Baseline | Defines MVP01 L1-L5 architecture, Solo / Flow / Command boundary, and Aircon OS vs Optimaks Owner OS separation. |
| `v1.7.6` | Issue Gate | Adds Issue Exit Gate and Debug Containment before moving to the next issue. |
| `v1.7.7` | Change Gate | Adds MVP Flow Change Impact Review and Routing before implementing new workflow / feature / payment / role / status changes. |
| `v1.7.8` | AI Execution Gate | Adds `/goal` Execution Brief and Harness-style scope control for Codex / Antigravity. |

---

## 2. Canonical Document Rule

The canonical constitution is:

```text
01_Constitution/CURRENT_CONSTITUTION.md
```

The `docs/constitution/CURRENT_CONSTITUTION.md` file may exist as a mirror for repo tools, but it must contain the same effective constitution or point back to the canonical source.

AI agents must not choose between duplicate constitution files. If there is a conflict, the canonical source wins.

---

## 3. Constitution Upgrade Policy

The v1.7.9.4 governance upgrade is allowed to be adopted directly because it is a documentation / governance control upgrade.

```text
Documentation / governance: upgrade directly to v1.7.9.4-project-baseline-governance.
Product development: execute by active project baseline and approved issue chain.
```

Product execution order must come from the active project baseline:

```text
12_Projects/[PROJECT]/[PROJECT]_PHASE_AND_ISSUE_BASELINE.md
12_Projects/[PROJECT]/[PROJECT]_ISSUE_CHAIN_REGISTER.md
```

If a project baseline conflicts with the Constitution, the Constitution wins. If a request changes project scope, phase order, issue order, or reserved feature status, it must go through project change control.

---

## 4. AI Agent Entrypoint Rule

All AI implementation tools must first read:

```text
AGENTS.md
```

Then read only the context package required by the assigned issue:

```text
Mini Context
Standard Context
Full Context
```

The controlled standards are:

```text
03_Development_Standard/STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md
03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
```

The active context templates are:

```text
09_Templates/TPL-DEV-023_AI_CONTEXT_MINI.md
09_Templates/TPL-DEV-024_AI_CONTEXT_STANDARD.md
09_Templates/TPL-DEV-025_AI_CONTEXT_FULL.md
```

---

## 5. Active Standards Index Rule

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
Product Architecture Context
Commercial Workflow Context
Client Delivery Context
Governance Context
Strategy / Sales Context
Archive / Reference Context
Examples
```

---

## 6. Core / Template / Module / Plan Boundary Rule

Before changing product behavior, AI tools and founder must classify the change as one of the following:

```text
Core Foundation
Industry Template
Module
Plan Feature Set
Client-specific Configuration
Owner Console Operation
```

Controlled standard:

```text
03_Development_Standard/STD-DEV-039_Core_Template_Module_Plan_Boundary_Standard.md
```

Default rule:

```text
Protect Core.
Extend through modules, feature flags, templates, and configuration first.
Change Core only when multiple modules or plans clearly require the same stable foundation.
```

---

## 7. Commercial Workflow Rule

Payment-related work must be treated as part of the Commercial Workflow System, not as random payment buttons.

Controlled standard:

```text
03_Development_Standard/STD-DEV-040_Commercial_Workflow_PO_Invoice_Payment_and_PDF_Standard.md
```

Commercial workflow includes:

```text
Quote
Purchase Order
Invoice
Payment
Receipt
PDF Generator
Recurring Billing
Refund
Suspension
Tax / Report
Multi-currency readiness
```

No AI tool may change pricing, billing terms, refund logic, suspension logic, tax logic, or payment provider behavior without explicit issue scope.

---

## 8. Optimaks OS Architecture Rule

Optimaks OS is structured as:

```text
Optimaks OS
├─ Core Foundation
├─ Owner Console
├─ Starter Launch System
├─ Growth Workflow System
└─ Pro Automation System
```

Controlled standard:

```text
03_Development_Standard/STD-DEV-041_Optimaks_OS_Product_Architecture_Starter_Growth_Pro_Standard.md
```

The architecture defines product direction. It does not authorize building all layers at once.

---

## 9. Flow-first Issue Planning Rule

No major feature issue should be created before the relevant flow is clear.

Controlled standard:

```text
03_Development_Standard/STD-DEV-042_Flow_First_MVP_and_Issue_Planning_Standard.md
```

Required sequence:

```text
MVP Scope
↓
Flow Index
↓
Flow Diagram
↓
Issue Map
↓
Issue Workpack
↓
AI Execution
↓
DONE Report
```

A large list of 20_Issues must not be generated before the flow index and MVP scope are approved.

---

## 10. Purpose-first Filing Rule

AI-generated files must be filed by purpose first, file extension second.

Controlled standard:

```text
03_Development_Standard/STD-DEV-043_Issue_Workpack_Filing_and_Purpose_First_Archive_Standard.md
```

Default issue folder:

```text
20_Issues/MVP01/ISSUE-XXX-short-name/
├─ ISSUE.md
├─ AI_CONTEXT.md
├─ FLOW_REFERENCE.md
├─ IMPLEMENTATION_NOTES.md
├─ DONE_REPORT.md
├─ FILE_CHANGE_LOG.md
├─ archive/
└─ _needs_review/
```

Formal code must remain in the normal application structure:

```text
app/
src/
components/
lib/
supabase/
docs/
```

Unclear outputs go to:

```text
20_Issues/MVP01/ISSUE-XXX/_needs_review/
```

---

## 11. Active Standards

AI tools and founder execution must follow the active constitution plus the following controlled standards when relevant to the assigned issue:

```text
STD-DEV-032 AI Issue Execution and DONE Report Standard
STD-DEV-033 Plan, Feature Toggle and Template Control Standard
STD-DEV-034 Client Deployment and Environment Provisioning Standard
STD-DEV-035 Batch and Issue Revision Impact Control Standard
STD-DEV-036 Visual Concept to MVP Issue Decomposition Standard
STD-DEV-037 AI Agent Execution Slimming and Context Routing Standard
STD-DEV-038 CI and Automated Validation Gate Standard
Issue Exit Gate and Debug Containment Rule
STD-DEV-039 Core Template Module Plan Boundary Standard
STD-DEV-040 Commercial Workflow PO Invoice Payment and PDF Standard
STD-DEV-041 Optimaks OS Product Architecture Starter Growth Pro Standard
STD-DEV-042 Flow-first MVP and Issue Planning Standard
STD-DEV-043 Issue Workpack Filing and Purpose-first Archive Standard
STD-GOV-001 Constitution Change Control Standard
STD-GOV-002 Constitution Change Level Decision Rule
CLT-009 Client Onboarding and Launch Intake Checklist
```

Older standards may remain in the library for history or reference, but only the active standards index decides what must be followed for execution.

---

## 12. Required AI Tool Behavior

Before starting any issue, Codex / Antigravity / other AI implementation tools must:

```text
1. Read AGENTS.md
2. Read this CURRENT_CONSTITUTION.md
3. Read ACTIVE_STANDARDS_INDEX.md
4. Read the assigned issue workpack
5. Read the required context package: Mini / Standard / Full
6. Read only relevant active standards listed in ACTIVE_STANDARDS_INDEX.md
7. Apply only rules effective for the current issue
8. Respect Allowed Files / Forbidden Files in the issue workpack
9. Record constitution version used in DONE_REPORT.md
10. Record changed files, tests, risks, rollback notes, and merge readiness
```

AI tools must not silently change product scope, pricing plan behavior, client isolation rules, deployment mode, onboarding requirements, production configuration, database policies, billing behavior, refund rules, or secrets handling.

---

## 13. Founder Operating Mode

```text
Founder confirms current MVP Scope
Founder chooses one flow from Flow Index
Founder creates or approves one issue workpack
AI reads AGENTS.md and scoped context package
AI implements only assigned scope
AI writes DONE_REPORT.md with tests, changed files, risks, rollback notes, and constitution version
Founder reviews DONE_REPORT.md
Founder tests main workflow / preview
Founder approves merge
Founder approves production deployment only after checklist and preview validation
```

---

## 14. Product Execution Rule

The architecture may include Starter, Growth, and Pro. The execution priority is:

```text
First: make Starter demo-able, sellable, collectible, and deliverable.
Second: use real customer feedback to define Growth.
Third: productize repeated operational pain into Pro.
Fourth: replicate through industry templates.
```

---


## 15. v1.7.8-safe-clean Operational Governance Gates

This release adds three operational gates on top of the v1.7.5-safe MVP01 architecture baseline.

```text
Gate 1: Issue Exit Gate
Gate 2: Flow Change Impact Review Gate
Gate 3: /goal Execution Gate
```

These gates do not replace the existing One Issue / One Branch / One PR rule, L1-L5 architecture, active standards index, or DONE_REPORT requirement. They make the rules easier to execute during daily MVP01 development.

---

## 16. Gate 1 — Issue Exit Gate and Debug Containment

Before moving to the next issue, the current issue must pass an exit gate.

Required checks:

```text
1. Changed files are within approved issue scope.
2. Forbidden files were not modified.
3. Referenced files, document paths, imports, and links are valid.
4. Required output files exist in the correct folders.
5. DONE_REPORT.md records validation, risks, rollback notes, merge readiness, and constitution version.
6. Errors discovered during this issue are fixed inside the same branch unless formally converted into a follow-up issue.
7. The next issue does not begin until the current issue is passed, blocked, deferred, or converted.
```

Active amendment:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.6_Issue_Exit_Gate_and_Debug_Containment.md
```

---

## 17. Gate 2 — MVP Flow Change Impact Review and Routing

Any new workflow, feature, payment method, role behavior, status change, module change, automation, or reserved-feature unlock request during MVP01 must be classified before implementation.

Allowed routing outcomes:

```text
1. Bug fix inside the current issue
2. Supplemental note only
3. New MVP01 Change Issue
4. Forward-only adoption in the next issue
5. Reserved for MVP02 / MVP03
6. Excluded from current product scope
7. Constitution-level change request required
```

The review must check impact on:

```text
L1 Business Flow
L2 Plan Flow
L3 Role Flow
L4 Status Flow
L5 Module / Template Flow
Database / RLS
Pages / UI
Pricing / Package
Deployment / Environment
Documentation / Issue Map / Workpack
```

Active amendment:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.7_MVP_Flow_Change_Impact_Review_and_Routing.md
```

---

## 18. Gate 3 — /goal Execution Brief and Harness-Style Scope Control

Codex / Antigravity execution should use `/goal` as a compact execution brief.

`/goal` is not a new source of truth.

Priority order:

```text
1. CURRENT_CONSTITUTION.md
2. Locked Architecture / approved roadmap
3. Issue Workpack
4. /goal execution brief
```

If `/goal` conflicts with a higher-priority source, the AI tool must stop and report the conflict instead of silently choosing one.

Standard `/goal` format:

```text
/goal
Complete [MVP / Phase / ISSUE] only.

Context:
- Product:
- MVP:
- Phase:
- Issue:
- Purpose:

Reference Documents:
-

Priority Order:
1. Constitution
2. Locked Architecture
3. Issue Workpack
4. /goal

Success Criteria:
1.
2.
3.

Allowed Scope:
-

Forbidden Scope:
-

Required Output:
-
```

Active amendment:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.8_Goal_Execution_Brief_and_Harness_Scope_Control.md
```

---

## 19. Active Integrated Amendments

The following amendments are active and integrated into v1.7.9-ai-harness:

```text
v1.7.5 — Aircon OS MVP01 L1-L5 Flow Architecture
v1.7.6 — Issue Exit Gate and Debug Containment
v1.7.7 — MVP Flow Change Impact Review and Routing
v1.7.8 — /goal Execution Brief and Harness-Style Scope Control
```

## 20. Compatibility Rule

Existing v1.6.1 issue records and MVP01 Issue 1 work do not need to be rewritten automatically.

v1.7.9-ai-harness applies forward-only unless:

```text
A formal change request identifies affected prior work, or
A future issue depends on correcting an earlier artifact, or
A safety/security/commercial risk requires retroactive correction.
```


---

## v1.7.4-clean Clarification — Product Module vs Development Document Module

The constitution now explicitly separates product modules from development documentation modules.

Social Media is currently classified as a development documentation / future workflow topic, not as an active MVP01 product module. Refer to `STD-DEV-044` before creating any Social Media-related issue.


---

## v1.7.5-safe Active Amendment — Aircon OS MVP01 L1-L5 Flow Architecture

The following amendment is active and must be treated as part of the governing constitution for MVP01 planning and issue creation:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_MVP01_AIRCON_OS_L1_L5_FLOW_ARCHITECTURE_v1.7.5.md
```

Controlled standard:

```text
03_Development_Standard/STD-DEV-045_MVP01_Aircon_OS_L1_L5_Flow_and_Owner_OS_Standard.md
```

Official MVP01 boundary:

```text
MVP01 = Core Foundation + Solo Complete + Flow Basic + Command Reserved + Owner Console Basic
```

Official flow layers:

```text
L1 Business Flow      = Lead → Customer → Booking → Job → Completion → Payment → Review → Reminder → Repeat
L2 Plan Flow          = Solo → Flow → Command
L3 Role Flow          = Optimaks Internal Admin → Owner → Admin → Technician → Customer
L4 Status Flow        = Lead / Customer / Booking / Job / Quote / Invoice / Payment / Review / Maintenance / Notification
L5 Module / Template  = Module Registry / Industry Template / Plan Template / Page Template / Message Template / Document Template / Automation Template
```

No MVP01 implementation issue may be created unless it can identify its related L1, L2, L3, L4, and L5 references, or explicitly state why the layer is not applicable.

---

## v1.7.9 Issue Linkage and Handoff Principle

All implementation 20_Issues must include dependency, output, and handoff traceability.

Every issue must declare:

```text
Previous Issue Dependency
Required Previous Outputs
This Issue Outputs
Next Issue Handoff
Risks Carried Forward
```

Every active project must maintain a project-level issue chain register:

```text
12_Projects/[PROJECT]/[PROJECT]_ISSUE_CHAIN_REGISTER.md
```

For MVP01, the active project instance is:

```text
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

This rule is governed by:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.1_Issue_Linkage_and_Handoff_Governance.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
```

The constitution defines the rule. Actual issue-to-issue dependencies must be stored in the project layer, not hard-coded into the constitution.

---

## v1.7.9.3 External Agency Skill Registry Principle

Optimaks may use external agency-agents skills as optional advisory execution personas under:

```text
22_Skills/
```

External agency skills do not override Optimaks governance.

Priority order:

```text
1. Optimaks Constitution
2. Active constitution amendments
3. Locked Architecture / MVP scope
4. Active development standards
5. Issue Workpack
6. /goal execution brief
7. External agency skill files
```

Every issue using agency skills must declare:

```text
Primary Agency Skill
Secondary Agency Skill
Review Gate Skill
Skill Mode
External Skill File(s) Read
Allowed Use
Forbidden Use
```

External agency skills must not autonomously orchestrate multi-agent workflows, expand scope, advance issues, merge PRs, deploy production changes, or replace founder review.

This rule is governed by:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.3_External_Agency_Skill_Registry.md
03_Development_Standard/STD-DEV-051_External_Agency_Agent_Skill_Integration_Standard.md
22_Skills/OPTIMAKS_SKILL_REGISTRY.md
```
