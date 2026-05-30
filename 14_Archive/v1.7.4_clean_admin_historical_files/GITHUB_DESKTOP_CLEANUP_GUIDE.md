# GitHub Desktop Cleanup Guide for Optimaks Document Library

| Field | Value |
|---|---|
| Document Code | ADM-004 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Provide a safe way to clean up messy GitHub Desktop uploads and restore a clean document-library baseline. |

---

## Situation

If files were uploaded repeatedly through GitHub Desktop and the repository now looks messy, the safest approach is to create a clean baseline instead of continuing to patch random folders.

---

## Recommended Cleanup Option A — Keep Existing Repo, Clean with a Branch

Use this when the repo already has useful history you want to keep.

```text
Current messy repo
   ↓
Create cleanup branch
   ↓
Remove duplicate / incorrect folders
   ↓
Copy clean optimaks_document_library_v1_3 folder
   ↓
Review GitHub Desktop diff
   ↓
Commit
   ↓
Push
   ↓
Merge after review
```

Recommended branch name:

```text
docs/clean-v1.3-document-library
```

Recommended commit message:

```text
docs: consolidate Optimaks document library v1.3 with detailed version history
```

---

## Recommended Cleanup Option B — Start a Fresh Repo

Use this when the repo is too messy and there is no important code history.

Recommended new repo name:

```text
optimaks-document-library
```

Recommended first commit message:

```text
docs: initialize Optimaks document library v1.3 baseline
```

---

## What Should Be Uploaded

Upload the clean folder:

```text
optimaks_document_library_v1_3/
```

Do not upload old ZIP files into the repo unless you intentionally want an archive folder.

---

## What Should Not Be Mixed Into Main Folders

Avoid mixing these directly into the root without clear archive labels:

- old v0.1 folders
- old v1.0 folders
- broken v1.2 upload
- Word / PDF export packages
- duplicate ZIP files
- temporary extracted folders

If you want to keep them, place them under:

```text
_archive/
```

Example:

```text
_archive/v0.1/
_archive/v1.0/
_archive/v1.2-broken-upload/
_archive/v1.3-single-file-package/
```

---

## Quick Check Before Commit

Before clicking Commit in GitHub Desktop, confirm:

- `README.md` exists.
- `00_Admin/CHANGELOG.md` exists.
- `00_Admin/VERSION_HISTORY.md` exists.
- `00_Admin/DOC-INDEX-001_Document_Index.md` exists.
- `03_Development_Standard/STD-DEV-005_Mobile_Assisted_Development_Workflow.md` exists.
- `.github/ISSUE_TEMPLATE/change_request.md` exists.
- No random duplicate extracted folders appear at root.

---

## Simple Rule

```text
Markdown files = source of truth.
Word / PDF / ZIP = export or archive only.
```
