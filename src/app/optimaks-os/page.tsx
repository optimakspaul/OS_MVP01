import Link from "next/link";

const clients = [
  {
    name: "CoolAir Services",
    template: "Aircon / Home Service Starter",
    plan: "Starter Complete",
    onboarding: "Founder demo ready",
    workspace: "/workspace",
    workspaceLabel: "Open business workspace",
    status: "Ready for founder demo",
    note: "A sample service business prepared to demonstrate the full owner workflow.",
  },
  {
    name: "Northpoint Home Care",
    template: "Home Service Starter",
    plan: "Starter Complete preview",
    onboarding: "Pitch review in progress",
    workspace: "/workspace",
    workspaceLabel: "Open business workspace",
    status: "Demo data only",
    note: "A second sample showing that the same Starter structure can support a similar home-service business.",
  },
  {
    name: "Customer Request Example",
    template: "Aircon / Home Service Starter",
    plan: "Customer entry preview",
    onboarding: "Request journey ready",
    workspace: "/end-customer",
    workspaceLabel: "Open customer request",
    status: "Non-persistent",
    note: "A customer-facing starting point that connects the pitch back to the request journey.",
  },
];

const pitchPoints = [
  {
    label: "Starter Complete",
    title: "One practical owner flow",
    detail:
      "Show how a small service business can move from customer request to quote, booking, payment tracking, reminder, and basic reporting.",
  },
  {
    label: "Optimaks OS Basic",
    title: "One clear demo overview",
    detail:
      "Explain sample clients, Starter plan positioning, readiness labels, and route links without suggesting a production admin console.",
  },
  {
    label: "Controlled next step",
    title: "Expansion stays deliberate",
    detail:
      "Backend operations, tenant provisioning, billing, entitlements, deployment automation, and MVP02 require separate approval.",
  },
];

const demoChecklist = [
  "Start with the customer request and the service problem it captures.",
  "Follow the same story into the business workspace.",
  "Show the owner flow from lead review through payment and follow-up.",
  "Return here to explain client readiness and demo handoff.",
  "Close with what MVP01 includes and what remains reserved.",
];

const releaseChecklist = [
  "Confirm all three demo routes load with clear preview boundaries.",
  "Keep the pitch and handoff notes aligned with accepted MVP01 scope.",
  "Use sample data only; do not enter real client details or secrets.",
  "Keep production deployment a separate founder-approved decision.",
  "Keep backend, provisioning, billing, entitlements, and MVP02 reserved.",
];

const flowSteps = [
  "Customer explains the service request",
  "Business owner reviews the request",
  "Owner follows the Starter operation flow",
  "Settings, reminders, and value snapshot support follow-up",
  "Optimaks OS Basic shows demo and readiness context",
  "Founder closes with the release boundary and next decision",
];

const included = [
  "Starter Complete customer-to-owner demo journey",
  "Sample client and readiness overview",
  "Starter plan positioning labels",
  "Links to customer request and business workspace previews",
  "Founder demo and release-readiness checklists",
  "Accepted MVP01 included/reserved boundary",
];

const reserved = [
  "Production Optimaks OS admin console",
  "Real client records and management backend",
  "Tenant and workspace provisioning",
  "Billing, subscriptions, and plan enforcement",
  "Production deployment automation",
  "Module entitlement and permission logic",
  "MVP02 planning or execution without a separate approved workpack",
];

