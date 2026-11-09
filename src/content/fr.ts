import type { Content } from './types';

export const fr: Content = {
  meta: {
    title: 'Samuel LADIBE, Data Engineer GCP',
    description:
      "Data Engineer GCP : ingestion, ELT dans BigQuery, modélisation Dataform, infrastructure Terraform et CI/CD. 4 ans d'expérience, de la BI au delivery multi-clients.",
  },
  nav: {
    experience: 'Expérience',
    projects: 'Projets',
    skills: 'Compétences',
    education: 'Formation',
    contact: 'Contact',
    menu: 'Ouvrir ou fermer le menu',
    sections: 'Sections',
    toDark: 'Passer en mode sombre',
    toLight: 'Passer en mode clair',
    language: 'Langue du site',
    home: "Retour à l'accueil",
  },
  hero: {
    role: 'Data Engineer GCP',
    pitch:
      "4 ans d'expérience, de la BI au delivery multi-clients. Je conçois et j'exploite des plateformes data de bout en bout : ingestion, ELT dans BigQuery, modélisation en couches, infrastructure GCP en Terraform et CI/CD. Je suis spécialiste des intégrations difficiles et de l'industrialisation des flux.",
    contact: 'Me contacter',
    photoAlt: 'Portrait de Samuel LADIBE',
  },
  pipeline: {
    title: 'Le chemin de la donnée, de la source au dashboard',
    hint: 'Choisissez une source pour voir sa route et ce que j’y ai résolu.',
    sourcesLabel: 'Sources',
    ingestionLabel: 'Ingestion',
    warehouseLabel: 'BigQuery, modélisé avec Dataform',
    outputLabel: 'Restitution',
    outputNode: 'Dashboards',
    otherNode: 'Datastream, SFTP',
    sources: [
      { id: 'shopify', name: 'Shopify', route: 'airbyte', note: 'API GraphQL et bulk operations, incidents de production compris.' },
      { id: 'woocommerce', name: 'WooCommerce', route: 'airbyte', note: 'Connecteur officiel optimisé : les remboursements ne sont lus que pour les commandes remboursées.' },
      { id: 'postgres', name: 'PostgreSQL', route: 'airbyte', note: 'Réplication depuis une base en hot standby, un cas qui a demandé une résolution en production.' },
      { id: 'oracle', name: 'Oracle, MSSQL', route: 'airbyte', note: 'Bases clients chargées dans BigQuery, y compris les incidents liés aux synonymes Oracle.' },
      { id: 'custom', name: 'API sans connecteur', route: 'airbyte', note: '12 connecteurs développés en Low-code CDK : incrémental, pagination par curseur, backoff, rate limiting.' },
      { id: 'netsuite', name: 'NetSuite', route: 'python', note: 'Un connecteur Airbyte de 22 h remplacé par un script SuiteQL OAuth 1.0a qui tourne en quelques minutes.' },
      { id: 'skeepers', name: 'Skeepers', route: 'python', note: 'Chargement par lots, reprise sur erreur, token JWT automatique et déduplication par MERGE.' },
      { id: 'sfmc', name: 'Salesforce MC', route: 'python', note: 'Pagination, watermark J-1, au choix en full refresh ou en incrémental.' },
      { id: 'shippingbo', name: 'Shippingbo', route: 'python', note: 'Lots de 10 000 lignes, respect du rate limit, exécution sur Cloud Run avec Pub/Sub.' },
      { id: 'files', name: 'Bases et fichiers', route: 'other', note: 'Les flux qui ne passent ni par Airbyte ni par un script Python arrivent par Datastream et SFTP.' },
    ],
  },
  results: {
    title: 'Résultats mesurés',
    gainsTitle: 'Ce qui est devenu plus rapide',
    scaleTitle: 'Ce que je fais tourner',
    gains: [
      { what: 'Synchronisation NetSuite', before: '22 h', after: 'quelques minutes', where: 'Digital Forge' },
      { what: 'Mise à jour de la matrice MITRE ATT&CK', before: 'plusieurs heures', after: 'moins de 5 min', where: 'I-TRACING' },
      { what: 'Référentiel de couverture EDR', before: 'plusieurs heures', after: 'quelques minutes', where: 'I-TRACING' },
      { what: 'Appels API vers Chronicle SOAR', after: 'environ 90 % en moins', where: 'I-TRACING' },
    ],
    scale: [
      { value: '40+', label: 'sources maintenues sur Airbyte, hors flux Python, SFTP et Datastream' },
      { value: '12', label: 'connecteurs Airbyte développés en Low-code CDK' },
      { value: '86 000', label: 'lignes produit collectées pour une marque de mode premium' },
      { value: '164', label: 'tests unitaires sur le moteur de scoring de leads' },
      { value: '~100 M€', label: 'de dépenses fournisseurs analysées chez Carrefour' },
    ],
  },
  experience: {
    title: 'Expérience',
    careerLabel: 'Progression du parcours',
    stackLabel: 'Stack :',
    career: [
      { id: 'carrefour', company: 'Carrefour', years: '2022 à 2024', verb: 'automatiser' },
      { id: 'i-tracing', company: 'I-TRACING', years: '2025', verb: 'industrialiser' },
      { id: 'digital-forge', company: 'Digital Forge', years: 'depuis déc. 2025' },
    ],
    jobs: [
      {
        id: 'digital-forge',
        company: 'Digital Forge',
        role: 'GCP Data Engineer',
        context: 'Agence de conseil data, multi-clients',
        dates: 'Déc. 2025 à aujourd’hui',
        summary:
          "Ingestion Airbyte vers GCP et ELT BigQuery pour des clients du retail, de l'e-commerce, de la logistique et du bien-être. Je développe les connecteurs, je charge les données brutes, je les transforme avec Dataform et je restitue les datamarts dans une BI développée en interne.",
        groups: [
          {
            title: 'Ingestion ELT et connecteurs',
            items: [
              "Plus de 40 sources maintenues sur Airbyte self-hosted (VM GCP) vers BigQuery, auxquelles s'ajoutent les flux Python, SFTP et Datastream.",
              '12 connecteurs custom en Low-code CDK : incrémental, pagination par curseur, backoff, rate limiting, partition routers, anonymisation.',
              'Optimisation de connecteurs officiels et résolution d’incidents de production (bug CDK v3, bulk operations Shopify, réplication PostgreSQL, synonymes Oracle).',
            ],
          },
          {
            title: "Scripts d'ingestion Python",
            items: [
              'NetSuite : connecteur Airbyte de 22 h remplacé par un script SuiteQL OAuth 1.0a en quelques minutes, avec CDC.',
              'Skeepers, Salesforce Marketing Cloud, Shippingbo : lots, reprise sur erreur, watermark incrémental, MERGE, Cloud Run et Pub/Sub.',
              'Socle commun : alerting Google Chat, conformité des schémas, monitoring de tous les scripts en production.',
            ],
          },
          {
            title: 'Transformation et modélisation',
            items: [
              'Template standard de workspace Dataform, versionné sur GitHub et réutilisé à chaque onboarding client.',
              'Pipeline KPI complet : lead time, cycle time, taux de retard, réouvertures.',
              'Administration BigQuery : CLONE, restauration Time Travel, nettoyage multi-régions.',
            ],
          },
          {
            title: 'Infrastructure et accès',
            items: [
              'Accès IAM automatisés en Terraform par groupes métier, comptes de service, rotation des clés.',
              'Module Terraform multi-clients (for_each) : VM relais, pare-feu, Cloud Run, déployés par GitHub Actions.',
              "Politique d'accès standard aux SI clients (whitelisting, SSH, VPN), validée par la direction.",
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
        context: 'Cybersécurité',
        dates: 'Févr. à déc. 2025',
        place: 'Courbevoie',
        groups: [
          {
            title: 'Architecture serverless EDR SentinelOne',
            items: [
              'Projet mené seul de bout en bout : GCS, Cloud Functions, BigQuery (raw, staging, analytics), Cloud Run.',
              'Déploiement Terraform, Jenkins et Ansible, avec branches GitHub develop et master.',
              'Référentiel unifié et historisé CMDB, AD, Ivanti, GCP et SentinelOne.',
              'Pipeline 100 % automatisé : mise à jour réduite de plusieurs heures à quelques minutes.',
            ],
          },
          {
            title: 'Pipeline Chronicle SOAR',
            items: [
              'Extraction API REST des alertes et incidents, filtrés par SysID ServiceNow avant enrichissement.',
              'Historisation incrémentale, métriques de backlog et de SLA exposées dans BigQuery.',
              "Environ 90 % d'appels API en moins ; plus de 10 000 alertes et 620 incidents historisés.",
            ],
          },
          {
            title: 'MITRE ATT&CK',
            items: [
              'Scraping et versionnage automatique de la matrice, jointure avec la politique de contrôles.',
              'Mise à jour passée de plusieurs heures manuelles à moins de 5 minutes.',
            ],
          },
          {
            title: 'Reporting RSSI',
            items: [
              'Radar 360° des intégrations SOC 2025 à 2028, retenu comme standard de gouvernance.',
              'Dashboard vulnérabilités : référentiels agrégés, EPSS et CVSS, délais de correction.',
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
        context: 'Grande distribution',
        dates: 'Sept. 2022 à sept. 2024',
        place: 'Massy',
        summary:
          "Ma transition vers la Data Engineering : j'ai construit les pipelines et les modèles qui alimentaient les dashboards achats, sur environ 100 M€ de dépenses fournisseurs analysées.",
        groups: [
          {
            title: 'Migration GCP et référentiel articles',
            items: [
              'Migration des tables et scripts SQL vers BigQuery : analyse, migration, tests de cohérence, contrôle qualité.',
              'KPIs du référentiel en SQL (fournisseurs, catalogues, articles sans image), recette avec les métiers.',
            ],
          },
          {
            title: 'Pipeline Python vers BigQuery',
            items: [
              'Rapports hebdomadaires Excel, Drive, script Python, BigQuery, en remplacement des extractions manuelles.',
              "Classification des projets d'innovation par retard ou avance pour le plan de charge.",
            ],
          },
          {
            title: 'Modélisation du risque fournisseurs',
            items: [
              'Dataset Altares, table de correspondance par clé unique, jointure avec les dépenses groupe.',
              'Référentiels et indicateurs de risque et de dépendance mis en production.',
            ],
          },
          {
            title: 'Pilotage et restitution',
            items: ['Dashboards Looker et Tableau, formation des acheteurs, animation des validations de KPIs.'],
          },
        ],
        stack:
          'SQL, BigQuery, GCS, Data Transfer, Python, Colab, Apps Script, Looker, Tableau, SAP Ariba, GitHub, Jira, Confluence',
      },
    ],
  },
  projects: {
    title: 'Projets livrés',
    lead: 'Produits et outils conçus chez Digital Forge en 2026.',
    showMore: 'Voir les {n} autres projets',
    showLess: 'Afficher moins de projets',
    items: [
      { name: 'Agent IA de dashboards', meta: 'Mai à août, concepteur principal', text: 'Agent IA text-to-SQL qui transforme un brief métier en dashboard React depuis BigQuery.', result: '83 tests, objectif de 2-3 jours à 2-3 heures' },
      { name: 'Plateforme BI SaaS', meta: 'Janv. à juil., full-stack et DevOps', text: 'BI SaaS maison : Supabase auto-hébergé, Terraform, CI/CD Workload Identity, filtres server-side.', result: 'Comparaisons N-1 et filtres en cascade' },
      { name: 'Leads Generator', meta: 'Août à sept., concepteur', text: 'De HubSpot à un cockpit de relance : Airbyte, BigQuery, Dataform et scoring explicable.', result: '164 tests unitaires' },
      { name: 'Qualification de distributeurs', meta: 'Août à sept., responsable ingestion', text: 'Collecte web hebdomadaire de catalogues pour une marque de mode premium, enrichissement SIRENE, Pappers et Google Places, résolution par SIREN.', result: '86 000 lignes, 69 métriques' },
      { name: 'Plateforme de qualification multi-marques', meta: 'Août à sept., concepteur', text: 'La même qualification généralisée à plusieurs marques, configurée par profil TOML.', result: 'Suite de tests en moins d’1 s' },
      { name: 'Machine SEO et GEO', meta: 'Avr. à sept., concepteur', text: 'Catalogue Shopify vers BigQuery, puis contenus LLM conformes à la charte, publiés en metaobjects.', result: 'Zéro fait produit inventé' },
      { name: 'Événements boutiques', meta: 'Déc. 2025 à août, concepteur', text: 'Application Streamlit sécurisée alimentant un modèle ML de prévision des ventes, infrastructure Terraform.' },
      { name: 'Monitoring Power BI', meta: 'Janv., développeur', text: 'Supervision des actualisations multi-clients via API REST et Azure AD, avec alerting planifié.' },
      { name: 'Prospection haut de gamme', meta: '2026, concepteur', text: 'Scraping du registre des entreprises et scoring pondéré par signaux client, en France et à l’international.', result: 'API Gouv, Pappers, INPI, Cloud Run' },
    ],
  },
  skills: {
    title: 'Ce que je peux prouver, et à quel niveau',
    filterLabel: 'Filtrer par niveau',
    all: 'Tout',
    count: '{n} compétences affichées',
    levels: {
      production: 'Livré et maintenu en production',
      project: 'Utilisé sur un projet pro ou perso',
      learning: 'En apprentissage',
    },
    groups: [
      { title: 'Data warehouse', items: [['BigQuery', 'production'], ['Partitionnement', 'production'], ['Clustering', 'production'], ['MERGE', 'production'], ['CLONE', 'production'], ['Time Travel, UNDROP', 'production'], ['Scripting SQL', 'production'], ['INFORMATION_SCHEMA', 'production']] },
      { title: 'Ingestion et ELT', items: [['Airbyte OSS self-hosted', 'production'], ['Low-code CDK YAML', 'production'], ['Datastream', 'production'], ['Data Transfers', 'production'], ['SFTP', 'production'], ['Python, Colab Enterprise', 'production']] },
      { title: 'Transformation', items: [['Dataform SQLX', 'production'], ['raw, staging, entities, datamarts', 'production'], ['Tables de faits', 'production'], ['KPI métiers', 'production']] },
      { title: 'Cloud GCP', items: [['Compute Engine', 'production'], ['Cloud Run', 'production'], ['Cloud Functions', 'production'], ['GCS', 'production'], ['Pub/Sub', 'production'], ['Cloud SQL', 'production'], ['Scheduler', 'production'], ['Secret Manager', 'production'], ['Artifact Registry', 'production'], ['IAM', 'production'], ['Audit Logs', 'production']] },
      { title: 'IaC et CI/CD', items: [['Terraform multi-clients', 'production'], ['GitHub Actions', 'production'], ['Workload Identity Federation', 'production'], ['Docker, Compose', 'production'], ['Jenkins', 'production'], ['Ansible', 'production']] },
      { title: 'Réseau et sécurité', items: [['VPN Fortinet', 'production'], ['Tunnels SSH', 'production'], ['socat, systemd', 'production'], ['Whitelisting IP', 'production'], ['Cloudflare Tunnel', 'production'], ['OAuth 1.0a et 2.0', 'production'], ['JWT', 'production'], ['Rotation de clés', 'production']] },
      { title: 'Langages', items: [['Python', 'production'], ['GoogleSQL', 'production'], ['Bash', 'production'], ['YAML, Jinja, TOML', 'production'], ['JavaScript', 'project'], ['TypeScript, React', 'project'], ['FastAPI', 'project']] },
      { title: 'Sources intégrées', items: [['Shopify GraphQL', 'production'], ['NetSuite SuiteQL', 'production'], ['SFMC', 'production'], ['Splio', 'production'], ['Skeepers', 'production'], ['Shippingbo', 'production'], ['WooCommerce', 'production'], ['HubSpot', 'production'], ['PostgreSQL', 'production'], ['MSSQL', 'production'], ['Oracle', 'production'], ['MySQL', 'production']] },
      { title: 'BI et restitution', items: [['Looker Studio', 'production'], ['Looker', 'production'], ['Power BI', 'production'], ['Tableau', 'production'], ['Metabase', 'production'], ['Apps Script', 'production']] },
      { title: 'IA générative et scraping', items: [['Claude API', 'project'], ['Text-to-SQL', 'project'], ['Claude Code, MCP', 'project'], ['Playwright', 'project'], ['httpx, BeautifulSoup', 'project'], ['pytest', 'project']] },
      { title: 'Écosystème hors GCP', items: [['Airflow', 'project'], ['Spark', 'project'], ['MongoDB', 'project'], ['Neo4j', 'project'], ['AWS', 'project'], ['Azure', 'project']], note: 'Souvent disponibles en version managée sur GCP (Composer, Dataproc).' },
      { title: 'Préparation PDE', items: [['Dataflow', 'learning'], ['Dataproc', 'learning'], ['Kafka', 'learning'], ['Kubernetes', 'learning']], note: 'Pratiqués pendant la préparation de la certification, projets perso prévus.' },
    ],
  },
  education: {
    title: 'Formation',
    items: [
      { term: 'Diplôme', lines: ["Ingénieur ESIGELEC, Rouen, 2021 à 2024", 'Big Data pour la transformation numérique'] },
      { term: 'Certification', lines: ['Google Cloud Professional Data Engineer', 'En préparation'] },
      { term: 'Langues', lines: ['Français natif', 'Anglais opérationnel, TOEIC 820', 'Espagnol débutant'] },
      { term: 'Méthodes', lines: ['Scrum, Kanban, CI/CD', 'Collaboration Dev, Sec et Data'] },
    ],
  },
  contact: {
    title: 'Discutons de votre plateforme data',
    text: 'Une offre, une mission, ou une intégration qui résiste ? Écrivez-moi, je réponds par e-mail.',
    availability: 'Ouvert à un poste en CDI, CDD ou freelance. Permis B.',
    copy: "Copier l'adresse",
    copied: 'Adresse copiée',
    copyFailed: 'Copie impossible, sélectionnez l’adresse',
  },
  footer: { rights: 'Tous droits réservés.', top: 'Retour en haut' },
  notFound: {
    title: 'Page introuvable',
    text: "Cette adresse ne correspond à aucune page du site.",
    back: "Revenir à l'accueil",
  },
};
