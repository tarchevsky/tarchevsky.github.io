var swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3
      },
      1280: {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      }
  }
});

var swiper = new Swiper('.swiper-2', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3
      },
      1280: {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      }
  }
});