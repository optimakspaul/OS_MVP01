# TPL-DEV-039 Issue Linkage and Handoff Insert

**Document Code:** TPL-DEV-039  
**Version:** v1.7.9.1-issue-linkage-handoff  
**Status:** Active Insert  
**Purpose:** Standard insert for issue dependency, output, and handoff tracking.

---

## Insert for ISSUE-XXX_Workpack.md

```markdown
## Issue Linkage

### Previous Issue Dependency

Depends On:
-

Required Previous Outputs:
-

Dependency Status:
- [ ] PASS
- [ ] PASS WITH WARNINGS accepted
- [ ] BLOCKED
- [ ] Not applicable

### This Issue Outputs

This issue must produce:
-

### Next Issue Handoff

Potential Next Issue:
-

Handoff Notes:
-
```

---

## Insert for ISSUE-XXX_DONE_Report.md

```markdown
## Handoff to Next Issue

Next Issue:
-

Ready for next issue?
- [ ] Yes
- [ ] Yes, with warnings
- [ ] No

Required Follow-up Before Next Issue:
-

Files / Decisions Next Issue Should Read:
-

Risks Carried Forward:
-
```

---

## Issue Chain Register Reference

Every issue should reference:

```text
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

The register should be updated after issue review / merge.
