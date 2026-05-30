# LAYOUT-001 — Folder Numbering Normalization Report

Version: v1.7.9.2-layout-normalized  
Source package: Optimaks_Document_Library_v1.7.9.1_issue_linkage_handoff(1).zip  
Generated: 2026-05-30

## Purpose

Normalize the top-level folder numbering so every numbered folder has a unique prefix and the repository layout is easier for ChatGPT / Codex / Antigravity to reference during Issue execution.

## Problems Found

| Problem | Original folders |
|---|---|
| Duplicate `01_` prefix | `01_Constitution`, `01_Foundation` |
| Duplicate `03_` prefix | `03_Client_Delivery`, `03_Governance_Standard` |
| Unnumbered operational folders | `issues`, `patch_notes` |

## New Layout Rule

Use a single linear top-level sequence:

1. Admin / source of truth
2. Constitution / governance authority
3. Foundation / positioning
4. Development and governance standards
5. Client delivery / legal / compliance
6. Templates / checklists / registers
7. Projects / roadmap / archive
8. Strategy / GTM / partner / preflight
9. Issue workpacks and patch notes

## Folder Rename Map

| Old folder | New folder |
|---|---|
| `01_Foundation` | `02_Foundation` |
| `02_Development_Standard` | `03_Development_Standard` |
| `03_Governance_Standard` | `04_Governance_Standard` |
| `03_Client_Delivery` | `05_Client_Delivery` |
| `04_Legal_Commercial` | `06_Legal_Commercial` |
| `05_ISO_Ready` | `07_ISO_Ready` |
| `06_Grant_Ready` | `08_Grant_Ready` |
| `07_Templates` | `09_Templates` |
| `08_Checklists` | `10_Checklists` |
| `09_Registers` | `11_Registers` |
| `10_Projects` | `12_Projects` |
| `11_Roadmap` | `13_Roadmap` |
| `12_Archive` | `14_Archive` |
| `13_Strategy` | `15_Strategy` |
| `14_Product_Strategy` | `16_Product_Strategy` |
| `15_Sales_GTM` | `17_Sales_GTM` |
| `16_Partner_Governance` | `18_Partner_Governance` |
| `17_Preflight` | `19_Preflight` |
| `issues` | `20_Issues` |
| `patch_notes` | `21_Patch_Notes` |

## Unchanged Folders

| Folder | Reason |
|---|---|
| `.github` | GitHub system folder; should not be numbered. |
| `00_Admin` | Admin/source-of-truth folder remains first. |
| `01_Constitution` | Constitution remains the highest numbered authority folder after Admin. |
| `99_Examples` | Example/sandbox area intentionally stays at 99. |

## Validation Result

- Duplicate numbered top-level folders: **0**
- Text references updated across files: **141**
- Current file tree regenerated:
  - `00_Admin/FILE_TREE.txt`
  - `00_Admin/FILE_TREE_v1.7.9.2-layout-normalized.txt`

## Recommended Commit Message

```text
chore(docs): normalize document library folder numbering
```

## Recommended Commit Description

```text
Normalize top-level Optimaks Document Library folder numbering to remove duplicated numeric prefixes.

- Rename duplicated 01/03 folders into a single sequential structure
- Number issue workpacks and patch notes folders
- Update internal text references to renamed folders
- Regenerate current file tree
- Add layout normalization report
```
