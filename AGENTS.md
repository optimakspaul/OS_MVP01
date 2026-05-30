# AGENTS.md

**Optimaks AI Agent Entrypoint**  
**Active Constitution:** v1.7.9.4-project-baseline-governance  
**Purpose:** Give Codex / Antigravity / other AI implementation tools a small, clear starting point with issue, change, /goal, AI Harness execution gates, and optional agency skill selection gates.

---

## 1. Read Order

Before making any code or document change, read in this order:

```text
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. Assigned issue workpack
5. Required context package: Mini / Standard / Full
6. STD-DEV-046 AI Harness Agent Behavior and Skills Standard
7. STD-DEV-047 File Ownership and Change Boundary Map
8. STD-DEV-048 AI Agent Execution Mode Standard
9. STD-DEV-049 MVP Project Baseline and Issue Chain Standard
10. STD-DEV-050 Issue Linkage and Handoff Standard
11. STD-DEV-051 External Agency Agent Skill Integration Standard, only when the issue uses agency skills
12. 22_Skills/OPTIMAKS_SKILL_REGISTRY.md, only when the issue uses agency skills
13. Only the active standards relevant to the issue
```

Do not load the whole document library unless the issue explicitly asks for a full governance review.

Do not load the full `22_Skills/external/agency-agents-main` library unless the issue explicitly requires external skill analysis. Use `22_Skills/OPTIMAKS_SKILL_REGISTRY.md` first, then load only the selected external agent file.

---


## Project Baseline Governance Rule

For any MVP or project-related task, AI agents must first identify the active project.

After identifying the active project, AI agents must read that project's baseline contract before planning, workpack generation, implementation, or review.

Required project baseline files:

1. `README_[PROJECT].md`
2. `[PROJECT]_SCOPE_BASELINE.md`
3. `[PROJECT]_PHASE_AND_ISSUE_BASELINE.md`
4. `[PROJECT]_ISSUE_CHAIN_REGISTER.md`
5. `[PROJECT]_CHANGE_CONTROL_LOG.md`

Default project path pattern:

```text
12_Projects/[PROJECT]/
```

AI must not change project scope, phase order, issue order, issue dependency, reserved feature status, or issue split / merge decisions unless the task explicitly invokes the project change control process.

If a request conflicts with the active project baseline, AI must stop and report the active project, conflicting baseline file, affected phase / issue / scope item, reason for conflict, recommended placement decision, and required change control entry.

AI must not convert a project-specific decision into a Constitution rule. The Constitution defines generic governance only. Project details must remain inside the project folder.

---

## 2. Core Operating Rule

```text
One Issue = One Branch = One Pull Request = One DONE_REPORT.md
```

Implement only the assigned issue.

Do not silently expand scope, refactor unrelated files, redesign pricing, change database policies, alter production settings, modify client data rules, or change billing / refund / suspension logic.

---

## 3. AI Harness Execution Rule

Before implementation, every AI agent must follow the Optimaks AI Harness model.

Before coding, AI must output:

```text
Selected Skill(s):
Execution Mode:
Allowed Scope:
Forbidden Scope:
Assumptions:
Validation Plan:
```

AI must follow these behavior rules:

```text
1. Think Before Coding
2. Simplicity First
3. Surgical Changes
4. Goal-Driven Execution
```

AI must stop and report before touching:

```text
- Constitution
- Locked Architecture
- DB schema
- RLS policies
- Auth logic
- production config
- environment files
- payment / billing logic
- cross-MVP roadmap files
```

Default execution mode is **Read-only Scan** unless an issue workpack, branch, file boundary, and validation plan authorize execution.

---

## 4. Operational Gates

Before and during execution, apply these gates. Each gate is traceable to the integrated v1.7.6–v1.7.8 amendments:

```text
Gate 1: Issue Exit Gate — introduced by v1.7.6
- Before moving to the next issue, confirm changed-file scope, forbidden files, links/paths/imports, DONE_REPORT, risks, rollback, and merge readiness.

Gate 2: Flow Change Impact Review Gate — introduced by v1.7.7
- If a new workflow, feature, payment method, role/status change, module change, automation, or reserved feature appears, stop and classify it before implementation.

Gate 3: /goal Execution Gate — introduced by v1.7.8
- Use /goal as the execution brief only. /goal must not override the constitution, locked architecture, or issue workpack.

Gate 4: AI Harness Execution Gate — introduced by v1.7.9
- Select agent skill, declare execution mode, confirm file boundary, and validate completion evidence.

Gate 5: Agency Skill Selection Gate — introduced by v1.7.9.3
- If external agency skills are used, select only approved skills from 22_Skills, declare skill mode, and prevent external skills from overriding Optimaks governance.

Gate 6: Project Baseline Governance Gate — introduced by v1.7.9.4
- For MVP/project tasks, identify the active project and read its project baseline contract before planning, workpack generation, implementation, or review.
```

If a conflict is detected, stop and report the conflict. Do not resolve it silently.

---

## 5. Inherited v1.7.8 Planning Rule

For new product features, confirm the following exists before coding:

```text
MVP Scope
Flow Index
Flow Reference or Flow Diagram
Issue Map
Issue Workpack
```

If a requested issue does not have a clear flow reference, stop and request a flow clarification in the issue notes instead of guessing a large workflow.

---

## 6. Required Issue Inputs

Every issue should define:

