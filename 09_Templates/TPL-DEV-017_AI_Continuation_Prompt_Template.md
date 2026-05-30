# TPL-DEV-017 AI Continuation Prompt Template

## Pause Prompt

Use this before leaving, before laptop battery dies, or before AI usage runs out.

```md
We are pausing this task.

Please summarize the current state of ISSUE-XXX in a progress note:

1. What has been completed
2. What remains incomplete
3. Files inspected
4. Files modified
5. Any known risks
6. The exact next step when resuming
7. Suggested continuation prompt

Do not make further code changes unless necessary.
```

---

## Resume Prompt

Use this when continuing a previously interrupted issue.

```md
Continue ISSUE-XXX from the current WIP branch.

Important:
- Do not restart from scratch.
- Do not rewrite completed work.
- First inspect git status, latest commit, and ISSUE-XXX_PROGRESS_LOG.md.
- Continue only the unfinished items.
- Keep the diff small.
- Report modified files and test steps after completion.
```

---

## Tool Switch Prompt

Use this when switching from Antigravity to Codex, Codex to Antigravity, or another AI tool.

```md
Continue ISSUE-XXX from the existing WIP branch.

This issue was previously worked on by another tool.

Before making changes:
1. Inspect the current branch.
2. Inspect latest commits.
3. Inspect git status.
4. Read ISSUE-XXX_PROGRESS_LOG.md.
5. Read ISSUE-XXX_STARTER_PACK.md.
6. Identify completed work and remaining work.

Rules:
- Do not restart from scratch.
- Do not overwrite completed implementation.
- Preserve existing work unless it violates issue scope or constitution.
- Continue only unfinished items.
- Keep the diff small and reviewable.
```

---

## Emergency Save Command Block

```bash
git branch --show-current
git status
git add .
git commit -m "wip: emergency save ISSUE-XXX"
git push origin <current-branch>
```

If push is not possible:

```bash
git add .
git commit -m "wip: local emergency save ISSUE-XXX"
```

If commit is not possible:

```bash
git stash push -u -m "wip ISSUE-XXX emergency save"
```
