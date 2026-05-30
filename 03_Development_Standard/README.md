# 03_Development_Standard

> **Active Package Note:** This folder belongs to `Optimaks Document Library v1.7.9.4-project-baseline-governance`.  
> v1.7.9.4 adds generic project baseline governance on top of v1.7.9.3 agency skill registry and v1.7.9.2 layout normalization. It does not hard-code a single MVP scope into the Constitution.


Active development, AI collaboration, repo execution, testing, CI, secrets, deployment, plan/template, client workspace, and AI Harness standards for Optimaks.

## Current Active Version

```text
v1.7.9.4-project-baseline-governance = Active Constitution / project baseline governance layer
```

## Daily AI Execution Documents

Use these for normal Codex / Antigravity / Local Agent work:

```text
AGENTS.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md
STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
STD-DEV-046_AI_Harness_Agent_Behavior_and_Skills_Standard.md
STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
STD-DEV-051_External_Agency_Agent_Skill_Integration_Standard.md
```

## v1.7.9 AI Harness Additions

```text
STD-DEV-046 = AI behavior rules + reusable agent skills
STD-DEV-047 = file ownership and change boundary map
STD-DEV-048 = execution mode standard: Read-only Scan / Suggest Patch / Execute on Issue Branch
```

## Context Rule

```text
Do not load the whole document library for every issue.
Use Mini / Standard / Full context according to issue risk.
```

## Harness Rule

Before implementation, AI must declare:

```text
Selected Skill(s)
Execution Mode
Allowed Scope
Forbidden Scope
Assumptions
Validation Plan
```

AI must stop and report before touching Constitution, Locked Architecture, DB schema, RLS policies, Auth logic, production config, environment files, payment / billing logic, or cross-MVP roadmap files unless explicitly authorized by the issue.

## Legacy Rule

Older standards remain in the library for historical reference. Use `01_Constitution/ACTIVE_STANDARDS_INDEX.md` to decide which standards are active for execution.

## v1.7.6–v1.7.8 Operational Governance Notes

Operational governance for issue exit, flow change routing, and /goal execution is recorded in constitution amendments under:

```text
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.6_Issue_Exit_Gate_and_Debug_Containment.md
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.7_MVP_Flow_Change_Impact_Review_and_Routing.md
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.8_Goal_Execution_Brief_and_Harness_Scope_Control.md
```

## v1.7.9.1 Active Standard

```text
STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
```

Use this standard for all implementation 20_Issues to define previous dependencies, required previous outputs, issue handoff, and issue chain register updates.

- `STD-DEV-051_External_Agency_Agent_Skill_Integration_Standard.md` — External agency-agents skill integration and safety standard.


## v1.7.9.4 Active Project Baseline Standard

```text
STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
```

Use this standard before generating, executing, reviewing, splitting, merging, or reordering any project issue.
