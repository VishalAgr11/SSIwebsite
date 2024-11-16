document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('a');
      const content = dropdown.querySelector('.dropdown-content');
  
      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const isVisible = content.style.display === 'block';
        closeAllDropdowns();
        content.style.display = isVisible ? 'none' : 'block';
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
        closeAllDropdowns();
      }
    });
  
    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('a');
      const content = dropdown.querySelector('.dropdown-content');
  
      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const isVisible = content.style.display === 'block';
        closeAllDropdowns();
        content.style.display = isVisible ? 'none' : 'block';
      });
    });
  
    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
      });
    }
  });
  