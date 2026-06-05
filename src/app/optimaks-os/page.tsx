const clients = [
  {
    name: "CoolAir Services",
    template: "Aircon / Home Service Starter",
    plan: "Starter Complete",
    onboarding: "Demo workspace ready",
    workspace: "/workspace",
    status: "Ready for founder demo",
  },
  {
    name: "Northpoint Home Care",
    template: "Home Service Starter",
    plan: "Starter Complete preview",
    onboarding: "Release checklist pending",
    workspace: "/workspace",
    status: "Demo data only",
  },
  {
    name: "MVP01 Closeout Client",
    template: "Optimaks OS Basic",
    plan: "Internal preview",
    onboarding: "Final checkpoint handoff",
    workspace: "/end-customer",
    status: "Non-persistent",
  },
];

const demoChecklist = [
  "Open end customer request preview",
  "Walk through client workspace flow",
  "Show Starter modules from lead to report",
  "Review Optimaks OS Basic client tracking",
  "Explain included and reserved boundaries",
];

const releaseChecklist = [
  "Confirm ISSUE-000 through ISSUE-018 records",
  "Confirm founder acceptance is recorded after review",
  "Run final checkpoint before MVP02 planning",
  "Keep deployment approval separate from this issue",
  "Keep all backend and entitlement work reserved",
];

const flowSteps = [
  "End Customer Interface",
  "Client Workspace",
  "Starter Operation Flow",
  "Admin Setting / Reminder / Basic Report",
  "Optimaks OS Basic",
  "Demo / Release Pack",
];

const included = [
  "Static sample client list",
  "Plan status preview",
  "Onboarding status preview",
  "Workspace link preview",
  "Demo and release checklists",
  "MVP01 closeout handoff",
];

const reserved = [
  "Real admin console",
  "Client management backend",
  "Tenant provisioning",
  "Billing and subscriptions",
  "Deployment automation",
  "Module entitlement logic",
  "MVP02 execution",
];

export default function OptimaksOsPage() {
  return (
    <main className="optimaks-os-page">
      <section className="optimaks-hero">
        <div className="workspace-hero-copy">
          <p className="eyebrow">Optimaks OS Basic</p>
          <h1>MVP01 Demo / Release Pack</h1>
          <p>
            A static closeout preview for Starter Complete + Optimaks OS Basic.
            It shows how the founder can present a sample client, plan status,
            onboarding progress, workspace access, and MVP01 release readiness.
          </p>
        </div>
        <div className="optimaks-boundary-note">
          <strong>Demo boundary</strong>
          <span>
            This page is non-persistent and does not create a real Optimaks OS
            admin console, backend client management, tenant provisioning,
            billing, deployment automation, module entitlements, or MVP02 work.
          </span>
        </div>
      </section>

      <section className="optimaks-section">
        <div className="section-heading">
          <p className="step-label">Client list preview</p>
          <h2>Track demo clients before release handoff</h2>
          <p>
            These sample records are static display data only. They support the
            demo story without creating tenant records, database writes, or
            admin permissions.
          </p>
        </div>

        <div className="client-preview-list">
          {clients.map((client) => (
            <article className="client-preview-card" key={client.name}>
              <span className="status-pill">{client.status}</span>
              <h3>{client.name}</h3>
              <dl className="lead-detail-list">
                <div>
                  <dt>Template</dt>
                  <dd>{client.template}</dd>
                </div>
                <div>
                  <dt>Plan status</dt>
                  <dd>{client.plan}</dd>
                </div>
                <div>
                  <dt>Onboarding status</dt>
                  <dd>{client.onboarding}</dd>
                </div>
              </dl>
              <a className="optimaks-link" href={client.workspace}>
                Open workspace preview
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="optimaks-section">
        <div className="section-heading">
          <p className="step-label">Optimaks OS Basic overview</p>
          <h2>Client, plan, onboarding, and workspace status</h2>
        </div>
        <div className="optimaks-status-grid">
          <article className="optimaks-status-card">
            <span className="stage-count">1</span>
            <h3>Client list</h3>
            <p>Review sample Starter clients prepared for founder demo.</p>
          </article>
          <article className="optimaks-status-card">
            <span className="stage-count">2</span>
            <h3>Plan status</h3>
            <p>Confirm Starter Complete positioning without entitlement logic.</p>
          </article>
          <article className="optimaks-status-card">
            <span className="stage-count">3</span>
            <h3>Onboarding status</h3>
            <p>Show demo readiness and release checklist status as static copy.</p>
          </article>
          <article className="optimaks-status-card">
            <span className="stage-count">4</span>
            <h3>Workspace link</h3>
            <p>Open the existing workspace preview without account management.</p>
          </article>
        </div>
      </section>

      <section className="optimaks-section">
        <div className="section-heading">
          <p className="step-label">Demo and release pack</p>
          <h2>Founder-ready walkthrough checklist</h2>
        </div>
        <div className="optimaks-checklist-grid">
          <article className="optimaks-checklist-card">
            <h3>Demo pack checklist</h3>
            <ul>
              {demoChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="optimaks-checklist-card">
            <h3>Release pack checklist</h3>
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
          <p className="step-label">MVP01 flow summary</p>
          <h2>Starter Complete closeout path</h2>
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

      <section className="optimaks-section">
        <div className="section-heading">
          <p className="step-label">Included / reserved boundary</p>
          <h2>What MVP01 closes and what remains locked</h2>
        </div>
        <div className="optimaks-boundary-grid">
          <article className="optimaks-boundary-card included">
            <h3>Included in ISSUE-018</h3>
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
        <p className="step-label">MVP01 closeout notice</p>
        <h2>Ready for final checkpoint after ISSUE-018 founder acceptance</h2>
        <p>
          ISSUE-018 completes the static MVP01 demo/release package. MVP01 final
          checkpoint can be planned only after founder acceptance is recorded,
          this branch is merged, main is pulled, and the final checkpoint
          workpack is approved. MVP02 remains locked until that final checkpoint
          is accepted.
        </p>
      </section>
    </main>
  );
}
