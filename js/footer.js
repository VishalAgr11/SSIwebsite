// Set the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  
    // Handle newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      if (name && email) {
        alert(`Thank you, ${name}, for subscribing with ${email}!`);
        newsletterForm.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  });
  