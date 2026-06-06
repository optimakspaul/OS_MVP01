# HARDEN-005 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete HARDEN-005 — MVP01 Demo Readiness Final Audit only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Hardening Item: HARDEN-005
- Title: MVP01 Demo Readiness Final Audit
- Execution Mode: Final Demo Readiness Audit / Governance / Release Readiness
- Previous Gate: HARDEN-004 Optimaks OS + Pitch Pack Polish
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary Template: Aircon / Home Service Starter Template
- Normalized hardening path: 12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/

Critical Instruction:
This is a final audit, not a feature issue and not MVP02.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create MVP02 planning workpack.
Do not create new product features.
Do not modify app UI unless a build-breaking issue requires a founder-approved fix.
Do not create migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, payment/calendar/reminder automation, or full Optimaks OS admin console.

Required Tasks:
1. Read the HARDEN-005 workpack.
2. Confirm HARDEN-004 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Audit routes:
   - /end-customer
   - /workspace
   - /optimaks-os
4. Review HARDEN-001 through HARDEN-004 results.
5. Confirm founder demo script and pitch pack readiness.
6. Confirm MVP01 boundary safety and MVP02 lock.
7. Create required docs:
   - HARDEN-005_Final_Demo_Readiness_Audit.md
   - HARDEN-005_Founder_Demo_Runbook.md
   - HARDEN-005_Go_NoGo_Decision.md
   - HARDEN-005_Known_Warnings_Summary.md
   - HARDEN-005_MVP02_Lock_and_Next_Step_Notice.md
   - HARDEN-005_DONE_Report.md
8. Update MVP01_CHANGE_CONTROL_LOG.md with a hardening final audit entry.
9. Update MVP01_ISSUE_CHAIN_REGISTER.md only if an existing hardening/checkpoint tracking section supports it.
10. Do not start MVP02.
11. Do not create MVP02 files or MVP02 planning workpack.

Allowed documentation files:
- 12_Projects/MVP01/40_Hardening/HARDEN-005-mvp01-demo-readiness-final-audit/**
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md only if existing hardening/checkpoint tracking supports it

Forbidden:
- No MVP02 files
- No MVP02 execution
- No MVP02 planning workpack
- No new product features
- No app UI changes unless founder-approved build-breaking fix
- No migrations
- No database tables
- No Supabase client integration
- No API routes
- No server actions
- No RLS
- No auth
- No payment/calendar/reminder automation
- No full Optimaks OS admin console
- No package/env changes unless absolutely required; if required, stop and ask.

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- route existence audit for /end-customer, /workspace, /optimaks-os
- rendered-copy/stale-copy audit if available
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final hardening status
2. Files created
3. Files changed
4. Route audit summary
5. Founder demo readiness summary
6. Pitch pack readiness summary
7. GO / NO-GO decision summary
8. Known warnings summary
9. Validation results
10. Forbidden-scope result
11. MVP02 lock confirmation
12. Whether founder can accept HARDEN-005
