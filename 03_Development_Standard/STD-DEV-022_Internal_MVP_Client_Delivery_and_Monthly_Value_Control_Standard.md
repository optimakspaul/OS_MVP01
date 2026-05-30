# STD-DEV-022 Internal MVP, Client Delivery, and Monthly Value Control Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-022 |
| Version | v1.5 Cleanup + Fusion |
| Owner | Optimaks Pte Ltd |
| Status | Active Stable Standard |
| Supersedes | STD-DEV-019 and parts of CLT-006 governance wording |
| Applies to | Internal tools, client delivery systems, maintenance clients, recurring-fee packages |

---

## 1. Purpose

This standard separates internal MVP development from client delivery development and defines the monthly value evidence rule for recurring-fee clients.

The purpose is to let Optimaks move fast internally while maintaining professional standards when delivering to paying clients.

---

## 2. Core Rule

Internal MVPs may be simplified.

Client delivery versions must be controlled.

Recurring monthly fees must have visible value evidence.

---

## 3. Internal MVP Standard

An internal MVP may omit advanced features if the goal is learning, validation, workflow testing, sales demo preparation, or internal productivity.

It may use:

1. Mock data.
2. localStorage.
3. Simplified status fields.
4. Manual workflow.
5. No auth.
6. No payment.
7. No e-sign.
8. No invoice.
9. No client portal.
10. No multi-tenant architecture.

However, it should still have:

1. Clear data structure.
2. Clear page structure.
3. Clear component structure.
4. Basic test method.
5. Changelog or development note.
6. Future extension notes.

---

## 4. Client Delivery Standard

Before a system is delivered to a client, relevant delivery controls must be reviewed.

Depending on scope, this may include:

1. Auth and access control.
2. PDPA and data protection review.
3. Production deployment checklist.
4. Backup or export method.
5. QA checklist.
6. Handover guide.
7. Maintenance responsibility.
8. Support boundary.
9. Source code / IP policy.
10. Monthly maintenance and value report.

---

## 5. Internal MVP vs Client Delivery Comparison

| Area | Internal MVP | Client Delivery Version |
|---|---|---|
| Auth | May be omitted | Required when client/user data exists |
| Payment | Usually omitted | Required only if in scope |
| E-sign | Usually omitted | Requires CR and workflow review |
| Invoice | May be omitted or manual | Requires defined workflow and handover |
| Client portal | Usually omitted | Requires scope, access, and support definition |
| Multi-tenant | Omitted | Requires Full CR / architecture review |
| QA | Basic testing | Formal QA checklist required |
| PDPA | Basic awareness | Formal PDPA/data protection review required |
| Handover | Not required | Required |
| Maintenance | Internal note | Monthly report required if monthly fee exists |

---

## 6. Monthly Value Rule

If Optimaks charges a recurring system, hosting, support, or maintenance fee, the value should be visible to the client.

Monthly value evidence may include:

1. Uptime or deployment status.
2. Backup or export confirmation.
3. Bug fixes completed.
4. Security or dependency updates.
5. Small content updates.
6. Lead count.
7. Follow-up count.
8. Proposal or booking status summary.
9. Issue log.
10. SEO, Google Maps, or landing page performance indicators when applicable.
11. Manual support or advisory provided.
12. Recommended next improvement.

---

## 7. Monthly Value Report Boundary

The constitution defines the principle and minimum evidence categories.

The actual client-facing report format should remain in:

1. `CLT-006_Monthly_Maintenance_Report.md`.
2. Relevant project files under `12_Projects`.
3. Future product modules if a one-click report generator is built.

This prevents the constitution from becoming a product specification.

---

## 8. Upgrade Rule

When an internal MVP is considered for client delivery, create a CR or Full CR to assess:

1. Missing delivery controls.
2. Data protection risk.
3. Deployment readiness.
4. Handover requirement.
5. Support boundary.
6. Monthly maintenance promise.
7. Pricing and contract impact.
8. Scope difference from the internal MVP.

---

## 9. Related Files

| File | Relationship |
|---|---|
| `CLT-006_Monthly_Maintenance_Report.md` | Client-facing report structure |
| `QA-001_QA_Checklist.md` | QA checklist for delivery |
| `PDPA-001_Data_Protection_Checklist.md` | PDPA review checklist |
| `DEP-001_Deployment_Checklist.md` | Deployment readiness checklist |
| `HAN-001_Handover_Checklist.md` | Handover readiness checklist |
