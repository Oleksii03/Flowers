import{g as v,K as m,b as u,d as f,u as d,c as p,f as S,h as _,m as w,i as y,s as b,e as h,p as L,j as k,a as j}from"../assets/mixins-CJpScITH.js";import{g,a as E,c as q}from"../assets/vendor-CWWLBHNg.js";function I(s){const a=document.querySelector(".js-main-swiper-stock"),o=document.querySelector(".js-main-swiper-seasonal"),i=document.querySelector(".js-main-swiper-present"),r=["Stock","Seasonal","Present"],c=[a,o,i],e=g(s);for(let t=0;t<r.length;t++){const n=r[t],l=c[t];v(e,n,l)}}function C(){const s=document.querySelector(".js-preloader");a();function a(){if(!localStorage.getItem("is-visit")){o();return}s.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function o(){s.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{s.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function F(s){const a=document.querySelector(".js-main-swiper-forum"),o=s.map(({title:i,description:r,img:{png:c,webp:e}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${e?`${e}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.webp?alt=media&token=89f10487-08e7-491f-8448-5998d2423abc"}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${c?`${c}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      alt="${i}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${i}</p>

                <p class="main__slide-forum-description">${r}</p>
              </div>
            </div>
          </div>`);a.innerHTML=o.join("")}function O(s){const a=g(s);async function o(){try{const i=await E(q(a,"main-forum")),r=[];i.forEach(c=>{r.push({id:c.id,...c.data()})}),F(r)}catch(i){return console.error("Error getting documents:",i),[]}}o()}function A(){const s=document.querySelector(".js-main-container");let a=JSON.parse(localStorage.getItem(m))??[],o=JSON.parse(localStorage.getItem(u))??[];s.addEventListener("click",i);function i({target:e}){e.classList.contains("js-basket")&&r(e),(e.classList.contains("js-favorite")||e.tagName==="use")&&c(e)}function r(e){const t=f(e);a.some(({id:l})=>l===t.id)||(a.push(t),localStorage.setItem(m,JSON.stringify(a)),d(),p())}function c(e){let t=e.closest(".js-favorite");if(t)if(t.classList.contains("slide-stock__content-top-favorite_active")){t.classList.remove("slide-stock__content-top-favorite_active");const n=t.closest(".js-main-swiper-slide").dataset.id;o=o.filter(({id:l})=>l!==n),localStorage.setItem(u,JSON.stringify(o)),d()}else{t.classList.add("slide-stock__content-top-favorite_active");const n=f(e);o.push(n),localStorage.setItem(u,JSON.stringify(o)),d()}}d(),addEventListener("load",()=>{const e=document.querySelectorAll(".js-main-swiper-slide");o.forEach(({id:t})=>{[...e].forEach(n=>{n.dataset.id===t&&n.querySelector(".js-favorite").classList.add("slide-stock__content-top-favorite_active")})})}),window.addEventListener("storage",()=>{a=JSON.parse(localStorage.getItem(m))??[],d(),p()})}document.addEventListener("DOMContentLoaded",()=>{let s=S();_(),w(),y(),I(s),b(),C(),h(),L(),k(),O(s),j(),A(),p()});
//# sourceMappingURL=index.js.map
