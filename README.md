# Optimaks Document Library v1.7.9.4 Project Baseline Governance

**Package version:** `v1.7.9.4-project-baseline-governance-completeness-audited`  
**Active constitution version:** `v1.7.9.4-project-baseline-governance`  
**Release name:** Project Baseline Governance + Completeness Audit  
**Effective date:** 2026-05-30  
**Baseline:** `v1.7.9.3-agency-skill-registry` + `v1.7.9.2-layout-normalized-logic-audited`  
**Next planned version:** `v1.7.10 Harness Validation Pack` after 3–5 real issues

---

## 1. What This Version Is

`v1.7.9.4-project-baseline-governance` adds a generic project baseline governance layer to the Optimaks Constitution system.

The core rule is:

```text
Constitution defines how projects are governed.
12_Projects/[PROJECT] defines what a specific project contains.
```

This version keeps the v1.7.9.2 normalized folder layout and the v1.7.9.3 external agency skill registry, then adds required project baseline files for active MVP / project execution.

---

## 2. Version Positioning

```text
v1.7.8   = /goal Scope Harness
v1.7.9   = AI Execution Harness
v1.7.9.1 = Issue Linkage and Handoff Governance Patch
v1.7.9.2 = Layout Normalized / Logic Audited Package Baseline
v1.7.9.3 = External Agency Skill Registry
v1.7.9.4 = Project Baseline Governance
v1.7.10  = Harness Validation / Test Case / Automated Checks Pack after 3–5 issues
```

---

## 3. What v1.7.9.4 Adds

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.4_Project_Baseline_Governance.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
09_Templates/TPL-DEV-041_Project_README_Template.md
09_Templates/TPL-DEV-042_Project_Scope_Baseline_Template.md
09_Templates/TPL-DEV-043_Project_Phase_and_Issue_Baseline_Template.md
09_Templates/TPL-DEV-044_Project_Issue_Chain_Register_Template.md
09_Templates/TPL-DEV-045_Project_Change_Control_Log_Template.md
09_Templates/TPL-DEV-046_AGENTS_MD_Project_Baseline_Governance_Insert.md
21_Patch_Notes/README_v1.7.9.4_PROJECT_BASELINE_GOVERNANCE_APPLY_ORDER.md
```

This completeness-audited package also adds the missing MVP01 project baseline contract files under:

```text
12_Projects/MVP01/
```

---

## 4. Active Primary References

```text
AGENTS.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
03_Development_Standard/STD-DEV-051_External_Agency_Agent_Skill_Integration_Standard.md
12_Projects/MVP01/README_MVP01.md
12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/MVP01_CHANGE_CONTROL_LOG.md
22_Skills/OPTIMAKS_SKILL_REGISTRY.md
```

---

## 5. Project Baseline Rule

Before any project or MVP issue is generated, implemented, or reviewed, AI agents must identify the active project and read its baseline contract.

For MVP01, the required baseline contract is:

```text
12_Projects/MVP01/README_MVP01.md
12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/MVP01_CHANGE_CONTROL_LOG.md
```

AI must not change project scope, phase order, issue dependency, reserved feature status, or issue split / merge decisions without an approved project change-control entry.

---

## 6. Agency Skill Rule

`agency-agents-main` is not the Constitution. It remains an optional external skill/persona library governed by Optimaks Constitution.

```text
22_Skills = optional external skill/persona library
01_Constitution = governing rule
03_Development_Standard = execution standard
20_Issues = where selected skills are applied and validated
```

Do not load the full external skill library unless an issue explicitly requires it.

---

## 7. Current Package Integrity

This package includes regenerated:

```text
00_Admin/FILE_TREE.txt
00_Admin/DOC-INDEX-001_Document_Index.md
00_Admin/manifest.json
00_Admin/V1.7.9.4_COMPLETENESS_AUDIT_REPORT.md
```
