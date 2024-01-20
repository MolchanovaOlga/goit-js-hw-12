import{i as l,S as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",n=document.querySelector("form"),p=document.querySelector("textarea"),f=document.querySelector(".gallery"),u=document.querySelector("span");n.addEventListener("submit",o=>{o.preventDefault(),u.classList.add("loader"),f.textContent="";const s=p.value;y(s),n.reset()});function y(o){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"41764698-0ccaaf72f9cf319226b6a04c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{let e=t.hits;if(e.length==0){L();return}w(e)}).catch(t=>{console.log(t);const e=t.message;b(e)}).finally(()=>u.classList.remove("loader"))}function L(){l.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:c})}function b(o){l.error({message:`Error: ${o}. Please try again!`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:c})}function w(o){const s=o.map(({webformatURL:t,largeImageURL:e,tags:r,likes:a,views:m,comments:g,downloads:h})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${r}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${a}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${m}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${g}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${h}</p>
                </li>
            </ul>
        </li>
        `).join("");f.insertAdjacentHTML("beforeend",s),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
