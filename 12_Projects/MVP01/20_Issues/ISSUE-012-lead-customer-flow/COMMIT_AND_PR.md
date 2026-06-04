# Commit and PR Text - ISSUE-012

## Workpack Commit

```text
docs(issue-012): add lead customer flow workpack
```

## Completion Commit

```text
feat(issue-012): add lead customer flow
```

## Founder Acceptance Commit

```text
docs(issue-012): record founder acceptance
```

## PR Title

```text
ISSUE-012: Lead / Customer Flow
```

## PR Description

```md
## Summary

This PR completes ISSUE-012 Lead / Customer Flow for MVP01.

## Scope

- Adds or enhances Lead / Customer Flow for the Aircon / Home Service Starter Template
- Covers:
  `Request -> Lead -> Customer -> Quote Estimate`
- Uses Starter-depth / manual-assisted flow
- Adds static / demo-only lead and customer UI with local React state only
- Adds documentation and handoff notes for ISSUE-013 Quote Estimate Basic

## Validation

- `npm run lint`: PASS
- `npm run build`: PASS
- `npm run typecheck`: PASS
- Forbidden-scope audit: PASS
- Secret check: PASS

## Forbidden Scope Confirmed

- No migrations
- No database tables
- No seed data
- No Supabase client writes
- No API routes
- No server actions
- No RLS
- No auth/login
- No quote engine
- No booking implementation
- No payment implementation
- No reminder implementation
- No Optimaks OS UI
- No technician portal
- No ISSUE-013 execution

## Handoff

ISSUE-013 may start only after this PR is merged and the ISSUE-013 workpack is approved on its own branch.
```
