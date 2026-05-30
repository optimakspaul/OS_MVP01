# CONSTITUTION_AMENDMENT_v1.7.6 — Issue Exit Gate and Debug Containment Rule

**Version:** v1.7.6  
**Status:** Integrated into v1.7.8-safe-integrated  
**Effective Date:** 2026-05-26  
**Applies To:** MVP01 and all issue-based AI-assisted execution  
**Does Not Replace:** One Issue / One Branch / One PR, DONE Report, CI validation, or existing scope-control standards.

---

## 1. Purpose

This amendment strengthens the existing v1.7.5 issue-scoped execution model by adding a mandatory **Issue Exit Gate**.

The goal is to prevent hidden errors from moving forward into later 20_Issues, especially:

```text
broken document links
wrong file paths
invalid imports
wrong file names
scope leakage
missing DONE reports
unclear validation results
```

---

## 2. Core Rule

Before starting the next issue, the current issue must be marked as one of:

```text
Passed
Blocked
Deferred with explicit reason
Converted into a new follow-up issue
```

An AI tool or founder must not continue into the next implementation issue while the current issue has unresolved scope, link, path, validation, or filing errors.

---

## 3. Required Issue Exit Gate Checklist

Before an issue is considered complete, confirm:

1. Changed files are within the approved issue scope.
2. Forbidden files were not modified.
3. File links, document references, import paths, and referenced names are valid.
4. Required output files exist in the correct folders.
5. DONE_REPORT.md records the constitution version, context level, files changed, validation run, commands not run, risks, rollback notes, and merge readiness.
6. Errors discovered during the issue are fixed inside the same branch, unless formally converted into a follow-up issue.
7. The next issue does not begin until the founder or review gate accepts the exit result.

---

## 4. Relationship to v1.7.5

This amendment does not duplicate the v1.7.5 rule:

```text
One Issue = One Branch = One Pull Request = One DONE_REPORT.md
```

It adds the practical exit criteria required before moving forward.

---

## 5. Founder Interpretation

Use this amendment when:

```text
an issue is nearly done
Codex / Antigravity says implementation is complete
a file path or document link may be wrong
a branch is ready for review
work is about to move to the next issue
```
