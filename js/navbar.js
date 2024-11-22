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
  