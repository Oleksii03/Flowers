import{K as d,u as _,h as k,m as h,c as f}from"../../assets/update-local-storage-counter-CAwkdD6p.js";function v(c){return c.map((r,s)=>{const{id:o,discount:b,price:l,oldPrice:p,title:u,img:{png:t,webp:e}}=r;return`
      <li class="basket-main__list-item" data-id="${o}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${e}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${t}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${u}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${l} <span>₴</span></p>
              <p class="basket-main__list-price-piece_old">${p} <span>₴</span></p>
            </div>

            <div class="basket-main__list-amount-box">
              <button class="basket-main__list-btn js-basket-btn-decrement">
                <svg
                  class="basket-main__list-btn-icon"
                  width="9"
                  height="4">
                  <use xlink:href="#small-arrow-left"></use>
                </svg>
              </button>
              <span class="basket-main__list-amount js-basket-amount">1</span>
              <button class="basket-main__list-btn js-basket-btn-increment">
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
            <p class="list-price__price js-current-price" 
            data-price="${l}">
            ${l}<span> ₴</span>
            </p>
          </div>
        </li>`})}function g(){return`
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
      </li>`}function y(){const c=document.querySelector(".js-basket-card-list"),r=document.querySelector(".js-title-shopping-list");let s=JSON.parse(localStorage.getItem(d))??[];console.log(s);function o(t){t.length?(c.innerHTML=v(t).join(""),r.style.display="flex"):(c.innerHTML=g(),r.style.display="none")}o(s),c.addEventListener("click",b);function b({target:t,type:e}){t.classList.contains("js-remove-card")&&u(t),t.closest(".js-basket-btn-increment")?l(t):t.closest(".js-basket-btn-decrement")&&p(t)}function l(t){const e=t.closest(".basket-main__list-item");let a=e.querySelector(".js-basket-amount"),n=e.querySelector(".js-current-price"),i=+a.textContent;const m=+n.dataset.price;console.log(i),console.log(m),!(i>=10)&&(a.textContent=i+=1,n.textContent=`${m*i} ₴`)}function p(t){const e=t.closest(".basket-main__list-item");let a=e.querySelector(".js-basket-amount"),n=e.querySelector(".js-current-price"),i=+a.textContent;const m=+n.dataset.price;i<=1||(a.textContent=i-=1,n.textContent=`${m*i} ₴`)}function u(t){const e=t.closest(".basket-main__list-item"),a=e.dataset.id;e.remove(),s=s.filter(({id:n})=>n!==a),localStorage.setItem(d,JSON.stringify(s)),_(),s.length||(c.innerHTML=g(),r.style.display="none")}window.addEventListener("storage",()=>{s=JSON.parse(localStorage.getItem(d))??[],_(),o(s)})}document.addEventListener("DOMContentLoaded",()=>{k(),h(),f(),y(),_()});
//# sourceMappingURL=basket.js.map
