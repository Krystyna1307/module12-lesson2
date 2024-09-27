import{a as y,i}from"./assets/vendor-CLWPeEjA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const n={form:document.querySelector(".js-search-form"),container:document.querySelector(".js-cards-container"),loadMoreBtn:document.querySelector(".js-load-more"),loader:document.querySelector(".js-loader")},w="https://newsapi.org/v2/",L="44f296a92d194f81b1d9cea595a5cfa3",h=6;async function m(t,r=1){const o=new URLSearchParams({q:t,apiKey:L,language:"en",pageSize:h,page:r}),c=`${w}/everything?${o}`,{data:{articles:e,totalResults:s,status:a,message:d=""}}=await y.get(c);if(a!=="ok")throw new Error(d);if(e.length===0)throw new Error("No articles founf");return{articles:e,totalResults:s}}function f(t,r=90){return t&&(t.length<=r?t:`${t.slice(0,r-3)}...`)}function g(t,r){const o=t.map(({title:c,description:e,url:s,urlToImage:a,publishedAt:d})=>`
            <article class="card">
                <img
                    class="card-img-top"
                    src="${a||"https://placehold.co/600x400?text=Hot news"}"
                    alt="${c}"
                />
            <div class="card-body">
                <h5 class="card-title">${f(c,30)}</h5>
                <p class="card-text">${f(e)}</p>
                <p class="card-text">
                <small class="text-body-secondary">${d}</small>
                </p>
                <a href="${s}" class="btn btn-outline-primary"
                target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
            </article>`).join("");r.insertAdjacentHTML("beforeend",o)}const v="/module12-lesson2/error.svg",b="/module12-lesson2/success.svg";let l=1,u=null,p=0;n.form.addEventListener("submit",M);n.loadMoreBtn.addEventListener("click",S);async function M(t){t.preventDefault();const r=t.currentTarget;u=r.elements.newsKeyword.value,n.container.innerHTML="",l=1;try{const{articles:o,totalResults:c}=await m(u,l);l===1&&i.success({message:"First page 😎",iconUrl:b}),p=Math.ceil(c/h),g(o,n.container),n.loadMoreBtn.classList.remove("is-hidden")}catch(o){n.loadMoreBtn.classList.add("is-hidden"),i.error({message:o.message,iconUrl:v})}finally{r.reset()}}async function S(){l+=1;try{n.loader.classList.remove("is-hidden");const{articles:t}=await m(u,l);g(t,n.container),E(),l>=Math.min(p,16)&&(n.loadMoreBtn.classList.add("is-hidden"),i.success("Last page 🥺"))}catch(t){console.log(t),i.success("")}finally{n.loader.classList.add("is-hidden")}}function E(){const r=n.container.lastElementChild.getBoundingClientRect().height;console.log("handleScrollView  articleHeight:",r);const o=r*2;console.log("handleScrollView  scrollHeight:",o),window.scrollBy({top:o,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
