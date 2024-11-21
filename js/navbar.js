document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  if (hamburger) {
    hamburger.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent triggering the click event on the document
      navbarLinks.classList.toggle('show');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar')) {
        navbarLinks.classList.remove('show');
      }
    });
  }

  // Dropdown Menu Toggle
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('a');
    const content = dropdown.querySelector('.dropdown-content');

    if (toggle) {
      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const isVisible = content.style.display === 'block';
        closeAllDropdowns();
        content.style.display = isVisible ? 'none' : 'block';
      });
    }
  });

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach((content) => {
      content.style.display = 'none';
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      closeAllDropdowns();
    }
  });
});
