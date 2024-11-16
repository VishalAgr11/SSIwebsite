let colorIndex = 0;
const colorBlocks = document.querySelectorAll('.color-block');

// Function to update the color section and display the correct block
function updateColorSection() {
  colorBlocks.forEach((block, index) => {
    // Hide all blocks
    block.classList.remove('active');
    
    // Show the active block
    if (index === colorIndex) {
      block.classList.add('active');
    }
  });
}

// Left arrow click handler
document.querySelector('.left-arrow').addEventListener('click', function() {
  colorIndex = (colorIndex === 0) ? colorBlocks.length - 1 : colorIndex - 1;
  updateColorSection();
});

// Right arrow click handler
document.querySelector('.right-arrow').addEventListener('click', function() {
  colorIndex = (colorIndex === colorBlocks.length - 1) ? 0 : colorIndex + 1;
  updateColorSection();
});

// Automatic color block change every 8 seconds
setInterval(() => {
  colorIndex = (colorIndex === colorBlocks.length - 1) ? 0 : colorIndex + 1;
  updateColorSection();
}, 8000); // 8 seconds interval

// Initial color load
updateColorSection();


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let autoScrollInterval;
  
    const updateActiveCard = (index) => {
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };
  
    // Function to show the next card
    const showNextCard = () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateActiveCard(currentIndex);
    };
  
    // Add event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateActiveCard(currentIndex);
        resetAutoScroll(); // Reset auto-scroll timer when user interacts
      });
    });
  
    // Auto-scroll functionality
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(showNextCard, 5000); // Change card every 5 seconds
    };
  
    const resetAutoScroll = () => {
      clearInterval(autoScrollInterval); // Stop current interval
      startAutoScroll(); // Start a new interval
    };
  
    // Initialize
    updateActiveCard(currentIndex);
    startAutoScroll(); // Start auto-scrolling on page load
  });
  