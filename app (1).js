/* ============================================================
   app.js — reads CONFIG, handles i18n (EN/FR), theme (light/dark),
   palette switching, hero background, project/experience modal,
   and builds every section. You never need to edit this file —
   edit content + settings in config.js.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const C = CONFIG;
  const S = C.settings || {};
  const $ = (id) => document.getElementById(id);
  const initials = (n) => (n || '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const ls = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
               set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ── ICONS ─────────────────────────────────────────────── */
  const ICON = {
    location: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    email:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
    linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`,
    external: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    bolt:     `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--ink-faint)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    award:    `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    arrow:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  };

  /* ── PALETTES (must match style.css) ───────────────────── */
  const PALETTE_KEYS = ['blue', 'indigo', 'emerald', 'amber', 'mono'];
  const PALETTE_SWATCH = { blue: '#2c63d8', indigo: '#5b4bd6', emerald: '#0f9d76', amber: '#bf6a14', mono: '#3a352d' };

  /* ── LANGUAGE LEVEL → bar width ───────────────────────── */
  const LEVEL_WIDTH = { native: '100%', natif: '100%', fluent: '90%', courant: '90%',
    professional: '74%', professionnel: '74%', intermediate: '54%', 'intermédiaire': '54%',
    beginner: '30%', 'débutant': '30%' };
  const levelWidth = (s) => LEVEL_WIDTH[(s || '').toLowerCase()] || '50%';

  /* ── UI STRINGS ────────────────────────────────────────── */
  const UI = {
    en: {
      about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects',
      certifications: 'Certifications', blog: 'Articles', contact: 'Contact', cv: 'Download CV',
      heroEyebrow: 'Engineering Portfolio', cta1: 'Get in touch', cta2: 'See my work',
      skillsEyebrow: 'Expertise', skillsTitle: 'Skills & Technologies', languages: 'Spoken Languages', soft: 'Soft Skills', hobbies: 'Hobbies & Interests',
      expEyebrow: 'Career', expTitle: 'Experience & Education', work: 'Work Experience', edu: 'Education', showMore: 'Show more',
      projectsEyebrow: 'Work', projectsTitle: 'Featured Projects', details: 'Details', view: 'View project',
      certEyebrow: 'Credentials', certTitle: 'Certifications', verify: 'Verify',
      blogEyebrow: 'Writing', blogTitle: 'Articles & Insights',
      contactEyebrow: "Let's Connect", contactTitle: 'Get in Touch',
      contactHeading: "Let's build something together",
      contactLead: "I'm open to engineering collaborations, consulting, and interesting opportunities. Send a message and I'll get back to you shortly.",
      fName: 'Your Name', fNamePh: 'Jane Smith', fEmail: 'Email', fEmailPh: 'jane@example.com',
      fSubject: 'Subject', fSubjectPh: 'Project proposal, collaboration…',
      fMessage: 'Message', fMessagePh: 'Tell me about your project or question…',
      send: 'Send Message', sending: 'Sending…', sent: 'Thanks — your message has been sent. I\'ll get back to you soon.', error: 'Something went wrong. Please try again or email me directly.',
      built: 'Built with HTML · Hosted on GitHub Pages',
    },
    fr: {
      about: 'À propos', skills: 'Compétences', experience: 'Expérience', projects: 'Projets',
      certifications: 'Certifications', blog: 'Articles', contact: 'Contact', cv: 'Télécharger CV',
      heroEyebrow: 'Portfolio Ingénierie', cta1: 'Me contacter', cta2: 'Voir mes projets',
      skillsEyebrow: 'Expertise', skillsTitle: 'Compétences & Technologies', languages: 'Langues parlées', soft: 'Compétences humaines', hobbies: 'Loisirs & Intérêts',
      expEyebrow: 'Parcours', expTitle: 'Expérience & Formation', work: 'Expérience Professionnelle', edu: 'Formation', showMore: 'Voir plus',
      projectsEyebrow: 'Réalisations', projectsTitle: 'Projets Phares', details: 'Détails', view: 'Voir le projet',
      certEyebrow: 'Accréditations', certTitle: 'Certifications', verify: 'Vérifier',
      blogEyebrow: 'Rédaction', blogTitle: 'Articles & Réflexions',
      contactEyebrow: 'Restons en contact', contactTitle: 'Me Contacter',
      contactHeading: 'Construisons quelque chose ensemble',
      contactLead: "Je suis ouvert aux collaborations, au conseil et aux opportunités intéressantes. Envoyez-moi un message et je vous répondrai rapidement.",
      fName: 'Votre nom', fNamePh: 'Jean Dupont', fEmail: 'Email', fEmailPh: 'jean@exemple.com',
      fSubject: 'Sujet', fSubjectPh: 'Proposition de projet, collaboration…',
      fMessage: 'Message', fMessagePh: 'Parlez-moi de votre projet ou question…',
      send: 'Envoyer le message', sending: 'Envoi…', sent: 'Merci — votre message a été envoyé. Je vous répondrai bientôt.', error: 'Une erreur est survenue. Réessayez ou contactez-moi directement.',
      built: 'Développé en HTML · Hébergé sur GitHub Pages',
    },
  };

  const el = (type, cls, html) => { const e = document.createElement(type); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };

  /* ── STATE ─────────────────────────────────────────────── */
  let lang    = ls.get('lang')    || S.lang    || 'en';
  let theme   = ls.get('theme')   || S.theme   || 'light';
  /* palette is set in config.js (settings.palette) — not user-switchable */
  let palette = S.palette || 'blue';
  const t = (obj) => (obj && typeof obj === 'object') ? (obj[lang] != null ? obj[lang] : (obj.en || '')) : (obj != null ? obj : '');

  /* ── THEME / PALETTE ───────────────────────────────────── */
  function applyTheme(th) { theme = th; document.documentElement.setAttribute('data-theme', th); ls.set('theme', th); }
  function applyPalette(p) {
    palette = p; document.documentElement.setAttribute('data-palette', p);
  }

  /* ── i18n static (data-ui / data-ui-ph) ────────────────── */
  function applyLangStatic() {
    const d = UI[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ui]').forEach((n) => { const k = n.getAttribute('data-ui'); if (d[k] != null) n.textContent = d[k]; });
    document.querySelectorAll('[data-ui-ph]').forEach((n) => { const k = n.getAttribute('data-ui-ph'); if (d[k] != null) n.placeholder = d[k]; });
    $('lang-label').textContent = lang === 'en' ? 'FR' : 'EN';
    $('fab-lang-label').textContent = lang === 'en' ? 'FR' : 'EN';
    ls.set('lang', lang);
  }

  /* ── NAV LINKS (built once) ────────────────────────────── */
  function buildNavChrome() {
    const d = UI[lang];
    const keys = ['about', 'skills', 'experience', 'projects', 'certifications', 'blog', 'contact'];
    const links = $('nav-links'); links.innerHTML = '';
    keys.forEach((k) => { const li = el('li'); li.innerHTML = `<a href="#${k}" class="nav-link">${d[k]}</a>`; links.appendChild(li); });
    if (C.cvFile) { const li = el('li'); li.innerHTML = `<a href="${C.cvFile}" class="btn-cv" download>${d.cv}</a>`; links.appendChild(li); }

    const mob = $('nav-mobile'); mob.innerHTML = '';
    keys.forEach((k) => { const a = el('a', null, d[k]); a.href = '#' + k; a.addEventListener('click', closeNav); mob.appendChild(a); });
    if (C.cvFile) { const a = el('a', 'btn-cv', d.cv); a.href = C.cvFile; a.setAttribute('download', ''); mob.appendChild(a); }
  }

  /* ── BUILD dynamic sections ────────────────────────────── */
  function buildAll() {
    const d = UI[lang];
    document.title = `${C.name} — Portfolio`;
    $('nav-name').textContent = C.name;
    $('footer-name').textContent = `© ${new Date().getFullYear()} ${C.name}`;

    // hero
    $('hero-name').textContent = C.name;
    $('hero-role').textContent = `${t(C.title)}${C.subtitle ? ' · ' + t(C.subtitle) : ''}`;
    $('hero-bio').textContent = t(C.bio);

    const hero = document.querySelector('.hero');
    const bg = (S.heroBackground || '').trim();
    if (bg) { hero.classList.add('has-bg'); $('hero-bg').style.backgroundImage = `url('${bg}')`; }
    else { hero.classList.remove('has-bg'); }

    const meta = $('hero-meta'); meta.innerHTML = '';
    if (C.contact.location) meta.appendChild(Object.assign(el('span', 'hero-meta-item'), { innerHTML: `${ICON.location} ${C.contact.location}` }));
    if (C.contact.email) { const a = el('a', 'hero-meta-item'); a.href = `mailto:${C.contact.email}`; a.innerHTML = `${ICON.email} ${C.contact.email}`; meta.appendChild(a); }

    const av = $('avatar');
    if (C.avatar) av.innerHTML = `<img src="${C.avatar}" alt="${C.name}"/>`;
    else av.innerHTML = `<span class="avatar-initials">${initials(C.name)}</span>`;

    // skills
    const sg = $('skills-grid'); sg.innerHTML = '';
    (C.skills || []).forEach((g) => {
      const card = el('div', 'card-base skill-card reveal');
      card.innerHTML = `<p class="skill-cat">${t(g.category)}</p><div class="tag-wrap">${g.items.map((s) => `<span class="skill-tag">${s}</span>`).join('')}</div>`;
      sg.appendChild(card);
    });

    // languages + soft
    const sub = $('sub-grid'); sub.innerHTML = '';
    if (C.languages && C.languages.length) {
      const card = el('div', 'card-base sub-card reveal');
      card.innerHTML = `<p class="sub-title">${d.languages}</p><div class="lang-list">${C.languages.map((l) => `
        <div><div class="lang-top"><span class="lang-name">${t(l.lang)}</span><span class="lang-level">${t(l.level)}</span></div>
        <div class="lang-bar"><div class="lang-fill" style="width:${levelWidth(t(l.level))}"></div></div></div>`).join('')}</div>`;
      sub.appendChild(card);
    }
    if (C.softSkills && C.softSkills.length) {
      const card = el('div', 'card-base sub-card reveal');
      card.innerHTML = `<p class="sub-title">${d.soft}</p><div class="soft-list">${C.softSkills.map((s) => `<span class="soft-item">${t(s)}</span>`).join('')}</div>`;
      sub.appendChild(card);
    }

    // hobbies
    const hob = $('hobbies-section'); hob.innerHTML = '';
    if (C.hobbies && C.hobbies.length) {
      const wrap = el('div', 'reveal');
      wrap.innerHTML = `<p class="hobbies-title">${d.hobbies}</p><div class="hobbies-list">${C.hobbies.map((h) => `<span class="hobby-item">${t(h)}</span>`).join('')}</div>`;
      hob.appendChild(wrap);
    }

    // timeline
    const tl = $('timeline'); tl.innerHTML = '';
    if (C.experience && C.experience.length) {
      tl.appendChild(el('p', 'tl-label', d.work));
      C.experience.forEach((exp, i) => {
        const hasDetails = !!t(exp.details);
        const item = el('div', 'tl-item reveal' + (hasDetails ? ' clickable' : ''));
        item.innerHTML = `
          <div class="tl-head"><span class="tl-role">${t(exp.role)}</span><span class="tl-period">${exp.period}</span></div>
          <div class="tl-company">${exp.company}${exp.location ? ' · ' + exp.location : ''}</div>
          <p class="tl-desc">${t(exp.description)}</p>
          <div class="tl-foot">
            ${exp.tags ? `<div class="tl-tags">${exp.tags.map((g) => `<span class="tl-tag">${g}</span>`).join('')}</div>` : '<div></div>'}
            ${hasDetails ? `<span class="tl-more"><span class="dot-pulse"></span>${d.showMore}</span>` : ''}
          </div>`;
        if (hasDetails) item.addEventListener('click', () => openExpModal(i));
        tl.appendChild(item);
      });
    }
    if (C.education && C.education.length) {
      tl.appendChild(el('p', 'tl-label edu', d.edu));
      C.education.forEach((edu) => {
        const item = el('div', 'tl-item edu reveal');
        item.innerHTML = `<div class="tl-head"><span class="tl-degree">${t(edu.degree)}</span><span class="tl-period">${edu.period}</span></div>
          <div class="tl-school">${edu.school}</div>${t(edu.note) ? `<p class="tl-note">${t(edu.note)}</p>` : ''}`;
        tl.appendChild(item);
      });
    }

    // projects
    const pg = $('projects-grid'); pg.innerHTML = '';
    (C.projects || []).forEach((p, i) => {
      const card = el('div', 'card-base project-card reveal');
      const img = p.image ? `<div style="background-image:url('${p.image}')"></div>` : ICON.bolt;
      card.innerHTML = `<div class="project-img">${img}</div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${t(p.description)}</p>
          <div class="project-foot">
            <div class="project-tags">${p.tags.map((g) => `<span class="project-tag">${g}</span>`).join('')}</div>
            <span class="project-more">${d.details}</span>
          </div></div>`;
      card.addEventListener('click', () => openProjectModal(i));
      pg.appendChild(card);
    });

    // certifications
    const certSection = $('certifications');
    const cg = $('cert-grid'); cg.innerHTML = '';
    if (C.certifications && C.certifications.length) {
      certSection.style.display = '';
      C.certifications.forEach((c) => {
        const card = el('div', 'card-base cert-card reveal');
        card.innerHTML = `<div class="cert-top"><span class="cert-badge">${ICON.award}</span><span class="cert-issuer">${c.issuer}</span></div>
          <div class="cert-name">${t(c.name)}</div><div class="cert-year">${c.year}</div>
          ${c.credentialUrl ? `<a href="${c.credentialUrl}" class="cert-link" target="_blank" rel="noopener">${d.verify} ${ICON.external}</a>` : ''}`;
        cg.appendChild(card);
      });
    } else { certSection.style.display = 'none'; }

    // blog
    const blogSection = $('blog');
    const bl = $('blog-list'); bl.innerHTML = '';
    if (C.blog && C.blog.length) {
      blogSection.style.display = '';
      C.blog.forEach((post) => {
        const a = el('a', 'blog-item reveal');
        a.href = post.link || '#';
        if (post.link && post.link !== '#') { a.target = '_blank'; a.rel = 'noopener'; }
        a.innerHTML = `<span class="blog-badge">${post.tag}</span>
          <div><h3 class="blog-title">${t(post.title)}</h3><p class="blog-summary">${t(post.summary)}</p><span class="blog-date">${t(post.date)}</span></div>
          <span class="blog-arrow">${ICON.arrow}</span>`;
        bl.appendChild(a);
      });
    } else { blogSection.style.display = 'none'; }

    // contact
    const ci = $('contact-info');
    ci.innerHTML = `<h3 class="contact-heading">${d.contactHeading}</h3><p class="contact-lead">${d.contactLead}</p>`;
    const links = el('div', 'contact-links');
    [
      { icon: ICON.email, label: C.contact.email, href: `mailto:${C.contact.email}`, blank: false },
      { icon: ICON.linkedin, label: 'LinkedIn', href: C.contact.linkedin, blank: true },
      { icon: ICON.github, label: 'GitHub', href: C.contact.github, blank: true },
    ].forEach((lk) => {
      if (!lk.href || lk.href.includes('undefined')) return;
      const a = el('a', 'contact-link'); a.href = lk.href; if (lk.blank) { a.target = '_blank'; a.rel = 'noopener'; }
      a.innerHTML = `${lk.icon} ${lk.label}`; links.appendChild(a);
    });
    ci.appendChild(links);

    revealScan();
  }

  /* ── MODAL ─────────────────────────────────────────────── */
  const overlay = $('modal-overlay'), modalBody = $('modal-body');
  function openModalHTML(html) { modalBody.innerHTML = html; overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeModal() { overlay.classList.remove('open'); document.body.style.overflow = ''; }
  function openProjectModal(i) {
    const p = C.projects[i], d = UI[lang];
    const img = p.gallery && p.gallery.length ? `<div class="modal-img" style="background-image:url('${p.gallery[0]}')"></div>`
      : (p.image ? `<div class="modal-img" style="background-image:url('${p.image}')"></div>` : '');
    openModalHTML(`${img}<h2 class="modal-title">${p.title}</h2>
      <div class="modal-tags">${p.tags.map((g) => `<span class="modal-tag">${g}</span>`).join('')}</div>
      <p class="modal-details">${t(p.details) || t(p.description)}</p>
      ${p.link ? `<a href="${p.link}" class="modal-link" target="_blank" rel="noopener">${d.view} ${ICON.external}</a>` : ''}`);
  }
  function openExpModal(i) {
    const e = C.experience[i];
    openModalHTML(`<div class="modal-eyebrow">${e.company}${e.location ? ' · ' + e.location : ''} &nbsp;·&nbsp; ${e.period}</div>
      <h2 class="modal-title">${t(e.role)}</h2>
      <div class="modal-tags">${(e.tags || []).map((g) => `<span class="modal-tag">${g}</span>`).join('')}</div>
      <p class="modal-details">${t(e.details) || t(e.description)}</p>`);
  }
  $('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ── REVEAL ────────────────────────────────────────────── */
  const io = new IntersectionObserver((ents) => {
    ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
  function revealScan() {
    document.querySelectorAll('.reveal:not(.visible)').forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight * 0.92) n.classList.add('visible');
      else io.observe(n);
    });
    document.querySelectorAll('.skills-grid, .projects-grid, .cert-grid, .blog-list, .sub-grid').forEach((g) => {
      g.querySelectorAll('.reveal').forEach((c, i) => { c.style.transitionDelay = `${Math.min(i, 8) * 50}ms`; });
    });
  }

  /* ── NAV behaviour ─────────────────────────────────────── */
  window.addEventListener('scroll', () => { $('nav').classList.toggle('scrolled', window.scrollY > 24); }, { passive: true });
  const navMobile = $('nav-mobile');
  function closeNav() { $('nav-toggle').classList.remove('open'); navMobile.classList.remove('open'); }
  $('nav-toggle').addEventListener('click', () => { $('nav-toggle').classList.toggle('open'); navMobile.classList.toggle('open'); });

  /* ── TOGGLES ───────────────────────────────────────────── */
  function toggleTheme() { applyTheme(theme === 'light' ? 'dark' : 'light'); }
  function toggleLang() { lang = lang === 'en' ? 'fr' : 'en'; applyLangStatic(); buildNavChrome(); buildAll(); }
  $('theme-toggle').addEventListener('click', toggleTheme);
  $('fab-theme').addEventListener('click', toggleTheme);
  $('lang-toggle').addEventListener('click', toggleLang);
  $('fab-lang').addEventListener('click', toggleLang);

  /* ── CONTACT FORM ──────────────────────────────────────── */
  $('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = $('form-btn'), note = $('form-note'), d = UI[lang];
    const f = e.target;
    const endpoint = (C.settings && C.settings.formEndpoint) || '';
    const name = f.name.value, email = f.email.value, subject = f.subject.value || 'Portfolio Contact', message = f.message.value;
    const fail = (msg) => { btn.disabled = false; btn.textContent = d.send; note.textContent = msg; note.className = 'form-note error'; };

    if (!endpoint) {
      window.location.href = `mailto:${C.contact.email}?subject=${encodeURIComponent(subject + ' — ' + name)}&body=${encodeURIComponent('From: ' + name + ' <' + email + '>\n\n' + message)}`;
      note.textContent = d.sent; note.className = 'form-note success'; return;
    }
    btn.disabled = true; btn.textContent = d.sending;
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(f),
    }).then((r) => {
      if (r.ok) { f.reset(); btn.disabled = false; btn.textContent = d.send; note.textContent = d.sent; note.className = 'form-note success'; }
      else { r.json().then((j) => fail((j.errors && j.errors.map((x) => x.message).join(', ')) || d.error)).catch(() => fail(d.error)); }
    }).catch(() => fail(d.error));
  });

  /* ── INIT ──────────────────────────────────────────────── */
  applyTheme(theme);
  applyPalette(palette);
  applyLangStatic();
  buildNavChrome();
  buildAll();
});
