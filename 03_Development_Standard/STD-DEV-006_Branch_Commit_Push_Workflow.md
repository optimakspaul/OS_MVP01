# Branch Commit Push Workflow

| Field | Value |
|---|---|
| Document Code | STD-DEV-006 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define branch, commit, push, pull request, merge policy. |

---


## Branch Purpose

Branching is not required for GitHub diff to exist. GitHub can show diffs even without branches. The real purpose of a branch is risk isolation.

## Recommended Branch Names

```text
feature/customer-health-report
fix/mobile-dashboard-layout
doc/update-mobile-workflow
refactor/quotation-calculation
security/review-customer-rls
```

## Commit / Push / Merge

- **Commit**: save a set of changes as a version record.
- **Push**: upload commits to the remote GitHub repository.
- **Merge**: combine a branch into main or production branch.

## Standard Flow

```text
GitHub Issue
     ↓
Create Branch
     ↓
Implement Changes
     ↓
Commit
     ↓
Push
     ↓
Pull Request / Review
     ↓
Preview Deploy
     ↓
QA Pass
     ↓
Merge to main
     ↓
Production Deploy
```

## Rule

Do not develop large features directly on `main`. Small copy changes may be direct when appropriate, but they still require a commit message and issue/version record when relevant.


---

## v1.5.2 Governance Addendum

This branch workflow is strengthened by `STD-DEV-024`, which requires meaningful implementation work to use feature branches and Pull Requests instead of direct edits to `main`.
