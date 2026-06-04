"use client";

import { FormEvent, useMemo, useState } from "react";

type RequestPreview = {
  name: string;
  phone: string;
  serviceIssue: string;
  area: string;
  preferredTiming: string;
  reminderConsent: boolean;
};

const serviceIssues = [
  "Aircon not cold",
  "Water leaking",
  "General servicing",
  "Chemical wash enquiry",
  "New installation estimate",
  "Other home service request",
];

const quoteGuidance: Record<string, string> = {
  "Aircon not cold":
    "A technician may need to check gas pressure, filters, and coil condition before confirming the estimate.",
  "Water leaking":
    "Leak checks usually depend on drainage, piping, and unit condition. Photos help the service team guide the next step.",
  "General servicing":
    "Basic servicing can usually be estimated faster when unit count, type, and location are clear.",
  "Chemical wash enquiry":
    "Chemical wash estimates depend on unit type, condition, and access. The team will confirm before scheduling.",
  "New installation estimate":
    "Installation estimates depend on site access, piping distance, bracket needs, and preferred unit model.",
  "Other home service request":
    "The team will review the service details and provide manual guidance before confirming any booking.",
};

export default function EndCustomerPage() {
  const [serviceIssue, setServiceIssue] = useState(serviceIssues[0]);
  const [preview, setPreview] = useState<RequestPreview | null>(null);

  const whatsappMessage = useMemo(
    () =>
      encodeURIComponent(
        `Hi Optimaks, I would like help with: ${serviceIssue}. Please guide me through the next step.`,
      ),
    [serviceIssue],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setPreview({
      name: String(formData.get("name") || "Customer"),
      phone: String(formData.get("phone") || "Not provided"),
      serviceIssue,
      area: String(formData.get("area") || "Service area not provided"),
      preferredTiming: String(
        formData.get("preferredTiming") || "Timing not selected",
      ),
      reminderConsent: formData.get("reminderConsent") === "on",
    });
  }

  return (
    <main className="end-customer-page">
      <section className="end-customer-hero" aria-labelledby="request-title">
        <p className="eyebrow">Aircon / Home Service Starter Template</p>
        <div className="hero-grid">
          <div>
            <h1 id="request-title">Request a home service estimate</h1>
            <p className="hero-copy">
              Share the service issue, preferred timing, and contact details.
              This MVP01 demo shows the manual-assisted path from request to
              quote estimate, booking interest, payment status, and reminder.
            </p>
          </div>
          <div className="demo-boundary" role="note">
            <strong>Demo boundary</strong>
            <span>
              This form does not save data, create a lead, process payment, or
              call WhatsApp APIs. It previews the customer journey only.
            </span>
          </div>
        </div>
      </section>

      <section
        className="end-customer-card"
        aria-labelledby="request-form-title"
      >
        <div>
          <p className="step-label">Request entry</p>
          <h2 id="request-form-title">Tell us what you need help with</h2>
        </div>

        <form className="request-form" onSubmit={handleSubmit}>
          <label>
            Service issue
            <select
              name="serviceIssue"
              value={serviceIssue}
              onChange={(event) => setServiceIssue(event.target.value)}
            >
              {serviceIssues.map((issue) => (
                <option key={issue} value={issue}>
                  {issue}
                </option>
              ))}
            </select>
          </label>

          <div className="form-grid">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              Phone or WhatsApp
              <input
                name="phone"
                type="tel"
                placeholder="+65 9123 4567"
                inputMode="tel"
              />
            </label>
          </div>

          <label>
            Address / service area
            <input
              name="area"
              type="text"
              placeholder="Example: Tampines, HDB block, or condo name"
            />
          </label>

          <fieldset>
            <legend>Booking interest / preferred timing</legend>
            <div className="radio-stack">
              {["Today", "Tomorrow", "This week", "Need advice first"].map(
                (timing) => (
                  <label key={timing} className="choice-row">
                    <input
                      name="preferredTiming"
                      type="radio"
                      value={timing}
                    />
                    <span>{timing}</span>
                  </label>
                ),
              )}
            </div>
          </fieldset>

          <label>
            Extra notes
            <textarea
              name="notes"
              rows={4}
              placeholder="Tell us the unit type, what happened, and whether photos are available."
            />
          </label>

          <label className="choice-row">
            <input name="reminderConsent" type="checkbox" />
            <span>
              I want a maintenance reminder or follow-up after this request.
            </span>
          </label>

          <button type="submit">Preview request summary</button>
        </form>
      </section>

      <section className="support-grid" aria-label="Request support details">
        <article className="support-card">
          <p className="step-label">Quote estimate guidance</p>
          <h2>{serviceIssue}</h2>
          <p>{quoteGuidance[serviceIssue]}</p>
        </article>

        <article className="support-card">
          <p className="step-label">Payment status</p>
          <h2>Manual payment confirmation</h2>
          <p>
            MVP01 does not process payments here. The business can explain cash,
            PayNow, or manual payment status after reviewing the request.
          </p>
        </article>

        <article className="support-card">
          <p className="step-label">Manual-assisted handoff</p>
          <h2>Continue through WhatsApp</h2>
          <p>
            Use the CTA as a manual handoff placeholder. No WhatsApp API or
            automated message sending is implemented.
          </p>
          <a
            className="whatsapp-link"
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp handoff
          </a>
        </article>
      </section>

      {preview ? (
        <section className="end-customer-card" aria-live="polite">
          <p className="step-label">Non-persistent submit preview</p>
          <h2>Request summary</h2>
          <dl className="summary-list">
            <div>
              <dt>Name</dt>
              <dd>{preview.name}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{preview.phone}</dd>
            </div>
            <div>
              <dt>Service issue</dt>
              <dd>{preview.serviceIssue}</dd>
            </div>
            <div>
              <dt>Service area</dt>
              <dd>{preview.area}</dd>
            </div>
            <div>
              <dt>Preferred timing</dt>
              <dd>{preview.preferredTiming}</dd>
            </div>
            <div>
              <dt>Reminder consent</dt>
              <dd>{preview.reminderConsent ? "Requested" : "Not requested"}</dd>
            </div>
          </dl>
          <p className="demo-note">
            This summary is local to the browser session. It is not saved,
            submitted to an API, or connected to a client workspace.
          </p>
        </section>
      ) : null}
    </main>
  );
}
