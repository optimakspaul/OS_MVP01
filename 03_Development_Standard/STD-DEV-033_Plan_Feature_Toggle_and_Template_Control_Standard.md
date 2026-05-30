# STD-DEV-033 — Plan, Feature Toggle and Template Control Standard

**Status:** Active in v1.6.0  
**Applies to:** Optimaks OS, Aircon OS, SME OS templates, admin platform, client workspace setup

---

## 1. Purpose

This standard defines how Optimaks OS / Aircon OS should support different pricing packages and different industry templates without creating uncontrolled code duplication.

The founder direction is:

```text
One core system
Different plans
Different industry templates
Manual admin activation first
Automation later
```

---

## 2. Core Rule

Do not create a separate codebase for every client, price plan, or industry vertical unless a documented architecture decision approves it.

Use controlled configuration instead:

```text
client workspace
selected plan
enabled modules
feature flags
industry template
workflow preset
theme / copy / service category settings
```

---

## 3. Plan Governance

Plans such as Lite, Standard, Plus and Pro should be represented as configuration.

Example:

```text
Lite      = basic landing page + lead capture + WhatsApp CTA
Standard  = Lite + CRM + quote / invoice basics
Plus      = Standard + reminders + workflow templates + richer admin tools
Pro       = Plus + deeper automation, analytics, integrations or custom workflows
```

The exact commercial package may change, but the implementation principle should remain:

```text
Plan difference should usually change access, modules and workflow presets, not core architecture.
```

---

## 4. Feature Toggle Rule

Each controlled module should have an explicit enable / disable mechanism.

Examples:

```text
lead_capture_enabled
quote_builder_enabled
invoice_tracker_enabled
booking_calendar_enabled
job_card_enabled
customer_profile_enabled
maintenance_reminder_enabled
whatsapp_toolkit_enabled
```

For MVP, these may be maintained manually by founder/admin. Automation is optional and can be added later.

---

## 5. Template Rule

Industry templates should define default workflow and UI content, not separate product logic.

Examples:

```text
aircon_template
beauty_template
tuition_template
renovation_template
cleaning_template
```

A template may define:

```text
service categories
quote fields
job card fields
recommended landing page sections
default WhatsApp scripts
default follow-up reminders
default FAQ
industry-specific dashboard copy
```

---

## 6. Admin Platform Rule

The Optimaks admin platform may manually activate a client’s plan and template during MVP stage.

Minimum admin setup fields:

```text
client_id
workspace_id
selected_plan
selected_template
enabled_modules
launch_status
onboarding_status
billing_status
```

Automation may be introduced later, but manual setup must still be traceable.

---

## 7. Change Control

Adding a new plan, template, or core module must define:

```text
reason
affected modules
affected database tables
affected routes/pages
affected permissions/RLS
affected onboarding fields
affected pricing/package description
testing requirement
rollback plan
```

If the change affects existing clients or completed 20_Issues, apply STD-DEV-035.

---

## 8. DONE Report Requirement

When an issue changes plan, template or feature toggle behavior, its DONE report must include:

```text
Plan impact
Template impact
Client workspace impact
Module flag impact
Backward compatibility notes
Manual admin setup notes
```
