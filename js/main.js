(() => {
  'use strict';

  const THEME_KEY = 'theme-preference';
  const doc = document.documentElement;

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      doc.classList.add('dark');
    } else {
      doc.classList.remove('dark');
    }
    updateToggleIcon(theme);
  }

  function currentTheme() {
    return doc.classList.contains('dark') ? 'dark' : 'light';
  }

  function updateToggleIcon(theme) {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const isDark = theme === 'dark';
    btn.setAttribute('aria-label', isDark ? 'Attiva tema chiaro' : 'Attiva tema scuro');
    btn.setAttribute('aria-pressed', String(isDark));
    btn.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
  }

  // Apply immediately to prevent flash
  const initialTheme = getStoredTheme() || getSystemTheme();
  applyTheme(initialTheme);

  // Listen for OS theme changes when no manual preference
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!getStoredTheme()) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });

  /* ===== DOM Ready ===== */
  document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      updateToggleIcon(currentTheme());
      toggleBtn.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
      });
    }

    // Sticky header shadow
    const header = document.querySelector('.header');
    if (header) {
      const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Mobile menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = !mobileNav.hidden;
        mobileNav.hidden = isOpen;
        mobileBtn.setAttribute('aria-expanded', String(!isOpen));
      });

      mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileNav.hidden = true;
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileNav.hidden) {
          mobileNav.hidden = true;
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.focus();
        }
      });
    }

    // Smooth scroll with focus management
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  });
})();
