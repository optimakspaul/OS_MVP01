# CONSTITUTION_AMENDMENT_v1.7.9.3_External_Agency_Skill_Registry.md

**Version:** v1.7.9.3-agency-skill-registry  
**Status:** Active Amendment  
**Effective Date:** 2026-05-30  
**Supersedes:** None  
**Depends On:** v1.7.9.2 layout-normalized logic-audited package baseline  
**Purpose:** Allow external agency-agents skill personas to be used by Optimaks AI Harness without allowing them to override the constitution.

---

## 1. Constitutional decision

Optimaks may maintain an external skill library under:

```text
22_Skills/
```

The initial external library is:

```text
22_Skills/external/agency-agents-main/
```

This library is a controlled optional skill source, not a governing authority.

---

## 2. Supremacy rule

If any external agency agent conflicts with an Optimaks governing document, the following priority order applies:

```text
1. Optimaks Constitution
2. Active constitution amendments
3. Locked Architecture / MVP scope
4. Active development standards
5. Issue Workpack
6. /goal execution brief
7. External agency skill files
```

External agency skill files never override Optimaks governance.

---

## 3. Allowed use

External agency skills may be used for:

```text
implementation approach guidance
review checklist generation
validation planning
technical writing support
handoff clarity
role-specific reasoning focus
```

---

## 4. Forbidden use

External agency skills must not:

```text
autonomously run multiple agents
expand scope beyond the assigned issue
advance to the next issue
merge pull requests
modify production settings
change DB / RLS / Auth / billing without explicit workpack approval
replace founder review
replace DONE_REPORT evidence
load the full external library by default
```

---

## 5. Issue declaration rule

Any issue using external agency skills must explicitly declare the selected skill(s) and skill mode.

Required fields:

```text
Primary Agency Skill
Secondary Agency Skill
Review Gate Skill
Skill Mode
Reason for Selection
Allowed Use
Forbidden Use
External Skill Files Read
```

If an issue does not need external skills, the issue must state:

```text
Agency Skill Selection: Not required.
```

---

## 6. Review gate rule

For implementation issues, at least one review gate skill should be selected when the issue touches:

```text
DB schema
RLS policies
Auth logic
API routes
CI / deploy config
commercial / billing logic
production-affecting configuration
```

Recommended review gate skills:

```text
Reality Checker
Code Reviewer
Security Engineer
API Tester
```

---

## 7. Versioning decision

This amendment is versioned as v1.7.9.3 because it adds a controlled skill registry layer without changing MVP01 product scope.

v1.7.10 remains reserved for the Harness Validation Pack after 3–5 real issues are executed and reviewed.
