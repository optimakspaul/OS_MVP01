# CHK-DEPLOY-001 Deployment Gate Checklist

Use before promoting from local to preview, preview to staging, or staging to production.

## Local to Preview

- [ ] App starts locally.
- [ ] Target route works.
- [ ] Branch pushed.
- [ ] No obvious build error.

## Preview to Staging

- [ ] Acceptance checklist passed.
- [ ] No secret exposure.
- [ ] No real client data exposure.
- [ ] Major flows tested.
- [ ] Founder reviewed preview.

## Staging to Production

- [ ] Founder explicitly approved.
- [ ] Rollback plan available.
- [ ] Environment variables checked.
- [ ] No unresolved P0/P1 bugs.
- [ ] Production checklist passed.
- [ ] CHANGELOG updated.

## Production Restrictions

- [ ] AI did not directly change production env.
- [ ] No unreviewed branch deployed to production.
- [ ] No preview URL treated as production.
