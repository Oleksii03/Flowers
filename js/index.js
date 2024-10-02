import{K as g,a as f,u,h as S,m as y,c as j}from"../assets/update-local-storage-counter-CAwkdD6p.js";import{S as p,P as E,A as L,G as x,N as $,g as b,a as h,c as k,i as P}from"../assets/vendor-ANkZcBYd.js";p.use([E,L,x,$]);function q(){return new p(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function F(){const e=new p(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});d(e),window.addEventListener("resize",()=>d(e))}function I(){const e=new p(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});d(e),window.addEventListener("resize",()=>d(e))}function A(){const e=new p(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});d(e),window.addEventListener("resize",()=>d(e))}function C(){return new p(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function d(e){window.innerWidth<=425?(e.params.slidesPerView=2,e.params.spaceBetween=9):window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):e.params.slidesPerView="auto",e.update()}function O(e,t){const i=e.map(({id:r,discount:o,price:c,img:{png:s,webp:a},title:n})=>`
          <div class="swiper-slide js-main-swiper-slide" data-id="${r}">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite js-favorite"
                  width="33"
                  height="28">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${o?`<div class="slide-stock__content-top-discount">-${o}%</div>`:""}
             
                  <picture>
                    <source 
                      srcset=${a?`${a}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"} type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img js-main-swiper-slide-img"
                     src=${s?`${s}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${n}"
                     data-src="${a}" />
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

                    ${o?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${c}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${o}">
                      ${c*(1-o/100).toFixed(1)} грн
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
          </div>`);t.innerHTML=i.join("")}function B(e){const t=document.querySelector(".js-main-swiper-stock"),i=document.querySelector(".js-main-swiper-seasonal"),r=document.querySelector(".js-main-swiper-present"),o=["Stock","Seasonal","Present"],c=[t,i,r],s=b(e);async function a(n="",l=""){try{const m=await h(k(s,n)),w=[];m.forEach(_=>{w.push({id:_.id,..._.data()})}),O(w,l)}catch(m){return console.error("Error getting documents:",m),[]}}for(let n=0;n<o.length;n++){const l=o[n],m=c[n];a(l,m)}}function N(){const e=document.querySelector(".js-preloader");t();function t(){if(!localStorage.getItem("is-visit")){i();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function i(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function V(){return P({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function z(e){const t=document.querySelector(".js-main-swiper-forum"),i=e.map(({title:r,description:o,img:{png:c,webp:s}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${s?`${s}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.webp?alt=media&token=89f10487-08e7-491f-8448-5998d2423abc"}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${c?`${c}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      alt="${r}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${r}</p>

                <p class="main__slide-forum-description">${o}</p>
              </div>
            </div>
          </div>`);t.innerHTML=i.join("")}function T(e){const t=b(e);async function i(){try{const r=await h(k(t,"main-forum")),o=[];r.forEach(c=>{o.push({id:c.id,...c.data()})}),z(o)}catch(r){return console.error("Error getting documents:",r),[]}}i()}function v(e){const t=e.closest(".js-main-swiper-slide"),i=t.querySelector(".js-main-swiper-slide-title").textContent.trim(),r=t.querySelector(".js-main-swiper-slide-img").src,o=t.querySelector(".js-main-swiper-slide-img").dataset.src,c=t.querySelector(".js-main-swiper-slide-price-old")?t.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,s=t.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),a=t.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:t.dataset.id,title:i,img:{png:r||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:o||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(s),oldPrice:parseInt(c),discount:Number(a)}}function D(){const e=document.querySelector(".js-main-container");let t=JSON.parse(localStorage.getItem(g))??[],i=JSON.parse(localStorage.getItem(f))??[];e.addEventListener("click",r);function r({target:s}){s.classList.contains("js-basket")&&o(s),(s.classList.contains("js-favorite")||s.tagName==="use")&&c(s)}function o(s){const a=v(s);t.some(({id:l})=>l===a.id)||(t.push(a),localStorage.setItem(g,JSON.stringify(t)),u())}function c(s){let a=s.closest(".js-favorite");if(a)if(a.classList.contains("slide-stock__content-top-favorite_active")){a.classList.remove("slide-stock__content-top-favorite_active");const n=a.closest(".js-main-swiper-slide").dataset.id;i=i.filter(({id:l})=>l!==n),localStorage.setItem(f,JSON.stringify(i)),u()}else{a.classList.add("slide-stock__content-top-favorite_active");const n=v(s);i.push(n),localStorage.setItem(f,JSON.stringify(i)),u()}}u(),addEventListener("load",()=>{const s=document.querySelectorAll(".js-main-swiper-slide");i.forEach(({id:a})=>{[...s].forEach(n=>{n.dataset.id===a&&n.querySelector(".js-favorite").classList.add("slide-stock__content-top-favorite_active")})})}),window.addEventListener("storage",()=>{t=JSON.parse(localStorage.getItem(g))??[],u()})}document.addEventListener("DOMContentLoaded",()=>{let e=V();S(),y(),q(),B(e),F(),N(),I(),A(),C(),T(e),j(),D()});
//# sourceMappingURL=index.js.map
