import{K as g,u as k,c as v,g as j,f as $,h as L,m as w,a as q,r as P,b as E,d as I,s as T}from"../../assets/searchProduct-BInsH4ej.js";import{g as N}from"../../assets/vendor-CWWLBHNg.js";function M(a){return a.map((u,o)=>{const{id:c,discount:l,price:n,oldPrice:e,title:m,img:{png:h,webp:_}}=u;return`
      <li class="basket-main__list-item" data-id="${c}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${_}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${h}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${m}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${n} <span>₴</span></p>
              ${l?`<p class="basket-main__list-price-piece_old js-old-price" data-old-price="${e}">${e} <span>₴</span></p>`:""}
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
            data-price="${n}">
            ${n}<span> ₴</span>
            </p>
          </div>
        </li>`})}function C(){return`
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
      </li>`}function F(){const a=document.querySelector(".js-basket-card-list"),u=document.querySelector(".js-title-shopping-list"),o=document.querySelector(".js-order-total-price"),c=document.querySelector(".js-goods-price"),l=document.querySelector(".js-discount-price"),n=document.querySelector(".js-remove-basket-all");let e=JSON.parse(localStorage.getItem(g))??[];function m(t){t.length?(a.innerHTML=M(t).join(""),u.classList.remove("basket-main__continue-shopping-list_hidden"),n.classList.remove("basket-main__content-remove-all_hidden")):(a.innerHTML=C(),u.classList.add("basket-main__continue-shopping-list_hidden"),setTimeout(()=>{n.classList.add("basket-main__content-remove-all_hidden"),n.classList.remove("basket-main__content-remove-all_active")},2e3))}m(e),a.addEventListener("click",h);function h({target:t,type:s}){t.classList.contains("js-remove-card")&&y(t),t.closest(".js-basket-btn-increment")?x(t):t.closest(".js-basket-btn-decrement")&&S(t)}function _(t){let s=0,r=0;t.forEach(i=>{s+=i.oldPrice,r+=i.price}),o.textContent=`${r} ₴`,c.textContent=`${s} ₴`,l.textContent=`${s-r} ₴`}_(e);function x(t){const s=t.closest(".basket-main__list-item");let r=s.querySelector(".js-basket-amount"),i=s.querySelector(".js-current-price"),b=s.querySelector(".js-old-price")?s.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,d=+r.textContent;const p=+i.dataset.price;d>=10||(r.textContent=d+=1,i.textContent=`${p*d} ₴`,c.textContent=`${parseInt(c.textContent)+Number(b)} ₴`,o.textContent=`${parseInt(o.textContent)+p} ₴`,l.textContent=`${parseInt(l.textContent)+(Number(b)-p)} ₴`)}function S(t){const s=t.closest(".basket-main__list-item");let r=s.querySelector(".js-basket-amount"),i=s.querySelector(".js-current-price"),b=s.querySelector(".js-old-price")?s.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,d=+r.textContent;const p=+i.dataset.price;d<=1||(r.textContent=d-=1,i.textContent=`${p*d} ₴`,c.textContent=`${parseInt(c.textContent)-Number(b)} ₴`,o.textContent=`${parseInt(o.textContent)-p} ₴`,l.textContent=`${parseInt(l.textContent)-(Number(b)-p)} ₴`)}function y(t){const s=t.closest(".basket-main__list-item"),r=s.dataset.id;s.remove(),e=e.filter(({id:i})=>i!==r),localStorage.setItem(g,JSON.stringify(e)),k(),_(e),f(),e.length||(a.innerHTML=C())}n.addEventListener("click",t=>{t.currentTarget.classList.add("basket-main__content-remove-all_active"),localStorage.removeItem(g),e=[],k(),m(e),o.textContent="0 ₴",c.textContent="0 ₴",l.textContent="0 ₴",v()}),window.addEventListener("storage",f);function f(t){e=JSON.parse(localStorage.getItem(g))??[],k(),m(e),_(e),v()}}function A(a){const u=document.querySelector(".js-basket-recommendations-swiper"),o=["Recommendations"],c=[u],l=N(a);for(let n=0;n<o.length;n++){const e=o[n],m=c[n];j(l,e,m)}}document.addEventListener("DOMContentLoaded",()=>{let a=$();L(),w(),q(),F(),k(),P(),A(a),v(),E(),I(),T(a)});
//# sourceMappingURL=basket.js.map
