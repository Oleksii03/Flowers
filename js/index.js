import{h as b,m as v,c as h}from"../assets/accordion-BA6URqia.js";import{S as p,P as k,A as S,G as y,N as j,g as w,a as f,c as _,i as x}from"../assets/vendor-ANkZcBYd.js";p.use([k,S,y,j]);function $(){return new p(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function E(){const e=new p(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});d(e),window.addEventListener("resize",()=>d(e))}function P(){const e=new p(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});d(e),window.addEventListener("resize",()=>d(e))}function q(){const e=new p(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});d(e),window.addEventListener("resize",()=>d(e))}function L(){return new p(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function d(e){window.innerWidth<=425?(e.params.slidesPerView=2,e.params.spaceBetween=9):window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):e.params.slidesPerView="auto",e.update()}function C(e,o){const i=e.map(({id:a,discount:s,price:t,img:{png:r,webp:l},title:n})=>`
          <div class="swiper-slide js-main-swiper-slide" data-id="${a}">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite js-favorite"
                  width="13"
                  height="13">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${s?`<div class="slide-stock__content-top-discount">-${s}%</div>`:""}
             
                  <picture>
                    <source 
                      srcset=${l?`${l}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"} type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img js-main-swiper-slide-img"
                     src=${r?`${r}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${n}" />
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
                  <h5 class="slide-stock__content-bottom-title js-main-swiper-slide-title" title="${n}">
                    <span></span> ${n}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                    ${s?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${t}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new">
                      ${t*(1-s/100).toFixed(1)} грн
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
          </div>`);o.innerHTML=i.join("")}function B(e){const o=document.querySelector(".js-main-swiper-stock"),i=document.querySelector(".js-main-swiper-seasonal"),a=document.querySelector(".js-main-swiper-present"),s=["Stock","Seasonal","Present"],t=[o,i,a],r=w(e);async function l(n="",m=""){try{const c=await f(_(r,n)),g=[];c.forEach(u=>{g.push({id:u.id,...u.data()})}),C(g,m)}catch(c){return console.error("Error getting documents:",c),[]}}for(let n=0;n<s.length;n++){const m=s[n],c=t[n];l(m,c)}}function F(){const e=document.querySelector(".js-preloader");o();function o(){if(!localStorage.getItem("is-visit")){i();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function i(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function A(){return x({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function I(e){const o=document.querySelector(".js-main-swiper-forum"),i=e.map(({title:a,description:s,img:{png:t,webp:r}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${r?`${r}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.webp?alt=media&token=89f10487-08e7-491f-8448-5998d2423abc"}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${t?`${t}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      alt="${a}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${a}</p>

                <p class="main__slide-forum-description">${s}</p>
              </div>
            </div>
          </div>`);o.innerHTML=i.join("")}function z(e){const o=w(e);async function i(){try{const a=await f(_(o,"main-forum")),s=[];a.forEach(t=>{s.push({id:t.id,...t.data()})}),I(s)}catch(a){return console.error("Error getting documents:",a),[]}}i()}function V(){const e=document.querySelector(".js-main-container"),o="basket",i=JSON.parse(localStorage.getItem(o))??[];e.addEventListener("click",a);function a({target:s}){if(!s.classList.contains("js-basket"))return;const t=s.closest(".js-main-swiper-slide"),r=t.querySelector(".js-main-swiper-slide-title").textContent.trim(),l=t.querySelector(".js-main-swiper-slide-img").src,n=t.querySelector(".js-main-swiper-slide-price-old")?t.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,m=t.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),c={id:t.dataset.id,title:r,imgSrc:l,price:parseInt(m),oldPrice:parseInt(n)};i.some(({id:u})=>u===c.id)||(i.push(c),localStorage.setItem(o,JSON.stringify(i)))}}document.addEventListener("DOMContentLoaded",()=>{let e=A();b(),v(),$(),B(e),E(),F(),P(),q(),L(),z(e),h(),V()});
//# sourceMappingURL=index.js.map
