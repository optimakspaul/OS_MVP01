# v1.7.9.4 Project Baseline Governance Patch — Apply Order

This patch updates the Constitution / Standards layer only.

It intentionally does **not** add MVP01-specific files.

## Apply Order

1. Add generic constitution amendment:
   - `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.4_Project_Baseline_Governance.md`

2. Add generic development standard:
   - `03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md`

3. Add reusable project baseline templates:
   - `09_Templates/TPL-DEV-041_Project_README_Template.md`
   - `09_Templates/TPL-DEV-042_Project_Scope_Baseline_Template.md`
   - `09_Templates/TPL-DEV-043_Project_Phase_and_Issue_Baseline_Template.md`
   - `09_Templates/TPL-DEV-044_Project_Issue_Chain_Register_Template.md`
   - `09_Templates/TPL-DEV-045_Project_Change_Control_Log_Template.md`
   - `09_Templates/TPL-DEV-046_AGENTS_MD_Project_Baseline_Governance_Insert.md`

4. Update `ACTIVE_STANDARDS_INDEX.md` using:
   - `01_Constitution/ACTIVE_STANDARDS_INDEX_v1.7.9.4_Project_Baseline_Governance_Insert.md`

5. Update `AGENTS.md` using:
   - `09_Templates/TPL-DEV-046_AGENTS_MD_Project_Baseline_Governance_Insert.md`

6. Add release report:
   - `00_Admin/V1.7.9.4_PROJECT_BASELINE_GOVERNANCE_RELEASE_REPORT.md`

## Do Not Do in This Patch

- Do not add MVP01 phase list.
- Do not add MVP01 issue list.
- Do not define Solo / Flow / Command inside the Constitution.
- Do not edit MVP01 project files yet.

## Commit Message

```text
docs: add generic project baseline governance v1.7.9.4
```

## Commit Description

```text
Add generic MVP/project baseline governance standard and templates.

This patch introduces a reusable project baseline contract rule for all MVPs and projects, including scope baseline, phase and issue baseline, issue chain register, and change control log.

It intentionally does not define MVP01-specific scope, phases, or issues. MVP01 baseline files will be added later under the project layer.
```
