/* ==========================================================================
   NUMIDEA LABS — layout switcher + per-layout behaviors (vanilla JS, no deps)
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------- shared project data ---------------- */
  var PROJECTS = {
    almaflow: {
      name: 'almaflowclim.fr', status: 'LIVE', live: true,
      meta: 'industrial · France · 2025', cat: 'web', cover: 'assets/covers/almaflow.svg',
      problem: 'An HVAC contractor invisible online — every quote request arriving by phone, or not at all.',
      built: 'A fast zero-dependency site engineered around one job: converting visits into quote requests. SEO, responsive, deployed.',
      result: 'In production at almaflowclim.fr — inbound quote requests arrive on their own.',
      stack: 'HTML/CSS/JS · SEO · Cloudflare', next: 'alliance', nextName: 'Alliance Travel'
    },
    alliance: {
      name: 'Alliance Travel', status: 'SOON', live: false,
      meta: 'travel · BBA · 2026', cat: 'brand', cover: 'assets/covers/alliance.svg',
      problem: 'A travel agency on WhatsApp chaos — no brand, no funnel, no idea which offers the market wanted.',
      built: 'Brand, booking funnel, and a Schengen-visa market strategy grounded in 544,634 analyzed visa requests.',
      result: 'A complete growth system, ready for launch.',
      stack: 'brand + funnel · market intelligence · FR/AR', next: 'cherfia', nextName: 'Doctor Cherfia'
    },
    cherfia: {
      name: 'Doctor Cherfia Clinic', status: 'SOON', live: false,
      meta: 'healthcare · Next.js · doctorcherfia.dz', cat: 'web', cover: 'assets/covers/cherfia.svg',
      problem: 'A clinic whose appointments lived on paper and phone calls — patients had no way to book, check, or trust online.',
      built: 'A booking-ready clinic platform on Next.js: services, practitioners, and an appointment flow designed for patients of every age.',
      result: 'Launch-ready — labeled Soon until the day it goes live. We never fake a Live badge.',
      stack: 'Next.js · React · Vercel', next: 'hammasat', nextName: 'Hamma Sat'
    },
    hammasat: {
      name: 'Hamma Sat IPTV', status: 'SOON', live: false,
      meta: 'streaming commerce · hammasat.tv', cat: 'commerce', cover: 'assets/covers/hammasat.svg',
      problem: 'A streaming vendor selling entirely through DMs — no catalogue, no checkout, everything typed by hand.',
      built: 'A storefront built around how Algerians actually buy: browse the catalogue, then confirm and pay through WhatsApp checkout.',
      result: 'Launch-ready — storefront complete, awaiting the go-live.',
      stack: 'PWA · WhatsApp checkout', next: 'etoile', nextName: "Étoile de l'Est"
    },
    etoile: {
      name: "Étoile de l'Est", status: 'SOON', live: false,
      meta: 'retail · PWA · etoile-est.app', cat: 'commerce', cover: 'assets/covers/etoile.svg',
      problem: 'Retail on unreliable connections — a normal web shop dies the moment the network does.',
      built: 'An offline-first progressive web app on Supabase: browse, queue orders, sync when the signal returns.',
      result: 'Launch-ready — offline mode tested, awaiting content.',
      stack: 'PWA · Supabase', next: 'almaflow', nextName: 'almaflowclim.fr'
    }
  };

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function setBadge(el, p) {
    el.textContent = p.status;
    el.classList.toggle('badge--live', p.live);
    el.classList.toggle('badge--soon', !p.live);
  }

  /* ---------------- layout switcher ---------------- */
  var LAYOUTS = ['2a', '2b', '2c', '2d'];
  function setLayout(l, save) {
    if (LAYOUTS.indexOf(l) === -1) l = '2a';
    document.documentElement.setAttribute('data-layout', l);
    $$('.lswitch button').forEach(function (b) {
      var on = b.getAttribute('data-set-layout') === l;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    if (save) {
      try { localStorage.setItem('numidea-layout', l); } catch (e) {}
      window.scrollTo({ top: 0 });
    }
  }
  $$('.lswitch button').forEach(function (b) {
    b.addEventListener('click', function () { setLayout(b.getAttribute('data-set-layout'), true); });
  });
  setLayout(document.documentElement.getAttribute('data-layout') || '2a', false);

  /* ---------------- forms → prefilled mailto (front-end only) ---------------- */
  $$('form[data-preview-form]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var fields = $$('input, textarea', form).map(function (i) {
        return (i.placeholder || i.name) + ': ' + i.value;
      }).join('\n');
      location.href = 'mailto:hello@numidealabs.com'
        + '?subject=' + encodeURIComponent('Free Preview request')
        + '&body=' + encodeURIComponent(fields + '\n\n— sent from numidealabs landing');
    });
  });

  /* ==========================================================================
     2A — featured rotation, case modal, services accordion, CV accordion
     ========================================================================== */
  var aFeats = ['almaflow', 'alliance', 'cherfia'];
  var aFeatIndex = 0;
  var aTimer = null;
  var aModalKey = null;

  function aRenderFeature() {
    var key = aFeats[aFeatIndex];
    var p = PROJECTS[key];
    $$('.a-feature__layer').forEach(function (layer, i) {
      layer.classList.toggle('is-on', i === aFeatIndex);
    });
    $('#a-feat-name').textContent = p.name;
    setBadge($('#a-feat-badge'), p);
    $$('.a-featchips button').forEach(function (b, i) {
      b.classList.toggle('is-active', i === aFeatIndex);
    });
  }
  function aPick(i) {
    if (aTimer) { clearInterval(aTimer); aTimer = null; } // manual pick stops rotation for good
    aFeatIndex = i;
    aRenderFeature();
  }
  if ($('.a-feature')) {
    $$('.a-featchips button').forEach(function (b, i) {
      b.addEventListener('click', function () { aPick(i); });
    });
    aTimer = setInterval(function () {
      if (aModalKey !== null) return; // paused while the case modal is open
      aFeatIndex = (aFeatIndex + 1) % aFeats.length;
      aRenderFeature();
    }, 6000);
    aRenderFeature();
  }

  var aModal = $('#a-modal');
  function aOpenModal(key) {
    var p = PROJECTS[key];
    aModalKey = key;
    $('#a-modal-name').textContent = p.name;
    setBadge($('#a-modal-badge'), p);
    $('#a-modal-meta').textContent = p.meta;
    $('#a-modal-shot').src = p.cover;
    $('#a-modal-shot').alt = p.name;
    $('#a-modal-problem').textContent = p.problem;
    $('#a-modal-built').textContent = p.built;
    $('#a-modal-result').textContent = p.result;
    $('#a-modal-stack').textContent = p.stack;
    aModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function aCloseModal() {
    aModalKey = null;
    aModal.hidden = true;
    document.body.style.overflow = '';
  }
  if (aModal) {
    $$('[data-open-case]').forEach(function (el) {
      el.addEventListener('click', function () { aOpenModal(el.getAttribute('data-open-case')); });
    });
    aModal.addEventListener('click', function (ev) { if (ev.target === aModal) aCloseModal(); });
    $('#a-modal-close').addEventListener('click', aCloseModal);
    $('#a-modal-next').addEventListener('click', function () { aOpenModal(PROJECTS[aModalKey].next); });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && !aModal.hidden) aCloseModal();
    });
  }

  $$('.a-fam').forEach(function (card) {
    card.addEventListener('click', function () {
      var open = card.classList.contains('is-open');
      $$('.a-fam').forEach(function (c) {
        c.classList.remove('is-open');
        $('.accordion', c).style.maxHeight = '0px';
        $('.a-fam__cta', c).textContent = 'see the catalogue ↓';
      });
      if (!open) {
        card.classList.add('is-open');
        $('.accordion', card).style.maxHeight = '400px';
        $('.a-fam__cta', card).textContent = 'close ↑';
      }
    });
  });

  function bindCvToggle(btnSel, panelSel, maxPx) {
    var btn = $(btnSel), panel = $(panelSel);
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = panel.style.maxHeight && panel.style.maxHeight !== '0px';
      panel.style.maxHeight = open ? '0px' : maxPx + 'px';
      btn.textContent = open ? btn.getAttribute('data-closed-label') : btn.getAttribute('data-open-label');
    });
  }
  bindCvToggle('#a-cv-toggle', '#a-cv-panel', 900);
  bindCvToggle('#c-cv-toggle', '#c-cv-panel', 600);

  /* ==========================================================================
     2B — scroll progress bar
     ========================================================================== */
  var bFill = $('.b-progress__fill');
  if (bFill) {
    window.addEventListener('scroll', function () {
      if (document.documentElement.getAttribute('data-layout') !== '2b') return;
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bFill.style.width = (max > 0 ? Math.min(100, Math.round((h.scrollTop / max) * 100)) : 0) + '%';
    }, { passive: true });
  }

  /* ==========================================================================
     2C — filters + case panel
     ========================================================================== */
  var cSel = 'almaflow';
  function cRenderCase(scroll) {
    var p = PROJECTS[cSel];
    $('#c-case-name').textContent = p.name;
    setBadge($('#c-case-badge'), p);
    $('#c-case-meta').textContent = p.meta;
    $('#c-case-problem').textContent = p.problem;
    $('#c-case-built').textContent = p.built;
    $('#c-case-result').textContent = p.result;
    $('#c-case-stack').textContent = p.stack;
    $('#c-case-next').textContent = 'next case: ' + p.nextName + ' →';
    if (scroll) {
      var el = $('#c-case');
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }
  }
  if ($('#c-case')) {
    $$('[data-select-case]').forEach(function (el) {
      el.addEventListener('click', function () {
        cSel = el.getAttribute('data-select-case');
        cRenderCase(true);
      });
    });
    $('#c-case-next').addEventListener('click', function () {
      cSel = PROJECTS[cSel].next;
      cRenderCase(true);
    });
    $$('.c-filters button').forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.getAttribute('data-filter');
        $$('.c-filters button').forEach(function (x) { x.classList.toggle('is-active', x === b); });
        $$('.c-cell').forEach(function (cell) {
          var key = cell.getAttribute('data-select-case');
          cell.classList.toggle('is-hidden', f !== 'all' && PROJECTS[key].cat !== f);
        });
      });
    });
    cRenderCase(false);
  }

  /* ==========================================================================
     2D — scrollspy on the identity rail
     ========================================================================== */
  var dLinks = $$('.d-rail__nav a');
  if (dLinks.length && 'IntersectionObserver' in window) {
    var dObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        dLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['d-plates', 'd-services', 'd-method', 'd-contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) dObs.observe(el);
    });
  }
})();
