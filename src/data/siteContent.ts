export const heroTestimonial = {
  name: "Jean Leconte II",
  detail: "Generative AI Engineer, AWS",
  image: "/images/testimonials/jean-leconte-ii.jpeg",
  socialUrl: "https://www.linkedin.com/in/jean-leconte-ii/",
  quote:
    "I've learned a ton from Preston and recommend if anyone reading this has the opportunity to work with him in any capacity they should take it!",
}

export const proofStats = [
  {
    value: "40%",
    label: "revenue increase",
    detail:
      "Predictive budget-spend work turned campaign and revenue signals into timely action.",
    href: "#predictive-budget-spend-system",
  },
  {
    value: "85%",
    label: "time savings",
    detail:
      "AI instructor validation replaced repetitive access checks with real-time search and webhook automation.",
    href: "#ai-instructor-validation",
  },
  {
    value: "5,000",
    label: "hours saved per year",
    detail:
      "The same instructor validation system removed approximately 5,000 hours of manual work each year.",
    href: "#ai-instructor-validation",
  },
  {
    value: "$500K+",
    label: "annual efficiency gains",
    detail:
      "AI office-hours automation used OCR, APIs, and Salesforce integration to reduce manual operations.",
    href: "#ai-office-hours-automation",
  },
  {
    value: "90%",
    label: "API performance improvement",
    detail:
      "Node and GraphQL API modernization made production product surfaces faster and more reliable.",
    href: "#node-graphql-api-modernization",
  },
  {
    value: "40%",
    label: "CI/CD cycle reduction",
    detail:
      "Infrastructure and CI/CD work reduced test-build-deploy time for the engineering workflow.",
    href: "#ci-cd-infrastructure-acceleration",
  },
]

export const capabilities = [
  {
    icon: "fa-cogs",
    title: "Workflow automation",
    summary:
      "Automate high-friction operational work while keeping people in the right review points.",
    points: ["Workflow design", "System integrations", "Review queues"],
  },
  {
    icon: "fa-database",
    title: "Knowledge and RAG systems",
    summary:
      "Turn internal documents and scattered expertise into grounded answers with source context.",
    points: ["Retrieval pipelines", "Vector search", "Answer evaluation"],
  },
  {
    icon: "fa-file-text-o",
    title: "Document AI",
    summary:
      "Extract, validate, and route information from documents into the systems where work happens.",
    points: ["OCR workflows", "Structured extraction", "Exception handling"],
  },
  {
    icon: "fa-code",
    title: "AI product features",
    summary:
      "Add AI features to real products with the UX, API, auth, and data layer they need.",
    points: ["Product UX", "API design", "Launch scope"],
  },
  {
    icon: "fa-random",
    title: "Constrained agent workflows",
    summary:
      "Build tool-using agents with clear boundaries, fallback paths, and human approval.",
    points: ["Tool orchestration", "Guardrails", "Escalation paths"],
  },
  {
    icon: "fa-shield",
    title: "Production engineering",
    summary:
      "Make AI software reliable with evaluation, monitoring, deployment, security, and handoff.",
    points: ["Evaluation", "CI/CD", "Observability"],
  },
]

