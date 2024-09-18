import{S as v,P as q,A as I,G as P,N as H,g as A,a as B,c as M,i as O}from"../assets/vendor-ANkZcBYd.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function $(){const e=document.querySelectorAll(".js-dropdown-title-box"),c=document.querySelectorAll(".js-list-dropdown"),r=document.querySelector(".js-search-category-title-box"),n=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(i=>{i.addEventListener("click",s)});function s(i){let a=i.target.closest(".js-dropdown-title-box");t=a.firstElementChild,a.nextElementSibling.classList.contains("header__list-dropdown_active")?a.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(g=>{g.nextElementSibling.classList.remove("header__list-dropdown_active")}),a.nextElementSibling.classList.add("header__list-dropdown_active")),l(i,t)}[...c].forEach(i=>{i.addEventListener("click",a=>l(a,t))});function l(i,a){i.target.tagName==="LI"&&(a.textContent=i.target.textContent,[...e].forEach(g=>{g.nextElementSibling.classList.remove("header__list-dropdown_active")}))}r.addEventListener("click",o);function o(i){n.classList.toggle("search-category__list_active"),r.firstElementChild.classList.toggle("search-category__arrow-icon_active")}n.addEventListener("click",u);function u(i){i.target.tagName==="LI"&&(r.lastElementChild.textContent=i.target.textContent,o())}}function N(){const e=document.querySelector(".js-mob-menu"),c=document.querySelector(".js-burger-btn"),r=document.querySelector(".js-mob-menu-btn-close"),n=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),s=document.querySelector(".js-city-selection-list"),l=document.querySelector(".js-active-city"),o=document.querySelector(".js-information-item"),u=document.querySelector(".js-information-sub-list"),i=document.querySelector(".js-categories-item"),a=document.querySelector(".js-menu-categories-btn-close"),g=document.querySelector(".js-menu-categories"),w=document.querySelectorAll(".js-categories-list-title-box"),L=document.querySelector(".js-menu-categories-list"),k=document.querySelectorAll(".js-categories-sub-list");c.addEventListener("click",f),r.addEventListener("click",f),n.addEventListener("click",S);function f(d){e.classList.toggle("mob-menu--visible"),n.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function S(d){f(),g.classList.remove("menu-categories--visible")}i.addEventListener("click",b),a.addEventListener("click",b);function b(d){g.classList.toggle("menu-categories--visible")}t.addEventListener("click",h);function h(d){if(!t.classList.contains("user-panel__city-selection-title_active")){s.style.maxHeight=s.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}s.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}s.addEventListener("click",x);function x(d){l.textContent=d.target.textContent,h()}o.addEventListener("click",E);function E(d){if(!o.classList.contains("nav-list-item__title-wrapper_active")){u.style.maxHeight=u.scrollHeight+"px",o.classList.add("nav-list-item__title-wrapper_active");return}u.style.maxHeight=0,o.classList.remove("nav-list-item__title-wrapper_active")}L.addEventListener("click",C);function C(d){const{target:p}=d;let m=p.closest(".js-categories-list-title-box");if(m){if(!m.classList.contains("menu-categories__list-title-box_active")){[...w].forEach(y=>{y.nextElementSibling.style.maxHeight=0,y.classList.remove("menu-categories__list-title-box_active")}),m.nextElementSibling.style.maxHeight=m.nextElementSibling.scrollHeight+"px",m.classList.add("menu-categories__list-title-box_active");return}m.nextElementSibling.style.maxHeight=0,m.classList.remove("menu-categories__list-title-box_active")}}k.forEach(d=>{d.addEventListener("click",j)});function j(d){const{target:p}=d;p.tagName==="LI"&&p.classList.toggle("menu-categories__sub-list-item_active")}}v.use([q,I,P,H]);function z(){return new v(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function V(){const e=new v(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});_(e),window.addEventListener("resize",()=>_(e))}function D(){const e=new v(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});_(e),window.addEventListener("resize",()=>_(e))}function _(e){window.innerWidth<=425?e.params.slidesPerView=2:window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):(e.params.spaceBetween=9,e.params.slidesPerView="auto"),e.update()}function T(e,c){const r=e.map(({discount:n,price:t,img:{png:s,webp:l},title:o})=>`
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
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img"
                     src="${s}" alt="${o}" />
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
                  <h5 class="slide-stock__content-bottom-title" title="${o}">
                    <span></span> ${o.length>=20?o.slice(0,15)+"...":o}
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
          </div>`);c.innerHTML=r.join("")}function W(e){const c=document.querySelector(".js-main-swiper-stock"),r=document.querySelector(".js-main-swiper-seasonal"),n=["Stock","Seasonal"],t=[c,r],s=A(e);async function l(o="",u=""){try{const i=await B(M(s,o)),a=[];i.forEach(g=>{a.push({id:g.id,...g.data()})}),T(a,u)}catch(i){return console.error("Error getting documents:",i),[]}}for(let o=0;o<n.length;o++){const u=n[o],i=t[o];l(u,i)}}function F(){const e=document.querySelector(".js-preloader");c();function c(){if(!localStorage.getItem("is-visit")){r();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function r(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function K(){return O({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}document.addEventListener("DOMContentLoaded",()=>{let e=K();$(),N(),z(),W(e),V(),F(),D()});
//# sourceMappingURL=index.js.map
