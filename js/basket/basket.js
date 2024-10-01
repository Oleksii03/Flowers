import{K as l,u as o,h as u,m as g,c as h}from"../../assets/update-local-storage-counter-CAwkdD6p.js";function k(t){return t.map((a,m)=>{const{id:c,discount:e,price:i,oldPrice:n,title:r,img:{png:d,webp:b}}=a;return`
      <li class="basket-main__list-item" data-id="${c}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${b}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${d}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${r}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${i} <span>₴</span></p>
              <p class="basket-main__list-price-piece_old">${n} <span>₴</span></p>
            </div>

            <div class="basket-main__list-amount-box">
              <button class="basket-main__list-btn">
                <svg
                  class="basket-main__list-btn-icon"
                  width="9"
                  height="4">
                  <use xlink:href="#small-arrow-left"></use>
                </svg>
              </button>
              <span class="basket-main__list-amount">1</span>
              <button class="basket-main__list-btn">
                <svg
                  class="basket-main__list-btn-icon"
                  width="9"
                  height="4">
                  <use xlink:href="#small-arrow-righ"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="basket-main__list-price-box list-price">
            <div class="list-price__icon-box">
              <svg
                width="18"
                height="18"
                class="list-price__icon list-price__icon_remove js-remove-card">
                <use class="js-remove-card" xlink:href="#remove-basket"></use>
              </svg>
              <svg
                width="16"
                height="14"
                class="list-price__icon list-price__icon_favorite">
                <use xlink:href="#icon-heart"></use>
              </svg>
            </div>
            <p class="list-price__price">${i} <span>₴</span></p>
          </div>
        </li>`})}function p(){return`
      <li
        class="basket-main__list-item_empty-basket list-item__empty-basket js-empty-basket-item">
        <h3 class="list-item__empty-basket-title">
          Ваш кошик порожній - додайте товари, щоб він не сумував.
        </h3>
        <img
          class="list-item__empty-basket-img"
          width="500"
          height="500"
          src="https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fempty-shopping-cart.webp?alt=media&token=3c262b31-1194-4d5e-9cc7-4c1f827f99a0"
          alt="#" />
      </li>`}let s=JSON.parse(localStorage.getItem(l))??[];function _(){const t=document.querySelector(".js-basket-card-list");document.querySelector(".js-empty-basket-item");function a(e){e.length?t.innerHTML=k(e).join(""):t.innerHTML=p()}a(s),t.addEventListener("click",m);function m({target:e}){e.classList.contains("js-remove-card")&&c(e)}function c(e){const i=e.closest(".basket-main__list-item"),n=i.dataset.id;i.remove(),s=s.filter(({id:r})=>r!==n),localStorage.setItem(l,JSON.stringify(s)),o(),s.length||(t.innerHTML=p())}}window.addEventListener("storage",()=>{s=JSON.parse(localStorage.getItem(l))??[],o(),_()});document.addEventListener("DOMContentLoaded",()=>{u(),g(),h(),_(),o()});
//# sourceMappingURL=basket.js.map
