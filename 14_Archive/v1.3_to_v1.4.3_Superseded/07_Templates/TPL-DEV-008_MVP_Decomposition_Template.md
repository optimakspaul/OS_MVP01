# TPL-DEV-008 MVP Decomposition Template

Version: v1.4.2  
Use: Break a large project into MVPs or modules before development.

---

## 1. Large Project Name

Project Name:

---

## 2. Project Type

Select one:

- [ ] Single Issue
- [ ] MVP
- [ ] Module
- [ ] Large Project
- [ ] Program / Platform

---

## 3. Project Purpose

What problem does this large project solve?

---

## 4. Proposed MVP / Module Breakdown

| MVP / Module | Purpose | Dependent or Independent | Notes |
|---|---|---|---|
| MVP-01 |  |  |  |
| MVP-02 |  |  |  |
| MVP-03 |  |  |  |
| MVP-04 |  |  |  |

---

## 5. Dependency Questions

Answer each question.

| Question | Yes / No | Notes |
|---|---|---|
| Does this MVP use data from another MVP? |  |  |
| Does this MVP update shared client data? |  |  |
| Does this MVP affect the core system? |  |  |
| Does this MVP change the data model? |  |  |
| Does this MVP affect client workflow? |  |  |
| Does this MVP need to integrate into Optimaks OS later? |  |  |
| Can this MVP run independently without shared data? |  |  |
| Is this only a prototype or practice tool? |  |  |

---

## 6. Dependency Map Draft

```text
MVP-01:
    ↓ provides:

MVP-02:
    ↓ depends on:
    ↓ provides:

MVP-03:
    ↓ depends on:
    ↓ provides:
```

---

## 7. Recommended Development Sequence

```text
1.
2.
3.
4.
```

---

## 8. Independent MVPs That Can Be Prepared in Parallel

```text
1.
2.
3.
```

---

## 9. MVPs That Must Wait for Upstream Decisions

```text
1.
2.
3.
```

---

## 10. Out of Scope for First Round

```text
1.
2.
3.
```

---

## 11. AI Context Required

For AI execution, include:

- [ ] Optimaks v1.4 relevant rules
- [ ] v1.4.1 AI pipeline rule
- [ ] v1.4.2 MVP dependency rule
- [ ] Parent project brief
- [ ] MVP dependency map
- [ ] Current MVP Step 1 files
- [ ] Current MVP Step 2 files

---

## 12. Decision

Select one:

- [ ] Proceed as independent MVP
- [ ] Proceed as dependent MVP
- [ ] Create dependency map first
- [ ] Convert to CR
- [ ] Convert to Full CR
- [ ] Put into backlog
