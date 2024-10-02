import{K as k,u as h,h as x,m as C,c as $}from"../../assets/update-local-storage-counter-CAwkdD6p.js";function q(r){return r.map((o,l)=>{const{id:c,discount:m,price:s,oldPrice:d,title:g,img:{png:p,webp:_}}=o;return`
      <li class="basket-main__list-item" data-id="${c}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${_}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${p}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${g}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${s} <span>₴</span></p>
              ${m?`<p class="basket-main__list-price-piece_old js-old-price" data-old-price="${d}">${d} <span>₴</span></p>`:""}
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
      </li>`}function w(){const r=document.querySelector(".js-basket-card-list"),o=document.querySelector(".js-title-shopping-list"),l=document.querySelector(".js-order-total-price"),c=document.querySelector(".js-goods-price"),m=document.querySelector(".js-discount-price");let s=JSON.parse(localStorage.getItem(k))??[];function d(t){t.length?(r.innerHTML=q(t).join(""),o.style.display="flex"):(r.innerHTML=y(),o.style.display="none")}d(s),r.addEventListener("click",g);function g({target:t,type:e}){t.classList.contains("js-remove-card")&&S(t),t.closest(".js-basket-btn-increment")?v(t):t.closest(".js-basket-btn-decrement")&&j(t)}function p(t){let e=0,n=0;t.forEach(i=>{e+=i.oldPrice,n+=i.price}),l.textContent=`${n} ₴`,c.textContent=`${e} ₴`,m.textContent=`${e-n} ₴`}p(s);let _=parseInt(l.textContent);parseInt(m.textContent);let f=parseInt(c.textContent);function v(t){const e=t.closest(".basket-main__list-item");let n=e.querySelector(".js-basket-amount"),i=e.querySelector(".js-current-price"),b=e.querySelector(".js-old-price")?e.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price;console.log(b);let a=+n.textContent;const u=+i.dataset.price;a>=10||(n.textContent=a+=1,i.textContent=`${u*a} ₴`,l.textContent=`${_+=u} ₴`,c.textContent=`${f+=Number(b)} ₴`)}function j(t){const e=t.closest(".basket-main__list-item");let n=e.querySelector(".js-basket-amount"),i=e.querySelector(".js-current-price"),b=e.querySelector(".js-old-price")?e.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,a=+n.textContent;const u=+i.dataset.price;a<=1||(n.textContent=a-=1,i.textContent=`${u*a} ₴`,l.textContent=`${_-=u} ₴`,c.textContent=`${f-=Number(b)} ₴`)}function S(t){const e=t.closest(".basket-main__list-item"),n=e.dataset.id;e.remove(),s=s.filter(({id:i})=>i!==n),localStorage.setItem(k,JSON.stringify(s)),h(),p(s),s.length||(r.innerHTML=y(),o.style.display="none")}window.addEventListener("storage",()=>{s=JSON.parse(localStorage.getItem(k))??[],h(),d(s),p(s)})}document.addEventListener("DOMContentLoaded",()=>{x(),C(),$(),w(),h()});
//# sourceMappingURL=basket.js.map
