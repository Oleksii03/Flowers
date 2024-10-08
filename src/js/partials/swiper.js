import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay, Grid, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Pagination, Autoplay, Grid, Navigation]);

//========Page main================================

// swiper-Hero--------------------------------------
export function initSwiper() {
  return new Swiper('.mainHeroSwiper', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    speed: 600,
  });
}

// swiper-Stock---------------------------------
export function stockSwiper() {
  const swiperStock = new Swiper('.stock-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    grid: {
      rows: 2,
      fill: 'row',
      alignItems: 'stretch',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.stock__swiper-button-next',
      prevEl: '.stock__swiper-button-prev',
    },
  });

  updateSwiperParams(swiperStock);
  window.addEventListener('resize', () => updateSwiperParams(swiperStock));
}

// swiper-Seasonal--------------------------------
export function seasonalSwiper() {
  const swiperSeasonal = new Swiper('.seasona-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    grid: {
      rows: 2,
      fill: 'row',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.seasona__swiper-button-next',
      prevEl: '.seasona__swiper-button-prev',
    },
  });

  updateSwiperParams(swiperSeasonal);
  window.addEventListener('resize', () => updateSwiperParams(swiperSeasonal));
}

// swiper-Present--------------------------------
export function presentSwiper() {
  const swiperPresent = new Swiper('.present-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    grid: {
      rows: 2,
      fill: 'row',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.present__swiper-button-next',
      prevEl: '.present__swiper-button-prev',
    },
  });

  updateSwiperParams(swiperPresent);
  window.addEventListener('resize', () => updateSwiperParams(swiperPresent));
}

// swiper-Forum--------------------------------------
export function forumSwiper() {
  return new Swiper('.forum-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    speed: 600,
  });
}

//========Page basket================================

// basket-recommendations---------------------------
export function recommendationsSwiper() {
  const swiperRecommendations = new Swiper('.recommendations-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,

    grid: {
      alignItems: 'stretch',
    },

    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.recommendations__button-prev',
      prevEl: '.recommendations__button-next',
    },
  });

  updateSwiperParams(swiperRecommendations);
  window.addEventListener('resize', () => updateSwiperParams(swiperRecommendations));
}

// favorite---------------------------
export function modalFavoriteSwiper() {
  const swiperRecommendations = new Swiper('.modal-favorite-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.modal-favorite__button-prev',
      prevEl: '.modal-favorite__button-next',
    },
  });

  updateSwiperParams(swiperRecommendations);
  window.addEventListener('resize', () => updateSwiperParams(swiperRecommendations));
}
// --update---Swiper---Params-----------------------

function updateSwiperParams(swiper) {
  if (window.innerWidth >= 320) {
    swiper.params.slidesPerView = 2;
    swiper.params.spaceBetween = 9;
  }

  if (window.innerWidth >= 768) {
    swiper.params.slidesPerView = 3;
    swiper.params.spaceBetween = 14;
  }

  if (window.innerWidth >= 1024) {
    swiper.params.slidesPerView = 4;
    swiper.params.spaceBetween = 20;
  }

  swiper.update();
}
