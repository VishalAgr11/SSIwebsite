document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  if (hamburger) { // Check if the hamburger button exists
    hamburger.addEventListener('click', () => {
      navbarLinks.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar')) {
        navbarLinks.classList.remove('show');
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('a');
    const content = dropdown.querySelector('.dropdown-content');

    // Handle dropdown toggle on click for smaller screens
    toggle.addEventListener('click', (event) => {
      if (window.innerWidth <= 576) {
        event.preventDefault();
        const isVisible = content.classList.contains('show');
        closeAllDropdowns();
        if (!isVisible) {
          content.classList.add('show');
        }
      }
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      closeAllDropdowns();
    }
  });

  // Close all dropdown menus
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach((content) => {
      content.classList.remove('show');
    });
  }
});
