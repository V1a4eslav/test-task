import Swiper, { Pagination } from "swiper";

const quizeSlider = new Swiper('.qsw__swiper', {
   modules: [Pagination],
   slidesPerView: "auto",
   spaceBetween: 20,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   breakpoints: {
      320: {
         centeredSlides: true,
      },
      480: {
         centeredSlides: false,
      }
   }
})