export default function OptimaksOsPage() {
  return (
    <main className="optimaks-os-page">
      <section className="optimaks-hero" aria-labelledby="optimaks-title">
        <nav className="demo-route-nav" aria-label="MVP01 demo routes">
          <span>Founder demo</span>
          <div>
            <Link href="/end-customer">Customer request</Link>
            <Link href="/workspace">Business workspace</Link>
            <Link className="active" href="/optimaks-os" aria-current="page">
              Demo overview
            </Link>
          </div>
        </nav>

        <div className="workspace-hero-copy">
          <p className="eyebrow">Founder sales-demo closeout</p>
          <h1 id="optimaks-title">
            Explain Starter Complete and Optimaks OS Basic in one view
          </h1>
          <p>
            Use this static overview to connect the customer request, the
            business workspace, and the founder&apos;s demo story. Optimaks OS
            Basic shows sample client readiness and route access; it is not a
            production operations console.
          </p>
          <div className="optimaks-cta-row">
            <Link className="optimaks-link" href="/end-customer">
              Start with customer request
            </Link>
            <Link className="optimaks-link secondary" href="/workspace">
              Continue in business workspace
            </Link>
          </div>
        </div>

        <div className="optimaks-boundary-note">
          <strong>Static founder-demo boundary</strong>
          <span>
            Every client, plan, onboarding, and readiness label on this page is
            sample copy. Nothing is saved, provisioned, billed, entitled, or
            deployed, and no MVP02 work is started.
          </span>
        </div>
      </section>

      <section
        className="optimaks-section"
        id="pitch"
        aria-labelledby="pitch-title"
      >
        <div className="section-heading">
          <p className="step-label">Pitch in three points</p>
          <h2 id="pitch-title">A useful starter flow with a controlled future</h2>
          <p>
            Keep the conversation grounded in today&apos;s demo value while
            making the production and future-product boundaries explicit.
          </p>
        </div>
        <div className="optimaks-pitch-grid">
          {pitchPoints.map((point) => (
            <article className="optimaks-pitch-card" key={point.label}>
              <p className="step-label">{point.label}</p>
              <h3>{point.title}</h3>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="optimaks-section"
        id="clients"
        aria-labelledby="clients-title"
      >
        <div className="section-heading">
          <p className="step-label">Sample demo records</p>
          <h2 id="clients-title">Explain what each client card means</h2>
          <p>
            Each card is a presentation aid: the plan describes positioning,
            onboarding describes demo readiness, and the link opens an existing
            static route. No client or tenant record exists behind it.
          </p>
        </div>

        <div className="client-preview-list">
          {clients.map((client) => (
            <article className="client-preview-card" key={client.name}>
              <span className="status-pill">{client.status}</span>
              <h3>{client.name}</h3>
              <p className="optimaks-card-note">{client.note}</p>
              <dl className="lead-detail-list">
                <div>
                  <dt>Sample template</dt>
                  <dd>{client.template}</dd>
                </div>
                <div>
                  <dt>Plan label</dt>
                  <dd>{client.plan}</dd>
                </div>
                <div>
                  <dt>Readiness label</dt>
                  <dd>{client.onboarding}</dd>
                </div>
              </dl>
              <Link className="optimaks-link" href={client.workspace}>
                {client.workspaceLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="optimaks-section">
        <div className="section-heading">
          <p className="step-label">What Optimaks OS Basic means here</p>
          <h2>Four signals for a founder-led demo</h2>
        </div>
        <div className="optimaks-status-grid">
          <article className="optimaks-status-card">
            <span className="stage-count">1</span>
            <h3>Sample client</h3>
            <p>A named example for the pitch, not a stored customer account.</p>
          </article>
          <article className="optimaks-status-card">
            <span className="stage-count">2</span>
            <h3>Plan label</h3>
            <p>Starter Complete positioning, not billing or entitlement logic.</p>
          </article>
          <article className="optimaks-status-card">
            <span className="stage-count">3</span>
            <h3>Readiness label</h3>
            <p>A presenter cue for demo progress, not a live onboarding workflow.</p>
          </article>
          <article className="optimaks-status-card">
            <span className="stage-count">4</span>
            <h3>Preview link</h3>
            <p>Navigation to a static route, without login or account management.</p>
          </article>
        </div>
      </section>

      <section
        className="optimaks-section"
        id="pack"
        aria-labelledby="pack-title"
      >
        <div className="section-heading">
          <p className="step-label">Founder demo and release pack</p>
          <h2 id="pack-title">Present clearly, then hand off safely</h2>
          <p>
            The demo checklist keeps the story customer-led. The release
            checklist protects the static boundary and separates deployment
            decisions from this preview.
          </p>
        </div>
        <div className="optimaks-checklist-grid">
          <article className="optimaks-checklist-card">
            <h3>Founder demo checklist</h3>
            <ul>
              {demoChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="optimaks-checklist-card">
            <h3>Release-readiness checklist</h3>
            <ul>
              {releaseChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="optimaks-section">
        <div className="section-heading">
          <p className="step-label">Founder talk-track sequence</p>
          <h2>Move from customer problem to controlled next step</h2>
        </div>
        <ol className="optimaks-flow-list">
          {flowSteps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="optimaks-section"
        id="boundary"
        aria-labelledby="boundary-title"
      >
        <div className="section-heading">
          <p className="step-label">Included / reserved boundary</p>
          <h2 id="boundary-title">
            What the founder can demonstrate and what remains separate
          </h2>
        </div>
        <div className="optimaks-boundary-grid">
          <article className="optimaks-boundary-card included">
            <h3>Included in accepted MVP01</h3>
            <ul>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="optimaks-boundary-card reserved">
            <h3>Reserved for later approval</h3>
            <ul>
              {reserved.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="optimaks-closeout">
        <p className="step-label">Founder pitch closeout</p>
        <h2>MVP01 is accepted for founder-led demonstration</h2>
        <p>
          Present Starter Complete as the practical customer-to-owner flow and
          Optimaks OS Basic as the lightweight demo and readiness overview.
          Production operations, further hardening, and MVP02 planning or
          execution require their own approved workpacks. This page unlocks
          none of them.
        </p>
        <div className="optimaks-cta-row">
          <Link className="optimaks-link" href="/end-customer">
            Restart the customer story
          </Link>
          <Link className="optimaks-link secondary" href="/workspace">
            Review the owner workflow
          </Link>
        </div>
      </section>
    </main>
  );
}