export const systems = [
  {
    id: "predictive-budget-spend-system",
    title: "Predictive budget-spend system",
    problem:
      "Campaign and revenue signals were spread across systems, making it harder to spot spend opportunities quickly.",
    type: "Predictive operations workflow",
    architecture:
      "Data modeling, budget-spend prediction, workflow surfacing, and operational reporting.",
    metric: "40% revenue lift",
    outcomes: ["40% revenue increase", "fewer support tickets"],
    details: [
      "Connected operational and revenue signals to help teams act earlier on budget-spend patterns.",
      "Kept the outcome tied to business movement rather than a standalone AI demo.",
    ],
  },
  {
    id: "llm-contact-discovery",
    title: "LLM contact discovery",
    problem:
      "Sales teams needed a faster way to identify and enrich prospects from public web data.",
    type: "LLM-powered prospecting pipeline",
    architecture:
      "Full-stack scraping pipeline with LLM extraction, enrichment workflow, review states, and application UI.",
    metric: "Prospecting pipeline",
    outcomes: ["Prospect discovery and enrichment pipeline"],
    details: [
      "Built a workflow that found, extracted, and enriched contact data for sales prospecting.",
      "Kept the system scoped around repeatable discovery work instead of broad, unbounded automation.",
    ],
  },
  {
    id: "ai-instructor-validation",
    title: "AI instructor validation",
    problem:
      "Manual instructor validation and access checks created delays and repetitive operational work.",
    type: "Real-time validation and access control",
    architecture:
      "Search workflow, webhook integration, validation logic, access control, and operational handoff.",
    metric: "85% time savings",
    outcomes: ["85% time savings", "approximately 5,000 hours per year saved"],
    details: [
      "Built real-time search and webhook automation for validation decisions.",
      "Reduced manual validation work while keeping access control decisions explicit.",
    ],
  },
  {
    id: "ai-office-hours-automation",
    title: "AI office-hours automation",
    problem:
      "Office-hours workflows depended on repetitive document review and manual Salesforce updates.",
    type: "OCR and API workflow automation",
    architecture:
      "OCR processing, API orchestration, Salesforce integration, validation steps, and operational reporting.",
    metric: "$500K+ gains",
    outcomes: ["$500K+ in annual efficiency gains"],
    details: [
      "Built an OCR and API workflow that moved information into Salesforce.",
      "Focused automation on the repeated operational steps that created the largest time drain.",
    ],
  },
  {
    id: "production-document-chat",
    title: "Production document chat",
    problem:
      "Users needed a reliable way to ask questions across data and documents in a production environment.",
    type: "AI chat platform for data and document access",
    architecture:
      "Document chat application, data access layer, EC2 infrastructure ownership, deployment, and production support.",
    metric: "$24K ARR",
    outcomes: ["$24K ARR"],
    details: [
      "Deployed an AI chat platform for document and data access.",
      "Owned the EC2 infrastructure required to keep the product running in production.",
    ],
  },
  {
    id: "ai-rag-campaign-workflow",
    title: "AI/RAG campaign workflow",
    problem:
      "Campaign build work was slowed by repeated research, scattered context, and handoffs.",
    type: "RAG and workflow acceleration",
    architecture:
      "Retrieval workflows, campaign context, application integration, and human review loops.",
    metric: "~15% faster builds",
    outcomes: [
      "approximately 15% reduction in campaign build time",
      "approximately 15% churn reduction",
    ],
    details: [
      "Used retrieval and workflow design to shorten campaign build cycles.",
      "Kept campaign context available where operators were already doing the work.",
    ],
  },
  {
    id: "node-graphql-api-modernization",
    title: "Node and GraphQL API modernization",
    problem:
      "Production APIs needed to handle product demand with lower latency and more predictable behavior.",
    type: "Backend performance engineering",
    architecture:
      "Node services, GraphQL APIs, performance tuning, query optimization, and production monitoring.",
    metric: "up to 90% faster APIs",
    outcomes: ["up to 90% API performance improvement"],
    details: [
      "Improved the backend systems that product and AI-facing workflows depended on.",
      "Focused the work on measurable response-time improvements and operational reliability.",
    ],
  },
  {
    id: "ci-cd-infrastructure-acceleration",
    title: "CI/CD infrastructure acceleration",
    problem:
      "The engineering workflow was slowed by long test, build, and deploy cycles.",
    type: "Infrastructure and delivery automation",
    architecture:
      "CI/CD pipeline optimization, infrastructure automation, build tuning, and release workflow cleanup.",
    metric: "40% faster CI/CD",
    outcomes: ["40% reduction in test-build-deploy time"],
    details: [
      "Reduced delivery friction so production work could move faster with less waiting.",
      "Kept the improvement tied to the software delivery system rather than a single feature.",
    ],
  },
]

export const processSteps = [
  {
    title: "Validate the opportunity",
    detail:
      "Identify the workflow, data, risks, users, and measurable outcome.",
  },
  {
    title: "Build the working version",
    detail:
      "Ship a small end-to-end system using representative data and real integrations.",
  },
  {
    title: "Launch and improve",
    detail:
      "Add evaluations, guardrails, monitoring, security, documentation, and deployment.",
  },
]

export const founderPrinciples = [
  {
    title: "AI plus product engineering",
    detail:
      "AI work is connected to product UX, APIs, data, and the operational workflow around it.",
  },
  {
    title: "End-to-end ownership",
    detail:
      "Architecture, implementation, deployment, documentation, and handoff stay with one senior engineer.",
  },
  {
    title: "Clear communication",
    detail:
      "You get plain-language tradeoffs, practical scope, and documentation your team can use after launch.",
  },
]

export const founder = {
  name: "Preston Wallace",
  role: "Founder and AI software engineer",
  headline: "Work directly with the builder.",
  image: "/images/headshot.jpg",
  summary:
    "DevRocket is led by Preston Wallace, a senior full-stack engineer working across AI, product, backend systems, data, and cloud infrastructure.",
  paragraphs: [
    "Clients work directly with the engineer responsible for architecture, implementation, deployment, and handoff.",
    "His experience includes production LLM systems, RAG pipelines, agents, React and Next.js applications, Node and Python services, PostgreSQL, AWS, GCP, Docker, Kubernetes, and CI/CD.",
  ],
}

export const testimonials = [
  {
    name: "Jean Leconte II",
    detail: "Generative AI Engineer, AWS",
    image: "/images/testimonials/jean-leconte-ii.jpeg",
    socialUrl: "https://www.linkedin.com/in/jean-leconte-ii/",
    quote:
      "I've learned a ton from Preston and recommend if anyone reading this has the opportunity to work with him in any capacity they should take it!",
  },
  {
    name: "Bienvenido Rodriguez",
    detail: "AI Platform, Coinbase",
    image: "/images/testimonials/b17z.jpeg",
    socialUrl: "https://www.linkedin.com/in/b17z/",
    quote:
      "Preston is a gifted Software Engineer and a thought leader in technical education, training, and communication.",
  },
  {
    name: "Yahya Hafez",
    detail: "Senior Software Engineer",
    image: "/images/testimonials/yahya-hafez.jpeg",
    socialUrl: "https://www.linkedin.com/in/yahya-hafez/",
    quote:
      "Preston's impressive experience and skill as a developer was consistently highlighted through the deep knowledge of web development he shared.",
  },
]
