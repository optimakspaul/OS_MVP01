# QA and Security Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-009 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define QA, security, PDPA and legal considerations for development. |

---


## Functional QA

- Function matches issue acceptance criteria.
- Normal flow can complete.
- Error flow has clear messages.
- Form validation works.
- Existing data is not affected.

## UI/UX QA

- Mobile version is usable.
- Desktop version is usable.
- Buttons are easy to click.
- Text is readable.
- Tables do not break.
- Loading / empty / error states are clear.

## Data QA

- Data writes correctly.
- Data reads correctly.
- No duplicate data.
- Migration is safe.
- Backup is considered when needed.

## Security QA

- Permissions are correct.
- Supabase RLS is correct.
- Different users see the right data.
- API does not expose sensitive data.
- Secrets / API keys are not leaked.

## Deployment QA

- Preview works.
- Production works.
- Environment variables are correct.
- Build succeeds.
- Rollback path is clear.

## Documentation QA

- README update checked.
- Handover update checked.
- User guide update checked.
- Changelog update checked.

## PDPA / Legal Considerations

1. Do not expose secret keys in frontend.
2. Do not store customer sensitive data in public repositories.
3. Do not share production credentials unnecessarily.
4. Use Supabase RLS / auth policies to protect data.
5. Client websites should have basic T&C, Privacy Policy, and PDPA Notice.
6. Quotation and agreement should define scope, monthly fee coverage, data ownership, and handover after cancellation.
