# 00 MVP Dependency Map Template

Version: v1.4.2  
Use: Required for dependent MVPs under a large project.

---

## 1. Parent Project

Parent Project Name:

---

## 2. Purpose

This document defines the sequence and dependency relationship between MVPs or modules under the parent project.

It prevents later MVPs from redefining data models, workflows, or system behavior that should be inherited from earlier MVPs.

---

## 3. MVP Dependency Overview

```text
MVP-01
    ↓ provides:

MVP-02
    ↓ depends on:
    ↓ provides:

MVP-03
    ↓ depends on:
    ↓ provides:

MVP-04
    ↓ depends on:
    ↓ provides:
```

---

## 4. MVP Table

| MVP | Purpose | Depends On | Provides | Status |
|---|---|---|---|---|
| MVP-01 |  | None |  | Draft |
| MVP-02 |  | MVP-01 |  | Draft |
| MVP-03 |  | MVP-01 / MVP-02 |  | Draft |
| MVP-04 |  |  |  | Draft |

---

## 5. Shared Data Decisions

| Shared Data | Source MVP | Used By | Notes |
|---|---|---|---|
| Lead |  |  |  |
| Client |  |  |  |
| Proposal |  |  |  |
| Issue / CR Reference |  |  |  |
| Monthly Value Note |  |  |  |

---

## 6. Shared Component Decisions

| Component / Pattern | Source MVP | Used By | Notes |
|---|---|---|---|
| Layout |  |  |  |
| Table pattern |  |  |  |
| Detail page pattern |  |  |  |
| Status badge pattern |  |  |  |

---

## 7. Integration Points

| Integration Point | Related MVP | Risk Level | CR Required? |
|---|---|---|---|
| Supabase |  |  |  |
| GitHub Issues |  |  |  |
| Google Calendar |  |  |  |
| WhatsApp |  |  |  |
| E-sign |  |  |  |
| Invoice |  |  |  |

---

## 8. Rules for Later MVPs

Later MVPs must not:

1. Redefine shared data models without CR review.
2. Create duplicate versions of the same workflow.
3. Add backend integrations without CR approval.
4. Expand scope beyond the approved MVP folder documents.
5. Ignore upstream decisions from previous MVPs.

---

## 9. Review Notes

Date:

Decision:

Next Action:
