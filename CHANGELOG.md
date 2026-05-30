# v1.7.9.4-completeness-audited — Project Baseline Governance Completion

- Updated stale active README and admin metadata from earlier v1.7.9.1 / v1.7.9.2 / v1.7.9.3 package notes.
- Added missing MVP01 project baseline contract files required by STD-DEV-049.
- Updated MVP01 issue chain register to v1.7.9.4 and expanded phase / issue coverage.
- Reframed CURRENT_CONSTITUTION to keep project-specific scope under `12_Projects/[PROJECT]`.
- Regenerated DOC index, manifest, and file tree.


# v1.7.9.4 — Project Baseline Governance

- Added generic project baseline governance amendment.
- Added STD-DEV-049 for MVP/project baseline and issue-chain governance.
- Added reusable project baseline templates TPL-DEV-041 through TPL-DEV-046.
- Updated AGENTS.md and CURRENT_CONSTITUTION.md to require active project baseline reading before project execution.
- Kept MVP01-specific scope, phase, and issue details out of the Constitution.


## v1.7.9.3 — External Agency Skill Registry

**Effective Date:** 2026-05-30  
**Status:** Active patch  
**Supersedes packaging baseline:** v1.7.9.2-layout-normalized-logic-audited

### Added

```text
22_Skills/
22_Skills/README.md
22_Skills/OPTIMAKS_SKILL_REGISTRY.md
22_Skills/OPTIMAKS_APPROVED_AGENCY_AGENT_MAP.md
22_Skills/external/agency-agents-main/
01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.3_External_Agency_Skill_Registry.md
03_Development_Standard/STD-DEV-051_External_Agency_Agent_Skill_Integration_Standard.md
09_Templates/TPL-DEV-040_Agency_Skill_Selection_Insert.md
00_Admin/V1.7.9.3_AGENCY_SKILL_REGISTRY_RELEASE_REPORT.md
```

### Updated

```text
AGENTS.md read order and agency skill gate
CURRENT_CONSTITUTION.md external agency skill principle
ACTIVE_STANDARDS_INDEX.md active additions
TPL-DEV-029 issue workpack template agency skill section
TPL-DEV-032 DONE report template agency skill usage section
README.md version positioning
DOCUMENT_ROLE_MAP.md external skill context
```

### Scope Decision

No MVP01 product scope is changed. This patch only adds a controlled external skill/persona library layer for AI Harness execution quality.

# Changelog


## v1.7.9.1-issue-linkage-handoff — Issue Linkage and Handoff Governance Patch

**Effective Date:** 2026-05-28  
**Baseline:** v1.7.9-ai-harness  
**Status:** Active

### Added
- `CONSTITUTION_AMENDMENT_v1.7.9.1_Issue_Linkage_and_Handoff_Governance.md`
- `STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md`
- `TPL-DEV-039_Issue_Linkage_and_Handoff_Insert.md`
- `MVP01_ISSUE_CHAIN_REGISTER.md`

### Changed
- Updated Workpack, DONE Report, Master Prompt, AGENTS, Active Standards, README, DOC Index, manifest, and file tree metadata to align with v1.7.9.1.
- Added Issue Linkage and Handoff sections to issue generation flow.

### Safety Decision
- No MVP01 product scope change.
- v1.7.10 remains reserved for Harness Validation after 3–5 20_Issues.

---


# Changelog

## v1.7.9-ai-harness-clean — AI Harness Execution Governance Clean Release

**Effective Date:** 2026-05-28  
**Baseline:** v1.7.8-safe-clean  
**Status:** Active

### Added
- `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9_AI_Harness_Execution_Governance.md`
- `03_Development_Standard/STD-DEV-046_AI_Harness_Agent_Behavior_and_Skills_Standard.md`
- `03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md`
- `03_Development_Standard/STD-DEV-048_AI_Agent_Execution_Mode_Standard.md`
- Harness inserts for `/goal`, Issue Workpack, DONE Report, and AGENTS.md.

