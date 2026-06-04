# ISSUE-012 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-012 — Lead / Customer Flow only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-012
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-011 Client Workspace Basic
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/

Critical Instruction:
ISSUE-012 is Lead / Customer Flow.
It may enhance the frontend workspace flow, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, quote engine, booking implementation, payment implementation, reminder implementation, Optimaks OS UI, technician portal, or ISSUE-013 work.

Required Tasks:
1. Read the ISSUE-012 workpack.
2. Confirm ISSUE-011 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect existing /end-customer and /workspace implementation.
5. Create or enhance Lead / Customer Flow UI.
6. The interface must show:
   - Lead inbox / request list
   - Lead status filters
   - Lead detail panel
   - Customer profile summary
   - Contact / address / service context
   - Manual action checklist
   - Convert-to-customer demo action
   - Next step to quote estimate
   - Demo / non-persistent boundary
7. Create ISSUE-012 notes:
   - Lead Customer Scope Notes
   - UX Flow Notes
   - Implementation Notes
   - Handoff to Quote Estimate
8. Update ISSUE-012 DONE report.
9. Update MVP01 issue chain register for ISSUE-012 status, branch, outputs, and ISSUE-013 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-013.

Preferred implementation:
- Enhance src/app/workspace/page.tsx

Alternative acceptable route:
- src/app/workspace/leads/page.tsx

Allowed:
- Frontend route / page enhancement
- Local component state
- Static demo leads / customers
- Accessible filters / buttons / previews
- Non-persistent convert-to-customer demo action
- Manual-assisted workflow copy
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
- No quote engine
- No booking implementation
- No payment implementation
- No reminder implementation
- No Optimaks OS UI
- No technician portal
- No ISSUE-013 files
- No ISSUE-013 quote implementation
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Lead_Customer_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_Handoff_to_Quote_Estimate.md
- 12_Projects/MVP01/20_Issues/ISSUE-012-lead-customer-flow/ISSUE-012_DONE_Report.md
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
5. Lead / Customer flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-013 can start
