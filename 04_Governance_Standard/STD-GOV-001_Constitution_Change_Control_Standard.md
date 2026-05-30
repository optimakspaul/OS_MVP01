# STD-GOV-001 Constitution Change Control Standard

**Document Title:** Constitution Change Control Standard  
**Document Code:** STD-GOV-001  
**Version:** v1.5.9  
**Status:** Active  

---

## 1. Purpose

The Optimaks development constitution may be updated during MVP development, but every constitution change must be versioned, documented, and assigned an effective scope.

No constitution change may be applied silently.

---

## 2. Required Rule

Every constitution change must create a record under:

```text
docs/governance/constitution-changes/
```

Record file format:

```text
CC-XXX_<short-title>.md
```

---

## 3. Required Record Fields

Every constitution change record must include:

```text
- Change ID
- Title
- Old version
- New version
- Change level
- Reason
- Effective from
- Affected 20_Issues
- Affected documents
- Whether completed 20_Issues need review
- Required template updates
- Founder decision
- Rollback / revert note
```

---

## 4. Current Constitution Pointer

The repo must maintain:

```text
docs/constitution/CURRENT_CONSTITUTION.md
```

AI tools must always read this file before starting an issue.

---

## 5. Issue DONE Report Requirement

Every issue DONE report must include:

```text
## Constitution Version Used

vX.X.X

## Constitution Change Impact

- No impact
- Applied new rule
- Requires follow-up
- Blocked by constitution change
```

---

## 6. Founder Responsibility

The founder decides:

```text
- whether the constitution change is Level 1, 2, 3, or 4
- whether active 20_Issues continue or pause
- whether completed 20_Issues need review
- from which issue the new constitution applies
```

---

## 7. AI Tool Responsibility

Codex / Antigravity must:

```text
- read CURRENT_CONSTITUTION.md before issue execution
- record constitution version used in DONE.md
- not restart work unless required
- apply only relevant new rules to active work
- flag conflict between current issue and new constitution
```

---

## 8. No Silent Change Rule

A constitution change is invalid if it does not state:

```text
effective from
affected 20_Issues
completed issue review requirement
founder decision
```
