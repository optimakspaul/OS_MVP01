# STD-DEV-048 AI Agent Execution Mode Standard

**Document Code:** STD-DEV-048  
**Version:** v1.7.9  
**Status:** Active  
**Applies To:** Codex, Antigravity, ChatGPT, Gemini, local LLM agents, Ollama-based agents, and any repo-scanning AI tool  

---

## 1. Purpose

This standard defines the allowed execution modes for AI agents.

It prevents AI tools from silently moving from analysis into direct repo modification.

---

## 2. Execution Modes

### Mode 1: Read-only Scan

AI may read files and produce analysis.

AI must not:

```text
- modify files
- create files
- delete files
- rename files
- run destructive commands
- commit or push changes
```

Use for:

```text
repo review
broken link check
architecture review
issue readiness check
file boundary discovery
constitution gap analysis
```

---

### Mode 2: Suggest Patch

AI may propose changes, diffs, file-level recommendations, or draft content.

AI must not directly apply changes unless approved.

Use for:

```text
risky refactor
DB / RLS / Auth review
constitution update proposal
large architecture change
pricing / product strategy change
cross-MVP impact review
```

---

### Mode 3: Execute on Issue Branch

AI may modify files only inside assigned issue scope.

This mode is allowed only when:

```text
- issue workpack exists
- branch exists
- selected skill is declared
- file boundary is declared
- forbidden scope is declared
- validation plan is declared
- execution target is one issue only
```

AI must produce or update DONE report after execution.

---

## 3. Forbidden Execution

AI must never:

```text
- modify main directly
- merge its own changes
- skip human review
- commit secrets
- modify production config without approval
- unlock future features silently
- modify DB / RLS / Auth without explicit issue scope
- delete large file sets without approval
- bypass DONE report
```

---

## 4. Default Mode Rule

If execution mode is not declared, default to:

```text
Mode 1: Read-only Scan
```

If file boundary is unclear, default to:

```text
Mode 2: Suggest Patch
```

If issue scope, branch, and validation are clear, use:

```text
Mode 3: Execute on Issue Branch
```

---

## 5. Local Agent Safety Rule

Local AI agents, including Ollama, local Codex App providers, LM Studio, or other local model workflows, must start in Read-only Scan mode unless the issue explicitly authorizes execution.

Local agents must not:

```text
- directly modify main
- read or expose secrets unnecessarily
- edit `.env` files
- change production config
- auto-commit without review
- run destructive shell commands
```

---

## 6. Required Execution Mode Declaration

Before any AI execution, the agent must declare:

```text
Execution Mode: Read-only Scan / Suggest Patch / Execute on Issue Branch
Reason:
Allowed Files:
Forbidden Files:
Validation Plan:
```

---

## 7. Relationship to Other Standards

This standard extends:

```text
STD-DEV-027 Repo Workspace and AI Execution Boundary Standard
STD-DEV-032 AI Issue Execution and DONE Report Standard
STD-DEV-037 AI Agent Execution Slimming and Context Routing Standard
STD-DEV-046 AI Harness Agent Behavior and Skills Standard
STD-DEV-047 File Ownership and Change Boundary Map
```
