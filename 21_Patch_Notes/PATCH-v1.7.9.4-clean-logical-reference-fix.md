# PATCH-v1.7.9.4 Clean Logical Reference Fix

**Status:** Prepared  
**Date:** 2026-05-30  
**Scope:** Documentation-only cleanup  
**Important Exclusion:** ISSUE-000 status is intentionally not updated because the founder wants to rerun ISSUE-000 from scratch.

## Fixed

```text
1. Updated GITHUB_UPLOAD_CHECKLIST.md from obsolete v1.5.9 wording to v1.7.9.4 clean logical path rules.
2. Unified project baseline location as 12_Projects/[PROJECT]/.
3. Unified issue execution record location as 20_Issues/[PROJECT]/ISSUE-XXX-short-name/.
4. Clarified CURRENT_CONSTITUTION issue-chain wording to generic project pattern plus MVP01 example.
5. Marked STD-DEV-045 as MVP01-only / project-specific reference, not a universal rule.
6. Fixed TPL-DEV-029 metadata formatting and generic issue paths.
7. Added future-reference placeholders for CHK-DEV-020, TEST-CORE-001, TEST-AIRCON-001, and PROD-006.
8. Clarified Core PDF Generation placement under ISSUE-013.
9. Fixed DOCUMENT_ROLE_MAP duplicate section numbering.
```

## Not Changed

```text
1. ISSUE-000 status remains unchanged.
2. MVP01_ISSUE_CHAIN_REGISTER.md execution status remains available for a fresh ISSUE-000 rerun.
3. No product feature scope was expanded.
4. No DB / RLS / deployment / production behavior was changed.
```

## Canonical Rules After Patch

```text
Constitution source:
01_Constitution/CURRENT_CONSTITUTION.md

Project baseline source:
12_Projects/[PROJECT]/

Issue execution records:
20_Issues/[PROJECT]/ISSUE-XXX-short-name/

MVP01 active project baseline:
12_Projects/MVP01/

MVP01 issue execution records:
20_Issues/MVP01/ISSUE-XXX-short-name/
```
