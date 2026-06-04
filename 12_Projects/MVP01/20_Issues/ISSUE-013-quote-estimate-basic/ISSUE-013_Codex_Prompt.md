# ISSUE-013 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-013 — Quote Estimate Basic only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-013
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-012 Lead / Customer Flow
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/

Critical Instruction:
ISSUE-013 is Quote Estimate Basic.
It may enhance the frontend workspace flow, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real quote engine, invoice generation, payment gateway, PDF generation, booking implementation, Optimaks OS UI, technician portal, or ISSUE-014 work.

Required Tasks:
1. Read the ISSUE-013 workpack.
2. Confirm ISSUE-012 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect existing /end-customer and /workspace implementation.
5. Create or enhance Quote Estimate Basic UI.
6. The interface must show:
   - Quote estimate panel
   - Selected lead/customer summary
   - Service item list
   - Estimate range or subtotal preview
   - Discount display / adjustment preview
   - GST application note / toggle or info card
   - Quote status
   - Manual follow-up checklist
   - Next step to Booking Basic
   - Demo / non-persistent boundary
7. Create ISSUE-013 notes:
   - Quote Estimate Scope Notes
   - UX Flow Notes
   - Implementation Notes
   - Handoff to Booking Basic
8. Update ISSUE-013 DONE report.
9. Update MVP01 issue chain register for ISSUE-013 status, branch, outputs, and ISSUE-014 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-014.

Preferred implementation:
- Enhance src/app/workspace/page.tsx

Alternative acceptable route:
- src/app/workspace/quotes/page.tsx

Allowed:
- Frontend route / page enhancement
- Local component state
- Static demo service items
- Accessible estimate controls / buttons / previews
- Non-persistent discount preview
- GST information card / static toggle
- Manual-assisted quote workflow copy
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
- No real quote calculation engine
- No invoice generation
- No payment gateway
- No PDF generation
- No booking implementation
- No reminder implementation
- No Optimaks OS UI
- No technician portal
- No ISSUE-014 files
- No ISSUE-014 booking implementation
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Quote_Estimate_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_Handoff_to_Booking_Basic.md
- 12_Projects/MVP01/20_Issues/ISSUE-013-quote-estimate-basic/ISSUE-013_DONE_Report.md
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
5. Quote Estimate flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-014 can start
