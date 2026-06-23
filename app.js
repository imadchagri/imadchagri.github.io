/* ============================================================
   app.js — reads CONFIG, handles i18n (EN/FR) + dark/light.
   You never need to edit this file.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HELPERS ─────────────────────────────────────────────── */
  const C   = CONFIG;
  const $   = id => document.getElementById(id);
  const initials = name => name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  const t   = (obj) => (typeof obj === 'object' && obj !== null)
                        ? (obj[lang] ?? obj.en ?? '')
                        : (obj ?? '');

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
  };

  /* ── UI STRINGS (all interface text) ─────────────────────── */
  const UI = {
    en: {
      'nav.about':       'About',
      'nav.skills':      'Skills',
      'nav.experience':  'Experience',
      'nav.projects':    'Projects',
      'nav.blog':        'Articles',
      'nav.contact':     'Contact',
      'nav.cv':          'Download CV',
      'hero.eyebrow':    'Engineering Portfolio',
      'hero.cta1':       'Get in touch',
      'hero.cta2':       'See my work',
      'skills.eyebrow':  'Expertise',
      'skills.title':    'Skills & Technologies',
      'exp.eyebrow':     'Career',
      'exp.title':       'Experience & Education',
      'exp.work':        'Work Experience',
      'exp.edu':         'Education',
      'projects.eyebrow':'Work',
      'projects.title':  'Featured Projects',
      'projects.view':   'View',
      'blog.eyebrow':    'Writing',
      'blog.title':      'Articles & Insights',
      'contact.eyebrow': "Let's Connect",
      'contact.title':   'Get in Touch',
      'contact.heading': "Let's build something together",
      'contact.lead':    "I'm open to engineering collaborations, consulting, and interesting opportunities. Send a message and I'll get back to you shortly.",
      'form.name':       'Your Name',
      'form.namePh':     'Jane Smith',
      'form.email':      'Email',
      'form.emailPh':    'jane@example.com',
      'form.subject':    'Subject',
      'form.subjectPh':  'Project proposal, collaboration…',
      'form.message':    'Message',
      'form.messagePh':  'Tell me about your project or question…',
      'form.send':       'Send Message',
      'form.sending':    'Sending…',
      'form.sent':       'Your email client should open. If not, email me directly.',
      'footer.built':    'Built with pure HTML · Hosted on GitHub Pages',
    },
    fr: {
      'nav.about':       'À propos',
      'nav.skills':      'Compétences',
      'nav.experience':  'Expérience',
      'nav.projects':    'Projets',
      'nav.blog':        'Articles',
      'nav.contact':     'Contact',
      'nav.cv':          'Télécharger CV',
      'hero.eyebrow':    'Portfolio Ingénierie',
      'hero.cta1':       'Me contacter',
      'hero.cta2':       'Voir mes projets',
      'skills.eyebrow':  'Expertise',
      'skills.title':    'Compétences & Technologies',
      'exp.eyebrow':     'Parcours',
      'exp.title':       'Expérience & Formation',
      'exp.work':        'Expérience Professionnelle',
      'exp.edu':         'Formation',
      'projects.eyebrow':'Réalisations',
      'projects.title':  'Projets Phares',
      'projects.view':   'Voir',
      'blog.eyebrow':    'Rédaction',
      'blog.title':      'Articles & Réflexions',
      'contact.eyebrow': 'Restons en contact',
      'contact.title':   'Me Contacter',
      'contact.heading': 'Construisons quelque chose ensemble',
      'contact.lead':    "Je suis ouvert aux collaborations en ingénierie, au conseil et aux opportunités intéressantes. Envoyez-moi un message et je vous répondrai rapidement.",
      'form.name':       'Votre nom',
      'form.namePh':     'Jean Dupont',
      'form.email':      'Email',
      'form.emailPh':    'jean@exemple.com',
      'form.subject':    'Sujet',
      'form.subjectPh':  'Proposition de projet, collaboration…',
      'form.message':    'Message',
      'form.messagePh':  'Parlez-moi de votre projet ou question…',
      'form.send':       'Envoyer le message',
      'form.sending':    'Envoi…',
      'form.sent':       'Votre client email devrait s\'ouvrir. Sinon, contactez-moi directement.',
      'footer.built':    'Développé en HTML pur · Hébergé sur GitHub Pages',
    },
  };

  /* ── STATE ───────────────────────────────────────────────── */
  let lang  = localStorage.getItem('lang')  || 'en';
  let theme = localStorage.getItem('theme') || 'light';

  /* ── APPLY THEME ─────────────────────────────────────────── */
  function applyTheme(th) {
    theme = th;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  /* ── TRANSLATE (static elements with data-i18n) ──────────── */
  function applyLang() {
    document.documentElement.lang = lang;
    const dict = UI[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // Update lang button labels
    const nextLang = lang === 'en' ? 'FR' : 'EN';
    $('lang-label').textContent    = nextLang;
    $('fab-lang-label').textContent = nextLang;

    localStorage.setItem('lang', lang);
    rebuildDynamic();
  }

  /* ── BUILD DYNAMIC SECTIONS ──────────────────────────────── */
  function rebuildDynamic() {
    const dict = UI[lang];

    // ── hero ──
    $('hero-name').textContent  = C.name;
    $('hero-title').textContent = `${t(C.title)}${C.subtitle ? ' · ' + t(C.subtitle) : ''}`;
    $('hero-bio').textContent   = t(C.bio);
    $('footer-name').textContent = `© ${new Date().getFullYear()} ${C.name}`;

    // hero meta
    const metaEl = $('hero-meta');
    metaEl.innerHTML = '';
    if (C.contact.location) {
      metaEl.appendChild(Object.assign(el('span','hero-meta-item'), { innerHTML: `${ICON.location} ${C.contact.location}` }));
    }
    if (C.contact.email) {
      const a = el('a','hero-meta-item');
      a.href = `mailto:${C.contact.email}`;
      a.innerHTML = `${ICON.email} ${C.contact.email}`;
      metaEl.appendChild(a);
    }

    // ── skills ──
    const sg = $('skills-grid'); sg.innerHTML = '';
    C.skills.forEach(group => {
      const card = el('div','skill-card reveal');
      card.innerHTML = `<p class="skill-category">${t(group.category)}</p>
        <div class="skill-items">${group.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>`;
      sg.appendChild(card);
    });

    // ── timeline ──
    const tl = $('timeline'); tl.innerHTML = '';

    if (C.experience?.length) {
      const sec = el('div','timeline-section reveal');
      sec.innerHTML = `<p class="timeline-section-label">${dict['exp.work']}</p>`;
      C.experience.forEach(exp => {
        const item = el('div','timeline-item');
        item.innerHTML = `
          <div class="tl-header">
            <span class="tl-role">${t(exp.role)}</span>
            <span class="tl-period">${exp.period}</span>
          </div>
          <div class="tl-company">${exp.company}${exp.location ? ' · ' + exp.location : ''}</div>
          <p class="tl-desc">${t(exp.description)}</p>
          ${exp.tags ? `<div class="tl-tags">${exp.tags.map(tg => `<span class="tl-tag">${tg}</span>`).join('')}</div>` : ''}`;
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
          <div class="tl-header">
            <span class="tl-degree">${t(edu.degree)}</span>
            <span class="tl-period">${edu.period}</span>
          </div>
          <div class="tl-school">${edu.school}</div>
          ${edu.note ? `<p class="tl-note">${t(edu.note)}</p>` : ''}`;
        sec.appendChild(item);
      });
      tl.appendChild(sec);
    }

    // ── projects ──
    const pg = $('projects-grid'); pg.innerHTML = '';
    C.projects.forEach(p => {
      const card = el('div','project-card reveal');
      const imgBlock = p.image
        ? `<div class="project-image"><img src="${p.image}" alt="${p.title}" loading="lazy"/></div>`
        : `<div class="project-image"><span class="project-placeholder-icon">⚡</span></div>`;
      card.innerHTML = `${imgBlock}
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${t(p.description)}</p>
          <div class="project-footer">
            <div class="project-tags">${p.tags.map(tg => `<span class="project-tag">${tg}</span>`).join('')}</div>
            ${p.link ? `<a href="${p.link}" class="project-link" target="_blank" rel="noopener">${dict['projects.view']} →</a>` : ''}
          </div>
        </div>`;
      pg.appendChild(card);
    });

    // ── blog ──
    const bl = $('blog-list'); bl.innerHTML = '';
    C.blog.forEach(post => {
      const a = el('a','blog-item reveal');
      a.href = post.link || '#';
      if (post.link && post.link !== '#') { a.target = '_blank'; a.rel = 'noopener'; }
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

    // ── contact info ──
    const ci = $('contact-info'); ci.innerHTML = '';
    ci.innerHTML = `
      <h3 class="contact-heading">${dict['contact.heading']}</h3>
      <p class="contact-lead">${dict['contact.lead']}</p>`;
    [
      { icon: ICON.email,    label: C.contact.email,    href: `mailto:${C.contact.email}` },
      { icon: ICON.linkedin, label: 'LinkedIn',          href: C.contact.linkedin },
      { icon: ICON.github,   label: 'GitHub',            href: C.contact.github },
    ].forEach(lk => {
      if (!lk.href || lk.href.includes('undefined')) return;
      const a = el('a','contact-link');
      a.href = lk.href;
      if (!lk.href.startsWith('mailto')) { a.target = '_blank'; a.rel = 'noopener'; }
      a.innerHTML = `${lk.icon} ${lk.label}`;
      ci.appendChild(a);
    });

    // re-observe new .reveal elements
    document.querySelectorAll('.reveal:not(.visible)').forEach(node => observer.observe(node));

    // stagger
    document.querySelectorAll('.skills-grid, .projects-grid, .blog-list').forEach(grid => {
      grid.querySelectorAll('.reveal').forEach((child, i) => {
        child.style.transitionDelay = `${i * 55}ms`;
      });
    });
  }

  /* ── SCROLL REVEAL OBSERVER ──────────────────────────────── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  /* ── INIT ────────────────────────────────────────────────── */

  // page title
  document.title = `${C.name} — Portfolio`;

  // nav logo & cv
  $('nav-name').textContent = C.name;
  const cvLink = $('nav-cv');
  cvLink.href = C.cvFile || '#';
  if (!C.cvFile) cvLink.style.display = 'none';

  // avatar
  const avatarEl = $('avatar-el');
  if (C.avatar) {
    avatarEl.innerHTML = `<img src="${C.avatar}" alt="${C.name}"/>`;
  } else {
    $('avatar-initials').textContent = initials(C.name);
  }

  // apply saved preferences
  applyTheme(theme);
  applyLang();

  /* ── EVENT LISTENERS ─────────────────────────────────────── */

  // theme toggles (navbar + fab)
  function toggleTheme() { applyTheme(theme === 'light' ? 'dark' : 'light'); }
  $('theme-toggle').addEventListener('click', toggleTheme);
  $('fab-theme').addEventListener('click', toggleTheme);

  // language toggles (navbar + fab)
  function toggleLang() { lang = lang === 'en' ? 'fr' : 'en'; applyLang(); }
  $('lang-toggle').addEventListener('click', toggleLang);
  $('fab-lang').addEventListener('click', toggleLang);

  // hamburger
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

  // navbar shadow on scroll
  window.addEventListener('scroll', () => {
    $('navbar').classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // contact form (mailto fallback — works without a backend)
  $('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn  = $('form-btn');
    const note = $('form-note');
    const dict = UI[lang];
    btn.disabled = true;
    btn.textContent = dict['form.sending'];

    const name    = $('f-name').value;
    const email   = $('f-email').value;
    const subject = $('f-subject').value || 'Portfolio Contact';
    const message = $('f-message').value;
    const mailto  = `mailto:${C.contact.email}?subject=${encodeURIComponent(subject + ' — ' + name)}&body=${encodeURIComponent('From: ' + name + ' <' + email + '>\n\n' + message)}`;
    window.location.href = mailto;

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = dict['form.send'];
      note.textContent = dict['form.sent'];
      note.className = 'form-note success';
    }, 1200);
  });

});
