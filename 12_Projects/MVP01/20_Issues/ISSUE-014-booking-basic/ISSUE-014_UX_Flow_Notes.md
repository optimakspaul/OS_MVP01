# ISSUE-014 UX Flow Notes

**Issue:** ISSUE-014
**Title:** Booking Basic
**Project:** MVP01

---

## 1. UX Entry Point

The Booking Basic flow is added to the existing `/workspace` page.

It appears after Quote Estimate Basic so the user can review the accepted quote/customer context, coordinate preferred booking timing manually, and then hand off to Payment Basic.

---

## 2. User Story

```text
A quote estimate has been prepared.
The business owner checks customer and quote context.
The owner reviews the service address and access notes.
The owner chooses a preferred date and time locally.
The owner marks booking status conceptually.
The owner prepares customer confirmation copy.
The next step is Payment Basic in ISSUE-015.
```

---

## 3. Visible UX Sections

The interface includes:

```text
Booking Basic heading
Demo boundary notice
Selected quote/customer summary
Service address / area summary
Preferred date/time preview controls
Booking status selector
Manual scheduling checklist
Customer confirmation copy
Calendar integration reserved note
Payment Basic handoff panel
```

---

## 4. Local Interaction Model

The UI uses local browser state for:

```text
booking date preview
booking time preview
booking status
manual booking checklist
```

The UI does not store, submit, sync, or persist these values.

---

## 5. Accessibility Notes

The booking flow uses:

```text
semantic sections
headings tied to aria-labelledby
button controls for booking status
date/time inputs with labels
visible status text
plain text demo boundary notices
```

---

## 6. UX Boundary

The UI intentionally avoids:

```text
confirmed scheduler language
technician dispatch language
calendar sync language
payment collection
automated reminder copy
booking record creation
```

All booking output is demo guidance only.
