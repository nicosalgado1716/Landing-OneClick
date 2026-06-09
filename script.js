/* ============================================================
   OneClick — interacciones de la landing
   ============================================================ */
(function () {
  'use strict';

  /* --- Año dinámico en el footer --- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Navbar: estado "scrolled" --- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Menú móvil --- */
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = mobile.style.display === 'flex';
      mobile.style.display = open ? 'none' : 'flex';
    });
    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { mobile.style.display = 'none'; });
    });
  }

  /* --- FAQ acordeón --- */
  document.querySelectorAll('.acc').forEach(function (acc) {
    var q = acc.querySelector('.acc__q');
    var a = acc.querySelector('.acc__a');
    q.addEventListener('click', function () {
      var isOpen = acc.classList.contains('open');
      // cierra todos
      document.querySelectorAll('.acc').forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.acc__a').style.maxHeight = null;
      });
      if (!isOpen) {
        acc.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* --- Reveal al hacer scroll --- */
  var revealEls = document.querySelectorAll(
    '.section__head, .pain, .benefit, .service, .tcard, .case, .step, .stat, .orbit-card, .solution__copy, .calendly, .acc, .final-cta__box, .video-frame--lg'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Contador animado de estadísticas --- */
  var statNums = document.querySelectorAll('.stat__num');
  function animateStat(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(0)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window && statNums.length) {
    var statIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { statIO.observe(el); });
  }

  /* --- Calendly (popup) --- */
  var CALENDLY_URL = 'https://calendly.com/oneclickcontentgroup/90min';
  document.querySelectorAll('.js-book').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // Si el widget de Calendly cargó, abrimos el popup; si no, dejamos el scroll a #agenda.
      if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
        e.preventDefault();
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      }
    });
  });

  /* --- Placeholder de video / VSL ---
     Reemplaza este handler por tu embed real (YouTube/Vimeo). */
  document.querySelectorAll('.video-frame').forEach(function (frame) {
    frame.addEventListener('click', function () {
      console.log('[OneClick] Inserta aquí tu video (YouTube/Vimeo/VSL).');
    });
  });
})();
