import{K as k,u as h,g as S,f as y,h as j,m as $,c as w,r as q}from"../../assets/mixins-jrSAJQO9.js";import{g as L}from"../../assets/vendor-CWWLBHNg.js";function P(a){return a.map((m,r)=>{const{id:c,discount:o,price:t,oldPrice:l,title:u,img:{png:_,webp:g}}=m;return`
      <li class="basket-main__list-item" data-id="${c}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${g}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${_}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${u}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${t} <span>₴</span></p>
              ${o?`<p class="basket-main__list-price-piece_old js-old-price" data-old-price="${l}">${l} <span>₴</span></p>`:""}
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
            data-price="${t}">
            ${t}<span> ₴</span>
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
      </li>`}function E(){const a=document.querySelector(".js-basket-card-list"),m=document.querySelector(".js-title-shopping-list"),r=document.querySelector(".js-order-total-price"),c=document.querySelector(".js-goods-price"),o=document.querySelector(".js-discount-price");let t=JSON.parse(localStorage.getItem(k))??[];function l(e){e.length?(a.innerHTML=P(e).join(""),m.classList.remove("basket-main__continue-shopping-list_hidden")):(a.innerHTML=C(),m.classList.add("basket-main__continue-shopping-list_hidden"))}l(t),a.addEventListener("click",u);function u({target:e,type:s}){e.classList.contains("js-remove-card")&&x(e),e.closest(".js-basket-btn-increment")?g(e):e.closest(".js-basket-btn-decrement")&&v(e)}function _(e){let s=0,n=0;e.forEach(i=>{s+=i.oldPrice,n+=i.price}),r.textContent=`${n} ₴`,c.textContent=`${s} ₴`,o.textContent=`${s-n} ₴`}_(t);function g(e){const s=e.closest(".basket-main__list-item");let n=s.querySelector(".js-basket-amount"),i=s.querySelector(".js-current-price"),b=s.querySelector(".js-old-price")?s.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,d=+n.textContent;const p=+i.dataset.price;d>=10||(n.textContent=d+=1,i.textContent=`${p*d} ₴`,c.textContent=`${parseInt(c.textContent)+Number(b)} ₴`,r.textContent=`${parseInt(r.textContent)+p} ₴`,o.textContent=`${parseInt(o.textContent)+(Number(b)-p)} ₴`)}function v(e){const s=e.closest(".basket-main__list-item");let n=s.querySelector(".js-basket-amount"),i=s.querySelector(".js-current-price"),b=s.querySelector(".js-old-price")?s.querySelector(".js-old-price").dataset.oldPrice:+i.dataset.price,d=+n.textContent;const p=+i.dataset.price;d<=1||(n.textContent=d-=1,i.textContent=`${p*d} ₴`,c.textContent=`${parseInt(c.textContent)-Number(b)} ₴`,r.textContent=`${parseInt(r.textContent)-p} ₴`,o.textContent=`${parseInt(o.textContent)-(Number(b)-p)} ₴`)}function x(e){const s=e.closest(".basket-main__list-item"),n=s.dataset.id;s.remove(),t=t.filter(({id:i})=>i!==n),localStorage.setItem(k,JSON.stringify(t)),h(),_(t),f(),t.length||(a.innerHTML=C())}window.addEventListener("storage",f);function f(){t=JSON.parse(localStorage.getItem(k))??[],h(),l(t),_(t)}}function I(a){const m=document.querySelector(".js-basket-recommendations-swiper"),r=["Recommendations"],c=[m],o=L(a);for(let t=0;t<r.length;t++){const l=r[t],u=c[t];S(o,l,u)}}document.addEventListener("DOMContentLoaded",()=>{let a=y();j(),$(),w(),E(),h(),q(),I(a)});
//# sourceMappingURL=basket.js.map
