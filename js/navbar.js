document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active'); // Toggle active state for cross
      navbarLinks.classList.toggle('show'); // Toggle nav links
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar')) {
        hamburger.classList.remove('active'); // Remove cross state
        navbarLinks.classList.remove('show'); // Hide nav links
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
