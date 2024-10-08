import{g as v,K as m,e as u,i as f,u as d,c as p,f as S,h as _,m as w,j as y,s as b,k as h,p as L,l as k,a as j,b as E,d as F}from"../assets/modalFavorite-BTodIBoR.js";import{g,a as q,c as I}from"../assets/vendor-CWWLBHNg.js";function C(s){const o=document.querySelector(".js-main-swiper-stock"),a=document.querySelector(".js-main-swiper-seasonal"),i=document.querySelector(".js-main-swiper-present"),r=["Stock","Seasonal","Present"],c=[o,a,i],e=g(s);for(let t=0;t<r.length;t++){const n=r[t],l=c[t];v(e,n,l)}}function O(){const s=document.querySelector(".js-preloader");o();function o(){if(!localStorage.getItem("is-visit")){a();return}s.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function a(){s.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{s.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function A(s){const o=document.querySelector(".js-main-swiper-forum"),a=s.map(({title:i,description:r,img:{png:c,webp:e}})=>`
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
          </div>`);o.innerHTML=a.join("")}function N(s){const o=g(s);async function a(){try{const i=await q(I(o,"main-forum")),r=[];i.forEach(c=>{r.push({id:c.id,...c.data()})}),A(r)}catch(i){return console.error("Error getting documents:",i),[]}}a()}function T(){const s=document.querySelector(".js-main-container");let o=JSON.parse(localStorage.getItem(m))??[],a=JSON.parse(localStorage.getItem(u))??[];s.addEventListener("click",i);function i({target:e}){e.classList.contains("js-basket")&&r(e),(e.classList.contains("js-favorite")||e.tagName==="use")&&c(e)}function r(e){const t=f(e);o.some(({id:l})=>l===t.id)||(o.push(t),localStorage.setItem(m,JSON.stringify(o)),d(),p())}function c(e){let t=e.closest(".js-favorite");if(t)if(t.classList.contains("slide-stock__content-top-favorite_active")){t.classList.remove("slide-stock__content-top-favorite_active");const n=t.closest(".js-main-swiper-slide").dataset.id;a=a.filter(({id:l})=>l!==n),localStorage.setItem(u,JSON.stringify(a)),d()}else{t.classList.add("slide-stock__content-top-favorite_active");const n=f(e);a.push(n),localStorage.setItem(u,JSON.stringify(a)),d()}}d(),addEventListener("load",()=>{const e=document.querySelectorAll(".js-main-swiper-slide");a.forEach(({id:t})=>{[...e].forEach(n=>{n.dataset.id===t&&n.querySelector(".js-favorite").classList.add("slide-stock__content-top-favorite_active")})})}),window.addEventListener("storage",()=>{o=JSON.parse(localStorage.getItem(m))??[],d(),p()})}document.addEventListener("DOMContentLoaded",()=>{let s=S();_(),w(),y(),C(s),b(),O(),h(),L(),k(),N(s),j(),T(),p(),E(),F()});
//# sourceMappingURL=index.js.map
