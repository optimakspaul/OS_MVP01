# ISSUE-013 UX Flow Notes

**Issue:** ISSUE-013
**Title:** Quote Estimate Basic
**Project:** MVP01

---

## 1. UX Entry Point

The Quote Estimate Basic flow is added to the existing `/workspace` page.

It appears after the Lead / Customer Flow section so the user can first choose a demo lead/customer, then prepare a manual-assisted estimate for that same context.

---

## 2. User Story

```text
A business owner has qualified a lead.
The owner reviews customer and service context.
The owner selects static service item assumptions.
The owner previews an estimate range.
The owner checks discount and GST notes.
The owner marks a quote status conceptually.
The owner follows a manual checklist before sending the estimate outside the app.
The next step is Booking Basic in ISSUE-014.
```

---

## 3. Visible UX Sections

The interface includes:

```text
Quote Estimate Basic heading
Demo boundary notice
Selected lead/customer summary
Service item list
Estimate range preview
Discount preview slider
GST preview note / toggle
Quote status selector
Manual follow-up checklist
Booking Basic handoff panel
```

---

## 4. Local Interaction Model

The UI uses local browser state for:

```text
selected quote service items
discount preview amount
GST preview toggle
quote status
manual quote checklist
```

The UI does not store, submit, sync, or persist these values.

---

## 5. Accessibility Notes

The estimate flow uses:

```text
semantic sections
headings tied to aria-labelledby
button controls for selectable items and quote status
checkbox/range controls with labels
visible status text
plain text demo boundary notices
```

---

## 6. UX Boundary

The UI intentionally avoids:

```text
binding quote language
customer approval workflow
invoice language
payment collection
PDF download
booking form submission
```

All quote-related output is demo guidance only.
