/* ============================================================
   app.js — reads CONFIG, handles i18n (EN/FR), dark/light,
             project modal, and builds all sections.
   You never need to edit this file.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HELPERS ─────────────────────────────────────────────── */
  const C = CONFIG;
  const $ = id => document.getElementById(id);
  const initials = name => name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  // t() extracts the right language from an {en, fr} object, or returns the string as-is
  const t = obj => (obj && typeof obj === 'object') ? (obj[lang] ?? obj.en ?? '') : (obj ?? '');

  function el(type, cls, html) {
    const e = document.createElement(type);
    if (cls)  e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  /* ── ICONS ───────────────────────────────────────────────── */
  const ICON = {
    location: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    email:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
    linkedin: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`,
    external: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  };

  /* ── LANGUAGE LEVEL → bar width ─────────────────────────── */
  const LEVEL_WIDTH = {
    native: '100%', natif: '100%',
    fluent: '88%',  courant: '88%',
    professional: '72%', professionnel: '72%',
    intermediate: '52%', intermédiaire: '52%',
    beginner: '28%', débutant: '28%',
  };
  const levelWidth = str => LEVEL_WIDTH[str.toLowerCase()] || '50%';

  /* ── UI STRINGS ──────────────────────────────────────────── */
  const UI = {
    en: {
      'nav.about':'About','nav.skills':'Skills','nav.experience':'Experience',
      'nav.projects':'Projects','nav.certifications':'Certifications',
      'nav.blog':'Articles','nav.contact':'Contact','nav.cv':'Download CV',
      'hero.eyebrow':'Engineering Portfolio','hero.cta1':'Get in touch','hero.cta2':'See my work',
      'skills.eyebrow':'Expertise','skills.title':'Skills & Technologies',
      'skills.languages':'Spoken Languages','skills.soft':'Soft Skills','skills.hobbies':'Hobbies & Interests',
      'exp.eyebrow':'Career','exp.title':'Experience & Education','exp.work':'Work Experience','exp.edu':'Education','exp.showMore':'Show more',
      'projects.eyebrow':'Work','projects.title':'Featured Projects','projects.view':'View project','projects.details':'Details →',
      'cert.eyebrow':'Credentials','cert.title':'Certifications','cert.verify':'Verify →',
      'blog.eyebrow':'Writing','blog.title':'Articles & Insights',
      'contact.eyebrow':"Let's Connect",'contact.title':'Get in Touch',
      'contact.heading':"Let's build something together",
      'contact.lead':"I'm open to engineering collaborations, consulting, and interesting opportunities. Send a message and I'll get back to you shortly.",
      'form.name':'Your Name','form.namePh':'Jane Smith','form.email':'Email','form.emailPh':'jane@example.com',
      'form.subject':'Subject','form.subjectPh':'Project proposal, collaboration…',
      'form.message':'Message','form.messagePh':'Tell me about your project or question…',
      'form.send':'Send Message','form.sending':'Sending…',
      'form.sent':"Message sent! I'll get back to you soon.",
      'form.error':"Something went wrong. Please try again or email me directly.",
      'footer.built':'Built with pure HTML · Hosted on GitHub Pages',
    },
    fr: {
      'nav.about':'À propos','nav.skills':'Compétences','nav.experience':'Expérience',
      'nav.projects':'Projets','nav.certifications':'Certifications',
      'nav.blog':'Articles','nav.contact':'Contact','nav.cv':'Télécharger CV',
      'hero.eyebrow':'Portfolio Ingénierie','hero.cta1':'Me contacter','hero.cta2':'Voir mes projets',
      'skills.eyebrow':'Expertise','skills.title':'Compétences & Technologies',
      'skills.languages':'Langues parlées','skills.soft':'Compétences humaines','skills.hobbies':'Loisirs & Intérêts',
      'exp.eyebrow':'Parcours','exp.title':'Expérience & Formation','exp.work':'Expérience Professionnelle','exp.edu':'Formation','exp.showMore':'Voir plus',
      'projects.eyebrow':'Réalisations','projects.title':'Projets Phares','projects.view':'Voir le projet','projects.details':'Détails →',
      'cert.eyebrow':'Accréditations','cert.title':'Certifications','cert.verify':'Vérifier →',
      'blog.eyebrow':'Rédaction','blog.title':'Articles & Réflexions',
      'contact.eyebrow':'Restons en contact','contact.title':'Me Contacter',
      'contact.heading':'Construisons quelque chose ensemble',
      'contact.lead':"Je suis ouvert aux collaborations, au conseil et aux opportunités intéressantes. Envoyez-moi un message et je vous répondrai rapidement.",
      'form.name':'Votre nom','form.namePh':'Jean Dupont','form.email':'Email','form.emailPh':'jean@exemple.com',
      'form.subject':'Sujet','form.subjectPh':'Proposition de projet, collaboration…',
      'form.message':'Message','form.messagePh':'Parlez-moi de votre projet ou question…',
      'form.send':'Envoyer le message','form.sending':'Envoi…',
      'form.sent':"Message envoyé ! Je vous répondrai rapidement.",
      'form.error':"Une erreur est survenue. Réessayez ou contactez-moi directement.",
      'footer.built':'Développé en HTML pur · Hébergé sur GitHub Pages',
    },
  };

  /* ── STATE ───────────────────────────────────────────────── */
  let lang  = localStorage.getItem('lang')  || 'en';
  let theme = localStorage.getItem('theme') || 'light';

  /* ── THEME ───────────────────────────────────────────────── */
  function applyTheme(th) {
    theme = th;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  /* ── STATIC i18n (data-i18n attributes) ──────────────────── */
  function applyLangStatic() {
    const dict = UI[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const k = node.getAttribute('data-i18n');
      if (dict[k] !== undefined) node.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(node => {
      const k = node.getAttribute('data-i18n-ph');
      if (dict[k] !== undefined) node.placeholder = dict[k];
    });
    $('lang-label').textContent     = lang === 'en' ? 'FR' : 'EN';
    $('fab-lang-label').textContent = lang === 'en' ? 'FR' : 'EN';
    localStorage.setItem('lang', lang);
  }

  /* ── BUILD / REBUILD all dynamic sections ────────────────── */
  function buildAll() {
    const dict = UI[lang];

    // ── page title & basics ──
    document.title = `${C.name} — Portfolio`;
    $('nav-name').textContent    = C.name;
    $('footer-name').textContent = `© ${new Date().getFullYear()} ${C.name}`;
    const cvLink = $('nav-cv');
    cvLink.href = C.cvFile || '#';
    cvLink.style.display = C.cvFile ? '' : 'none';

    // ── hero ──
    $('hero-name').textContent  = C.name;
    $('hero-title').textContent = `${t(C.title)}${C.subtitle ? ' · ' + t(C.subtitle) : ''}`;
    $('hero-bio').textContent   = t(C.bio);

    const metaEl = $('hero-meta'); metaEl.innerHTML = '';
    if (C.contact.location) {
      metaEl.appendChild(Object.assign(el('span','hero-meta-item'),{innerHTML:`${ICON.location} ${C.contact.location}`}));
    }
    if (C.contact.email) {
      const a = el('a','hero-meta-item');
      a.href = `mailto:${C.contact.email}`;
      a.innerHTML = `${ICON.email} ${C.contact.email}`;
      metaEl.appendChild(a);
    }

    // ── avatar ──
    const avatarEl = $('avatar-el');
    if (C.avatar) {
      avatarEl.innerHTML = `<img src="${C.avatar}" alt="${C.name}"/>`;
    } else {
      const sp = $('avatar-initials');
      if (sp) sp.textContent = initials(C.name);
    }

    // ── technical skills ──
    const sg = $('skills-grid'); sg.innerHTML = '';
    C.skills.forEach(group => {
      const card = el('div','skill-card reveal');
      card.innerHTML = `<p class="skill-category">${t(group.category)}</p>
        <div class="skill-items">${group.items.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>`;
      sg.appendChild(card);
    });

    // ── sub grid: languages + soft skills ──
    const subGrid = $('sub-grid'); subGrid.innerHTML = '';

    if (C.languages?.length) {
      const card = el('div','sub-card reveal');
      card.innerHTML = `<p class="sub-card-title">${dict['skills.languages']}</p>
        <div class="lang-list">${C.languages.map(l => `
          <div class="lang-item">
            <span class="lang-flag">${l.flag}</span>
            <div class="lang-info">
              <div class="lang-name">${t(l.lang)}</div>
              <div class="lang-level-bar"><div class="lang-level-fill" style="width:${levelWidth(t(l.level))}"></div></div>
              <div class="lang-level-label">${t(l.level)}</div>
            </div>
          </div>`).join('')}
        </div>`;
      subGrid.appendChild(card);
    }

    if (C.softSkills?.length) {
      const card = el('div','sub-card reveal');
      card.innerHTML = `<p class="sub-card-title">${dict['skills.soft']}</p>
        <div class="soft-list">${C.softSkills.map(s =>
          `<span class="soft-item"><span class="soft-icon">${s.icon}</span>${t(s)}</span>`
        ).join('')}</div>`;
      subGrid.appendChild(card);
    }

    // ── hobbies ──
    const hobbiesSection = $('hobbies-section'); hobbiesSection.innerHTML = '';
    if (C.hobbies?.length) {
      const wrap = el('div','hobbies-wrap reveal');
      wrap.innerHTML = `<p class="hobbies-title">${dict['skills.hobbies']}</p>
        <div class="hobbies-list">${C.hobbies.map(h =>
          `<span class="hobby-item"><span class="hobby-icon">${h.icon}</span>${t(h)}</span>`
        ).join('')}</div>`;
      hobbiesSection.appendChild(wrap);
    }

    // ── timeline: experience ──
    const tl = $('timeline'); tl.innerHTML = '';
    if (C.experience?.length) {
      const sec = el('div','timeline-section reveal');
      sec.innerHTML = `<p class="timeline-section-label">${dict['exp.work']}</p>`;
      C.experience.forEach((exp, i) => {
        const hasDetails = exp.details && (t(exp.details));
        const item = el('div', hasDetails ? 'timeline-item clickable' : 'timeline-item');
        item.innerHTML = `
          <div class="tl-header"><span class="tl-role">${t(exp.role)}</span><span class="tl-period">${exp.period}</span></div>
          <div class="tl-company">${exp.company}${exp.location?' · '+exp.location:''}</div>
          <p class="tl-desc">${t(exp.description)}</p>
          <div class="tl-footer">
            ${exp.tags?`<div class="tl-tags">${exp.tags.map(tg=>`<span class="tl-tag">${tg}</span>`).join('')}</div>`:'<div></div>'}
            ${hasDetails ? `<span class="tl-show-more"><span class="tl-show-more-dot"></span>${dict['exp.showMore']}</span>` : ''}
          </div>`;
        if (hasDetails) item.addEventListener('click', () => openExpModal(i));
        sec.appendChild(item);
      });
      tl.appendChild(sec);
    }
    if (C.education?.length) {
      const sec = el('div','timeline-section reveal');
      sec.innerHTML = `<p class="timeline-section-label">${dict['exp.edu']}</p>`;
      C.education.forEach(edu => {
        const item = el('div','timeline-item');
        item.innerHTML = `
          <div class="tl-header"><span class="tl-degree">${t(edu.degree)}</span><span class="tl-period">${edu.period}</span></div>
          <div class="tl-school">${edu.school}</div>
          ${edu.note?`<p class="tl-note">${t(edu.note)}</p>`:''}`;
        sec.appendChild(item);
      });
      tl.appendChild(sec);
    }

    // ── projects ──
    const pg = $('projects-grid'); pg.innerHTML = '';
    C.projects.forEach((p, i) => {
      const card = el('div','project-card reveal');
      const imgBlock = p.image
        ? `<div class="project-image"><img src="${p.image}" alt="${p.title}" loading="lazy"/></div>`
        : `<div class="project-image"><span class="project-placeholder-icon">⚡</span></div>`;
      card.innerHTML = `${imgBlock}
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${t(p.description)}</p>
          <div class="project-footer">
            <div class="project-tags">${p.tags.map(tg=>`<span class="project-tag">${tg}</span>`).join('')}</div>
            <span class="project-more">${dict['projects.details']}</span>
          </div>
        </div>`;
      card.addEventListener('click', () => openModal(i));
      pg.appendChild(card);
    });

    // ── certifications ──
    const cg = $('cert-grid'); cg.innerHTML = '';
    if (C.certifications?.length) {
      C.certifications.forEach(cert => {
        const card = el('div','cert-card reveal');
        card.innerHTML = `
          <div class="cert-top">
            <span class="cert-badge">${cert.badge || '🏅'}</span>
            <span class="cert-issuer">${cert.issuer}</span>
          </div>
          <div class="cert-name">${t(cert.name)}</div>
          <div class="cert-year">${cert.year}</div>
          ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" class="cert-link" target="_blank" rel="noopener">${dict['cert.verify']} ${ICON.external}</a>` : ''}`;
        cg.appendChild(card);
      });
    } else {
      // hide section if no certifications defined
      const sec = $('certifications');
      if (sec) sec.style.display = 'none';
    }

    // ── blog ──
    const bl = $('blog-list'); bl.innerHTML = '';
    C.blog.forEach(post => {
      const a = el('a','blog-item reveal');
      a.href = post.link || '#';
      if (post.link && post.link !== '#') { a.target='_blank'; a.rel='noopener'; }
      a.innerHTML = `
        <span class="blog-tag-badge">${post.tag}</span>
        <div class="blog-content">
          <h3 class="blog-title">${t(post.title)}</h3>
          <p class="blog-summary">${t(post.summary)}</p>
          <span class="blog-date">${t(post.date)}</span>
        </div>
        <span class="blog-arrow">→</span>`;
      bl.appendChild(a);
    });

    // ── contact ──
    const ci = $('contact-info'); ci.innerHTML = '';
    ci.innerHTML = `<h3 class="contact-heading">${dict['contact.heading']}</h3>
      <p class="contact-lead">${dict['contact.lead']}</p>`;
    [
      { icon: ICON.email,    label: C.contact.email,  href: `mailto:${C.contact.email}` },
      { icon: ICON.linkedin, label: 'LinkedIn',        href: C.contact.linkedin },
      { icon: ICON.github,   label: 'GitHub',          href: C.contact.github },
    ].forEach(lk => {
      if (!lk.href || lk.href.includes('undefined')) return;
      const a = el('a','contact-link');
      a.href = lk.href;
      if (!lk.href.startsWith('mailto')) { a.target='_blank'; a.rel='noopener'; }
      a.innerHTML = `${lk.icon} ${lk.label}`;
      ci.appendChild(a);
    });

    // re-observe new .reveal nodes
    document.querySelectorAll('.reveal:not(.visible)').forEach(node => observer.observe(node));
    // stagger children
    document.querySelectorAll('.skills-grid,.projects-grid,.cert-grid,.blog-list,.sub-grid').forEach(grid => {
      grid.querySelectorAll('.reveal').forEach((child, i) => { child.style.transitionDelay = `${i*55}ms`; });
    });
  }

  /* ── PROJECT MODAL ───────────────────────────────────────── */
  const overlay = $('modal-overlay');
  const modalBody = $('modal-body');

  function openModal(index) {
    const p = C.projects[index];
    const dict = UI[lang];
    let galleryHtml = '';
    if (p.gallery?.length) {
      galleryHtml = `<div class="modal-gallery">${p.gallery.map(url=>`<img src="${url}" alt="" loading="lazy"/>`).join('')}</div>`;
    } else if (p.image) {
      galleryHtml = `<img src="${p.image}" alt="${p.title}" class="modal-hero-img"/>`;
    }
    modalBody.innerHTML = `
      ${galleryHtml}
      <h2 class="modal-title">${p.title}</h2>
      <div class="modal-tags">${p.tags.map(tg=>`<span class="modal-tag">${tg}</span>`).join('')}</div>
      <p class="modal-details">${t(p.details) || t(p.description)}</p>
      ${p.link ? `<a href="${p.link}" class="modal-link" target="_blank" rel="noopener">${dict['projects.view']} ${ICON.external}</a>` : ''}`;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Experience modal — same overlay, different content
  function openExpModal(index) {
    const exp = C.experience[index];
    const dict = UI[lang];
    modalBody.innerHTML = `
      <div class="modal-exp-eyebrow">${exp.company}${exp.location ? ' · ' + exp.location : ''} &nbsp;·&nbsp; ${exp.period}</div>
      <h2 class="modal-title">${t(exp.role)}</h2>
      <div class="modal-tags">${(exp.tags||[]).map(tg=>`<span class="modal-tag">${tg}</span>`).join('')}</div>
      <p class="modal-details">${t(exp.details) || t(exp.description)}</p>`;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  $('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── SCROLL REVEAL ───────────────────────────────────────── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  /* ── NAVBAR ──────────────────────────────────────────────── */
  window.addEventListener('scroll', () => {
    $('navbar').classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
  const hamburger = $('nav-toggle');
  const navLinks  = $('nav-links');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }));

  /* ── TOGGLES ─────────────────────────────────────────────── */
  function toggleTheme() { applyTheme(theme === 'light' ? 'dark' : 'light'); }
  function toggleLang()  { lang = lang === 'en' ? 'fr' : 'en'; applyLangStatic(); buildAll(); }

  $('theme-toggle').addEventListener('click', toggleTheme);
  $('fab-theme').addEventListener('click', toggleTheme);
  $('lang-toggle').addEventListener('click', toggleLang);
  $('fab-lang').addEventListener('click', toggleLang);

  /* ── CONTACT FORM (Formspree) ────────────────────────────── */
  $('contact-form').addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = $('form-btn');
    const note = $('form-note');
    const dict = UI[lang];
    const form = e.target;

    // disable button and show loading state
    btn.disabled    = true;
    btn.textContent = dict['form.sending'];
    note.textContent = '';
    note.className   = 'form-note';

    try {
      const res = await fetch('https://formspree.io/f/xwvdlvna', {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (res.ok) {
        // success — clear form, show green message
        form.reset();
        note.textContent = dict['form.sent'];
        note.className   = 'form-note success';
        btn.textContent  = dict['form.send'];
        btn.disabled     = false;
      } else {
        // Formspree returned an error
        const data = await res.json();
        const msg  = data?.errors?.map(err => err.message).join(', ')
                     || dict['form.error'];
        note.textContent = msg;
        note.className   = 'form-note error';
        btn.textContent  = dict['form.send'];
        btn.disabled     = false;
      }
    } catch {
      // network failure
      note.textContent = dict['form.error'];
      note.className   = 'form-note error';
      btn.textContent  = dict['form.send'];
      btn.disabled     = false;
    }
  });

  /* ── INIT ────────────────────────────────────────────────── */
  applyTheme(theme);
  applyLangStatic();
  buildAll();
});
