import{K as k,u as h,h as y,m as S,c as j}from"../../assets/update-local-storage-counter-CAwkdD6p.js";function $(l){return l.map((_,d)=>{const{id:a,discount:r,price:s,oldPrice:p,title:b,img:{png:u,webp:g}}=_;return`
      <li class="basket-main__list-item" data-id="${a}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${g}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${u}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${b}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${s} <span>₴</span></p>
              ${r?`<p class="basket-main__list-price-piece_old js-old-price" data-old-price="${p}">${p} <span>₴</span></p>`:""}
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
        </li>`})}function v(){return`
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
      </li>`}function q(){const l=document.querySelector(".js-basket-card-list"),_=document.querySelector(".js-title-shopping-list"),d=document.querySelector(".js-order-total-price"),a=document.querySelector(".js-goods-price"),r=document.querySelector(".js-discount-price");let s=JSON.parse(localStorage.getItem(k))??[];function p(t){t.length?(l.innerHTML=$(t).join(""),_.classList.remove("basket-main__continue-shopping-list_hidden")):(l.innerHTML=v(),_.classList.add("basket-main__continue-shopping-list_hidden"))}p(s),l.addEventListener("click",b);function b({target:t,type:e}){t.classList.contains("js-remove-card")&&x(t),t.closest(".js-basket-btn-increment")?g(t):t.closest(".js-basket-btn-decrement")&&C(t)}function u(t){let e=0,n=0;t.forEach(i=>{e+=i.oldPrice,n+=i.price}),d.textContent=`${n} ₴`,a.textContent=`${e} ₴`,r.textContent=`${e-n} ₴`}u(s);function g(t){const e=t.closest(".basket-main__list-item");let n=e.querySelector(".js-basket-amount"),i=e.querySelector(".js-current-price"),m=e.querySelector(".js-old-price")?e.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,c=+n.textContent;const o=+i.dataset.price;c>=10||(n.textContent=c+=1,i.textContent=`${o*c} ₴`,a.textContent=`${parseInt(a.textContent)+Number(m)} ₴`,d.textContent=`${parseInt(d.textContent)+o} ₴`,r.textContent=`${parseInt(r.textContent)+(Number(m)-o)} ₴`)}function C(t){const e=t.closest(".basket-main__list-item");let n=e.querySelector(".js-basket-amount"),i=e.querySelector(".js-current-price"),m=e.querySelector(".js-old-price")?e.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,c=+n.textContent;const o=+i.dataset.price;c<=1||(n.textContent=c-=1,i.textContent=`${o*c} ₴`,a.textContent=`${parseInt(a.textContent)-Number(m)} ₴`,d.textContent=`${parseInt(d.textContent)-o} ₴`,r.textContent=`${parseInt(r.textContent)-(Number(m)-o)} ₴`)}function x(t){const e=t.closest(".basket-main__list-item"),n=e.dataset.id;e.remove(),s=s.filter(({id:i})=>i!==n),localStorage.setItem(k,JSON.stringify(s)),h(),u(s),f(),s.length||(l.innerHTML=v())}window.addEventListener("storage",f);function f(){s=JSON.parse(localStorage.getItem(k))??[],h(),p(s),u(s)}}document.addEventListener("DOMContentLoaded",()=>{y(),S(),j(),q(),h()});
//# sourceMappingURL=basket.js.map
