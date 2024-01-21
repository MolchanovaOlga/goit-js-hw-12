import{a as n,i as c,S as y}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",l=document.querySelector("form"),h=document.querySelector("textarea"),u=document.querySelector(".gallery"),m=document.querySelector("span");l.addEventListener("submit",r=>{r.preventDefault(),m.classList.add("loader"),u.textContent="";const s=h.value;L(s),l.reset()});async function L(r){n.defaults.baseURL="https://pixabay.com/api/";try{const o=(await n.get("",{params:{key:"41764698-0ccaaf72f9cf319226b6a04c5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;if(o.length==0){b();return}v(o)}catch(s){console.log(s);const o=s.message;x(o)}m.classList.remove("loader")}function b(){c.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:f})}function x(r){c.error({message:`Error: ${r}. Please try again!`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:f})}function v(r){const s=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:g,comments:d,downloads:p})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
            <img
                class="gallery-image"
                src="${i}"
                alt="${t}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${a}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${g}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${d}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${p}</p>
                </li>
            </ul>
        </li>
        `).join("");u.insertAdjacentHTML("beforeend",s),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
