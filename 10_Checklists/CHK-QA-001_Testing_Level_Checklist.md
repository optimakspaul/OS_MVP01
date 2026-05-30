# CHK-QA-001 Testing Level Checklist

Use this to decide testing depth.

## Level 0 — Docs

- [ ] Markdown renders.
- [ ] Paths are correct.
- [ ] Version number correct.

## Level 1 — Smoke

- [ ] App starts.
- [ ] Target route loads.
- [ ] No fatal console error.
- [ ] No broken import.

## Level 2 — UI Responsive

- [ ] Desktop checked.
- [ ] Tablet checked.
- [ ] Mobile checked.
- [ ] Empty state considered.
- [ ] Loading/error state considered.
- [ ] Navigation/CTA works.

## Level 3 — Data Flow

- [ ] Read path tested.
- [ ] Write path tested.
- [ ] Validation tested.
- [ ] Error handling tested.
- [ ] Unauthorized access blocked.
- [ ] Tenant/workspace boundary respected.

## Level 4 — Security / RLS / Auth

- [ ] Unauthenticated access blocked.
- [ ] Authenticated allowed access works.
- [ ] Cross-tenant access blocked.
- [ ] Service role not exposed.
- [ ] RLS not weakened.
- [ ] Founder review completed.

## Level 5 — Release Gate

- [ ] Local pass.
- [ ] Preview pass.
- [ ] Staging pass if needed.
- [ ] No secrets exposed.
- [ ] No real client data exposed.
- [ ] Rollback plan available.
- [ ] Founder approval completed.
