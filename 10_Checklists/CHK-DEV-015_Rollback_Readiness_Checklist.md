# CHK-DEV-015 Rollback Readiness Checklist

Use this when an issue fails or before high-risk merge/deploy.

## Identify Failure

- [ ] Failure type identified.
- [ ] Modified files reviewed.
- [ ] Risky files identified.
- [ ] Scope violation checked.
- [ ] Security/RLS/auth risk checked.

## Choose Recovery Path

- [ ] Repair in same branch.
- [ ] Revert specific files.
- [ ] Revert commit.
- [ ] Discard branch.
- [ ] Split issue.
- [ ] Founder review required.

## Preserve Evidence

- [ ] Failed issue recovery report created.
- [ ] Error message / risk noted.
- [ ] Lessons learned recorded.
- [ ] Follow-up issue created if needed.

## Execute Recovery

- [ ] Unauthorized files restored.
- [ ] Bad commit reverted if needed.
- [ ] Branch discarded if needed.
- [ ] New smaller issue created if needed.
- [ ] README / CHANGELOG updated if behavior changed.

## Verify Recovery

- [ ] Build restored.
- [ ] Target route restored.
- [ ] No secret exposure.
- [ ] No RLS/auth weakening remains.
- [ ] Main branch remains stable.
