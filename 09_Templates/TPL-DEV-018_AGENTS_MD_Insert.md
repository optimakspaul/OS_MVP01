# TPL-DEV-018 AGENTS.md Insert

Add this section to root `AGENTS.md`.

---

## Repo-Based AI Workflow

This repository is the central source of truth.

AI agents may read the full repository for context, but may only modify files required by the assigned issue.

Before working on any issue, read:

1. `README.md`
2. `02_Foundation/FND-002_Development_Constitution_Overview.md`
3. `03_Development_Standard/STD-DEV-024_AI_Collaboration_GitHub_Execution_Governance.md`
4. `03_Development_Standard/STD-DEV-027_Repo_Workspace_and_AI_Execution_Boundary_Standard.md`
5. `03_Development_Standard/STD-DEV-028_Interruption_Recovery_and_WIP_Preservation_Standard.md`
6. The assigned issue folder under `/20_Issues`

## Priority Order

If documents conflict, follow this order:

1. Optimaks Development Constitution
2. Security / data isolation / RLS rules
3. Current approved issue scope
4. Existing architecture
5. UI / implementation suggestions

## Agent Rules

- Full repo may be read for context.
- Only modify files required by the assigned issue.
- Do not refactor unrelated files.
- Do not change database schema unless explicitly required.
- Do not weaken RLS, auth, or tenant isolation.
- Do not hardcode client data.
- Keep changes small and reviewable.
- Report inspected files, modified files, assumptions, risks, and test steps.

## Interruption Rule

If work is interrupted, the agent must help preserve the current state through:

- WIP summary
- modified files list
- remaining work list
- risks / notes
- continuation prompt

The founder should preserve implementation work through:

```bash
git add .
git commit -m "wip: pause ISSUE-XXX short-description"
git push origin <current-branch>
```

## Resume Rule

When resuming, do not restart the issue from scratch.

First inspect:

1. Current branch
2. Latest commits
3. `git status`
4. Issue progress log
5. Issue starter pack

Then continue only remaining work.
