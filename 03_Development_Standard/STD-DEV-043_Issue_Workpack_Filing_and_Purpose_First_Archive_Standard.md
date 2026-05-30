# STD-DEV-043 Issue Workpack Filing and Purpose-first Archive Standard

**Version:** v1.7.3  
**Status:** Active  
**Applies To:** Issue folders, AI-generated files, DONE reports, diagrams, temporary outputs, file change logs.

---

## 1. Purpose

This standard defines how AI-generated documents and code changes are filed without making the system too rigid.

The goal is to avoid random files while still allowing AI tools to create unexpected but useful artifacts.

---

## 2. Main Rule

```text
File by purpose first.
Use file extension only as a secondary clue.
```

---

## 3. Issue Folder Structure

Default issue folder:

```text
20_Issues/MVP01/ISSUE-XXX-short-name/
├─ ISSUE.md
├─ AI_CONTEXT.md
├─ FLOW_REFERENCE.md
├─ IMPLEMENTATION_NOTES.md
├─ DONE_REPORT.md
├─ FILE_CHANGE_LOG.md
├─ archive/
└─ _needs_review/
```

---

## 4. Formal Code Location

Formal code must be stored in the normal application structure:

```text
app/
src/
components/
lib/
supabase/
docs/
```

The issue folder records what changed. It should not become the main codebase.

---

## 5. Filing Decision Table

| Output Type | Default Location |
|---|---|
| Formal application code | `app/`, `src/`, `components/`, `lib/` |
| Supabase migration | `supabase/migrations/` |
| Flow diagram | `docs/flows/` or issue folder if draft |
| Issue workpack | `20_Issues/MVP01/ISSUE-XXX/ISSUE.md` |
| AI context | `20_Issues/MVP01/ISSUE-XXX/AI_CONTEXT.md` |
| DONE report | `20_Issues/MVP01/ISSUE-XXX/DONE_REPORT.md` |
| File change log | `20_Issues/MVP01/ISSUE-XXX/FILE_CHANGE_LOG.md` |
| Temporary AI draft | `20_Issues/MVP01/ISSUE-XXX/archive/` |
| Unclear generated file | `20_Issues/MVP01/ISSUE-XXX/_needs_review/` |

---

## 6. _needs_review Rule

Use `_needs_review` when:

```text
The file purpose is unclear
The file may be useful but is not production-ready
The AI generated a file outside allowed scope
The extension does not match an approved folder
The founder must decide whether to keep, move, or delete it
```

Every `_needs_review` file must be listed in `FILE_CHANGE_LOG.md` with a reason.

---

## 7. No Random Top-level Folder Rule

AI tools must not create new top-level folders unless explicitly allowed.

If a new folder appears necessary, AI must:

```text
Explain why in IMPLEMENTATION_NOTES.md
Place the draft in _needs_review if uncertain
Wait for founder review before treating it as official structure
```

---

## 8. DONE Report Requirement

Every DONE_REPORT.md must include:

```text
Files changed
Files created
Files moved
Files placed in archive
Files placed in _needs_review
Reason for uncertain files
Recommended cleanup action
```
