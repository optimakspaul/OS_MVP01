# WHERE TO PASTE - CHECKPOINT-001

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/
```

## Branch

Use this branch:

```text
checkpoint/checkpoint-001-issue-000-to-006-review
```

## Files Included

```text
README_CHECKPOINT-001.md
CHECKPOINT-001_Review_Workpack.md
CHECKPOINT-001_Codex_Prompt.md
CHECKPOINT-001_Findings_Report.md
CHECKPOINT-001_Risk_Register.md
CHECKPOINT-001_Go_No_Go_Decision.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(checkpoint-001): add issue 000 to 006 foundation review
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute CHECKPOINT-001 using:
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Codex_Prompt.md

Review ISSUE-000 through ISSUE-006 only.
Do not modify migrations, app files, package files, .env.example, issue DONE reports, issue chain register, constitution files, templates, or ISSUE-007 files.
Do not create RLS or start ISSUE-007.
Return final checkpoint decision, findings summary, risk register summary, validation results, secret check result, migration review result, and ISSUE-007 readiness.
```

## After Codex Completes

Return these to ChatGPT for review:

```text
1. Codex final checkpoint decision
2. CHECKPOINT-001_Findings_Report.md
3. CHECKPOINT-001_Risk_Register.md
4. CHECKPOINT-001_Go_No_Go_Decision.md
5. Validation command results
6. Any warnings or blockers
```

## Completion Commit Message

```text
docs(checkpoint-001): complete issue 000 to 006 foundation review
```
