# ACTIVE_STANDARDS_INDEX.md

**Version:** v1.7.9.4-project-baseline-governance  
**Status:** Active Index  
**Purpose:** Prevent AI tools from treating every library document as active execution context.

---

## 1. Daily AI Coding Context

These documents are active for normal AI-assisted implementation.

| Code | Document | Status | When to Use |
|---|---|---|---|
| ROOT | `AGENTS.md` | Active | Always first read for AI agents |
| CONSTITUTION | `01_Constitution/CURRENT_CONSTITUTION.md` | Active / Canonical | Always |
| AMEND-v1.7.6 | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.6_Issue_Exit_Gate_and_Debug_Containment.md` | Active | Issue completion, debug containment, next-issue readiness |
| AMEND-v1.7.8 | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.8_Goal_Execution_Brief_and_Harness_Scope_Control.md` | Active | Codex / Antigravity execution briefs |
| AMEND-v1.7.9 | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9_AI_Harness_Execution_Governance.md` | Active | AI harness execution governance |
| AMEND-v1.7.9.4-project-baseline | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.4_Project_Baseline_Governance.md` | Active | Generic project baseline governance; applies to all MVPs and projects |
| STD-DEV-049 | `03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md` | Active | Every MVP / project baseline, phase / issue map, issue chain, and change-control decision |
| STD-DEV-046 | `03_Development_Standard/STD-DEV-046_AI_Harness_Agent_Behavior_and_Skills_Standard.md` | Active | Every AI issue; defines behavior rules and selected agent skills |
| STD-DEV-047 | `03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md` | Active | Every issue that modifies repo files |
| STD-DEV-048 | `03_Development_Standard/STD-DEV-048_AI_Agent_Execution_Mode_Standard.md` | Active | Every Codex / Antigravity / Local Agent execution |
| STD-DEV-032 | `03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md` | Active | Every implementation issue |
| STD-DEV-037 | `03_Development_Standard/STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md` | Active | Every AI issue to choose context size |
| STD-DEV-038 | `03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md` | Active | Every implementation issue with checks |
| STD-SEC-001 | `03_Development_Standard/STD-SEC-001_Environment_Secrets_and_API_Key_Governance.md` | Active | Any env / key / integration work |
| STD-DEPLOY-001 | `03_Development_Standard/STD-DEPLOY-001_Preview_Staging_Production_Gate_Standard.md` | Active | Any deploy-related work |
| STD-DB-001 | `03_Development_Standard/STD-DB-001_Database_Migration_and_RLS_Change_Control.md` | Active | Any DB / RLS change |
| STD-DEV-051 | `03_Development_Standard/STD-DEV-051_External_Agency_Agent_Skill_Integration_Standard.md` | Active | Issues that use external agency skills from 22_Skills |

---

## 2. Product Architecture / Core Boundary Context

Use these when the issue touches Core, modules, templates, plan tiers, client workspace setup, deployment, onboarding, or product architecture.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-DEV-033 | `03_Development_Standard/STD-DEV-033_Plan_Feature_Toggle_and_Template_Control_Standard.md` | Active | Plan tiers, feature flags, templates |
| STD-DEV-034 | `03_Development_Standard/STD-DEV-034_Client_Deployment_and_Environment_Provisioning_Standard.md` | Active | Client workspace, launch, environment setup |
| STD-DEV-039 | `03_Development_Standard/STD-DEV-039_Core_Template_Module_Plan_Boundary_Standard.md` | Active | Core, template, module, plan boundary decisions |
| STD-DEV-041 | `03_Development_Standard/STD-DEV-041_Optimaks_OS_Product_Architecture_Starter_Growth_Pro_Standard.md` | Active / Legacy naming reference | Optimaks OS architecture and Starter/Growth/Pro scope |
| STD-DEV-045 | `03_Development_Standard/STD-DEV-045_MVP01_Aircon_OS_L1_L5_Flow_and_Owner_OS_Standard.md` | Active for MVP01 only / Project-specific reference | MVP01 Aircon OS L1-L5 flow mapping, Solo/Flow/Command, Owner OS boundary; do not apply as universal rule to non-MVP01 projects |
| CLT-009 | `05_Client_Delivery/CLT-009_Client_Onboarding_and_Launch_Intake_Checklist.md` | Active for client delivery | New client onboarding / launch |

---

## 3. Commercial Workflow Context

