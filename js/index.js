import{S as _,P as B,A as I,G as H,N as M,g as L,a as k,c as S,i as A}from"../assets/vendor-ANkZcBYd.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function O(){const e=document.querySelectorAll(".js-dropdown-title-box"),n=document.querySelectorAll(".js-list-dropdown"),r=document.querySelector(".js-search-category-title-box"),i=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(o=>{o.addEventListener("click",s)});function s(o){let a=o.target.closest(".js-dropdown-title-box");t=a.firstElementChild,a.nextElementSibling.classList.contains("header__list-dropdown_active")?a.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(m=>{m.nextElementSibling.classList.remove("header__list-dropdown_active")}),a.nextElementSibling.classList.add("header__list-dropdown_active")),c(o,t)}[...n].forEach(o=>{o.addEventListener("click",a=>c(a,t))});function c(o,a){o.target.tagName==="LI"&&(a.textContent=o.target.textContent,[...e].forEach(m=>{m.nextElementSibling.classList.remove("header__list-dropdown_active")}))}r.addEventListener("click",l);function l(o){i.classList.toggle("search-category__list_active"),r.firstElementChild.classList.toggle("search-category__arrow-icon_active")}i.addEventListener("click",d);function d(o){o.target.tagName==="LI"&&(r.lastElementChild.textContent=o.target.textContent,l())}}function z(){const e=document.querySelector(".js-mob-menu"),n=document.querySelector(".js-burger-btn"),r=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),s=document.querySelector(".js-city-selection-list"),c=document.querySelector(".js-active-city"),l=document.querySelector(".js-information-item"),d=document.querySelector(".js-information-sub-list"),o=document.querySelector(".js-categories-item"),a=document.querySelector(".js-menu-categories-btn-close"),m=document.querySelector(".js-menu-categories"),f=document.querySelectorAll(".js-categories-list-title-box"),x=document.querySelector(".js-menu-categories-list"),E=document.querySelectorAll(".js-categories-sub-list");n.addEventListener("click",b),r.addEventListener("click",b),i.addEventListener("click",C);function b(u){e.classList.toggle("mob-menu--visible"),i.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function C(u){b(),m.classList.remove("menu-categories--visible")}o.addEventListener("click",h),a.addEventListener("click",h);function h(u){m.classList.toggle("menu-categories--visible")}t.addEventListener("click",w);function w(u){if(!t.classList.contains("user-panel__city-selection-title_active")){s.style.maxHeight=s.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}s.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}s.addEventListener("click",j);function j(u){c.textContent=u.target.textContent,w()}l.addEventListener("click",q);function q(u){if(!l.classList.contains("nav-list-item__title-wrapper_active")){d.style.maxHeight=d.scrollHeight+"px",l.classList.add("nav-list-item__title-wrapper_active");return}d.style.maxHeight=0,l.classList.remove("nav-list-item__title-wrapper_active")}x.addEventListener("click",P);function P(u){const{target:v}=u;let g=v.closest(".js-categories-list-title-box");if(g){if(!g.classList.contains("menu-categories__list-title-box_active")){[...f].forEach(y=>{y.nextElementSibling.style.maxHeight=0,y.classList.remove("menu-categories__list-title-box_active")}),g.nextElementSibling.style.maxHeight=g.nextElementSibling.scrollHeight+"px",g.classList.add("menu-categories__list-title-box_active");return}g.nextElementSibling.style.maxHeight=0,g.classList.remove("menu-categories__list-title-box_active")}}E.forEach(u=>{u.addEventListener("click",$)});function $(u){const{target:v}=u;v.tagName==="LI"&&v.classList.toggle("menu-categories__sub-list-item_active")}}_.use([B,I,H,M]);function V(){return new _(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function N(){const e=new _(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function F(){const e=new _(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function T(){const e=new _(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function D(){return new _(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function p(e){window.innerWidth<=425?(e.params.slidesPerView=2,e.params.spaceBetween=9):window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):e.params.slidesPerView="auto",e.update()}function W(e,n){const r=e.map(({discount:i,price:t,img:{png:s,webp:c},title:l})=>`
          <div class="swiper-slide">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite"
                  width="13"
                  height="13">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${i?`<div class="slide-stock__content-top-discount">-${i}%</div>`:""}
             
                  <picture>
                    <source srcset="${c}, type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img"
                     src="${s}" alt="${l}" />
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
                  <h5 class="slide-stock__content-bottom-title" title="${l}">
                    <span></span> ${l.length>=20?l.slice(0,15)+"...":l}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                  ${i?`<div class="slide-stock__content-bottom-price-old"><span>${t}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new">${t*(1-i/100).toFixed(1)} грн</div>
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

                  <button class="slide-stock__content-bottom-buy-btn">
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
          </div>`);n.innerHTML=r.join("")}function K(e){const n=document.querySelector(".js-main-swiper-stock"),r=document.querySelector(".js-main-swiper-seasonal"),i=document.querySelector(".js-main-swiper-present"),t=["Stock","Seasonal","Present"],s=[n,r,i],c=L(e);async function l(d="",o=""){try{const a=await k(S(c,d)),m=[];a.forEach(f=>{m.push({id:f.id,...f.data()})}),W(m,o)}catch(a){return console.error("Error getting documents:",a),[]}}for(let d=0;d<t.length;d++){const o=t[d],a=s[d];l(o,a)}}function G(){const e=document.querySelector(".js-preloader");n();function n(){if(!localStorage.getItem("is-visit")){r();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function r(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function Q(){return A({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function R(e){const n=document.querySelector(".js-main-swiper-forum"),r=e.map(({title:i,description:t,img:{png:s,webp:c}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${c?`${c}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${s?`${s}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      alt="${i}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${i}</p>

                <p class="main__slide-forum-description">${t}</p>
              </div>
            </div>
          </div>`);n.innerHTML=r.join("")}function Y(e){const n=L(e);async function r(){try{const i=await k(S(n,"main-forum")),t=[];i.forEach(s=>{t.push({id:s.id,...s.data()})}),R(t)}catch(i){return console.error("Error getting documents:",i),[]}}r()}document.addEventListener("DOMContentLoaded",()=>{let e=Q();O(),z(),V(),K(e),N(),G(),F(),T(),D(),Y(e)});
//# sourceMappingURL=index.js.map
