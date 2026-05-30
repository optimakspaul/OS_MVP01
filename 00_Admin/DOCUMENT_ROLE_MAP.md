# DOCUMENT_ROLE_MAP.md

**Version:** v1.7.9.4-project-baseline-governance  
**Status:** Active Admin Map  
**Purpose:** Define what each folder is for, so AI tools and the founder do not load unnecessary context.

---

## 1. Daily AI Coding Context

Use for normal Codex / Antigravity implementation.

```text
AGENTS.md
01_Constitution/
03_Development_Standard/STD-DEV-032
03_Development_Standard/STD-DEV-037
03_Development_Standard/STD-DEV-038
03_Development_Standard/STD-SEC-001
03_Development_Standard/STD-DEPLOY-001
03_Development_Standard/STD-DB-001
09_Templates/TPL-DEV-023 to TPL-DEV-025
03_Development_Standard/STD-DEV-049
03_Development_Standard/STD-DEV-050
09_Templates/TPL-DEV-040, only when agency skills are used
22_Skills/OPTIMAKS_SKILL_REGISTRY.md, only when agency skills are used
12_Projects/[PROJECT]/README_[PROJECT].md
12_Projects/[PROJECT]/[PROJECT]_SCOPE_BASELINE.md
12_Projects/[PROJECT]/[PROJECT]_PHASE_AND_ISSUE_BASELINE.md
12_Projects/[PROJECT]/[PROJECT]_ISSUE_CHAIN_REGISTER.md
12_Projects/[PROJECT]/[PROJECT]_CHANGE_CONTROL_LOG.md
20_Issues/[PROJECT]/ISSUE-XXX-short-name/
```

---

## 2. Project Baseline Context

Use before creating, running, reviewing, splitting, merging, or changing any MVP / project issue.

```text
12_Projects/[PROJECT]/README_[PROJECT].md
12_Projects/[PROJECT]/[PROJECT]_SCOPE_BASELINE.md
12_Projects/[PROJECT]/[PROJECT]_PHASE_AND_ISSUE_BASELINE.md
12_Projects/[PROJECT]/[PROJECT]_ISSUE_CHAIN_REGISTER.md
12_Projects/[PROJECT]/[PROJECT]_CHANGE_CONTROL_LOG.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
```

Do not convert project-specific decisions into Constitution rules.

---

## 3. Client Delivery Context

Use when preparing client launch, handover, onboarding, proposal, contract, PDPA, payment, or environment setup.

```text
05_Client_Delivery/
06_Legal_Commercial/
10_Checklists/DEP-001
10_Checklists/HAN-001
10_Checklists/PDPA-001
19_Preflight/
```

---

## 4. Governance Context

Use when changing rules, approving exceptions, reviewing version impact, or controlling constitution upgrades.

```text
04_Governance_Standard/
00_Admin/VERSION_HISTORY.md
00_Admin/V1.x_SCOPE_DECISION.md
00_Admin/V1.x_CONSOLIDATION_REPORT.md
```

---

## 5. Strategy / Sales Context

Use for positioning, pricing, GTM, offer design, sales script, market research, or partner evaluation.

```text
15_Strategy/
16_Product_Strategy/
17_Sales_GTM/
18_Partner_Governance/
```

Do not load these for normal code implementation unless the issue explicitly touches pricing, packaging, market positioning, or sales experience.

---

## 6. ISO / Grant Context

Use for grant-readiness, audit trail, evidence pack, quality management, or future certification preparation.

```text
07_ISO_Ready/
08_Grant_Ready/
```

Do not load these for normal MVP coding.

---

## 7. Archive / Reference Context

Use only for historical review, diff, recovery, or explanation.

```text
14_Archive/
99_Examples/
00_Admin/REFERENCE_FULL_SINGLE_FILE_*.md
00_Admin older scope decisions
```

---

## 8. External Skill Context

Use only when an issue explicitly selects or reviews external agency skills.

```text
22_Skills/OPTIMAKS_SKILL_REGISTRY.md
22_Skills/OPTIMAKS_APPROVED_AGENCY_AGENT_MAP.md
22_Skills/external/agency-agents-main/[selected-agent-file-only]
```

Do not load the full external agency library by default.

---

## 9. Practical Rule

```text
If the task is coding, load the smallest coding context.
If the task is client launch, load client delivery context.
If the task is strategy, load strategy context.
If the task is constitution change, load governance context.
If unsure, start with AGENTS.md and ACTIVE_STANDARDS_INDEX.md.
```

## v1.7.9.4 Project Baseline Governance Layer

| Document | Role |
|---|---|
| `CONSTITUTION_AMENDMENT_v1.7.9.4_Project_Baseline_Governance.md` | Universal rule that project-specific baselines must live in project folders, not inside the Constitution |
| `STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md` | Standard for project scope baseline, phase/issue baseline, issue chain register, and change control log |
| `TPL-DEV-041`–`TPL-DEV-046` | Reusable templates for project baseline contracts |
