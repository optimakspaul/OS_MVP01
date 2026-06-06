"use client";

import Link from "next/link";
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
        <nav className="demo-route-nav" aria-label="MVP01 demo routes">
          <span>Demo preview</span>
          <div>
            <Link className="active" href="/end-customer" aria-current="page">
              Customer request
            </Link>
            <Link href="/workspace">Business workspace</Link>
            <Link href="/optimaks-os">Demo overview</Link>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Aircon / Home Service Starter</p>
            <h1 id="request-title">
              Get clear next steps for your home service request
            </h1>
            <p className="hero-copy">
              Tell us what is happening, where service is needed, and when you
              would like help. This preview shows how a business can review
              your request and guide you manually toward an estimate and
              suitable service time.
            </p>
            <div className="trust-row" aria-label="Preview reassurances">
              <span>No account needed</span>
              <span>No payment collected</span>
              <span>No automatic messages</span>
            </div>
          </div>
          <div className="demo-boundary" role="note" aria-label="Demo notice">
            <strong>Preview only: nothing is sent or saved</strong>
            <span>
              Reviewing this form only creates a summary on this page. It does
              not contact a business, create a lead or booking, process a
              payment, or schedule a reminder.
            </span>
          </div>
        </div>
      </section>

      <section
        className="end-customer-card"
        aria-labelledby="customer-journey-title"
      >
        <div className="section-heading">
          <p className="step-label">What happens next</p>
          <h2 id="customer-journey-title">
            A simple request, followed by a real conversation
          </h2>
          <p>
            The business reviews the details first. Any estimate, appointment,
            payment instruction, or follow-up is confirmed manually outside
            this preview.
          </p>
        </div>
        <ol className="customer-journey">
          <li>
            <span>1</span>
            <div>
              <strong>Describe the service issue</strong>
              <p>Share the problem, location, contact details, and timing.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>The business reviews your request</strong>
              <p>They may ask for photos, unit details, or site information.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Confirm the next step together</strong>
              <p>
                Estimate and booking details are agreed before any payment or
                reminder follow-up.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="end-customer-card"
        aria-labelledby="request-form-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 1: Request details</p>
          <h2 id="request-form-title">What can the service team help with?</h2>
          <p>
            Add enough detail for a useful first conversation. You can review
            your answers before choosing any manual handoff.
          </p>
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
            <legend>When would you prefer the business to contact you?</legend>
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
              I am interested in a future maintenance reminder or service
              follow-up.
            </span>
          </label>

          <div className="form-action">
            <button type="submit">Review my request preview</button>
            <p>This does not submit or send your details.</p>
          </div>
        </form>
      </section>

      <section
        className="end-customer-card"
        aria-labelledby="service-boundaries-title"
      >
        <div className="section-heading">
          <p className="step-label">Before you continue</p>
          <h2 id="service-boundaries-title">
            What this preview does and does not confirm
          </h2>
        </div>
        <div className="support-grid" aria-label="Request support details">
          <article className="support-card">
            <p className="step-label">Estimate guidance</p>
            <h2>{serviceIssue}</h2>
            <p>{quoteGuidance[serviceIssue]}</p>
            <strong className="boundary-caption">
              No instant or binding quote is created.
            </strong>
          </article>

          <article className="support-card">
            <p className="step-label">Booking</p>
            <h2>Timing is a preference</h2>
            <p>
              The business must review availability and confirm a service date
              with you. This page does not reserve or schedule a slot.
            </p>
          </article>

          <article className="support-card">
            <p className="step-label">Payment</p>
            <h2>Payment comes after confirmation</h2>
            <p>
              No money, card details, PayNow transfer, or payment status is
              handled here. The business provides instructions manually.
            </p>
          </article>

          <article className="support-card">
            <p className="step-label">Reminder</p>
            <h2>Follow-up is an interest only</h2>
            <p>
              Selecting reminder interest does not schedule a message. Any
              maintenance follow-up must be arranged manually by the business.
            </p>
          </article>
        </div>
      </section>

      <section
        className="end-customer-card handoff-card"
        aria-labelledby="manual-handoff-title"
      >
        <div>
          <p className="step-label">Optional manual handoff</p>
          <h2 id="manual-handoff-title">Open a draft message in WhatsApp</h2>
          <p>
            This opens WhatsApp with draft wording only. No business recipient
            is configured, no message is sent automatically, and this page
            does not use the WhatsApp API.
          </p>
        </div>
        <div className="handoff-action">
          <a
            className="whatsapp-link"
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp draft
          </a>
          <p>You choose the recipient and whether to send the message.</p>
        </div>
      </section>

      {preview ? (
        <section className="end-customer-card" aria-live="polite">
          <p className="step-label">Local review only</p>
          <h2>Your request preview</h2>
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
            This summary exists only on this page for the current browser
            session. It has not been sent to a business or connected to the
            business workspace.
          </p>
          <Link className="demo-next-link" href="/workspace">
            Continue the demo in the business workspace
          </Link>
        </section>
      ) : null}
    </main>
  );
}
