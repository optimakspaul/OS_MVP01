# WHERE TO PASTE - ISSUE-009

## Destination Folder

Place this entire extracted folder into the MVP01 repo root so the final repo path becomes:

```text
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/
```

## Branch

Use this branch:

```text
feature/issue-009-industry-template-foundation
```

## Files Included

```text
ISSUE-009_Source_Alignment_Reference.md
ISSUE-009_Workpack.md
ISSUE-009_Codex_Prompt.md
ISSUE-009_DONE_Report.md
README_ISSUE-009.md
WHERE_TO_PASTE.md
COMMIT_AND_PR.md
```

## Workpack Commit Message

```text
docs(issue-009): add industry template foundation workpack
```

## Codex Short Prompt

After the files are placed in the repo, paste this into Codex:

```text
Please execute ISSUE-009 using:
12_Projects/MVP01/20_Issues/ISSUE-009-industry-template-foundation/ISSUE-009_Codex_Prompt.md

Follow the workpack exactly.
ISSUE-009 is Industry Template Foundation, not implementation.
Do not create migrations, RLS, RLS policies, module tables, template tables, entitlement tables, app code, UI, Supabase client code, or ISSUE-010 work.
Return final status, created files, changed files, industry template summary, module mapping summary, flow summary, reserved boundary summary, validation results, forbidden-scope result, warnings, and whether ISSUE-010 can start.
```

## After Codex Completes

Return these to ChatGPT for PASS / FAIL review:

```text
1. Codex final status
2. ISSUE-009_DONE_Report.md
3. ISSUE-009_Industry_Template_Notes.md
4. ISSUE-009_Template_Module_Mapping.md
5. ISSUE-009_Template_Flow_Notes.md
6. ISSUE-009_Handoff_to_End_Customer_Interface.md
7. MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md
8. MVP01_ISSUE_CHAIN_REGISTER.md
9. MVP01_CHANGE_CONTROL_LOG.md
10. Codex changed files summary
11. Validation / forbidden-scope results
12. Any warnings
```

## Completion Commit Message

```text
docs(issue-009): add industry template foundation
```
