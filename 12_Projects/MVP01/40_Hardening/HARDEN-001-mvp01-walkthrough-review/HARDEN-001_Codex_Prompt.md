# HARDEN-001 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete HARDEN-001 — MVP01 Walkthrough Review only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Hardening Item: HARDEN-001
- Title: MVP01 Walkthrough Review
- Execution Mode: Walkthrough Review / QA / Demo Readiness Hardening
- Previous Gate: MVP01 Final Checkpoint Review
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary Template: Aircon / Home Service Starter Template
- Normalized hardening path: 12_Projects/MVP01/40_Hardening/HARDEN-001-mvp01-walkthrough-review/

Critical Instruction:
This is a walkthrough review, not a feature issue.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create new product features.
Do not create migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, payment/calendar/reminder automation, or full Optimaks OS admin console.
Do not modify app UI unless a build-breaking issue requires a founder-approved fix.

Required Tasks:
1. Read the HARDEN-001 workpack.
2. Confirm MVP01 Final Checkpoint is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Review routes:
   - /end-customer
   - /workspace
   - /optimaks-os
4. Review MVP01 walkthrough as:
   - End Customer Interface
   - Client Workspace
   - Lead / Customer
   - Quote Estimate
   - Booking
   - Payment
   - Admin Setting
   - Reminder + Basic Report
   - Optimaks OS Basic
   - Demo / Release Pack
5. Create required hardening docs:
   - HARDEN-001_Walkthrough_Review.md
   - HARDEN-001_Demo_Script.md
   - HARDEN-001_UX_Friction_Log.md
   - HARDEN-001_Copy_and_Scope_Risk_Register.md
   - HARDEN-001_Hardening_Backlog.md
   - HARDEN-001_DONE_Report.md
6. Update MVP01_CHANGE_CONTROL_LOG.md with a hardening review entry.
7. Update MVP01_ISSUE_CHAIN_REGISTER.md only if an existing hardening/checkpoint tracking section supports it.
8. Do not start MVP02.
9. Do not create MVP02 files.

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- route existence audit for /end-customer, /workspace, /optimaks-os
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final hardening status
2. Files created
3. Files changed
4. Route walkthrough summary
5. Demo readiness summary
6. UX friction summary
7. Copy/scope risk summary
8. Hardening backlog summary
9. Validation results
10. Forbidden-scope result
11. MVP02 lock confirmation
12. Whether founder can accept HARDEN-001
