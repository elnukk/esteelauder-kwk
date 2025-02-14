document.addEventListener('DOMContentLoaded', function() {
  // Navbar Toggle for Mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Interactive Game Form Submission
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');

  quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user selections
    const skinType = document.getElementById('skin-type').value;
    const concerns = document.getElementById('concerns').value;

    // Determine suggested product based on user input
    let suggestedProduct;
    if (skinType === 'dry' && concerns === 'hydration') {
      suggestedProduct = {
        image: 'anrserum.jpg',
        title: 'Advanced Night Repair Serum',
        description: 'Awakens deep renewal. Strengthens skin’s barrier. Intensely hydrates. Visibly evens skintone and reduces the look of lines.',
        link: '#product1'
      };
    } else if (skinType === 'oily' && concerns === 'fine-lines') {
      suggestedProduct = {
        image: 'adnr.jpg',
        title: 'Advanced Night Repair Overnight Treatment',
        description: 'Recharges skin. Helps skin look like it got 2 nights of sleep in 1. A leave-on overnight facial treatment.',
        link: '#product2'
      };
    } else {
      suggestedProduct = {
        image: 'supreme.jpg',
        title: 'Revitalizing Supreme+ Night Moisturizer',
        description: 'Boosts skin’s bounce and firmness. Improves visible signs of collagen loss.',
        link: '#product3'
      };
    }

    // Display the result
    quizResult.innerHTML = `
            <div class="result-card">
                <img src="${suggestedProduct.image}" alt="${suggestedProduct.title}">
                <h3>${suggestedProduct.title}</h3>
                <p>${suggestedProduct.description}</p>
                <a href="${suggestedProduct.link}" class="btn">See More</a>
                <p><span style="font-size: 0.8rem; font-style: italic;">Need more help or advice? Our experts are right here to answer all your beauty questions. To get personalized recommendations, click the live chat button on the bottom-right screen!</span></p>
            </div>
        `;
  });

  // TikTok Video Section Pop-up Text
  const popupText = document.querySelector('.popup-text a');
  if (popupText) {
    popupText.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(popupText.href, '_blank');
    });
  }

  // Carousel Functionality
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  let currentIndex = 0;

  function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
  }

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    function createProductItem(src, alt, title, description, link) {
      return `
              <div class="product-item">
                  <img src="${src}" alt="${alt}">
                  <h3>${title}</h3>
                  <p>${description}</p>
                  <a href="${link}" class="btn">Shop Now</a>
              </div>
          `;
    }

    function renderDesktopGallery() {
      const galleryContainer = document.getElementById('product-gallery-container');
      if (window.innerWidth >= 769) {
        galleryContainer.innerHTML = `
                  ${createProductItem('anrserum.jpg', 'Advanced Night Repair Serum', 'Advanced Night Repair Serum', 'Rejuvenate your skin overnight with this powerful serum.', '#product1')}
                  ${createProductItem('adnr.jpg', 'Advanced Night Repair Overnight Treatment', 'Advanced Night Repair Overnight Treatment', 'Deeply hydrate and repair your skin while you sleep.', '#product2')}
                  ${createProductItem('supreme.jpg', 'Revitalizing Supreme+ Night Moisturizer', 'Revitalizing Supreme+ Night Moisturizer', 'Combat signs of aging with this intensive restorative cream.', '#product3')}
              `;
      }
    }

    renderDesktopGallery();

    // Re-render the gallery on window resize
    window.addEventListener('resize', renderDesktopGallery);
  });


  // Parallax Effect
  window.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.parallax-layer');
    const scrollPosition = window.pageYOffset;

    layers.forEach((layer, index) => {
      const speed = index * 0.5;
      layer.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  });

  // Scroll-triggered Animation
  const educationItems = document.querySelectorAll('.education-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  educationItems.forEach(item => {
    observer.observe(item);
  });
});
