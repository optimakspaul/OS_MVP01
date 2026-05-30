# STD-DEV-036 — Visual Concept to MVP Issue Decomposition Standard

**Status:** Active in v1.6.0  
**Applies to:** Screenshots, UI sketches, demo concepts, competitor references, diagrams, hand-drawn flows

---

## 1. Purpose

This standard defines how visual ideas should be converted into executable MVP scope and issue workpacks.

The goal is to avoid turning a visual concept directly into uncontrolled development.

---

## 2. Accepted Inputs

A visual concept may come from:

```text
screenshot
wireframe
hand-drawn diagram
competitor UI reference
workflow map
mockup
slide image
whiteboard sketch
```

---

## 3. Required Decomposition Steps

Before implementation, convert the visual concept into:

```text
1. User roles
2. Business goal
3. Page list
4. Main user flows
5. Button/action list
6. Required data objects
7. Required permissions/RLS
8. Required integrations/API
9. MVP must-have scope
10. Can-wait / post-MVP scope
11. Acceptance criteria
12. Issue list
13. Dependency map
```

---

## 4. MVP Boundary Rule

Do not implement every visual detail in the first issue.

Classify items as:

```text
P0 = required for MVP workflow
P1 = useful for client demo
P2 = can wait
P3 = future automation or polish
```

---

## 5. Issue Creation Rule

Each implementation issue should have:

```text
clear scope
input files / references
affected pages
affected database tables
affected permissions
affected plan/template behavior
test checklist
DONE report requirement
```

---

## 6. Dependency Rule

If a visual concept depends on data model, auth, RLS, workspace, or deployment rules, those dependencies must be implemented first or mocked safely.

Example:

```text
Do not build a client-facing job card page before confirming workspace isolation and role permissions.
```

---

## 7. Output Format

A visual-to-issue decomposition should produce:

```text
VIS-XXX_Visual_Decomposition.md
ISSUE-XXX_Workpack.md
ISSUE-XXX_Codex_or_Antigravity_Prompt.md
optional ASCII dependency map
```

---

## 8. DONE Report Requirement

When an issue is derived from a visual concept, DONE.md must include:

```text
visual reference used
what was implemented
what was intentionally not implemented
MVP/P1/P2 boundary notes
known gaps
next recommended issue
```
