(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function u(){const s=document.querySelectorAll(".js-dropdown-title-box"),i=document.querySelectorAll(".js-list-dropdown"),l=document.querySelector(".js-search-category-title-box"),c=document.querySelector(".js-search-category-list");let e=null;[...s].forEach(r=>{r.addEventListener("click",t)});function t(r){let o=r.target.closest(".js-dropdown-title-box");e=o.firstElementChild,o.nextElementSibling.classList.contains("header__list-dropdown_active")?o.nextElementSibling.classList.remove("header__list-dropdown_active"):([...s].forEach(a=>{a.nextElementSibling.classList.remove("header__list-dropdown_active")}),o.nextElementSibling.classList.add("header__list-dropdown_active")),n(r,e)}[...i].forEach(r=>{r.addEventListener("click",o=>n(o,e))});function n(r,o){r.target.tagName==="LI"&&(o.textContent=r.target.textContent,[...s].forEach(a=>{a.nextElementSibling.classList.remove("header__list-dropdown_active")}))}l.addEventListener("click",d);function d(r){c.classList.toggle("search-category__list_active"),r.currentTarget.firstElementChild.classList.toggle("search-category__arrow-icon_active")}}document.addEventListener("DOMContentLoaded",()=>{u()});
//# sourceMappingURL=index.js.map
