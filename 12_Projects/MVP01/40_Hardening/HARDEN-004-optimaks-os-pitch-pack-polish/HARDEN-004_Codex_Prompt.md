# HARDEN-004 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete HARDEN-004 — Optimaks OS + Pitch Pack Polish only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Hardening Item: HARDEN-004
- Title: Optimaks OS + Pitch Pack Polish
- Execution Mode: UI / Copy / Pitch Readiness Hardening
- Previous Gate: HARDEN-003 Workspace Dashboard Polish
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary Template: Aircon / Home Service Starter Template
- Normalized hardening path: 12_Projects/MVP01/40_Hardening/HARDEN-004-optimaks-os-pitch-pack-polish/

Critical Instruction:
This is a hardening item, not a feature issue and not MVP02.
Focus on /optimaks-os UI/copy polish and pitch pack documentation only.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, real Optimaks OS admin console, client backend, tenant provisioning, billing/subscription management, deployment automation, or module entitlement logic.

Required Tasks:
1. Read the HARDEN-004 workpack.
2. Confirm HARDEN-003 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Review /optimaks-os page.
4. Polish /optimaks-os UI/copy for:
   - clearer Optimaks OS Basic positioning
   - clearer sample client / plan / onboarding / workspace link meaning
   - better demo pack checklist wording
   - better release pack checklist wording
   - clearer MVP01 included vs reserved boundary
   - clearer founder sales-demo talk track
   - better CTA / next-step copy for founder-led pitch
   - optional lightweight route navigation to /end-customer and /workspace if consistent with existing app style
5. Keep behavior static/local-only.
6. Create required docs:
   - HARDEN-004_Optimaks_OS_Copy_Notes.md
   - HARDEN-004_Pitch_Pack_Notes.md
   - HARDEN-004_Demo_Talk_Track.md
   - HARDEN-004_Boundary_Safety_Notes.md
   - HARDEN-004_DONE_Report.md
7. Update MVP01_CHANGE_CONTROL_LOG.md with a hardening entry.
8. Update MVP01_ISSUE_CHAIN_REGISTER.md only if an existing hardening/checkpoint tracking section supports it.
9. Do not modify /end-customer or /workspace unless a tiny navigation consistency update is necessary and safe.
10. Do not start MVP02.

Allowed app files:
- src/app/optimaks-os/page.tsx
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
- No real Optimaks OS admin console
- No real client management backend
- No tenant provisioning
- No billing/subscription management
- No deployment automation
- No module entitlement logic
- No package/env changes unless absolutely required; if required, stop and ask.

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- route existence audit for /optimaks-os
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final hardening status
2. Files created
3. Files changed
4. /optimaks-os UI/copy summary
5. Pitch pack summary
6. Demo talk track summary
7. Boundary safety summary
8. Validation results
9. Forbidden-scope result
10. Warnings
11. MVP02 lock confirmation
12. Whether founder can accept HARDEN-004
