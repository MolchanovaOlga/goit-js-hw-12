import{S as w,i as u,a as g}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const d="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",m=document.querySelector("form"),S=document.querySelector("textarea"),y=document.querySelector(".gallery"),l=document.querySelector("span"),i=document.querySelector(".load-more");let c=1,f=40;m.addEventListener("submit",e=>{e.preventDefault(),l.classList.add("loader"),y.textContent="",$(),m.reset()});async function p(e){return g.defaults.baseURL="https://pixabay.com",await g.get("/api/",{params:{key:"41764698-0ccaaf72f9cf319226b6a04c5",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:f}})}async function $(){try{const e=S.value,s=await p(e),r=s.data.hits,a=Math.ceil(s.data.totalHits/f);if(r.length==0)return C();h(r),r.length>=f&&(i.style.display="flex",i.addEventListener("click",()=>{i.style.display="none",l.classList.add("loader"),q(e,a)}))}catch(e){L(e)}finally{l.classList.remove("loader")}}async function q(e,s){c+=1;try{const a=(await p(e)).data.hits;if(h(a),i.style.display="flex",c>=s)return i.style.display="none",E()}catch(r){L(r)}finally{l.classList.remove("loader")}}function h(e){const s=e.map(({webformatURL:a,largeImageURL:t,tags:o,likes:n,views:b,comments:x,downloads:v})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t}">
            <img
                class="gallery-image"
                src="${a}"
                alt="${o}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${n}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${b}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${x}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${v}</p>
                </li>
            </ul>
        </li>
        `).join("");y.insertAdjacentHTML("beforeend",s),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function C(){u.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function k(e,s){u.error({message:`${e}: ${s}. Please try again!`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function E(){u.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function L(e){console.log(e);const s=e.name,r=e.message;k(s,r)}
//# sourceMappingURL=commonHelpers.js.map
