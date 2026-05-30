# STD-DEV-028 Interruption Recovery and WIP Preservation Standard

## 1. Purpose

This standard defines how Optimaks preserves and resumes interrupted AI-assisted implementation work.

It applies when:

- founder needs to leave
- laptop battery is low
- Codex usage limit is reached
- Antigravity usage limit is reached
- internet becomes unstable
- AI tool session is unstable
- implementation needs to switch tools
- work is partially completed

---

## 2. Core Principle

```text
No meaningful AI implementation work should exist only inside a chat window or temporary AI session.
```

All meaningful work-in-progress must be preserved using:

1. Git branch
2. WIP commit
3. Push to GitHub when possible
4. Issue progress log

---

## 3. Mandatory Trigger Conditions

This SOP must be triggered when:

1. The founder leaves before the issue is complete.
2. Laptop battery is low.
3. Codex or Antigravity usage is close to exhaustion.
4. AI session appears unstable.
5. Partial implementation already modified files.
6. Work will switch from one tool to another.
7. The founder is unsure whether current session context will remain available.

---

## 4. Standard Preservation Procedure

### Step 1 — Confirm Branch

```bash
git branch --show-current
```

### Step 2 — Review Current File Changes

```bash
git status
```

### Step 3 — Save Current Work

Preferred:

```bash
git add .
git commit -m "wip: pause ISSUE-XXX short-description"
git push origin <current-branch>
```

If push is not possible:

```bash
git add .
git commit -m "wip: local save ISSUE-XXX short-description"
```

If commit is not possible:

```bash
git stash push -u -m "wip ISSUE-XXX emergency save"
```

---

## 5. Issue Progress Log Requirement

Every interrupted issue must update or create:

```text
20_Issues/ISSUE-XXX/ISSUE-XXX_PROGRESS_LOG.md
```

The progress log must include:

- current status
- branch
- reason for pause
- completed work
- remaining work
- files inspected
- files modified
- files added
- risks / notes
- next step
- continuation prompt

---

## 6. Recovery Procedure

When resuming:

```bash
git pull
git checkout <issue-branch>
git status
git log --oneline -n 5
```

Then read:

```text
20_Issues/ISSUE-XXX/ISSUE-XXX_PROGRESS_LOG.md
20_Issues/ISSUE-XXX/ISSUE-XXX_STARTER_PACK.md
```

The AI continuation prompt must say:

```text
Do not restart from scratch.
Continue from current WIP branch.
Inspect latest commit, git status, and progress log first.
Only complete remaining items.
```

---

## 7. Tool Switch Recovery Rule

If switching tools, for example Antigravity to Codex, the new tool must:

1. Inspect current branch
2. Inspect latest commits
3. Inspect git status
4. Read issue starter pack
5. Read issue progress log
6. Identify completed vs remaining work
7. Preserve existing implementation unless it violates constitution or issue scope
8. Continue unfinished work only

---

## 8. WIP Commit Policy

WIP commits are acceptable on feature branches.

Examples:

```bash
git commit -m "wip: add ISSUE-012 dashboard layout"
git commit -m "wip: pause ISSUE-012 before leaving"
git commit -m "wip: emergency save ISSUE-012"
```

Before merge, WIP commits may be squashed if desired.

---

## 9. Minimum Safe Action

If time is extremely limited:

```bash
git add .
git commit -m "wip: emergency save ISSUE-XXX"
git push origin <current-branch>
```

If push is impossible, commit locally.

If commit is impossible, stash.

---

## 10. Prohibited Behavior

The following are not acceptable:

- leaving modified files only inside AI session
- relying only on chat history to preserve state
- switching tools without a progress log
- restarting an interrupted issue without checking WIP state
- letting a new AI tool overwrite previous partial work
- continuing implementation without checking branch, git status, and latest commit
