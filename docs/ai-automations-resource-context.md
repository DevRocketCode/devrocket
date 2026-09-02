# Conversation context: “15 AI Automations” resource

## Request

Create a second resource alongside `src/pages/resources/index.astro` using:

- Title: **15 AI Automations That Save Your Team Time and Drive Revenue**
- Subtitle: **Real-world AI automations for modern teams**
- Fifteen practical automation titles with useful descriptions.
- Web research for credible data, vetted paid/open-source tools, statistics, and client-ready learning resources.
- Do not overlook obvious, high-value workflows.

## Content decision

The guide is organized around five business outcomes:

1. Revenue: inbound routing, signal-based outreach, sales-call follow-up, RFP responses, and lead reactivation.
2. Customer: support resolution, ticket triage, churn/expansion detection, and voice-of-customer analysis.
3. Marketing: content repurposing and behavior-based lifecycle messaging.
4. Operations: invoice processing and contract intake/review.
5. Team: internal knowledge access and production-incident triage.

Each automation includes a plain-language description, three-step workflow, practical tool stack, KPIs, safety guardrail, and primary implementation resource.

## Editorial principles

- Recommend a business workflow, not “AI” in the abstract.
- Favor tools with real adoption and official implementation documentation.
- Include both packaged software and configurable/open-source orchestration where it makes sense.
- Keep permissions, consent, money movement, legal acceptance, and production deployment under deterministic controls and/or human approval.
- Treat vendor-reported performance as directional and label sources clearly.
- Lead with measurable outcomes: time, conversion, throughput, retention, accuracy, or risk.

## Primary research used

- Salesforce research (2026): the average seller spends just 40% of their time actually selling.
- NBER, *Generative AI at Work*: a study of 5,000+ support agents found a 13.8% increase in successful resolutions per hour with AI assistance.
- Microsoft WorkLab: field-study users with Copilot at one company spent 31% less time reading email, saving about 50 minutes per week.

## Implementation locations

- Resource page: `src/pages/resources/15-ai-automations.astro`
- Automation content/data: `src/data/aiAutomations.ts`
- Resource library listing: `src/data/resources.ts`
- Resource-card preview rendering: `src/pages/resources/index.astro`

## Future editing notes

- Content lives in `aiAutomations.ts`, so titles, descriptions, stacks, metrics, guardrails, and links can be revised without touching page layout.
- Re-check vendor capability and statistic links during a major annual update.
- The resource is designed for the web and includes consistent light-mode print/PDF styles.
