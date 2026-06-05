# ISSUE-015 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-015 — Payment Basic only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-015
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-014 Booking Basic
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/

Critical Instruction:
ISSUE-015 is Payment Basic.
It may enhance the frontend workspace flow, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real payment gateway, PayNow API, Stripe/HitPay integration, invoice generation, receipt generation, accounting integration, GST compliance engine, reminder implementation, Optimaks OS UI, technician portal, or ISSUE-016 work.

Required Tasks:
1. Read the ISSUE-015 workpack.
2. Confirm ISSUE-014 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect existing /end-customer and /workspace implementation.
5. Create or enhance Payment Basic UI.
6. The interface must show:
   - Payment panel
   - Selected booking/customer/quote summary
   - Payment method display
   - Cash option
   - Static PayNow QR placeholder / instruction card
   - Payment status selector / preview
   - Paid / outstanding summary
   - Manual payment checklist
   - Customer payment instruction copy
   - Next step to Admin Setting Basic
   - Demo / non-persistent boundary
7. Create ISSUE-015 notes:
   - Payment Scope Notes
   - UX Flow Notes
   - Implementation Notes
   - Handoff to Admin Setting Basic
8. Update ISSUE-015 DONE report.
9. Update MVP01 issue chain register for ISSUE-015 status, branch, outputs, and ISSUE-016 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-016.

Preferred implementation:
- Enhance src/app/workspace/page.tsx

Alternative acceptable route:
- src/app/workspace/payments/page.tsx

Allowed:
- Frontend route / page enhancement
- Local component state
- Static demo payment context
- Accessible payment status controls / previews
- Static PayNow QR placeholder or instruction card
- Cash option copy
- Non-persistent paid / outstanding preview
- Manual-assisted payment workflow copy
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
- No real payment gateway
- No PayNow API / QR generation
- No Stripe / HitPay integration
- No invoice generation
- No receipt generation
- No accounting integration
- No GST compliance engine
- No reminder implementation
- No Optimaks OS UI
- No technician portal
- No ISSUE-016 files
- No ISSUE-016 admin setting implementation
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Payment_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_Handoff_to_Admin_Setting_Basic.md
- 12_Projects/MVP01/20_Issues/ISSUE-015-payment-basic/ISSUE-015_DONE_Report.md
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
5. Payment flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-016 can start
