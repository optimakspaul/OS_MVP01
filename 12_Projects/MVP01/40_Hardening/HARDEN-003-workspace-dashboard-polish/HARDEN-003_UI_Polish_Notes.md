# HARDEN-003 UI Polish Notes

**Hardening Item:** HARDEN-003
**Route:** `/workspace`
**Execution Mode:** UI / Flow / Copy Hardening

---

## UI Changes

```text
Added demo-route navigation
Repositioned hero around owner attention and next actions
Added an eight-section presenter guide with anchor links
Converted section labels into a numbered walkthrough
Clarified local checklist control labels
Removed the aging default booking date
Made the PayNow placeholder visibly non-scannable
Added a direct closeout link to /optimaks-os
```

## Hero and Navigation

The hero now identifies the route as a Starter owner workspace and explains that every control is a local preview.

Route navigation links to:

```text
/end-customer - Customer request
/workspace - Business workspace
/optimaks-os - Demo overview
```

No other route file was modified.

## Presenter Navigation

The section guide uses normal anchor links and existing route sections. Anchor targets have scroll spacing for clearer positioning.

## Local Controls

Checklist buttons now use:

```text
Mark in preview
Preview checked
```

This is clearer than the previous `Manual` / `Checked` wording and explicitly signals local-only behavior.

## Booking Date

The fixed June 2026 date was removed. The date control now starts empty and displays neutral demo guidance until a date is selected.

## PayNow Placeholder

The QR-like graphic was replaced with a striped, dashed demonstration tile labeled:

```text
DEMO ONLY
NOT
scannable
```

No QR data or payment destination exists.

## Accessibility

The update retains semantic sections, headings, buttons, labels, and live regions. It adds semantic navigation, `aria-current` for the active route, and named anchor navigation.
