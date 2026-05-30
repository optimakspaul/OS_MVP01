# QA Checklist

| Field | Value |
|---|---|
| Document Code | CHK-001 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | General QA checklist before merge and production deployment. |

---


## Functional

- [ ] Feature matches acceptance criteria.
- [ ] Normal flow works.
- [ ] Error flow has messages.
- [ ] Form validation works.
- [ ] Existing data not affected.

## UI/UX

- [ ] Mobile usable.
- [ ] Desktop usable.
- [ ] Buttons clickable.
- [ ] Text readable.
- [ ] Tables/layout not broken.
- [ ] Loading / empty / error states clear.

## Data

- [ ] Data writes correctly.
- [ ] Data reads correctly.
- [ ] No duplicate data.
- [ ] Migration safe.
- [ ] Backup considered.

## Security

- [ ] Permissions correct.
- [ ] RLS/auth checked.
- [ ] No sensitive API exposure.
- [ ] No secret/API key leaked.

## Documentation

- [ ] README checked.
- [ ] Changelog updated.
- [ ] Handover/user guide updated if needed.
