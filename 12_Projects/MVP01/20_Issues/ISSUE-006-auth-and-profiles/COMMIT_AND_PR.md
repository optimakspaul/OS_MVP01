# Commit and PR Text - ISSUE-006

## Workpack Commit

```text
docs(issue-006): add auth profiles workpack
```

## Codex Completion Commit

```text
feat(issue-006): add auth profiles foundation
```

## Founder Acceptance Commit

```text
docs(issue-006): record founder acceptance
```

## PR Title

```text
ISSUE-006: Auth and Profiles
```

## PR Description

```md
## Summary

This PR adds the ISSUE-006 Auth and Profiles database foundation for MVP01.

## Scope

- Adds `public.profiles`
- Links profiles to `auth.users(id)`
- Links tenant-bound profiles to `public.workspaces(id)`
- Adds role and status constraints
- Adds minimal profile lookup indexes
- Adds profile updated_at trigger using existing trigger function
- Adds profile model and auth boundary notes
- Updates issue chain register handoff

## Forbidden Scope Confirmed

- No RLS
- No RLS policies
- No Supabase client source code
- No login UI
- No auth provider setup
- No workspace membership table
- No customer portal table
- No business feature table
- No Vercel setup
- No real secrets
- No product scope change

## Handoff

ISSUE-007 may start only after ISSUE-006 execution is completed, founder-accepted, merged, and ISSUE-007 workpack is approved.
```
