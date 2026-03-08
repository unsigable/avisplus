// HOME TOP SLIDER
const swiper = new Swiper('.smallcards-slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000, // задержка 3 секунды
    disableOnInteraction: false // не останавливать после ручного свайпа
  },

  speed: 800, // скорость анимации (по желанию)

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// HOME BOTTOM SLIDER
const swiper2 = new Swiper('.fullcards-slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  autoplay: {
    delay: 5000, // задержка 5 секунд
    disableOnInteraction: false // не останавливать после ручного свайпа
  },

  speed: 800, // скорость анимации (по желанию)

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    }
  }
});