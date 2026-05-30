# CHK-DEV-012 Repo Workspace Execution Checklist

Use this checklist before and after every AI implementation issue.

## Before Implementation

- [ ] GitHub repo is the current source of truth.
- [ ] Local workspace has been synced with `git pull`.
- [ ] Work is on a dedicated issue branch.
- [ ] AI tool has access to the full repo for context.
- [ ] AI prompt clearly says: implement this issue only.
- [ ] Issue starter pack exists.
- [ ] Dependency map is listed.
- [ ] Existing files to inspect are listed.
- [ ] Allowed files to modify are listed.
- [ ] Do-not-modify files are listed.
- [ ] Pre-implementation scan has been requested.

## During Implementation

- [ ] AI did not modify unrelated files.
- [ ] AI reused existing components where possible.
- [ ] AI did not duplicate existing layout / route / component unnecessarily.
- [ ] AI did not change database schema unless authorized.
- [ ] AI did not change RLS / auth / tenant isolation unless authorized.
- [ ] Diff remains small and reviewable.

## After Implementation

- [ ] `git status` reviewed.
- [ ] `git diff` reviewed.
- [ ] Modified files match issue scope.
- [ ] No forbidden files were modified.
- [ ] Local test completed.
- [ ] Vercel preview checked if UI/routing changed.
- [ ] README / CHANGELOG updated if needed.
- [ ] Issue acceptance criteria checked.
- [ ] Changes committed to issue branch.
- [ ] Branch pushed to GitHub.
