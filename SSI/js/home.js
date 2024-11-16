document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-section form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Form submitted successfully!');
    });
  });
  