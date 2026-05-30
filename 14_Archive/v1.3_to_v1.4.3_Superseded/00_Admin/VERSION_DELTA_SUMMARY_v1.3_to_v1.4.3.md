# VERSION_DELTA_SUMMARY v1.3 to v1.4.3

| Version | Type | Added / Changed | Main Files |
|---|---|---|---|
| v1.3 | Baseline | Created clean Optimaks document library with GitHub Markdown as source of truth, mobile-assisted development workflow, CR workflow, staging before production, QA/security, project context files, ISO-ready and grant-ready structure. | FND-002, STD-DEV-001 to STD-DEV-012, CLT files, LEG files, ISO files, templates, checklists, registers |
| v1.4 | Governance upgrade | Added self-management rule, daily priority rule, idea triage, Mini Issue / Issue / CR / Full CR classification, client value control, AI execution control, and constitution upgrade trigger rule. | STD-DEV-013, STD-DEV-014, TPL-DEV-006, CHK-DEV-006, ROADMAP-001 |
| v1.4.1 | Pipeline patch | Added AI-assisted semi-automated development pipeline: Idea → Project Brief → User Flow → Architecture Diagram → UI Screen List → Data Model Draft → Issue Breakdown → AI Prompt → Implementation → Testing → GitHub Diff → Changelog. | STD-DEV-015, TPL-DEV-007_AI_Pipeline_Context_Package, CHK-DEV-007 |
| v1.4.2 | MVP decomposition patch | Added large project decomposition, dependent vs independent MVP classification, MVP dependency map, and sequence inheritance rule. | STD-DEV-016, TPL-DEV-008_MVP_Decomposition_Template, 00_MVP_Dependency_Map_TEMPLATE |
| v1.4.3 | Integrated operating patch | Integrated v1.3 to v1.4.2 and added Small Core First Rule, document-as-AI-input rule, layered MVP inheritance, UI/backend parallel development, internal MVP vs client delivery separation, monthly value rule, and version discipline. | FND-002 updated, STD-DEV-017, STD-DEV-018, STD-DEV-019, CLT-006 updated |

---

## What Should Be Written Into the Constitution Itself

| Topic | Written Into Constitution? | Where |
|---|---:|---|
| Small Core First Rule | Yes | FND-002, STD-DEV-017 |
| MVP one-layer-at-a-time rule | Yes | FND-002, STD-DEV-016, STD-DEV-017 |
| Dependent vs independent MVP classification | Yes | STD-DEV-016 |
| AI must use documents as input, not just one-line prompt | Yes | FND-002, STD-DEV-015, STD-DEV-018 |
| UI / UX and backend parallel development rule | Yes | FND-002, STD-DEV-018 |
| Antigravity / Codex role separation | Yes | STD-DEV-013, STD-DEV-018 |
| Mini Issue / Issue / CR / Full CR classification | Yes | STD-DEV-013 |
| Internal MVP vs client delivery separation | Yes | FND-002, STD-DEV-019 |
| Monthly fee must show monthly value | Yes, as delivery principle | FND-002, STD-DEV-019, CLT-006 |
| Aircon OS exact version schedule | No | Keep in 12_Projects |
| MVP_01 exact feature list | Not in foundation, but example allowed | Keep main scope in 12_Projects; example in STD-DEV-017 |
| Three-day work plan | No | Keep in GitHub Issues or 00_Admin notes |

---

## Recommended Upgrade Logic

```text
v1.3 = Document library and base governance
v1.4 = Self-management, issue classification, AI and value control
v1.4.1 = Semi-automated AI development pipeline
v1.4.2 = MVP decomposition and dependency control
v1.4.3 = Small Core First integrated operating rule
```

v1.4.3 should remain a patch-level governance upgrade, not v1.5, because it clarifies how to execute the v1.4 system rather than introducing a new business stage.
