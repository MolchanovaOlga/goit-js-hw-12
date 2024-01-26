import{S as q,i as d,a as f}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const v="/goit-js-hw-12/assets/bi_x-octagon-aed43fc7.svg",y=document.querySelector("form"),w=document.querySelector("textarea"),g=document.querySelector(".gallery"),c=document.querySelector("span"),n=document.querySelector(".load-more"),a={key:"41764698-0ccaaf72f9cf319226b6a04c5",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40},S=new q(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",x);function x(e){e.preventDefault(),c.classList.add("loader"),n.style.display="none",g.innerHTML="",a.page=1,a.q=w.value.trim(),a.q&&($(),y.reset())}async function m(){return f.defaults.baseURL="https://pixabay.com",await f.get("/api/",{params:a})}async function $(){try{const t=(await m()).data.hits;if(t.length==0)return n.style.display="none",O();p(t),t.length>=a.per_page&&(n.style.display="flex")}catch(e){h(e)}finally{c.classList.remove("loader")}}n.addEventListener("click",M);function M(){n.style.display="none",c.classList.add("loader"),a.page+=1,P()}async function P(){try{const e=await m(),t=e.data.hits;p(t),n.style.display="flex",E();const o=Math.ceil(e.data.totalHits/a.per_page);if(a.page>=o)return n.style.display="none",k()}catch(e){h(e)}finally{c.classList.remove("loader")}}function p(e){const t=e.map(({webformatURL:o,largeImageURL:l,tags:s,likes:r,views:i,comments:L,downloads:b})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${l}">
            <img
                class="gallery-image"
                src="${o}"
                alt="${s}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${r}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${i}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${L}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${b}</p>
                </li>
            </ul>
        </li>
        `).join("");g.insertAdjacentHTML("beforeend",t),S.refresh()}function E(){const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}function h(e){console.log(e);const t=e.name,o=e.message;j(t,o)}const u={position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:v};function O(){d.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",...u})}function j(e,t){d.error({message:`${e}: ${t}. Please try again!`,...u})}function k(){d.error({message:"We're sorry, but you've reached the end of search results.",...u})}
//# sourceMappingURL=commonHelpers.js.map
