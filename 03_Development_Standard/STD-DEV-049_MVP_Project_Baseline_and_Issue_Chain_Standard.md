# STD-DEV-049 MVP Project Baseline and Issue Chain Standard

**Document Code:** STD-DEV-049  
**Status:** Proposed / Active after v1.7.9.4 adoption  
**Applies To:** All Optimaks MVPs, products, projects, phases, issues, issue chains, and project-level baselines  
**Related:** AMEND-v1.7.9.4, STD-DEV-031, STD-DEV-035, STD-DEV-050, STD-DEV-046, STD-DEV-047, STD-DEV-048

---

## 1. Purpose

This standard defines the reusable project baseline system for all Optimaks MVPs and projects.

It ensures that project planning is not kept only in chat, memory, or scattered notes.

Every MVP / project must have a repo-level baseline contract before implementation begins.

---

## 2. Core Principle

```text
Plan in conversation.
Lock in repo.
Execute from baseline.
Change through control log.
```

---

## 3. Required Project Baseline Files

Each project folder must include these files:

```text
README_[PROJECT].md
[PROJECT]_SCOPE_BASELINE.md
[PROJECT]_PHASE_AND_ISSUE_BASELINE.md
[PROJECT]_ISSUE_CHAIN_REGISTER.md
[PROJECT]_CHANGE_CONTROL_LOG.md
```

Recommended folder structure:

```text
12_Projects/
└── [PROJECT]/
    ├── README_[PROJECT].md
    ├── [PROJECT]_SCOPE_BASELINE.md
    ├── [PROJECT]_PHASE_AND_ISSUE_BASELINE.md
    ├── [PROJECT]_ISSUE_CHAIN_REGISTER.md
    ├── [PROJECT]_CHANGE_CONTROL_LOG.md
    └── issues/
        ├── ISSUE-000/
        ├── ISSUE-001/
        └── ...
```

If the repository uses a different project folder number, the same rule applies under the active project folder.

---

## 4. Project README Requirement

`README_[PROJECT].md` must define:

```text
- project identity
- project purpose
- baseline version
- active baseline files
- required reading order
- current phase / issue status
- change control rule
- AI execution rule
```

The README is the project entrypoint.

---

## 5. Scope Baseline Requirement

`[PROJECT]_SCOPE_BASELINE.md` must define:

```text
- project definition
- target user / business objective
- included scope
- reserved scope
- excluded scope
- non-goals
- MVP / plan relationship, if applicable
- feature unlock rules
```

AI must treat reserved and excluded scope as forbidden unless a formal change control decision approves otherwise.

---

## 6. Phase and Issue Baseline Requirement

`[PROJECT]_PHASE_AND_ISSUE_BASELINE.md` must define:

```text
- phase range
- phase names
- phase objectives
- issue range
- issue ID
- issue title
- issue phase
- issue purpose
- issue dependency
- issue output
```

This file is the canonical project phase / issue source of truth.

---

## 7. Issue Chain Register Requirement

`[PROJECT]_ISSUE_CHAIN_REGISTER.md` must track:

```text
- Issue ID
- Phase
- Title
- Status
- Depends On
- Required Previous Outputs
- This Issue Outputs
- Next Issue Handoff
- Branch / PR / Commit evidence
- Warnings / Risks
```

The register must prevent:

```text
- skipped issues
- duplicate issue work
- broken dependency chains
- unclear next issue handoff
- missing DONE report evidence
```

---

## 8. Change Control Log Requirement

`[PROJECT]_CHANGE_CONTROL_LOG.md` must record any project baseline change.

Minimum fields:

```text
Change ID
Date
Request
Request Type
Affected Project / Phase / Issue
Impact Review
Decision
Approved By
Status
Files Updated
Follow-up Required
```

Baseline changes must not be made silently.

---

## 9. Change Classification

Any new requirement must be classified before implementation:

```text
1. Bug fix inside current scope
2. Existing issue clarification
3. Existing issue split
4. New issue inside current project
5. Patch after current project baseline
6. Next MVP / next project
7. Future project / platform
8. Rejected / not aligned
9. Constitution / standard change required
```

AI must not decide implementation placement silently.

---

## 10. AI Agent Project Baseline Rule

Before any project-related planning or implementation, AI must identify:

```text
Active Project:
Baseline Version:
Current Phase:
Current Issue:
Required Project Baseline Files:
```

AI must read the relevant project baseline files before:

```text
- generating an issue workpack
- changing issue order
- changing phase order
- adding a new issue
- splitting or merging an issue
- deciding MVP placement
- unlocking reserved scope
- executing implementation
```

---

## 11. Project Baseline Lock Levels

Project baselines may use these lock levels:

| Lock Level | Meaning | Allowed Change |
|---|---|---|
| Draft | Planning only | Free editing allowed |
| Proposed | Ready for review | Changes allowed with notes |
| Locked v0.1 | Execution baseline | Change control required |
| Accepted | Actively used for execution | Change control required |
| Archived | Historical reference | No execution use |

---

## 12. Issue Numbering Rule

Once an issue baseline is locked:

```text
- do not reuse issue IDs
- do not renumber completed issues
- do not silently insert issues between locked IDs
- do not merge or split issues without change log entry
```

Allowed methods:

```text
- append new issue at the end
- split with suffix only when tightly coupled, for example ISSUE-011A / ISSUE-011B
- move to next MVP / project when outside current baseline
```

---

## 13. Relationship to AI Harness

Project baseline governance must be applied before AI Harness execution.

Execution order:

```text
1. Identify active project
2. Read project baseline
3. Confirm current phase / issue
4. Apply /goal
5. Select agent skill
6. Apply file boundary
7. Select execution mode
8. Execute or stop
```

---

## 14. Non-Goal

This standard does not define the concrete contents of any specific MVP.

It defines how any MVP / project must be structured, locked, changed, and executed.
