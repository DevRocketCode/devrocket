export type AutomationTool = {
  name: string;
  href: string;
  note: string;
};

export type AiAutomation = {
  number: string;
  category: 'Revenue' | 'Customer' | 'Marketing' | 'Operations' | 'Team';
  title: string;
  description: string;
  workflow: string[];
  tools: AutomationTool[];
  metric: string;
  guardrail: string;
  resource: { label: string; href: string };
};

export const aiAutomations: AiAutomation[] = [
  {
    number: '01',
    category: 'Revenue',
    title: 'Qualify and route inbound leads in minutes',
    description:
      'Turn a bare form fill into a scored, enriched lead and put it in front of the right rep while interest is still high.',
    workflow: [
      'A form, webinar, or demo request creates the lead',
      'AI enriches the person and company, checks ICP fit, and explains the score',
      'Routing rules assign qualified leads by territory or round robin and place the remaining leads into nurture',
    ],
    tools: [
      { name: 'Clay', href: 'https://www.clay.com/use-cases/inbound-enrichment', note: 'enrichment + scoring' },
      { name: 'HubSpot', href: 'https://www.hubspot.com/products/crm', note: 'CRM + ownership' },
      { name: 'n8n', href: 'https://n8n.io/', note: 'open-source orchestration' },
    ],
    metric: 'Median speed-to-lead, qualified-lead rate, and lead-to-opportunity conversion.',
    guardrail: 'Use deterministic rules for territory, consent, suppression, and strategic accounts.',
    resource: { label: 'Copy Clay’s inbound lead workflow', href: 'https://university.clay.com/claybooks/enrich-and-score-inbound-leads-from-your-website-instantly' },
  },
  {
    number: '02',
    category: 'Revenue',
    title: 'Turn buying signals into researched outreach',
    description:
      'Watch for meaningful events such as funding, hiring, product launches, leadership changes, and high-intent site visits, then give reps a timely reason to reach out.',
    workflow: [
      'A first- or third-party intent signal enters the workflow',
      'AI researches the account, validates the signal, and maps it to your offer',
      'A rep receives a cited account brief and a personalized draft to approve',
    ],
    tools: [
      { name: 'Clay', href: 'https://www.clay.com/', note: 'signals + web research' },
      { name: 'HubSpot Agent Hub', href: 'https://www.hubspot.com/products/artificial-intelligence', note: 'CRM-native prospecting' },
      { name: 'Apollo', href: 'https://www.apollo.io/', note: 'contacts + sequencing' },
    ],
    metric: 'Positive reply rate, meetings per 100 accounts, and pipeline created per signal.',
    guardrail: 'Require a verifiable source for every trigger and human approval until message quality is stable.',
    resource: { label: 'See a signal-based workflow pattern', href: 'https://university.clay.com/docs/workflows' },
  },
  {
    number: '03',
    category: 'Revenue',
    title: 'Convert every sales call into follow-up and clean CRM data',
    description:
      'Stop asking sellers to retype meetings. Capture the call, summarize the buying context, draft the follow-up, and log the right fields automatically.',
    workflow: [
      'A recorded meeting is transcribed after the call',
      'AI extracts pains, stakeholders, objections, commitments, dates, and next steps',
      'The summary and tasks sync to the matching opportunity; the rep approves the email draft',
    ],
    tools: [
      { name: 'Fathom', href: 'https://fathom.video/', note: 'notes + action items' },
      { name: 'Gong', href: 'https://www.gong.io/product/ai/', note: 'conversation intelligence' },
      { name: 'Salesforce', href: 'https://www.salesforce.com/sales/cloud/', note: 'CRM system of record' },
    ],
    metric: 'CRM field completion, follow-up time, overdue next steps, and stage conversion.',
    guardrail: 'Require rep approval for customer-facing messages and deal-stage changes, and record commitments exactly as stated.',
    resource: { label: 'Review Fathom’s CRM sync behavior', href: 'https://help.fathom.video/en/articles/448640' },
  },
  {
    number: '04',
    category: 'Revenue',
    title: 'Draft RFPs and security questionnaires from approved answers',
    description:
      'Give proposal teams a cited first draft, then route uncertain or stale answers to subject-matter experts.',
    workflow: [
      'A Word, PDF, spreadsheet, or portal questionnaire is imported and split into requirements',
      'AI matches each question to governed answers, policies, case studies, and prior responses',
      'Low-confidence items go to the correct expert; approved answers flow back into the final format',
    ],
    tools: [
      { name: 'Loopio', href: 'https://loopio.com/platform/ai/', note: 'response management' },
      { name: 'Responsive', href: 'https://www.responsive.io/', note: 'RFP + infosec responses' },
      { name: 'SharePoint', href: 'https://www.microsoft.com/microsoft-365/sharepoint/collaboration', note: 'approved source library' },
    ],
    metric: 'Time to first draft, SME touches per response, on-time submission rate, and win rate.',
    guardrail: 'Restrict generation to approved sources and require owners to verify legal, security, pricing, and roadmap claims.',
    resource: { label: 'Explore cited automated answers', href: 'https://loopio.com/platform/confident-answers/' },
  },
  {
    number: '05',
    category: 'Revenue',
    title: 'Re-engage stalled and previously lost opportunities',
    description:
      'Continuously look for deals with a credible new reason to restart the conversation and use that reason to shape the outreach.',
    workflow: [
      'A closed-lost or inactive opportunity becomes eligible after a defined quiet period',
      'AI compares the loss reason with new product, pricing, company, and account signals',
      'High-confidence matches create a personalized draft and task for the original owner',
    ],
    tools: [
      { name: 'HubSpot', href: 'https://www.hubspot.com/products/artificial-intelligence', note: 'deal context + agent' },
      { name: 'Customer.io', href: 'https://customer.io/platform/journeys', note: 'behavioral journeys' },
      { name: 'Make', href: 'https://www.make.com/en/how-to-guides/build-ai-agents', note: 'workflow orchestration' },
    ],
    metric: 'Reactivated opportunities, reply rate, recovered pipeline, and recovered revenue.',
    guardrail: 'Honor opt-outs and contact limits; suppress accounts with unresolved complaints or explicit no-contact requests.',
    resource: { label: 'See a real-world lead recovery case', href: 'https://openai.com/index/cars24/' },
  },
  {
    number: '06',
    category: 'Customer',
    title: 'Resolve repeat support questions with verified answers',
    description:
      'Answer high-volume, low-risk questions immediately using your help center and product data, with a clear escalation path to a human.',
    workflow: [
      'A customer asks a question in chat or email',
      'AI retrieves the relevant approved content, asks clarifying questions, and answers with context',
      'Unanswered, sensitive, or frustrated conversations transfer with a full summary',
    ],
    tools: [
      { name: 'Intercom Fin', href: 'https://www.intercom.com/fin', note: 'AI support agent' },
      { name: 'Zendesk AI', href: 'https://www.zendesk.com/service/ai/', note: 'service automation' },
      { name: 'n8n RAG', href: 'https://n8n.io/rag/', note: 'custom/open workflow' },
    ],
    metric: 'Automation rate, resolution rate, CSAT, reopen rate, and cost per resolution.',
    guardrail: 'Auto-escalate billing disputes, cancellations, safety issues, angry sentiment, and low-confidence answers.',
    resource: { label: 'Read the field study on AI-assisted support', href: 'https://www.nber.org/digest/20236/measuring-productivity-impact-generative-ai' },
  },
  {
    number: '07',
    category: 'Customer',
    title: 'Triage every request before it reaches the queue',
    description:
      'Classify intent, urgency, customer tier, language, and required data as soon as a message arrives so specialists receive a ready-to-work case.',
    workflow: [
      'An email, form, chat, or portal request arrives',
      'AI extracts identifiers, summarizes the issue, labels the topic, and detects urgency',
      'Rules route the case, update the CRM or order system, and start the correct SLA',
    ],
    tools: [
      { name: 'Front', href: 'https://front.com/', note: 'shared inbox + AI' },
      { name: 'Zendesk', href: 'https://www.zendesk.com/', note: 'ticketing + routing' },
      { name: 'OpenAI API', href: 'https://platform.openai.com/docs/guides', note: 'custom classification' },
    ],
    metric: 'First-assignment accuracy, time to first response, transfers per ticket, and SLA breaches.',
    guardrail: 'Use fixed routing rules for VIP, regulatory, security, and safety queues; log classification confidence.',
    resource: { label: 'See Front’s topic-based routing', href: 'https://help.front.com/en/articles/3329344' },
  },
  {
    number: '08',
    category: 'Customer',
    title: 'Detect churn risk and expansion intent early',
    description:
      'Monitor what customers say and do across calls, tickets, product usage, and email to surface risk or buying momentum before the renewal meeting.',
    workflow: [
      'Customer communications and product signals update continuously',
      'AI detects sentiment shifts, stakeholder disengagement, unresolved issues, and expansion language',
      'The CSM receives evidence, severity, next-best action, and a dated task',
    ],
    tools: [
      { name: 'Gainsight', href: 'https://www.gainsight.com/customer-success/', note: 'customer success platform' },
      { name: 'Staircase AI', href: 'https://www.gainsight.com/staircase-ai/', note: 'conversation signals' },
      { name: 'Vitally', href: 'https://www.vitally.io/', note: 'customer health + playbooks' },
    ],
    metric: 'Risk lead time, gross retention, save rate, expansion pipeline, and forecast accuracy.',
    guardrail: 'Show the source evidence behind every risk and require additional signals before changing health scores or forecasts.',
    resource: { label: 'Study Gainsight’s Risk Analyst workflow', href: 'https://support.gainsight.com/Staircase_AI/Staircase_AI_Features/Risk_Analyst' },
  },
  {
    number: '09',
    category: 'Customer',
    title: 'Publish a weekly voice-of-customer brief automatically',
    description:
      'Turn thousands of conversations into a short, cited brief of recurring pain points, feature requests, objections, praise, and emerging themes.',
    workflow: [
      'New calls, tickets, reviews, and survey comments are collected in one analysis set',
      'AI clusters themes, counts examples, compares changes, and selects representative evidence',
      'A weekly brief is delivered to product, marketing, sales, and support owners',
    ],
    tools: [
      { name: 'Dovetail', href: 'https://dovetail.com/', note: 'research synthesis' },
      { name: 'Front Topics', href: 'https://help.front.com/en/articles/3329344', note: 'conversation taxonomy' },
      { name: 'Zapier', href: 'https://zapier.com/ai', note: 'collection + delivery' },
    ],
    metric: 'Feedback coverage, time-to-insight, themes acted on, and repeated issue volume.',
    guardrail: 'Include counts and source excerpts, strip personal data, and label AI interpretations clearly.',
    resource: { label: 'Learn AI-powered thematic analysis', href: 'https://static-assets.dovetail.com/ebook-arriving-at-user-insights-faster-with-ai-powered-research.pdf' },
  },
  {
    number: '10',
    category: 'Marketing',
    title: 'Turn one recording into a week of content',
    description:
      'Transform a webinar, podcast, demo, or interview into short clips, a recap, social drafts, an email, and a sales enablement snippet.',
    workflow: [
      'A new long-form recording lands in the content folder',
      'AI transcribes it, finds strong moments, reframes clips, and drafts channel-specific copy',
      'An editor approves the claims, voice, and final publishing schedule',
    ],
    tools: [
      { name: 'Descript', href: 'https://www.descript.com/clips', note: 'transcript-based editing' },
      { name: 'OpusClip', href: 'https://www.opus.pro/', note: 'automated short clips' },
      { name: 'Buffer', href: 'https://buffer.com/', note: 'approval + scheduling' },
    ],
    metric: 'Production hours per asset, assets per recording, qualified traffic, and assisted pipeline.',
    guardrail: 'Require editorial review; verify quotes and remove confidential or customer-identifying moments.',
    resource: { label: 'See the AI clipping workflow', href: 'https://www.descript.com/clips' },
  },
  {
    number: '11',
    category: 'Marketing',
    title: 'Personalize lifecycle messages from real behavior',
    description:
      'Replace one-size-fits-all drips with messages shaped by what each person has done, skipped, asked, or struggled with.',
    workflow: [
      'A product or CRM event, such as trial inactivity, feature adoption, cart abandonment, or renewal proximity, starts a journey',
      'AI selects the relevant proof point, education, or next step and adapts the draft to the segment',
      'Rules cap frequency, test variants, and escalate high-value intent to a person',
    ],
    tools: [
      { name: 'Customer.io', href: 'https://customer.io/platform/journeys', note: 'event-driven journeys' },
      { name: 'Braze', href: 'https://www.braze.com/', note: 'cross-channel engagement' },
      { name: 'HubSpot', href: 'https://www.hubspot.com/products/marketing', note: 'CRM-native automation' },
    ],
    metric: 'Activation, reply, conversion, unsubscribe, and revenue per journey.',
    guardrail: 'Use consented data, cap send frequency, lock claims and offers, and maintain a non-AI fallback message.',
    resource: { label: 'Follow a practical LLM personalization experiment', href: 'https://customer.io/learn/lifecycle-marketing/using-llms-for-personalization' },
  },
  {
    number: '12',
    category: 'Operations',
    title: 'Capture, code, and route invoices automatically',
    description:
      'Move invoices from a shared inbox into the accounting system with extracted line items, suggested coding, duplicate checks, and the correct approval path.',
    workflow: [
      'An invoice arrives by email or upload',
      'OCR and AI extract fields, match the vendor and PO, suggest codes, and flag anomalies',
      'Bills follow the appropriate approval path, with mismatches highlighted for AP review',
    ],
    tools: [
      { name: 'Ramp Bill Pay', href: 'https://ramp.com/accounts-payable', note: 'AP automation + agents' },
      { name: 'Rossum', href: 'https://rossum.ai/', note: 'document processing' },
      { name: 'Nanonets', href: 'https://nanonets.com/', note: 'OCR + workflow automation' },
    ],
    metric: 'Cost per invoice, touchless rate, approval cycle time, duplicate payments, and exceptions.',
    guardrail: 'Separate invoice capture, approval, and payment permissions; require review for new vendors or changed bank details.',
    resource: { label: 'Review Ramp’s AP agent controls', href: 'https://support.ramp.com/ap-agents-available-in-ramp-bill-pay' },
  },
  {
    number: '13',
    category: 'Operations',
    title: 'Run a first-pass contract intake and review',
    description:
      'Extract commercial terms, compare clauses with your playbook, suggest narrow redlines, and route the actual exceptions to legal.',
    workflow: [
      'A vendor or customer agreement enters the intake workflow',
      'AI extracts dates, value, renewal, data terms, and non-standard clauses with citations',
      'Standard language advances; deviations receive suggested edits and the right approver',
    ],
    tools: [
      { name: 'Ironclad', href: 'https://ironcladapp.com/product/ai-based-contract-management', note: 'CLM + AI playbooks' },
      { name: 'Juro', href: 'https://juro.com/', note: 'contract automation' },
      { name: 'DocuSign', href: 'https://www.docusign.com/products/iam', note: 'agreement management' },
    ],
    metric: 'Time to first review, legal touches, cycle time, deviations found, and missed renewals.',
    guardrail: 'Require an authorized legal or business owner to review AI-prepared materials, accept terms, and send redlines.',
    resource: { label: 'See cited contract intake in practice', href: 'https://support.ironcladapp.com/hc/en-us/articles/39616157653911-Intake-Agent-Overview' },
  },
  {
    number: '14',
    category: 'Team',
    title: 'Answer internal questions from company knowledge',
    description:
      'Give people one place to ask “How do we…?” across docs, wikis, tickets, chat, and code, with permission-aware answers that cite the source.',
    workflow: [
      'Approved company sources are indexed under their existing access controls',
      'A teammate asks a question in plain language and gets a concise, cited answer',
      'Unanswered questions become a knowledge gap assigned to the source owner',
    ],
    tools: [
      { name: 'Glean', href: 'https://www.glean.com/', note: 'enterprise search + agents' },
      { name: 'Microsoft 365 Copilot', href: 'https://www.microsoft.com/microsoft-365-copilot', note: 'Microsoft work graph' },
      { name: 'Guru', href: 'https://www.getguru.com/', note: 'verified knowledge' },
    ],
    metric: 'Search time, repeat questions, answer success, onboarding time, and stale-source rate.',
    guardrail: 'Enforce source permissions at retrieval time, show citations, and assign owners and expiry dates to policies.',
    resource: { label: 'Read Glean’s implementation quick start', href: 'https://docs.glean.com/user-guide/about/end-user-quick-start-guide' },
  },
  {
    number: '15',
    category: 'Team',
    title: 'Triage production incidents and draft the fix',
    description:
      'Combine errors, traces, logs, releases, and code context so engineers start with a probable root cause and a reviewable patch.',
    workflow: [
      'Monitoring groups a new error and attaches runtime context',
      'AI scores actionability, investigates the root cause, and proposes a solution',
      'For well-bounded issues, it drafts code changes or opens a pull request for review',
    ],
    tools: [
      { name: 'Sentry Seer', href: 'https://docs.sentry.io/product/ai-in-sentry/seer', note: 'AI debugging agent' },
      { name: 'GitHub Copilot', href: 'https://github.com/features/copilot', note: 'code assistance' },
      { name: 'PagerDuty', href: 'https://www.pagerduty.com/use-cases/aiops/', note: 'incident orchestration' },
    ],
    metric: 'Mean time to acknowledge, mean time to resolve, alert noise, regressions, and engineer hours per incident.',
    guardrail: 'Run tests, require code-owner approval, and keep production deployment under human control.',
    resource: { label: 'See Sentry Seer’s end-to-end flow', href: 'https://docs.sentry.io/product/ai-in-sentry/seer' },
  },
];

export const automationCategories = ['Revenue', 'Customer', 'Marketing', 'Operations', 'Team'] as const;
