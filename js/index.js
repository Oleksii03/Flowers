import{K as w,u as m,a as f,h as j,m as E,c as L}from"../assets/update-local-storage-counter-CAwkdD6p.js";import{S as d,P as x,A as $,G as P,N as q,g as h,a as k,c as S,i as F}from"../assets/vendor-ANkZcBYd.js";d.use([x,$,P,q]);function I(){return new d(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function A(){const e=new d(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});l(e),window.addEventListener("resize",()=>l(e))}function C(){const e=new d(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});l(e),window.addEventListener("resize",()=>l(e))}function O(){const e=new d(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});l(e),window.addEventListener("resize",()=>l(e))}function B(){return new d(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function l(e){window.innerWidth<=425?(e.params.slidesPerView=2,e.params.spaceBetween=9):window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):e.params.slidesPerView="auto",e.update()}function N(e,t){const c=e.map(({id:a,discount:o,price:s,img:{png:i,webp:n},title:r})=>`
          <div class="swiper-slide js-main-swiper-slide" data-id="${a}">
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
                      srcset=${n?`${n}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"} type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img js-main-swiper-slide-img"
                     src=${i?`${i}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${r}"
                     data-src="${n}" />
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
                  <h5 class="slide-stock__content-bottom-title js-main-swiper-slide-title" title="${r}">
                    <span></span> ${r}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                    ${o?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${s}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${o}">
                      ${s*(1-o/100).toFixed(1)} грн
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
          </div>`);t.innerHTML=c.join("")}function V(e){const t=document.querySelector(".js-main-swiper-stock"),c=document.querySelector(".js-main-swiper-seasonal"),a=document.querySelector(".js-main-swiper-present"),o=["Stock","Seasonal","Present"],s=[t,c,a],i=h(e);async function n(r="",g=""){try{const p=await k(S(i,r)),_=[];p.forEach(v=>{_.push({id:v.id,...v.data()})}),N(_,g)}catch(p){return console.error("Error getting documents:",p),[]}}for(let r=0;r<o.length;r++){const g=o[r],p=s[r];n(g,p)}}function z(){const e=document.querySelector(".js-preloader");t();function t(){if(!localStorage.getItem("is-visit")){c();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function c(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function T(){return F({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function D(e){const t=document.querySelector(".js-main-swiper-forum"),c=e.map(({title:a,description:o,img:{png:s,webp:i}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${i?`${i}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.webp?alt=media&token=89f10487-08e7-491f-8448-5998d2423abc"}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${s?`${s}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      alt="${a}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${a}</p>

                <p class="main__slide-forum-description">${o}</p>
              </div>
            </div>
          </div>`);t.innerHTML=c.join("")}function J(e){const t=h(e);async function c(){try{const a=await k(S(t,"main-forum")),o=[];a.forEach(s=>{o.push({id:s.id,...s.data()})}),D(o)}catch(a){return console.error("Error getting documents:",a),[]}}c()}function b(e){const t=e.closest(".js-main-swiper-slide"),c=t.querySelector(".js-main-swiper-slide-title").textContent.trim(),a=t.querySelector(".js-main-swiper-slide-img").src,o=t.querySelector(".js-main-swiper-slide-img").dataset.src,s=t.querySelector(".js-main-swiper-slide-price-old")?t.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,i=t.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),n=t.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:t.dataset.id,title:c,img:{png:a||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:o||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(i),oldPrice:parseInt(s),discount:Number(n)}}let u=JSON.parse(localStorage.getItem(w))??[];function y(){const e=document.querySelector(".js-main-container");let t=JSON.parse(localStorage.getItem(f))??[];e.addEventListener("click",c);function c({target:s}){s.classList.contains("js-basket")&&a(s),(s.classList.contains("js-favorite")||s.tagName==="use")&&o(s)}function a(s){const i=b(s);u.some(({id:r})=>r===i.id)||(u.push(i),localStorage.setItem(w,JSON.stringify(u)),m())}function o(s){let i=s.closest(".js-favorite");if(i)if(i.classList.contains("slide-stock__content-top-favorite_active")){i.classList.remove("slide-stock__content-top-favorite_active");const n=i.closest(".js-main-swiper-slide").dataset.id;t=t.filter(({id:r})=>r!==n),localStorage.setItem(f,JSON.stringify(t)),m()}else{i.classList.add("slide-stock__content-top-favorite_active");const n=b(s);t.push(n),localStorage.setItem(f,JSON.stringify(t)),m()}}m(),addEventListener("load",()=>{const s=document.querySelectorAll(".js-main-swiper-slide");t.forEach(({id:i})=>{[...s].forEach(n=>{n.dataset.id===i&&n.querySelector(".js-favorite").classList.add("slide-stock__content-top-favorite_active")})})})}window.addEventListener("storage",()=>{u=JSON.parse(localStorage.getItem(w))??[],m(),y()});document.addEventListener("DOMContentLoaded",()=>{let e=T();j(),E(),I(),V(e),A(),z(),C(),O(),B(),J(e),L(),y()});
//# sourceMappingURL=index.js.map
