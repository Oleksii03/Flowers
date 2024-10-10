import{g as v,K as u,e as m,i as f,u as d,c as p,f as _,h as w,m as h,j as y,k as b,l as L,p as k,n as E,a as j,b as F,d as I,s as q}from"../assets/searchProduct-BInsH4ej.js";import{g,a as O,c as C}from"../assets/vendor-CWWLBHNg.js";function N(a){const s=document.querySelector(".js-main-swiper-stock"),e=document.querySelector(".js-main-swiper-seasonal"),r=document.querySelector(".js-main-swiper-present"),c=["Stock","Seasonal","Present"],n=[s,e,r],t=g(a);for(let o=0;o<c.length;o++){const i=c[o],l=n[o];v(t,i,l)}}function A(){const a=document.querySelector(".js-preloader");s();function s(){if(!localStorage.getItem("is-visit")){e();return}a.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze")}function e(){a.classList.add("preloader_visible"),document.body.classList.add("to-freeze"),setTimeout(()=>{a.classList.add("preloader_hidden"),document.body.classList.remove("to-freeze"),localStorage.setItem("is-visit","true")},4e3)}}function T(a){const s=document.querySelector(".js-main-swiper-forum"),e=a.map(({title:r,description:c,img:{png:n,webp:t}})=>`
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${t?`${t}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.webp?alt=media&token=89f10487-08e7-491f-8448-5998d2423abc"}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${n?`${n}`:"https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6"}
                      alt="${r}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${r}</p>

                <p class="main__slide-forum-description">${c}</p>
              </div>
            </div>
          </div>`);s.innerHTML=e.join("")}function J(a){const s=g(a);async function e(){try{const r=await O(C(s,"main-forum")),c=[];r.forEach(n=>{c.push({id:n.id,...n.data()})}),T(c)}catch(r){return console.error("Error getting documents:",r),[]}}e()}function $(){const a=document.querySelector(".js-main-container");let s=JSON.parse(localStorage.getItem(u))??[],e=JSON.parse(localStorage.getItem(m))??[];a.addEventListener("click",r);function r({target:t}){t.classList.contains("js-basket")&&c(t),t.tagName==="use"&&n(t)}function c(t){const o=f(t);s.some(({id:l})=>l===o.id)||(s.push(o),localStorage.setItem(u,JSON.stringify(s)),d(),p())}function n(t){let o=t.closest(".js-favorite");if(o)if(e=JSON.parse(localStorage.getItem(m))??[],o.classList.contains("slide-stock__content-top-favorite_active")){o.classList.remove("slide-stock__content-top-favorite_active");const i=o.closest(".js-main-swiper-slide").dataset.id;e=e.filter(({id:l})=>l!==i),localStorage.setItem(m,JSON.stringify(e)),d()}else{o.classList.add("slide-stock__content-top-favorite_active");const i=f(t);if(e.some(({id:S})=>S===i.id))return;e.push(i),localStorage.setItem(m,JSON.stringify(e)),d()}}d(),addEventListener("load",()=>{const t=document.querySelectorAll(".js-main-swiper-slide");e.forEach(({id:o})=>{[...t].forEach(i=>{i.dataset.id===o&&i.querySelector(".js-favorite").classList.add("slide-stock__content-top-favorite_active")})})}),window.addEventListener("storage",()=>{s=JSON.parse(localStorage.getItem(u))??[],d(),p()})}document.addEventListener("DOMContentLoaded",()=>{let a=_();w(),h(),y(),N(a),b(),A(),L(),k(),E(),J(a),j(),$(),p(),F(),I(),q(a)});
//# sourceMappingURL=index.js.map
