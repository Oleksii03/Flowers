import{S as f,P,A as B,G as I,N as H,g as L,a as k,c as S,i as M}from"../assets/vendor-ANkZcBYd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function F(){const e=document.querySelectorAll(".js-dropdown-title-box"),r=document.querySelectorAll(".js-list-dropdown"),o=document.querySelector(".js-search-category-title-box"),i=document.querySelector(".js-search-category-list");let t=null;[...e].forEach(n=>{n.addEventListener("click",s)});function s(n){let c=n.target.closest(".js-dropdown-title-box");t=c.firstElementChild,c.nextElementSibling.classList.contains("header__list-dropdown_active")?c.nextElementSibling.classList.remove("header__list-dropdown_active"):([...e].forEach(m=>{m.nextElementSibling.classList.remove("header__list-dropdown_active")}),c.nextElementSibling.classList.add("header__list-dropdown_active")),a(n,t)}[...r].forEach(n=>{n.addEventListener("click",c=>a(c,t))});function a(n,c){n.target.tagName==="LI"&&(c.textContent=n.target.textContent,[...e].forEach(m=>{m.nextElementSibling.classList.remove("header__list-dropdown_active")}))}o.addEventListener("click",l);function l(n){i.classList.toggle("search-category__list_active"),o.firstElementChild.classList.toggle("search-category__arrow-icon_active")}i.addEventListener("click",d);function d(n){n.target.tagName==="LI"&&(o.lastElementChild.textContent=n.target.textContent,l())}}function O(){const e=document.querySelector(".js-mob-menu"),r=document.querySelector(".js-burger-btn"),o=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-backdrop"),t=document.querySelector(".js-choose-city"),s=document.querySelector(".js-city-selection-list"),a=document.querySelector(".js-active-city"),l=document.querySelector(".js-information-item"),d=document.querySelector(".js-information-sub-list"),n=document.querySelector(".js-categories-item"),c=document.querySelector(".js-menu-categories-btn-close"),m=document.querySelector(".js-menu-categories"),_=document.querySelectorAll(".js-categories-list-title-box"),x=document.querySelector(".js-menu-categories-list"),E=document.querySelectorAll(".js-categories-sub-list");r.addEventListener("click",b),o.addEventListener("click",b),i.addEventListener("click",C);function b(u){e.classList.toggle("mob-menu--visible"),i.classList.toggle("backdrop--visible"),document.body.classList.toggle("to-freeze")}function C(u){b(),m.classList.remove("menu-categories--visible")}n.addEventListener("click",h),c.addEventListener("click",h);function h(u){m.classList.toggle("menu-categories--visible")}t.addEventListener("click",w);function w(u){if(!t.classList.contains("user-panel__city-selection-title_active")){s.style.maxHeight=s.scrollHeight+"px",t.classList.add("user-panel__city-selection-title_active");return}s.style.maxHeight=0,t.classList.remove("user-panel__city-selection-title_active")}s.addEventListener("click",q);function q(u){a.textContent=u.target.textContent,w()}l.addEventListener("click",j);function j(u){if(!l.classList.contains("nav-list-item__title-wrapper_active")){d.style.maxHeight=d.scrollHeight+"px",l.classList.add("nav-list-item__title-wrapper_active");return}d.style.maxHeight=0,l.classList.remove("nav-list-item__title-wrapper_active")}x.addEventListener("click",A);function A(u){const{target:v}=u;let p=v.closest(".js-categories-list-title-box");if(p){if(!p.classList.contains("menu-categories__list-title-box_active")){[..._].forEach(y=>{y.nextElementSibling.style.maxHeight=0,y.classList.remove("menu-categories__list-title-box_active")}),p.nextElementSibling.style.maxHeight=p.nextElementSibling.scrollHeight+"px",p.classList.add("menu-categories__list-title-box_active");return}p.nextElementSibling.style.maxHeight=0,p.classList.remove("menu-categories__list-title-box_active")}}E.forEach(u=>{u.addEventListener("click",$)});function $(u){const{target:v}=u;v.tagName==="LI"&&v.classList.toggle("menu-categories__sub-list-item_active")}}f.use([P,B,I,H]);function z(){return new f(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function V(){const e=new f(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});g(e),window.addEventListener("resize",()=>g(e))}function N(){const e=new f(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});g(e),window.addEventListener("resize",()=>g(e))}function T(){const e=new f(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});g(e),window.addEventListener("resize",()=>g(e))}function D(){return new f(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function g(e){window.innerWidth<=425?(e.params.slidesPerView=2,e.params.spaceBetween=9):window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):e.params.slidesPerView="auto",e.update()}function W(e,r){const o=e.map(({discount:i,price:t,img:{png:s,webp:a},title:l})=>`
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
                    <source 
                      srcset="${a?`${a}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"}, type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img"
                     src="${s?`${s}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"}" alt="${l}" />
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
          </div>`);r.innerHTML=o.join("")}function K(e){const r=document.querySelector(".js-main-swiper-stock"),o=document.querySelector(".js-main-swiper-seasonal"),i=document.querySelector(".js-main-swiper-present"),t=["Stock","Seasonal","Present"],s=[r,o,i],a=L(e);async function l(d="",n=""){try{const c=await k(S(a,d)),m=[];c.forEach(_=>{m.push({id:_.id,..._.data()})}),W(m,n)}catch(c){return console.error("Error getting documents:",c),[]}}for(let d=0;d<t.length;d++){const n=t[d],c=s[d];l(n,c)}}function G(){const e=document.querySelector(".js-preloader");r();function r(){if(!localStorage.getItem("is-visit")){o();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function o(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function Q(){return M({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function R(e){const r=document.querySelector(".js-main-swiper-forum"),o=e.map(({title:i,description:t,img:{png:s,webp:a}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${a?`${a}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.webp?alt=media&token=89f10487-08e7-491f-8448-5998d2423abc"}
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
          </div>`);r.innerHTML=o.join("")}function Y(e){const r=L(e);async function o(){try{const i=await k(S(r,"main-forum")),t=[];i.forEach(s=>{t.push({id:s.id,...s.data()})}),R(t)}catch(i){return console.error("Error getting documents:",i),[]}}o()}function J(){class e{constructor(){this.tabs=document.querySelectorAll(".accordion"),this.addActive()}addActive(){this.tabs.forEach(o=>{o.addEventListener("click",i=>{i.target.classList.contains("accordion__title")&&(o.classList.toggle("accordion_active"),this.removeActive(i))})})}removeActive(o){this.tabs.forEach(i=>{i.contains(o.target)||i.classList.remove("accordion_active")})}}new e}document.addEventListener("DOMContentLoaded",()=>{let e=Q();F(),O(),z(),K(e),V(),G(),N(),T(),D(),Y(e),J()});
//# sourceMappingURL=index.js.map
