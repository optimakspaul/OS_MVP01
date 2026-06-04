# WHERE TO PASTE - ISSUE-007

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/
```

## Branch

Use this branch:

```text
feature/issue-007-architecture-alignment
```

## Files Included

```text
ISSUE-007_Source_Alignment_Reference.md
ISSUE-007_Workpack.md
ISSUE-007_Codex_Prompt.md
ISSUE-007_DONE_Report.md
README_ISSUE-007.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-007): add architecture alignment workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-007 using:
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-007 is Architecture Alignment, not RLS implementation.
Do not create RLS, RLS policies, migrations, app code, Supabase client code, module tables, template tables, UI, or ISSUE-008 work.
Return final status, created files, changed files, architecture alignment summary, phase/issue alignment summary, flow alignment summary, forbidden-scope result, warnings, and whether ISSUE-008 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-007_DONE_Report.md
3. ISSUE-007_Architecture_Alignment_Notes.md
4. ISSUE-007_Phase_Issue_Alignment_Notes.md
5. ISSUE-007_Flow_Alignment_Notes.md
6. ISSUE-007_Reserved_Boundary_Notes.md
7. MVP01_SCOPE_BASELINE.md
8. MVP01_PHASE_AND_ISSUE_BASELINE.md
9. MVP01_ISSUE_CHAIN_REGISTER.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
docs(issue-007): align mvp01 architecture baseline
```
