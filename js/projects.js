/**
 * Zakaria Hallaji — Portfolio Project Data
 * Contains comprehensive case study information for all featured projects.
 */

const PROJECTS = [
  {
    id: "mobibiz",
    number: "01",
    featured: true,
    title: "MobiBiz Maroc",
    category: "Mobile Application / Commercial Management",
    year: "2025 – 2026",
    tagline: "Mobile business management app for Moroccan SMEs, tracking products, sales, customers, and invoices.",
    description: "Application mobile native de gestion commerciale conçue pour les commerçants et PME marocaines. Elle centralise les opérations courantes: gestion des stocks, suivi des ventes, fiches clients, dépenses quotidiennes et génération de factures avec synchronisation API.",
    image: "assets/images/mobibiz.jpg",
    github: "https://github.com/ZakHallaji",
    technologies: [
      "Kotlin",
      "Android SDK",
      "XML Layouts",
      "Retrofit 2",
      "FastAPI",
      "SQLAlchemy",
      "MySQL",
      "Firebase Auth"
    ],
    architecture: "Android Native (MVVM + Retrofit) ──▶ REST API (FastAPI Python) ──▶ SQLAlchemy ORM ──▶ MySQL Database",
    problem: "Les petits commerçants et prestataires au Maroc gèrent souvent leurs ventes, stocks et créances clients sur papier ou via des outils bureautiques lourds inadaptés à une utilisation mobile sur le terrain.",
    solution: "Une application Android rapide, fluide et autonome avec mise en cache locale et synchronisation continue vers une API REST performante développée avec FastAPI et MySQL.",
    features: [
      {
        title: "Tableau de Bord Exécutif",
        desc: "Visualisation immédiate du chiffre d'affaires, des encaissements en dirhams (MAD), du panier moyen et des alertes de stock bas."
      },
      {
        title: "Catalogue Produits & Inventaire",
        desc: "Gestion complète des références, catégorisation, photos de produits, prix d'achat/vente et suivi en temps réel des quantités disponibles."
      },
      {
        title: "Point de Vente & Facturation",
        desc: "Enregistrement rapide des transactions, association client, calcul des remises et génération instantanée de factures numériques."
      },
      {
        title: "Gestion Clients & Créances",
        desc: "Répertoire clients avec historique d'achats, coordonnées de contact direct et suivi rigoureux des paiements en attente."
      },
      {
        title: "Suivi des Dépenses & Bénéfices",
        desc: "Catégorisation des charges d'exploitation pour dégager automatiquement le bénéfice net de l'activité."
      },
      {
        title: "Architecture Réseau Robuste",
        desc: "Client HTTP Retrofit optimisé avec gestion des erreurs réseau, sérialisation JSON et synchronisation sécurisée des données."
      }
    ],
    technicalHighlights: [
      "Architecture Android basée sur le patron MVVM avec découplage propre entre la couche UI et la couche de données.",
      "Consommation d'APIs REST asynchrones via Retrofit et Coroutines Kotlin pour garantir 60 FPS constants sans gel de l'UI.",
      "Backend léger et ultra-rapide sous FastAPI avec modélisation relationnelle rigoureuse via SQLAlchemy."
    ]
  },
  {
    id: "social-saas",
    number: "02",
    featured: false,
    title: "Social Media Manager SaaS",
    category: "SaaS Platform / Content Operations",
    year: "2025",
    tagline: "Centralized SaaS workspace for scheduling, previewing, and analyzing social media publications.",
    description: "Plateforme SaaS conçue pour simplifier la planification et l'organisation des contenus multi-plateformes pour les créateurs et agences digitales, avec tableau de bord unifié et calendrier éditorial dynamique.",
    image: "assets/images/saas-social.jpg",
    github: "https://github.com/ZakHallaji",
    technologies: [
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "RESTful API",
      "Relational Database",
      "OAuth Integration",
      "Chart.js"
    ],
    architecture: "Web Client (Vanilla SPA) ──▶ REST API Gateway ──▶ Task Scheduler & Queue ──▶ Database Store",
    problem: "Alterner entre plusieurs interfaces de réseaux sociaux consomme du temps et disperse le suivi des statistiques et des calendriers éditoriaux.",
    solution: "Un espace de travail web épuré permettant de rédiger, prévisualiser les publications selon les ratios de chaque réseau, et programmer les diffusions depuis un calendrier visuel interactif.",
    features: [
      {
        title: "Calendrier Éditorial Drag & Drop",
        desc: "Vue mensuelle et hebdomadaire interactive pour déplacer et organiser les publications par date et heure stratégique."
      },
      {
        title: "Prévisualisation Contextuelle",
        desc: "Moteur de rendu simulant fidèlement l'apparence des posts selon le format de chaque réseau social cible."
      },
      {
        title: "Analytiques d'Engagement",
        desc: "Courbes de performance visualisant les interactions, impressions et progression de l'audience."
      },
      {
        title: "Gestion des Médias",
        desc: "Bibliothèque de ressources visuelles avec pré-optimisation et recadrage des visuels."
      }
    ],
    technicalHighlights: [
      "Interface utilisateur réactive construite sans framework lourd pour une vitesse de chargement instantanée.",
      "Système modulaire d'appels API avec gestion fine des états de chargement et retours d'erreurs clairs."
    ]
  },
  {
    id: "pdf-platform",
    number: "03",
    featured: false,
    title: "PDF Update Platform",
    category: "SaaS / Web Document Processing",
    year: "2024 – 2025",
    tagline: "Fast web platform to reorganize, update, and manipulate PDF documents securely in-browser.",
    description: "Plateforme web permettant de modifier, combiner, diviser et gérer des documents PDF via une interface utilisateur ergonomique et rapide, avec traitement sécurisé côté serveur.",
    image: "assets/images/pdf-platform.jpg",
    github: "https://github.com/ZakHallaji",
    technologies: [
      "JavaScript (ES6+)",
      "Python",
      "PDF Processing Engine",
      "REST API",
      "Canvas API",
      "CSS Grid"
    ],
    architecture: "Web Frontend (Canvas Preview) ──▶ Python Microservice ──▶ PDF Engine (PyPDF / Ghostscript) ──▶ Clean Download Stream",
    problem: "La plupart des solutions de modification de PDF en ligne sont payantes, surchargées de publicités ou peu respectueuses de la confidentialité des fichiers d'entreprise.",
    solution: "Un outil web direct axé sur l'essentiel: glisser-déposer de fichiers, manipulation de pages avec prévisualisation Canvas haute fidélité, et traitement rapide via un moteur Python dédié.",
    features: [
      {
        title: "Réorganisation Visuelle des Pages",
        desc: "Tri, rotation et suppression de pages individuelles via des vignettes interactives générées à la volée."
      },
      {
        title: "Fusion & Découpage Rapide",
        desc: "Combinaison de multiples documents en un seul fichier ordonné ou extraction ciblée de plages de pages."
      },
      {
        title: "Confidentialité & Purge Automatique",
        desc: "Nettoyage automatique des documents sur le serveur immédiatement après téléchargement par l'utilisateur."
      },
      {
        title: "Aperçu Interactif en Temps Réel",
        desc: "Rendu fluide des documents grâce à l'API HTML5 Canvas sans dépendances tierces lourdes."
      }
    ],
    technicalHighlights: [
      "Pipeline de traitement Python optimisé gérant les flux binaires sans surcharge mémoire.",
      "Expérience utilisateur minimaliste axée sur la vitesse de traitement en moins de 3 clics."
    ]
  },
  {
    id: "ofppt-app",
    number: "04",
    featured: false,
    title: "OFPPT Mobile Student Portal",
    category: "Mobile Application / Academic Project",
    year: "2024",
    tagline: "Native Android application connecting students with academic schedules, course tracking, and campus notices.",
    description: "Application mobile Android native développée avec Kotlin et XML permettant aux stagiaires de consulter facilement leur emploi du temps, leurs notes, modules de formation et actualités académiques depuis leur smartphone.",
    image: "assets/images/ofppt-app.jpg",
    github: "https://github.com/ZakHallaji",
    technologies: [
      "Kotlin",
      "Android Studio",
      "XML Layouts",
      "HTTP Client",
      "SQLite / Room",
      "Material Components"
    ],
    architecture: "Android Activity/Fragment ──▶ ViewModel ──▶ Repository Pattern ──▶ Local SQLite Cache & HTTP Sync",
    problem: "L'accès aux emplois du temps et aux avis académiques depuis un navigateur mobile sur le portail institutionnel manquait de fluidité et de notifications pour les stagiaires.",
    solution: "Une application mobile native Android légère avec mise en cache hors-ligne (SQLite) pour permettre aux étudiants de vérifier leur emploi du temps même sans connexion Internet active.",
    features: [
      {
        title: "Consultation Emploi du Temps",
        desc: "Affichage hebdomadaire clair des cours, salles et formateurs avec repère de l'heure courante."
      },
      {
        title: "Suivi des Notes & Modules",
        desc: "Accès structuré aux évaluations continues, contrôles de fin de module et coefficients académiques."
      },
      {
        title: "Mode Hors-Ligne Intégré",
        desc: "Sauvegarde locale des dernières données synchronisées pour une disponibilité permanente dans les transports."
      },
      {
        title: "Actualités & Alertes Établissement",
        desc: "Flux d'informations centralisé pour les annonces importantes de la direction pédagogique."
      }
    ],
    technicalHighlights: [
      "Application stricte des directives Material Design Android adaptées aux petits et grands écrans.",
      "Gestion soignée du cycle de vie Android pour éviter les fuites mémoire et assurer une autonomie batterie optimale."
    ]
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS = PROJECTS;
}
