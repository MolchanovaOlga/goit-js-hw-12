import{i as u,S as b,a as l}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",c=document.querySelector("form"),x=document.querySelector("textarea"),g=document.querySelector(".gallery"),d=document.querySelector("span"),i=document.querySelector(".load-more");let m=1,p=40;c.addEventListener("submit",o=>{o.preventDefault(),d.classList.add("loader"),g.textContent="",i.style.display="none",S(),c.reset()});async function w(){return l.defaults.baseURL="https://pixabay.com",await l.get("/api/",{params:{key:"41764698-0ccaaf72f9cf319226b6a04c5",q:x.value,image_type:"photo",orientation:"horizontal",safesearch:!0,page:m,per_page:p}})}async function S(){try{const r=(await w()).data.hits;if(r.length==0)return q();$(r),r.length>=p&&(i.style.display="flex",i.addEventListener("click",()=>{m+=1}))}catch(o){console.log(o);const r=o.message;v(r)}finally{d.classList.remove("loader")}}function q(){u.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:f})}function v(o){u.error({message:`Error: ${o}. Please try again!`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:f})}function $(o){const r=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:y,comments:h,downloads:L})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
            <img
                class="gallery-image"
                src="${a}"
                alt="${t}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${s}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${y}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${h}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${L}</p>
                </li>
            </ul>
        </li>
        `).join("");g.insertAdjacentHTML("beforeend",r),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
