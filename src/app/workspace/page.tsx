"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type WorkspaceStage =
  | "All"
  | "Lead"
  | "Customer"
  | "Quote"
  | "Booking"
  | "Payment"
  | "Reminder";

type DemoRequest = {
  id: string;
  customer: string;
  serviceIssue: string;
  area: string;
  stage: Exclude<WorkspaceStage, "All">;
  status: string;
  nextStep: string;
};

type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted";

type LeadFilter = "All" | LeadStatus;

type DemoLead = {
  id: string;
  customerName: string;
  phone: string;
  serviceAddress: string;
  serviceIssue: string;
  serviceContext: string;
  status: LeadStatus;
  source: string;
  preferredTiming: string;
  customerType: string;
  customerSummary: string;
  nextQuoteStep: string;
};

type QuoteStatus =
  | "Draft estimate"
  | "Ready to send manually"
  | "Sent manually"
  | "Accepted conceptually";

type QuoteServiceItem = {
  id: string;
  name: string;
  detail: string;
  previewAmount: number;
};

type BookingStatus =
  | "Timing proposed"
  | "Awaiting customer confirmation"
  | "Confirmed manually"
  | "Ready for payment tracking";

type PaymentStatus =
  | "Unpaid"
  | "Partially paid"
  | "Paid"
  | "Follow-up needed";

type ReminderDefault =
  | "No default reminder"
  | "3-month service follow-up"
  | "6-month maintenance reminder";

type ReportPreference =
  | "Monthly owner snapshot"
  | "Payment and follow-up focus"
  | "Lead to booking summary";

type ReminderStatus =
  | "Prepare manually"
  | "Ready to contact"
  | "Contacted manually"
  | "Logged for demo review";

type ReminderPreview = {
  id: string;
  title: string;
  customer: string;
  timing: string;
  channel: string;
  message: string;
};

type StarterKpi = {
  label: string;
  value: string;
  note: string;
};

const workflowStages = [
  {
    label: "Lead",
    status: "New request",
    detail: "Review service issue, customer contact, and service area.",
    count: "3",
  },
  {
    label: "Customer",
    status: "Manual contact",
    detail: "Confirm customer details before turning request into a profile.",
    count: "2",
  },
  {
    label: "Quote",
    status: "Estimate needed",
    detail: "Prepare a manual estimate after checking service context.",
    count: "2",
  },
  {
    label: "Booking",
    status: "Schedule manually",
    detail: "Agree date and time outside this demo workspace.",
    count: "1",
  },
  {
    label: "Payment",
    status: "Status tracking",
    detail: "Track cash, PayNow, or outstanding status manually.",
    count: "1",
  },
  {
    label: "Reminder",
    status: "Follow-up due",
    detail: "Prepare maintenance reminder or service follow-up.",
    count: "2",
  },
  {
    label: "Report",
    status: "Basic snapshot",
    detail: "Review simple monthly operational signals.",
    count: "1",
  },
];

const demoRequests: DemoRequest[] = [
  {
    id: "REQ-010-DEMO",
    customer: "Tampines HDB customer",
    serviceIssue: "Aircon not cold",
    area: "Tampines",
    stage: "Lead",
    status: "New lead",
    nextStep: "Call customer and ask for unit count and photos.",
  },
  {
    id: "REQ-011-DEMO",
    customer: "Bukit Batok condo owner",
    serviceIssue: "Water leaking",
    area: "Bukit Batok",
    stage: "Quote",
    status: "Estimate pending",
    nextStep: "Review leak notes before sending a manual estimate.",
  },
  {
    id: "REQ-012-DEMO",
    customer: "Hougang repeat customer",
    serviceIssue: "General servicing",
    area: "Hougang",
    stage: "Booking",
    status: "Timing requested",
    nextStep: "Confirm this week service slot manually.",
  },
  {
    id: "REQ-013-DEMO",
    customer: "Jurong West landed home",
    serviceIssue: "New installation estimate",
    area: "Jurong West",
    stage: "Payment",
    status: "Awaiting PayNow confirmation",
    nextStep: "Mark payment status only after manual confirmation.",
  },
];

const manualActions = [
  "Review new service request",
  "Contact customer manually",
  "Prepare quote estimate",
  "Confirm booking slot",
  "Check payment status",
  "Set maintenance reminder",
];

const reportSnapshot = [
  { label: "Open requests", value: "4" },
  { label: "Quotes pending", value: "2" },
  { label: "Bookings to confirm", value: "1" },
  { label: "Follow-ups due", value: "2" },
];

const leadFilters: LeadFilter[] = [
  "All",
  "New",
  "Contacted",
  "Qualified",
  "Converted",
];

const demoLeads: DemoLead[] = [
  {
    id: "LEAD-1001",
    customerName: "Tampines HDB customer",
    phone: "+65 9123 4567",
    serviceAddress: "Tampines Street 21, HDB block",
    serviceIssue: "Aircon not cold",
    serviceContext:
      "Bedroom unit is blowing warm air. Customer can share photos and unit count before estimate.",
    status: "New",
    source: "/end-customer request preview",
    preferredTiming: "Today",
    customerType: "New customer",
    customerSummary:
      "Potential new customer with urgent cooling issue and clear contact details.",
    nextQuoteStep: "Prepare a manual estimate after confirming unit count.",
  },
  {
    id: "LEAD-1002",
    customerName: "Bukit Batok condo owner",
    phone: "+65 9234 5678",
    serviceAddress: "Bukit Batok condo, tower B",
    serviceIssue: "Water leaking",
    serviceContext:
      "Customer reports dripping near the living room unit after overnight use.",
    status: "Contacted",
    source: "Manual WhatsApp follow-up",
    preferredTiming: "Tomorrow",
    customerType: "New customer",
    customerSummary:
      "Contacted customer who needs a leak check before any quote estimate.",
    nextQuoteStep: "Ask for photos and access details before estimate guidance.",
  },
  {
    id: "LEAD-1003",
    customerName: "Hougang repeat customer",
    phone: "+65 9345 6789",
    serviceAddress: "Hougang Avenue 8",
    serviceIssue: "General servicing",
    serviceContext:
      "Repeat customer wants recurring servicing for two wall-mounted units.",
    status: "Qualified",
    source: "Returning customer message",
    preferredTiming: "This week",
    customerType: "Repeat customer",
    customerSummary:
      "Qualified repeat customer with known service context and basic reminder potential.",
    nextQuoteStep: "Prepare simple estimate for two-unit servicing.",
  },
];

