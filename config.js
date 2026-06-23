/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         PORTFOLIO CONFIG — THE ONLY FILE YOU EDIT           ║
 * ║  Every change here updates your entire website instantly.   ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * ── HOW TO COMMENT OUT A SECTION ───────────────────────────────
 *
 *  In JavaScript, there are 2 ways to "hide" something:
 *
 *  1. Single line — put  //  at the start of the line:
 *       // hobbies: [...],        ← this whole line is ignored
 *
 *  2. Multiple lines — wrap with  slash-star  ...  star-slash:
 *       /*
 *         hobbies: [...],         ← everything between is ignored
 *       * /                       ← (no space in real code)
 *
 *  To bring it back: just delete the  //  or the  /* ... * /
 *
 * ── HOW TO HIDE A WHOLE SECTION ────────────────────────────────
 *  Find the section below (e.g. hobbies) and add // before it:
 *
 *    // hobbies: [
 *    //   { en: "...", fr: "..." },
 *    // ],
 *
 *  Save → reload. The section disappears from your site.
 */

const CONFIG = {

  /* ── PERSONAL INFO ──────────────────────────────────────────
     EN = English text    FR = French text                      */
  name:   "Imad CHAGRI",
  avatar: "",         // URL to your photo, e.g. "https://i.imgur.com/abc.jpg"
  cvFile: "cv.pdf",  // PDF filename in the same folder

  title: {
    en: "Smart Electrical Systems Engineer",
    fr: "Ingénieur en Management des systèmes électriques intelligents",
  },
  subtitle: {
    en: "Electrical and electronics engineering",
    fr: "Ingénierie électrique et électronique",
  },
  bio: {
    en: `Fresh graduate in Electrical & Electronics Engineering, specialising in Smart Electrical Systems.
    I've built hands-on experience through both personal and academic engineering projects and internships where I worked on real world systems and problems.
     I bring technical rigour, a fast learning curve, and a genuine passion for the infrastructure that powers the modern world.`,
    fr: `Ingénieur fraîchement diplômé en Électrique & Électronique, spécialisé en Systèmes Électriques Intelligents.
    Mes stages et projets personnelles et académiques m'ont permis de travailler sur des systèmes et des problèmatiques réels.
    Je combine rigueur technique, rapidité d'apprentissage et une vraie passion pour les infrastructures qui font tourner le monde moderne.`,
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
    items: ["C/C++", "Python", "PIC", "RaspberryPI", "Arduino","ESP32/STM32","FPGA"],
    },
    {
      category: { en: "Smart Systems", fr: "Systèmes Intelligents" },
      items: ["IoT Integration", "Machine Learning", "Embedded Systems"],
    },
    {
      category: { en: "CAD & Simulation", fr: "CAO & Simulation" },
      items: ["MATLAB / Simulink", "Proteus", "Altium Designer"],
    },
    {
      category: { en: "Industrial Automation", fr: "Automation Industrielle" },
      items: ["TIA Portal"],
    },
    {
      category: { en: "IoT & Connectivity", fr: "Connectivité & IoT" },
      items: ["Node-RED"],
    },
    {
      category: { en: "Big Data, Data processing and BI", fr: "Big Data, Traitement de données et BI" },
      items: ["PowerBI", "Hadoop"  ,"Spark", "SQL/NoSQL"],
    },
    //{
     // category: { en: "Standards & Methods", fr: "Normes & Méthodes" },
     // items: ["IEC 60364", "IEEE Standards", "Project Management", "Technical Documentation"],
    //},
  ],

  /* ── CERTIFICATIONS ─────────────────────────────────────────
     issuer: the company (Cisco, Google, etc.)
     year: when you got it
     credentialUrl: link to verify it online (optional)
     badge: emoji or leave "" for the default icon              */
  certifications: [
    {
      name:          { en: "CCNA: Introduction to Networks", fr: "CCNA : Introduction aux Réseaux" },
      issuer:        "Cisco",
      year:          "2024",
      credentialUrl: "", // paste your credential URL here
      badge:         "",
    },
    {
      name:          { en: "Google IT Support Certificate", fr: "Certificat Assistance IT Google" },
      issuer:        "Google",
      year:          "2023",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "Fundamentals of Deep Learning", fr: "Fondamentaux du Deep Learning" },
      issuer:        "NVIDIA",
      year:          "2023",
      credentialUrl: "",
      badge:         "",
    },
    // To hide a certification, add // at the start of each line:
    // {
    //   name: { en: "...", fr: "..." },
    //   issuer: "...",
    //   year: "...",
    //   credentialUrl: "",
    //   badge: "",
    // },
  ],

  /* ── LANGUAGES ──────────────────────────────────────────────
     level options: "Native" / "Fluent" / "Professional" / "Intermediate" / "Beginner"
     (also works in French: "Natif" / "Courant" / "Professionnel" / "Intermédiaire" / "Débutant") */
  languages: [
   
    {
      lang:  { en: "English",    fr: "Anglais" },
      level: { en: "Fluent",     fr: "Courant" },
      flag:  "En",
    },
    {
      lang:  { en: "French",     fr: "Français" },
      level: { en: "Fluent", fr: "Courant" },
      flag:  "Fr",
    },
     {
      lang:  { en: "Arabic", fr: "Arabe" },
      level: { en: "Native",     fr: "Natif" },
      flag:  "Ar",
    },
    // Add more languages the same way ↑
  ],

  /* ── SOFT SKILLS ─────────────────────────────────────────── */
  softSkills: [
    { en: "Problem Solving",      fr: "Résolution de problèmes", icon: "" },
    { en: "Team Collaboration",   fr: "Travail en équipe",       icon: "" },
    { en: "Critical Thinking",    fr: "Pensée critique",         icon: "" },
    { en: "Adaptability",         fr: "Adaptabilité",            icon: "" },
    { en: "Fast Learning Ability",    fr: "Apprentissage rapide",     icon: "" },
    { en: "Punctuality",   fr: "Ponctualité",       icon: "" },
    { en: "Autonomy",   fr: "Autonomie",       icon: "" },
    // Add or remove soft skills freely ↑
  ],

  /* ── HOBBIES ────────────────────────────────────────────────
     To hide the entire hobbies section, comment out these lines:
     Change  hobbies: [  to  // hobbies: [  and so on.         */
  hobbies: [
    { en: "Electronics Tinkering", fr: "Tinkering électronique", icon: "" },
    { en: "3D Printing",           fr: "Impression 3D",            icon: "" },
    { en: "Robotics and prototyping",          fr: "Robotique et prototypage",                icon: "" },
    { en: "Volleyball",           fr: "Volleyball",             icon: "" },
    { en: "Chess",                 fr: "Échecs",                   icon: "" },
    // Add or remove hobbies freely ↑
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  experience: [
    {
      role:        { en: "Railway consultant Intern",  fr: "Stagiaire consultant ferroviaire" },
      company:     "Akkodis",
      period:      "2026 — 2026",
      location:    "Lisbon, Portugal",
      description: {
        en: "Assisted in the design and commissioning of industrial electrical systems. Worked on control schematics, PLC configurations, and on-site testing.",
        fr: "Participation à la conception et mise en service de systèmes électriques industriels. Travail sur les schémas de contrôle, la configuration d'automates et les tests sur site.",
      },
      tags: ["PLC", "AutoCAD", "Control Systems"],
    },
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
  education: [
    {
      degree: { en: "MSc Smart Electrical Systems Engineering", fr: "Master Ingénierie des Systèmes Électriques Intelligents" },
      school: "University Name",
      period: "2022 — 2024",
      note:   { en: "Thesis: Optimisation of Energy Flow in Microgrids using Predictive Control", fr: "Thèse : Optimisation du flux d'énergie dans les microréseaux par contrôle prédictif" },
    },
    {
      degree: { en: "BSc Electrical & Electronics Engineering", fr: "Licence Génie Électrique & Électronique" },
      school: "University Name",
      period: "2019 — 2022",
      note:   { en: "First Class Honours", fr: "Mention Très Bien" },
    },
  ],

  /* ── PROJECTS ───────────────────────────────────────────────
     NEW: each project can have a full details popup.
     details.en / details.fr = long description shown in the popup
     gallery = array of image URLs shown in the popup (optional)  */
  projects: [
    {
      title: "Smart Microgrid Controller",
      description: {
        en: "Autonomous energy management system for an off-grid microgrid. Achieved 40% reduction in diesel consumption.",
        fr: "Système de gestion d'énergie autonome pour un microréseau hors réseau. Réduction de 40% de la consommation diesel.",
      },
      details: {
        en: `This project involved designing a full autonomous energy management system for an isolated microgrid
combining solar panels, a battery bank, and a diesel generator backup.

The controller monitors real-time power flow, predicts load demand using historical data, and
automatically switches between energy sources to minimise fuel consumption while maintaining
stable voltage and frequency output.

Key achievements:
• 40% reduction in diesel consumption compared to the previous manual system
• Stable voltage maintained within ±2% under all load conditions
• Remote SCADA monitoring dashboard for real-time visibility
• Embedded on a Raspberry Pi with a custom Python control loop`,
        fr: `Ce projet consistait à concevoir un système complet de gestion d'énergie autonome pour un microréseau
isolé combinant panneaux solaires, un parc de batteries et un groupe électrogène de secours.

Le contrôleur surveille les flux d'énergie en temps réel, prédit la demande de charge à partir de données
historiques, et bascule automatiquement entre les sources d'énergie pour minimiser la consommation de
carburant tout en maintenant une tension et une fréquence stables.

Réalisations clés :
• Réduction de 40% de la consommation de diesel par rapport au système manuel précédent
• Tension stable maintenue dans ±2% sous toutes les conditions de charge
• Tableau de bord de supervision SCADA à distance
• Embarqué sur un Raspberry Pi avec une boucle de contrôle Python personnalisée`,
      },
      tags:    ["Embedded Systems", "Python", "Power Electronics", "SCADA"],
      link:    "",    // GitHub or live demo URL
      image:   "",   // main card image URL
      gallery: [],   // extra images shown in popup: ["url1", "url2"]
    },
    {
      title: "Industrial PLC Automation",
      description: {
        en: "Siemens S7 PLC control system for a packaging line with HMI and remote SCADA monitoring.",
        fr: "Automate Siemens S7 pour une ligne d'emballage avec IHM et supervision SCADA à distance.",
      },
      details: {
        en: `Programmed and commissioned a Siemens S7-1200 PLC for an industrial packaging line producing
up to 2,000 units per hour.

The system integrates a 12-inch Siemens HMI touchscreen for operator control, conveyor speed
regulation, fault detection and alarm management. A remote SCADA interface was also set up to
allow supervisors to monitor production in real time from the control room.

Technical highlights:
• Structured Text (ST) and Ladder Logic programming in TIA Portal
• OPC-UA integration for SCADA data exchange
• Automatic fault recovery sequences reducing manual intervention by 60%
• Full electrical schematic documentation in AutoCAD Electrical`,
        fr: `Programmation et mise en service d'un automate Siemens S7-1200 pour une ligne d'emballage
industrielle produisant jusqu'à 2 000 unités par heure.

Le système intègre un écran tactile IHM Siemens 12 pouces pour le contrôle opérateur, la régulation
de la vitesse des convoyeurs, la détection de défauts et la gestion des alarmes.

Points techniques :
• Programmation en Texte Structuré (ST) et Ladder Logic dans TIA Portal
• Intégration OPC-UA pour l'échange de données SCADA
• Séquences de récupération automatique des défauts réduisant de 60% les interventions manuelles
• Documentation complète des schémas électriques sous AutoCAD Electrical`,
      },
      tags:    ["PLC", "SCADA", "Siemens S7", "TIA Portal"],
      link:    "",
      image:   "",
      gallery: [],
    },
    {
      title: "Smart Building EMS",
      description: {
        en: "IoT energy monitoring dashboard for a commercial building — 12 circuits tracked in real time.",
        fr: "Tableau de bord IoT de surveillance énergétique pour un bâtiment commercial — 12 circuits suivis en temps réel.",
      },
      details: {
        en: `Designed and deployed an IoT-based energy monitoring system across a 3-floor commercial office
building, covering 12 electrical circuits including HVAC, lighting, and server room.

Current and voltage sensors were installed at each distribution board, feeding data to an MQTT
broker running on a local server. A Node-RED dashboard was built for real-time visualisation,
anomaly detection, and automatic email alerts when consumption exceeds thresholds.

Results:
• 18% reduction in energy waste identified within the first month
• Automatic alerts triggered 3 times in first quarter — all genuine anomalies
• Dashboard accessible from mobile and desktop
• Data logged to InfluxDB for historical trend analysis`,
        fr: `Conception et déploiement d'un système de surveillance énergétique IoT dans un immeuble de bureaux
commerciaux de 3 étages, couvrant 12 circuits électriques (CVC, éclairage, salle serveurs).

Des capteurs de courant et de tension ont été installés au niveau de chaque tableau de distribution,
alimentant un broker MQTT sur un serveur local. Un tableau de bord Node-RED a été développé pour la
visualisation en temps réel, la détection d'anomalies et les alertes email automatiques.

Résultats :
• 18% de réduction des gaspillages énergétiques identifiés le premier mois
• 3 alertes automatiques déclenchées au premier trimestre — toutes des anomalies réelles
• Tableau de bord accessible mobile et desktop
• Données stockées dans InfluxDB pour l'analyse des tendances historiques`,
      },
      tags:    ["IoT", "Node-RED", "MQTT", "Energy Management"],
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
