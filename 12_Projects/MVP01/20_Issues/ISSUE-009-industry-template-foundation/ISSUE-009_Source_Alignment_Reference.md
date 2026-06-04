# ISSUE-009 Source Alignment Reference

**Issue:** ISSUE-009  
**Title:** Industry Template Foundation  
**Project:** MVP01  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Baseline Alignment:** Optimaks MVP01 to MVP05 Phase / Issue Package v0.3 with Flow  
**Current MVP01 Definition:** Starter Complete + Optimaks OS Basic  
**Previous Issue:** ISSUE-008 Module Library Foundation  
**Next Issue:** ISSUE-010 End Customer Interface Basic  

---

## 1. Source of Truth

ISSUE-009 must align with the current architecture direction:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
```

ISSUE-009 is:

```text
Industry Template Foundation
```

It is not an implementation issue.

It must not create migrations, database tables, app UI, template tables, module tables, entitlement tables, Supabase client code, RLS, or ISSUE-010 work.

---

## 2. Relationship to ISSUE-008

ISSUE-008 defined the MVP01 module library:

```text
Lead Module = Basic
Customer Module = Basic
Quote Module = Estimate
Booking Module = Manual
Payment Module = Status
Reminder Module = Basic
Report Module = Basic
```

ISSUE-009 must map these modules into an industry template foundation.

The first MVP01 template should be focused on:

```text
Aircon / Home Service / Field Service starter template
```

This template is a documentation and configuration baseline only.

---

## 3. Industry Template Concept

An Industry Template is not a separate product.

It is a packaged operating pattern that applies the shared MVP01 module library to one target industry.

For MVP01:

```text
Shared Modules + Starter Depth + One Primary Industry Template = Demo-ready MVP01
```

---

## 4. Reserved Boundaries

Reserved for later MVPs:

```text
Multi-industry template marketplace
Template table implementation
Template builder UI
Industry-specific automation engine
Advanced workflow variations
AI industry advisor / copilot
Grow / Pro / Platform template depth
Multiple live industry templates
```

MVP01 should define the template model, naming, module mapping, sample flow, and demo boundaries only.