```text
Issue ID
Goal
Related MVP Scope
Related Flow ID
Acceptance Criteria
Allowed Files / Directories
Forbidden Files / Directories
Required Context Level: Mini / Standard / Full
Validation Level
Rollback Notes
Filing / Archive Notes
```

If the issue does not provide Allowed / Forbidden file scope, infer the smallest safe scope and record the assumption in DONE_REPORT.md.

---

## 7. Context Levels

Use the smallest context that can safely complete the work.

```text
Mini Context     = copy/UI/small bug/small component
Standard Context = normal feature/page/workflow implementation
Full Context     = auth/DB/RLS/secrets/deployment/client onboarding/plan toggle/client workspace/payment/commercial workflow
```

Templates:

```text
09_Templates/TPL-DEV-023_AI_CONTEXT_MINI.md
09_Templates/TPL-DEV-024_AI_CONTEXT_STANDARD.md
09_Templates/TPL-DEV-025_AI_CONTEXT_FULL.md
```

---

## 8. Files That Require Extra Care

Do not edit these unless explicitly required by the issue:

```text
.env*
supabase/migrations/*
supabase policies / RLS files
auth / session files
billing / pricing / plan rules
invoice / PO / receipt / refund logic
production deployment config
client data / workspace isolation logic
legal / PDPA terms
```

Never commit real secrets, real client credentials, private keys, or production-only tokens.

---

## 9. Purpose-first Filing Rule

File outputs by purpose first, file extension second.

Formal code belongs in the application structure:

```text
app/
src/
components/
lib/
supabase/
docs/
```

Issue records belong in:

```text
20_Issues/MVP01/ISSUE-XXX-short-name/
```

Unclear AI-generated files belong in:

```text
20_Issues/MVP01/ISSUE-XXX-short-name/_needs_review/
```

Do not invent new top-level folders unless the issue explicitly allows it.

---

## 10. Required Output

Every completed issue must create or update:

```text
20_Issues/MVP01/ISSUE-XXX-short-name/DONE_REPORT.md
```

DONE_REPORT.md must include:

```text
Constitution version used
Context level used
Related Flow ID
Files changed
Acceptance criteria result
Tests / validation run
Secrets check result
Scope check result
Filing / archive result
Risks / limitations
Rollback plan
Merge readiness
```

---

## 11. Validation

Minimum validation for implementation work:

```text
npm run lint, if available
npm run build, if available
npm run test, if available / relevant
secret scan or manual no-secret confirmation
DONE_REPORT.md completed
```

If a command cannot be run, explain why in DONE_REPORT.md.

---

## 12. Production Rule

AI agents may prepare deployment configuration, but production deployment requires explicit founder approval.

Preview / staging is allowed only when required by the issue and must be documented.

---

## v1.7.4-clean Instruction — Do Not Confuse Documentation Topics with Product Modules

Social Media documents, marketing notes, content checklists, or future workflow notes are not automatically product modules.

Before generating code for any Social Media-related feature, verify that the current issue is an approved coding issue and that the feature is included in the active MVP scope. If not, treat the task as documentation, template, GTM, or roadmap work only.

Refer to `03_Development_Standard/STD-DEV-044_Development_Document_Module_Boundary_and_Social_Media_Documentation_Standard.md`.


## v1.7.5-safe Instruction — MVP01 L1-L5 Flow Mapping Required

For any MVP01 Aircon OS issue, verify the issue maps to:

```text
L1 Business Flow
L2 Plan Flow
L3 Role Flow
L4 Status Flow
L5 Module / Template Flow
```

Use:

```text
03_Development_Standard/STD-DEV-045_MVP01_Aircon_OS_L1_L5_Flow_and_Owner_OS_Standard.md
13_Roadmap/MVP01_AIRCON_OS_L1_L5_FLOW_ARCHITECTURE_v1.7.5.md
```

MVP01 scope is:

```text
Core Foundation + Solo Complete + Flow Basic + Command Reserved + Owner Console Basic
```

Do not implement full Command, advanced payment automation, WhatsApp API full automation, PDF automation, refund/suspension logic, or social media automation unless a specific approved issue says so.

---

## 13. /goal Execution Brief Format

Use this compact task wrapper when asking Codex / Antigravity to execute a specific issue:

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

Priority order for conflicts:

```text
1. CURRENT_CONSTITUTION.md
2. Locked Architecture / approved roadmap
3. Issue Workpack
4. /goal
```

If the /goal conflicts with a higher-priority source, stop and report the conflict.

---

## 14. Issue Linkage and Handoff Rule

Before starting an implementation issue, AI agents must check issue dependency and handoff status.

Required references:

```text
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

AI must not start a dependent issue when the previous required issue is FAIL / BLOCKED / missing DONE Report / missing validation result / missing handoff notes.

Each issue workpack must include Issue Linkage. Each DONE report must include Handoff to Next Issue.

---

## 15. External Agency Skill Rule

External agency skills live in:

```text
22_Skills/
```

They are optional advisory skill personas only. They must not override the constitution, active standards, issue workpack, /goal, file boundary, or founder review.

If an issue uses agency skills, the AI must declare:

```text
Primary Agency Skill:
Secondary Agency Skill:
Review Gate Skill:
Skill Mode:
External Skill File(s) Read:
Allowed Use:
Forbidden Use:
```

If an external skill suggests autonomous orchestration, scope expansion, production release, next-issue advancement, or merge without approval, stop and report the conflict.