Use this when the issue touches pricing, quote, PO, invoice, receipt, payment, recurring billing, refund, auto-suspension, PDF generation, tax report, or multi-currency behavior.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-DEV-040 | `03_Development_Standard/STD-DEV-040_Commercial_Workflow_PO_Invoice_Payment_and_PDF_Standard.md` | Active | Commercial workflow, billing, invoice, PO, PDF, payment, refund, suspension |
| LEG-001 | `06_Legal_Commercial/LEG-001_Quotation_Template.md` | Reference / template | Quote format |
| LEG-003 | `06_Legal_Commercial/LEG-003_Payment_Terms_Policy.md` | Reference / policy | Payment terms |

---

## 4. Flow-first Planning Context

Use these before creating implementation 20_Issues for a product flow.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-DEV-036 | `03_Development_Standard/STD-DEV-036_Visual_Concept_to_MVP_Issue_Decomposition_Standard.md` | Active as needed | Convert sketch / image / demo idea to issue |
| STD-DEV-042 | `03_Development_Standard/STD-DEV-042_Flow_First_MVP_and_Issue_Planning_Standard.md` | Active | MVP Scope, Flow Index, Flow Diagram, Issue Map |
| TPL-DEV-026 | `09_Templates/TPL-DEV-026_MVP_Scope_Template.md` | Active template | Define MVP scope |
| TPL-DEV-027 | `09_Templates/TPL-DEV-027_Flow_Index_Template.md` | Active template | Define flow list and priority |
| TPL-DEV-028 | `09_Templates/TPL-DEV-028_Issue_Map_Template.md` | Active template | Map flows to 20_Issues |

---

## 5. Issue Filing / Archive Context

Use these for issue folder structure, generated files, DONE reports, file change logs, and unclear AI-generated outputs.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-DEV-043 | `03_Development_Standard/STD-DEV-043_Issue_Workpack_Filing_and_Purpose_First_Archive_Standard.md` | Active | Issue workpack filing, archive, _needs_review |
| TPL-DEV-029 | `09_Templates/TPL-DEV-029_Issue_Workpack_Template.md` | Active template | Create issue workpack |
| TPL-DEV-030 | `09_Templates/TPL-DEV-030_Purpose_First_Filing_Rule_Insert.md` | Active template | Insert filing rule into 20_Issues/prompts |

---

## 6. Change / Revision / Recovery Context

Use these when work touches completed 20_Issues, failed 20_Issues, revision impact, rollback, or merge readiness.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-DEV-028 | `03_Development_Standard/STD-DEV-028_Interruption_Recovery_and_WIP_Preservation_Standard.md` | Active as needed | Interrupted AI work |
| STD-DEV-029 | `03_Development_Standard/STD-DEV-029_Rollback_and_Failed_Issue_Recovery_Standard.md` | Active as needed | Failed issue / rollback |
| STD-DEV-030 | `03_Development_Standard/STD-DEV-030_Testing_Level_and_Validation_Standard.md` | Active as needed | Test level selection |
| STD-DEV-031 | `03_Development_Standard/STD-DEV-031_Issue_Size_and_Splitting_Standard.md` | Active as needed | Large issue splitting |
| STD-DEV-035 | `03_Development_Standard/STD-DEV-035_Batch_and_Issue_Revision_Impact_Control_Standard.md` | Active as needed | Existing batch / issue affected by new rule |
| AMEND-v1.7.7 | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.7_MVP_Flow_Change_Impact_Review_and_Routing.md` | Active | Mid-MVP flow/feature/payment/role/status changes |

---

## 7. Governance Context

Use these for constitution changes and formal control decisions.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-GOV-001 | `04_Governance_Standard/STD-GOV-001_Constitution_Change_Control_Standard.md` | Active | Any constitution change |
| STD-GOV-002 | `04_Governance_Standard/STD-GOV-002_Constitution_Change_Level_Decision_Rule.md` | Active | Decide patch/minor/major impact |

---

## 8. Superseded / Reference-Only Documents

These files remain for history and may be cited for background, but they are not the primary execution rule unless an issue explicitly asks for legacy comparison.

| Code | Status | Current Replacement / Primary Rule |
|---|---|---|
| STD-DEV-015 | Superseded / Reference Only | STD-DEV-020, STD-DEV-032, STD-DEV-037 |
| STD-DEV-018 | Partially Superseded / Reference Only | STD-DEV-020, STD-DEV-037 |
| TPL-DEV-007 | Superseded / Reference Only | TPL-DEV-023/024/025 |

---

## 9. Not Daily AI Coding Context

The following folders are important but must not be loaded by default for normal coding 20_Issues:

```text
07_ISO_Ready
08_Grant_Ready
15_Strategy
16_Product_Strategy
17_Sales_GTM
18_Partner_Governance
99_Examples
14_Archive
00_Admin historical files
```

Use them only when the issue explicitly involves strategy, sales, ISO/grant readiness, partner governance, examples, or historical review.


## v1.7.4-clean Active Additions

- `STD-DEV-044` — Development Document Module Boundary and Social Media Documentation Standard


## v1.7.5-safe Active Additions

- `CONSTITUTION_AMENDMENT_MVP01_AIRCON_OS_L1_L5_FLOW_ARCHITECTURE_v1.7.5` — Active constitution amendment for Aircon OS MVP01.
- `STD-DEV-045` — MVP01 Aircon OS L1-L5 Flow and Owner OS Standard. Active for MVP01 only / project-specific reference, not a universal rule for all projects.
- `MVP01_AIRCON_OS_L1_L5_FLOW_ARCHITECTURE_v1.7.5.md` — Active roadmap planning reference.


## v1.7.8-safe-clean Active Additions

- `CONSTITUTION_AMENDMENT_v1.7.6_Issue_Exit_Gate_and_Debug_Containment.md` — Active amendment for issue exit validation and debug containment.
- `CONSTITUTION_AMENDMENT_v1.7.7_MVP_Flow_Change_Impact_Review_and_Routing.md` — Active amendment for MVP flow change classification and routing.
- `CONSTITUTION_AMENDMENT_v1.7.8_Goal_Execution_Brief_and_Harness_Scope_Control.md` — Active amendment for /goal execution brief and harness-style scope control.

## v1.7.9.1 Issue Linkage Active Additions

| Code | Document | Status | When to Use |
|---|---|---|---|
| AMEND-v1.7.9.1-linkage | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.1_Issue_Linkage_and_Handoff_Governance.md` | Active | Issue dependency, handoff, chain register, and merge dependency governance |
| STD-DEV-050 | `03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md` | Active | Every issue workpack, DONE report, issue chain register, PR, and merge dependency review |
| TPL-DEV-039 | `09_Templates/TPL-DEV-039_Issue_Linkage_and_Handoff_Insert.md` | Active | Template insert for Workpack linkage and DONE handoff sections |

