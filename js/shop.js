document.querySelectorAll('.card').forEach((card) => {
    const images = card.querySelectorAll('.carousel-image');
    const dots = card.querySelectorAll('.dot');
    let currentIndex = 0;
    let intervalId;
  
   
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
          img.classList.add('active');
          dots[i].classList.add('active');
        }
      });
    }
  
    function startCarousel() {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }, 3000);
    }
  
    function stopCarousel() {
      clearInterval(intervalId);
    }
  
    card.addEventListener('mouseenter', () => {
      startCarousel();
    });
  
    card.addEventListener('mouseleave', () => {
      stopCarousel();
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
      });
    });
  
    showImage(currentIndex);
  });
  