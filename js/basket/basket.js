import{K as u,u as b,h as f,m as v,c as y}from"../../assets/update-local-storage-counter-CAwkdD6p.js";function S(a){return a.map((i,e)=>{const{id:n,discount:g,price:o,oldPrice:m,title:p,img:{png:t,webp:s}}=i;return`
      <li class="basket-main__list-item" data-id="${n}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${s}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${t}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${p}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${o} <span>₴</span></p>
              <p class="basket-main__list-price-piece_old">${m} <span>₴</span></p>
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
            data-price="${o}">
            ${o}<span> ₴</span>
            </p>
          </div>
        </li>`})}function k(){return`
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
      </li>`}const j=document.querySelector(".js-order-total-price"),x=document.querySelector(".js-goods-price"),C=document.querySelector(".js-discount-price");function _(a){let i=0,e=0;a.forEach(n=>{console.log(n),i+=n.oldPrice,e+=n.price}),j.textContent=`${e} ₴`,x.textContent=`${i} ₴`,C.textContent=`${i-e} ₴`}function w(){const a=document.querySelector(".js-basket-card-list"),i=document.querySelector(".js-title-shopping-list");let e=JSON.parse(localStorage.getItem(u))??[];_(e);function n(t){t.length?(a.innerHTML=S(t).join(""),i.style.display="flex"):(a.innerHTML=k(),i.style.display="none")}n(e),a.addEventListener("click",g);function g({target:t,type:s}){t.classList.contains("js-remove-card")&&p(t),t.closest(".js-basket-btn-increment")?o(t):t.closest(".js-basket-btn-decrement")&&m(t)}function o(t){const s=t.closest(".basket-main__list-item");let c=s.querySelector(".js-basket-amount"),r=s.querySelector(".js-current-price");const l=s.dataset.id;console.log(l);let d=+c.textContent;const h=+r.dataset.price;d>=10||(c.textContent=d+=1,r.textContent=`${h*d} ₴`)}function m(t){const s=t.closest(".basket-main__list-item");let c=s.querySelector(".js-basket-amount"),r=s.querySelector(".js-current-price"),l=+c.textContent;const d=+r.dataset.price;l<=1||(c.textContent=l-=1,r.textContent=`${d*l} ₴`)}function p(t){const s=t.closest(".basket-main__list-item"),c=s.dataset.id;s.remove(),e=e.filter(({id:r})=>r!==c),localStorage.setItem(u,JSON.stringify(e)),b(),_(e),e.length||(a.innerHTML=k(),i.style.display="none")}window.addEventListener("storage",()=>{e=JSON.parse(localStorage.getItem(u))??[],b(),n(e),_(e)})}document.addEventListener("DOMContentLoaded",()=>{f(),v(),y(),w(),b()});
//# sourceMappingURL=basket.js.map
