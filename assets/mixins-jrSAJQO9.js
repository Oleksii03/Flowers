import{S as m,P as q,A,G as I,N as P,i as B,a as O,c as $}from"./vendor-CWWLBHNg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function K(){const t=document.querySelectorAll(".js-dropdown-title-box"),o=document.querySelectorAll(".js-list-dropdown"),n=document.querySelector(".js-search-category-title-box"),i=document.querySelector(".js-search-category-list");let e=null;[...t].forEach(a=>{a.addEventListener("click",s)});function s(a){let d=a.target.closest(".js-dropdown-title-box");e=d.firstElementChild,d.nextElementSibling.classList.contains("header__list-dropdown_active")?d.nextElementSibling.classList.remove("header__list-dropdown_active"):([...t].forEach(f=>{f.nextElementSibling.classList.remove("header__list-dropdown_active")}),d.nextElementSibling.classList.add("header__list-dropdown_active")),r(a,e)}[...o].forEach(a=>{a.addEventListener("click",d=>r(d,e))});function r(a,d){a.target.tagName==="LI"&&(d.textContent=a.target.textContent,[...t].forEach(f=>{f.nextElementSibling.classList.remove("header__list-dropdown_active")}))}n.addEventListener("click",c);function c(a){i.classList.toggle("search-category__list_active"),n.firstElementChild.classList.toggle("search-category__arrow-icon_active")}i.addEventListener("click",u);function u(a){a.target.tagName==="LI"&&(n.lastElementChild.textContent=a.target.textContent,c())}}function T(){const t=document.querySelector(".js-mob-menu"),o=document.querySelector(".js-burger-btn"),n=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-backdrop"),e=document.querySelector(".js-choose-city"),s=document.querySelector(".js-city-selection-list"),r=document.querySelector(".js-active-city"),c=document.querySelector(".js-information-item"),u=document.querySelector(".js-information-sub-list"),a=document.querySelector(".js-categories-item"),d=document.querySelector(".js-menu-categories-btn-close"),f=document.querySelector(".js-menu-categories"),y=document.querySelectorAll(".js-categories-list-title-box"),L=document.querySelector(".js-menu-categories-list"),S=document.querySelectorAll(".js-categories-sub-list");o.addEventListener("click",v),n.addEventListener("click",v),i.addEventListener("click",k);function v(l){t.classList.toggle("mob-menu--visible"),i.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function k(l){v(),f.classList.remove("menu-categories--visible")}a.addEventListener("click",b),d.addEventListener("click",b);function b(l){f.classList.toggle("menu-categories--visible")}e.addEventListener("click",w);function w(l){if(!e.classList.contains("user-panel__city-selection-title_active")){s.style.maxHeight=s.scrollHeight+"px",e.classList.add("user-panel__city-selection-title_active");return}s.style.maxHeight=0,e.classList.remove("user-panel__city-selection-title_active")}s.addEventListener("click",x);function x(l){r.textContent=l.target.textContent,w()}c.addEventListener("click",E);function E(l){if(!c.classList.contains("nav-list-item__title-wrapper_active")){u.style.maxHeight=u.scrollHeight+"px",c.classList.add("nav-list-item__title-wrapper_active");return}u.style.maxHeight=0,c.classList.remove("nav-list-item__title-wrapper_active")}L.addEventListener("click",j);function j(l){const{target:_}=l;let g=_.closest(".js-categories-list-title-box");if(g){if(!g.classList.contains("menu-categories__list-title-box_active")){[...y].forEach(h=>{h.nextElementSibling.style.maxHeight=0,h.classList.remove("menu-categories__list-title-box_active")}),g.nextElementSibling.style.maxHeight=g.nextElementSibling.scrollHeight+"px",g.classList.add("menu-categories__list-title-box_active");return}g.nextElementSibling.style.maxHeight=0,g.classList.remove("menu-categories__list-title-box_active")}}S.forEach(l=>{l.addEventListener("click",C)});function C(l){const{target:_}=l;_.tagName==="LI"&&_.classList.toggle("menu-categories__sub-list-item_active")}}function D(){class t{constructor(){this.tabs=document.querySelectorAll(".accordion"),this.addActive()}addActive(){this.tabs.forEach(n=>{n.addEventListener("click",i=>{i.target.classList.contains("accordion__title")&&(n.classList.toggle("accordion_active"),this.removeActive(i))})})}removeActive(n){this.tabs.forEach(i=>{i.contains(n.target)||i.classList.remove("accordion_active")})}}new t}const F="basket",H="favorite",M=document.querySelectorAll(".js-favorite-amount"),N=document.querySelectorAll(".js-basket-amount");function W(){function t(o,n){const i=JSON.parse(localStorage.getItem(o))?JSON.parse(localStorage.getItem(o)).length:0;[...n].forEach(e=>{e.textContent=i})}t(H,M),t(F,N)}m.use([q,A,I,P]);function R(){return new m(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function Y(){const t=new m(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});p(t),window.addEventListener("resize",()=>p(t))}function G(){const t=new m(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});p(t),window.addEventListener("resize",()=>p(t))}function J(){const t=new m(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});p(t),window.addEventListener("resize",()=>p(t))}function Q(){return new m(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function U(){const t=new m(".recommendations-swiper",{slidesPerView:"auto",spaceBetween:9,pagination:{el:".swiper-pagination"},navigation:{nextEl:".recommendations__button-next",prevEl:".recommendations__button-prev"}});p(t),window.addEventListener("resize",()=>p(t))}function p(t){window.innerWidth<=425?(t.params.slidesPerView=2,t.params.spaceBetween=9):window.innerWidth>=1024?(t.params.spaceBetween=20,t.params.slidesPerView=4):t.params.slidesPerView="auto",t.update()}function X(){return B({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function V(t,o){const n=t.map(({id:i,discount:e,price:s,img:{png:r,webp:c},title:u})=>`
          <div class="swiper-slide js-main-swiper-slide" data-id="${i}">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite js-favorite"
                  width="33"
                  height="28">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${e?`<div class="slide-stock__content-top-discount">-${e}%</div>`:""}
             
                  <picture>
                    <source 
                      srcset=${c?`${c}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"} type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img js-main-swiper-slide-img"
                     src=${r?`${r}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${u}"
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
                  <h5 class="slide-stock__content-bottom-title js-main-swiper-slide-title" title="${u}">
                    <span></span> ${u}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                    ${e?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${s}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${e}">
                      ${s*(1-e/100).toFixed(1)} грн
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
          </div>`);o.innerHTML=n.join("")}function Z(t){const o=t.closest(".js-main-swiper-slide"),n=o.querySelector(".js-main-swiper-slide-title").textContent.trim(),i=o.querySelector(".js-main-swiper-slide-img").src,e=o.querySelector(".js-main-swiper-slide-img").dataset.src,s=o.querySelector(".js-main-swiper-slide-price-old")?o.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,r=o.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),c=o.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:o.dataset.id,title:n,img:{png:i||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:e||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(r),oldPrice:parseInt(s)?parseInt(s):parseInt(r),discount:Number(c)}}async function ee(t,o="",n=""){try{const i=await O($(t,o)),e=[];i.forEach(s=>{e.push({id:s.id,...s.data()})}),V(e,n)}catch(i){return console.error("Error getting documents:",i),[]}}export{F as K,H as a,Z as b,D as c,G as d,Q as e,X as f,ee as g,K as h,R as i,T as m,J as p,U as r,Y as s,W as u};
//# sourceMappingURL=mixins-jrSAJQO9.js.map
