/* ==========================================================================
   PERSONAL PORTFOLIO — data + interactions
   Every project below is a real repository from github.com/Brvetr4ve1er.
   Descriptions, languages, links and stars are taken from those repos
   (source of truth). Edit here to update the grid.
   ========================================================================== */
(function () {
  'use strict';

  var GH = 'https://github.com/Brvetr4ve1er/';

  // category: client | product | data | concept
  var PROJECTS = [
    {
      slug: 'bordjsteel', name: 'Bordj Steel', cover: 'assets/covers/bordjsteel.svg',
      category: 'client', meta: 'Client · Industrial B2B', badges: [['SHIPPED', 'live']],
      desc: 'Corporate website for a steel-construction & metal-fabrication firm. A paid client build made to read modern, solid and trustworthy — presenting complex products clearly without collapsing under technical debt.',
      chips: ['TypeScript', 'React', 'shadcn/ui'],
      repo: GH + 'BORDJ_Steel_B2b_website', live: null
    },
    {
      slug: 'alliance', name: 'Alliance Travel', cover: 'assets/covers/alliance.svg',
      category: 'client', meta: 'Client · Travel', badges: [['LIVE', 'live']],
      desc: 'Marketing site for a French-language travel agency in Bordj Bou Arréridj (3 branches). Six pages: a homepage hub plus five guided-tour landing pages — Cairo, Sharm, Istanbul, Azerbaijan, Kuala Lumpur.',
      chips: ['HTML', 'CSS', 'JS', 'Python'],
      repo: GH + 'alliancetravel34', live: 'https://alliancetravel34.vercel.app'
    },
    {
      slug: 'clinicos', name: 'clinicOS', cover: 'assets/covers/clinicos.svg',
      category: 'client', meta: 'Product · Healthcare', badges: [['MIT', 'soon']],
      desc: 'A fast, bilingual (French + Arabic RTL) mobile-first clinic platform built for a diabetologist in El Khroub, Constantine. WhatsApp-integrated booking and a demo admin dashboard, as a PWA.',
      chips: ['TypeScript', 'MDX', 'PWA', 'FR / AR'],
      repo: GH + 'clinicOS', live: null
    },
    {
      slug: 'etoile', name: "Étoile de l'Est", cover: 'assets/covers/etoile.svg',
      category: 'client', meta: 'Product · Retail PWA', badges: [['LIVE', 'live']],
      desc: 'An offline-first progressive web app for retail on unreliable connections — browse, queue, and sync when the signal returns. Full-stack client/server with a typed data layer.',
      chips: ['TypeScript', 'Vite', 'Tailwind', 'Drizzle'],
      repo: GH + 'etoile-de-l-st-PWA', live: 'https://brvetr4ve1er.github.io/etoile-de-l-st-PWA/'
    },
    {
      slug: 'glstore', name: 'GL Store', cover: 'assets/covers/glstore.svg',
      category: 'client', meta: 'Private client build', badges: [['PRIVATE', 'soon']],
      desc: '"Fast. Reliable. Yours." A unified e-commerce backend + admin console + intelligence engine for the Algerian consumer-electronics market: ingests messy supplier CSVs, normalises them through a deterministic enrichment brain, and serves a punk-styled React 19 dashboard.',
      chips: ['TypeScript', 'Python', 'PostgreSQL', 'React 19'],
      repo: null, live: null
    },
    {
      slug: 'nomara', name: 'Nomara Voyages', cover: 'assets/covers/nomara.svg',
      category: 'client', meta: 'Client · Travel', badges: [['MIT', 'soon']],
      desc: 'A professional travel-agency reservation site integrated with the WhatsApp API and inbound message filtering — turning DM chaos into a structured booking flow. Deployed on Netlify.',
      chips: ['HTML', 'JS', 'WhatsApp API'],
      repo: GH + 'nomara-voyages-', live: null
    },
    {
      slug: 'numidea', name: 'Numidea.tech', cover: 'assets/covers/numidea.svg',
      category: 'concept', meta: 'Concept · Studio', badges: [['LIVE', 'live']],
      desc: '"Rooted in Numidia, built on ideas." The studio concept site — a development atelier out of Bordj Bou Arréridj that designs, builds, ships and maintains digital products, with a web3 art-monetization spin.',
      chips: ['HTML', 'CSS', 'JS'],
      repo: GH + 'Numidea.tech', live: 'https://brvetr4ve1er.github.io/Numidea.tech/'
    },
    {
      slug: 'workspacehq', name: 'workspace-HQ', cover: 'assets/covers/workspacehq.svg',
      category: 'data', meta: 'Tool · Personal', badges: [['ACTIVE', 'live']],
      desc: 'A real-life neurodivergent HUD for navigating complex computer work without getting lost or sidetracked — browser bridge, collector, dashboard, and a "spellbook" of tools. The most recently active build.',
      chips: ['JavaScript', 'CSS', 'PowerShell'],
      repo: GH + 'workspace-HQ', live: null
    },
    {
      slug: 'bruns', name: 'BRUNs Document Intelligence', cover: 'assets/covers/bruns.svg',
      category: 'data', meta: 'Data · Python', badges: [['SOURCE', 'soon']],
      desc: 'A modular, production-grade document-intelligence system that processes, extracts, normalises, matches and manages structured data from real-world PDFs, images and text — powered by local LLMs and OCR pipelines.',
      chips: ['Python', 'OCR', 'Local LLMs'],
      repo: GH + 'BRUNs-logistics-data-scraper', live: null
    },
    {
      slug: 'prediction', name: 'Prediction Machination', cover: 'assets/covers/prediction.svg',
      category: 'data', meta: 'Data · Pipeline', badges: [['SOURCE', 'soon']],
      desc: 'A workflow that acquires and sorts live-fed data from probability-based sites and returns a likelihood range for the unseen outcome — the "heavy data addiction" made into a pipeline.',
      chips: ['Data pipeline', 'Scraping'],
      repo: GH + 'prediction-machination', live: null
    },
    {
      slug: 'productintel', name: 'Product Intel Wizard', cover: 'assets/covers/productintel.svg',
      category: 'data', meta: 'Tool · Intelligence', badges: [['MIT', 'soon']],
      desc: 'A product-intelligence wizard for reading a market clearly — the research muscle behind the client work, packaged as a reusable tool.',
      chips: ['JavaScript', 'CSS'],
      repo: GH + 'product-intel-wizard', live: null
    },
    {
      slug: 'jarvis', name: 'JARVIS', cover: 'assets/covers/jarvis.svg',
      category: 'data', meta: 'AI · Framework', badges: [['SOURCE', 'soon']],
      desc: 'A prompt-engineering framework — 100 crafted master prompts organised in a "spellbook" system — toward an assistant that has live, in-context access to the machine it runs on.',
      chips: ['Prompt engineering', 'AI'],
      repo: GH + 'JARVIS', live: null
    }
  ];

  var FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'client', label: 'Client work' },
    { id: 'data', label: 'Data & AI' },
    { id: 'concept', label: 'Concept' }
  ];

  var ICON_GH = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 4.6 22.4c.6.1.8-.25.8-.56v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4 1 .1-.7.4-1.2.7-1.5-2.6-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1 .8 2.1v3.2c0 .3.2.66.8.55A11.5 11.5 0 0 0 12 .5Z"/></svg>';
  var ICON_EXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function cardHTML(p) {
    var badges = p.badges.map(function (b) {
      return '<span class="badge badge--' + b[1] + ' badge--sm">' + esc(b[0]) + '</span>';
    }).join('');
    var chips = p.chips.map(function (c) { return '<span class="pill">' + esc(c) + '</span>'; }).join('');
    var links = '';
    if (p.repo) links += '<a href="' + p.repo + '" target="_blank" rel="noopener">' + ICON_GH + ' code</a>';
    else links += '<span class="disabled">' + ICON_GH + ' private</span>';
    if (p.live) links += '<a href="' + p.live + '" target="_blank" rel="noopener">' + ICON_EXT + ' live</a>';
    return '' +
      '<article class="pf-card reveal" data-category="' + p.category + '">' +
        '<div class="pf-card__cover"><img src="' + p.cover + '" alt="' + esc(p.name) + '" loading="lazy">' +
          '<div class="pf-card__badges">' + badges + '</div></div>' +
        '<div class="pf-card__body">' +
          '<div class="pf-card__meta">' + esc(p.meta) + '</div>' +
          '<div class="pf-card__title"><h3>' + esc(p.name) + '</h3></div>' +
          '<p class="pf-card__desc">' + esc(p.desc) + '</p>' +
          '<div class="pf-card__chips">' + chips + '</div>' +
          '<div class="pf-card__links">' + links + '</div>' +
        '</div>' +
      '</article>';
  }

  function counts() {
    var c = { all: PROJECTS.length };
    PROJECTS.forEach(function (p) { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('pf-grid');
    var bar = document.getElementById('pf-filters');
    if (!grid || !bar) return;

    var c = counts();
    bar.innerHTML = FILTERS.map(function (f, i) {
      return '<button type="button" data-filter="' + f.id + '"' + (i === 0 ? ' class="is-active"' : '') +
        '>' + f.label + ' <span class="count">' + (c[f.id] || 0) + '</span></button>';
    }).join('');
    grid.innerHTML = PROJECTS.map(cardHTML).join('');

    bar.addEventListener('click', function (ev) {
      var btn = ev.target.closest('button');
      if (!btn) return;
      var f = btn.getAttribute('data-filter');
      Array.prototype.forEach.call(bar.children, function (b) { b.classList.toggle('is-active', b === btn); });
      Array.prototype.forEach.call(grid.children, function (card) {
        card.classList.toggle('is-hidden', f !== 'all' && card.getAttribute('data-category') !== f);
      });
    });

    // reveal-on-scroll
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px' });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    }
  });
})();
