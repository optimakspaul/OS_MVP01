# Commit and PR Text - ISSUE-015

## Workpack Commit

```text
docs(issue-015): add payment basic workpack
```

## Completion Commit

```text
feat(issue-015): add payment basic
```

## Founder Acceptance Commit

```text
docs(issue-015): record founder acceptance
```

## PR Title

```text
ISSUE-015: Payment Basic
```

## PR Description

```md
## Summary

This PR completes ISSUE-015 Payment Basic for MVP01.

## Scope

- Adds or enhances Payment Basic for the Aircon / Home Service Starter Template
- Covers:
  `Booking -> Payment -> Admin Setting handoff`
- Uses Starter-depth / manual-assisted flow
- Adds static / demo-only payment UI with local React state only
- Shows selected booking/customer/quote context, cash option, static PayNow QR instruction, payment status, paid/outstanding tracking, customer payment copy, and next step to Admin Setting Basic
- Adds documentation and handoff notes for ISSUE-016 Admin Setting Basic

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
- No real payment gateway
- No PayNow API / QR generation
- No Stripe / HitPay integration
- No invoice generation
- No receipt generation
- No accounting integration
- No GST compliance engine
- No reminder implementation
- No Optimaks OS UI
- No technician portal
- No ISSUE-016 execution

## Handoff

ISSUE-016 may start only after this PR is merged and the ISSUE-016 workpack is approved on its own branch.
```
