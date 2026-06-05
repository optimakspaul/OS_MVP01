# ISSUE-014 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-014 — Booking Basic only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-014
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-013 Quote Estimate Basic
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/

Critical Instruction:
ISSUE-014 is Booking Basic.
It may enhance the frontend workspace flow, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real scheduler engine, calendar integration, technician assignment, payment implementation, reminder implementation, Optimaks OS UI, technician portal, or ISSUE-015 work.

Required Tasks:
1. Read the ISSUE-014 workpack.
2. Confirm ISSUE-013 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect existing /end-customer and /workspace implementation.
5. Create or enhance Booking Basic UI.
6. The interface must show:
   - Booking panel
   - Selected quote/customer summary
   - Service address / area summary
   - Preferred date/time fields or preview
   - Booking status selector / preview
   - Manual scheduling checklist
   - Customer confirmation copy
   - Calendar integration reserved note
   - Next step to Payment Basic
   - Demo / non-persistent boundary
7. Create ISSUE-014 notes:
   - Booking Scope Notes
   - UX Flow Notes
   - Implementation Notes
   - Handoff to Payment Basic
8. Update ISSUE-014 DONE report.
9. Update MVP01 issue chain register for ISSUE-014 status, branch, outputs, and ISSUE-015 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-015.

Preferred implementation:
- Enhance src/app/workspace/page.tsx

Alternative acceptable route:
- src/app/workspace/bookings/page.tsx

Allowed:
- Frontend route / page enhancement
- Local component state
- Static demo booking context
- Accessible date/time fields or previews
- Non-persistent booking status preview
- Manual-assisted booking workflow copy
- Customer confirmation copy
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
- No real scheduler engine
- No Google Calendar integration
- No Calendly / Cal.com integration
- No technician assignment
- No calendar conflict detection
- No payment implementation
- No reminder implementation
- No Optimaks OS UI
- No technician portal
- No ISSUE-015 files
- No ISSUE-015 payment implementation
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Booking_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_Handoff_to_Payment_Basic.md
- 12_Projects/MVP01/20_Issues/ISSUE-014-booking-basic/ISSUE-014_DONE_Report.md
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
5. Booking flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-015 can start
