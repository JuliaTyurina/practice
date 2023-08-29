const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
  },
});

