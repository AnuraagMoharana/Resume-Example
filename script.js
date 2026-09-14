(() => {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const toast = document.querySelector('[data-toast]');
  const copyButton = document.querySelector('[data-copy-email]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateHeader = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuToggle && nav) {
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    };
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !isOpen);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2400);
  };

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const email = copyButton.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        copyButton.querySelector('.copy-label').textContent = 'Email copied';
        showToast('Email copied to clipboard');
      } catch (error) {
        showToast(`Email: ${email}`);
      }
      window.setTimeout(() => {
        const label = copyButton.querySelector('.copy-label');
        if (label) label.textContent = 'Copy email';
      }, 2400);
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
