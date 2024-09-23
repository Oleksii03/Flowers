import{S as _,P as q,A as P,G as B,N as I,g as H,a as A,c as M,i as O}from"../assets/vendor-ANkZcBYd.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function z(){const e=document.querySelectorAll(".js-dropdown-title-box"),c=document.querySelectorAll(".js-list-dropdown"),a=document.querySelector(".js-search-category-title-box"),n=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(i=>{i.addEventListener("click",s)});function s(i){let o=i.target.closest(".js-dropdown-title-box");t=o.firstElementChild,o.nextElementSibling.classList.contains("header__list-dropdown_active")?o.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(g=>{g.nextElementSibling.classList.remove("header__list-dropdown_active")}),o.nextElementSibling.classList.add("header__list-dropdown_active")),l(i,t)}[...c].forEach(i=>{i.addEventListener("click",o=>l(o,t))});function l(i,o){i.target.tagName==="LI"&&(o.textContent=i.target.textContent,[...e].forEach(g=>{g.nextElementSibling.classList.remove("header__list-dropdown_active")}))}a.addEventListener("click",r);function r(i){n.classList.toggle("search-category__list_active"),a.firstElementChild.classList.toggle("search-category__arrow-icon_active")}n.addEventListener("click",d);function d(i){i.target.tagName==="LI"&&(a.lastElementChild.textContent=i.target.textContent,r())}}function V(){const e=document.querySelector(".js-mob-menu"),c=document.querySelector(".js-burger-btn"),a=document.querySelector(".js-mob-menu-btn-close"),n=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),s=document.querySelector(".js-city-selection-list"),l=document.querySelector(".js-active-city"),r=document.querySelector(".js-information-item"),d=document.querySelector(".js-information-sub-list"),i=document.querySelector(".js-categories-item"),o=document.querySelector(".js-menu-categories-btn-close"),g=document.querySelector(".js-menu-categories"),v=document.querySelectorAll(".js-categories-list-title-box"),L=document.querySelector(".js-menu-categories-list"),k=document.querySelectorAll(".js-categories-sub-list");c.addEventListener("click",b),a.addEventListener("click",b),n.addEventListener("click",S);function b(u){e.classList.toggle("mob-menu--visible"),n.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function S(u){b(),g.classList.remove("menu-categories--visible")}i.addEventListener("click",w),o.addEventListener("click",w);function w(u){g.classList.toggle("menu-categories--visible")}t.addEventListener("click",h);function h(u){if(!t.classList.contains("user-panel__city-selection-title_active")){s.style.maxHeight=s.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}s.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}s.addEventListener("click",x);function x(u){l.textContent=u.target.textContent,h()}r.addEventListener("click",E);function E(u){if(!r.classList.contains("nav-list-item__title-wrapper_active")){d.style.maxHeight=d.scrollHeight+"px",r.classList.add("nav-list-item__title-wrapper_active");return}d.style.maxHeight=0,r.classList.remove("nav-list-item__title-wrapper_active")}L.addEventListener("click",C);function C(u){const{target:f}=u;let m=f.closest(".js-categories-list-title-box");if(m){if(!m.classList.contains("menu-categories__list-title-box_active")){[...v].forEach(y=>{y.nextElementSibling.style.maxHeight=0,y.classList.remove("menu-categories__list-title-box_active")}),m.nextElementSibling.style.maxHeight=m.nextElementSibling.scrollHeight+"px",m.classList.add("menu-categories__list-title-box_active");return}m.nextElementSibling.style.maxHeight=0,m.classList.remove("menu-categories__list-title-box_active")}}k.forEach(u=>{u.addEventListener("click",j)});function j(u){const{target:f}=u;f.tagName==="LI"&&f.classList.toggle("menu-categories__sub-list-item_active")}}_.use([q,P,B,I]);function $(){return new _(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function N(){const e=new _(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function D(){const e=new _(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function T(){const e=new _(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});p(e),window.addEventListener("resize",()=>p(e))}function W(){return new _(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function p(e){window.innerWidth<=425?(e.params.slidesPerView=2,e.params.spaceBetween=9):window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):e.params.slidesPerView="auto",e.update()}function F(e,c){const a=e.map(({discount:n,price:t,img:{png:s,webp:l},title:r})=>`
          <div class="swiper-slide">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite"
                  width="13"
                  height="13">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${n?`<div class="slide-stock__content-top-discount">-${n}%</div>`:""}
             
                  <picture>
                    <source srcset="${l}, type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img"
                     src="${s}" alt="${r}" />
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
                  <h5 class="slide-stock__content-bottom-title" title="${r}">
                    <span></span> ${r.length>=20?r.slice(0,15)+"...":r}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                  ${n?`<div class="slide-stock__content-bottom-price-old"><span>${t}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new">${t*(1-n/100).toFixed(1)} грн</div>
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
          </div>`);c.innerHTML=a.join("")}function K(e){const c=document.querySelector(".js-main-swiper-stock"),a=document.querySelector(".js-main-swiper-seasonal"),n=document.querySelector(".js-main-swiper-present"),t=["Stock","Seasonal","Present"],s=[c,a,n],l=H(e);async function r(d="",i=""){try{const o=await A(M(l,d)),g=[];o.forEach(v=>{g.push({id:v.id,...v.data()})}),F(g,i)}catch(o){return console.error("Error getting documents:",o),[]}}for(let d=0;d<t.length;d++){const i=t[d],o=s[d];r(i,o)}}function G(){const e=document.querySelector(".js-preloader");c();function c(){if(!localStorage.getItem("is-visit")){a();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function a(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function Q(){return O({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}document.addEventListener("DOMContentLoaded",()=>{let e=Q();z(),V(),$(),K(e),N(),G(),D(),T(),W()});
//# sourceMappingURL=index.js.map