### Changed
- Updated root README, 00_Admin README, 03_Development_Standard README, DOC-INDEX, VERSION_HISTORY, manifest, and file tree to reflect v1.7.9 as the active version.
- Extended AI execution from `/goal` scope control to AI Harness execution governance.

### Safety Decision
- v1.7.9 does not unlock new MVP01 product scope.
- v1.7.9 controls how AI agents execute work: behavior, skill, file boundary, execution mode, validation evidence, and human review.

---

## v1.7.8-safe-clean — Clean Active Package for MVP01 Operational Governance Gates

**Effective Date:** 2026-05-26  
**Baseline:** v1.7.5-safe  
**Source Package:** v1.7.8-safe-integrated  
**Status:** Active

### Changed
- Renamed active working package to `v1.7.8-safe-clean` for clearer usage as the clean MVP01 baseline.
- Corrected `CURRENT_CONSTITUTION.md` metadata from a broad `Supersedes: v1.6.1` statement to a precise `Supersedes Active Baseline: v1.7.5-safe` statement while preserving compatibility with prior v1.6.1+ standards.
- Added an explicit `v1.7.5 → v1.7.8 Change Summary` table to the root `README.md`.
- Added amendment source labels to the three gates in `AGENTS.md`.
- Regenerated `00_Admin/DOC-INDEX-001_Document_Index.md` from actual package files to remove stale or missing paths.
- Added clean release records, file tree, and manifest for this package.

### Safety Decision
- No new product scope is unlocked by this clean package.
- `v1.7.8-safe-clean` keeps `v1.7.5-safe` as the MVP01 architecture baseline.
- v1.7.6, v1.7.7, and v1.7.8 remain operational governance gates, not separate product architecture baselines.
- `/goal` remains an execution brief only and cannot override the constitution, locked architecture, or issue workpack.

---


## v1.7.8-safe-integrated — MVP01 Operational Governance Gate Integration

**Effective Date:** 2026-05-26  
**Baseline:** v1.7.5-safe  
**Status:** Active

### Added
- `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.6_Issue_Exit_Gate_and_Debug_Containment.md`
- `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.7_MVP_Flow_Change_Impact_Review_and_Routing.md`
- `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.8_Goal_Execution_Brief_and_Harness_Scope_Control.md`
- `00_Admin/V1.7.8_SAFE_INTEGRATED_RELEASE_REPORT.md`
- `00_Admin/FILE_TREE_v1.7.8-safe-integrated.txt`
- `00_Admin/manifest_v1.7.8_safe_integrated.json`

### Changed
- Set active constitution to `v1.7.8-safe-integrated`.
- Updated root `README.md` with v1.7.8 operational gate summary.
- Updated `AGENTS.md` with Issue Exit Gate, Flow Change Impact Review Gate, and /goal Execution Gate.
- Updated `01_Constitution/CURRENT_CONSTITUTION.md` with integrated v1.7.6–v1.7.8 operational governance sections.
- Updated `01_Constitution/ACTIVE_STANDARDS_INDEX.md` to include the three active amendments.
- Updated `00_Admin/VERSION_HISTORY.md` and `00_Admin/DOC-INDEX-001_Document_Index.md` for release traceability.

### Safety Decision
- v1.7.8 does not unlock Command full implementation.
- v1.7.8 does not authorize advanced payment automation, WhatsApp API full automation, refund, suspension, complex installment logic, tax reporting, or full PDF automation.
- `/goal` is an execution brief only. It does not override the constitution, locked architecture, or issue workpack.
- New MVP01 workflow changes must go through Flow Change Impact Review before implementation.
- Issues must pass the Issue Exit Gate before the next issue begins.

---

## v1.7.5-safe — Aircon OS MVP01 L1-L5 Flow Architecture and Owner OS Boundary Release

### Added
- `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_MVP01_AIRCON_OS_L1_L5_FLOW_ARCHITECTURE_v1.7.5.md`
- `03_Development_Standard/STD-DEV-045_MVP01_Aircon_OS_L1_L5_Flow_and_Owner_OS_Standard.md`
- `13_Roadmap/MVP01_AIRCON_OS_L1_L5_FLOW_ARCHITECTURE_v1.7.5.md`

