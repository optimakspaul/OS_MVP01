# HARDEN-001 Copy and Scope Risk Register

**Project:** MVP01
**Review Result:** PASS WITH WARNINGS

---

## Risks

| ID | Classification | Risk | Evidence | Mitigation |
|---|---|---|---|---|
| COPY-001 | Important | Internal issue IDs appear in customer/demo-facing workspace copy. | Multiple sections reference ISSUE-012 through ISSUE-018. | Founder demo script should translate these into product flow language; schedule copy hardening. |
| COPY-002 | Important | `/optimaks-os` closeout copy is stale after final checkpoint acceptance. | Page says final checkpoint waits for ISSUE-018 acceptance and merge. | Explain current status verbally; update through an approved UI/copy hardening item. |
| COPY-003 | Important | PayNow placeholder may imply a functional QR. | QR-like visual is shown beside manual payment copy. | State clearly that it is not scannable and no payment integration exists. |
| COPY-004 | Important | "Open workspace preview" can point to the end-customer route. | Sample client link labels do not describe destination. | Use destination-specific labels in later hardening. |
| COPY-005 | Nice-to-have | Repeated warnings are safe but verbose. | Workspace repeats non-persistence limits in most sections. | Consolidate without weakening boundaries. |
| SCOPE-001 | Already acceptable | End-customer page states no save, lead creation, payment processing, or WhatsApp API. | Top demo boundary and summary note. | Retain. |
| SCOPE-002 | Already acceptable | Workspace states static/local state and no backend writes. | Top workspace notice and section boundaries. | Retain. |
| SCOPE-003 | Already acceptable | Optimaks OS Basic explicitly reserves backend, billing, entitlement, deployment, and MVP02 work. | Top boundary and included/reserved cards. | Retain. |
| SCOPE-004 | MVP02 candidate | Real persistence, auth, payment, scheduling, reminder/report automation, and admin backend are not implemented. | Accepted MVP01 scope baseline. | Consider only after separate MVP02 planning/workpack approval. |

---

## Risk Summary

```text
Overpromise risk: Controlled, with presenter guidance required
Static/local-only boundary clarity: Strong
Reserved-scope clarity: Strong
Stale governance copy risk: Important but non-blocking
MVP02 scope leak: None found
```
