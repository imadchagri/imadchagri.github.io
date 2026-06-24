/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         PORTFOLIO CONFIG — THE ONLY FILE YOU EDIT           ║
 * ║  Every change here updates your entire website instantly.   ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * ── HOW TO COMMENT OUT A SECTION ───────────────────────────────
 *
 *  1. Single line  →  put  //  at the start:
 *       // hobbies: [...],
 *
 *  2. Multiple lines  →  wrap with  /* ... * /  (no space):
 *       /*
 *         hobbies: [...],
 *       * /
 *
 *  To bring it back: delete the  //  or  /* ... * /
 */

const CONFIG = {

  /* ── PERSONAL INFO ──────────────────────────────────────────
     EN = English text    FR = French text                      */
  name:   "Imad CHAGRI",
  avatar: "",        // URL to your photo, e.g. "https://i.imgur.com/abc.jpg"
  cvFile: "cv.pdf", // PDF filename in the same folder

  title: {
    en: "Smart Electrical Systems Engineer",
    fr: "Ingénieur en Management des Systèmes Électriques Intelligents",
  },
  subtitle: {
    en: "Electrical & Electronics Engineering",
    fr: "Ingénierie Électrique & Électronique",
  },
  bio: {
    en: `Fresh graduate in Electrical & Electronics Engineering, specialising in Smart Electrical Systems.
I've built hands-on experience through personal, academic projects and internships working on real-world
systems and problems. I bring technical rigour, a fast learning curve, and a genuine passion for the
infrastructure that powers the modern world.`,
    fr: `Ingénieur fraîchement diplômé en Électrique & Électronique, spécialisé en Systèmes Électriques Intelligents.
Mes stages et projets personnels et académiques m'ont permis de travailler sur des systèmes et des
problématiques réels. Je combine rigueur technique, rapidité d'apprentissage et une vraie passion pour
les infrastructures qui font tourner le monde moderne.`,
  },

  /* ── CONTACT ────────────────────────────────────────────── */
  contact: {
    email:    "chagriimad88@gmail.com",
    linkedin: "https://linkedin.com/in/imad-chagri",
    github:   "https://github.com/imadchagri",
    location: "Casablanca, Morocco",
  },

  /* ── SKILLS ─────────────────────────────────────────────── */
  skills: [
    {
      category: { en: "Electrical Engineering", fr: "Génie Électrique" },
      items: ["Power Systems", "Circuit Design", "PLC Programming", "Control Systems", "High Voltage Engineering"],
    },
    {
      category: { en: "Programming & Embedded", fr: "Programmation & Embarqué" },
      items: ["C/C++", "Python", "PIC", "Raspberry Pi", "Arduino", "ESP32/STM32", "FPGA"],
    },
    {
      category: { en: "Smart Systems & AI", fr: "Systèmes Intelligents & IA" },
      items: ["IoT Integration", "Machine Learning", "Edge AI", "Embedded Systems", "MCSA"],
    },
    {
      category: { en: "CAD & Simulation", fr: "CAO & Simulation" },
      items: ["MATLAB / Simulink", "Simscape", "Proteus", "Altium Designer"],
    },
    {
      category: { en: "Industrial Automation", fr: "Automatisme Industriel" },
      items: ["TIA Portal", "Model-Based Design"],
    },
    {
      category: { en: "Data & BI", fr: "Data & BI" },
      items: ["Power BI", "Hadoop", "Spark", "SQL / NoSQL", "Node-RED"],
    },
  ],

  /* ── CERTIFICATIONS ──────────────────────────────────────── */
  certifications: [
    {
      name:          { en: "Self-Driving Cars Specialization", fr: "Spécialisation Voitures Autonomes" },
      issuer:        "University of Toronto",
      year:          "2025",
      credentialUrl: "",
      badge:         "🚗",
    },
    {
      name:          { en: "IT Automation with Python Professional Certificate", fr: "Certificat Professionnel Automatisation IT avec Python" },
      issuer:        "Google",
      year:          "2025",
      credentialUrl: "",
      badge:         "🐍",
    },
    {
      name:          { en: "Cybersecurity Professional Certificate", fr: "Certificat Professionnel Cybersécurité" },
      issuer:        "Google",
      year:          "2025",
      credentialUrl: "",
      badge:         "🔐",
    },
    {
      name:          { en: "Ethical Hacking Professional Certificate", fr: "Certificat Professionnel Ethical Hacking" },
      issuer:        "IBM",
      year:          "2025",
      credentialUrl: "",
      badge:         "🛡️",
    },
    {
      name:          { en: "Project Management Professional Certificate", fr: "Certificat Professionnel Gestion de Projet" },
      issuer:        "Google",
      year:          "2025",
      credentialUrl: "",
      badge:         "📋",
    },
    {
      name:          { en: "HCIA-5G V2.0", fr: "HCIA-5G V2.0" },
      issuer:        "Huawei",
      year:          "2024",
      credentialUrl: "",
      badge:         "📡",
    },
    {
      name:          { en: "PCAP — Programming Essentials in Python", fr: "PCAP — Fondamentaux de la programmation Python" },
      issuer:        "Cisco Networking Academy",
      year:          "2023",
      credentialUrl: "",
      badge:         "🐍",
    },
    {
      name:          { en: "CLA — Programming Essentials in C", fr: "CLA — Fondamentaux de la programmation C" },
      issuer:        "Cisco Networking Academy",
      year:          "2023",
      credentialUrl: "",
      badge:         "⚙️",
    },
  ],

  /* ── LANGUAGES ──────────────────────────────────────────────
     level: "Native" / "Fluent" / "Professional" / "Intermediate" / "Beginner"
     flag: use a real emoji flag 🇲🇦 or short text like "Ar"              */
  languages: [
    {
      lang:  { en: "Arabic",   fr: "Arabe" },
      level: { en: "Native",   fr: "Natif" },
      flag:  "🇲🇦",
    },
    {
      lang:  { en: "French",   fr: "Français" },
      level: { en: "Fluent",   fr: "Courant" },
      flag:  "🇫🇷",
    },
    {
      lang:  { en: "English",  fr: "Anglais" },
      level: { en: "Fluent",   fr: "Courant" },
      flag:  "🇬🇧",
    },
  ],

  /* ── SOFT SKILLS ─────────────────────────────────────────── */
  softSkills: [
    { en: "Problem Solving",      fr: "Résolution de problèmes", icon: "🧠" },
    { en: "Team Collaboration",   fr: "Travail en équipe",       icon: "🤝" },
    { en: "Critical Thinking",    fr: "Pensée critique",         icon: "🔍" },
    { en: "Adaptability",         fr: "Adaptabilité",            icon: "⚡" },
    { en: "Fast Learner",         fr: "Apprentissage rapide",    icon: "🚀" },
    { en: "Punctuality",          fr: "Ponctualité",             icon: "⏱️" },
    { en: "Autonomy",             fr: "Autonomie",               icon: "🎯" },
  ],

  /* ── HOBBIES ─────────────────────────────────────────────── */
  hobbies: [
    { en: "Electronics Tinkering",     fr: "Tinkering électronique",  icon: "🔌" },
    { en: "3D Printing",               fr: "Impression 3D",           icon: "🖨️" },
    { en: "Robotics & Prototyping",    fr: "Robotique & Prototypage", icon: "🤖" },
    { en: "Volleyball",                fr: "Volleyball",              icon: "🏐" },
    { en: "Chess",                     fr: "Échecs",                  icon: "♟️" },
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────────
     NEW: add a "details" field (en + fr) for the clickable popup.
     Use bullet points with •  or write paragraphs — your choice.
     If no "details" field, the popup shows the description only.  */
  experience: [
    {
      role:    { en: "Railway Consultant Intern — Final Year Project", fr: "Stagiaire Consultant Ferroviaire — Projet de Fin d'Études" },
      company: "Akkodis",
      period:  "02/2026 — 08/2026",
      location: "Casablanca, Morocco",
      description: {
        en: "Development of an embedded Edge AI solution for intelligent non-intrusive diagnosis via motor current signature analysis (MCSA) for fault classification of S700K railway switches.",
        fr: "Développement d'une solution Edge AI embarquée pour le diagnostic intelligent non intrusif par analyse du courant moteur (MCSA) pour la classification des défauts des aiguillages ferroviaires type S700K.",
      },
      details: {
        en: `Development of an embedded Edge AI solution for intelligent non-intrusive diagnosis via motor current signature analysis (MCSA) for fault classification of S700K railway switches.

• Accidentology study and bibliographic review of railway switch failures
• Proposal of a physical model of the S700K DC railway actuator and six fault cases
• Simulation and generation of a synthetic labelled dataset
• Development of a supervised machine learning model achieving 97% final accuracy
• Design of a prototype maintenance dashboard for track switch maintenance centres`,
        fr: `Développement d'une solution Edge AI embarquée pour le diagnostic intelligent non intrusif par analyse du courant moteur (MCSA) pour la classification des défauts des aiguillages ferroviaires type S700K.

• Accidentologie et étude bibliographique des défauts d'aiguillages ferroviaires
• Proposition d'un modèle physique de l'actionneur ferroviaire type S700K DC et de six cas de défauts
• Simulation et génération d'une dataset synthétique étiquetée
• Développement d'un modèle de supervised machine learning avec une précision finale de 97%
• Élaboration d'un exemplaire de dashboard pour centre de maintenance des appareils de voie`,
      },
      tags: ["Edge AI", "MCSA", "Machine Learning", "MATLAB/Simulink", "Simscape", "Model-Based Design", "STM32H7", "Railway S700K", "Fault Diagnosis", "Predictive Maintenance"],
    },
    // ── Add more internships below using the same structure ──
    // {
    //   role:        { en: "...", fr: "..." },
    //   company:     "...",
    //   period:      "MM/YYYY — MM/YYYY",
    //   location:    "...",
    //   description: { en: "...", fr: "..." },
    //   details:     { en: `...`, fr: `...` },   // shown in popup
    //   tags: ["...", "..."],
    // },
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
  education: [
    {
      degree: { en: "Engineering Degree — Smart Electrical Systems Management", fr: "Diplôme d'Ingénieur — Management des Systèmes Électriques Intelligents" },
      school: "University Name",
      period: "2022 — 2025",
      note:   { en: "Final Year Project: Edge AI for Railway Switch Fault Diagnosis", fr: "Projet de Fin d'Études : Edge AI pour le diagnostic de défauts d'aiguillages ferroviaires" },
    },
    {
      degree: { en: "Preparatory Classes — Physics & Engineering Sciences (PSI)", fr: "Classes Préparatoires — Physique & Sciences de l'Ingénieur (PSI)" },
      school: "University Name",
      period: "2020 — 2022",
      note:   { en: "", fr: "" },
    },
  ],

  /* ── PROJECTS ────────────────────────────────────────────── */
  projects: [
    {
      title: "Smart Microgrid Controller",
      description: {
        en: "Autonomous energy management system for an off-grid microgrid. Achieved 40% reduction in diesel consumption.",
        fr: "Système de gestion d'énergie autonome pour un microréseau hors réseau. Réduction de 40% de la consommation diesel.",
      },
      details: {
        en: `Designed a full autonomous energy management system for an isolated microgrid combining solar panels, a battery bank, and a diesel generator backup.

The controller monitors real-time power flow, predicts load demand using historical data, and automatically switches between energy sources to minimise fuel consumption while maintaining stable voltage and frequency output.

Key achievements:
• 40% reduction in diesel consumption vs the previous manual system
• Stable voltage maintained within ±2% under all load conditions
• Remote SCADA monitoring dashboard for real-time visibility
• Embedded on a Raspberry Pi with a custom Python control loop`,
        fr: `Conception d'un système complet de gestion d'énergie autonome pour un microréseau isolé combinant panneaux solaires, un parc de batteries et un groupe électrogène de secours.

Le contrôleur surveille les flux d'énergie en temps réel, prédit la demande de charge et bascule automatiquement entre les sources d'énergie.

Réalisations clés :
• Réduction de 40% de la consommation de diesel vs le système manuel précédent
• Tension stable maintenue dans ±2% sous toutes les conditions de charge
• Tableau de bord de supervision SCADA à distance
• Embarqué sur Raspberry Pi avec une boucle de contrôle Python`,
      },
      tags:    ["Python", "Raspberry Pi", "Power Electronics", "SCADA", "Simulink"],
      link:    "",
      image:   "",
      gallery: [],
    },
    {
      title: "Industrial PLC Automation",
      description: {
        en: "Siemens S7 PLC control system for a packaging line with HMI touchscreen and remote SCADA monitoring.",
        fr: "Automate Siemens S7 pour une ligne d'emballage avec IHM et supervision SCADA à distance.",
      },
      details: {
        en: `Programmed and commissioned a Siemens S7-1200 PLC for an industrial packaging line producing up to 2,000 units/hour.

Technical highlights:
• Structured Text (ST) and Ladder Logic programming in TIA Portal
• OPC-UA integration for SCADA data exchange
• Automatic fault recovery sequences reducing manual intervention by 60%
• Full electrical schematic documentation in AutoCAD Electrical`,
        fr: `Programmation et mise en service d'un automate Siemens S7-1200 pour une ligne d'emballage industrielle.

Points techniques :
• Programmation en Texte Structuré (ST) et Ladder Logic dans TIA Portal
• Intégration OPC-UA pour l'échange de données SCADA
• Séquences de récupération automatique des défauts réduisant de 60% les interventions manuelles
• Documentation complète des schémas électriques sous AutoCAD Electrical`,
      },
      tags:    ["TIA Portal", "PLC", "SCADA", "Siemens S7"],
      link:    "",
      image:   "",
      gallery: [],
    },
    {
      title: "Smart Building EMS",
      description: {
        en: "IoT energy monitoring dashboard for a commercial building — 12 circuits tracked in real time.",
        fr: "Tableau de bord IoT de surveillance énergétique pour un bâtiment commercial — 12 circuits en temps réel.",
      },
      details: {
        en: `Designed and deployed an IoT-based energy monitoring system across a 3-floor commercial building, covering 12 circuits.

Current and voltage sensors feed data to an MQTT broker. A Node-RED dashboard provides real-time visualisation, anomaly detection, and automatic email alerts.

Results:
• 18% reduction in energy waste identified within the first month
• 3 automatic alerts in Q1 — all genuine anomalies
• Dashboard accessible from mobile and desktop
• Data logged to InfluxDB for historical trend analysis`,
        fr: `Conception et déploiement d'un système IoT de surveillance énergétique dans un immeuble de bureaux de 3 étages.

Des capteurs alimentent un broker MQTT. Un tableau de bord Node-RED fournit visualisation, détection d'anomalies et alertes automatiques.

Résultats :
• 18% de réduction des gaspillages identifiés le premier mois
• 3 alertes automatiques au T1 — toutes des anomalies réelles
• Tableau de bord accessible mobile et desktop
• Données stockées dans InfluxDB`,
      },
      tags:    ["IoT", "Node-RED", "MQTT", "Python", "InfluxDB"],
      link:    "",
      image:   "",
      gallery: [],
    },
  ],

  /* ── BLOG / ARTICLES ─────────────────────────────────────── */
  blog: [
    {
      title:   { en: "Understanding Smart Grid Architecture",          fr: "Comprendre l'Architecture des Réseaux Intelligents" },
      summary: { en: "A practical breakdown of how modern smart grids differ from traditional power distribution networks.", fr: "Une analyse pratique des différences entre les réseaux intelligents modernes et les réseaux traditionnels." },
      date:    { en: "March 2024", fr: "Mars 2024" },
      link:    "#",
      tag:     "Smart Grid",
    },
    {
      title:   { en: "Getting Started with MATLAB for Power Systems", fr: "Débuter avec MATLAB pour les Systèmes de Puissance" },
      summary: { en: "A beginner-friendly guide to simulating electrical circuits and power flows using MATLAB Simulink.", fr: "Un guide accessible pour simuler des circuits électriques avec MATLAB Simulink." },
      date:    { en: "January 2024", fr: "Janvier 2024" },
      link:    "#",
      tag:     "MATLAB",
    },
  ],

};
