document.addEventListener('DOMContentLoaded', () => {
  const planet = document.querySelector('.planet-glow');

  // Subtle parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (planet) {
      planet.style.transform = `translateY(${scrollY * 0.12}px)`;
    }
  });

  // Smooth navigation scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});