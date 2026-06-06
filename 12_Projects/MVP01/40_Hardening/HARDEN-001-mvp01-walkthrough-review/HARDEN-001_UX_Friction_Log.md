# HARDEN-001 UX Friction Log

**Project:** MVP01
**Review Result:** PASS WITH WARNINGS

---

## Findings

| ID | Route | Classification | Finding | Demo Impact | Recommendation |
|---|---|---|---|---|---|
| UX-001 | All routes | Important | No global or guided navigation connects the three demo routes. | Presenter must type URLs or use browser history. | Add a future approved demo navigation hardening item. |
| UX-002 | `/workspace` | Important | The workspace is a very long single page with no anchor menu, progress map, or compact demo mode. | Demo can feel slow and the presenter may lose the intended sequence. | Add section navigation or a presenter mode in a future hardening issue. |
| UX-003 | `/workspace` | Important | Internal ISSUE-number and handoff language appears in product-facing copy. | Prospects may see implementation process instead of product value. | Replace issue references with user-facing flow copy in a future copy hardening issue. |
| UX-004 | `/end-customer` | Important | WhatsApp link has no configured recipient. | CTA may not open a specific business conversation. | Keep as a presenter-only placeholder or configure it only in an approved integration issue. |
| UX-005 | `/workspace` | Important | Static PayNow placeholder can resemble a functional QR. | Viewer may try to scan it or assume payment integration exists. | Add stronger "Not scannable" copy or a less QR-like placeholder in approved hardening. |
| UX-006 | `/optimaks-os` | Important | Closeout wording still describes final checkpoint acceptance as pending. | Demo contradicts current accepted governance state. | Refresh closeout copy through a dedicated approved UI/copy hardening item. |
| UX-007 | `/optimaks-os` | Nice-to-have | "Open workspace preview" label is used for a link that can lead to `/end-customer`. | Link purpose is ambiguous. | Use destination-specific labels. |
| UX-008 | `/workspace` | Nice-to-have | Fixed booking date will age. | Demo may look stale after June 2026. | Use neutral demo date copy or local relative date in approved hardening. |
| UX-009 | `/workspace` | Nice-to-have | Repeated status/report sections extend the walkthrough. | Product value can become buried in detail. | Consolidate presenter flow or hide secondary cards in a compact mode. |
| UX-010 | `/end-customer` | Already acceptable | Demo boundary and local summary warning are visible. | Reduces overpromise risk. | Keep this pattern. |
| UX-011 | `/workspace` | Already acceptable | Major workflow sections repeat static/non-persistent boundaries. | Reduces integration and persistence overpromise risk. | Keep, but simplify repeated wording later. |
| UX-012 | `/optimaks-os` | Already acceptable | Included/reserved scope is explicit. | Supports a safe closeout conversation. | Keep this boundary card. |

---

## Classification Summary

```text
Blockers: 0
Important: 6
Nice-to-have: 3
MVP02 candidates: 0 implementation items created
Already acceptable: 3
```

Production persistence, auth, integrations, and automation remain scope candidates for future approved planning, not HARDEN-001 fixes.
