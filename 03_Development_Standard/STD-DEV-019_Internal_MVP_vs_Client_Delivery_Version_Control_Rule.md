# STD-DEV-019 Internal MVP vs Client Delivery Version Control Rule

Version: v1.4.3  
Owner: Optimaks Pte Ltd  
Status: Active Patch Rule  
Related Constitution: Optimaks Development Constitution v1.4.3 Integrated

---

## 1. Purpose

This standard separates internal-use MVP development from client-delivery development.

The purpose is to let Optimaks build fast for internal validation while still maintaining professional standards for paid client delivery.

---

## 2. Core Rule

Internal MVPs may be simplified.

Client delivery versions must be controlled.

The two should not be judged by the same completion standard.

---

## 3. Internal MVP Standard

An internal MVP may omit advanced features if the goal is learning, validation, workflow testing, or internal productivity.

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

Before a system is delivered to a client, the relevant delivery controls must be reviewed.

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

## 5. Monthly Value Rule

If a client pays a recurring monthly fee, Optimaks should be able to explain and show what the monthly fee covers.

Monthly value evidence may include:

1. Hosting and deployment maintenance.
2. Basic bug fixes.
3. Security or dependency updates.
4. Backup checks.
5. Uptime or availability checks.
6. Content update record.
7. Email / WhatsApp support record.
8. Data export assistance.
9. Lead or workflow activity summary.
10. System health report.

A one-click monthly report may be implemented as a project feature, but the principle belongs in the constitution.

---

## 6. Upgrade Path

An internal MVP can become a client delivery version only after:

1. Scope is rechecked.
2. Risk is classified.
3. Missing controls are listed.
4. QA is performed.
5. Deployment is verified.
6. Handover requirements are prepared.
7. Maintenance boundary is documented.

---

## 7. Summary

Internal MVP speed and client delivery quality are both important.

Optimaks should move fast internally, but deliver carefully externally.
