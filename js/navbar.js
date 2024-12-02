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

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle navbar links visibility
  hamburger.addEventListener('click', function() {
    navbarLinks.classList.toggle('show');
  });

  // Toggle dropdown visibility when clicking on the dropdown parent
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
      // Prevent click from propagating to navbarLinks click handler
      event.stopPropagation();
      
      // Toggle dropdown visibility
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.classList.toggle('show');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!navbarLinks.contains(event.target) && !hamburger.contains(event.target)) {
      dropdowns.forEach(function(dropdown) {
        dropdown.querySelector('.dropdown-content').classList.remove('show');
      });
    }
  });
});
