import{S as v,P as q,A as I,G as P,N as H,g as A,a as B,c as M,i as O}from"../assets/vendor-ANkZcBYd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function N(){const e=document.querySelectorAll(".js-dropdown-title-box"),r=document.querySelectorAll(".js-list-dropdown"),a=document.querySelector(".js-search-category-title-box"),o=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(i=>{i.addEventListener("click",s)});function s(i){let l=i.target.closest(".js-dropdown-title-box");t=l.firstElementChild,l.nextElementSibling.classList.contains("header__list-dropdown_active")?l.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(g=>{g.nextElementSibling.classList.remove("header__list-dropdown_active")}),l.nextElementSibling.classList.add("header__list-dropdown_active")),d(i,t)}[...r].forEach(i=>{i.addEventListener("click",l=>d(l,t))});function d(i,l){i.target.tagName==="LI"&&(l.textContent=i.target.textContent,[...e].forEach(g=>{g.nextElementSibling.classList.remove("header__list-dropdown_active")}))}a.addEventListener("click",n);function n(i){o.classList.toggle("search-category__list_active"),a.firstElementChild.classList.toggle("search-category__arrow-icon_active")}o.addEventListener("click",c);function c(i){i.target.tagName==="LI"&&(a.lastElementChild.textContent=i.target.textContent,n())}}function $(){const e=document.querySelector(".js-mob-menu"),r=document.querySelector(".js-burger-btn"),a=document.querySelector(".js-mob-menu-btn-close"),o=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),s=document.querySelector(".js-city-selection-list"),d=document.querySelector(".js-active-city"),n=document.querySelector(".js-information-item"),c=document.querySelector(".js-information-sub-list"),i=document.querySelector(".js-categories-item"),l=document.querySelector(".js-menu-categories-btn-close"),g=document.querySelector(".js-menu-categories"),w=document.querySelectorAll(".js-categories-list-title-box"),L=document.querySelector(".js-menu-categories-list"),k=document.querySelectorAll(".js-categories-sub-list");r.addEventListener("click",f),a.addEventListener("click",f),o.addEventListener("click",S);function f(u){e.classList.toggle("mob-menu--visible"),o.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function S(u){f(),g.classList.remove("menu-categories--visible")}i.addEventListener("click",b),l.addEventListener("click",b);function b(u){g.classList.toggle("menu-categories--visible")}t.addEventListener("click",h);function h(u){if(!t.classList.contains("user-panel__city-selection-title_active")){s.style.maxHeight=s.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}s.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}s.addEventListener("click",x);function x(u){d.textContent=u.target.textContent,h()}n.addEventListener("click",E);function E(u){if(!n.classList.contains("nav-list-item__title-wrapper_active")){c.style.maxHeight=c.scrollHeight+"px",n.classList.add("nav-list-item__title-wrapper_active");return}c.style.maxHeight=0,n.classList.remove("nav-list-item__title-wrapper_active")}L.addEventListener("click",C);function C(u){const{target:p}=u;let m=p.closest(".js-categories-list-title-box");if(m){if(!m.classList.contains("menu-categories__list-title-box_active")){[...w].forEach(y=>{y.nextElementSibling.style.maxHeight=0,y.classList.remove("menu-categories__list-title-box_active")}),m.nextElementSibling.style.maxHeight=m.nextElementSibling.scrollHeight+"px",m.classList.add("menu-categories__list-title-box_active");return}m.nextElementSibling.style.maxHeight=0,m.classList.remove("menu-categories__list-title-box_active")}}k.forEach(u=>{u.addEventListener("click",j)});function j(u){const{target:p}=u;p.tagName==="LI"&&p.classList.toggle("menu-categories__sub-list-item_active")}}v.use([q,I,P,H]);function z(){return new v(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function V(){const e=new v(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});_(e),window.addEventListener("resize",()=>_(e))}function D(){const e=new v(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});_(e),window.addEventListener("resize",()=>_(e))}function _(e){window.innerWidth<=425?e.params.slidesPerView=2:window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):(e.params.spaceBetween=9,e.params.slidesPerView="auto"),e.update()}function T(e,r){const a=e.map(({discount:o,price:t,img:{png:s,webp:d},rating:n,title:c,type:i})=>`
          <div class="swiper-slide">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite"
                  width="13"
                  height="13">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                <div class="slide-stock__content-top-discount">-${o}%</div>

                  <picture>
                    <source srcset="${d}, type="image/webp" />
                    <img 
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img"
                     src="${s}" alt="${c}" />
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
                  <h5 class="slide-stock__content-bottom-title" title="${c}">
                    <span></span> ${c.length>=20?c.slice(0,15)+"...":c}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                  ${o?`<div class="slide-stock__content-bottom-price-old"><span>${t}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new">${t*(1-o/100).toFixed(1)} грн</div>
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
          </div>`);r.innerHTML=a.join("")}function W(e){const r=document.querySelector(".js-main-swiper-stock"),a=document.querySelector(".js-main-swiper-seasonal"),o=["Stock","Stock"],t=[r,a],s=A(e);async function d(n="",c=""){try{const i=await B(M(s,n)),l=[];i.forEach(g=>{l.push({id:g.id,...g.data()})}),T(l,c)}catch(i){return console.error("Error getting documents:",i),[]}}for(let n=0;n<o.length;n++){const c=o[n],i=t[n];d(c,i)}}function F(){const e=document.querySelector(".js-preloader");r();function r(){if(!localStorage.getItem("is-visit")){a();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function a(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function K(){return O({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}document.addEventListener("DOMContentLoaded",()=>{let e=K();N(),$(),z(),W(e),V(),F(),D()});
//# sourceMappingURL=index.js.map
