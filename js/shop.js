document.querySelectorAll('.card').forEach((card) => {
    const images = card.querySelectorAll('.carousel-image');
    const dots = card.querySelectorAll('.dot');
    let currentIndex = 0;
    let intervalId;
  
   
    function showImage(index) {
      if (!images || images.length === 0 || !dots || dots.length === 0) return;
      images.forEach((img, i) => {
        img.classList.remove('active');
        if (dots[i]) {
          dots[i].classList.remove('active');
        }
        if (i === index) {
          img.classList.add('active');
          if (dots[i]) {
            dots[i].classList.add('active');
          }
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
  