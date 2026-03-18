const sliders = document.querySelectorAll(".slider-wrapper");

sliders.forEach(wrapper => {
  const carousel = wrapper.querySelector(".carousel");
  if (!carousel) return;

  const arrowBtns = wrapper.querySelectorAll(".arrow");
  const firstCard = carousel.querySelector(".card");
  if (!firstCard) return;

  const firstCardWidth = firstCard.offsetWidth;
  const carouselChildren = [...carousel.children];

  let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;

  const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  // Копии для бесконечного скролла
  carouselChildren.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
  carouselChildren.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  // Стрелки
  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.classList.contains("arrow-left") ? -firstCardWidth : firstCardWidth;
    });
  });

  // Drag
  const dragStart = e => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
  }
  const dragging = e => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = x - startX;
    carousel.scrollLeft = startScrollLeft - walk;
  }
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  }

  // Автопрокрутка
  const autoPlay = () => {
    timeoutId = setTimeout(() => {
      if (!wrapper.matches(":hover")) {
        carousel.scrollBy({ left: firstCardWidth, behavior: 'smooth' });
      }
      autoPlay();
    }, 3000);
  }
  autoPlay();

  // Бесконечный скролл
  const infiniteScroll = () => {
    const scrollLeft = Math.round(carousel.scrollLeft);
    if (scrollLeft <= 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition");
    } else if (scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
  }
  carousel.addEventListener("scroll", infiniteScroll);

  // События
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("touchend", dragStop);

  // Остановка автопрокрутки при наведении
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);
});