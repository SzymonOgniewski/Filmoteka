!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?p:f,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function y(){}function m(){}function g(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(j([])));_&&_!==n&&r.call(_,a)&&(b=_);var E=g.prototype=y.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return m.prototype=g,l(E,"constructor",g),l(g,"constructor",m),m.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(x.prototype),l(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),l(E,c,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a="dd32b08009b8c26db83a645989914c74";function i(){return c.apply(this,arguments)}function c(){return(c=t(e)(t(r).mark((function e(){var n,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(a,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.json();case 5:return o=t.sent,t.abrupt("return",o.genres);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(t){return s.apply(this,arguments)}function s(){return(s=t(e)(t(r).mark((function e(n){var o,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(a,"&language=en-US"));case 2:return o=t.sent,t.next=5,o.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(t){return d.apply(this,arguments)}function d(){return(d=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a,"&page=").concat(n));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error(o.status);case 5:return t.abrupt("return",o.json());case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var f,h=document.querySelector(".pagination-container"),p=function(t,e){var n=(f=Number(t))-2;h.textContent="";var r,o=f-1,a=f+2,i=f+1;f===e&&(i=e,a=e),1===f&&(o=1,n=1),r='\n      <button class="box pagination-prev" type="button" value="-1"><<</button>\n\n      <button class="box pagination-first" type="button" value="1">1</button>\n      <button class="box pagination-dotsfirst" type="button" value="...">...</button>\n      <button class="box pagination-dectwo" type="button" value="'.concat(n,'">').concat(n,'</button>\n      <button class="box pagination-decone" type="button" value="').concat(o,'">').concat(o,'</button>\n      <button class="box pagination-currentPage" type="button" value="').concat(f,'">').concat(f,'</button>\n      <button class="box pagination-incone" type="button" value="').concat(i,'">').concat(i,'</button>\n      <button class="box pagination-inctwo" type="button" value="').concat(a,'">').concat(a,'</button>\n      <button class="box pagination-dotslast" type="button" value="...">...</button>\n      <button class="box pagination-last" type="button" value="').concat(e,'">').concat(e,'</button>\n\n      <button class="box pagination-next" type="button" value="+1">>></button>\n      '),h.insertAdjacentHTML("beforeend",r);var c=document.querySelector(".pagination-prev"),l=document.querySelector(".pagination-next"),s=document.querySelector(".pagination-incone"),u=document.querySelector(".pagination-inctwo"),d=document.querySelector(".pagination-decone"),m=document.querySelector(".pagination-dectwo"),b=document.querySelector(".pagination-dotsfirst"),w=document.querySelector(".pagination-dotslast"),_=document.querySelector(".pagination-last"),E=document.querySelector(".pagination-first");f===e&&(s.style.visibility="hidden",u.style.visibility="hidden",w.style.visibility="hidden",_.style.visibility="hidden"),f===e-1&&(u.style.visibility="hidden",w.style.visibility="hidden",_.style.visibility="hidden"),f===e-2&&(w.style.visibility="hidden",_.style.visibility="hidden"),1===f&&(d.style.visibility="hidden",m.style.visibility="hidden",b.style.visibility="hidden",E.style.visibility="hidden"),2===f&&(m.style.visibility="hidden",b.style.visibility="hidden",E.style.visibility="hidden"),3===f&&(b.style.visibility="hidden",E.style.visibility="hidden"),4===f&&(b.textContent="1",b.value=1,E.style.visibility="hidden"),c.addEventListener("click",(function(t){v(f),p(f)})),l.addEventListener("click",(function(t){y(f,e)})),E.addEventListener("click",(function(t){f=E.value,g(f)})),_.addEventListener("click",(function(t){f=_.value,g(f)})),s.addEventListener("click",(function(t){f=s.value,g(f)})),u.addEventListener("click",(function(t){f=u.value,g(f)})),d.addEventListener("click",(function(t){f=d.value,g(f)})),m.addEventListener("click",(function(t){f=m.value,g(f)}))},v=function(t){1!==t&&g(t-=1)},y=function(t,e){t!==e&&g(t+=1)},m=document.querySelector(".gallery"),g=function(n){if(null!==m){m.textContent="";var o,a="";u(n).then((o=t(e)(t(r).mark((function o(c){var l,s,u;return t(r).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l=c.results,s=c.total_pages,o.next=4,i();case 4:u=o.sent,s>1&&p(n,s),l.forEach(function(){var n=t(e)(t(r).mark((function e(n){var o,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=n.genre_ids.splice(0,2),i=[],o.forEach((function(t){for(var e=0;e<u.length;e++)t===u[e].id&&i.push(u[e].name)})),null===n.poster_path?n.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":n.poster_path="https://image.tmdb.org/t/p/w500//".concat(n.poster_path),a+='<li class="move_gallery__item" data-movieid="'.concat(n.id,'">\n    <img class="move_gallery__image" src="').concat(n.poster_path,'" width="265" height="398">\n     <div class="move_gallery__title">').concat(n.title,'</div>\n     <div class="move_gallery__genres">').concat(i.toString().replaceAll(",",", ")," | ").concat(n.release_date,"</div>\n     </li>");case 5:case"end":return t.stop()}}),e)})));return function(t){return n.apply(this,arguments)}}()),m.insertAdjacentHTML("beforeend",a);case 8:case"end":return o.stop()}}),o)}))),function(t){return o.apply(this,arguments)}))}},b=function(t){var e=localStorage.getItem("watched");if(null===e)return(e=[]).push(t),localStorage.setItem("watched",e);var n=e.split(",");if(!1===n.includes(t))return n.push(t),localStorage.setItem("watched",n);_(n,t)},w=function(){var t=localStorage.getItem("watched");if(null!==t){return t.split(",")}},_=function(t,e){var n=t.filter((function(t){return t!==e}));return 1===n.length&&0===n[0].length||0===n.length?localStorage.removeItem("watched"):localStorage.setItem("watched",n)},E=function(t){var e=localStorage.getItem("queue");if(null===e)return(e=[]).push(t),localStorage.setItem("queue",e);var n=e.split(",");return!1===n.includes(t)?(n.push(t),localStorage.setItem("queue",n)):void 0},L={};L=function t(e,n,r){function o(i,c){if(!n[i]){if(!e[i]){var l=void 0;if(!c&&l)return l(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[i]={exports:{}};e[i][0].call(u.exports,(function(t){return o(e[i][1][t]||t)}),u,u.exports,t,e,n,r)}return n[i].exports}for(var a=void 0,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},a=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=a,n.create=function(t,e){var n=function(t,e){var n=r('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return a.appendChild(t)}));var i=o(a,"IMG"),c=o(a,"VIDEO"),l=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(r(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),i=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&i()}));var c={element:function(){return n},visible:function(){return a(n)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(c)}))},close:i};return c}},{}]},{},[1])(1);var x=[315162,76600,800815],k=[315162,76600,800815],S=document.querySelector(".gallery"),O=document.querySelector(".libraryData");if(w(),function(){var t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden"),t.modal.removeEventListener("click",e)}function n(){t.modal.classList.contains("is-hidden")&&(t.modal.addEventListener("click",e),t.modal.classList.toggle("is-hidden"))}t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n),document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.modal.classList.add("is-hidden")}))}(),window.addEventListener("load",(function(t){g(1)})),null!==S&&S.addEventListener("click",(function(t){if(t.preventDefault(),"LI"===t.target.parentElement.nodeName){var e=t.target.parentElement.getAttribute("data-movieid");l(e).then((function(t){var n=L.create('\n      <div class="gallery-modal">\n      <button class="gallery-modal__close-btn" id="modal-cb">\n        </button>\n      <img src="https://image.tmdb.org/t/p/w500//'.concat(t.poster_path,'" class="gallery-modal__img"/>\n      <div>\n      <h3 class="gallery-modal__title">').concat(t.original_title,'</h3>\n      <table class="table">\n        <tr class="table-data__row">\n          <td class="table-data__name">Vote/Votes</td>\n          <td class="table-data__value"><span class="rating">').concat(t.vote_average.toFixed(2),"</span> / ").concat(t.vote_count,'</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Popularity</td>\n          <td class="table-data__value">').concat(Math.round(t.popularity),'</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Original Title</td>\n          <td class="table-data__value"> ').concat(t.original_title,'</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Genre</td>\n          <td class="table-data__value">genres</td>\n        </tr>\n      </table>\n      <h4 class="gallery-modal__about">ABOUT</h4>\n      <p class="gallery-modal__overview">').concat(t.overview,'</p>\n      <div class="modal-btns">\n        <button class="modal-ls-btn" id="addWatched">ADD TO WATCHED</button>\n        <button class="modal-ls-btn" id="addQueue">ADD TO QUEUE</button> \n      </div>\n      </div>\n    </div>\n'));n.show();var r=document.getElementById("addWatched"),o=document.getElementById("addQueue");x.includes(parseInt(e))?(r.textContent="WATCHED",r.classList.add("ls-marked")):(r.textContent="ADD TO WATCHED",r.classList.remove("ls-marked")),k.includes(parseInt(e))?(o.textContent="QUEUED",o.classList.add("ls-marked")):(o.textContent="ADD TO QUEUE",o.classList.remove("ls-marked")),document.getElementById("modal-cb").addEventListener("click",(function(t){n.close()})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&n.visible()&&n.close()}));var a=document.querySelector("#addWatched"),i=document.querySelector("#addQueue");a.addEventListener("click",(function(t){b(e)})),i.addEventListener("click",(function(t){E(e)}))}))}})),null!==O){var T=w();void 0!==T&&function(n,o){if(o.textContent="",null===o)return console.log("error: no container to display");var a;null===n&&console.log("No movies added to library"),n.forEach((a=t(e)(t(r).mark((function e(n){var a,i,c,s;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="",t.next=3,l(n);case 3:i=t.sent,c=[],i.genres.forEach((function(t){c.push(t.name)})),s=c.slice(0,2).toString().replace(",",", "),null===i.poster_path?i.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":i.poster_path="https://image.tmdb.org/t/p/w500//".concat(i.poster_path),a+='<li class="move_gallery__item" data-movieid="'.concat(i.id,'">\n    <img class="move_gallery__image" src="').concat(i.poster_path,'" width="265" height="398">\n     <div class="move_gallery__title">').concat(i.title,'</div>\n     <div class="move_gallery__genres">').concat(s," | ").concat(i.release_date,"</div>\n     </li>"),o.insertAdjacentHTML("beforeend",a);case 10:case"end":return t.stop()}}),e)}))),function(t){return a.apply(this,arguments)}))}(T,O)}}();
//# sourceMappingURL=index.76909219.js.map