## v1.7.9.3 Agency Skill Registry Active Additions

| Code | Document | Status | When to Use |
|---|---|---|---|
| AMEND-v1.7.9.3-skills | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.3_External_Agency_Skill_Registry.md` | Active | External agency skill governance |
| STD-DEV-051 | `03_Development_Standard/STD-DEV-051_External_Agency_Agent_Skill_Integration_Standard.md` | Active | Any issue using external agency skills |
| TPL-DEV-040 | `09_Templates/TPL-DEV-040_Agency_Skill_Selection_Insert.md` | Active | Workpack / prompt / DONE insert for agency skill use |
| SKILL-REGISTRY | `22_Skills/OPTIMAKS_SKILL_REGISTRY.md` | Active controlled registry | Selecting approved external skills |
| SKILL-MAP | `22_Skills/OPTIMAKS_APPROVED_AGENCY_AGENT_MAP.md` | Active mapping | Mapping issue types to selected agency skills |

## v1.7.9.4 Project Baseline Governance Active Additions

| Code | Document | Status | When to Use |
|---|---|---|---|
| AMEND-v1.7.9.4-project-baseline | `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.4_Project_Baseline_Governance.md` | Active | Generic project baseline governance; applies to all MVPs and projects |
| STD-DEV-049 | `03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md` | Active | Project baseline, phase / issue baseline, issue chain, and change-control governance |
| TPL-DEV-041 | `09_Templates/TPL-DEV-041_Project_README_Template.md` | Active template | Create project README entrypoint |
| TPL-DEV-042 | `09_Templates/TPL-DEV-042_Project_Scope_Baseline_Template.md` | Active template | Create project scope baseline |
| TPL-DEV-043 | `09_Templates/TPL-DEV-043_Project_Phase_and_Issue_Baseline_Template.md` | Active template | Create project phase and issue baseline |
| TPL-DEV-044 | `09_Templates/TPL-DEV-044_Project_Issue_Chain_Register_Template.md` | Active template | Create project issue chain register |
| TPL-DEV-045 | `09_Templates/TPL-DEV-045_Project_Change_Control_Log_Template.md` | Active template | Create project change control log |
| TPL-DEV-046 | `09_Templates/TPL-DEV-046_AGENTS_MD_Project_Baseline_Governance_Insert.md` | Active insert | Insert generic project baseline rule into AGENTS.md |

Important: v1.7.9.4 does not define MVP01. It only defines the universal governance pattern for all MVPs and projects. For MVP01 execution, `12_Projects/MVP01/*` is the primary source of truth. `STD-DEV-045` remains a project-specific architectural reference only.
