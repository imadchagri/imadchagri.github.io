const CONFIG = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  name:   "Imad CHAGRI",
  avatar: "aizen.jpg",
  cvFile: "CV_2026_IMAD_CHAGRI.pdf",

    /* ── SITE SETTINGS (safe to edit) ───────────────────────────
     palette:        "blue" | "indigo" | "emerald" | "amber" | "mono"
     theme:          "light" | "dark"
     lang:           "en" | "fr"
     heroBackground: an image URL or file path placed next to this file,
                     e.g. "hero.jpg". Leave "" for the elegant default.   */
  settings: {
    palette:        "indigo",
    theme:          "dark",
    lang:           "en",
    heroBackground: "Sousuke-Aizen-Wallpaper-8k.jpg",
    formEndpoint:   "https://formspree.io/f/xwvdlvna",
  },
  title: {
    en: "Smart Electrical Systems Engineer",
    fr: "Ingénieur en Management des Systèmes Électriques Intelligents",
  },
  subtitle: {
    en: "Electrical & Electronics Engineering",
    fr: "Ingénierie Électrique & Électronique",
  },
  bio: {
    en: `Graduate in Electrical & Electronics Engineering, specialising in Smart Electrical Systems.
I've built hands-on experience through personal, academic projects and internships working on real-world
systems and problems. I bring technical rigour, a fast learning curve, and a genuine passion for the
infrastructure that powers the modern world.`,
    fr: `Ingénieur diplômé en Électrique & Électronique, spécialisé en Systèmes Électriques Intelligents.
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
      category: { en: "IoT & Connectivity", fr: "Connectivité & IoT" },
      items: ["Node-RED"],
    },
    {
      category: { en: "CAD & Simulation", fr: "CAO & Simulation" },
      items: ["MATLAB / Simulink", "Simscape", "Proteus", "Altium Designer"],
    },
    {
      category: { en: "Industrial Automation", fr: "Automatisme Industriel" },
      items: ["TIA Portal"],
    },
    {
      category: { en: "Data & BI", fr: "Data & BI" },
      items: ["Power BI", "Hadoop", "Spark", "SQL / NoSQL"],
    },
  ],

  /* ── CERTIFICATIONS ──────────────────────────────────────── */
  certifications: [
    {
      name:          { en: "Self-Driving Cars Specialization", fr: "Spécialisation Voitures Autonomes" },
      issuer:        "University of Toronto",
      year:          "2025",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "IT Automation with Python Professional Certificate", fr: "Certificat Professionnel Automatisation IT avec Python" },
      issuer:        "Google",
      year:          "2025",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "Cybersecurity Professional Certificate", fr: "Certificat Professionnel Cybersécurité" },
      issuer:        "Google",
      year:          "2025",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "Ethical Hacking Professional Certificate", fr: "Certificat Professionnel Ethical Hacking" },
      issuer:        "IBM",
      year:          "2025",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "Project Management Professional Certificate", fr: "Certificat Professionnel Gestion de Projet" },
      issuer:        "Google",
      year:          "2025",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "HCIA-5G V2.0", fr: "HCIA-5G V2.0" },
      issuer:        "Huawei",
      year:          "2024",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "PCAP — Programming Essentials in Python", fr: "PCAP — Fondamentaux de la programmation Python" },
      issuer:        "Cisco Networking Academy",
      year:          "2023",
      credentialUrl: "",
      badge:         "",
    },
    {
      name:          { en: "CLA — Programming Essentials in C", fr: "CLA — Fondamentaux de la programmation C" },
      issuer:        "Cisco Networking Academy",
      year:          "2023",
      credentialUrl: "",
      badge:         "",
    },
  ],

  /* ── LANGUAGES ──────────────────────────────────────────────
     level: "Native" / "Fluent" / "Professional" / "Intermediate" / "Beginner"
     flag: use a real emoji flag 🇲🇦 or short text like "Ar"              */
  languages: [
    {
      lang:  { en: "Arabic",   fr: "Arabe" },
      level: { en: "Native",   fr: "Natif" },
      flag:  "Ar",
    },
    {
      lang:  { en: "French",   fr: "Français" },
      level: { en: "Fluent",   fr: "Courant" },
      flag:  "Fr",
    },
    {
      lang:  { en: "English",  fr: "Anglais" },
      level: { en: "Fluent",   fr: "Courant" },
      flag:  "En",
    },
  ],

  /* ── SOFT SKILLS ─────────────────────────────────────────── */
  softSkills: [
    { en: "Problem Solving",      fr: "Résolution de problèmes", icon: "" },
    { en: "Team Collaboration",   fr: "Travail en équipe",       icon: "" },
    { en: "Critical Thinking",    fr: "Pensée critique",         icon: "" },
    { en: "Adaptability",         fr: "Adaptabilité",            icon: "" },
    { en: "Fast Learner",         fr: "Apprentissage rapide",    icon: "" },
    { en: "Punctuality",          fr: "Ponctualité",             icon: "" },
    { en: "Autonomy",             fr: "Autonomie",               icon: "" },
  ],

  /* ── HOBBIES ─────────────────────────────────────────────── */
  hobbies: [
    { en: "Electronics Tinkering",     fr: "Tinkering électronique",  icon: "" },
    { en: "3D Printing",               fr: "Impression 3D",           icon: "" },
    { en: "Robotics & Prototyping",    fr: "Robotique & Prototypage", icon: "" },
    { en: "Volleyball",                fr: "Volleyball",              icon: "" },
    { en: "Chess",                     fr: "Échecs",                  icon: "" },
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
• Development of a supervised machine learning model achieving 96% final accuracy and 100% recall on critical faults
• Optimization of the machine learning model for deployment on an STM32H7 embedded platform
• Development of an interactive dashboard prototype for railway switch maintenance centers featuring real-time track layout visualization, 
switch position and health monitoring, fault detection and severity assessment, real-time alerts, decision-support recommendations, and maneuver/alert history tracking.`,
        fr: `Développement d'une solution Edge AI embarquée pour le diagnostic intelligent non intrusif par analyse du courant moteur (MCSA) pour la classification des défauts des aiguillages ferroviaires type S700K.

• Accidentologie et étude bibliographique des défauts d'aiguillages ferroviaires
• Proposition d'un modèle physique de l'actionneur ferroviaire type S700K DC et de six cas de défauts
• Simulation et génération d'une dataset synthétique étiquetée
• Développement d'un modèle de supervised machine learning avec une précision finale de 96% et un rappel de 100% pour les classes de défauts critiques
• Dimensionnement et optimisation du modèle pour un déploiement sur architecture embarquée STM32H7
• Élaboration d'un prototype de dashboard interactif pour centre de maintenance des appareils de voie affichant les plans de voie, 
état de position et états de santé des aiguillages en temps réel, détéction des défauts et leurs criticité, Alertes temps réel, Recommendations et aide à la décision et Historique de manœuvres et alertes `,
      },
      tags: ["Edge AI", "MCSA", "Machine Learning", "MATLAB/Simulink", "Simscape", "Model-Based Design", "STM32H7", "Railway S700K", "Fault Diagnosis", "Predictive Maintenance"],
    },
  {
  role:    { en: "Automotive Systems Engineering Intern", fr: "Stagiaire Ingénieur Systèmes Automobiles" },
  company: "Capgemini Engineering",   // ← replace with the real company
  period:  "07/2025 — 09/2025",   // ← replace with real dates
  location: "Casablanca, Morocco",       // ← replace with real location
  description: {
    en: "Technical study and documentation of embedded chassis sensors and Electric Power Steering (EPS) systems — contributing to the validation and integration of safety-critical automotive subsystems.",
    fr: "Étude et documentation technique des capteurs embarqués du châssis automobile et du système de Direction Assistée Électrique (DAE) — contribution à la validation et l'intégration de sous-systèmes automobiles critiques.",
  },
  details: {
    en: `Technical study and documentation of embedded automotive systems, focusing on chassis-integrated sensors and Electric Power Steering (EPS) — two safety-critical subsystems at the core of modern vehicle dynamics and driver assistance.

Chassis Sensors — Technical Study & Documentation:
• Reviewed and documented the architecture and operating principles of chassis-embedded sensors (ABS wheel speed sensors, ride height sensors, accelerometers, gyroscopes)
• Analysed signal conditioning chains and communication interfaces (CAN bus, LIN bus)
• Produced structured technical datasheets and integration documentation for use by the engineering team

Electric Power Steering (EPS) — Technical Study & Documentation:
• Studied the functional architecture of the EPS system including torque sensors, ECU control logic, and brushless DC motor actuation
• Documented the control strategy and failure modes (FMEA-oriented analysis)
• Benchmarked EPS specifications against international automotive standards (ISO 26262 functional safety awareness)
• Contributed to the technical documentation library used for system validation`,
    fr: `Étude et documentation technique des systèmes automobiles embarqués, axée sur les capteurs intégrés au châssis et la Direction Assistée Électrique (DAE) — deux sous-systèmes critiques au cœur de la dynamique véhicule et des aides à la conduite.

Capteurs du châssis — Étude & Documentation technique :
• Analyse et documentation de l'architecture et des principes de fonctionnement des capteurs embarqués au châssis (capteurs de vitesse ABS, capteurs de hauteur de caisse, accéléromètres, gyroscopes)
• Analyse des chaînes de conditionnement de signal et des interfaces de communication (bus CAN, bus LIN)
• Production de fiches techniques structurées et de documentation d'intégration à destination des équipes ingénierie

Direction Assistée Électrique (DAE) — Étude & Documentation technique :
• Étude de l'architecture fonctionnelle du système DAE : capteur de couple, logique de contrôle ECU et actionnement moteur BLDC
• Documentation de la stratégie de contrôle et des modes de défaillance (analyse orientée AMDEC)
• Benchmark des spécifications DAE par rapport aux normes automobiles internationales (sensibilisation ISO 26262 sécurité fonctionnelle)
• Contribution à la bibliothèque de documentation technique utilisée pour la validation système`,
  },
  tags: ["Automotive Systems", "Chassis Sensors", "EPS / DAE", "CAN Bus", "FMEA", "ISO 26262", "Technical Documentation", "ECU", "BLDC Motor"],
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
      school: "Ecole Nationale Superieure d'Arts et Métiers - Casablanca",
      period: "2023 — 2026",
      //note:   { en: "Final Year Project: Edge AI for Railway Switch Fault Diagnosis", fr: "Projet de Fin d'Études : Edge AI pour le diagnostic de défauts d'aiguillages ferroviaires" },
    },
    {
      degree: { en: "Integrated Preparatory Classes", fr: "Classes Préparatoires Integrés" },
      school: "Ecole Nationale Superieure d'Arts et Métiers - Casablanca",
      period: "2020 — 2023",
      //note:   { en: "", fr: "" },
    },
    {
      degree: { en: "International Baccalaureat degree - Physics and science", fr: "Baccalaureat International option français (BIOF) - Physique-chimie " },
      school: "Lycée Moukhtar Soussi - Casablanca",
      period: "2019 — 2020",
      //note:   { en: "", fr: "" },
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
  {
  title: "CowWatch — Intelligent Livestock Monitoring",
  description: {
    en: "Edge AI system on Raspberry Pi that detects, tracks and monitors dairy cows in real time — measuring feeding, resting and movement routines and generating daily health alerts.",
    fr: "Système Edge AI sur Raspberry Pi qui détecte, suit et surveille des vaches laitières en temps réel — mesure des routines d'alimentation, de repos et de mouvement avec génération d'alertes santé quotidiennes.",
  },
  details: {
    en: `End-to-end computer vision pipeline deployed on a Raspberry Pi for intelligent, non-intrusive livestock monitoring in a farm environment.

The system runs YOLOv8 for real-time cow detection and ByteTrack for multi-object tracking across video frames, allowing each individual animal to be followed continuously without physical tags.

Key features:
- Real-time detection and tracking of multiple cows simultaneously using YOLOv8 + ByteTrack
- Behavioural routine analysis: feeding time, resting duration, movement patterns — all logged per animal
- Automated daily health alert generation based on deviation from individual baseline behaviour
- Fully embedded Edge AI pipeline — no cloud dependency, low latency, runs on Raspberry Pi 4
- Data pipeline built with NumPy and Pandas for per-animal time-series behaviour logging
- scikit-learn anomaly detection layer for flagging abnormal behavioural patterns

Impact: Enables early detection of health issues (lameness, illness, estrus) before visible symptoms appear — reducing veterinary costs and improving herd welfare.`,
    fr: `Pipeline de vision par ordinateur de bout en bout déployé sur Raspberry Pi pour la surveillance intelligente et non intrusive du bétail en environnement agricole.

Le système utilise YOLOv8 pour la détection en temps réel et ByteTrack pour le suivi multi-objets sur les trames vidéo, permettant de suivre chaque animal individuellement sans étiquette physique.

Fonctionnalités clés :
- Détection et suivi en temps réel de plusieurs vaches simultanément avec YOLOv8 + ByteTrack
- Analyse des routines comportementales : temps d'alimentation, durée de repos, patterns de mouvement — journalisés par animal
- Génération automatique d'alertes santé quotidiennes basées sur les écarts par rapport au comportement individuel de référence
- Pipeline Edge AI entièrement embarqué — sans dépendance cloud, faible latence, fonctionne sur Raspberry Pi 4
- Pipeline de données construit avec NumPy et Pandas pour la journalisation comportementale par animal en séries temporelles
- Couche de détection d'anomalies scikit-learn pour signaler les comportements anormaux

Impact : Permet la détection précoce de problèmes de santé (boiterie, maladie, chaleurs) avant l'apparition de symptômes visibles — réduisant les coûts vétérinaires et améliorant le bien-être du troupeau.`,
  },
  tags: ["Edge AI", "Computer Vision", "YOLOv8", "ByteTrack", "Raspberry Pi", "Python", "OpenCV", "scikit-learn", "Livestock Tech"],
  // link: "https://github.com/imadchagri/cowwatch",  // ← uncomment and paste your repo URL when ready
  image:   "",
  gallery: [],
},
{
  title: "Indoor Positioning System — Real-Time Asset Tracking",
  description: {
    en: "Real-time indoor localisation system using ESP32 and Wi-Fi RSSI for logistics and mobile equipment tracking inside industrial facilities.",
    fr: "Système de localisation intérieure en temps réel basé sur ESP32 et RSSI Wi-Fi pour la logistique et le suivi d'équipements mobiles en environnement industriel.",
  },
  details: {
    en: `Custom-built real-time location system (RTLS) designed for GPS-denied industrial indoor environments where standard satellite positioning is unavailable.

Architecture:
- Multiple ESP32 anchor nodes deployed at fixed known positions throughout the facility
- Mobile ESP32 tags attached to equipment broadcast their identity via ESP-NOW protocol
- RSSI (Received Signal Strength Indicator) measurements from multiple anchors feed a trilateration algorithm
- Raspberry Pi edge node aggregates anchor data, runs the positioning computation and serves a live visualisation dashboard

Technical highlights:
- ESP-NOW broadcast protocol chosen for its low-latency, connectionless communication — no Wi-Fi router dependency
- Trilateration algorithm implemented in Python for real-time XY position estimation
- Live floor-plan visualisation with matplotlib showing equipment positions updated in real time
- pyserial interface between Raspberry Pi and ESP32 anchor network
- System tested with positioning accuracy of ±1–2 metres in a multi-room environment

Applications: Tool tracking, forklift monitoring, worker safety zones, equipment utilisation analysis in smart factories.`,
    fr: `Système de localisation en temps réel (RTLS) conçu pour les environnements industriels intérieurs sans GPS où le positionnement satellitaire est indisponible.

Architecture :
- Plusieurs nœuds ancres ESP32 déployés à des positions fixes connues dans l'installation
- Les tags ESP32 mobiles fixés aux équipements diffusent leur identité via le protocole ESP-NOW
- Les mesures RSSI de plusieurs ancres alimentent un algorithme de trilatération
- Un nœud edge Raspberry Pi agrège les données des ancres, effectue le calcul de positionnement et sert un tableau de bord de visualisation en direct

Points techniques :
- Protocole broadcast ESP-NOW choisi pour sa communication sans connexion et à faible latence — sans dépendance à un routeur Wi-Fi
- Algorithme de trilatération implémenté en Python pour l'estimation de position XY en temps réel
- Visualisation de plan d'étage en direct avec matplotlib affichant les positions des équipements en temps réel
- Interface pyserial entre le Raspberry Pi et le réseau d'ancres ESP32
- Système testé avec une précision de positionnement de ±1–2 mètres en environnement multi-pièces

Applications : Suivi d'outillage, surveillance de chariots élévateurs, zones de sécurité opérateurs, analyse d'utilisation des équipements en usines intelligentes.`,
  },
  tags: ["ESP32", "RTLS", "ESP-NOW", "Wi-Fi RSSI", "Trilateration", "Raspberry Pi", "Python", "C/C++", "IoT", "Smart Factory"],
  // link: "https://github.com/imadchagri/indoor-positioning",  // ← uncomment when ready
  image:   "",
  gallery: [],
},
{
  title: "WaterMonitor — Smart Water Resource Management",
  description: {
    en: "Connected IoT device for real-time water flow monitoring with cloud data logging and remote access from smartphone or PC.",
    fr: "Appareil IoT connecté pour la surveillance en temps réel du débit d'eau avec sauvegarde cloud et accès à distance depuis smartphone ou PC.",
  },
  details: {
    en: `End-to-end IoT solution for water consumption monitoring — combining embedded sensing, cloud data persistence and remote access in a single low-cost device.

Hardware & sensing:
- ESP32 microcontroller as the core compute and connectivity unit
- YF-S201 Hall-effect flow sensor for real-time volumetric flow rate measurement (pulse counting method)
- Flow rate computed from pulse frequency: Q (L/min) = Pulse frequency / 7.5

Software & connectivity:
- Embedded firmware in C++ (Arduino framework) handling sensor reading, WiFi connection and Firebase push
- Firebase Realtime Database used for automatic timestamped cloud data logging — no data loss on connectivity interruption
- Remote dashboard accessible from any browser (smartphone or PC) for live and historical flow visualisation
- Threshold-based alert system: push notification triggered when flow exceeds configurable limits (leak detection)

Use cases: Residential water usage tracking, irrigation monitoring, industrial fluid consumption auditing, early leak detection.`,
    fr: `Solution IoT de bout en bout pour la surveillance de la consommation d'eau — combinant capteur embarqué, persistance cloud et accès à distance dans un appareil à faible coût.

Matériel & capteur :
- Microcontrôleur ESP32 comme unité de calcul et connectivité centrale
- Capteur de débit à effet Hall YF-S201 pour la mesure volumétrique en temps réel (méthode de comptage d'impulsions)
- Débit calculé à partir de la fréquence d'impulsions : Q (L/min) = Fréquence d'impulsions / 7,5

Logiciel & connectivité :
- Firmware embarqué en C++ (framework Arduino) gérant la lecture capteur, la connexion WiFi et l'envoi Firebase
- Firebase Realtime Database pour la journalisation cloud automatique horodatée — sans perte de données en cas d'interruption
- Tableau de bord distant accessible depuis n'importe quel navigateur (smartphone ou PC) pour la visualisation en direct et historique
- Système d'alertes par seuil : notification déclenchée lorsque le débit dépasse des limites configurables (détection de fuites)

Cas d'usage : Suivi de consommation résidentielle, surveillance d'irrigation, audit de consommation de fluides industriels, détection précoce de fuites.`,
  },
  tags: ["ESP32", "IoT", "YF-S201", "Firebase", "C++", "Arduino", "Cloud", "Real-Time", "Water Management"],
  // link: "https://github.com/imadchagri/watermonitor",  // ← uncomment when ready
  image:   "",
  gallery: [],
},
{
  title: "Educational Path Optimisation — Academic Journey Planner",
  description: {
    en: "Operations research project to optimise the academic journey of engineering students by identifying the most beneficial course and activity combinations using graph theory.",
    fr: "Projet de recherche opérationnelle visant à optimiser le parcours académique des élèves ingénieurs en identifiant les combinaisons de cours et d'activités les plus bénéfiques via la théorie des graphes.",
  },
  details: {
    en: `Applied operations research and graph theory to solve a real-world academic planning problem: given a set of courses, prerequisites, and activity combinations, find the optimal path through an engineering curriculum that maximises learning value and career readiness.

Problem modelling:
- Curriculum modelled as a Directed Acyclic Graph (DAG) where nodes are courses/activities and edges represent prerequisite relationships or scheduling constraints
- Edge weights encode the combined value of a course pair (skill synergy, career relevance, difficulty balance)
- Objective: find the path through the graph that maximises cumulative weight subject to time and credit constraints

Algorithms & methods:
- Dijkstra's algorithm and dynamic programming applied for shortest/optimal path computation
- Bellman-Ford variant explored for handling negative weight edges (penalising redundant skill overlap)
- Sensitivity analysis performed to test robustness of the optimal path under different weighting schemes
- NetworkX used for graph construction, manipulation and algorithm benchmarking
- Results visualised with Matplotlib: interactive DAG plots, path highlighting, weight heatmaps

Outcomes:
- Identified 3 optimal academic tracks for different career goals (research, industry, entrepreneurship)
- Demonstrated that standard sequential scheduling left 18% of skill-building potential unused
- Documented as a full technical report with algorithmic complexity analysis`,
    fr: `Application de la recherche opérationnelle et de la théorie des graphes pour résoudre un problème réel de planification académique : étant donné un ensemble de cours, de prérequis et de combinaisons d'activités, trouver le chemin optimal à travers un programme d'ingénierie maximisant la valeur d'apprentissage et la préparation professionnelle.

Modélisation du problème :
- Programme modélisé comme un Graphe Orienté Acyclique (DAG) où les nœuds sont des cours/activités et les arêtes représentent les relations de prérequis ou contraintes de planification
- Les poids des arêtes encodent la valeur combinée d'une paire de cours (synergie de compétences, pertinence professionnelle, équilibre de difficulté)
- Objectif : trouver le chemin dans le graphe qui maximise le poids cumulé sous contraintes de temps et de crédits

Algorithmes & méthodes :
- Algorithme de Dijkstra et programmation dynamique appliqués pour le calcul de chemin optimal
- Variante Bellman-Ford explorée pour les arêtes à poids négatif (pénalisant la redondance de compétences)
- Analyse de sensibilité pour tester la robustesse du chemin optimal selon différents schémas de pondération
- NetworkX pour la construction, manipulation du graphe et benchmark des algorithmes
- Résultats visualisés avec Matplotlib : graphes DAG interactifs, mise en valeur des chemins, heatmaps de poids

Résultats :
- Identification de 3 parcours académiques optimaux pour différents objectifs (recherche, industrie, entrepreneuriat)
- Démonstration que la planification séquentielle standard laissait 18% du potentiel de développement de compétences inexploité
- Documenté sous forme de rapport technique complet avec analyse de complexité algorithmique`,
  },
  tags: ["Python", "NetworkX", "Graph Theory", "Operations Research", "DAG", "Dijkstra", "NumPy", "Matplotlib", "Optimisation"],
  // link: "https://github.com/imadchagri/educational-path-optimisation",  // ← uncomment when ready
  image:   "",
  gallery: [],
},
  ],

  /* ── BLOG / ARTICLES ─────────────────────────────────────── */
  /*blog: [
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
  ],*/

};
