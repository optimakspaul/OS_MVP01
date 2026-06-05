# MVP01 Final Checkpoint Review Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete MVP01 Final Checkpoint Review only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Checkpoint: MVP01 Final Checkpoint Review
- Current Issue Range: ISSUE-000 through ISSUE-018
- Previous Issue: ISSUE-018 Optimaks OS Basic + Demo / Release Pack
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary Template: Aircon / Home Service Starter Template
- Normalized checkpoint path: 12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/

Critical Instruction:
This is a checkpoint review, not a feature issue.
Do not create MVP02 files.
Do not start MVP02 execution.
Do not create new product features.
Do not create migrations, database tables, Supabase integration, API routes, server actions, RLS, auth, payment/calendar/reminder automation, or full Optimaks OS admin console.

Required Tasks:
1. Read the MVP01 Final Checkpoint workpack.
2. Confirm ISSUE-018 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Review MVP01 issue chain from ISSUE-000 through ISSUE-018.
4. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
5. Audit demo routes:
   - /end-customer
   - /workspace
   - /optimaks-os
6. Create checkpoint docs:
   - MVP01_Final_Checkpoint_Review.md
   - MVP01_Final_Demo_Route_Audit.md
   - MVP01_Final_Scope_Audit.md
   - MVP01_Final_Warnings_Register.md
   - MVP01_Final_MVP02_Lock_Notice.md
   - MVP01_Final_Checkpoint_DONE_Report.md
7. Update MVP01 issue chain register only if needed to record checkpoint status and MVP02 lock.
8. Update MVP01 change control log with checkpoint entry.
9. Do not start MVP02.
10. Do not create MVP02 files.

Required Documentation Output Files:
- 12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Checkpoint_Review.md
- 12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Demo_Route_Audit.md
- 12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Scope_Audit.md
- 12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Warnings_Register.md
- 12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_MVP02_Lock_Notice.md
- 12_Projects/MVP01/30_Checkpoints/MVP01-final-checkpoint-review/MVP01_Final_Checkpoint_DONE_Report.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- forbidden-scope audit
- secret check for changed files
- route existence audit for /end-customer, /workspace, /optimaks-os

Required Final Response:
1. Final checkpoint status
2. Files created
3. Files changed
4. Issue completion summary
5. Founder acceptance summary
6. Demo route audit summary
7. Scope audit summary
8. Warnings summary
9. Validation results
10. Forbidden-scope result
11. MVP02 lock confirmation
12. Whether founder can accept MVP01 final checkpoint
