import{K as g,u as k,g as y,f as j,h as $,m as q,c as w,r as L}from"../../assets/mixins-BXRfE859.js";import{g as P}from"../../assets/vendor-CWWLBHNg.js";function E(r){return r.map((u,o)=>{const{id:c,discount:l,price:n,oldPrice:e,title:d,img:{png:h,webp:_}}=u;return`
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
            <h3 class="basket-main__list-title">${d}</h3>

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
      </li>`}function I(){const r=document.querySelector(".js-basket-card-list"),u=document.querySelector(".js-title-shopping-list"),o=document.querySelector(".js-order-total-price"),c=document.querySelector(".js-goods-price"),l=document.querySelector(".js-discount-price"),n=document.querySelector(".js-remove-basket-all");let e=JSON.parse(localStorage.getItem(g))??[];function d(t){t.length?(r.innerHTML=E(t).join(""),u.classList.remove("basket-main__continue-shopping-list_hidden"),n.classList.remove("basket-main__content-remove-all_hidden")):(r.innerHTML=v(),u.classList.add("basket-main__continue-shopping-list_hidden"),setTimeout(()=>{n.classList.add("basket-main__content-remove-all_hidden")},1500))}d(e),r.addEventListener("click",h);function h({target:t,type:s}){t.classList.contains("js-remove-card")&&S(t),t.closest(".js-basket-btn-increment")?C(t):t.closest(".js-basket-btn-decrement")&&x(t)}function _(t){let s=0,a=0;t.forEach(i=>{s+=i.oldPrice,a+=i.price}),o.textContent=`${a} ₴`,c.textContent=`${s} ₴`,l.textContent=`${s-a} ₴`}_(e);function C(t){const s=t.closest(".basket-main__list-item");let a=s.querySelector(".js-basket-amount"),i=s.querySelector(".js-current-price"),b=s.querySelector(".js-old-price")?s.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,m=+a.textContent;const p=+i.dataset.price;m>=10||(a.textContent=m+=1,i.textContent=`${p*m} ₴`,c.textContent=`${parseInt(c.textContent)+Number(b)} ₴`,o.textContent=`${parseInt(o.textContent)+p} ₴`,l.textContent=`${parseInt(l.textContent)+(Number(b)-p)} ₴`)}function x(t){const s=t.closest(".basket-main__list-item");let a=s.querySelector(".js-basket-amount"),i=s.querySelector(".js-current-price"),b=s.querySelector(".js-old-price")?s.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,m=+a.textContent;const p=+i.dataset.price;m<=1||(a.textContent=m-=1,i.textContent=`${p*m} ₴`,c.textContent=`${parseInt(c.textContent)-Number(b)} ₴`,o.textContent=`${parseInt(o.textContent)-p} ₴`,l.textContent=`${parseInt(l.textContent)-(Number(b)-p)} ₴`)}function S(t){const s=t.closest(".basket-main__list-item"),a=s.dataset.id;s.remove(),e=e.filter(({id:i})=>i!==a),localStorage.setItem(g,JSON.stringify(e)),k(),_(e),f(),e.length||(r.innerHTML=v())}n.addEventListener("click",t=>{localStorage.removeItem(g),e=[],k(),d(e),o.textContent="0 ₴",c.textContent="0 ₴",l.textContent="0 ₴"}),window.addEventListener("storage",f);function f(){e=JSON.parse(localStorage.getItem(g))??[],k(),d(e),_(e)}}function N(r){const u=document.querySelector(".js-basket-recommendations-swiper"),o=["Recommendations"],c=[u],l=P(r);for(let n=0;n<o.length;n++){const e=o[n],d=c[n];y(l,e,d)}}document.addEventListener("DOMContentLoaded",()=>{let r=j();$(),q(),w(),I(),k(),L(),N(r)});
//# sourceMappingURL=basket.js.map
