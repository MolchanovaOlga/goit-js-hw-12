import{i as u,S as w,a as g}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const d="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",y=document.querySelector("form"),S=document.querySelector("textarea"),m=document.querySelector(".gallery"),i=document.querySelector("span"),n=document.querySelector(".load-more");let c=1,f=40;y.addEventListener("submit",t=>{t.preventDefault(),i.classList.add("loader"),m.textContent="",n.style.display="none",q(),y.reset()});async function p(t){return g.defaults.baseURL="https://pixabay.com",await g.get("/api/",{params:{key:"41764698-0ccaaf72f9cf319226b6a04c5",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:f}})}async function q(){try{const t=S.value,o=await p(t),a=o.data.hits,r=Math.ceil(o.data.totalHits/f);if(console.log(r),console.log(o.data.totalHits),a.length==0)return $();L(a),a.length>=f&&(n.style.display="flex",n.addEventListener("click",()=>{n.style.display="none",i.classList.add("loader"),C(t,r)}))}catch(t){console.log(t);const o=t.message;h(o)}finally{i.classList.remove("loader")}}async function C(t,o){c+=1;try{const r=(await p(t)).data.hits;if(L(r),n.style.display="flex",c>=o)return n.style.display="none",k()}catch(a){console.log(a);const r=a.message;h(r)}finally{i.classList.remove("loader")}}function $(){u.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function h(t){u.error({message:`Error. ${t}. Please try again!`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function k(){n.style.display="none",u.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:d})}function L(t){const o=t.map(({webformatURL:r,largeImageURL:e,tags:s,likes:l,views:b,comments:x,downloads:v})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
            <img
                class="gallery-image"
                src="${r}"
                alt="${s}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${l}</p>
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
        `).join("");m.insertAdjacentHTML("beforeend",o),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
