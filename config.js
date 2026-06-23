/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         PORTFOLIO CONFIG — THE ONLY FILE YOU EDIT           ║
 * ║  Every change here updates your entire website instantly.   ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * HOW TO EDIT:
 *   • Text between quotes  →  "change this text"
 *   • Lists                →  add/remove items inside [ ]
 *   • Objects              →  add/remove blocks inside { }
 *   • Always keep commas at the end of each line/block
 *   • Save the file, reload your browser — done!
 */

const CONFIG = {

  /* ── PERSONAL INFO ──────────────────────────────────────────
     EN = English text    FR = French text
     Write both for every field that has a translation.        */
  name:     "Imad CHAGRI",
  avatar:   "",          // URL to your photo, e.g. "https://i.imgur.com/abc.jpg"
  cvFile:   "cv.pdf",   // put your CV PDF in the same folder

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
    phone:    "+212 653 801787",
    linkedin: "https://linkedin.com/in/imad-chagri",
    github:   "https://github.com/imadchagri",
    location: "Casablanca, Morocco",
  },

  /* ── SKILLS ─────────────────────────────────────────────── 
     Add/remove categories and items freely.
     category has en/fr, items are technical so no translation needed. */
  skills: [
    {
      category: { en: "Electrical Engineering", fr: "Génie Électrique" },
      items: ["Power Systems", "Circuit Design", "PLC Programming", "Control Systems", "High Voltage Engineering"],
    },
    {
      category: { en: "Smart Systems", fr: "Systèmes Intelligents" },
      items: ["IoT Integration", "SCADA", "Smart Grid", "Energy Management", "Embedded Systems"],
    },
    {
      category: { en: "Software & Tools", fr: "Logiciels & Outils" },
      items: ["MATLAB / Simulink", "AutoCAD Electrical", "Python", "KiCad", "LabVIEW"],
    },
    {
      category: { en: "Standards & Methods", fr: "Normes & Méthodes" },
      items: ["IEC 60364", "IEEE Standards", "Project Management", "Technical Documentation"],
    },
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  experience: [
    {
      role:        { en: "Electrical Systems Engineer",  fr: "Ingénieur Systèmes Électriques" },
      company:     "Company Name",
      period:      "2022 — Present",
      location:    "Lisbon, Portugal",
      description: {
        en: "Designed and commissioned smart electrical distribution systems for industrial clients. Led a team of 3 engineers on a €2M smart grid modernisation project.",
        fr: "Conception et mise en service de systèmes de distribution électrique intelligents pour des clients industriels. Dirigé une équipe de 3 ingénieurs sur un projet de modernisation de réseau intelligent de 2M€.",
      },
      tags: ["Smart Grid", "PLC", "AutoCAD"],
    },
    {
      role:        { en: "Junior Electrical Engineer", fr: "Ingénieur Électrique Junior" },
      company:     "Previous Company",
      period:      "2020 — 2022",
      location:    "Porto, Portugal",
      description: {
        en: "Developed control schematics and supported commissioning of industrial automation projects. Reduced system downtime by 30% through predictive maintenance protocols.",
        fr: "Développement de schémas de contrôle et soutien à la mise en service de projets d'automatisation industrielle. Réduction des temps d'arrêt de 30% grâce à des protocoles de maintenance prédictive.",
      },
      tags: ["Control Systems", "SCADA", "MATLAB"],
    },
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
  education: [
    {
      degree: { en: "MSc Smart Electrical Systems Engineering", fr: "Master Ingénierie des Systèmes Électriques Intelligents" },
      school: "University Name",
      period: "2018 — 2020",
      note:   { en: "Thesis: Optimisation of Energy Flow in Microgrids using Predictive Control", fr: "Thèse : Optimisation du flux d'énergie dans les microréseaux par contrôle prédictif" },
    },
    {
      degree: { en: "BSc Electrical & Electronics Engineering", fr: "Licence Génie Électrique & Électronique" },
      school: "University Name",
      period: "2015 — 2018",
      note:   { en: "First Class Honours", fr: "Mention Très Bien" },
    },
  ],

  /* ── PROJECTS ───────────────────────────────────────────── 
     Add as many as you like. Tags are displayed as badges.   */
  projects: [
    {
      title: "Smart Microgrid Controller",
      description: {
        en: "Designed an autonomous energy management system for an off-grid microgrid combining solar, battery storage, and diesel backup. Achieved 40% reduction in diesel consumption.",
        fr: "Conception d'un système de gestion d'énergie autonome pour un microréseau hors réseau combinant solaire, stockage par batterie et groupe électrogène. Réduction de 40% de la consommation de diesel.",
      },
      tags:  ["Embedded Systems", "Python", "Power Electronics"],
      link:  "",   // URL to GitHub repo or live demo (optional)
      image: "",   // URL to a project screenshot (optional)
    },
    {
      title: "Industrial PLC Automation",
      description: {
        en: "Programmed and commissioned a Siemens S7 PLC control system for a packaging line, integrating HMI touchscreens and remote SCADA monitoring.",
        fr: "Programmation et mise en service d'un automate Siemens S7 pour une ligne d'emballage, intégrant des écrans tactiles IHM et une supervision SCADA à distance.",
      },
      tags:  ["PLC", "SCADA", "Siemens S7"],
      link:  "",
      image: "",
    },
    {
      title: "Smart Building EMS",
      description: {
        en: "Built an IoT-based energy monitoring dashboard for a commercial building, tracking real-time consumption across 12 circuits and flagging anomalies automatically.",
        fr: "Développement d'un tableau de bord de surveillance énergétique IoT pour un bâtiment commercial, suivant la consommation en temps réel sur 12 circuits et signalant les anomalies automatiquement.",
      },
      tags:  ["IoT", "Dashboard", "Energy Management"],
      link:  "",
      image: "",
    },
  ],

  /* ── BLOG / ARTICLES ─────────────────────────────────────
     Add links to articles you've published (Medium, LinkedIn…) */
  blog: [
    {
      title:   { en: "Understanding Smart Grid Architecture",           fr: "Comprendre l'Architecture des Réseaux Intelligents" },
      summary: { en: "A practical breakdown of how modern smart grids differ from traditional power distribution networks.", fr: "Une analyse pratique des différences entre les réseaux intelligents modernes et les réseaux de distribution électrique traditionnels." },
      date:    { en: "March 2024", fr: "Mars 2024" },
      link:    "#",   // replace with your real article URL
      tag:     "Smart Grid",
    },
    {
      title:   { en: "Getting Started with MATLAB for Power Systems",  fr: "Débuter avec MATLAB pour les Systèmes de Puissance" },
      summary: { en: "A beginner-friendly guide to simulating electrical circuits and power flows using MATLAB Simulink.", fr: "Un guide accessible pour simuler des circuits électriques et des flux de puissance avec MATLAB Simulink." },
      date:    { en: "January 2024", fr: "Janvier 2024" },
      link:    "#",
      tag:     "MATLAB",
    },
  ],

};
