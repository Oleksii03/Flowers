import{S as m,P as A,A as I,G as P,N as B,i as O,a as $,c as F}from"./vendor-CWWLBHNg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function T(){const e=document.querySelectorAll(".js-dropdown-title-box"),o=document.querySelectorAll(".js-list-dropdown"),n=document.querySelector(".js-search-category-title-box"),s=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(a=>{a.addEventListener("click",i)});function i(a){let d=a.target.closest(".js-dropdown-title-box");t=d.firstElementChild,d.nextElementSibling.classList.contains("header__list-dropdown_active")?d.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(f=>{f.nextElementSibling.classList.remove("header__list-dropdown_active")}),d.nextElementSibling.classList.add("header__list-dropdown_active")),r(a,t)}[...o].forEach(a=>{a.addEventListener("click",d=>r(d,t))});function r(a,d){a.target.tagName==="LI"&&(d.textContent=a.target.textContent,[...e].forEach(f=>{f.nextElementSibling.classList.remove("header__list-dropdown_active")}))}n.addEventListener("click",c);function c(a){s.classList.toggle("search-category__list_active"),n.firstElementChild.classList.toggle("search-category__arrow-icon_active")}s.addEventListener("click",u);function u(a){a.target.tagName==="LI"&&(n.lastElementChild.textContent=a.target.textContent,c())}}function K(){const e=document.querySelector(".js-mob-menu"),o=document.querySelector(".js-burger-btn"),n=document.querySelector(".js-mob-menu-btn-close"),s=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),i=document.querySelector(".js-city-selection-list"),r=document.querySelector(".js-active-city"),c=document.querySelector(".js-information-item"),u=document.querySelector(".js-information-sub-list"),a=document.querySelector(".js-categories-item"),d=document.querySelector(".js-menu-categories-btn-close"),f=document.querySelector(".js-menu-categories"),S=document.querySelectorAll(".js-categories-list-title-box"),k=document.querySelector(".js-menu-categories-list"),L=document.querySelectorAll(".js-categories-sub-list");o.addEventListener("click",b),n.addEventListener("click",b),s.addEventListener("click",x);function b(l){e.classList.toggle("mob-menu--visible"),s.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function x(l){b(),f.classList.remove("menu-categories--visible")}a.addEventListener("click",v),d.addEventListener("click",v);function v(l){f.classList.toggle("menu-categories--visible")}t.addEventListener("click",w);function w(l){if(!t.classList.contains("user-panel__city-selection-title_active")){i.style.maxHeight=i.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}i.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}i.addEventListener("click",E);function E(l){r.textContent=l.target.textContent,w()}c.addEventListener("click",j);function j(l){if(!c.classList.contains("nav-list-item__title-wrapper_active")){u.style.maxHeight=u.scrollHeight+"px",c.classList.add("nav-list-item__title-wrapper_active");return}u.style.maxHeight=0,c.classList.remove("nav-list-item__title-wrapper_active")}k.addEventListener("click",C);function C(l){const{target:_}=l;let g=_.closest(".js-categories-list-title-box");if(g){if(!g.classList.contains("menu-categories__list-title-box_active")){[...S].forEach(h=>{h.nextElementSibling.style.maxHeight=0,h.classList.remove("menu-categories__list-title-box_active")}),g.nextElementSibling.style.maxHeight=g.nextElementSibling.scrollHeight+"px",g.classList.add("menu-categories__list-title-box_active");return}g.nextElementSibling.style.maxHeight=0,g.classList.remove("menu-categories__list-title-box_active")}}L.forEach(l=>{l.addEventListener("click",q)});function q(l){const{target:_}=l;_.tagName==="LI"&&_.classList.toggle("menu-categories__sub-list-item_active")}}function W(){class e{constructor(){this.tabs=document.querySelectorAll(".accordion"),this.addActive()}addActive(){this.tabs.forEach(n=>{n.addEventListener("click",s=>{s.target.classList.contains("accordion__title")&&(n.classList.toggle("accordion_active"),this.removeActive(s))})})}removeActive(n){this.tabs.forEach(s=>{s.contains(n.target)||s.classList.remove("accordion_active")})}}new e}const y="basket",H="favorite",N=document.querySelectorAll(".js-favorite-amount"),M=document.querySelectorAll(".js-basket-amount");function D(){function e(o,n){const s=JSON.parse(localStorage.getItem(o))?JSON.parse(localStorage.getItem(o)).length:0;[...n].forEach(t=>{t.textContent=s})}e(H,N),e(y,M)}function J(){const e=document.querySelector(".js-basket-sum");let o=JSON.parse(localStorage.getItem(y))??[],n=0;o.forEach(s=>{n+=s.price}),console.log(n),e.textContent=`₴ ${n}`}m.use([A,I,P,B]);function R(){return new m(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function Y(){const e=new m(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row",alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function G(){const e=new m(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function Q(){const e=new m(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function U(){return new m(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function X(){const e=new m(".recommendations-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".recommendations__button-prev",prevEl:".recommendations__button-next"}});p(e),window.addEventListener("resize",()=>p(e))}function p(e){window.innerWidth>=320&&(e.params.slidesPerView=2,e.params.spaceBetween=9),window.innerWidth>=768&&(e.params.slidesPerView=3,e.params.spaceBetween=14),window.innerWidth>=1024&&(e.params.slidesPerView=4,e.params.spaceBetween=20),e.update()}function Z(){return O({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function V(e,o){const n=e.map(({id:s,discount:t,price:i,img:{png:r,webp:c},title:u})=>`
          <div class="swiper-slide js-slide js-main-swiper-slide" data-id="${s}">
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

                    ${t?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${i}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${t}">
                      ${i*(1-t/100).toFixed(1)} грн
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
          </div>`);o.innerHTML=n.join("")}function ee(e){const o=e.closest(".js-main-swiper-slide"),n=o.querySelector(".js-main-swiper-slide-title").textContent.trim(),s=o.querySelector(".js-main-swiper-slide-img").src,t=o.querySelector(".js-main-swiper-slide-img").dataset.src,i=o.querySelector(".js-main-swiper-slide-price-old")?o.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,r=o.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),c=o.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:o.dataset.id,title:n,img:{png:s||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:t||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(r),oldPrice:parseInt(i)?parseInt(i):parseInt(r),discount:Number(c)}}async function te(e,o="",n=""){try{const s=await $(F(e,o)),t=[];s.forEach(i=>{t.push({id:i.id,...i.data()})}),V(t,n)}catch(s){return console.error("Error getting documents:",s),[]}}export{y as K,W as a,H as b,J as c,ee as d,G as e,Z as f,te as g,T as h,R as i,U as j,K as m,Q as p,X as r,Y as s,D as u};
//# sourceMappingURL=mixins-CJpScITH.js.map
