# ISSUE-009 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-009 — Industry Template Foundation only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-009
- Current Issue Type: Documentation / Architecture Alignment Only
- Previous Issue: ISSUE-008 Module Library Foundation
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/

Critical Instruction:
ISSUE-009 is Industry Template Foundation, not implementation.
Do not create migrations, RLS, module tables, template tables, entitlement tables, app code, UI, Supabase client code, or ISSUE-010 work.

Required Tasks:
1. Read the ISSUE-009 workpack.
2. Confirm ISSUE-008 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Create the MVP01 Industry Template Foundation baseline doc.
5. Create ISSUE-009 notes:
   - Industry Template Notes
   - Template Module Mapping
   - Template Flow Notes
   - Handoff to End Customer Interface
6. Update ISSUE-009 DONE report.
7. Update MVP01 issue chain register for ISSUE-009 status, branch, outputs, and ISSUE-010 handoff.
8. Update MVP01 change control log.
9. Do not start ISSUE-010.

Required Output Files:
- 12_Projects/MVP01/00_Project_Baseline/MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Industry_Template_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Module_Mapping.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Handoff_to_End_Customer_Interface.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_DONE_Report.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md

Template Content Requirements:
- Template Name: Aircon / Home Service Starter Template
- Template Type: Starter-depth industry template
- Primary User: SME owner / admin
- End Customer Flow: Request -> Quote Estimate -> Booking -> Payment Status -> Reminder
- Client Workspace Flow: Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
- Optimaks OS Flow: Demo Setup -> Onboarding -> Workspace Link -> Release Tracking

Module Mapping Requirements:
- Lead Module -> Request capture and lead conversion
- Customer Module -> Customer profile and service context
- Quote Module -> Estimate / quote guidance
- Booking Module -> Manual booking / appointment scheduling
- Payment Module -> Payment status / manual tracking
- Reminder Module -> Maintenance / follow-up reminder
- Report Module -> Basic monthly / operational report

Reserved Boundary:
- No multi-industry marketplace
- No template builder UI
- No template tables
- No module tables
- No entitlement logic
- No AI automation
- No Grow / Pro / Platform depth
- No app implementation

Allowed Files:
- 12_Projects/MVP01/00_Project_Baseline/MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/README_ISSUE-009.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Source_Alignment_Reference.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Workpack.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Codex_Prompt.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Industry_Template_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Module_Mapping.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Template_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Handoff_to_End_Customer_Interface.md

Forbidden Scope:
- Do not create migrations.
- Do not create database tables.
- Do not create template tables.
- Do not create module tables.
- Do not create entitlement tables.
- Do not create seed data.
- Do not create app code.
- Do not create UI.
- Do not create Supabase client code.
- Do not create API routes.
- Do not create server actions.
- Do not create RLS.
- Do not create RLS policies.
- Do not modify package files.
- Do not modify env files.
- Do not modify constitution files.
- Do not modify templates.
- Do not create or modify ISSUE-010 files.
- Do not start ISSUE-010 execution.

Validation:
Run available checks:
- npm run lint
- npm run build
- npm run typecheck
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final status
2. Created files
3. Changed files
4. Industry template summary
5. Module mapping summary
6. Flow summary
7. Reserved boundary summary
8. Validation results
9. Forbidden-scope result
10. Warnings
11. Whether ISSUE-010 can start
