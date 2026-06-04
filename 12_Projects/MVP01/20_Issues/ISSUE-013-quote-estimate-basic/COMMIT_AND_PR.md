# Commit and PR Text - ISSUE-013

## Workpack Commit

```text
docs(issue-013): add quote estimate basic workpack
```

## Completion Commit

```text
feat(issue-013): add quote estimate basic
```

## Founder Acceptance Commit

```text
docs(issue-013): record founder acceptance
```

## PR Title

```text
ISSUE-013: Quote Estimate Basic
```

## PR Description

```md
## Summary

This PR completes ISSUE-013 Quote Estimate Basic for MVP01.

## Scope

- Adds or enhances Quote Estimate Basic for the Aircon / Home Service Starter Template
- Covers:
  `Lead / Customer -> Quote Estimate -> Booking`
- Uses Starter-depth / manual-assisted flow
- Adds static / demo-only quote estimate UI with local React state only
- Shows service items, estimate range, discount preview, GST note, quote status, and next step to booking
- Adds documentation and handoff notes for ISSUE-014 Booking Basic

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
- No real quote engine
- No invoice generation
- No payment gateway
- No PDF generation
- No booking implementation
- No reminder implementation
- No Optimaks OS UI
- No technician portal
- No ISSUE-014 execution

## Handoff

ISSUE-014 may start only after this PR is merged and the ISSUE-014 workpack is approved on its own branch.
```
