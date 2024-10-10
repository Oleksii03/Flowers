import{S as v,P as F,A as O,G as M,N as $,i as B,a as x,c as j,g as N}from"./vendor-CWWLBHNg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();function K(){const e=document.querySelectorAll(".js-dropdown-title-box"),s=document.querySelectorAll(".js-list-dropdown"),o=document.querySelector(".js-search-category-title-box"),i=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(l=>{l.addEventListener("click",n)});function n(l){let a=l.target.closest(".js-dropdown-title-box");t=a.firstElementChild,a.nextElementSibling.classList.contains("header__list-dropdown_active")?a.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(u=>{u.nextElementSibling.classList.remove("header__list-dropdown_active")}),a.nextElementSibling.classList.add("header__list-dropdown_active")),c(l,t)}[...s].forEach(l=>{l.addEventListener("click",a=>c(a,t))});function c(l,a){l.target.tagName==="LI"&&(a.textContent=l.target.textContent,[...e].forEach(u=>{u.nextElementSibling.classList.remove("header__list-dropdown_active")}))}o.addEventListener("click",r);function r(l){i.classList.toggle("search-category__list_active"),o.firstElementChild.classList.toggle("search-category__arrow-icon_active")}i.addEventListener("click",d);function d(l){l.target.tagName==="LI"&&(o.lastElementChild.textContent=l.target.textContent,r())}}function R(){const e=document.querySelector(".js-mob-menu"),s=document.querySelector(".js-burger-btn"),o=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),n=document.querySelector(".js-city-selection-list"),c=document.querySelector(".js-active-city"),r=document.querySelector(".js-information-item"),d=document.querySelector(".js-information-sub-list"),l=document.querySelector(".js-categories-item"),a=document.querySelector(".js-menu-categories-btn-close"),u=document.querySelector(".js-menu-categories"),g=document.querySelectorAll(".js-categories-list-title-box"),w=document.querySelector(".js-menu-categories-list"),f=document.querySelectorAll(".js-categories-sub-list");s.addEventListener("click",h),o.addEventListener("click",h),i.addEventListener("click",C);function h(m){e.classList.toggle("mob-menu--visible"),i.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function C(m){h(),u.classList.remove("menu-categories--visible")}l.addEventListener("click",S),a.addEventListener("click",S);function S(m){u.classList.toggle("menu-categories--visible")}t.addEventListener("click",k);function k(m){if(!t.classList.contains("user-panel__city-selection-title_active")){n.style.maxHeight=n.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}n.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}n.addEventListener("click",A);function A(m){c.textContent=m.target.textContent,k()}r.addEventListener("click",I);function I(m){if(!r.classList.contains("nav-list-item__title-wrapper_active")){d.style.maxHeight=d.scrollHeight+"px",r.classList.add("nav-list-item__title-wrapper_active");return}d.style.maxHeight=0,r.classList.remove("nav-list-item__title-wrapper_active")}w.addEventListener("click",P);function P(m){const{target:L}=m;let _=L.closest(".js-categories-list-title-box");if(_){if(!_.classList.contains("menu-categories__list-title-box_active")){[...g].forEach(E=>{E.nextElementSibling.style.maxHeight=0,E.classList.remove("menu-categories__list-title-box_active")}),_.nextElementSibling.style.maxHeight=_.nextElementSibling.scrollHeight+"px",_.classList.add("menu-categories__list-title-box_active");return}_.nextElementSibling.style.maxHeight=0,_.classList.remove("menu-categories__list-title-box_active")}}f.forEach(m=>{m.addEventListener("click",H)});function H(m){const{target:L}=m;L.tagName==="LI"&&L.classList.toggle("menu-categories__sub-list-item_active")}}function Y(){class e{constructor(){this.tabs=document.querySelectorAll(".accordion"),this.addActive()}addActive(){this.tabs.forEach(o=>{o.addEventListener("click",i=>{i.target.classList.contains("accordion__title")&&(o.classList.toggle("accordion_active"),this.removeActive(i))})})}removeActive(o){this.tabs.forEach(i=>{i.contains(o.target)||i.classList.remove("accordion_active")})}}new e}const q="basket",b="favorite",T=document.querySelectorAll(".js-favorite-amount"),V=document.querySelectorAll(".js-basket-amount");function z(){function e(s,o){const i=JSON.parse(localStorage.getItem(s))?JSON.parse(localStorage.getItem(s)).length:0;[...o].forEach(t=>{t.textContent=i})}e(b,T),e(q,V)}function G(){const e=document.querySelector(".js-basket-sum");let s=JSON.parse(localStorage.getItem(q))??[],o=0;s.forEach(i=>{o+=i.price}),e.textContent=`₴ ${o}`}v.use([F,O,M,$]);function Q(){return new v(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function U(){const e=new v(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row",alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function X(){const e=new v(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function Z(){const e=new v(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function ee(){return new v(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function te(){const e=new v(".recommendations-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{alignItems:"stretch"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".recommendations__button-prev",prevEl:".recommendations__button-next"}});p(e),window.addEventListener("resize",()=>p(e))}function se(){const e=new v(".modal-favorite-swiper",{slidesPerView:"auto",spaceBetween:9,pagination:{el:".swiper-pagination"},navigation:{nextEl:".modal-favorite__button-prev",prevEl:".modal-favorite__button-next"}});p(e),window.addEventListener("resize",()=>p(e))}function p(e){window.innerWidth>=320&&(e.params.slidesPerView=2,e.params.spaceBetween=9),window.innerWidth>=768&&(e.params.slidesPerView=3,e.params.spaceBetween=14),window.innerWidth>=1024&&(e.params.slidesPerView=4,e.params.spaceBetween=20),e.update()}function ie(){return B({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function y(e,s){const o=e.map(({id:i,discount:t,price:n,img:{png:c,webp:r},title:d,isFavorited:l})=>`
          <div class="swiper-slide js-slide js-main-swiper-slide" data-id="${i}">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="${l?"slide-stock__content-top-favorite slide-stock__content-top-favorite_active":"slide-stock__content-top-favorite"} js-favorite"
                  width="33"
                  height="28">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${t?`<div class="slide-stock__content-top-discount">-${t}%</div>`:""}
             
                  <picture>
                    <source 
                      srcset=${r?`${r}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"} type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img js-main-swiper-slide-img"
                     src=${c?`${c}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${d}"
                     data-src="${r}" />
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
                  <h5 class="slide-stock__content-bottom-title js-main-swiper-slide-title" title="${d}">
                    <span></span> ${d}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                    ${t?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${n}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${t}">
                      ${n*(1-t/100).toFixed(0)} грн
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
          </div>`);s.innerHTML=o.join("")}function oe(e){const s=e.closest(".js-main-swiper-slide"),o=s.querySelector(".js-main-swiper-slide-title").textContent.trim(),i=s.querySelector(".js-main-swiper-slide-img").src,t=s.querySelector(".js-main-swiper-slide-img").dataset.src,n=s.querySelector(".js-main-swiper-slide-price-old")?s.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,c=s.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),r=s.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:s.dataset.id,isFavorited:!0,title:o,img:{png:i||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:t||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(c),oldPrice:parseInt(n)?parseInt(n):parseInt(c),discount:Number(r)}}async function ne(e,s="",o=""){try{const i=await x(j(e,s)),t=[];i.forEach(n=>{t.push({id:n.id,...n.data()})}),y(t,o)}catch(i){return console.error("Error getting documents:",i),[]}}function D(e){const s=document.querySelector(`[data-id="${e}"]`);if(!s)return;s.querySelector(".slide-stock__content-top-favorite_active").classList.remove("slide-stock__content-top-favorite_active")}function ae(){const e=document.querySelectorAll(".js-favorite-btn"),s=document.querySelector(".js-backdrop-favotite"),o=document.querySelector(".js-modal-favorite"),i=document.querySelector(".js-swiper-favorite"),t=document.querySelectorAll(".js-swiper-btn-close"),n=document.querySelector(".js-mob-menu");e.forEach(a=>a.addEventListener("click",c));function c(a){let u=JSON.parse(localStorage.getItem(b));s.classList.add("backdrop-favorite--visible"),o.classList.add("modal-favorite--visible"),document.body.classList.add("to-freeze"),y(u,i)}t.forEach(a=>a.addEventListener("click",r)),s.addEventListener("click",r);function r(a){s.classList.remove("backdrop-favorite--visible"),o.classList.remove("modal-favorite--visible"),!n.classList.contains("mob-menu--visible")&&document.body.classList.remove("to-freeze")}i.addEventListener("click",d);function d({target:a}){if(a.tagName!=="use")return;const u=a.closest(".swiper-slide"),g=u.dataset.id;let f=JSON.parse(localStorage.getItem(b)).filter(h=>h.id!==g);localStorage.setItem(b,JSON.stringify(f)),u.remove(),z(),D(g),f.length||r()}window.addEventListener("storage",a=>{a.key===b&&l()});function l(){let a=JSON.parse(localStorage.getItem(b))??[];document.querySelectorAll(".slide-stock__content-top-favorite_active").forEach(g=>g.classList.remove("slide-stock__content-top-favorite_active")),a.forEach(g=>{const w=document.querySelector(`[data-id="${g.id}"]`);if(w){const f=w.querySelector(".slide-stock__content-top-favorite");f&&f.classList.add("slide-stock__content-top-favorite_active")}}),y(a,i),a.length||r()}}async function re(e){console.log();const s=["Stock","Seasonal","Present"],o=N(e);async function i(n){try{const c=await x(j(o,n));let r=[];return c.forEach(d=>{r.push({id:d.id,...d.data()})}),r}catch(c){return console.error("Error getting documents:",c),[]}}let t=[];for(const n of s){const c=await i(n);t.push(...c)}W(t)}function W(e){const s=document.querySelector(".js-header-search-input"),o=document.querySelector(".js-header-search-input-list"),i=document.querySelector(".js-main-hero-product-catalog"),t=document.querySelector(".js-main-hero-product-catalog-title"),n=document.querySelector(".js-main-hero-container");s.addEventListener("input",()=>{let r=s.value.trim().toLowerCase();if(!r){o.innerHTML="",t.style.display="none",i.classList.remove("main-hero__product-catalog_active"),n.style.display="block",o.innerHTML="",i.innerHTML="";return}i.classList.add("main-hero__product-catalog_active");const d=e.filter(({title:a})=>a.toLowerCase().includes(r));y(d,i);let l=d.map(({title:a})=>`
          <li class="header__search-input-item">
            <p class="header__search-input-item-title js-search-list-item-title">
             ${a}
            </p>
          </li>`);o.innerHTML=[...new Set(l)].join("")}),o.addEventListener("click",c);function c({target:r}){if(!r.classList.contains("js-search-list-item-title"))return;const d=r.textContent.trim(),l=e.filter(({title:a})=>a.toLowerCase()===d.toLowerCase());s.value=d,y(l,i),t.style.display="block",n.style.display="none",o.innerHTML=""}s.addEventListener("blur",()=>{setTimeout(()=>{o.classList.add("header__search-input-list_hidden")},0)}),s.addEventListener("focus",()=>{o.classList.remove("header__search-input-list_hidden")})}export{q as K,Y as a,ae as b,G as c,se as d,b as e,ie as f,ne as g,K as h,oe as i,Q as j,U as k,X as l,R as m,ee as n,Z as p,te as r,re as s,z as u};
//# sourceMappingURL=searchProduct-BInsH4ej.js.map
