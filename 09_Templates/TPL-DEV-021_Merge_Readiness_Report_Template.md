# TPL-DEV-021 Merge Readiness Report Template

File path:

```text
20_Issues/ISSUE-XXX/ISSUE-XXX_MERGE_READINESS_REPORT.md
```

---

# ISSUE-XXX Merge Readiness Report

## Issue

ISSUE-XXX — short description

## Branch

```text
feature/issue-XXX-short-description
```

## Summary of Changes

- ...

## Modified Files

- ...

## Scope Check

- [ ] Changes match issue objective
- [ ] No unrelated refactor
- [ ] No forbidden files modified
- [ ] No unauthorized DB/RLS/auth change

## Testing Summary

Testing level required:

- [ ] Level 0 Docs
- [ ] Level 1 Smoke
- [ ] Level 2 UI Responsive
- [ ] Level 3 Data Flow
- [ ] Level 4 Security / RLS / Auth
- [ ] Level 5 Release Gate

Testing performed:

- ...

Testing not performed:

- ...

## Secret / ENV Safety

- [ ] No secrets committed
- [ ] No `.env.local` committed
- [ ] No service role key exposed
- [ ] No real client data in demo

## Deployment Readiness

- [ ] Local pass
- [ ] Preview pass
- [ ] Staging required
- [ ] Production not affected
- [ ] Rollback plan available

## Merge Decision

- [ ] Ready to merge
- [ ] Needs fix
- [ ] Needs founder review
- [ ] Discard / split issue

## Notes

- ...
