# CHK-DB-001 Database RLS Change Checklist

Use for database migration, RLS, auth, or tenant isolation changes.

## Scope

- [ ] DB/RLS change has dedicated issue.
- [ ] Change objective clear.
- [ ] Affected tables listed.
- [ ] Affected policies listed.
- [ ] Auth impact listed.
- [ ] Tenant/workspace impact listed.

## Migration

- [ ] Migration file created if required.
- [ ] Rollback note included.
- [ ] Schema docs updated.
- [ ] CHANGELOG updated if behavior changed.

## RLS

- [ ] RLS not weakened.
- [ ] Allowed access tested.
- [ ] Blocked access tested.
- [ ] Cross-tenant access blocked.
- [ ] Unauthenticated access handled.

## Service Role

- [ ] Service role not used in frontend.
- [ ] Privileged logic server-side only.
- [ ] Secrets not exposed.

## Review

- [ ] Founder review completed.
- [ ] AI changes reviewed carefully.
- [ ] Not mixed with unrelated UI issue.
