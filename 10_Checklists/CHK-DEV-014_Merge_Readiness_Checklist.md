# CHK-DEV-014 Merge Readiness Checklist

Use this before merging any issue branch.

## Scope

- [ ] Issue objective is completed.
- [ ] Modified files match the issue scope.
- [ ] No unrelated refactor.
- [ ] No duplicate component or layout created unnecessarily.
- [ ] No forbidden files modified.
- [ ] Dependency map was respected.

## Code / Build

- [ ] `git status` reviewed.
- [ ] `git diff` reviewed.
- [ ] Build passes.
- [ ] No obvious TypeScript/import errors.
- [ ] No fatal console errors in target route.

## Security

- [ ] No secrets committed.
- [ ] No `.env.local` committed.
- [ ] No service role key in frontend.
- [ ] No production credential exposed.
- [ ] No real client data added without authorization.

## Data / Auth

- [ ] No unauthorized database schema change.
- [ ] No unauthorized RLS change.
- [ ] No unauthorized auth change.
- [ ] Tenant/workspace boundary not weakened.

## Testing

- [ ] Required testing level identified.
- [ ] Required testing level performed.
- [ ] Testing result documented if needed.

## Deployment

- [ ] Local pass.
- [ ] Preview pass if UI/routing changed.
- [ ] Staging required? If yes, staged before production.
- [ ] Rollback plan available if release-impacting.

## Documentation

- [ ] README updated if needed.
- [ ] CHANGELOG updated if needed.
- [ ] Issue progress log closed or marked complete.
- [ ] Merge readiness report added if required.
