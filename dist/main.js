!function(){var e={357:function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&!e.target.classList.contains("animate")&&e.target.classList.add("animate")}))}),{threshold:1});document.querySelectorAll(".skills-road__step").forEach((function(i){return e.observe(i)}));var i=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&window.scrollTo({top:document.body.scrollHeight,left:0,behavior:"smooth"})}))}),{threshold:.1}),t=document.querySelector("#road");i.observe(t),document.querySelectorAll(".skills-road__step-arrow").forEach((function(e){e.addEventListener("click",(function(){var i=e.parentElement,t=i.querySelector(".skills-road__step-modal");i.classList.contains("skills-road__step-modal")?i.classList.toggle("isHidden"):t&&t.classList.toggle("isHidden")}))}))},479:function(){var e,i;window.screen.width<1024?(e=document.querySelector(".vertical-menu"),i=document.querySelector(".menu"),e&&e.addEventListener("click",(function(){i.classList.toggle("mobile-hide")}))):window.setTimeout((function(){Array.from(document.querySelectorAll(".delayed")).forEach((function(e){e.style.visibility="visible"}))}),14e3)},584:function(e,i,t){"use strict";var o=t(645),n=t.n(o),r=t(667),a=t.n(r),s=t(164),l=n()((function(e){return e[1]}));l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Spinnaker&display=swap);"]);var p=a()(s.Z);l.push([e.id,"body{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after{content:'';content:none}q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{font-family:\"Poppins\", sans-serif;font-weight:300;font-size:12px;line-height:16px}a{text-decoration:none;color:inherit}a :hover,a :focus,a :ative,a :visited{color:inherit}.desktop{display:none}@media (min-width: 1024px){.desktop{display:block}}.mobile{display:block}@media (min-width: 1024px){.mobile{display:none}}@keyframes appearing{0%{opacity:0}100%{opacity:1}}@keyframes delayAppearing{0%{opacity:0;visibility:visible}100%{opacity:1}}.main{width:100%;height:80vh;position:relative}@media (min-width: 1024px){.main{height:100vh}}.main__background{width:100%;height:100%;position:absolute;z-index:-1;-o-object-fit:cover;object-fit:cover}.main__header{font-size:32px;line-height:46px;font-weight:500;animation:appearing 14s;padding:80px 0 0 16px;text-shadow:1px 1px #322626;max-width:300px}@media (min-width: 1024px){.main__header{font-size:56px;line-height:72px;padding:112px 0 0 40px;max-width:550px}}@media (min-width: 1440px){.main__header{max-width:1000px}}.main__header--colored{color:#079979}.main .menu{font-size:18px;color:#322626;background-color:#fff;display:flex;justify-content:flex-end;flex-direction:column;padding:16px;position:absolute;z-index:2;right:0;box-shadow:0px 2px 8px 0px #e0e0e0}@media (min-width: 768px){.main .menu{font-size:22px}}@media (min-width: 1024px){.main .menu{font-size:24px;position:static;flex-direction:row;box-shadow:none;padding-top:24px;margin-right:8px;background-color:transparent}}@media (min-width: 1440px){.main .menu{font-size:28px}}.main .menu a{margin:16px 8px}@media (min-width: 1024px){.main .menu a{margin:0 0 0 16px}}.main .menu a:hover{color:#079979}@media (min-width: 1024px){.main .delayed{animation:delayAppearing 7s;visibility:hidden;animation-delay:10s}}.main .socials{display:flex;flex-direction:column;position:fixed;bottom:16px;padding-left:16px}.main .socials a{border-radius:50%;color:#322626;background-color:#fff;margin-top:16px;padding:4px}.main .socials a:hover{color:#079979}.main .vertical-menu{position:relative;display:flex;justify-content:flex-end;padding:16px}@media (min-width: 1024px){.main .vertical-menu{display:none}}.main .mobile-hide{display:none}@media (min-width: 1024px){.main .mobile-hide{display:flex}}.business-card{display:flex;flex-direction:column;box-shadow:0px 2px 8px 0px #e0e0e0;margin:8px;padding:16px;font-size:12px;line-height:18px}@media (min-width: 640px){.business-card{margin:48px auto;max-width:600px}}@media (min-width: 1024px){.business-card{flex-direction:row;max-width:700px;margin:80px auto;font-size:14px;line-height:20px;padding:24px}}@media (min-width: 1440px){.business-card{max-width:900px}}@media (min-width: 1920px){.business-card{max-width:1000px}}.business-card__info{margin-right:32px;white-space:nowrap}.business-card__info p{margin-bottom:16px}.business-card__info--colored{color:#079979}.business-card__description{text-align:justify}.skills-road{background:url("+p+') no-repeat;background-position:50% 90%;background-size:cover;overflow-y:scroll;width:100%;height:100vh}.skills-road__row{padding:100px 20px 50px;width:100%;display:grid;justify-content:center;grid-template-columns:1fr;box-sizing:border-box}@media (min-width: 768px){.skills-road__row{grid-template-columns:1fr 1fr}.skills-road__row:nth-of-type(2n+1) .skills-road__step{grid-column:2;margin-left:50px}.skills-road__row:nth-of-type(2n) .skills-road__step{grid-column:1;margin-right:50px}}@media (min-width: 1024px){.skills-road__row{padding:100px 20px 50px 20px}}@media (min-width: 1280px){.skills-road__row{padding:100px 100px 50px 100px;grid-gap:50px;gap:50px}}@media (min-width: 1920px){.skills-road__row{padding:100px 300px 50px 300px;grid-gap:50px;gap:50px}}.skills-road__step{background:#fff;box-shadow:0px 0px 2px 0px #e0e0e0;padding:24px;opacity:0;transition:1s ease-in;position:relative;border-radius:6px;max-width:700px}.skills-road__step.animate{opacity:1}.skills-road__step-title{font-size:24px;line-height:28px;font-weight:500;text-align:center;color:#079979}.skills-road__step-timeline{font-size:14px;line-height:16px;margin:16px 0}.skills-road__step-timeline-position{margin:8px 0}.skills-road__step-timeline-date{font-style:italic}.skills-road__step-arrow{display:flex;justify-content:center;cursor:pointer;color:#079979}.skills-road__step-modal{display:block;position:absolute;z-index:9;background-color:#fff;box-shadow:0px 0px 2px 0px #e0e0e0;padding:16px 24px;top:0;left:0;border-radius:6px}.skills-road__step-modal h3{font-size:20px;line-height:32px}.skills-road__step-modal__description{font-size:14px;line-height:18px;margin-bottom:16px}.skills-road__step-technologies{display:grid;grid-template:1fr/repeat(6, 1fr);grid-row-gap:16px;row-gap:16px;justify-items:center;align-items:center;margin:16px 0;font-size:40px}.skills-road__step-technologies .tech-desc{font-size:12px}.skills-road__step-technologies__technology{position:relative;cursor:pointer}.skills-road__step-technologies__technology:hover .tooltip{visibility:visible;opacity:1}.skills-road__step-technologies__technology img{max-width:100%;max-height:40px}.skills-road .isHidden{display:none}.skills-road__projects{display:grid;grid-template-columns:1fr;grid-gap:24px 16px;gap:24px 16px;margin:16px 0}@media (min-width: 768px){.skills-road__projects{grid-template-columns:repeat(2, 1fr)}}.skills-road__project-box{min-height:50px;display:flex;justify-content:center}.skills-road__project-box .data{color:#079979;font-weight:700}.skills-road__project-box a.data{font-size:14px;line-height:18px;margin:16px 0}.skills-road__project-box a.data:hover{color:#014133}.skills-road__project-box__description{margin:8px 0}.skills-road .project-box__image{position:relative;margin-bottom:8px}.skills-road .project-box__image img{background-size:cover;overflow:hidden;max-width:100%;margin-bottom:0;transition:1s}.skills-road .project-box__details{position:absolute;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;top:0;left:0;width:100%;height:100%;background-color:#079979;color:whitesmoke;opacity:0;transition:opacity 0.25s ease-out}.skills-road .project-box__details>i{margin:8px}.skills-road .project-box__details:hover{opacity:1}.tooltip{visibility:hidden;min-width:100%;background-color:#322626;color:#fff;text-align:center;padding:8px;border-radius:6px;position:absolute;z-index:1;top:125%;left:0%;opacity:0;transition:opacity 0.3s;font-size:12px}.tooltip:after{content:"";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #322626}\n',""]),i.Z=l},645:function(e){"use strict";e.exports=function(e){var i=[];return i.toString=function(){return this.map((function(i){var t=e(i);return i[2]?"@media ".concat(i[2]," {").concat(t,"}"):t})).join("")},i.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(n[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),i.push(l))}},i}},667:function(e){"use strict";e.exports=function(e,i){return i||(i={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),i.hash&&(e+=i.hash),/["'() \t\n]/.test(e)||i.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},164:function(e,i,t){"use strict";i.Z=t.p+"skills-background.png"},379:function(e,i,t){"use strict";var o,n=function(){var e={};return function(i){if(void 0===e[i]){var t=document.querySelector(i);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[i]=t}return e[i]}}(),r=[];function a(e){for(var i=-1,t=0;t<r.length;t++)if(r[t].identifier===e){i=t;break}return i}function s(e,i){for(var t={},o=[],n=0;n<e.length;n++){var s=e[n],l=i.base?s[0]+i.base:s[0],p=t[l]||0,d="".concat(l," ").concat(p);t[l]=p+1;var c=a(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(r[c].references++,r[c].updater(u)):r.push({identifier:d,updater:x(u,i),references:1}),o.push(d)}return o}function l(e){var i=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){i.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(i);else{var a=n(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(i)}return i}var p,d=(p=[],function(e,i){return p[e]=i,p.filter(Boolean).join("\n")});function c(e,i,t,o){var n=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(i,n);else{var r=document.createTextNode(n),a=e.childNodes;a[i]&&e.removeChild(a[i]),a.length?e.insertBefore(r,a[i]):e.appendChild(r)}}function u(e,i,t){var o=t.css,n=t.media,r=t.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,f=0;function x(e,i){var t,o,n;if(i.singleton){var r=f++;t=m||(m=l(i)),o=c.bind(null,t,r,!1),n=c.bind(null,t,r,!0)}else t=l(i),o=u.bind(null,t,i),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;o(e=i)}else n()}}e.exports=function(e,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(e=e||[],i);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var n=a(t[o]);r[n].references--}for(var l=s(e,i),p=0;p<t.length;p++){var d=a(t[p]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=l}}}}},i={};function t(o){if(i[o])return i[o].exports;var n=i[o]={id:o,exports:{}};return e[o](n,n.exports,t),n.exports}t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,{a:i}),i},t.d=function(e,i){for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},function(){var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var o=i.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}(),function(){"use strict";var e=t(379),i=t.n(e),o=t(584);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t(479),t(357)}()}();