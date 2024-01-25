import{S as q,i as d,a as f}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const x="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",g=document.querySelector("form"),S=document.querySelector("textarea"),y=document.querySelector(".gallery"),c=document.querySelector("span"),o=document.querySelector(".load-more"),a={key:"41764698-0ccaaf72f9cf319226b6a04c5",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40};g.addEventListener("submit",v);function v(e){e.preventDefault(),c.classList.add("loader"),o.style.display="none",y.innerHTML="",a.page=1,a.q=S.value.trim(),a.q&&($(),g.reset())}async function m(){return f.defaults.baseURL="https://pixabay.com",await f.get("/api/",{params:a})}async function $(){try{const e=await m(),t=e.data.hits;if(t.length==0||t.length==e.data.totalHits)return o.style.display="none",O();p(t),t.length>=a.per_page&&(o.style.display="flex")}catch(e){h(e)}finally{c.classList.remove("loader")}}o.addEventListener("click",M);function M(){o.style.display="none",c.classList.add("loader"),a.page+=1,P()}async function P(){try{const e=await m(),t=e.data.hits;p(t),o.style.display="flex",E();const n=Math.ceil(e.data.totalHits/a.per_page);if(a.page>=n)return o.style.display="none",k()}catch(e){h(e)}finally{c.classList.remove("loader")}}function p(e){const t=e.map(({webformatURL:l,largeImageURL:s,tags:r,likes:i,views:L,comments:b,downloads:w})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
            <img
                class="gallery-image"
                src="${l}"
                alt="${r}"
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
                    <p>${w}</p>
                </li>
            </ul>
        </li>
        `).join("");y.insertAdjacentHTML("beforeend",t),new q(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function E(){const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy(0,t.height*2)}function h(e){console.log(e);const t=e.name,n=e.message;j(t,n)}const u={position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:x};function O(){d.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",...u})}function j(e,t){d.error({message:`${e}: ${t}. Please try again!`,...u})}function k(){d.error({message:"We're sorry, but you've reached the end of search results.",...u})}
//# sourceMappingURL=commonHelpers.js.map
