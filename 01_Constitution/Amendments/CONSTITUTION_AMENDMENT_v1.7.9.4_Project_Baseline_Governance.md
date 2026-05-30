# CONSTITUTION_AMENDMENT_v1.7.9.4_Project_Baseline_Governance.md

**Document Type:** Constitution Amendment  
**Version:** v1.7.9.4-project-baseline-governance  
**Status:** Proposed / Ready for Integration  
**Scope:** All MVPs, products, projects, phases, issues, and project-level execution baselines  
**Important:** This amendment is generic. It does **not** define MVP01, MVP02, or any single project-specific scope.

---

## 1. Purpose

This amendment establishes a generic governance rule for all Optimaks MVPs and projects:

```text
Every MVP / project must have a project-level baseline contract before implementation execution.
```

The Constitution must remain a reusable governance standard. It must not hard-code the detailed scope, phases, or issue list of any single MVP or project.

Project-specific details must live in the relevant project folder, for example:

```text
12_Projects/[PROJECT]/
```

---

## 2. Principle

The Constitution defines **how projects are governed**.

The project folder defines **what a specific project contains**.

```text
Constitution = universal rules
Development Standards = reusable execution standards
Templates = reusable document structure
Project Folder = concrete MVP / project baseline
```

---

## 3. Required Project Baseline Contract

Every MVP or project must maintain a project-level baseline contract containing at least:

```text
README_[PROJECT].md
[PROJECT]_SCOPE_BASELINE.md
[PROJECT]_PHASE_AND_ISSUE_BASELINE.md
[PROJECT]_ISSUE_CHAIN_REGISTER.md
[PROJECT]_CHANGE_CONTROL_LOG.md
```

A project may use versioned filenames when needed, for example:

```text
[PROJECT]_SCOPE_BASELINE_vX.Y.Z.md
[PROJECT]_PHASE_AND_ISSUE_BASELINE_vX.Y.Z.md
```

---

## 4. What Belongs in the Constitution

The Constitution may define:

```text
- baseline lock rules
- phase / issue change control rules
- issue chain governance
- change routing rules
- AI project baseline reading rules
- project-level source-of-truth hierarchy
- approval gates for phase / issue / scope changes
```

The Constitution must not define:

```text
- the detailed phase list of one project
- the detailed issue list of one project
- project-specific product scope
- project-specific feature inclusion / exclusion lists
- project-specific pricing or packaging details
```

---

## 5. Project Baseline Lock Rule

Once a project baseline is marked as locked, the following cannot be changed directly:

```text
- project definition
- product scope
- included / reserved / excluded feature status
- phase order
- phase meaning
- issue ID
- issue title
- issue dependency chain
- issue merge / split decision
- new phase insertion
- new issue insertion
```

Any such change must go through the project-level change control log.

---

## 6. Universal Change Control Rule

Any request to add, remove, split, merge, or reorder project scope, phases, or issues must follow this sequence:

```text
1. Scope Classification
2. Impact Review
3. Placement Decision
4. Change Control Log Entry
5. Baseline Update, if approved
6. Issue Chain Register Update, if approved
7. Workpack Generation, only after baseline update
```

Placement decisions must classify the request as one of:

```text
- current project existing issue
- current project new issue
- current project patch
- next MVP / next project
- future project
- rejected / not aligned
- constitution / standard change required
```

---

## 7. AI Agent Rule

For any project-related task, AI agents must first identify the active project.

After identifying the active project, AI agents must read the project baseline files before planning or implementation.

AI must not modify project scope, phase order, issue order, issue dependency, or reserved feature status unless the task explicitly invokes the project change control process.

If the request conflicts with the active project baseline, AI must stop and report:

```text
- conflicting baseline item
- affected project / phase / issue
- reason for conflict
- recommended placement decision
- required change control entry
```

---

## 8. Relationship to Existing Governance

This amendment extends but does not replace:

```text
- v1.7.7 MVP Flow Change Impact Review and Routing
- v1.7.8 /goal Execution Brief and Harness Scope Control
- v1.7.9 AI Harness Execution Governance
- v1.7.9.1 Issue Linkage and Handoff Governance
- v1.7.9.3 External Agency Skill Registry
```

Project baseline governance must work together with AI Harness, issue linkage, and change control.

---

## 9. Non-Goal

This amendment does not create or lock MVP01.

MVP01 baseline documents must be created later inside the project layer, for example:

```text
12_Projects/MVP01/
```

This amendment only defines the universal rule that every MVP / project must have a baseline contract.

---

## 10. Final Rule

```text
No MVP or project may be treated as implementation-ready until its project baseline contract exists and is accepted.
```
