(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function f(){const a=document.querySelectorAll(".js-dropdown-title-box"),r=document.querySelectorAll(".js-list-dropdown"),c=document.querySelector(".js-search-category-title-box"),i=document.querySelector(".js-search-category-list");let e=null;[...a].forEach(o=>{o.addEventListener("click",t)});function t(o){let n=o.target.closest(".js-dropdown-title-box");e=n.firstElementChild,n.nextElementSibling.classList.contains("header__list-dropdown_active")?n.nextElementSibling.classList.remove("header__list-dropdown_active"):([...a].forEach(u=>{u.nextElementSibling.classList.remove("header__list-dropdown_active")}),n.nextElementSibling.classList.add("header__list-dropdown_active")),s(o,e)}[...r].forEach(o=>{o.addEventListener("click",n=>s(n,e))});function s(o,n){o.target.tagName==="LI"&&(n.textContent=o.target.textContent,[...a].forEach(u=>{u.nextElementSibling.classList.remove("header__list-dropdown_active")}))}c.addEventListener("click",l);function l(o){i.classList.toggle("search-category__list_active"),c.firstElementChild.classList.toggle("search-category__arrow-icon_active")}i.addEventListener("click",d);function d(o){o.target.tagName==="LI"&&(c.lastElementChild.textContent=o.target.textContent,l())}}function y(){const a=document.querySelector(".js-mob-menu"),r=document.querySelector(".js-burger-btn"),c=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-backdrop"),e=document.querySelector(".js-choose-city"),t=document.querySelector(".js-city-selection-list"),s=document.querySelector(".js-active-city"),l=document.querySelector(".js-information-item"),d=document.querySelector(".js-information-sub-list");console.log(d),r.addEventListener("click",o),c.addEventListener("click",o),i.addEventListener("click",o);function o(m){a.classList.toggle("mob-menu--visible"),i.classList.toggle("backdrop--visible")}e.addEventListener("click",n);function n(m){if(!e.classList.contains("user-panel__city-selection-title_active")){t.style.maxHeight=t.scrollHeight+"px",e.classList.add("user-panel__city-selection-title_active");return}t.style.maxHeight=0,e.classList.remove("user-panel__city-selection-title_active")}t.addEventListener("click",u);function u(m){s.textContent=m.target.textContent,n()}l.addEventListener("click",g);function g(m){if(!l.classList.contains("nav-list-item__title-wrapper_active")){d.style.maxHeight=d.scrollHeight+"px",l.classList.add("nav-list-item__title-wrapper_active");return}d.style.maxHeight=0,l.classList.remove("nav-list-item__title-wrapper_active")}}document.addEventListener("DOMContentLoaded",()=>{f(),y()});
//# sourceMappingURL=index.js.map
