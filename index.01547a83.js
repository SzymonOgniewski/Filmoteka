async function t(){const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=dd32b08009b8c26db83a645989914c74&language=en-US");return(await t.json()).genres}async function e(t){const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=dd32b08009b8c26db83a645989914c74&language=en-US`);return await e.json()}async function n(t){const e=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=dd32b08009b8c26db83a645989914c74&page=${t}`);if(!e.ok)throw new Error(e.status);return e.json()}const a=document.querySelector(".pagination-container");let o;const i=(t,e)=>{o=Number(t);let n=o-2;a.textContent="";let r="",c=o-1,u=o+2,b=o+1;o===e&&(b=e,u=e),1===o&&(c=1,n=1),r=`\n      <button class="box pagination-prev" type="button" value="-1"><<</button>\n\n      <button class="box pagination-first" type="button" value="1">1</button>\n      <button class="box pagination-dotsfirst" type="button" value="...">...</button>\n      <button class="box pagination-dectwo" type="button" value="${n}">${n}</button>\n      <button class="box pagination-decone" type="button" value="${c}">${c}</button>\n      <button class="box pagination-currentPage" type="button" value="${o}">${o}</button>\n      <button class="box pagination-incone" type="button" value="${b}">${b}</button>\n      <button class="box pagination-inctwo" type="button" value="${u}">${u}</button>\n      <button class="box pagination-dotslast" type="button" value="...">...</button>\n      <button class="box pagination-last" type="button" value="${e}">${e}</button>\n\n      <button class="box pagination-next" type="button" value="+1">>></button>\n      `,a.insertAdjacentHTML("beforeend",r);const m=document.querySelector(".pagination-prev"),g=document.querySelector(".pagination-next"),v=document.querySelector(".pagination-incone"),p=document.querySelector(".pagination-inctwo"),h=document.querySelector(".pagination-decone"),y=document.querySelector(".pagination-dectwo"),f=document.querySelector(".pagination-dotsfirst"),_=document.querySelector(".pagination-dotslast"),E=document.querySelector(".pagination-last"),w=document.querySelector(".pagination-first");o===e&&(v.style.visibility="hidden",p.style.visibility="hidden",_.style.visibility="hidden",E.style.visibility="hidden"),o===e-1&&(p.style.visibility="hidden",_.style.visibility="hidden",E.style.visibility="hidden"),o===e-2&&(_.style.visibility="hidden",E.style.visibility="hidden"),1===o&&(h.style.visibility="hidden",y.style.visibility="hidden",f.style.visibility="hidden",w.style.visibility="hidden"),2===o&&(y.style.visibility="hidden",f.style.visibility="hidden",w.style.visibility="hidden"),3===o&&(f.style.visibility="hidden",w.style.visibility="hidden"),4===o&&(f.textContent="1",f.value=1,w.style.visibility="hidden"),m.addEventListener("click",(t=>{l(o),i(o)})),g.addEventListener("click",(t=>{s(o,e)})),w.addEventListener("click",(t=>{o=w.value,d(o)})),E.addEventListener("click",(t=>{o=E.value,d(o)})),v.addEventListener("click",(t=>{o=v.value,d(o)})),p.addEventListener("click",(t=>{o=p.value,d(o)})),h.addEventListener("click",(t=>{o=h.value,d(o)})),y.addEventListener("click",(t=>{o=y.value,d(o)}))},l=t=>{1!==t&&d(t-=1)},s=(t,e)=>{t!==e&&d(t+=1)},r=document.querySelector(".gallery"),d=e=>{if(null===r)return;r.textContent="";let a="";n(e).then((async n=>{let o=n.results,l=n.total_pages,s=await t();l>1&&i(e,l),o.forEach((async t=>{const e=t.genre_ids.splice(0,2);let n=[];e.forEach((t=>{for(let e=0;e<s.length;e++)t===s[e].id&&n.push(s[e].name)})),null===t.poster_path?t.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":t.poster_path=`https://image.tmdb.org/t/p/w500//${t.poster_path}`,a+=`<li class="move_gallery__item" data-movieid="${t.id}">\n    <img class="move_gallery__image" src="${t.poster_path}" width="265" height="398">\n     <div class="move_gallery__title">${t.title}</div>\n     <div class="move_gallery__genres">${n.toString().replaceAll(",",", ")} | ${t.release_date}</div>\n     </li>`})),r.insertAdjacentHTML("beforeend",a)}))},c=t=>{let e=localStorage.getItem("watched");if(null===e)return e=[],e.push(t),localStorage.setItem("watched",e);const n=e.split(",");if(!1===n.includes(t))return n.push(t),localStorage.setItem("watched",n);b(n,t)},u=()=>{let t=localStorage.getItem("watched");if(null!==t){let e=[];return e=t.split(","),e}return t=[],t},b=(t,e)=>{let n=t.filter((t=>t!==e));return 1===n.length&&0===n[0].length||0===n.length?localStorage.removeItem("watched"):localStorage.setItem("watched",n)},m=t=>{let e=localStorage.getItem("queue");if(null===e)return e=[],e.push(t),localStorage.setItem("queue",e);const n=e.split(",");if(!1===n.includes(t))return n.push(t),localStorage.setItem("queue",n);v(n,t)},g=()=>{let t=localStorage.getItem("queue");if(null!==t){let e=[];return e=t.split(","),e}return t=[],t},v=(t,e)=>{let n=t.filter((t=>t!==e));return 1===n.length&&0===n[0].length||0===n.length?localStorage.removeItem("queue"):localStorage.setItem("queue",n)},p=(t,n)=>{if(n.textContent="",null===n)return console.log("error: no container to display");null===t&&console.log("No movies added to library"),t.forEach((async t=>{let a="";const o=await e(t);let i=[];o.genres.forEach((t=>{i.push(t.name)}));let l=i.slice(0,2).toString().replace(",",", ");null===o.poster_path?o.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":o.poster_path=`https://image.tmdb.org/t/p/w500//${o.poster_path}`,a+=`<li class="move_gallery__item" data-movieid="${o.id}">\n    <img class="move_gallery__image" src="${o.poster_path}" width="265" height="398">\n     <div class="move_gallery__title">${o.title}</div>\n     <div class="move_gallery__genres">${l} | ${o.release_date}</div>\n     </li>`,n.insertAdjacentHTML("beforeend",a)}))};var h={};h=function t(e,n,a){function o(l,s){if(!n[l]){if(!e[l]){var r=void 0;if(!s&&r)return r(l,!0);if(i)return i(l,!0);var d=new Error("Cannot find module '"+l+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[l]={exports:{}};e[l][0].call(c.exports,(function(t){return o(e[l][1][t]||t)}),c,c.exports,t,e,n,a)}return n[l].exports}for(var i=void 0,l=0;l<a.length;l++)o(a[l]);return o}({1:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=a('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var l=o(i,"IMG"),s=o(i,"VIDEO"),r=o(i,"IFRAME");return!0===l&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===r&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(a(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),l=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&l()}));var s={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(s)}))},close:l};return s}},{}]},{},[1])(1);const y=document.querySelector(".gallery"),f=document.querySelector(".libraryData");if(u(),(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden"),t.modal.removeEventListener("click",e)}function n(){t.modal.classList.contains("is-hidden")&&(t.modal.addEventListener("click",e),t.modal.classList.toggle("is-hidden"))}t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n),document.addEventListener("keydown",(e=>{"Escape"===e.key&&t.modal.classList.add("is-hidden")}))})(),window.addEventListener("load",(t=>{d(1)})),null!==y&&y.addEventListener("click",(t=>{if(t.preventDefault(),"LI"===t.target.parentElement.nodeName){const n=t.target.parentElement.getAttribute("data-movieid");e(n).then((t=>{let e=[];t.genres.forEach((t=>{e.push(t.name)}));let a=e.slice(0,1).toString().replace(",",", "),o=u(),i=g(),l="",s="";l=o.includes(n)?'<button class="modal-ls-btn ls-marked" id="addWatched">WATCHED</button>':'<button class="modal-ls-btn" id="addWatched">ADD TO WATCHED</button>',i.includes(n)?(console.log("yesQ"),s='<button class="modal-ls-btn ls-marked" id="addWatched">QUEUED</button>'):(console.log("noQ"),s='<button class="modal-ls-btn" id="addQueue">ADD TO QUEUE</button>');const r=h.create(`\n      <div class="gallery-modal">\n      <button class="gallery-modal__close-btn" id="modal-cb">\n        </button>\n      <img src="https://image.tmdb.org/t/p/w500//${t.poster_path}" class="gallery-modal__img"/>\n      <div>\n      <h3 class="gallery-modal__title">${t.original_title}</h3>\n      <table class="table">\n        <tr class="table-data__row">\n          <td class="table-data__name">Vote/Votes</td>\n          <td class="table-data__value"><span class="rating">${t.vote_average.toFixed(2)}</span> / ${t.vote_count}</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Popularity</td>\n          <td class="table-data__value">${Math.round(t.popularity)}</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Original Title</td>\n          <td class="table-data__value"> ${t.original_title}</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Genre</td>\n          <td class="table-data__value">${a} </td>\n        </tr>\n      </table>\n      <h4 class="gallery-modal__about">ABOUT</h4>\n      <p class="gallery-modal__overview">${t.overview}</p>\n      <div class="modal-btns">\n        ${l}\n        ${s}\n      </div>\n      </div>\n    </div>\n      `);r.show();const d=document.getElementById("addWatched"),b=document.getElementById("addQueue");d.addEventListener("click",(t=>{d.classList.toggle("ls-marked");"WATCHED"===d.innerHTML?d.innerHTML="ADD TO WATCHED":d.innerHTML="WATCHED"})),b.addEventListener("click",(t=>{b.classList.toggle("ls-marked");"QUEUED"===b.innerHTML?b.innerHTML="ADD TO QUEUE":b.innerHTML="QUEUED"}));document.getElementById("modal-cb").addEventListener("click",(t=>{r.close()})),document.addEventListener("keydown",(t=>{"Escape"===t.key&&r.visible()&&r.close()}));const v=document.querySelector("#addWatched"),p=document.querySelector("#addQueue");v.addEventListener("click",(t=>{c(n)})),p.addEventListener("click",(t=>{m(n)}))}))}})),null!==f){let t=u();void 0!==t&&p(t,f)}
//# sourceMappingURL=index.01547a83.js.map