const quoteServiceItems: QuoteServiceItem[] = [
  {
    id: "general-service",
    name: "General servicing visit",
    detail: "Basic cleaning and inspection for wall-mounted aircon units.",
    previewAmount: 80,
  },
  {
    id: "troubleshoot",
    name: "Cooling issue check",
    detail: "Manual diagnostic visit before confirming any repair scope.",
    previewAmount: 60,
  },
  {
    id: "leak-check",
    name: "Leak / drainage check",
    detail: "Visual leak review and drainage condition check.",
    previewAmount: 70,
  },
  {
    id: "chemical-wash",
    name: "Chemical wash option",
    detail: "Optional deeper cleaning guidance for suitable unit condition.",
    previewAmount: 150,
  },
];

const quoteStatuses: QuoteStatus[] = [
  "Draft estimate",
  "Ready to send manually",
  "Sent manually",
  "Accepted conceptually",
];

const bookingStatuses: BookingStatus[] = [
  "Timing proposed",
  "Awaiting customer confirmation",
  "Confirmed manually",
  "Ready for payment tracking",
];

const paymentStatuses: PaymentStatus[] = [
  "Unpaid",
  "Partially paid",
  "Paid",
  "Follow-up needed",
];

const reminderDefaults: ReminderDefault[] = [
  "No default reminder",
  "3-month service follow-up",
  "6-month maintenance reminder",
];

const reportPreferences: ReportPreference[] = [
  "Monthly owner snapshot",
  "Payment and follow-up focus",
  "Lead to booking summary",
];

const reminderStatuses: ReminderStatus[] = [
  "Prepare manually",
  "Ready to contact",
  "Contacted manually",
  "Logged for demo review",
];

const reminderPreviews: ReminderPreview[] = [
  {
    id: "REM-PAY-001",
    title: "Payment follow-up reminder preview",
    customer: "Jurong West landed home",
    timing: "Today after manual payment check",
    channel: "Manual call or message",
    message:
      "Hi, this is a gentle reminder to confirm your service payment status. Please send proof if PayNow was used.",
  },
  {
    id: "REM-MAINT-001",
    title: "Maintenance reminder preview",
    customer: "Hougang repeat customer",
    timing: reminderDefaults[1],
    channel: "Manual maintenance follow-up",
    message:
      "Hi, your next aircon maintenance check is due soon. Reply here if you would like us to arrange a service slot.",
  },
];

const starterKpis: StarterKpi[] = [
  {
    label: "Leads reviewed",
    value: "3",
    note: "Static count from demo lead cards.",
  },
  {
    label: "Bookings confirmed",
    value: "1",
    note: "Manual booking preview only.",
  },
  {
    label: "Payments to follow up",
    value: "1",
    note: "Derived from local payment status copy.",
  },
  {
    label: "Maintenance reminders",
    value: "2",
    note: "Manual reminder queue preview.",
  },
];

