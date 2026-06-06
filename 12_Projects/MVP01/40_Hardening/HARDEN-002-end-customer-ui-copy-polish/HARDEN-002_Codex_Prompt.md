# HARDEN-002 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete HARDEN-002 — End Customer UI / Copy Polish only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Hardening Item: HARDEN-002
- Title: End Customer UI / Copy Polish
- Execution Mode: UI / Copy Hardening
- Previous Gate: HARDEN-001 MVP01 Walkthrough Review
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary Template: Aircon / Home Service Starter Template
- Normalized hardening path: 12_Projects/MVP01/40_Hardening/HARDEN-002-end-customer-ui-copy-polish/

Critical Instruction:
This is a hardening item, not a feature issue and not MVP02.
Focus on /end-customer UI and copy polish.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, real form submission, quote engine, booking scheduler, payment integration, reminder automation, or full customer portal.

Required Tasks:
1. Read the HARDEN-002 workpack.
2. Confirm HARDEN-001 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Review /end-customer page.
4. Polish /end-customer UI/copy for:
   - clearer hero positioning
   - clearer request flow
   - clearer "what happens next"
   - safer quote estimate / booking / payment / reminder boundary wording
   - visible demo-preview boundary
   - clearer CTA copy
   - trust / reassurance copy
   - optional lightweight route navigation to /workspace and /optimaks-os if consistent with existing app style
5. Keep behavior static/local-only.
6. Create required docs:
   - HARDEN-002_End_Customer_Copy_Notes.md
   - HARDEN-002_UI_Polish_Notes.md
   - HARDEN-002_Boundary_Safety_Notes.md
   - HARDEN-002_DONE_Report.md
7. Update MVP01_CHANGE_CONTROL_LOG.md with a hardening entry.
8. Update MVP01_ISSUE_CHAIN_REGISTER.md only if an existing hardening/checkpoint tracking section supports it.
9. Do not modify /workspace or /optimaks-os unless a tiny navigation consistency update is necessary and safe.
10. Do not start MVP02.

Allowed app files:
- src/app/end-customer/page.tsx
- src/app/globals.css

Forbidden:
- No MVP02 files
- No MVP02 execution
- No new backend functionality
- No migrations
- No database tables
- No Supabase client integration
- No API routes
- No server actions
- No RLS
- No auth
- No real form submission
- No real quote engine
- No booking scheduler
- No payment integration
- No reminder automation
- No full customer portal
- No package/env changes unless absolutely required; if required, stop and ask.

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- route existence audit for /end-customer
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final hardening status
2. Files created
3. Files changed
4. /end-customer UI/copy summary
5. Boundary safety summary
6. Validation results
7. Forbidden-scope result
8. Warnings
9. MVP02 lock confirmation
10. Whether founder can accept HARDEN-002
