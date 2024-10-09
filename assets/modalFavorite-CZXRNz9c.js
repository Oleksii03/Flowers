import{S as f,P,A as F,G as O,N as H,i as B,a as $,c as N}from"./vendor-CWWLBHNg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function W(){const e=document.querySelectorAll(".js-dropdown-title-box"),s=document.querySelectorAll(".js-list-dropdown"),n=document.querySelector(".js-search-category-title-box"),i=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(r=>{r.addEventListener("click",o)});function o(r){let a=r.target.closest(".js-dropdown-title-box");t=a.firstElementChild,a.nextElementSibling.classList.contains("header__list-dropdown_active")?a.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(d=>{d.nextElementSibling.classList.remove("header__list-dropdown_active")}),a.nextElementSibling.classList.add("header__list-dropdown_active")),l(r,t)}[...s].forEach(r=>{r.addEventListener("click",a=>l(a,t))});function l(r,a){r.target.tagName==="LI"&&(a.textContent=r.target.textContent,[...e].forEach(d=>{d.nextElementSibling.classList.remove("header__list-dropdown_active")}))}n.addEventListener("click",c);function c(r){i.classList.toggle("search-category__list_active"),n.firstElementChild.classList.toggle("search-category__arrow-icon_active")}i.addEventListener("click",p);function p(r){r.target.tagName==="LI"&&(n.lastElementChild.textContent=r.target.textContent,c())}}function J(){const e=document.querySelector(".js-mob-menu"),s=document.querySelector(".js-burger-btn"),n=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),o=document.querySelector(".js-city-selection-list"),l=document.querySelector(".js-active-city"),c=document.querySelector(".js-information-item"),p=document.querySelector(".js-information-sub-list"),r=document.querySelector(".js-categories-item"),a=document.querySelector(".js-menu-categories-btn-close"),d=document.querySelector(".js-menu-categories"),b=document.querySelectorAll(".js-categories-list-title-box"),w=document.querySelector(".js-menu-categories-list"),g=document.querySelectorAll(".js-categories-sub-list");s.addEventListener("click",v),n.addEventListener("click",v),i.addEventListener("click",j);function v(u){e.classList.toggle("mob-menu--visible"),i.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function j(u){v(),d.classList.remove("menu-categories--visible")}r.addEventListener("click",k),a.addEventListener("click",k);function k(u){d.classList.toggle("menu-categories--visible")}t.addEventListener("click",L);function L(u){if(!t.classList.contains("user-panel__city-selection-title_active")){o.style.maxHeight=o.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}o.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}o.addEventListener("click",q);function q(u){l.textContent=u.target.textContent,L()}c.addEventListener("click",C);function C(u){if(!c.classList.contains("nav-list-item__title-wrapper_active")){p.style.maxHeight=p.scrollHeight+"px",c.classList.add("nav-list-item__title-wrapper_active");return}p.style.maxHeight=0,c.classList.remove("nav-list-item__title-wrapper_active")}w.addEventListener("click",I);function I(u){const{target:y}=u;let _=y.closest(".js-categories-list-title-box");if(_){if(!_.classList.contains("menu-categories__list-title-box_active")){[...b].forEach(E=>{E.nextElementSibling.style.maxHeight=0,E.classList.remove("menu-categories__list-title-box_active")}),_.nextElementSibling.style.maxHeight=_.nextElementSibling.scrollHeight+"px",_.classList.add("menu-categories__list-title-box_active");return}_.nextElementSibling.style.maxHeight=0,_.classList.remove("menu-categories__list-title-box_active")}}g.forEach(u=>{u.addEventListener("click",A)});function A(u){const{target:y}=u;y.tagName==="LI"&&y.classList.toggle("menu-categories__sub-list-item_active")}}function K(){class e{constructor(){this.tabs=document.querySelectorAll(".accordion"),this.addActive()}addActive(){this.tabs.forEach(n=>{n.addEventListener("click",i=>{i.target.classList.contains("accordion__title")&&(n.classList.toggle("accordion_active"),this.removeActive(i))})})}removeActive(n){this.tabs.forEach(i=>{i.contains(n.target)||i.classList.remove("accordion_active")})}}new e}const x="basket",h="favorite",M=document.querySelectorAll(".js-favorite-amount"),V=document.querySelectorAll(".js-basket-amount");function z(){function e(s,n){const i=JSON.parse(localStorage.getItem(s))?JSON.parse(localStorage.getItem(s)).length:0;[...n].forEach(t=>{t.textContent=i})}e(h,M),e(x,V)}function R(){const e=document.querySelector(".js-basket-sum");let s=JSON.parse(localStorage.getItem(x))??[],n=0;s.forEach(i=>{n+=i.price}),e.textContent=`₴ ${n}`}f.use([P,F,O,H]);function Y(){return new f(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function G(){const e=new f(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row",alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});m(e),window.addEventListener("resize",()=>m(e))}function Q(){const e=new f(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});m(e),window.addEventListener("resize",()=>m(e))}function U(){const e=new f(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});m(e),window.addEventListener("resize",()=>m(e))}function X(){return new f(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function Z(){const e=new f(".recommendations-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".recommendations__button-prev",prevEl:".recommendations__button-next"}});m(e),window.addEventListener("resize",()=>m(e))}function ee(){const e=new f(".modal-favorite-swiper",{slidesPerView:"auto",spaceBetween:9,pagination:{el:".swiper-pagination"},navigation:{nextEl:".modal-favorite__button-prev",prevEl:".modal-favorite__button-next"}});m(e),window.addEventListener("resize",()=>m(e))}function m(e){window.innerWidth>=320&&(e.params.slidesPerView=2,e.params.spaceBetween=9),window.innerWidth>=768&&(e.params.slidesPerView=3,e.params.spaceBetween=14),window.innerWidth>=1024&&(e.params.slidesPerView=4,e.params.spaceBetween=20),e.update()}function te(){return B({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function S(e,s){const n=e.map(({id:i,discount:t,price:o,img:{png:l,webp:c},title:p,isFavorited:r})=>`
          <div class="swiper-slide js-slide js-main-swiper-slide" data-id="${i}">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="${r?"slide-stock__content-top-favorite slide-stock__content-top-favorite_active":"slide-stock__content-top-favorite"} js-favorite"
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
                     src=${l?`${l}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${p}"
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
          </div>`);s.innerHTML=n.join("")}function se(e){const s=e.closest(".js-main-swiper-slide"),n=s.querySelector(".js-main-swiper-slide-title").textContent.trim(),i=s.querySelector(".js-main-swiper-slide-img").src,t=s.querySelector(".js-main-swiper-slide-img").dataset.src,o=s.querySelector(".js-main-swiper-slide-price-old")?s.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,l=s.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),c=s.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:s.dataset.id,isFavorited:!0,title:n,img:{png:i||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:t||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(l),oldPrice:parseInt(o)?parseInt(o):parseInt(l),discount:Number(c)}}async function ie(e,s="",n=""){try{const i=await $(N(e,s)),t=[];i.forEach(o=>{t.push({id:o.id,...o.data()})}),S(t,n)}catch(i){return console.error("Error getting documents:",i),[]}}function D(e){const s=document.querySelector(`[data-id="${e}"]`);if(!s)return;s.querySelector(".slide-stock__content-top-favorite_active").classList.remove("slide-stock__content-top-favorite_active")}function oe(){const e=document.querySelectorAll(".js-favorite-btn"),s=document.querySelector(".js-backdrop-favotite"),n=document.querySelector(".js-modal-favorite"),i=document.querySelector(".js-swiper-favorite"),t=document.querySelector(".js-swiper-btn-close"),o=document.querySelector(".js-mob-menu");e.forEach(a=>a.addEventListener("click",l));function l(a){let d=JSON.parse(localStorage.getItem(h));s.classList.add("backdrop-favorite--visible"),n.classList.add("modal-favorite--visible"),document.body.classList.add("to-freeze"),S(d,i)}s.addEventListener("click",c),t.addEventListener("click",c);function c(a){s.classList.remove("backdrop-favorite--visible"),n.classList.remove("modal-favorite--visible"),!o.classList.contains("mob-menu--visible")&&document.body.classList.remove("to-freeze")}i.addEventListener("click",p);function p({target:a}){if(a.tagName!=="use")return;const d=a.closest(".swiper-slide"),b=d.dataset.id;console.log(b);let g=JSON.parse(localStorage.getItem(h)).filter(v=>v.id!==b);console.log(g),localStorage.setItem(h,JSON.stringify(g)),d.remove(),z(),D(b),g.length||c()}window.addEventListener("storage",a=>{a.key===h&&r()});function r(a){let d=JSON.parse(localStorage.getItem(h))??[];document.querySelectorAll(".slide-stock__content-top-favorite_active").forEach(w=>w.classList.remove("slide-stock__content-top-favorite_active")),d.forEach(w=>{const g=document.querySelector(`[data-id="${w.id}"]`);if(g){const v=g.querySelector(".slide-stock__content-top-favorite");v&&v.classList.add("slide-stock__content-top-favorite_active")}}),S(d,i)}}export{x as K,K as a,oe as b,R as c,ee as d,h as e,te as f,ie as g,W as h,se as i,Y as j,Q as k,X as l,J as m,U as p,Z as r,G as s,z as u};
//# sourceMappingURL=modalFavorite-CZXRNz9c.js.map
