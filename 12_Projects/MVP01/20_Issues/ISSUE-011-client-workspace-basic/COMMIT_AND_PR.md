# Commit and PR Text - ISSUE-011

## Workpack Commit

```text
docs(issue-011): add client workspace workpack
```

## Completion Commit

```text
feat(issue-011): add client workspace basic
```

## Founder Acceptance Commit

```text
docs(issue-011): record founder acceptance
```

## PR Title

```text
ISSUE-011: Client Workspace Basic
```

## PR Description

```md
## Summary

This PR completes ISSUE-011 Client Workspace Basic for MVP01.

## Scope

- Adds basic client workspace interface for Aircon / Home Service Starter Template
- Covers the workspace flow:
  `Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report`
- Uses Starter-depth / manual-assisted flow
- Adds non-persistent demo UI with local/static state only
- Adds documentation and handoff notes for ISSUE-012 Lead / Customer Flow

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
- No payment gateway
- No WhatsApp API
- No Optimaks OS UI
- No technician portal
- No ISSUE-012 execution

## Handoff

ISSUE-012 may start only after this PR is merged and the ISSUE-012 workpack is approved on its own branch.
```
