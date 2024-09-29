import{h as k,m as S,c as y}from"../assets/accordion-BA6URqia.js";import{S as g,P as j,A as E,G as x,N as L,g as v,a as b,c as h,i as $}from"../assets/vendor-ANkZcBYd.js";g.use([j,E,x,L]);function q(){return new g(".mainHeroSwiper",{autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},speed:600})}function P(){const e=new g(".stock-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".stock__swiper-button-next",prevEl:".stock__swiper-button-prev"}});u(e),window.addEventListener("resize",()=>u(e))}function F(){const e=new g(".seasona-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".seasona__swiper-button-next",prevEl:".seasona__swiper-button-prev"}});u(e),window.addEventListener("resize",()=>u(e))}function I(){const e=new g(".present-swiper",{slidesPerView:"auto",spaceBetween:9,grid:{rows:2,fill:"row"},pagination:{el:".swiper-pagination"},navigation:{nextEl:".present__swiper-button-next",prevEl:".present__swiper-button-prev"}});u(e),window.addEventListener("resize",()=>u(e))}function A(){return new g(".forum-swiper",{slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination"},speed:600})}function u(e){window.innerWidth<=425?(e.params.slidesPerView=2,e.params.spaceBetween=9):window.innerWidth>=1024?(e.params.spaceBetween=20,e.params.slidesPerView=4):e.params.slidesPerView="auto",e.update()}function O(e,s){const c=e.map(({id:o,discount:t,price:a,img:{png:n,webp:p},title:l})=>`
          <div class="swiper-slide js-main-swiper-slide" data-id="${o}">
            <div class="main__slide-stock slide-stock">
              <div class="slide-stock__content-top">
                <svg
                  class="slide-stock__content-top-favorite js-favorite"
                  width="33"
                  height="28">
                  <use xlink:href="#icon-heart"></use>
                </svg>

                ${t?`<div class="slide-stock__content-top-discount">-${t}%</div>`:""}
             
                  <picture>
                    <source 
                      srcset=${p?`${p}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"} type="image/webp" />

                    <img 
                     loading="lazy"
                     width="450"
                     height="450"
                     class="slide-stock__content-top-img js-main-swiper-slide-img"
                     src=${n?`${n}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121"} alt="${l}"
                     data-src="${p}" />
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
                  <h5 class="slide-stock__content-bottom-title js-main-swiper-slide-title" title="${l}">
                    <span></span> ${l}
                  </h5>

                  <div class="slide-stock__content-bottom-price">

                    ${t?`<div class="slide-stock__content-bottom-price-old js-main-swiper-slide-price-old"><span>${a}</span> грн</div>`:""}
                    
                    <div class="slide-stock__content-bottom-price-new   
                      js-main-swiper-slide-price-new" 
                      data-discount="${t}">
                      ${a*(1-t/100).toFixed(1)} грн
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
          </div>`);s.innerHTML=c.join("")}function C(e){const s=document.querySelector(".js-main-swiper-stock"),c=document.querySelector(".js-main-swiper-seasonal"),o=document.querySelector(".js-main-swiper-present"),t=["Stock","Seasonal","Present"],a=[s,c,o],n=v(e);async function p(l="",f=""){try{const d=await b(h(n,l)),i=[];d.forEach(r=>{i.push({id:r.id,...r.data()})}),O(i,f)}catch(d){return console.error("Error getting documents:",d),[]}}for(let l=0;l<t.length;l++){const f=t[l],d=a[l];p(f,d)}}function B(){const e=document.querySelector(".js-preloader");s();function s(){if(!localStorage.getItem("is-visit")){c();return}e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function c(){e.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{e.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function N(){return $({apiKey:"AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso",authDomain:"flowers-4b1a5.firebaseapp.com",projectId:"flowers-4b1a5",storageBucket:"flowers-4b1a5.appspot.com",messagingSenderId:"719757325067",appId:"1:719757325067:web:6e609ba7f0d37bdd23e80e"})}function V(e){const s=document.querySelector(".js-main-swiper-forum"),c=e.map(({title:o,description:t,img:{png:a,webp:n}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${n?`${n}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.webp?alt=media&token=89f10487-08e7-491f-8448-5998d2423abc"}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${a?`${a}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      alt="${o}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${o}</p>

                <p class="main__slide-forum-description">${t}</p>
              </div>
            </div>
          </div>`);s.innerHTML=c.join("")}function z(e){const s=v(e);async function c(){try{const o=await b(h(s,"main-forum")),t=[];o.forEach(a=>{t.push({id:a.id,...a.data()})}),V(t)}catch(o){return console.error("Error getting documents:",o),[]}}c()}function _(e){const s=e.closest(".js-main-swiper-slide"),c=s.querySelector(".js-main-swiper-slide-title").textContent.trim(),o=s.querySelector(".js-main-swiper-slide-img").src,t=s.querySelector(".js-main-swiper-slide-img").dataset.src,a=s.querySelector(".js-main-swiper-slide-price-old")?s.querySelector(".js-main-swiper-slide-price-old").textContent.trim():0,n=s.querySelector(".js-main-swiper-slide-price-new").textContent.trim(),p=s.querySelector(".js-main-swiper-slide-price-new").dataset.discount;return{id:s.dataset.id,title:c,img:{png:o||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121",webp:t||"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea"},price:parseInt(n),oldPrice:parseInt(a),discount:Number(p)}}function T(){const e=document.querySelector(".js-main-container"),s=document.querySelectorAll(".js-favorite-amount"),c=document.querySelectorAll(".js-basket-amount"),o="basket",t="favorite",a=JSON.parse(localStorage.getItem(o))??[];let n=JSON.parse(localStorage.getItem(t))??[];e.addEventListener("click",p);function p({target:i}){i.classList.contains("js-basket")&&l(i),(i.classList.contains("js-favorite")||i.tagName==="use")&&f(i)}function l(i){const r=_(i);a.some(({id:w})=>w===r.id)||(a.push(r),localStorage.setItem(o,JSON.stringify(a)),d(o,c))}function f(i){let r=i.closest(".js-favorite");if(r)if(r.classList.contains("slide-stock__content-top-favorite_active")){r.classList.remove("slide-stock__content-top-favorite_active");const m=r.closest(".js-main-swiper-slide").dataset.id;n=n.filter(({id:w})=>w!==m),localStorage.setItem(t,JSON.stringify(n)),d(t,s)}else{r.classList.add("slide-stock__content-top-favorite_active");const m=_(i);n.push(m),localStorage.setItem(t,JSON.stringify(n)),d(t,s)}}function d(i,r){const m=JSON.parse(localStorage.getItem(i))?JSON.parse(localStorage.getItem(i)).length:0;[...r].forEach(w=>{console.log(w.textContent=m)})}d(t,s),d(o,c),addEventListener("load",()=>{const i=document.querySelectorAll(".js-main-swiper-slide");n.forEach(({id:r})=>{[...i].forEach(m=>{m.dataset.id===r&&m.querySelector(".js-favorite").classList.add("slide-stock__content-top-favorite_active")})})})}document.addEventListener("DOMContentLoaded",()=>{let e=N();k(),S(),q(),C(e),P(),B(),F(),I(),A(),z(e),y(),T()});
//# sourceMappingURL=index.js.map