### Changed
- Set active constitution to `v1.7.5-safe`.
- Defined MVP01 as `Core Foundation + Solo Complete + Flow Basic + Command Reserved + Owner Console Basic`.
- Added official L1-L5 flow model for MVP01 issue planning.
- Clarified Aircon OS vs Optimaks Owner OS boundary.
- Mapped commercial package naming to `Solo / Flow / Command` for the Aircon vertical.

### Safety Decision
- Command full implementation remains reserved.
- Advanced payment automation, WhatsApp API full automation, refund, suspension, complex installment logic, tax reporting, and full PDF automation remain future scoped unless explicitly approved by issue.

---


## v1.7.4-clean — Cleanup and Documentation Boundary Release

### Added
- `STD-DEV-044_Development_Document_Module_Boundary_and_Social_Media_Documentation_Standard.md`
- `PROD-005_Social_Media_Documentation_Boundary_and_Future_Module_Notes.md`
- `V1.7.4_CLEANUP_REPORT.md`

### Changed
- Clarified that Social Media is currently a development documentation / future workflow topic, not an active MVP01 product module.
- Fixed duplicate template numbering.
- Updated README version difference record.

### Archived
- Legacy active-looking `docs/`, `templates/`, and `qa/` paths.
- Historical admin files from old versions.

---

# CHANGELOG.md

## v1.7.3 — Flow-first Optimaks OS Architecture and Purpose-first Filing Standard

**Effective Date:** 2026-05-21  
**Status:** Active  
**Supersedes:** v1.6.1

### Added

```text
STD-DEV-039 Core Template Module Plan Boundary Standard
STD-DEV-040 Commercial Workflow PO Invoice Payment and PDF Standard
STD-DEV-041 Optimaks OS Product Architecture Starter Growth Pro Standard
STD-DEV-042 Flow-first MVP and Issue Planning Standard
STD-DEV-043 Issue Workpack Filing and Purpose-first Archive Standard
TPL-DEV-026 MVP Scope Template
TPL-DEV-027 Flow Index Template
TPL-DEV-028 Issue Map Template
TPL-DEV-029 Issue Workpack Template
TPL-DEV-030 Purpose-first Filing Rule Insert
```

### Changed

```text
README.md now includes version difference record from v1.6.1 to v1.7.3.
CURRENT_CONSTITUTION.md now identifies v1.7.3 as active.
ACTIVE_STANDARDS_INDEX.md now includes architecture, commercial workflow, flow-first planning, and filing standards.
AGENTS.md now includes Flow-first Planning Rule and Purpose-first Filing Rule.
VERSION_HISTORY.md now documents v1.6.1, v1.6.2, v1.7.0, v1.7.1, v1.7.2, and v1.7.3.
```

### Upgrade Decision

```text
Upgrade constitution directly to v1.7.3.
Do not build all product layers at once.
Start development with MVP01 Starter, one issue at a time.
```

### Compatibility

```text
Existing v1.6.1 work remains valid unless a future issue or change request identifies an affected artifact.
v1.7.3 applies forward-only by default.
```

## v1.7.9.1 — Issue Linkage and Handoff Governance

### Added

- `01_Constitution/Amendments/CONSTITUTION_AMENDMENT_v1.7.9.1_Issue_Linkage_and_Handoff_Governance.md`
- `03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md`
- `09_Templates/TPL-DEV-039_Issue_Linkage_and_Handoff_Insert.md`
- `12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md`

### Updated

- `CURRENT_CONSTITUTION.md` with Issue Linkage and Handoff Principle
- `ACTIVE_STANDARDS_INDEX.md` with STD-DEV-050 / TPL-DEV-039 references
- `AGENTS.md` with Issue Linkage and Handoff Rule
- `TPL-DEV-029` Workpack template with Issue Linkage section
- `TPL-DEV-032` DONE report template with Handoff to Next Issue section
- `TPL-DEV-036` Master Prompt with Issue Linkage / Handoff requirements

### Scope Decision

No MVP01 product scope is changed. This update only improves issue dependency, handoff, traceability, and merge readiness governance.
