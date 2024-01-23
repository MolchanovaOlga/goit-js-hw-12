import{i as u,S as w,a as c}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const d="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",f=document.querySelector("form"),S=document.querySelector("textarea"),g=document.querySelector(".gallery"),l=document.querySelector("span"),i=document.querySelector(".load-more");let m=1,y=3;f.addEventListener("submit",t=>{t.preventDefault(),l.classList.add("loader"),g.textContent="",i.style.display="none",q(),f.reset()});async function p(t){return c.defaults.baseURL="https://pixabay.com",await c.get("/api/",{params:{key:"41764698-0ccaaf72f9cf319226b6a04c5",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:m,per_page:y}})}async function q(){try{let t=S.value;const o=(await p(t)).data.hits;if(o.length==0)return O();L(o),o.length>=y&&(i.style.display="flex",i.addEventListener("click",()=>{i.style.display="none",l.classList.add("loader"),$(t)}))}catch(t){console.log(t);const r=t.message;h(r)}finally{l.classList.remove("loader")}}async function $(t){try{m+=1;const o=(await p(t)).data.hits;L(o),i.style.display="flex"}catch(r){console.log(r);const o=r.message;h(o)}finally{l.classList.remove("loader")}}function O(){u.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function h(t){u.error({message:`Error. ${t}. Please try again!`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function L(t){const r=t.map(({webformatURL:n,largeImageURL:e,tags:s,likes:a,views:x,comments:b,downloads:v})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
            <img
                class="gallery-image"
                src="${n}"
                alt="${s}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${a}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${x}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${b}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${v}</p>
                </li>
            </ul>
        </li>
        `).join("");g.insertAdjacentHTML("beforeend",r),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
