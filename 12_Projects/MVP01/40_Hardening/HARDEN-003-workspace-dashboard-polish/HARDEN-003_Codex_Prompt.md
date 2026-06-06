# HARDEN-003 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete HARDEN-003 — Workspace Dashboard Polish only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Hardening Item: HARDEN-003
- Title: Workspace Dashboard Polish
- Execution Mode: UI / Flow / Copy Hardening
- Previous Gate: HARDEN-002 End Customer UI / Copy Polish
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary Template: Aircon / Home Service Starter Template
- Normalized hardening path: 12_Projects/MVP01/40_Hardening/HARDEN-003-workspace-dashboard-polish/

Critical Instruction:
This is a hardening item, not a feature issue and not MVP02.
Focus on /workspace dashboard flow and copy polish only.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, real lead/customer persistence, quote engine, booking scheduler, payment integration, reminder automation, report generation, full client portal, or full Optimaks OS admin console.

Required Tasks:
1. Read the HARDEN-003 workpack.
2. Confirm HARDEN-002 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Review /workspace page.
4. Polish /workspace UI/flow/copy for:
   - clearer dashboard hero / owner positioning
   - clearer workflow map from Lead to Basic Report
   - better section grouping and labels
   - safer quote / booking / payment / admin / reminder / report boundary wording
   - visible demo-preview / local-only boundary
   - clearer "how to demo this page" guidance
   - clearer local preview control labels
   - optional lightweight route navigation to /end-customer and /optimaks-os if consistent with existing app style
5. Keep behavior static/local-only.
6. Create required docs:
   - HARDEN-003_Workspace_Flow_Notes.md
   - HARDEN-003_UI_Polish_Notes.md
   - HARDEN-003_Boundary_Safety_Notes.md
   - HARDEN-003_DONE_Report.md
7. Update MVP01_CHANGE_CONTROL_LOG.md with a hardening entry.
8. Update MVP01_ISSUE_CHAIN_REGISTER.md only if an existing hardening/checkpoint tracking section supports it.
9. Do not modify /end-customer or /optimaks-os unless a tiny navigation consistency update is necessary and safe.
10. Do not start MVP02.

Allowed app files:
- src/app/workspace/page.tsx
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
- No real lead/customer persistence
- No real quote engine
- No booking scheduler
- No payment integration
- No reminder automation
- No report generation
- No full client portal
- No full Optimaks OS admin console
- No package/env changes unless absolutely required; if required, stop and ask.

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- route existence audit for /workspace
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final hardening status
2. Files created
3. Files changed
4. /workspace UI/flow/copy summary
5. Boundary safety summary
6. Validation results
7. Forbidden-scope result
8. Warnings
9. MVP02 lock confirmation
10. Whether founder can accept HARDEN-003
