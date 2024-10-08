import{S as m,P,A as B,G as F,N as O,i as $,a as H,c as N}from"./vendor-CWWLBHNg.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function T(){const e=document.querySelectorAll(".js-dropdown-title-box"),i=document.querySelectorAll(".js-list-dropdown"),n=document.querySelector(".js-search-category-title-box"),o=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(r=>{r.addEventListener("click",s)});function s(r){let d=r.target.closest(".js-dropdown-title-box");t=d.firstElementChild,d.nextElementSibling.classList.contains("header__list-dropdown_active")?d.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(v=>{v.nextElementSibling.classList.remove("header__list-dropdown_active")}),d.nextElementSibling.classList.add("header__list-dropdown_active")),a(r,t)}[...i].forEach(r=>{r.addEventListener("click",d=>a(d,t))});function a(r,d){r.target.tagName==="LI"&&(d.textContent=r.target.textContent,[...e].forEach(v=>{v.nextElementSibling.classList.remove("header__list-dropdown_active")}))}n.addEventListener("click",c);function c(r){o.classList.toggle("search-category__list_active"),n.firstElementChild.classList.toggle("search-category__arrow-icon_active")}o.addEventListener("click",p);function p(r){r.target.tagName==="LI"&&(n.lastElementChild.textContent=r.target.textContent,c())}}function W(){const e=document.querySelector(".js-mob-menu"),i=document.querySelector(".js-burger-btn"),n=document.querySelector(".js-mob-menu-btn-close"),o=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),s=document.querySelector(".js-city-selection-list"),a=document.querySelector(".js-active-city"),c=document.querySelector(".js-information-item"),p=document.querySelector(".js-information-sub-list"),r=document.querySelector(".js-categories-item"),d=document.querySelector(".js-menu-categories-btn-close"),v=document.querySelector(".js-menu-categories"),L=document.querySelectorAll(".js-categories-list-title-box"),E=document.querySelector(".js-menu-categories-list"),x=document.querySelectorAll(".js-categories-sub-list");i.addEventListener("click",b),n.addEventListener("click",b),o.addEventListener("click",j);function b(l){e.classList.toggle("mob-menu--visible"),o.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function j(l){b(),v.classList.remove("menu-categories--visible")}r.addEventListener("click",w),d.addEventListener("click",w);function w(l){v.classList.toggle("menu-categories--visible")}t.addEventListener("click",_);function _(l){if(!t.classList.contains("user-panel__city-selection-title_active")){s.style.maxHeight=s.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}s.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}s.addEventListener("click",q);function q(l){a.textContent=l.target.textContent,_()}c.addEventListener("click",C);function C(l){if(!c.classList.contains("nav-list-item__title-wrapper_active")){p.style.maxHeight=p.scrollHeight+"px",c.classList.add("nav-list-item__title-wrapper_active");return}p.style.maxHeight=0,c.classList.remove("nav-list-item__title-wrapper_active")}E.addEventListener("click",A);function A(l){const{target:f}=l;let g=f.closest(".js-categories-list-title-box");if(g){if(!g.classList.contains("menu-categories__list-title-box_active")){[...L].forEach(h=>{h.nextElementSibling.style.maxHeight=0,h.classList.remove("menu-categories__list-title-box_active")}),g.nextElementSibling.style.maxHeight=g.nextElementSibling.scrollHeight+"px",g.classList.add("menu-categories__list-title-box_active");return}g.nextElementSibling.style.maxHeight=0,g.classList.remove("menu-categories__list-title-box_active")}}x.forEach(l=>{l.addEventListener("click",I)});function I(l){const{target:f}=l;f.tagName==="LI"&&f.classList.toggle("menu-categories__sub-list-item_active")}}function D(){class e{constructor(){this.tabs=document.querySelectorAll(".accordion"),this.addActive()}addActive(){this.tabs.forEach(n=>{n.addEventListener("click",o=>{o.target.classList.contains("accordion__title")&&(n.classList.toggle("accordion_active"),this.removeActive(o))})})}removeActive(n){this.tabs.forEach(o=>{o.contains(n.target)||o.classList.remove("accordion_active")})}}new e}const y="basket",S="favorite",M=document.querySelectorAll(".js-favorite-amount"),V=document.querySelectorAll(".js-basket-amount");function K(){function e(i,n){const o=JSON.parse(localStorage.getItem(i))?JSON.parse(localStorage.getItem(i)).length:0;[...n].forEach(t=>{t.textContent=o})}e(S,M),e(y,V)}function J(){const e=document.querySelector(".js-basket-sum");let i=JSON.parse(localStorage.getItem(y))??[],n=0;i.forEach(o=>{n+=o.price}),e.textContent=`₴ ${n}`}m.use([P,B,F,O]);function R(){return new m(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function Y(){const e=new m(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row",alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});u(e),window.addEventListener("resize",()=>u(e))}function G(){const e=new m(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});u(e),window.addEventListener("resize",()=>u(e))}function Q(){const e=new m(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});u(e),window.addEventListener("resize",()=>u(e))}function U(){return new m(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function X(){const e=new m(".recommendations-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".recommendations__button-prev",prevEl:".recommendations__button-next"}});u(e),window.addEventListener("resize",()=>u(e))}function Z(){const e=new m(".modal-favorite-swiper",{slidesPerView:"auto",spaceBetween:9,pagination:{el:".swiper-pagination"},navigation:{nextEl:".modal-favorite__button-prev",prevEl:".modal-favorite__button-next"}});u(e),window.addEventListener("resize",()=>u(e))}function u(e){window.innerWidth>=320&&(e.params.slidesPerView=2,e.params.spaceBetween=9),window.innerWidth>=768&&(e.params.slidesPerView=3,e.params.spaceBetween=14),window.innerWidth>=1024&&(e.params.slidesPerView=4,e.params.spaceBetween=20),e.update()}function ee(){return $({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function k(e,i){const n=e.map(({id:o,discount:t,price:s,img:{png:a,webp:c},title:p})=>`
          <div class="swiper-slide js-slide js-main-swiper-slide" data-id="${o}">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite js-favorite"
                  width="33"
                  height="28">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${t?`<div class="slide-stock__content-top-discount">-${t}%</div>`:""}
             
                  <picture>
                    <source 
                      srcset=${c?`${c}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"} type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img js-main-swiper-slide-img"
                     src=${a?`${a}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${p}"
                     data-src="${c}" />
                  </picture>

                <div class="slide-stock__content-top-logo">TOP</div>
              </div>

              <!-- content-bottom -->

              <div class="slide-stock__content-bottom">
                <ul class="slide-stock__content-bottom-rating-list">
                  <li>
                    <svg
                      class="slide-stock__content-bottom-list-star"
                      width="13"
                      height="13">
                      <use xlink:href="#star-rating"></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      class="slide-stock__content-bottom-list-star"
                      width="13"
                      height="13">
                      <use xlink:href="#star-rating"></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      class="slide-stock__content-bottom-list-star"
                      width="13"
                      height="13">
                      <use xlink:href="#star-rating"></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      class="slide-stock__content-bottom-list-star"
                      width="13"
                      height="13">
                      <use xlink:href="#star-rating"></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      class="slide-stock__content-bottom-list-star"
                      width="13"
                      height="13">
                      <use xlink:href="#star-rating"></use>
                    </svg>
                  </li>
                </ul>

                <div class="slide-stock__content-bottom-price-box">
                  <h5 class="slide-stock__content-bottom-title js-main-swiper-slide-title" title="${p}">
                    <span></span> ${p}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                    ${t?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${s}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${t}">
                      ${s*(1-t/100).toFixed(0)} грн
                    </div>
                  </div>
                </div>

                <div class="slide-stock__content-bottom-buy">
                  <a
                    class="slide-stock__content-bottom-buy-link"
                    href="#"
                    target="_blank"
                    ><span class="slide-stock__content-bottom-buy-link_mob">Замовити</span>
                    <span class="slide-stock__content-bottom-buy-link_desc">Швидке замовлення</span>
                  </a>

                  <button class="slide-stock__content-bottom-buy-btn js-basket">
                    <span>Замовити</span>

                    <svg
                      width="21"
                      height="21">
                      <use xlink:href="#icon-basket"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>`);i.innerHTML=n.join("")}function te(e){const i=e.closest(".js-main-swiper-slide"),n=i.querySelector(".js-main-swiper-slide-title").textContent.trim(),o=i.querySelector(".js-main-swiper-slide-img").src,t=i.querySelector(".js-main-swiper-slide-img").dataset.src,s=i.querySelector(".js-main-swiper-slide-price-old")?i.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,a=i.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),c=i.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:i.dataset.id,title:n,img:{png:o||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:t||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(a),oldPrice:parseInt(s)?parseInt(s):parseInt(a),discount:Number(c)}}async function se(e,i="",n=""){try{const o=await H(N(e,i)),t=[];o.forEach(s=>{t.push({id:s.id,...s.data()})}),k(t,n)}catch(o){return console.error("Error getting documents:",o),[]}}function ie(){const e=document.querySelectorAll(".js-favorite-btn"),i=document.querySelector(".js-backdrop-favotite"),n=document.querySelector(".js-modal-favorite"),o=document.querySelector(".js-swiper-favorite");console.log(o),e.forEach(s=>s.addEventListener("click",t));function t(s){let a=JSON.parse(localStorage.getItem(S));i.classList.add("backdrop-favorite--visible"),n.classList.add("modal-favorite--visible"),k(a,o)}i.addEventListener("click",s=>{s.target===i&&(i.classList.remove("backdrop-favorite--visible"),n.classList.remove("modal-favorite--visible"))})}export{y as K,D as a,ie as b,J as c,Z as d,S as e,ee as f,se as g,T as h,te as i,R as j,G as k,U as l,W as m,Q as p,X as r,Y as s,K as u};
//# sourceMappingURL=modalFavorite-BPoj-yf4.js.map
