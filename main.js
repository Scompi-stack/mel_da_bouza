// ============================================================
//  MEL DA BOUZA — main.js
//  Interactividad: menú móvil, scroll reveal, nav scroll
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Menú móvil ────────────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Cerrar al hacer clic en un enlace
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // ── Scroll reveal ─────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));

  // ── Nav: fondo al hacer scroll ────────────────────────────
  const nav = document.getElementById('nav-header');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(8,8,8,0.98)';
      } else {
        nav.style.background = 'rgba(13,13,13,0.92)';
      }
    }, { passive: true });
  }

});