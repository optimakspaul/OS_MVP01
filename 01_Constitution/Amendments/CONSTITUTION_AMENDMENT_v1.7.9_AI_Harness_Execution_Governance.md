# CONSTITUTION_AMENDMENT_v1.7.9_AI_Harness_Execution_Governance.md

**Amendment Version:** v1.7.9  
**Release Name:** AI Harness Execution Governance  
**Status:** Active  
**Effective Date:** 2026-05-28  
**Applies To:** Optimaks Document Library v1.7.9-ai-harness  
**Supersedes / Extends:** v1.7.8-safe-clean  

---

## 1. Purpose

This amendment upgrades the v1.7.8 `/goal` and harness-style scope control model into a fuller **AI Harness Execution Governance** model.

v1.7.8 controlled **what issue AI should execute**.  
v1.7.9 additionally controls **how AI must behave, which skill it must use, which files it may touch, which execution mode is allowed, and how completion must be proven**.

This amendment integrates two external development principles into the Optimaks constitution:

1. **Matt Pocock-style AI engineering skills**  
   AI agents should use reusable engineering skills instead of ad-hoc vibe coding.

2. **Karpathy-style AI coding discipline**  
   AI agents must think before coding, prefer simplicity, make surgical changes, and execute against verifiable goals.

---

## 2. Constitutional Principle

All AI-assisted implementation must follow the **Optimaks AI Harness Execution Model**.

AI agents must not execute from vague intent, broad product ideas, or standalone prompts without the required context and gates.

Every AI execution must be controlled by:

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

The purpose of AI Harness Execution is to ensure that AI agents do not merely follow documents, but execute inside controlled scope, controlled behavior, controlled file access, controlled execution mode, and controlled validation.

---

## 3. Required AI Behavior Rules

All AI agents must follow these four rules before and during implementation:

### 3.1 Think Before Coding

AI must not silently assume unclear requirements.

AI must stop and report when:

```text
- issue objective is unclear
- scope boundary is unclear
- success criteria are missing
- file boundary is missing
- DB / RLS / Auth impact is possible but not approved
- implementation may affect locked architecture
- implementation may affect future MVP scope
```

### 3.2 Simplicity First

AI must prefer the smallest safe implementation that satisfies the assigned issue.

AI must not:

```text
- add future-version features
- introduce speculative abstractions
- add unrequested flexibility
- create new frameworks unless approved
- expand MVP scope
```

### 3.3 Surgical Changes

AI must modify only files required by the assigned issue and allowed by the file boundary.

AI must not:

```text
- refactor unrelated code
- reformat unrelated files
- touch adjacent modules without issue scope
- modify constitution files unless assigned
- modify DB / RLS / Auth unless assigned
- delete unrelated dead code without approval
```

### 3.4 Goal-Driven Execution

AI must execute against:

```text
- Success Criteria
- Definition of Done
- Required Validation
- Required Output
- DONE Report
```

Completion must be proven through validation evidence, not assumed because code or documents were written.

---

## 4. Required AI Harness Standards

The following standards are active in v1.7.9:

```text
STD-DEV-046_AI_Harness_Agent_Behavior_and_Skills_Standard.md
STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
```

These standards extend but do not replace:

```text
STD-DEV-027_Repo_Workspace_and_AI_Execution_Boundary_Standard.md
STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md
STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
```

---

## 5. Required AI Pre-Implementation Declaration

Before implementation, AI must declare:

```text
Selected Skill(s):
Execution Mode:
Allowed Scope:
Forbidden Scope:
Assumptions:
Risks:
Validation Plan:
```

If any of the above is missing, AI must stop and report the missing item before implementation.

---

## 6. Required AI Post-Implementation Evidence

After implementation, AI must provide:

```text
Changed Files:
Scope Confirmation:
Validation Performed:
Validation Not Performed and Why:
DB / RLS / Auth / Deployment Impact:
Risks / Follow-up:
Merge Readiness:
```

---

## 7. Local Agent Safety

Local AI agents, including Codex App with local providers, Ollama-based workflows, local LLM coding agents, or any repo-scanning agent, must operate under a declared execution mode:

```text
Mode 1: Read-only Scan
Mode 2: Suggest Patch
Mode 3: Execute on Issue Branch
```

Local agents must never modify main directly, commit secrets, edit production configuration without approval, or merge their own work.

---

## 8. Constitutional Effect

v1.7.9 does not change MVP01 product scope.  
v1.7.9 does not unlock Command, billing, invoice, payment, WhatsApp API, advanced automation, or future MVP features.  
v1.7.9 only strengthens AI execution governance.

**v1.7.8 = Scope Harness**  
**v1.7.9 = AI Execution Harness**
