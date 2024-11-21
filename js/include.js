// Function to include an external HTML file into a placeholder
function includeHTML(file, elementId) {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error(error));
  }
  
  // Include navbar and footer
  document.addEventListener("DOMContentLoaded", () => {
    includeHTML('../components/navbar.html', 'navbar-placeholder');
    includeHTML('../components/footer.html', 'footer-placeholder');
  });
  