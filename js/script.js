// results
new Swiper( '.swiper-container', {
  speed: 400,
  spaceBetween: 40,
  width: 400,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  loopedSlides: 6,
  slidesPerView: 1.5,
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
