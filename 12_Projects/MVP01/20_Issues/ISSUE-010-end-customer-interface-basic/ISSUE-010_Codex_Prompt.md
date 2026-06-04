# ISSUE-010 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-010 — End Customer Interface Basic only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-010
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-009 Industry Template Foundation
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/

Critical Instruction:
ISSUE-010 is End Customer Interface Basic.
It may create a basic frontend interface, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, payment gateway, WhatsApp API, Client Workspace UI, Optimaks OS UI, or ISSUE-011 work.

Required Tasks:
1. Read the ISSUE-010 workpack.
2. Confirm ISSUE-009 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect the existing Next.js app structure before choosing the route.
5. Create a basic end-customer interface for the Aircon / Home Service Starter Template.
6. The interface must show:
   - Request entry
   - Service issue selection
   - Customer contact fields
   - Address / service area field
   - Quote estimate guidance
   - Booking interest / preferred timing
   - Payment status / manual payment explanation
   - Reminder / maintenance follow-up consent
   - WhatsApp CTA / manual-assisted handoff
   - Demo boundary if not persistent
7. Create ISSUE-010 notes:
   - Interface Scope Notes
   - UX Flow Notes
   - Implementation Notes
   - Handoff to Client Workspace
8. Update ISSUE-010 DONE report.
9. Update MVP01 issue chain register for ISSUE-010 status, branch, outputs, and ISSUE-011 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-011.

Preferred route if compatible:
- app/end-customer/page.tsx

Alternative acceptable routes:
- app/(public)/end-customer/page.tsx
- app/request/page.tsx
- app/demo/end-customer/page.tsx

Allowed:
- Frontend route / page
- Local component state
- Static demo data
- Accessible form fields
- Non-persistent submit preview / summary
- WhatsApp CTA link or placeholder copy
- Documentation updates
- Issue chain and change log updates

Forbidden:
- No migrations
- No database tables
- No seed data
- No Supabase client integration
- No API route submission
- No server action submission
- No RLS
- No RLS policies
- No auth/login
- No payment gateway
- No WhatsApp API
- No Client Workspace UI
- No Optimaks OS UI
- No ISSUE-011 files
- No ISSUE-012 lead persistence
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Interface_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_Handoff_to_Client_Workspace.md
- 12_Projects/MVP01/20_Issues/ISSUE-010-end-customer-interface-basic/ISSUE-010_DONE_Report.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final status
2. Created files
3. Changed files
4. Route / UI summary
5. UX flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-011 can start
