# ISSUE-012 UX Flow Notes

**Issue:** ISSUE-012
**Project:** MVP01
**Route:** `src/app/workspace/page.tsx`

---

## 1. Purpose

This file records the Lead / Customer Flow UX added to the client workspace.

---

## 2. UX Flow

The visible flow is:

```text
Lead inbox -> Lead detail -> Manual qualification -> Customer profile preview -> Quote estimate handoff
```

---

## 3. Lead Inbox

The lead inbox shows static demo leads with:

```text
lead ID
customer name
service issue
lead status
converted preview state
```

Status filters are local UI filters only.

---

## 4. Lead Detail

The lead detail panel shows:

```text
phone
service address
service issue
preferred timing
request source
service context
```

This is a conceptual lead review panel. It does not fetch or save lead data.

---

## 5. Customer Profile Summary

The customer profile card previews how a lead may become a customer.

The convert-to-customer control marks the selected lead as converted in local browser state only.

---

## 6. Manual Action Checklist

The checklist guides the owner/admin through:

```text
review request context
contact customer manually
confirm address and access notes
qualify lead for quote estimate
```

Checklist state is local and non-persistent.

---

## 7. Quote Estimate Handoff

The next quote step is copy only.

ISSUE-012 does not calculate prices, create quote records, produce quote documents, or start ISSUE-013.
