/**
 * HostVibe - Main JavaScript (Vanilla JS Progressive Enhancement)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navPrimary = document.querySelector('.nav-primary');

  if (menuToggle && navPrimary) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navPrimary.classList.toggle('active');
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navPrimary.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navPrimary.classList.remove('active');
        menuToggle.focus();
      }
    });
  }

  // Dynamic Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