export default function WorkspacePage() {
  const [activeStage, setActiveStage] = useState<WorkspaceStage>("All");
  const [completedActions, setCompletedActions] = useState<string[]>([]);
  const [activeLeadFilter, setActiveLeadFilter] = useState<LeadFilter>("All");
  const [selectedLeadId, setSelectedLeadId] = useState(demoLeads[0].id);
  const [convertedLeadIds, setConvertedLeadIds] = useState<string[]>([]);
  const [leadChecklist, setLeadChecklist] = useState<string[]>([]);
  const [selectedQuoteItemIds, setSelectedQuoteItemIds] = useState<string[]>([
    "general-service",
    "troubleshoot",
  ]);
  const [discountPreview, setDiscountPreview] = useState(20);
  const [gstIncluded, setGstIncluded] = useState(false);
  const [quoteStatus, setQuoteStatus] =
    useState<QuoteStatus>("Draft estimate");
  const [quoteChecklist, setQuoteChecklist] = useState<string[]>([]);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("10:00");
  const [bookingStatus, setBookingStatus] =
    useState<BookingStatus>("Timing proposed");
  const [bookingChecklist, setBookingChecklist] = useState<string[]>([]);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("Unpaid");
  const [paymentChecklist, setPaymentChecklist] = useState<string[]>([]);
  const [gstSettingPreview, setGstSettingPreview] = useState(false);
  const [reminderDefault, setReminderDefault] = useState<ReminderDefault>(
    "3-month service follow-up",
  );
  const [reportPreference, setReportPreference] = useState<ReportPreference>(
    "Monthly owner snapshot",
  );
  const [adminChecklist, setAdminChecklist] = useState<string[]>([]);
  const [reminderStatus, setReminderStatus] =
    useState<ReminderStatus>("Prepare manually");
  const [customerFollowUpChecklist, setCustomerFollowUpChecklist] = useState<
    string[]
  >([]);
  const [manualReportChecklist, setManualReportChecklist] = useState<string[]>(
    [],
  );

  const visibleRequests = useMemo(() => {
    if (activeStage === "All") {
      return demoRequests;
    }

    return demoRequests.filter((request) => request.stage === activeStage);
  }, [activeStage]);

  const visibleLeads = useMemo(() => {
    if (activeLeadFilter === "All") {
      return demoLeads;
    }

    return demoLeads.filter((lead) => {
      if (activeLeadFilter === "Converted") {
        return convertedLeadIds.includes(lead.id);
      }

      return lead.status === activeLeadFilter;
    });
  }, [activeLeadFilter, convertedLeadIds]);

  const selectedLead =
    demoLeads.find((lead) => lead.id === selectedLeadId) ?? demoLeads[0];

  const selectedLeadConverted = convertedLeadIds.includes(selectedLead.id);

  const selectedQuoteItems = useMemo(
    () =>
      quoteServiceItems.filter((item) =>
        selectedQuoteItemIds.includes(item.id),
      ),
    [selectedQuoteItemIds],
  );

  const subtotalPreview = selectedQuoteItems.reduce(
    (total, item) => total + item.previewAmount,
    0,
  );
  const discountedPreview = Math.max(subtotalPreview - discountPreview, 0);
  const gstPreview = gstIncluded ? Math.round(discountedPreview * 0.09) : 0;
  const totalPreview = discountedPreview + gstPreview;
  const estimateLow = Math.max(totalPreview - 30, 0);
  const estimateHigh = totalPreview + 60;
  const paidPreview =
    paymentStatus === "Paid"
      ? totalPreview
      : paymentStatus === "Partially paid"
        ? Math.round(totalPreview / 2)
        : 0;
  const outstandingPreview = Math.max(totalPreview - paidPreview, 0);

  const leadManualActions = [
    `Review ${selectedLead.id} request context`,
    `Contact ${selectedLead.customerName} manually`,
    "Confirm service address and access notes",
    "Mark lead as qualified for quote estimate",
  ];

  const quoteManualActions = [
    `Review ${selectedLead.id} customer and service context`,
    "Confirm service items manually",
    "Check discount and GST note before sending",
    "Send estimate outside the demo workspace",
  ];

  const bookingManualActions = [
    `Confirm ${selectedLead.customerName} accepted the estimate manually`,
    "Check access notes and service address",
    "Agree preferred date and time outside the app",
    "Send customer confirmation manually",
  ];

  const paymentManualActions = [
    `Confirm ${selectedLead.customerName} payment method manually`,
    "Check cash or PayNow proof outside the app",
    "Update payment status preview after manual confirmation",
    "Share payment instruction copy with the customer",
  ];

  const adminManualActions = [
    "Review business information copy",
    "Confirm GST display setting with founder or owner",
    "Check static PayNow instruction wording",
    "Confirm reminder and report preview defaults",
  ];

  const customerFollowUpActions = [
    `Check ${selectedLead.customerName} payment or service context`,
    "Choose payment or maintenance follow-up copy",
    "Contact customer manually outside the workspace",
    "Update local reminder status preview",
  ];

  const manualReportActions = [
    "Review open leads and quotes",
    "Check booking and payment status previews",
    "Review reminder queue copy",
    "Prepare monthly value talking points manually",
  ];

  function toggleAction(action: string) {
    setCompletedActions((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function toggleLeadChecklist(action: string) {
    setLeadChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function previewConvertToCustomer() {
    setConvertedLeadIds((current) =>
      current.includes(selectedLead.id) ? current : [...current, selectedLead.id],
    );
  }

  function toggleQuoteItem(itemId: string) {
    setSelectedQuoteItemIds((current) =>
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId],
    );
  }

  function toggleQuoteChecklist(action: string) {
    setQuoteChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function toggleBookingChecklist(action: string) {
    setBookingChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function togglePaymentChecklist(action: string) {
    setPaymentChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function toggleAdminChecklist(action: string) {
    setAdminChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function toggleCustomerFollowUpChecklist(action: string) {
    setCustomerFollowUpChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function toggleManualReportChecklist(action: string) {
    setManualReportChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  return (
    <main className="workspace-page">
      <section className="workspace-hero" aria-labelledby="workspace-title">
        <div>
          <nav className="demo-route-nav" aria-label="MVP01 demo routes">
            <span>Demo preview</span>
            <div>
              <Link href="/end-customer">Customer request</Link>
              <Link className="active" href="/workspace" aria-current="page">
                Business workspace
              </Link>
              <Link href="/optimaks-os">Demo overview</Link>
            </div>
          </nav>
          <p className="eyebrow">Starter owner workspace</p>
          <h1 id="workspace-title">See what needs attention next</h1>
          <p className="workspace-hero-copy">
            Review incoming service requests, follow each customer through the
            manual Starter workflow, and finish with a simple owner snapshot.
            Every control on this page is a local preview for demo purposes.
          </p>
        </div>

        <aside className="workspace-context" aria-label="Workspace context">
          <strong>Aircon / Home Service Starter Template</strong>
          <span>View: owner / admin walkthrough</span>
          <span>Plan: Starter Complete</span>
          <span>Mode: local-only and non-persistent</span>
        </aside>
      </section>

      <section className="workspace-notice" role="note">
        <strong>Preview only: changes stay in this browser session</strong>
        <span>
          This workspace uses static demo data and local browser state only. It
          does not save leads, create customers, write to Supabase, call APIs,
          process payments, send WhatsApp messages, or create persistent records.
        </span>
      </section>

      <section
        className="workspace-section workspace-demo-guide"
        aria-labelledby="demo-guide-title"
      >
        <div className="section-heading">
          <p className="step-label">How to demo this workspace</p>
          <h2 id="demo-guide-title">Follow one customer from request to report</h2>
          <p>
            Use the links below to move through the page. Select a lead first,
            then preview the manual quote, booking, payment, settings, and
            follow-up steps before closing with the owner summary.
          </p>
        </div>
        <nav className="workspace-section-nav" aria-label="Workspace demo sections">
          <a href="#requests">1. Requests</a>
          <a href="#customers">2. Lead and customer</a>
          <a href="#quote">3. Quote</a>
          <a href="#booking">4. Booking</a>
          <a href="#payment">5. Payment</a>
          <a href="#settings">6. Settings</a>
          <a href="#follow-up">7. Reminder and report</a>
          <a href="#owner-summary">8. Owner summary</a>
        </nav>
      </section>

      <section
        className="workspace-section"
        id="workflow"
        aria-labelledby="workflow-title"
      >
        <div className="section-heading">
          <p className="step-label">Starter workflow map</p>
          <h2 id="workflow-title">
            Request → Lead → Customer → Quote → Booking → Payment → Reminder → Report
          </h2>
          <p>
            Counts and statuses are sample signals for the walkthrough. They do
            not represent live business records.
          </p>
        </div>

        <div className="workflow-grid">
          {workflowStages.map((stage) => (
            <article className="workflow-card" key={stage.label}>
              <span className="stage-count">{stage.count}</span>
              <h3>{stage.label}</h3>
              <p className="status-pill">{stage.status}</p>
              <p>{stage.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="workspace-section"
        id="requests"
        aria-labelledby="intake-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 1: Review requests</p>
          <h2 id="intake-title">Incoming request board</h2>
          <p>
            These cards show how requests from the end-customer route may be
            reviewed before the owner decides who to contact next. No real lead
            or customer record is created.
          </p>
        </div>

        <div className="stage-filter" aria-label="Filter request board">
          {(["All", "Lead", "Quote", "Booking", "Payment"] as const).map(
            (stage) => (
              <button
                type="button"
                className={activeStage === stage ? "active" : ""}
                key={stage}
                onClick={() => setActiveStage(stage)}
              >
                {stage}
              </button>
            ),
          )}
        </div>

        <div className="request-board" aria-live="polite">
          {visibleRequests.map((request) => (
            <article className="request-card" key={request.id}>
              <div>
                <p className="request-id">{request.id}</p>
                <h3>{request.customer}</h3>
              </div>
              <dl>
                <div>
                  <dt>Issue</dt>
                  <dd>{request.serviceIssue}</dd>
                </div>
                <div>
                  <dt>Area</dt>
                  <dd>{request.area}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{request.status}</dd>
                </div>
              </dl>
              <p className="next-step">{request.nextStep}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="workspace-section"
        id="customers"
        aria-labelledby="lead-customer-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 2: Review lead and customer context</p>
          <h2 id="lead-customer-title">
            Review lead, qualify manually, preview customer profile
          </h2>
          <p>
            Select a sample lead, review the service context, and preview how an
            owner may qualify the request before preparing an estimate.
          </p>
        </div>

        <div className="workspace-notice compact" role="note">
          <strong>Lead / Customer demo boundary</strong>
          <span>
            The convert-to-customer action is a local preview. It does not save
            leads, create customers, submit an API request, run a server action,
            write to Supabase, or start quote implementation.
          </span>
        </div>

        <div className="stage-filter" aria-label="Filter lead inbox">
          {leadFilters.map((status) => (
            <button
              type="button"
              className={activeLeadFilter === status ? "active" : ""}
              key={status}
              onClick={() => setActiveLeadFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="lead-customer-grid">
          <div className="lead-inbox" aria-live="polite">
            <p className="step-label">Lead inbox / request list</p>
            {visibleLeads.length > 0 ? (
              visibleLeads.map((lead) => {
                const isSelected = lead.id === selectedLead.id;
                const isConverted = convertedLeadIds.includes(lead.id);

                return (
                  <button
                    type="button"
                    className={isSelected ? "lead-card selected" : "lead-card"}
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                  >
                    <span className="request-id">{lead.id}</span>
                    <strong>{lead.customerName}</strong>
                    <span>{lead.serviceIssue}</span>
                    <span className="lead-meta">
                      {isConverted ? "Converted preview" : lead.status}
                    </span>
                  </button>
                );
              })
            ) : (
              <p className="empty-state">
                No demo leads match this filter. Try another status.
              </p>
            )}
          </div>

          <article className="lead-detail-panel">
            <div>
              <p className="step-label">Lead detail panel</p>
              <h3>{selectedLead.customerName}</h3>
              <p className="status-pill">
                {selectedLeadConverted
                  ? "Converted preview"
                  : selectedLead.status}
              </p>
            </div>

            <dl className="lead-detail-list">
              <div>
                <dt>Contact</dt>
                <dd>{selectedLead.phone}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{selectedLead.serviceAddress}</dd>
              </div>
              <div>
                <dt>Service issue</dt>
                <dd>{selectedLead.serviceIssue}</dd>
              </div>
              <div>
                <dt>Preferred timing</dt>
                <dd>{selectedLead.preferredTiming}</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>{selectedLead.source}</dd>
              </div>
            </dl>

            <p className="next-step">{selectedLead.serviceContext}</p>
          </article>

          <article className="customer-profile-card">
            <div>
              <p className="step-label">Customer profile summary</p>
              <h3>
                {selectedLeadConverted
                  ? "Customer profile preview ready"
                  : "Customer profile not created"}
              </h3>
            </div>
            <p>{selectedLead.customerSummary}</p>
            <dl className="lead-detail-list">
              <div>
                <dt>Customer type</dt>
                <dd>{selectedLead.customerType}</dd>
              </div>
              <div>
                <dt>Profile state</dt>
                <dd>
                  {selectedLeadConverted
                    ? "Converted in local preview"
                    : "Lead review pending"}
                </dd>
              </div>
            </dl>
            <button
              type="button"
              className="primary-action"
              onClick={previewConvertToCustomer}
            >
              {selectedLeadConverted
                ? "Customer preview active"
                : "Preview convert to customer"}
            </button>
          </article>

          <article className="manual-checklist-card">
            <div>
              <p className="step-label">Manual action checklist</p>
              <h3>Qualify before quote estimate</h3>
            </div>
            <div className="action-list compact-list">
              {leadManualActions.map((action) => (
                <button
                  type="button"
                  className={
                    leadChecklist.includes(action) ? "action done" : "action"
                  }
                  key={action}
                  onClick={() => toggleLeadChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {leadChecklist.includes(action)
                      ? "Preview checked"
                      : "Mark in preview"}
                  </strong>
                </button>
              ))}
            </div>
            <p className="next-step">
              Next step to quote estimate: {selectedLead.nextQuoteStep} This
              section stays as lead/customer context; the Quote Estimate Basic
              panel below remains local and non-persistent.
            </p>
          </article>
        </div>
      </section>

      <section
        className="workspace-section"
        id="quote"
        aria-labelledby="quote-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 3: Prepare estimate guidance</p>
          <h2 id="quote-title">
            Prepare a manual-assisted estimate preview
          </h2>
          <p>
            Use the selected customer context to preview service items, an
            estimate range, discount and GST display notes, and a local quote
            status before discussing booking.
          </p>
        </div>

        <div className="workspace-notice compact" role="note">
          <strong>Quote estimate demo boundary</strong>
          <span>
            This is not a real quote engine. It does not save quote records,
            generate invoices, create PDFs, process payment, submit APIs, run
            server actions, write to Supabase, or create persistent bookings.
          </span>
        </div>

        <div className="quote-estimate-grid">
          <article className="quote-panel customer-summary-panel">
            <div>
              <p className="step-label">Selected lead / customer</p>
              <h3>{selectedLead.customerName}</h3>
              <p className="status-pill">
                {selectedLeadConverted
                  ? "Customer preview"
                  : "Lead context"}
              </p>
            </div>
            <dl className="lead-detail-list">
              <div>
                <dt>Lead ID</dt>
                <dd>{selectedLead.id}</dd>
              </div>
              <div>
                <dt>Service issue</dt>
                <dd>{selectedLead.serviceIssue}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{selectedLead.serviceAddress}</dd>
              </div>
              <div>
                <dt>Preferred timing</dt>
                <dd>{selectedLead.preferredTiming}</dd>
              </div>
            </dl>
            <p className="next-step">{selectedLead.nextQuoteStep}</p>
          </article>

          <article className="quote-panel">
            <div>
              <p className="step-label">Service item list</p>
              <h3>Estimate building blocks</h3>
            </div>
            <div className="service-item-list">
              {quoteServiceItems.map((item) => {
                const selected = selectedQuoteItemIds.includes(item.id);

                return (
                  <button
                    type="button"
                    className={
                      selected
                        ? "service-item selected"
                        : "service-item"
                    }
                    key={item.id}
                    onClick={() => toggleQuoteItem(item.id)}
                  >
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.detail}</small>
                    </span>
                    <strong>${item.previewAmount}</strong>
                  </button>
                );
              })}
            </div>
          </article>

          <article className="quote-panel estimate-panel">
            <div>
              <p className="step-label">Estimate range preview</p>
              <h3>
                ${estimateLow} - ${estimateHigh}
              </h3>
              <p>
                Preview subtotal: ${subtotalPreview}. This is simple display
                math for demo guidance, not a pricing or quote calculation
                engine.
              </p>
            </div>

            <dl className="estimate-breakdown">
              <div>
                <dt>Discount preview</dt>
                <dd>-${discountPreview}</dd>
              </div>
              <div>
                <dt>GST preview</dt>
                <dd>{gstIncluded ? `+$${gstPreview}` : "Info note only"}</dd>
              </div>
              <div>
                <dt>Manual total preview</dt>
                <dd>${totalPreview}</dd>
              </div>
            </dl>

            <label className="quote-control">
              Discount display / adjustment preview
              <input
                type="range"
                min="0"
                max="80"
                step="10"
                value={discountPreview}
                onChange={(event) =>
                  setDiscountPreview(Number(event.target.value))
                }
              />
            </label>

            <label className="choice-row quote-toggle">
              <input
                type="checkbox"
                checked={gstIncluded}
                onChange={(event) => setGstIncluded(event.target.checked)}
              />
              <span>
                Show GST preview note. Final GST handling must be confirmed
                manually and remains outside a compliance engine.
              </span>
            </label>
          </article>

          <article className="quote-panel">
            <div>
              <p className="step-label">Quote status</p>
              <h3>{quoteStatus}</h3>
            </div>
            <div className="stage-filter" aria-label="Select quote status">
              {quoteStatuses.map((status) => (
                <button
                  type="button"
                  className={quoteStatus === status ? "active" : ""}
                  key={status}
                  onClick={() => setQuoteStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
            <p className="next-step">
              Status is local preview copy only. It does not create a quote
              workflow, approval record, booking, invoice, or payment step.
            </p>
          </article>

          <article className="quote-panel">
            <div>
              <p className="step-label">Manual follow-up checklist</p>
              <h3>Before sending estimate</h3>
            </div>
            <div className="action-list compact-list">
              {quoteManualActions.map((action) => (
                <button
                  type="button"
                  className={
                    quoteChecklist.includes(action) ? "action done" : "action"
                  }
                  key={action}
                  onClick={() => toggleQuoteChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {quoteChecklist.includes(action)
                      ? "Preview checked"
                      : "Mark in preview"}
                  </strong>
                </button>
              ))}
            </div>
          </article>

          <article className="quote-panel booking-handoff-panel">
            <div>
              <p className="step-label">Continue to booking preview</p>
              <h3>Confirm the estimate before discussing a time</h3>
            </div>
            <p>
              Once the customer accepts the estimate manually, use the selected
              customer, service context, quote status, and preferred timing to
              preview the next conversation.
            </p>
            <p className="next-step">
              The Booking Basic section below remains local and
              non-persistent, and does not create a scheduler or booking
              record.
            </p>
          </article>
        </div>
      </section>

      <section
        className="workspace-section"
        id="booking"
        aria-labelledby="booking-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 4: Coordinate booking</p>
          <h2 id="booking-title">Coordinate a manual booking preview</h2>
          <p>
            Preview preferred timing, local booking status, manual scheduling
            checks, and customer confirmation wording. Availability still has
            to be confirmed outside this demo.
          </p>
        </div>

        <div className="workspace-notice compact" role="note">
          <strong>Booking demo boundary</strong>
          <span>
            This is not a real scheduler engine. It does not save bookings,
            check calendar conflicts, connect to Google Calendar, use Calendly
            or Cal.com, assign technicians, submit APIs, run server actions,
            write to Supabase, process payment, or send reminders.
          </span>
        </div>

        <div className="booking-basic-grid">
          <article className="booking-panel">
            <div>
              <p className="step-label">Selected quote / customer</p>
              <h3>{selectedLead.customerName}</h3>
              <p className="status-pill">{quoteStatus}</p>
            </div>
            <dl className="lead-detail-list">
              <div>
                <dt>Quote context</dt>
                <dd>
                  ${estimateLow} - ${estimateHigh} estimate preview
                </dd>
              </div>
              <div>
                <dt>Service items</dt>
                <dd>
                  {selectedQuoteItems.length > 0
                    ? selectedQuoteItems.map((item) => item.name).join(", ")
                    : "No service item selected"}
                </dd>
              </div>
              <div>
                <dt>Customer contact</dt>
                <dd>{selectedLead.phone}</dd>
              </div>
            </dl>
            <p className="next-step">
              Booking can be coordinated only after the estimate is accepted
              manually. This page does not create a booking record.
            </p>
          </article>

          <article className="booking-panel">
            <div>
              <p className="step-label">Service address / area</p>
              <h3>{selectedLead.serviceAddress}</h3>
            </div>
            <dl className="lead-detail-list">
              <div>
                <dt>Service issue</dt>
                <dd>{selectedLead.serviceIssue}</dd>
              </div>
              <div>
                <dt>Customer preferred timing</dt>
                <dd>{selectedLead.preferredTiming}</dd>
              </div>
              <div>
                <dt>Access note</dt>
                <dd>{selectedLead.serviceContext}</dd>
              </div>
            </dl>
          </article>

          <article className="booking-panel booking-time-panel">
            <div>
              <p className="step-label">Preferred date / time preview</p>
              <h3>
                {bookingDate
                  ? `${bookingDate} at ${bookingTime}`
                  : "Choose a demo date and time"}
              </h3>
              <p>
                These fields are local preview controls only. Availability,
                technician routing, and calendar conflict checks are not
                implemented.
              </p>
            </div>
            <div className="booking-field-grid">
              <label className="booking-control">
                Preferred date
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(event) => setBookingDate(event.target.value)}
                />
              </label>
              <label className="booking-control">
                Preferred time
                <input
                  type="time"
                  value={bookingTime}
                  onChange={(event) => setBookingTime(event.target.value)}
                />
              </label>
            </div>
          </article>

          <article className="booking-panel">
            <div>
              <p className="step-label">Booking status</p>
              <h3>{bookingStatus}</h3>
            </div>
            <div className="stage-filter" aria-label="Select booking status">
              {bookingStatuses.map((status) => (
                <button
                  type="button"
                  className={bookingStatus === status ? "active" : ""}
                  key={status}
                  onClick={() => setBookingStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
            <p className="next-step">
              Status is local preview copy only. It does not create scheduling
              rules, booking persistence, technician assignment, or payment
              state.
            </p>
          </article>

          <article className="booking-panel">
            <div>
              <p className="step-label">Manual scheduling checklist</p>
              <h3>Before confirming booking</h3>
            </div>
            <div className="action-list compact-list">
              {bookingManualActions.map((action) => (
                <button
                  type="button"
                  className={
                    bookingChecklist.includes(action)
                      ? "action done"
                      : "action"
                  }
                  key={action}
                  onClick={() => toggleBookingChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {bookingChecklist.includes(action)
                      ? "Preview checked"
                      : "Mark in preview"}
                  </strong>
                </button>
              ))}
            </div>
          </article>

          <article className="booking-panel confirmation-panel">
            <div>
              <p className="step-label">Customer confirmation copy</p>
              <h3>Manual message preview</h3>
            </div>
            <p>
              Hi {selectedLead.customerName}, your aircon service booking is
              pencilled in for {bookingDate || "[preferred date]"} at{" "}
              {bookingTime}. We will confirm manually before the visit.
              Payment status will be tracked after the service.
            </p>
            <p className="next-step">
              Calendar integration is reserved. No Google Calendar, Calendly,
              Cal.com, technician assignment, or automated reminder is created.
            </p>
          </article>

          <article className="booking-panel payment-handoff-panel">
            <div>
              <p className="step-label">Continue to payment preview</p>
              <h3>Track status only after manual confirmation</h3>
            </div>
            <p>
              Once the booking is confirmed manually, carry the customer,
              service context, booking status, and preferred timing into the
              payment-status preview below.
            </p>
            <p className="next-step">
              The Payment Basic section below remains local and non-persistent,
              and does not create payment records, receipts, payment provider
              calls, or PayNow QR generation.
            </p>
          </article>
        </div>
      </section>

      <section
        className="workspace-section"
        id="payment"
        aria-labelledby="payment-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 5: Track payment status</p>
          <h2 id="payment-title">Track manual payment status</h2>
          <p>
            Review cash or placeholder PayNow instructions, choose a local
            payment status, and preview paid or outstanding amounts. No money
            moves through this workspace.
          </p>
        </div>

        <div className="workspace-notice compact" role="note">
          <strong>Payment demo boundary</strong>
          <span>
            This is not a real payment gateway. It does not move money, generate
            PayNow QR codes, call Stripe or HitPay, create invoices, issue
            receipts, submit APIs, run server actions, write to Supabase, or
            confirm a real transaction.
          </span>
        </div>

        <div className="payment-basic-grid">
          <article className="payment-panel">
            <div>
              <p className="step-label">Selected booking / customer / quote</p>
              <h3>{selectedLead.customerName}</h3>
              <p className="status-pill">{bookingStatus}</p>
            </div>
            <dl className="lead-detail-list">
              <div>
                <dt>Booking preview</dt>
                <dd>
                  {bookingDate
                    ? `${bookingDate} at ${bookingTime}`
                    : "Demo date not selected"}
                </dd>
              </div>
              <div>
                <dt>Quote preview</dt>
                <dd>
                  ${estimateLow} - ${estimateHigh}; manual total display $
                  {totalPreview}
                </dd>
              </div>
              <div>
                <dt>Customer contact</dt>
                <dd>{selectedLead.phone}</dd>
              </div>
            </dl>
            <p className="next-step">
              Payment tracking starts only after booking is confirmed manually.
              No payment record exists in this demo workspace.
            </p>
          </article>

          <article className="payment-panel">
            <div>
              <p className="step-label">Payment method display</p>
              <h3>Cash or static PayNow instruction</h3>
            </div>
            <div className="payment-method-list">
              <div className="payment-method-card">
                <strong>Cash option</strong>
                <span>
                  Accept cash during or after service and update the status
                  preview manually after counting and confirming payment.
                </span>
              </div>
              <div className="payment-method-card">
                <strong>PayNow instruction card</strong>
                <span>
                  Show the customer a static placeholder instruction. Real QR
                  upload, QR generation, and provider integration are reserved
                  for approved settings or payment issues.
                </span>
              </div>
            </div>
          </article>

          <article className="payment-panel paynow-panel">
            <div>
              <p className="step-label">Non-scannable PayNow placeholder</p>
              <h3>Demo display only</h3>
            </div>
            <div className="paynow-placeholder" aria-hidden="true">
              <span>DEMO ONLY</span>
              <strong>NOT</strong>
              <small>scannable</small>
            </div>
            <p>
              This visual is intentionally not a QR code. No payment details,
              transfer destination, QR generation, or validation are present.
            </p>
          </article>

          <article className="payment-panel">
            <div>
              <p className="step-label">Payment status selector / preview</p>
              <h3>{paymentStatus}</h3>
            </div>
            <div className="stage-filter" aria-label="Select payment status">
              {paymentStatuses.map((status) => (
                <button
                  type="button"
                  className={paymentStatus === status ? "active" : ""}
                  key={status}
                  onClick={() => setPaymentStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
            <p className="next-step">
              Status is local preview copy only. It does not create invoice,
              receipt, transaction, refund, gateway, or accounting state.
            </p>
          </article>

          <article className="payment-panel payment-total-panel">
            <div>
              <p className="step-label">Paid / outstanding summary</p>
              <h3>${outstandingPreview} outstanding</h3>
              <p>
                Paid preview: ${paidPreview}. This display is derived from the
                local payment status selector and the manual estimate preview.
              </p>
            </div>
            <dl className="estimate-breakdown">
              <div>
                <dt>Manual total preview</dt>
                <dd>${totalPreview}</dd>
              </div>
              <div>
                <dt>Paid preview</dt>
                <dd>${paidPreview}</dd>
              </div>
              <div>
                <dt>Outstanding preview</dt>
                <dd>${outstandingPreview}</dd>
              </div>
            </dl>
          </article>

          <article className="payment-panel">
            <div>
              <p className="step-label">Manual payment checklist</p>
              <h3>Before marking paid</h3>
            </div>
            <div className="action-list compact-list">
              {paymentManualActions.map((action) => (
                <button
                  type="button"
                  className={
                    paymentChecklist.includes(action)
                      ? "action done"
                      : "action"
                  }
                  key={action}
                  onClick={() => togglePaymentChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {paymentChecklist.includes(action)
                      ? "Preview checked"
                      : "Mark in preview"}
                  </strong>
                </button>
              ))}
            </div>
          </article>

          <article className="payment-panel payment-copy-card">
            <div>
              <p className="step-label">Customer payment instruction copy</p>
              <h3>Manual message preview</h3>
            </div>
            <p>
              Hi {selectedLead.customerName}, thanks for confirming your
              service booking. Payment can be made by cash or PayNow using the
              business details shared by our team. Current payment status:
              {" "}{paymentStatus.toLowerCase()}. Outstanding preview: $
              {outstandingPreview}.
            </p>
            <p className="next-step">
              This copy is not sent automatically and does not create a receipt
              or invoice.
            </p>
          </article>

          <article className="payment-panel payment-handoff-panel">
            <div>
              <p className="step-label">Continue to settings preview</p>
              <h3>Review the owner&apos;s display preferences</h3>
            </div>
            <p>
              The next section shows business information, GST wording,
              placeholder PayNow instructions, payment terms, reminder defaults,
              and report preferences as local display choices.
            </p>
            <p className="next-step">
              The Admin Setting Basic section below remains local and
              non-persistent. It does not create real tenant settings,
              payment gateway settings, GST compliance, or reminder automation.
            </p>
          </article>
        </div>
      </section>

      <section
        className="workspace-section"
        id="settings"
        aria-labelledby="admin-setting-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 6: Review display settings</p>
          <h2 id="admin-setting-title">Preview Starter owner settings</h2>
          <p>
            Review static business information, GST wording, placeholder PayNow
            instructions, payment terms, reminder defaults, and report
            preferences. These choices affect this preview only.
          </p>
        </div>

        <div className="workspace-notice compact" role="note">
          <strong>Admin setting demo boundary</strong>
          <span>
            This is not a real tenant settings system. It does not save
            business settings, upload PayNow QR images, run GST compliance,
            configure payment gateways, automate reminders, generate reports,
            submit APIs, run server actions, write to Supabase, or start
            backend reminder/report work.
          </span>
        </div>

        <div className="admin-setting-grid">
          <article className="admin-panel business-info-panel">
            <div>
              <p className="step-label">Business information card</p>
              <h3>Demo Aircon Services Pte. Ltd.</h3>
            </div>
            <dl className="lead-detail-list">
              <div>
                <dt>Template</dt>
                <dd>Aircon / Home Service Starter Template</dd>
              </div>
              <div>
                <dt>Contact display</dt>
                <dd>+65 6123 4567</dd>
              </div>
              <div>
                <dt>Service area</dt>
                <dd>Tampines, Hougang, Bukit Batok, Jurong West</dd>
              </div>
            </dl>
            <p className="next-step">
              This is static business information copy only. It does not create
              a tenant, workspace setting, profile setting, or admin permission.
            </p>
          </article>

          <article className="admin-panel gst-panel">
            <div>
              <p className="step-label">GST setting preview / toggle</p>
              <h3>{gstSettingPreview ? "GST display on" : "GST display off"}</h3>
            </div>
            <label className="choice-row quote-toggle">
              <input
                type="checkbox"
                checked={gstSettingPreview}
                onChange={(event) =>
                  setGstSettingPreview(event.target.checked)
                }
              />
              <span>
                Show GST wording in quote/payment previews. This is display
                copy only and is not a GST compliance engine.
              </span>
            </label>
            <p className="next-step">
              Preview copy:{" "}
              {gstSettingPreview
                ? "GST display can be shown on manual estimate/payment copy."
                : "GST display is hidden from manual estimate/payment copy."}
            </p>
          </article>

          <article className="admin-panel">
            <div>
              <p className="step-label">Static PayNow instruction setting</p>
              <h3>PayNow display instructions</h3>
            </div>
            <div className="admin-setting-preview">
              <strong>PayNow to UEN / mobile number shared by owner</strong>
              <span>
                Please include customer name and service date in the transfer
                note. QR image upload and QR generation are reserved.
              </span>
            </div>
            <p className="next-step">
              This setting is static instruction copy only. No upload storage,
              QR generation, validation, or provider integration is created.
            </p>
          </article>

          <article className="admin-panel">
            <div>
              <p className="step-label">Payment terms preview</p>
              <h3>Due on service completion</h3>
            </div>
            <dl className="estimate-breakdown">
              <div>
                <dt>Cash</dt>
                <dd>Collect manually after service</dd>
              </div>
              <div>
                <dt>PayNow</dt>
                <dd>Confirm proof outside the app</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{paymentStatus}</dd>
              </div>
            </dl>
            <p className="next-step">
              Payment terms are preview copy only and do not create invoices,
              receipts, payment plans, refunds, or gateway settings.
            </p>
          </article>

          <article className="admin-panel">
            <div>
              <p className="step-label">Default reminder setting preview</p>
              <h3>{reminderDefault}</h3>
            </div>
            <div
              className="stage-filter"
              aria-label="Select reminder default preview"
            >
              {reminderDefaults.map((setting) => (
                <button
                  type="button"
                  className={reminderDefault === setting ? "active" : ""}
                  key={setting}
                  onClick={() => setReminderDefault(setting)}
                >
                  {setting}
                </button>
              ))}
            </div>
            <p className="next-step">
              Reminder defaults are local preview preferences only. No reminder
              automation, notifications, WhatsApp API, or reminder records are
              created.
            </p>
          </article>

          <article className="admin-panel">
            <div>
              <p className="step-label">Basic report preference preview</p>
              <h3>{reportPreference}</h3>
            </div>
            <div
              className="stage-filter"
              aria-label="Select report preference preview"
            >
              {reportPreferences.map((preference) => (
                <button
                  type="button"
                  className={reportPreference === preference ? "active" : ""}
                  key={preference}
                  onClick={() => setReportPreference(preference)}
                >
                  {preference}
                </button>
              ))}
            </div>
            <p className="next-step">
              Report preference is local preview copy only. No analytics query,
              report generation, export, or stored metric is created.
            </p>
          </article>

          <article className="admin-panel">
            <div>
              <p className="step-label">Manual admin setup checklist</p>
              <h3>Before reminder and report setup</h3>
            </div>
            <div className="action-list compact-list">
              {adminManualActions.map((action) => (
                <button
                  type="button"
                  className={
                    adminChecklist.includes(action) ? "action done" : "action"
                  }
                  key={action}
                  onClick={() => toggleAdminChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {adminChecklist.includes(action)
                      ? "Preview checked"
                      : "Mark in preview"}
                  </strong>
                </button>
              ))}
            </div>
          </article>

          <article className="admin-panel admin-handoff-panel">
            <div>
              <p className="step-label">Continue to follow-up preview</p>
              <h3>Prepare the owner&apos;s manual follow-up view</h3>
            </div>
            <p>
              The next section uses the selected local preferences to preview
              customer follow-up preparation and a simple monthly owner view.
            </p>
            <p className="next-step">
              The Reminder + Basic Report section remains local and
              non-persistent. It does not implement real reminder automation,
              report generation engines, Optimaks OS UI, technician portal,
              APIs, server actions, or Supabase writes.
            </p>
          </article>
        </div>
      </section>

      <section
        className="workspace-section"
        id="follow-up"
        aria-labelledby="reminder-report-title"
      >
        <div className="section-heading">
          <p className="step-label">Step 7: Prepare follow-up and review</p>
          <h2 id="reminder-report-title">
            Preview manual reminders and monthly value snapshot
          </h2>
          <p>
            Prepare payment or maintenance follow-up copy, update a local
            reminder status, and review static monthly value signals. Nothing
            is scheduled, sent, queried, or generated.
          </p>
        </div>

        <div className="workspace-notice compact" role="note">
          <strong>Reminder/report demo boundary</strong>
          <span>
            This section does not automate reminders, schedule jobs, send
            WhatsApp, email, or SMS messages, generate reports, export files,
            query analytics, write to Supabase, submit APIs, run server
            actions, create RLS/auth changes, create Optimaks OS admin console
            features, or create persistent records.
          </span>
        </div>

        <div className="reminder-report-grid">
          <article className="reminder-panel reminder-summary-panel">
            <div>
              <p className="step-label">Reminder panel</p>
              <h3>{reminderStatus}</h3>
            </div>
            <p>
              Reminder status is a local preview only. It helps the owner or
              admin narrate whether the next customer contact is being prepared,
              ready, contacted manually, or logged for demo review.
            </p>
            <div className="stage-filter" aria-label="Select reminder status">
              {reminderStatuses.map((status) => (
                <button
                  type="button"
                  className={reminderStatus === status ? "active" : ""}
                  key={status}
                  onClick={() => setReminderStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </article>

          {reminderPreviews.map((reminder) => (
            <article className="reminder-panel" key={reminder.id}>
              <div>
                <p className="request-id">{reminder.id}</p>
                <h3>{reminder.title}</h3>
              </div>
              <dl className="lead-detail-list">
                <div>
                  <dt>Customer</dt>
                  <dd>{reminder.customer}</dd>
                </div>
                <div>
                  <dt>Timing</dt>
                  <dd>{reminder.timing}</dd>
                </div>
                <div>
                  <dt>Channel</dt>
                  <dd>{reminder.channel}</dd>
                </div>
              </dl>
              <p className="next-step">{reminder.message}</p>
            </article>
          ))}

          <article className="reminder-panel">
            <div>
              <p className="step-label">Customer follow-up checklist</p>
              <h3>Manual contact preparation</h3>
            </div>
            <div className="action-list compact-list">
              {customerFollowUpActions.map((action) => (
                <button
                  type="button"
                  className={
                    customerFollowUpChecklist.includes(action)
                      ? "action done"
                      : "action"
                  }
                  key={action}
                  onClick={() => toggleCustomerFollowUpChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {customerFollowUpChecklist.includes(action)
                      ? "Preview checked"
                      : "Mark in preview"}
                  </strong>
                </button>
              ))}
            </div>
          </article>

          <article className="reminder-panel monthly-value-panel">
            <div>
              <p className="step-label">Basic monthly value report snapshot</p>
              <h3>Starter month view</h3>
              <p>
                This snapshot is static demo copy for owner review. It is not
                generated from analytics, stored metrics, report queries, or
                export logic.
              </p>
            </div>
            <dl className="estimate-breakdown">
              <div>
                <dt>Revenue visibility</dt>
                <dd>${paidPreview} paid preview</dd>
              </div>
              <div>
                <dt>Outstanding follow-up</dt>
                <dd>${outstandingPreview} outstanding preview</dd>
              </div>
              <div>
                <dt>Reminder preference</dt>
                <dd>{reminderDefault}</dd>
              </div>
              <div>
                <dt>Report view</dt>
                <dd>{reportPreference}</dd>
              </div>
            </dl>
          </article>

          <article className="reminder-panel starter-kpi-panel">
            <div>
              <p className="step-label">Starter KPI summary</p>
              <h3>Manual value signals</h3>
            </div>
            <div className="starter-kpi-grid">
              {starterKpis.map((kpi) => (
                <div className="starter-kpi-card" key={kpi.label}>
                  <strong>{kpi.value}</strong>
                  <span>{kpi.label}</span>
                  <small>{kpi.note}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="reminder-panel">
            <div>
              <p className="step-label">Manual report checklist</p>
              <h3>Before monthly owner review</h3>
            </div>
            <div className="action-list compact-list">
              {manualReportActions.map((action) => (
                <button
                  type="button"
                  className={
                    manualReportChecklist.includes(action)
                      ? "action done"
                      : "action"
                  }
                  key={action}
                  onClick={() => toggleManualReportChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {manualReportChecklist.includes(action)
                      ? "Preview checked"
                      : "Mark in preview"}
                  </strong>
                </button>
              ))}
            </div>
          </article>

          <article className="reminder-panel demo-release-handoff-panel">
            <div>
              <p className="step-label">Continue to demo overview</p>
              <h3>Close the walkthrough in Optimaks OS Basic</h3>
            </div>
            <p>
              Use the demo overview to explain the sample client list, plan and
              onboarding status, workspace links, and the MVP01 release
              boundary.
            </p>
            <p className="next-step">
              This workspace does not create an Optimaks OS admin backend,
              technician portal, analytics database, report engine, exports,
              scheduled jobs, or notification automation.
            </p>
            <Link className="optimaks-link" href="/optimaks-os">
              Open the demo overview
            </Link>
          </article>
        </div>
      </section>

      <section
        className="workspace-grid"
        id="owner-summary"
        aria-label="Workspace status panels"
      >
        <article className="workspace-panel">
          <p className="step-label">Quote estimate status</p>
          <h2>2 estimates need manual review</h2>
          <p>
            Quote work remains estimate-level only. No pricing engine, quote
            persistence, approval workflow, or invoice is created here.
          </p>
        </article>

        <article className="workspace-panel">
          <p className="step-label">Booking status</p>
          <h2>1 booking slot to confirm</h2>
          <p>
            Booking is manual-assisted. This page does not create a calendar,
            scheduler, technician assignment, or booking record.
          </p>
        </article>

        <article className="workspace-panel">
          <p className="step-label">Payment status</p>
          <h2>1 payment awaiting confirmation</h2>
          <p>
            Payment is status copy only. There is no gateway, receipt,
            transaction, refund, invoice, or PayNow integration.
          </p>
        </article>

        <article className="workspace-panel">
          <p className="step-label">Reminder / follow-up status</p>
          <h2>2 follow-ups due</h2>
          <p>
            Reminder work is a manual queue preview. No notification service,
            automation, WhatsApp API, or reminder record is created.
          </p>
        </article>
      </section>

      <section className="workspace-section" aria-labelledby="actions-title">
        <div className="section-heading">
          <p className="step-label">Manual action queue</p>
          <h2 id="actions-title">Owner / admin next steps</h2>
          <p>
            Toggle actions to preview local progress. These toggles are not
            saved and do not update any backend status.
          </p>
        </div>

        <div className="action-list">
          {manualActions.map((action) => (
            <button
              type="button"
              className={
                completedActions.includes(action) ? "action done" : "action"
              }
              key={action}
              onClick={() => toggleAction(action)}
            >
              <span>{action}</span>
              <strong>
                {completedActions.includes(action)
                  ? "Preview checked"
                  : "Mark in preview"}
              </strong>
            </button>
          ))}
        </div>
      </section>

      <section className="workspace-section" aria-labelledby="report-title">
        <div className="section-heading">
          <p className="step-label">Basic report snapshot</p>
          <h2 id="report-title">Monthly starter view</h2>
          <p>
            A light report preview for demo storytelling only. Reporting logic,
            analytics, exports, and stored metrics remain outside this
            frontend-only workspace demo.
          </p>
        </div>

        <div className="report-grid">
          {reportSnapshot.map((item) => (
            <article className="report-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
