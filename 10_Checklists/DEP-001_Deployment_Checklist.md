# Deployment Checklist

| Field | Value |
|---|---|
| Document Code | CHK-002 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Checklist for preview, staging and production deployment. |

---


## Before Preview

- [ ] Branch created.
- [ ] Code committed.
- [ ] Build passes locally or in platform.
- [ ] Environment variables checked.

## Preview / Staging

- [ ] Preview URL works.
- [ ] Core pages load.
- [ ] Forms work.
- [ ] Login/permissions work if applicable.
- [ ] Mobile test completed.
- [ ] Desktop test completed.

## Before Production

- [ ] Issue acceptance criteria passed.
- [ ] QA checklist completed.
- [ ] Rollback path known.
- [ ] Documentation/changelog checked.

## After Production

- [ ] Production URL works.
- [ ] No obvious UI breakage.
- [ ] Critical flows tested.
- [ ] Post-deploy notes added.
