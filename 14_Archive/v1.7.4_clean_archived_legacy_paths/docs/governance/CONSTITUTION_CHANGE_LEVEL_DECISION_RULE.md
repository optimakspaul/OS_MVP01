# STD-GOV-002 Constitution Change Level Decision Rule

**Document Title:** Constitution Change Level Decision Rule  
**Document Code:** STD-GOV-002  
**Version:** v1.5.9  
**Status:** Active  

---

## 1. Purpose

This standard defines how to classify constitution changes as small, operational, safety-related, or architecture-level.

The founder should not need to guess whether a constitution change requires rework, immediate action, or Change Request.

---

## 2. Fast Decision Question

Before changing the constitution, ask:

```text
Does this change affect code, database, routes, workflow, security, production, or MVP scope?
```

If no, it is usually Level 1 or Level 2.  
If yes, it is Level 3 or Level 4.

---

## 3. Level 1 — Minor Process Change

A change is Level 1 if it only affects:

```text
wording
template formatting
checklist layout
documentation clarity
field naming
prompt clarity
```

Examples:

```text
DONE.md adds Constitution Version Used
prompt wording becomes clearer
checklist order changes
documentation path explanation improves
```

Effect:

```text
- Applies from next issue.
- Completed 20_Issues do not need review.
- No Change Request required.
```

---

## 4. Level 2 — Operational Change

A change is Level 2 if it affects how 20_Issues are executed, reported, reviewed, or merged, but does not affect product architecture, database, RLS, routes, or MVP scope.

Examples:

```text
each issue produces only DONE.md instead of multiple reports
PREP-000 is added
branch naming rule changes
PR description format changes
merge readiness check changes
```

Effect:

```text
- Applies from next issue by default.
- Active issue may adopt if low risk.
- Completed 20_Issues do not need rework unless founder decides.
- Must be recorded in constitution changelog.
```

---

## 5. Level 3 — Safety / Security Change

A change is Level 3 if it affects:

```text
secrets
environment variables
service_role key
RLS
auth
client data
real demo data
deployment safety
production access
export safety
```

Examples:

```text
service_role key is forbidden in frontend
.env.local must not be committed
cross-client access must be tested
production deploy requires founder approval
real client data is forbidden in demo data
```

Effect:

```text
- Applies immediately.
- Active 20_Issues must be checked.
- Completed 20_Issues must be reviewed if related.
- Merge may pause until safety check is complete.
```

---

## 6. Level 4 — Architecture / Scope Change

A change is Level 4 if it affects:

```text
system architecture
database schema
RLS model
route structure
workflow logic
MVP scope
package boundary
version roadmap
major feature inclusion/exclusion
```

Examples:

```text
MVP-01 adds Google Calendar
MVP-01 adds technician job card
MVP-01 adds invoice automation
route structure changes from /app/leads to /aircon/leads
client_id model changes to organization_id
RLS model is redesigned
WhatsApp click-to-send changes to WhatsApp Business API
```

Effect:

```text
- Requires Change Request.
- Requires Impact Analysis.
- Requires founder approval.
- May pause development.
- Must define affected 20_Issues, affected documents, and rollback/rework plan.
```

---

## 7. Quick Classification Rule

```text
Change document format = Level 1
Change working process = Level 2
Change safety boundary = Level 3
Change product architecture or scope = Level 4
```

---

## 8. Decision Questions

Ask these five questions:

```text
1. Does this change affect code?
2. Does this change affect database / RLS / auth?
3. Does this change affect route / page map?
4. Does this change affect MVP-01 scope?
5. Does this change affect secrets / client data / production?
```

Classification:

```text
All No = Level 1 or Level 2
Question 5 Yes = Level 3
Question 1–4 Yes = Level 4 or requires impact review
```
