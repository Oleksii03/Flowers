import { getCardData } from '../../utils/mixins';
import { updateLocalStorageCounter } from '../../utils/update-local-storage-counter';
import { KEY_BASKET, KEY_FAVORITE } from '../../utils/constants';
import { calculateTotalBasket } from '../../partials/calculateTotalBasket';
// import { updateHeartStatus } from '../../partials/updateHeartStatus';

export function addToLocalStorage() {
  const mainContainer = document.querySelector('.js-main-container');
  // ---/-refs-------

  let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
  let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

  // ----handlers-------
  mainContainer.addEventListener('click', addProduct);

  function addProduct({ target }) {
    if (target.classList.contains('js-basket')) {
      addProductToBasket(target);
    }

    if (target.tagName === 'use') {
      addProductToFavorite(target);
    }
  }

  // ---add-product-to-basket-------
  function addProductToBasket(target) {
    const cardData = getCardData(target);
    const inStorage = basketArr.some(({ id }) => id === cardData.id);

    if (inStorage) return;

    basketArr.push(cardData);
    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));

    updateLocalStorageCounter();
    calculateTotalBasket();
  }

  // ---add-product-to-favorite-------
  function addProductToFavorite(target) {
    let targetEl = target.closest('.js-favorite');
    if (!targetEl) return;

    favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

    if (!targetEl.classList.contains('slide-stock__content-top-favorite_active')) {
      targetEl.classList.add('slide-stock__content-top-favorite_active');
      const cardData = getCardData(target);

      const inStorage = favoriteArr.some(({ id }) => id === cardData.id);

      if (inStorage) return;

      favoriteArr.push(cardData);
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));

      updateLocalStorageCounter();
    } else {
      targetEl.classList.remove('slide-stock__content-top-favorite_active');
      const targetElId = targetEl.closest('.js-main-swiper-slide').dataset.id;
      favoriteArr = favoriteArr.filter(({ id }) => id !== targetElId);
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));

      updateLocalStorageCounter();
    }
  }

  // ---update-selected-counter-------
  updateLocalStorageCounter();

  // ---set-favorite-status-------
  addEventListener('load', () => {
    const allSlides = document.querySelectorAll('.js-main-swiper-slide');

    favoriteArr.forEach(({ id }) => {
      [...allSlides].forEach(slide => {
        if (slide.dataset.id === id) {
          slide
            .querySelector('.js-favorite')
            .classList.add('slide-stock__content-top-favorite_active');
        }
      });
    });
  });

  // --updateLocalStorage--
  window.addEventListener('storage', () => {
    basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
    updateLocalStorageCounter();
    calculateTotalBasket();
  });
}
