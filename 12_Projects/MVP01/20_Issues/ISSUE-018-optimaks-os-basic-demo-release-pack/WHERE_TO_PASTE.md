# WHERE TO PASTE - ISSUE-018

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/
```

## Branch

Use this branch:

```text
feature/issue-018-optimaks-os-basic-demo-release-pack
```

## Files Included

```text
ISSUE-018_Source_Alignment_Reference.md
ISSUE-018_Workpack.md
ISSUE-018_Codex_Prompt.md
ISSUE-018_DONE_Report.md
README_ISSUE-018.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-018): add optimaks os demo release workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-018 using:
12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-018 is Optimaks OS Basic + Demo / Release Pack.
Create the static Optimaks OS Basic preview and required demo/release notes, but do not create migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real Optimaks OS admin console, real client management backend, tenant provisioning, billing/subscription management, deployment automation, module entitlement logic, MVP02 files, or MVP02 execution.
Return final status, created files, changed files, route/UI summary, Optimaks OS Basic summary, Demo/Release Pack summary, MVP01 closeout summary, validation results, forbidden-scope result, warnings, and whether MVP01 final checkpoint can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-018_DONE_Report.md
3. ISSUE-018_Optimaks_OS_Basic_Scope_Notes.md
4. ISSUE-018_Demo_Pack_Notes.md
5. ISSUE-018_Release_Pack_Notes.md
6. ISSUE-018_MVP01_Closeout_Notes.md
7. App route / page file(s)
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
feat(issue-018): add optimaks os demo release pack
```
