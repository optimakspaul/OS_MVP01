# CONSTITUTION_AMENDMENT_v1.7.8 — /goal Execution Brief and Harness-Style Scope Control Rule

**Version:** v1.7.8  
**Status:** Active in v1.7.8-safe-integrated  
**Effective Date:** 2026-05-26  
**Applies To:** Codex, Antigravity, and other AI-assisted execution tools  
**Does Not Replace:** CURRENT_CONSTITUTION.md, AGENTS.md, Locked Architecture, or Issue Workpack.

---

## 1. Purpose

This amendment introduces the `/goal` execution brief.

`/goal` is a compact task wrapper that translates the active constitution, locked architecture, and issue workpack into a clear execution instruction for AI tools.

It prevents:

```text
AI scope expansion
silent architecture changes
unapproved feature unlocks
wrong output format
unfinished validation
conflicting instructions being resolved silently
```

---

## 2. Core Rule

`/goal` is not a new source of truth.

The priority order is:

```text
1. CURRENT_CONSTITUTION.md
2. Locked Architecture / approved roadmap
3. Issue Workpack
4. /goal execution brief
```

If `/goal` conflicts with a higher-priority source, the AI tool must stop and report the conflict.

---

## 3. Standard /goal Format

```text
/goal
Complete [MVP / Phase / ISSUE] only.

Context:
- Product:
- MVP:
- Phase:
- Issue:
- Purpose:

Reference Documents:
-

Priority Order:
1. Constitution
2. Locked Architecture
3. Issue Workpack
4. /goal

Success Criteria:
1.
2.
3.

Allowed Scope:
-

Forbidden Scope:
-

Required Output:
-
```

---

## 4. Harness-Style Interpretation

The AI tool works inside a controlled harness:

```text
The constitution defines the law.
The locked architecture defines the approved product boundary.
The issue workpack defines the assigned work.
The /goal brief defines the immediate execution task.
```

The AI tool must not freely explore or redesign beyond that harness.

---

## 5. Relationship to v1.7.5

v1.7.5 already contains AI execution standards, required issue inputs, context routing, and forbidden scope rules.

This amendment packages those rules into a reusable execution brief for day-to-day Codex / Antigravity work.
