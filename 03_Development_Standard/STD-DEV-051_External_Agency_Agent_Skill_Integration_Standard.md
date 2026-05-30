# STD-DEV-051 External Agency Agent Skill Integration Standard

**Code:** STD-DEV-051  
**Version:** v1.7.9.3-agency-skill-registry  
**Status:** Active  
**Purpose:** Define how Optimaks AI Harness may use the external `agency-agents-main` skill library safely.

---

## 1. Scope

This standard applies when an Optimaks issue, workpack, prompt, review, or handoff uses an external agency agent from:

```text
22_Skills/external/agency-agents-main/
```

---

## 2. Core rule

External agency agents are advisory skill personas.

They help choose how to think about a task, but they do not decide what task should be done.

```text
Constitution decides rules.
Issue Workpack decides scope.
Agency Skill helps execution quality.
DONE Report proves completion.
```

---

## 3. Required selection process

Before using an external agency skill, the issue must identify:

```text
1. Issue type
2. Primary Agency Skill
3. Secondary Agency Skill, if needed
4. Review Gate Skill, if needed
5. Skill Mode
6. Reason for selection
7. External skill file path(s)
```

Use:

```text
22_Skills/OPTIMAKS_SKILL_REGISTRY.md
22_Skills/OPTIMAKS_APPROVED_AGENCY_AGENT_MAP.md
```

---

## 4. Skill modes

Allowed skill modes:

| Mode | Meaning | Allowed for |
|---|---|---|
| Read-only Scan | Read and advise only | unclear issue, review, onboarding |
| Advisory | Suggest approach/checklist only | planning, review, product/GTM docs |
| Implementation Support | Guide coding within approved file boundary | normal coding issue |
| Review Gate | Check output and risks before PASS | security, DB, API, PR review |
| Documentation Support | Improve README, handoff, report quality | docs and DONE reports |

Forbidden modes:

```text
Autonomous multi-agent workflow
Full pipeline execution
Automatic merge
Automatic next-issue advancement
Production release without explicit approval
```

---

## 5. Loading rule

Do not load the full external library by default.

Allowed loading order:

```text
1. Read AGENTS.md
2. Read CURRENT_CONSTITUTION.md
3. Read ACTIVE_STANDARDS_INDEX.md
4. Read this standard
5. Read OPTIMAKS_SKILL_REGISTRY.md
6. Read only the specific selected external agent file(s)
```

If the issue requires comparing multiple agents, perform a read-only scan first and record why each candidate was selected or rejected.

---

## 6. Required issue workpack insert

Use:

```text
09_Templates/TPL-DEV-040_Agency_Skill_Selection_Insert.md
```

The selected skill section must be part of the issue pack if agency skills are used.

---

## 7. DONE report requirement

When an agency skill is used, the DONE report must include:

```text
Agency Skill(s) Used:
External Skill File(s) Read:
Skill Mode Used:
How the Skill Affected the Work:
Any Skill Instruction Rejected Due to Constitution Conflict:
Review Gate Result:
```

---

## 8. Conflict handling

If an external agent suggests behavior that conflicts with Optimaks rules, the AI agent must stop and report:

```text
Conflict source
Optimaks rule that overrides it
Suggested safe alternative
Whether the issue can continue
```

Do not silently resolve the conflict.

---

## 9. Restricted agent handling

Restricted external agents may only be used in Read-only Scan or Advisory mode unless explicitly approved by a future amendment.

Restricted examples:

```text
specialized agents orchestrator
rapid prototyper
autonomous optimization architect
```

---

## 10. Validation

An issue using agency skills is not complete unless:

```text
Selected skill(s) are declared
External skill file(s) are listed
Allowed/forbidden use is clear
No external skill overrides constitution
Review gate result is documented
DONE report includes agency skill usage notes
```
