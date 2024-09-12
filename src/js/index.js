import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import { initSwiper } from './partials/swiper';
import { stockCard } from './pages/main/stock';
import { stockSwiper } from './partials/swiper';

document.addEventListener('DOMContentLoaded', () => {
  header();
  mobMenu();
  initSwiper();
  stockCard();
  stockSwiper();
});
