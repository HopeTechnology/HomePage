import{j as r,m as l,a as s,B as d,R as m,b as u}from"./vendor.10a52246.js";const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}};f();var g="/assets/logo.91ae7ac1.png",h="/assets/Mascota.029753e3.png";function p(){const n={out:{y:0},in:{y:20,transition:{duration:.6}}};return r("div",{className:"App",children:r(l.div,{variants:n,initial:"out",animate:"in",children:s("div",{className:"card",children:[r("div",{className:"card-header",children:r("img",{className:"logo",src:g,alt:"logo"})}),s("div",{className:"card-body",children:[r("h1",{children:"Pr\xF3ximamente!"}),r("p",{children:"En breve estaremos en l\xEDnea. Seguinos en Instagram"})]}),s("div",{className:"card-footer",children:[r("div",{className:"icono",children:r("a",{className:"instagram",href:"https://www.instagram.com/hopetechnology.co/",target:"_blank",children:r(d,{})})}),r("div",{className:"imagen",children:r("img",{className:"mascota",src:h,alt:"mascota"})})]})]})})})}m.render(r(u.StrictMode,{children:r(p,{})}),document.getElementById("root"));