import{K as g,u as k,h as x,m as C,c as S}from"../../assets/update-local-storage-counter-CAwkdD6p.js";function j(r){return r.map((o,a)=>{const{id:d,discount:_,price:e,oldPrice:p,title:b,img:{png:l,webp:u}}=o;return`
      <li class="basket-main__list-item" data-id="${d}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${u}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${l}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${b}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${e} <span>₴</span></p>
              ${_?`<p class="basket-main__list-price-piece_old">${p} <span>₴</span></p>`:""}
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
            data-price="${e}">
            ${e}<span> ₴</span>
            </p>
          </div>
        </li>`})}function h(){return`
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
      </li>`}function $(){const r=document.querySelector(".js-basket-card-list"),o=document.querySelector(".js-title-shopping-list"),a=document.querySelector(".js-order-total-price"),d=document.querySelector(".js-goods-price"),_=document.querySelector(".js-discount-price");console.log(a.textContent);let e=JSON.parse(localStorage.getItem(g))??[];function p(t){t.length?(r.innerHTML=j(t).join(""),o.style.display="flex"):(r.innerHTML=h(),o.style.display="none")}p(e),r.addEventListener("click",b);function b({target:t,type:s}){t.classList.contains("js-remove-card")&&y(t),t.closest(".js-basket-btn-increment")?f(t):t.closest(".js-basket-btn-decrement")&&v(t)}function l(t){let s=0,i=0;t.forEach(n=>{s+=n.oldPrice,i+=n.price}),a.textContent=`${i} ₴`,d.textContent=`${s} ₴`,_.textContent=`${s-i} ₴`,console.log(a.textContent)}l(e);let u=parseInt(a.textContent);function f(t){const s=t.closest(".basket-main__list-item");let i=s.querySelector(".js-basket-amount"),n=s.querySelector(".js-current-price"),c=+i.textContent;const m=+n.dataset.price;c>=10||(i.textContent=c+=1,n.textContent=`${m*c} ₴`,a.textContent=`${u+=m} ₴`)}function v(t){const s=t.closest(".basket-main__list-item");let i=s.querySelector(".js-basket-amount"),n=s.querySelector(".js-current-price"),c=+i.textContent;const m=+n.dataset.price;c<=1||(i.textContent=c-=1,n.textContent=`${m*c} ₴`,a.textContent=`${u-=m} ₴`)}function y(t){const s=t.closest(".basket-main__list-item"),i=s.dataset.id;s.remove(),e=e.filter(({id:n})=>n!==i),localStorage.setItem(g,JSON.stringify(e)),k(),l(e),e.length||(r.innerHTML=h(),o.style.display="none")}window.addEventListener("storage",()=>{e=JSON.parse(localStorage.getItem(g))??[],k(),p(e),l(e)})}document.addEventListener("DOMContentLoaded",()=>{x(),C(),S(),$(),k()});
//# sourceMappingURL=basket.js.map
