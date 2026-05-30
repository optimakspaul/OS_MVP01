# STD-DEV-037 AI Agent Execution Slimming and Context Routing Standard

**Document Code:** STD-DEV-037  
**Version:** v1.6.1  
**Status:** Active  
**Owner:** Optimaks Pte Ltd  
**Purpose:** Prevent AI agents from loading too much context and making uncontrolled changes.

---

## 1. Purpose

Optimaks maintains a complete document library, but AI implementation tools should not read the entire library for every issue.

This standard defines how to route AI agents into the correct context size:

```text
Mini Context
Standard Context
Full Context
```

The goal is to keep AI execution fast, focused, and safe.

---

## 2. Core Rule

```text
Use the smallest context package that can safely complete the assigned issue.
```

More context is not always better. Too much context increases the chance that AI tools will:

```text
follow old rules
mix strategy with implementation
change unrelated files
expand scope
miss the issue acceptance criteria
```

---

## 3. Mini Context

Use Mini Context for:

```text
copywriting changes
small UI text changes
minor styling
small bug fix with clear file path
small component adjustment
small README or template update
```

Required files:

```text
AGENTS.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
assigned issue workpack
09_Templates/TPL-DEV-023_AI_CONTEXT_MINI.md
09_Templates/TPL-DEV-032_Issue_DONE_Report_Template.md
```

---

## 4. Standard Context

Use Standard Context for:

```text
normal feature implementation
page or workflow implementation
module connection
form behavior
API route without secrets or privileged access
CRM / quote / booking / invoice workflow changes
```

Required files:

```text
All Mini Context files
relevant architecture document
relevant page/workflow map
relevant data model document if needed
STD-DEV-032
STD-DEV-038
09_Templates/TPL-DEV-024_AI_CONTEXT_STANDARD.md
```

---

## 5. Full Context

Use Full Context for:

```text
auth
Supabase database migration
RLS / security policy
secrets / env variables
Vercel deployment
client workspace isolation
plan / feature toggle rules
client onboarding / launch
billing / pricing behavior
production release preparation
```

Required files:

```text
All Standard Context files
STD-DB-001
STD-SEC-001
STD-DEPLOY-001
STD-DEV-033 if plan/template related
STD-DEV-034 if client deployment related
CLT-009 if client onboarding related
09_Templates/TPL-DEV-025_AI_CONTEXT_FULL.md
```

---

## 6. Forbidden Default Context

Do not load the following folders for normal coding unless explicitly required:

```text
07_ISO_Ready
08_Grant_Ready
15_Strategy
16_Product_Strategy
17_Sales_GTM
18_Partner_Governance
99_Examples
14_Archive
00_Admin historical reference files
```

---

## 7. Issue Workpack Requirement

Every issue workpack should include:

```text
Required Context Level: Mini / Standard / Full
Allowed Files / Directories
Forbidden Files / Directories
Validation Level
```

If missing, AI must assume the narrowest safe edit scope and record the assumption in DONE.md.

---

## 8. DONE.md Requirement

DONE.md must include:

```text
Context level used
Why this context level was selected
Files actually read, if relevant
Files changed
Scope check result
Any context uncertainty
```

---

## 9. Founder Shortcut

When the founder wants to move fast, use this instruction:

```text
Use AGENTS.md. Use the smallest safe context package. Do not load strategy, archive, ISO, grant, or sales docs unless required. Implement only this issue and produce DONE.md.
```
