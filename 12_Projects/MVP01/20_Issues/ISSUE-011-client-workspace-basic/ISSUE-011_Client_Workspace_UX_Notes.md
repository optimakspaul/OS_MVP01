# ISSUE-011 Client Workspace UX Notes

**Issue:** ISSUE-011
**Project:** MVP01
**Route:** `src/app/workspace/page.tsx`

---

## 1. Purpose

This file records the client workspace UX implemented for Client Workspace Basic.

---

## 2. UX Flow

The visible workspace flow is:

```text
Lead -> Customer -> Quote -> Booking -> Payment -> Reminder -> Report
```

---

## 3. Workspace Header

The page identifies the workspace as:

```text
Aircon / Home Service Starter Template
Plan depth: Starter Complete
Mode: manual-assisted and non-persistent
```

This keeps the UI aligned with MVP01 Starter Complete + Optimaks OS Basic without creating Optimaks OS admin functionality.

---

## 4. Request Board

The request board shows static demo customer requests with:

```text
request ID
customer context
service issue
service area
current starter stage
next manual step
```

The board can be filtered locally by stage. The filter does not query data or update stored status.

---

## 5. Status Panels

The page includes panels for:

```text
quote estimate status
booking status
payment status
reminder / follow-up status
```

Each panel uses manual-assisted copy and explicitly avoids persistent workflow behavior.

---

## 6. Manual Action Queue

The manual action queue lets the user toggle preview actions in local browser state.

The toggles are demo-only. They do not create tasks, status changes, customer records, notifications, or workflow automation.

---

## 7. Basic Report Snapshot

The report snapshot uses static counts for demo storytelling only.

No analytics engine, export, report table, stored metric, or monthly report automation is created.
