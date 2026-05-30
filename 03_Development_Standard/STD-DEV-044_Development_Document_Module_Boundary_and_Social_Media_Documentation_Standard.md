# STD-DEV-044 — Development Document Module Boundary and Social Media Documentation Standard

**Version:** v1.7.4-clean  
**Status:** Active  
**Owner:** Optimaks  
**Applies to:** Development Constitution, documentation planning, future module intake, MVP issue planning

---

## 1. Purpose

This standard prevents confusion between **product modules** and **development documentation modules**.

A topic such as Social Media may be important for future sales, marketing, client delivery, and content operations, but it must not automatically become a product feature or MVP coding module.

For the current constitution cleanup stage, Social Media shall be treated as a **development documentation subject area**, not as an active product module.

---

## 2. Core Rule

Optimaks shall separate the following three concepts:

1. **Product Module** — a feature implemented in the application.
2. **Development Document Module** — a documentation category used to define future workflows, standards, templates, prompts, and operating procedures.
3. **Commercial / GTM Asset** — a sales, pricing, campaign, or marketing document used for client acquisition.

A topic may exist as documentation before it becomes a product module.

---

## 3. Social Media Boundary

Social Media is currently classified as:

```text
Current Status: Development Document / Future Marketing Workflow Topic
Current Product Status: Not implemented
MVP01 Status: Excluded from core coding scope, except basic social links or campaign display if explicitly approved
```

Social Media documentation may include:

- social media content workflow
- short video delivery checklist
- campaign landing page linkage
- review marketing workflow
- client content intake form
- post idea library
- social proof display guideline
- future social media product module notes

Social Media documentation must not be used to justify building auto-posting, platform integrations, social analytics, AI caption generators, or content schedulers inside MVP01.

---

## 4. Where Social Media Documents Belong

Social Media-related documents shall be stored as documentation or GTM references, not inside Core Foundation.

Recommended locations:

```text
17_Sales_GTM/                 # Sales, campaign, promotion, offer, outreach material
16_Product_Strategy/          # Future product strategy and module ideas
10_Checklists/                # Delivery or content production checklist
09_Templates/                 # Content intake or campaign templates
13_Roadmap/                   # Future roadmap placeholder only
```

Do not place Social Media as an active MVP coding module unless a later constitution change explicitly approves it.

---

## 5. MVP01 Rule

For MVP01 Starter, the allowed scope is limited to:

```text
Allowed:
- social media link fields
- follow-us display section
- campaign CTA display
- promo banner display
- review/social proof section

Not allowed unless separately approved:
- auto posting
- Meta / TikTok / LinkedIn API integration
- content scheduler
- AI caption generator
- social analytics dashboard
- lead attribution from social campaigns
```

---

## 6. Issue Planning Rule

When creating 20_Issues, Social Media must be labelled according to its true type:

```text
DOC-SOCIAL-*      Documentation / workflow / template issue
GTM-SOCIAL-*      Sales, campaign, or marketing asset issue
MVP-SOCIAL-*      Product implementation issue; requires approval
```

Default classification is `DOC-SOCIAL-*` unless the issue explicitly implements application code.

---

## 7. AI Agent Instruction

AI agents must not infer that Social Media is an active product module simply because Social Media documents exist in the repository.

Before generating code for any Social Media function, the AI agent must verify:

1. whether the feature is listed in the active MVP scope;
2. whether the issue is a documentation issue or coding issue;
3. whether the required standards and templates are referenced;
4. whether the feature belongs to Starter, Growth, Pro, or future roadmap.

---

## 8. Acceptance Criteria

This standard is satisfied when:

- Social Media appears only as documentation / future workflow unless approved otherwise.
- MVP01 does not expand into a social media platform.
- Product modules and development documentation modules are clearly separated.
- AI issue prompts classify Social Media work as DOC, GTM, or MVP before execution.
