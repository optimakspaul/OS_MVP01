# ISSUE-007 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-007 — Architecture Alignment only.

Context:
- Product: Optimaks MVP01
- Current Canonical MVP01: Starter Complete + Optimaks OS Basic
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Source Alignment Package: Optimaks MVP01-MVP05 Phase Issue Package v0.3 with Flow
- Current Issue: ISSUE-007
- Correct ISSUE-007 Title: Architecture Alignment
- Correct ISSUE-007 Phase: Phase 0
- Previous Gate: CHECKPOINT-001
- Required Previous Gate Status: GO or GO WITH WARNINGS with Founder Acceptance recorded
- Execution Mode: Architecture / Baseline Alignment Only
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/

Important Correction:
ISSUE-007 is NOT RLS implementation.
ISSUE-007 is Architecture Alignment.
Do not create RLS, RLS policies, migrations, app code, Supabase client code, module tables, template tables, or UI.

Priority Order:
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. CHECKPOINT-001 Go / No-Go decision
5. ISSUE-007_Source_Alignment_Reference.md
6. ISSUE-007_Workpack.md
7. MVP01 baseline documents
8. Existing issue chain register

Dependency Gate:
1. Confirm CHECKPOINT-001 decision is GO or GO WITH WARNINGS.
2. Confirm CHECKPOINT-001 Founder Acceptance is Accepted.
3. Confirm ISSUE-007 workpack exists.
4. Confirm current branch is feature/issue-007-architecture-alignment or equivalent issue branch.
5. If gate fails, stop and return FAIL - dependency gate not satisfied.

Required Alignment Target:
- MVP01 = Starter Complete + Optimaks OS Basic
- Phase map = Phase 0 through Phase 7
- Issue chain = ISSUE-000 through ISSUE-018 from the v0.3 Flow package
- Flow = End Customer Interface → Client Workspace → Optimaks OS / Platform
- MVP01 flow = Request → Lead → Customer → Quote → Booking → Payment → Reminder / Report
- Grow / Pro / Platform / AI = reserved for MVP02-MVP05

Required Tasks:
1. Read ISSUE-007_Source_Alignment_Reference.md.
2. Review current MVP01 baseline files.
3. Align MVP01 scope baseline to Starter Complete + Optimaks OS Basic.
4. Align MVP01 phase/issue baseline to Phase 0-7 and ISSUE-000-018.
5. Align issue chain register so ISSUE-007 is Architecture Alignment and ISSUE-008 is Module Library Foundation.
6. Document architecture alignment notes.
7. Document phase/issue alignment notes.
8. Document flow alignment notes.
9. Document reserved boundary notes.
10. Update MVP01 change control log with this architecture alignment.
11. Complete ISSUE-007_DONE_Report.md.
12. Do not start ISSUE-008.

Allowed Files:
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/README_ISSUE-007.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Source_Alignment_Reference.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Workpack.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Codex_Prompt.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Architecture_Alignment_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Phase_Issue_Alignment_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Flow_Alignment_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Reserved_Boundary_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Open_Questions.md
- 12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md

Forbidden Scope:
- No app source changes
- No package file changes
- No migration changes
- No new migrations
- No RLS creation
- No RLS policies
- No Supabase client source code
- No login UI
- No module tables
- No template tables
- No business workflow tables
- No payment gateway integration
- No WhatsApp API integration
- No .env.example changes
- No .env.local creation
- No constitution changes
- No template changes
- No ISSUE-008 execution

Validation:
Run if useful and available:
- git diff --name-only
- npm run lint
- npm run build
- npm run typecheck

At minimum, perform forbidden-scope validation:
- Confirm no app files changed.
- Confirm no package files changed.
- Confirm no migrations changed.
- Confirm no env files changed.
- Confirm no ISSUE-008 files were created.

Required DONE Report:
Create or complete:
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_DONE_Report.md

The DONE report must include:
- Final Status: PASS / PASS WITH WARNINGS / FAIL
- Dependency gate result
- Files read
- Files created
- Files changed
- Architecture alignment summary
- Phase map alignment result
- Issue chain alignment result
- Flow alignment result
- Reserved boundary result
- Forbidden scope confirmation
- Validation command results
- Warnings
- Handoff to ISSUE-008
- Whether ISSUE-008 can start

Return:
1. Final status
2. Created files
3. Changed files
4. Architecture alignment summary
5. Phase/issue alignment summary
6. Flow alignment summary
7. Forbidden scope result
8. Warnings
9. Whether ISSUE-008 can start
