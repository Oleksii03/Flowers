import{S as v,P as j,A as q,G as I,N as H,g as A,a as M,c as O,i as B}from"../assets/vendor-ANkZcBYd.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function P(){const s=document.querySelectorAll(".js-dropdown-title-box"),c=document.querySelectorAll(".js-list-dropdown"),r=document.querySelector(".js-search-category-title-box"),l=document.querySelector(".js-search-category-list");let e=null;[...s].forEach(i=>{i.addEventListener("click",t)});function t(i){let a=i.target.closest(".js-dropdown-title-box");e=a.firstElementChild,a.nextElementSibling.classList.contains("header__list-dropdown_active")?a.nextElementSibling.classList.remove("header__list-dropdown_active"):([...s].forEach(m=>{m.nextElementSibling.classList.remove("header__list-dropdown_active")}),a.nextElementSibling.classList.add("header__list-dropdown_active")),o(i,e)}[...c].forEach(i=>{i.addEventListener("click",a=>o(a,e))});function o(i,a){i.target.tagName==="LI"&&(a.textContent=i.target.textContent,[...s].forEach(m=>{m.nextElementSibling.classList.remove("header__list-dropdown_active")}))}r.addEventListener("click",d);function d(i){l.classList.toggle("search-category__list_active"),r.firstElementChild.classList.toggle("search-category__arrow-icon_active")}l.addEventListener("click",n);function n(i){i.target.tagName==="LI"&&(r.lastElementChild.textContent=i.target.textContent,d())}}function N(){const s=document.querySelector(".js-mob-menu"),c=document.querySelector(".js-burger-btn"),r=document.querySelector(".js-mob-menu-btn-close"),l=document.querySelector(".js-backdrop"),e=document.querySelector(".js-choose-city"),t=document.querySelector(".js-city-selection-list"),o=document.querySelector(".js-active-city"),d=document.querySelector(".js-information-item"),n=document.querySelector(".js-information-sub-list"),i=document.querySelector(".js-categories-item"),a=document.querySelector(".js-menu-categories-btn-close"),m=document.querySelector(".js-menu-categories"),y=document.querySelectorAll(".js-categories-list-title-box"),L=document.querySelector(".js-menu-categories-list"),k=document.querySelectorAll(".js-categories-sub-list");c.addEventListener("click",_),r.addEventListener("click",_),l.addEventListener("click",w);function _(u){s.classList.toggle("mob-menu--visible"),l.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function w(u){_(),m.classList.remove("menu-categories--visible")}i.addEventListener("click",f),a.addEventListener("click",f);function f(u){m.classList.toggle("menu-categories--visible")}e.addEventListener("click",b);function b(u){if(!e.classList.contains("user-panel__city-selection-title_active")){t.style.maxHeight=t.scrollHeight+"px",e.classList.add("user-panel__city-selection-title_active");return}t.style.maxHeight=0,e.classList.remove("user-panel__city-selection-title_active")}t.addEventListener("click",S);function S(u){o.textContent=u.target.textContent,b()}d.addEventListener("click",x);function x(u){if(!d.classList.contains("nav-list-item__title-wrapper_active")){n.style.maxHeight=n.scrollHeight+"px",d.classList.add("nav-list-item__title-wrapper_active");return}n.style.maxHeight=0,d.classList.remove("nav-list-item__title-wrapper_active")}L.addEventListener("click",E);function E(u){const{target:p}=u;let g=p.closest(".js-categories-list-title-box");if(g){if(!g.classList.contains("menu-categories__list-title-box_active")){[...y].forEach(h=>{h.nextElementSibling.style.maxHeight=0,h.classList.remove("menu-categories__list-title-box_active")}),g.nextElementSibling.style.maxHeight=g.nextElementSibling.scrollHeight+"px",g.classList.add("menu-categories__list-title-box_active");return}g.nextElementSibling.style.maxHeight=0,g.classList.remove("menu-categories__list-title-box_active")}}k.forEach(u=>{u.addEventListener("click",C)});function C(u){const{target:p}=u;p.tagName==="LI"&&p.classList.toggle("menu-categories__sub-list-item_active")}}v.use([j,q,I,H]);function $(){const s=new v(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});function c(){window.innerWidth>=1440?s.params.spaceBetween=20:s.params.spaceBetween=9,s.update()}c(),window.addEventListener("resize",c)}function z(){return new v(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function T(s,c){const r=s.map(({discount:l,price:e,img:{png:t,webp:o},rating:d,title:n,type:i})=>`
          <div class="swiper-slide">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite"
                  width="13"
                  height="13">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                <div class="slide-stock__content-top-discount">-${l}%</div>

                  <picture>
                    <source srcset="${o}, type="image/webp" />
                    <img 
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img"
                     src="${t}" alt="${n}" />
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
                  <h5 class="slide-stock__content-bottom-title" title="${n}">
                    <span></span> ${n.length>=20?n.slice(0,18)+"...":n}
                  </h5>

                  <div class="slide-stock__content-bottom-price">
                    <div class="slide-stock__content-bottom-price-old"><span>${e}</span> грн</div>
                    <div class="slide-stock__content-bottom-price-new">${e*(1-l/100).toFixed(1)} грн</div>
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
          </div>`);c.innerHTML=r.join("")}function D(s){const c=document.querySelector(".js-main-swiper-stock"),r=["Stock"],l=[c],e=A(s);async function t(o="",d=""){try{const n=await M(O(e,o)),i=[];n.forEach(a=>{i.push({id:a.id,...a.data()})}),T(i,d)}catch(n){return console.error("Error getting documents:",n),[]}}for(let o=0;o<r.length;o++){const d=r[o],n=l[o];t(d,n)}}function V(){const s=document.querySelector(".js-preloader");c();function c(){if(!localStorage.getItem("is-visit")){r();return}s.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function r(){s.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{s.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function W(){return B({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}document.addEventListener("DOMContentLoaded",()=>{let s=W();P(),N(),z(),D(s),$(),V()});
//# sourceMappingURL=index.js.map
