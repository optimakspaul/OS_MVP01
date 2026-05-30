# ACTIVE_STANDARDS_INDEX.md

**Version:** v1.6.1  
**Status:** Active Index  
**Purpose:** Prevent AI tools from treating every library document as active execution context.

---

## 1. Daily AI Coding Context

These documents are active for normal AI-assisted implementation.

| Code | Document | Status | When to Use |
|---|---|---|---|
| ROOT | `AGENTS.md` | Active | Always first read for AI agents |
| CONSTITUTION | `01_Constitution/CURRENT_CONSTITUTION.md` | Active / Canonical | Always |
| STD-DEV-032 | `03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md` | Active | Every implementation issue |
| STD-DEV-037 | `03_Development_Standard/STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md` | Active | Every AI issue to choose context size |
| STD-DEV-038 | `03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md` | Active | Every implementation issue with checks |
| STD-SEC-001 | `03_Development_Standard/STD-SEC-001_Environment_Secrets_and_API_Key_Governance.md` | Active | Any env / key / integration work |
| STD-DEPLOY-001 | `03_Development_Standard/STD-DEPLOY-001_Preview_Staging_Production_Gate_Standard.md` | Active | Any deploy-related work |
| STD-DB-001 | `03_Development_Standard/STD-DB-001_Database_Migration_and_RLS_Change_Control.md` | Active | Any DB / RLS change |

---

## 2. Product / Plan / Client Workspace Context

Use these only when the issue touches plan tiers, templates, client workspace setup, deployment, or onboarding.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-DEV-033 | `03_Development_Standard/STD-DEV-033_Plan_Feature_Toggle_and_Template_Control_Standard.md` | Active | Plan tiers, feature flags, templates |
| STD-DEV-034 | `03_Development_Standard/STD-DEV-034_Client_Deployment_and_Environment_Provisioning_Standard.md` | Active | Client workspace, launch, environment setup |
| CLT-009 | `05_Client_Delivery/CLT-009_Client_Onboarding_and_Launch_Intake_Checklist.md` | Active for client delivery | New client onboarding / launch |

---

## 3. Change / Revision / Recovery Context

Use these when work touches completed 20_Issues, failed 20_Issues, revision impact, rollback, or merge readiness.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-DEV-028 | `03_Development_Standard/STD-DEV-028_Interruption_Recovery_and_WIP_Preservation_Standard.md` | Active as needed | Interrupted AI work |
| STD-DEV-029 | `03_Development_Standard/STD-DEV-029_Rollback_and_Failed_Issue_Recovery_Standard.md` | Active as needed | Failed issue / rollback |
| STD-DEV-030 | `03_Development_Standard/STD-DEV-030_Testing_Level_and_Validation_Standard.md` | Active as needed | Test level selection |
| STD-DEV-031 | `03_Development_Standard/STD-DEV-031_Issue_Size_and_Splitting_Standard.md` | Active as needed | Large issue splitting |
| STD-DEV-035 | `03_Development_Standard/STD-DEV-035_Batch_and_Issue_Revision_Impact_Control_Standard.md` | Active as needed | Existing batch / issue affected by new rule |
| STD-DEV-036 | `03_Development_Standard/STD-DEV-036_Visual_Concept_to_MVP_Issue_Decomposition_Standard.md` | Active as needed | Convert sketch / image / demo idea to issue |

---

## 4. Governance Context

Use these for constitution changes and formal control decisions.

| Code | Document | Status | When to Use |
|---|---|---|---|
| STD-GOV-001 | `04_Governance_Standard/STD-GOV-001_Constitution_Change_Control_Standard.md` | Active | Any constitution change |
| STD-GOV-002 | `04_Governance_Standard/STD-GOV-002_Constitution_Change_Level_Decision_Rule.md` | Active | Decide patch/minor/major impact |

---

## 5. Superseded / Reference-Only Documents

These files remain for history and may be cited for background, but they are not the primary execution rule unless an issue explicitly asks for legacy comparison.

| Code | Status | Current Replacement / Primary Rule |
|---|---|---|
| STD-DEV-015 | Superseded / Reference Only | STD-DEV-020, STD-DEV-032, STD-DEV-037 |
| STD-DEV-018 | Partially Superseded / Reference Only | STD-DEV-020, STD-DEV-037 |
| TPL-DEV-007 | Superseded / Reference Only | TPL-DEV-023/024/025 |

---

## 6. Not Daily AI Coding Context

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
