# ISSUE-007 Flow Alignment Notes

**Issue:** ISSUE-007
**Project:** MVP01
**Alignment Target:** v0.3 Flow package

---

## 1. Global Flow

MVP01 uses the three-layer flow model:

```text
End Customer Interface
  ->
Client Workspace
  ->
Optimaks OS / Platform
```

---

## 2. MVP01 Starter Flow

MVP01 stays focused on the Starter Complete operating flow:

```text
Request -> Lead -> Customer -> Quote -> Booking -> Payment -> Reminder / Report
```

---

## 3. End Customer Interface Boundary

The End Customer Interface is limited to the basic customer-facing request entry and CTA boundary.

ISSUE-010 is the first implementation issue for this layer. ISSUE-007 does not create pages, UI, forms, API routes, Supabase client code, or customer-facing behavior.

---

## 4. Client Workspace Boundary

The Client Workspace is the SME owner / team operating area for receiving requests, managing customer workflow, and handling Starter-depth operations.

ISSUE-011 is the first implementation issue for this layer. ISSUE-007 does not create workspace UI or app shell changes.

---

## 5. Optimaks OS Basic Boundary

Optimaks OS Basic supports:

```text
client list
plan status
onboarding status
workspace link
demo readiness
release handover
```

ISSUE-018 carries the Optimaks OS Basic + Demo / Release Pack outcome. Full Platform and AI capabilities remain reserved.
