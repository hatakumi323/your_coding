// results
new Swiper( '.swiper-container', {
  speed: 400,
  spaceBetween: 40,
  width: 400,
  loop: true,
  loopedSlides: 6,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
      width: 274,
    }
  }
});
