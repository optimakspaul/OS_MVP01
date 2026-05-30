# TPL-DEV-031 AI Issue Execution Prompt Template

**Document Code:** TPL-DEV-031\
**Version:** v1.7.9.4-project-baseline-governance\
**Status:** Active  

---

Use this template for every Codex / Antigravity implementation issue.

```text
You are working on the repository:

<REPOSITORY NAME>

Current issue:
ISSUE-XXX — <ISSUE TITLE>

Branch:
feature/issue-xxx-<short-name>

Active project:
<PROJECT>

Required Context Level:
Mini / Standard / Full

Required Context Package:
<CONTEXT-PACKAGE-PATH>

Before implementation, follow this execution order:

1. Read the repo entrypoint / AGENTS.md if present.
2. Read 01_Constitution/CURRENT_CONSTITUTION.md.
3. Read 01_Constitution/ACTIVE_STANDARDS_INDEX.md.
4. Read the required STD-DEV files.
5. Read the required templates.
6. Read the active project baseline files.
7. Read the issue workpack.
8. Read the selected context package based on Required Context Level.
9. Execute only the allowed scope.
10. Produce the DONE report and handoff.

Required STD-DEV files:
- 03_Development_Standard/STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md
- 03_Development_Standard/STD-DEV-046_AI_Harness_Agent_Behavior_and_Skills_Standard.md
- 03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
- 03_Development_Standard/STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
- 03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
- 03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md

Required templates:
- <REQUIRED-TEMPLATE-PATH>

Active project baseline files:
- 12_Projects/<PROJECT>/README_<PROJECT>.md
- 12_Projects/<PROJECT>/<PROJECT>_SCOPE_BASELINE.md
- 12_Projects/<PROJECT>/<PROJECT>_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/<PROJECT>/<PROJECT>_ISSUE_CHAIN_REGISTER.md
- 12_Projects/<PROJECT>/<PROJECT>_CHANGE_CONTROL_LOG.md

Issue workpack:
- <ISSUE-WORKPACK-PATH>

Scope:
<PASTE ISSUE SCOPE>

Do not do:
<PASTE DO-NOT-DO LIST>

Acceptance criteria:
<PASTE ACCEPTANCE CRITERIA>

Implementation rules:
1. Implement only this issue.
2. Do not modify unrelated modules.
3. Do not create future-version features.
4. Use existing components and project structure where possible.
5. Follow the declared Required Context Level, execution mode, allowed scope, and forbidden scope.
6. Stop and report before touching Constitution, locked architecture, DB schema, RLS, auth, production config, environment files, payment / billing logic, or cross-MVP roadmap files unless the issue explicitly authorizes the change.
7. If unsure, choose the smallest safe implementation and record the assumption.
8. Do not create a code zip.
9. Keep code in this branch.

After implementation, you must create or update this file:

20_Issues/<PROJECT>/ISSUE-XXX-short-name/DONE_REPORT.md

The DONE report must include:

# ISSUE-XXX Done Report

## 1. What was done
Explain what was implemented.

## 2. Changed files
List all changed files.

## 3. Tests run
List commands or manual checks performed.

## 4. Acceptance criteria check
Mark each acceptance criteria as:
- Done
- Not done
- Blocked
- Not applicable

## 5. Scope check
Confirm:
- No unrelated modules were changed
- No future-version features were added
- No secrets were committed
- No real client data was used

## 6. Risks / Notes
List risks, assumptions, or known limitations.

## 7. Rollback plan
Explain how to rollback this issue if needed.

## 8. Ready to merge?
Answer:
Yes / No

## 9. Handoff to next issue
Include:
- Next Issue
- Ready for next issue?
- Required Follow-up Before Next Issue
- Files / Decisions Next Issue Should Read
- Risks Carried Forward
- Issue Chain Register updated?

At the end, reply with:
1. Summary
2. Changed files
3. Tests run
4. Location of DONE report
5. Handoff target
6. Ready to merge: Yes / No
```
