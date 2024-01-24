import{S as q,i as d,a as f}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const v="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",y=document.querySelector("form"),w=document.querySelector("textarea"),g=document.querySelector(".gallery"),c=document.querySelector("span"),o=document.querySelector(".load-more"),r={key:"41764698-0ccaaf72f9cf319226b6a04c5",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40};y.addEventListener("submit",S);function S(e){e.preventDefault(),c.classList.add("loader"),o.style.display="none",g.innerHTML="",r.page=1,r.q=w.value.trim(),r.q&&($(),y.reset())}async function m(){return f.defaults.baseURL="https://pixabay.com",await f.get("/api/",{params:r})}async function $(){try{const e=await m(),s=e.data.hits;if(s.length==0||s.length==e.data.totalHits)return o.style.display="none",E();p(s),s.length>=r.per_page&&(o.style.display="flex")}catch(e){h(e)}finally{c.classList.remove("loader")}}o.addEventListener("click",M);function M(){o.style.display="none",c.classList.add("loader"),r.page+=1,P()}async function P(){try{const e=await m(),s=e.data.hits;p(s),o.style.display="flex";const n=Math.ceil(e.data.totalHits/r.per_page);if(r.page>=n)return o.style.display="none",j()}catch(e){h(e)}finally{c.classList.remove("loader")}}function p(e){const s=e.map(({webformatURL:l,largeImageURL:t,tags:a,likes:i,views:L,comments:b,downloads:x})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t}">
            <img
                class="gallery-image"
                src="${l}"
                alt="${a}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${i}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${L}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${b}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${x}</p>
                </li>
            </ul>
        </li>
        `).join("");g.insertAdjacentHTML("beforeend",s),new q(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function h(e){console.log(e);const s=e.name,n=e.message;O(s,n)}const u={position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:v};function E(){d.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",...u})}function O(e,s){d.error({message:`${e}: ${s}. Please try again!`,...u})}function j(){d.error({message:"We're sorry, but you've reached the end of search results.",...u})}
//# sourceMappingURL=commonHelpers.js.map
