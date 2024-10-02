import{K as k,u as h,h as x,m as $,c as q}from"../../assets/update-local-storage-counter-CAwkdD6p.js";function w(r){return r.map((_,o)=>{const{id:c,discount:b,price:s,oldPrice:l,title:g,img:{png:d,webp:u}}=_;return`
      <li class="basket-main__list-item" data-id="${c}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${u}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${d}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${g}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${s} <span>₴</span></p>
              ${b?`<p class="basket-main__list-price-piece_old js-old-price" data-old-price="${l}">${l} <span>₴</span></p>`:""}
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
            data-price="${s}">
            ${s}<span> ₴</span>
            </p>
          </div>
        </li>`})}function y(){return`
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
      </li>`}function L(){const r=document.querySelector(".js-basket-card-list"),_=document.querySelector(".js-title-shopping-list"),o=document.querySelector(".js-order-total-price"),c=document.querySelector(".js-goods-price"),b=document.querySelector(".js-discount-price");let s=JSON.parse(localStorage.getItem(k))??[];function l(t){t.length?r.innerHTML=w(t).join(""):r.innerHTML=y()}l(s),r.addEventListener("click",g);function g({target:t,type:e}){t.classList.contains("js-remove-card")&&C(t),t.closest(".js-basket-btn-increment")?S(t):t.closest(".js-basket-btn-decrement")&&j(t)}function d(t){let e=0,n=0;t.forEach(i=>{e+=i.oldPrice,n+=i.price}),o.textContent=`${n} ₴`,c.textContent=`${e} ₴`,b.textContent=`${e-n} ₴`}d(s);let u=parseInt(o.textContent),f=parseInt(c.textContent);function S(t){const e=t.closest(".basket-main__list-item");let n=e.querySelector(".js-basket-amount"),i=e.querySelector(".js-current-price"),m=e.querySelector(".js-old-price")?e.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price;console.log(m);let a=+n.textContent;const p=+i.dataset.price;a>=10||(n.textContent=a+=1,i.textContent=`${p*a} ₴`,o.textContent=`${u+=p} ₴`,c.textContent=`${f+=Number(m)} ₴`)}function j(t){const e=t.closest(".basket-main__list-item");let n=e.querySelector(".js-basket-amount"),i=e.querySelector(".js-current-price"),m=e.querySelector(".js-old-price")?e.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,a=+n.textContent;const p=+i.dataset.price;a<=1||(n.textContent=a-=1,i.textContent=`${p*a} ₴`,o.textContent=`${u-=p} ₴`,c.textContent=`${f-=Number(m)} ₴`)}function C(t){const e=t.closest(".basket-main__list-item"),n=e.dataset.id;e.remove(),s=s.filter(({id:i})=>i!==n),localStorage.setItem(k,JSON.stringify(s)),h(),d(s),v(),s.length||(r.innerHTML=y(),_.style.display="none")}window.addEventListener("storage",v);function v(){s=JSON.parse(localStorage.getItem(k))??[],h(),l(s),d(s)}}document.addEventListener("DOMContentLoaded",()=>{x(),$(),q(),L(),h()});
//# sourceMappingURL=basket.js.map
