# CHK-DEV-013 Interruption Recovery Checklist

Use this checklist whenever AI implementation work is paused, interrupted, or resumed.

## Trigger Conditions

Use this checklist if:

- [ ] Founder needs to leave.
- [ ] Laptop battery is low.
- [ ] Codex usage is close to exhaustion.
- [ ] Antigravity usage is close to exhaustion.
- [ ] AI session is unstable.
- [ ] Internet is unstable.
- [ ] Tool switch is required.
- [ ] Work is partially complete and should continue later.

## Pause Checklist

- [ ] Current branch confirmed.
- [ ] `git status` reviewed.
- [ ] AI summarized current state.
- [ ] Completed work listed.
- [ ] Remaining work listed.
- [ ] Modified files listed.
- [ ] Risks / notes listed.
- [ ] Progress log updated.
- [ ] WIP commit created.
- [ ] Branch pushed if possible.

Recommended commands:

```bash
git branch --show-current
git status
git add .
git commit -m "wip: pause ISSUE-XXX short-description"
git push origin <current-branch>
```

## Resume Checklist

- [ ] Repo synced with `git pull`.
- [ ] Correct branch checked out.
- [ ] `git status` reviewed.
- [ ] Latest commits reviewed.
- [ ] Issue progress log read.
- [ ] Issue starter pack read.
- [ ] AI instructed not to restart from scratch.
- [ ] AI instructed to continue unfinished items only.

## Tool Switch Checklist

- [ ] New tool has read progress log.
- [ ] New tool has inspected current branch.
- [ ] New tool has inspected latest commit and current diff.
- [ ] New tool understands completed vs remaining work.
- [ ] New tool will preserve existing implementation.
- [ ] New tool will only complete remaining items.
