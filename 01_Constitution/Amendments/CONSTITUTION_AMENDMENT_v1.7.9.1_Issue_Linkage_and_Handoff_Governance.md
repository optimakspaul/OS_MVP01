# CONSTITUTION_AMENDMENT_v1.7.9.1_Issue_Linkage_and_Handoff_Governance.md

**Amendment Version:** v1.7.9.1-linkage  
**Status:** Active  
**Effective Scope:** Issue dependency, handoff, traceability, merge readiness, MVP issue chain register  
**Extends:** v1.7.9 AI Harness Execution Governance

---

## 1. Purpose

This amendment adds issue-to-issue linkage and handoff governance to the v1.7.9 AI Harness development constitution.

It ensures that every implementation issue records dependency, output, handoff, and merge readiness evidence before the next dependent issue begins.

---

## 2. Principle

```text
No issue should be executed as an isolated task if it depends on previous issue outputs.
```

Each issue must clearly declare:

```text
Previous dependencies
Required previous outputs
This issue outputs
Next issue handoff
Risks carried forward
```

---

## 3. Required Standard

The following standard becomes active:

```text
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
```

---

## 4. Required Project Register

MVP01 must maintain:

```text
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

This register tracks the issue chain, dependency status, PR/branch/commit references, warnings, and handoff notes.

---

## 5. Template Requirement

The following templates must include issue linkage and handoff sections:

```text
TPL-DEV-029_Issue_Workpack_Template.md
TPL-DEV-032_Issue_DONE_Report_Template.md
TPL-DEV-036_Issue_Pack_Master_Prompt_v1.7.9.md
TPL-DEV-039_Issue_Linkage_and_Handoff_Insert.md
```

---

## 6. Merge Rule

A dependent issue must not start or merge if its required previous issue is:

```text
FAIL
BLOCKED
missing DONE Report
missing changed-file summary
missing validation result
missing handoff notes
```

`PASS WITH WARNINGS` may proceed only if warnings are accepted and recorded.

---

## 7. Scope Boundary

This amendment defines the rule. Actual issue dependencies remain in:

```text
Issue Workpacks
DONE Reports
MVP01_ISSUE_CHAIN_REGISTER.md
GitHub Issue / PR links
```

The constitution must not contain every individual issue dependency.


## Patch Positioning

This is a v1.7.9.1 patch. It does not replace v1.7.9 AI Harness and does not reserve or consume v1.7.10.
