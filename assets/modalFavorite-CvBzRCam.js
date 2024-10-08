import{S as p,P,A as B,G as F,N as O,i as $,a as M,c as H}from"./vendor-CWWLBHNg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function W(){const e=document.querySelectorAll(".js-dropdown-title-box"),s=document.querySelectorAll(".js-list-dropdown"),n=document.querySelector(".js-search-category-title-box"),i=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(a=>{a.addEventListener("click",o)});function o(a){let u=a.target.closest(".js-dropdown-title-box");t=u.firstElementChild,u.nextElementSibling.classList.contains("header__list-dropdown_active")?u.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(v=>{v.nextElementSibling.classList.remove("header__list-dropdown_active")}),u.nextElementSibling.classList.add("header__list-dropdown_active")),r(a,t)}[...s].forEach(a=>{a.addEventListener("click",u=>r(u,t))});function r(a,u){a.target.tagName==="LI"&&(u.textContent=a.target.textContent,[...e].forEach(v=>{v.nextElementSibling.classList.remove("header__list-dropdown_active")}))}n.addEventListener("click",c);function c(a){i.classList.toggle("search-category__list_active"),n.firstElementChild.classList.toggle("search-category__arrow-icon_active")}i.addEventListener("click",l);function l(a){a.target.tagName==="LI"&&(n.lastElementChild.textContent=a.target.textContent,c())}}function T(){const e=document.querySelector(".js-mob-menu"),s=document.querySelector(".js-burger-btn"),n=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),o=document.querySelector(".js-city-selection-list"),r=document.querySelector(".js-active-city"),c=document.querySelector(".js-information-item"),l=document.querySelector(".js-information-sub-list"),a=document.querySelector(".js-categories-item"),u=document.querySelector(".js-menu-categories-btn-close"),v=document.querySelector(".js-menu-categories"),k=document.querySelectorAll(".js-categories-list-title-box"),E=document.querySelector(".js-menu-categories-list"),x=document.querySelectorAll(".js-categories-sub-list");s.addEventListener("click",b),n.addEventListener("click",b),i.addEventListener("click",j);function b(d){e.classList.toggle("mob-menu--visible"),i.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function j(d){b(),v.classList.remove("menu-categories--visible")}a.addEventListener("click",w),u.addEventListener("click",w);function w(d){v.classList.toggle("menu-categories--visible")}t.addEventListener("click",_);function _(d){if(!t.classList.contains("user-panel__city-selection-title_active")){o.style.maxHeight=o.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}o.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}o.addEventListener("click",q);function q(d){r.textContent=d.target.textContent,_()}c.addEventListener("click",C);function C(d){if(!c.classList.contains("nav-list-item__title-wrapper_active")){l.style.maxHeight=l.scrollHeight+"px",c.classList.add("nav-list-item__title-wrapper_active");return}l.style.maxHeight=0,c.classList.remove("nav-list-item__title-wrapper_active")}E.addEventListener("click",A);function A(d){const{target:f}=d;let g=f.closest(".js-categories-list-title-box");if(g){if(!g.classList.contains("menu-categories__list-title-box_active")){[...k].forEach(h=>{h.nextElementSibling.style.maxHeight=0,h.classList.remove("menu-categories__list-title-box_active")}),g.nextElementSibling.style.maxHeight=g.nextElementSibling.scrollHeight+"px",g.classList.add("menu-categories__list-title-box_active");return}g.nextElementSibling.style.maxHeight=0,g.classList.remove("menu-categories__list-title-box_active")}}x.forEach(d=>{d.addEventListener("click",I)});function I(d){const{target:f}=d;f.tagName==="LI"&&f.classList.toggle("menu-categories__sub-list-item_active")}}function D(){class e{constructor(){this.tabs=document.querySelectorAll(".accordion"),this.addActive()}addActive(){this.tabs.forEach(n=>{n.addEventListener("click",i=>{i.target.classList.contains("accordion__title")&&(n.classList.toggle("accordion_active"),this.removeActive(i))})})}removeActive(n){this.tabs.forEach(i=>{i.contains(n.target)||i.classList.remove("accordion_active")})}}new e}const y="basket",S="favorite",N=document.querySelectorAll(".js-favorite-amount"),V=document.querySelectorAll(".js-basket-amount");function K(){function e(s,n){const i=JSON.parse(localStorage.getItem(s))?JSON.parse(localStorage.getItem(s)).length:0;[...n].forEach(t=>{t.textContent=i})}e(S,N),e(y,V)}function J(){const e=document.querySelector(".js-basket-sum");let s=JSON.parse(localStorage.getItem(y))??[],n=0;s.forEach(i=>{n+=i.price}),e.textContent=`₴ ${n}`}p.use([P,B,F,O]);function R(){return new p(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function Y(){const e=new p(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row",alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});m(e),window.addEventListener("resize",()=>m(e))}function G(){const e=new p(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});m(e),window.addEventListener("resize",()=>m(e))}function Q(){const e=new p(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});m(e),window.addEventListener("resize",()=>m(e))}function U(){return new p(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function X(){const e=new p(".recommendations-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".recommendations__button-prev",prevEl:".recommendations__button-next"}});m(e),window.addEventListener("resize",()=>m(e))}function Z(){const e=new p(".modal-favorite-swiper",{slidesPerView:"auto",spaceBetween:9,pagination:{el:".swiper-pagination"},navigation:{nextEl:".modal-favorite__button-prev",prevEl:".modal-favorite__button-next"}});m(e),window.addEventListener("resize",()=>m(e))}function m(e){window.innerWidth>=320&&(e.params.slidesPerView=2,e.params.spaceBetween=9),window.innerWidth>=768&&(e.params.slidesPerView=3,e.params.spaceBetween=14),window.innerWidth>=1024&&(e.params.slidesPerView=4,e.params.spaceBetween=20),e.update()}function ee(){return $({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function L(e,s){const n=e.map(({id:i,discount:t,price:o,img:{png:r,webp:c},title:l})=>`
          <div class="swiper-slide js-slide js-main-swiper-slide" data-id="${i}">
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
                     src=${r?`${r}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${l}"
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
                  <h5 class="slide-stock__content-bottom-title js-main-swiper-slide-title" title="${l}">
                    <span></span> ${l}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                    ${t?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${o}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${t}">
                      ${o*(1-t/100).toFixed(0)} грн
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
          </div>`);s.innerHTML=n.join("")}function te(e){const s=e.closest(".js-main-swiper-slide"),n=s.querySelector(".js-main-swiper-slide-title").textContent.trim(),i=s.querySelector(".js-main-swiper-slide-img").src,t=s.querySelector(".js-main-swiper-slide-img").dataset.src,o=s.querySelector(".js-main-swiper-slide-price-old")?s.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,r=s.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),c=s.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:s.dataset.id,title:n,img:{png:i||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:t||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(r),oldPrice:parseInt(o)?parseInt(o):parseInt(r),discount:Number(c)}}async function se(e,s="",n=""){try{const i=await M(H(e,s)),t=[];i.forEach(o=>{t.push({id:o.id,...o.data()})}),L(t,n)}catch(i){return console.error("Error getting documents:",i),[]}}function ie(){const e=document.querySelectorAll(".js-favorite-btn"),s=document.querySelector(".js-backdrop-favotite"),n=document.querySelector(".js-modal-favorite"),i=document.querySelector(".js-swiper-favorite"),t=document.querySelector(".js-swiper-btn-close"),o=document.querySelector(".js-mob-menu");e.forEach(l=>l.addEventListener("click",r));function r(l){let a=JSON.parse(localStorage.getItem(S));s.classList.add("backdrop-favorite--visible"),n.classList.add("modal-favorite--visible"),document.body.classList.add("to-freeze"),L(a,i)}s.addEventListener("click",c),t.addEventListener("click",c);function c(l){s.classList.remove("backdrop-favorite--visible"),n.classList.remove("modal-favorite--visible"),!o.classList.contains("mob-menu--visible")&&document.body.classList.remove("to-freeze")}}export{y as K,D as a,ie as b,J as c,Z as d,S as e,ee as f,se as g,W as h,te as i,R as j,G as k,U as l,T as m,Q as p,X as r,Y as s,K as u};
//# sourceMappingURL=modalFavorite-CvBzRCam.js.map
