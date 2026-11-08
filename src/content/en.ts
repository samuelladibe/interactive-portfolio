import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Samuel LADIBE, GCP Data Engineer',
    description:
      'GCP Data Engineer: ingestion, ELT in BigQuery, Dataform modelling, Terraform infrastructure and CI/CD. 4 years of experience, from BI to multi-client delivery.',
  },
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    menu: 'Open or close the menu',
    sections: 'Sections',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    language: 'Site language',
    home: 'Back to home',
  },
  hero: {
    role: 'GCP Data Engineer',
    pitch:
      '4 years of experience, from BI to multi-client delivery. I design and run data platforms end to end: ingestion, ELT in BigQuery, layered modelling, GCP infrastructure in Terraform, and CI/CD. I specialise in difficult integrations and in making data flows production-grade.',
    contact: 'Get in touch',
    photoAlt: 'Portrait of Samuel LADIBE',
  },
  pipeline: {
    title: 'How data travels, from source to dashboard',
    hint: 'Pick a source to see its route and what I solved along the way.',
    sourcesLabel: 'Sources',
    ingestionLabel: 'Ingestion',
    warehouseLabel: 'BigQuery, modelled with Dataform',
    outputLabel: 'Consumption',
    outputNode: 'Dashboards',
    otherNode: 'Datastream, SFTP',
    sources: [
      { id: 'shopify', name: 'Shopify', route: 'airbyte', note: 'GraphQL API and bulk operations, production incidents included.' },
      { id: 'woocommerce', name: 'WooCommerce', route: 'airbyte', note: 'Official connector optimised: refunds are only read for orders that were actually refunded.' },
      { id: 'postgres', name: 'PostgreSQL', route: 'airbyte', note: 'Replication from a hot standby database, a case that had to be solved in production.' },
      { id: 'oracle', name: 'Oracle, MSSQL', route: 'airbyte', note: 'Client databases loaded into BigQuery, including incidents caused by Oracle synonyms.' },
      { id: 'custom', name: 'APIs with no connector', route: 'airbyte', note: '12 connectors built with the Low-code CDK: incremental syncs, cursor pagination, backoff, rate limiting.' },
      { id: 'netsuite', name: 'NetSuite', route: 'python', note: 'A 22-hour Airbyte connector replaced by a SuiteQL OAuth 1.0a script that runs in seconds.' },
      { id: 'skeepers', name: 'Skeepers', route: 'python', note: 'Batch loading, retry on failure, automatic JWT token and deduplication with MERGE.' },
      { id: 'sfmc', name: 'Salesforce MC', route: 'python', note: 'Pagination, D-1 watermark, with a choice of full refresh or incremental.' },
      { id: 'shippingbo', name: 'Shippingbo', route: 'python', note: 'Batches of 10,000 rows, rate limit respected, running on Cloud Run with Pub/Sub.' },
      { id: 'files', name: 'Databases and files', route: 'other', note: 'Flows that use neither Airbyte nor a Python script arrive through Datastream and SFTP.' },
    ],
  },
  results: {
    title: 'Measured results',
    gainsTitle: 'What got faster',
    scaleTitle: 'What I keep running',
    gains: [
      { what: 'NetSuite sync', before: '22 h', after: 'a few seconds', where: 'Digital Forge' },
      { what: 'MITRE ATT&CK matrix update', before: 'several hours', after: 'under 5 min', where: 'I-TRACING' },
      { what: 'EDR coverage reference data', before: 'several hours', after: 'a few minutes', where: 'I-TRACING' },
      { what: 'API calls to Chronicle SOAR', after: 'about 90% fewer', where: 'I-TRACING' },
    ],
    scale: [
      { value: '40+', label: 'sources maintained on Airbyte, on top of Python, SFTP and Datastream flows' },
      { value: '12', label: 'Airbyte connectors built with the Low-code CDK' },
      { value: '86,000', label: 'product rows collected for a premium fashion brand' },
      { value: '164', label: 'unit tests on the lead scoring engine' },
      { value: '~€100M', label: 'of supplier spend analysed at Carrefour' },
    ],
  },
  experience: {
    title: 'Experience',
    careerLabel: 'Career progression',
    stackLabel: 'Stack:',
    career: [
      { id: 'carrefour', company: 'Carrefour', years: '2022 to 2024', verb: 'automate' },
      { id: 'i-tracing', company: 'I-TRACING', years: '2025', verb: 'industrialise' },
      { id: 'digital-forge', company: 'Digital Forge', years: 'since Dec. 2025' },
    ],
    jobs: [
      {
        id: 'digital-forge',
        company: 'Digital Forge',
        role: 'GCP Data Engineer',
        context: 'Data consultancy, multi-client',
        dates: 'Dec. 2025 to present',
        summary:
          'Airbyte ingestion into GCP and BigQuery ELT for clients in retail, e-commerce, logistics and wellness. I build the connectors, load the raw data, transform it with Dataform and deliver the datamarts in a BI tool built in-house.',
        groups: [
          {
            title: 'ELT ingestion and connectors',
            items: [
              'More than 40 sources maintained on self-hosted Airbyte (GCP VM) into BigQuery, plus Python, SFTP and Datastream flows.',
              '12 custom Low-code CDK connectors: incremental syncs, cursor pagination, backoff, rate limiting, partition routers, anonymisation.',
              'Tuned official connectors and resolved production incidents (CDK v3 bug, Shopify bulk operations, PostgreSQL replication, Oracle synonyms).',
            ],
          },
          {
            title: 'Python ingestion scripts',
            items: [
              'NetSuite: a 22-hour Airbyte connector replaced by a SuiteQL OAuth 1.0a script running in seconds, with CDC.',
              'Skeepers, Salesforce Marketing Cloud, Shippingbo: batching, retry on failure, incremental watermark, MERGE, Cloud Run and Pub/Sub.',
              'Shared foundation: Google Chat alerting, schema compliance, monitoring of every production script.',
            ],
          },
          {
            title: 'Transformation and modelling',
            items: [
              'Standard Dataform workspace template, versioned on GitHub and reused for every client onboarding.',
              'Complete KPI pipeline: lead time, cycle time, late rate, reopened tickets.',
              'BigQuery administration: CLONE, Time Travel restores, multi-region clean-up.',
            ],
          },
          {
            title: 'Infrastructure and access',
            items: [
              'IAM access automated in Terraform by business group, service accounts, key rotation.',
              'Multi-client Terraform module (for_each): relay VMs, firewall, Cloud Run, deployed through GitHub Actions.',
              'Standard policy for accessing client systems (whitelisting, SSH, VPN), approved by management.',
            ],
          },
        ],
        stack:
          'BigQuery, Airbyte, Dataform, Datastream, Cloud Run, GCE, Cloud SQL, Pub/Sub, GCS, IAM, Secret Manager, Terraform, GitHub Actions, Docker, Python, SQL, TypeScript, Claude API, Playwright, Linux',
      },
      {
        id: 'i-tracing',
        company: 'I-TRACING',
        role: 'GCP Data Engineer',
        context: 'Cybersecurity',
        dates: 'Feb. to Dec. 2025',
        place: 'Courbevoie, France',
        groups: [
          {
            title: 'SentinelOne EDR serverless architecture',
            items: [
              'Led alone from end to end: GCS, Cloud Functions, BigQuery (raw, staging, analytics), Cloud Run.',
              'Deployed with Terraform, Jenkins and Ansible, on GitHub develop and master branches.',
              'Unified, historised reference data across CMDB, AD, Ivanti, GCP and SentinelOne.',
              '100% automated pipeline: updates cut from several hours to a few minutes.',
            ],
          },
          {
            title: 'Chronicle SOAR pipeline',
            items: [
              'REST API extraction of alerts and incidents, filtered by ServiceNow SysID before enrichment.',
              'Incremental history, with backlog and SLA metrics exposed in BigQuery.',
              'About 90% fewer API calls; more than 10,000 alerts and 620 incidents historised.',
            ],
          },
          {
            title: 'MITRE ATT&CK',
            items: [
              'Automated scraping and versioning of the matrix, joined with the control policy.',
              'Updates went from several manual hours to under 5 minutes.',
            ],
          },
          {
            title: 'CISO reporting',
            items: [
              '360° radar of SOC integrations for 2025 to 2028, adopted as the governance standard.',
              'Vulnerability dashboard: aggregated reference data, EPSS and CVSS, remediation times.',
            ],
          },
        ],
        stack:
          'Python, Terraform, Jenkins, Ansible, GitHub, BigQuery, SQL, Cloud Functions, Cloud Run, GCS, Eventarc, Pub/Sub, Apps Script, Looker Studio, Power BI, Chronicle SOAR, ServiceNow, SentinelOne',
      },
      {
        id: 'carrefour',
        company: 'Carrefour France',
        role: 'Data Analyst & Data Engineer',
        context: 'Retail',
        dates: 'Sept. 2022 to Sept. 2024',
        place: 'Massy, France',
        summary:
          'My move into Data Engineering: I built the pipelines and models behind the purchasing dashboards, across about €100M of analysed supplier spend.',
        groups: [
          {
            title: 'GCP migration and product reference data',
            items: [
              'Migrated SQL tables and scripts to BigQuery: analysis, migration, consistency tests, quality control.',
              'Reference data KPIs in SQL (suppliers, catalogues, products with no image), signed off with the business teams.',
            ],
          },
          {
            title: 'Python to BigQuery pipeline',
            items: [
              'Weekly Excel reports, Drive, Python script, BigQuery, replacing manual extractions.',
              'Innovation projects classified as late or ahead to support workload planning.',
            ],
          },
          {
            title: 'Supplier risk modelling',
            items: [
              'Altares dataset, mapping table on a unique key, joined with group spend.',
              'Reference tables and risk and dependency indicators put into production.',
            ],
          },
          {
            title: 'Steering and reporting',
            items: ['Looker and Tableau dashboards, buyer training, KPI validation sessions.'],
          },
        ],
        stack:
          'SQL, BigQuery, GCS, Data Transfer, Python, Colab, Apps Script, Looker, Tableau, SAP Ariba, GitHub, Jira, Confluence',
      },
    ],
  },
  projects: {
    title: 'Shipped projects',
    lead: 'Products and tools built at Digital Forge in 2026.',
    showMore: 'Show the other {n} projects',
    showLess: 'Show fewer projects',
    items: [
      { name: 'AI dashboard agent', meta: 'May to Aug., lead designer', text: 'Text-to-SQL AI agent that turns a business brief into a React dashboard on top of BigQuery.', result: '83 tests, target of 2-3 days down to 2-3 hours' },
      { name: 'SaaS BI platform', meta: 'Jan. to July, full-stack and DevOps', text: 'In-house SaaS BI: self-hosted Supabase, Terraform, Workload Identity CI/CD, server-side filters.', result: 'Year-on-year comparisons and cascading filters' },
      { name: 'Leads Generator', meta: 'Aug. to Sept., designer', text: 'From HubSpot to a follow-up cockpit: Airbyte, BigQuery, Dataform and explainable scoring.', result: '164 unit tests' },
      { name: 'Distributor qualification', meta: 'Aug. to Sept., ingestion lead', text: 'Weekly web collection of catalogues for a premium fashion brand, enriched with SIRENE, Pappers and Google Places, resolved by SIREN number.', result: '86,000 rows, 69 metrics' },
      { name: 'Multi-brand qualification platform', meta: 'Aug. to Sept., designer', text: 'The same qualification generalised to several brands, configured through TOML profiles.', result: 'Test suite under 1 s' },
      { name: 'SEO and GEO engine', meta: 'Apr. to Sept., designer', text: 'Shopify catalogue into BigQuery, then brand-compliant LLM content published as metaobjects.', result: 'No invented product facts' },
      { name: 'Store events', meta: 'Dec. 2025 to Aug., designer', text: 'Secure Streamlit app feeding a sales forecasting ML model, with Terraform infrastructure.' },
      { name: 'Power BI monitoring', meta: 'Jan., developer', text: 'Multi-client refresh supervision through the REST API and Azure AD, with scheduled alerting.' },
      { name: 'High-end prospecting', meta: '2026, designer', text: 'Company registry scraping and scoring weighted by client signals, in France and abroad.', result: 'API Gouv, Pappers, INPI, Cloud Run' },
    ],
  },
  skills: {
    title: 'What I can prove, and at what level',
    filterLabel: 'Filter by level',
    all: 'All',
    count: '{n} skills shown',
    levels: {
      production: 'Shipped and maintained in production',
      project: 'Used on a work or personal project',
      learning: 'Currently learning',
    },
    groups: [
      { title: 'Data warehouse', items: [['BigQuery', 'production'], ['Partitioning', 'production'], ['Clustering', 'production'], ['MERGE', 'production'], ['CLONE', 'production'], ['Time Travel, UNDROP', 'production'], ['SQL scripting', 'production'], ['INFORMATION_SCHEMA', 'production']] },
      { title: 'Ingestion and ELT', items: [['Self-hosted Airbyte OSS', 'production'], ['Low-code CDK YAML', 'production'], ['Datastream', 'production'], ['Data Transfers', 'production'], ['SFTP', 'production'], ['Python, Colab Enterprise', 'production']] },
      { title: 'Transformation', items: [['Dataform SQLX', 'production'], ['raw, staging, entities, datamarts', 'production'], ['Fact tables', 'production'], ['Business KPIs', 'production']] },
      { title: 'GCP', items: [['Compute Engine', 'production'], ['Cloud Run', 'production'], ['Cloud Functions', 'production'], ['GCS', 'production'], ['Pub/Sub', 'production'], ['Cloud SQL', 'production'], ['Scheduler', 'production'], ['Secret Manager', 'production'], ['Artifact Registry', 'production'], ['IAM', 'production'], ['Audit Logs', 'production']] },
      { title: 'IaC and CI/CD', items: [['Multi-client Terraform', 'production'], ['GitHub Actions', 'production'], ['Workload Identity Federation', 'production'], ['Docker, Compose', 'production'], ['Jenkins', 'production'], ['Ansible', 'production']] },
      { title: 'Network and security', items: [['Fortinet VPN', 'production'], ['SSH tunnels', 'production'], ['socat, systemd', 'production'], ['IP whitelisting', 'production'], ['Cloudflare Tunnel', 'production'], ['OAuth 1.0a and 2.0', 'production'], ['JWT', 'production'], ['Key rotation', 'production']] },
      { title: 'Languages', items: [['Python', 'production'], ['GoogleSQL', 'production'], ['Bash', 'production'], ['YAML, Jinja, TOML', 'production'], ['JavaScript', 'project'], ['TypeScript, React', 'project'], ['FastAPI', 'project']] },
      { title: 'Integrated sources', items: [['Shopify GraphQL', 'production'], ['NetSuite SuiteQL', 'production'], ['SFMC', 'production'], ['Splio', 'production'], ['Skeepers', 'production'], ['Shippingbo', 'production'], ['WooCommerce', 'production'], ['HubSpot', 'production'], ['PostgreSQL', 'production'], ['MSSQL', 'production'], ['Oracle', 'production'], ['MySQL', 'production']] },
      { title: 'BI and reporting', items: [['Looker Studio', 'production'], ['Looker', 'production'], ['Power BI', 'production'], ['Tableau', 'production'], ['Metabase', 'production'], ['Apps Script', 'production']] },
      { title: 'Generative AI and scraping', items: [['Claude API', 'project'], ['Text-to-SQL', 'project'], ['Claude Code, MCP', 'project'], ['Playwright', 'project'], ['httpx, BeautifulSoup', 'project'], ['pytest', 'project']] },
      { title: 'Beyond GCP', items: [['Airflow', 'project'], ['Spark', 'project'], ['MongoDB', 'project'], ['Neo4j', 'project'], ['AWS', 'project'], ['Azure', 'project']], note: 'Often available as managed services on GCP (Composer, Dataproc).' },
      { title: 'PDE preparation', items: [['Dataflow', 'learning'], ['Dataproc', 'learning'], ['Kafka', 'learning'], ['Kubernetes', 'learning']], note: 'Practised while preparing the certification, personal projects planned.' },
    ],
  },
  education: {
    title: 'Education',
    items: [
      { term: 'Degree', lines: ['Engineering degree, ESIGELEC, Rouen, 2021 to 2024', 'Big Data for digital transformation'] },
      { term: 'Certification', lines: ['Google Cloud Professional Data Engineer', 'In preparation'] },
      { term: 'Languages', lines: ['French, native', 'English, professional (TOEIC 820)', 'Spanish, beginner'] },
      { term: 'Ways of working', lines: ['Scrum, Kanban, CI/CD', 'Collaboration across Dev, Sec and Data'] },
    ],
  },
  contact: {
    title: "Let's talk about your data platform",
    text: 'A role, a contract, or an integration that keeps failing? Send me an email and I will get back to you.',
    availability: 'Open to permanent, fixed-term or freelance positions. Driving licence.',
    copy: 'Copy address',
    copied: 'Address copied',
    copyFailed: 'Copy failed, select the address instead',
  },
  footer: { rights: 'All rights reserved.', top: 'Back to top' },
  notFound: {
    title: 'Page not found',
    text: 'This address does not match any page on the site.',
    back: 'Back to home',
  },
};
