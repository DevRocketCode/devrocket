(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[445],{3999:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},316:function(e,t,n){"use strict";t.Z=void 0;var a,r=(a=n(365))&&a.__esModule?a:{default:a},s=n(3999);var o=function(e){var t=e.url,n=e.timeout;return new Promise((function(e,a){return(0,r.default)(t,{param:"c",timeout:n},(function(t,n){t&&a(t),n&&e(n)}))}))},c=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a="group["===n.substring(0,6)?n:n.toUpperCase();t=t.concat("&".concat(a,"=").concat(e[n]))}return t},i=function(e,t,n){var a=(0,s.validate)(e),r=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var i="https://prestonwallace.us18.list-manage.com/subscribe/post?u=46ef56ab15bcebc4a37198605&amp;id=fffd46c78d&amp;f_id=00b311e7f0",l=3500;arguments.length<3&&"string"==typeof t?i=t:"string"==typeof n&&(i=n),i=i.replace(/\/post/g,"/post-json");var u="&EMAIL=".concat(r).concat(c(t)),d="".concat(i).concat(u);return o({url:d,timeout:l})};t.Z=i},1715:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return d},default:function(){return u}});var a=n(7294),r=n(9572),s=n(9357),o=n(8032),c=n(316);var i=e=>{let{message:t,type:n,closeButton:r}=e;const[s,o]=a.useState(!0),c={error:"red",success:"green",info:"blue",warning:"yellow"}[n]||"gray";return s?a.createElement("div",{class:"bg-"+c+"-100 border border-"+c+"-400 text-"+c+"-700 px-4 py-3 rounded relative",role:"alert"},n&&a.createElement("div",null,a.createElement("strong",{class:"font-bold"},n)),a.createElement("div",{class:"block sm:inline"},t),a.createElement("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3"},r&&a.createElement("svg",{class:"fill-current h-6 w-6 text-"+c+"-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",onClick:()=>o(!s)},a.createElement("title",null,"Close"),a.createElement("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})))):null};var l=e=>{let{gift:t="Free Guide"}=e;const{0:n,1:r}=(0,a.useState)(""),{0:s,1:o}=(0,a.useState)(null),{0:l,1:u}=(0,a.useState)(null),d="Woo! Check your email inbox: Your "+t+" is on its way!";return"success"===s?a.createElement("div",{id:"signup-form"},a.createElement(i,{message:d,closeButton:!1})):a.createElement("form",{id:"signup-form",onSubmit:async e=>{e.preventDefault();const t=await(0,c.Z)(n);o(null==t?void 0:t.result),u(null==t?void 0:t.msg)}},a.createElement("div",null,a.createElement("em",null,"Register And Get Instant Access")),s&&a.createElement(i,{type:s,message:l}),a.createElement("div",{className:"form-group"},a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",value:n,onChange:e=>r(e.target.value)})),a.createElement("button",{type:"submit",className:"button button-info button-medium hover-grow"},"Get the FREE Guide"))};var u=e=>{var t;let{data:s,location:c}=e;const i=(null===(t=s.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(r.Z,{location:c,title:i,addMargin:!1,hideTitle:!0},a.createElement("div",{className:"home-container"},a.createElement("div",{id:"signup-area",className:"signup-area-bg"},a.createElement("div",{className:"content-container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"hero-content"},a.createElement("div",null,a.createElement("div",{className:"script-font"},"get my"),a.createElement("div",{className:"script-font with-rules"},"EXCLUSIVE GUIDE:"),a.createElement("h2",{className:"hero-title"},"TypeScript Essentials"),a.createElement("div",{className:"hero-tagline"},"5 Critical Keys",a.createElement("br",null)," to Using TypeScript ",a.createElement("b",null,"Effectively")),a.createElement(o.S,{className:"hero-avatar",formats:["auto","webp","avif"],src:"../img/about/headshot.jpg",quality:95,alt:"Preston Wallace",style:{zIndex:"10",borderRadius:"50%"},__imageData:n(2153)}),a.createElement("br",null),a.createElement("br",null),a.createElement(l,{gift:"Free Guide"}),a.createElement("div",null,a.createElement("em",null,a.createElement("small",null,"When you signup, we'll be sending you weekly emails with additional free content."))),a.createElement("br",null))))))))};const d=()=>a.createElement(s.Z,{title:"FREE TypeScript Essentials Guide"})},365:function(e,t,n){var a=n(1445)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var o,c,i=t.prefix||"__jp",l=t.name||i+r++,u=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;d&&(c=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),d));function p(){o.parentNode&&o.parentNode.removeChild(o),window[l]=s,c&&clearTimeout(c)}return window[l]=function(e){a("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+m(l)).replace("?&","?"),a('jsonp req "%s"',e),(o=document.createElement("script")).src=e,f.parentNode.insertBefore(o,f),function(){window[l]&&p()}};var r=0;function s(){}},1445:function(e,t,n){function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=n(4805)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),e.splice(s,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())},4805:function(e,t,n){var a;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,s=r-(a||r);e.diff=s,e.prev=a,e.curr=r,a=r;for(var o=new Array(arguments.length),c=0;c<o.length;c++)o[c]=arguments[c];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var i=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(n,a){if("%%"===n)return n;i++;var r=t.formatters[a];if("function"==typeof r){var s=o[i];n=r.call(e,s),o.splice(i,1),i--}return n})),t.formatArgs.call(e,o);var l=n.log||t.log||console.log.bind(console);l.apply(e,o)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,r=0;r<a;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(971),t.names=[],t.skips=[],t.formatters={}},971:function(e){var t=1e3,n=60*t,a=60*n,r=24*a,s=365.25*r;function o(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,c){c=c||{};var i,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var o=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!o)return;var c=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*r;case"hours":case"hour":case"hrs":case"hr":case"h":return c*a;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&!1===isNaN(e))return c.long?o(i=e,r,"day")||o(i,a,"hour")||o(i,n,"minute")||o(i,t,"second")||i+" ms":function(e){if(e>=r)return Math.round(e/r)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},2153:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8b8","images":{"fallback":{"src":"/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/8b471/headshot.jpg","srcSet":"/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/07593/headshot.jpg 463w,\\n/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/e557b/headshot.jpg 925w,\\n/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/8b471/headshot.jpg 1850w","sizes":"(min-width: 1850px) 1850px, 100vw"},"sources":[{"srcSet":"/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/a88b0/headshot.avif 463w,\\n/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/74b69/headshot.avif 925w,\\n/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/9b89d/headshot.avif 1850w","type":"image/avif","sizes":"(min-width: 1850px) 1850px, 100vw"},{"srcSet":"/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/94671/headshot.webp 463w,\\n/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/58c34/headshot.webp 925w,\\n/prestonwallace/static/90ac9f531867ebae789b50b21129bc63/7be33/headshot.webp 1850w","type":"image/webp","sizes":"(min-width: 1850px) 1850px, 100vw"}]},"width":1850,"height":1850}')}}]);
//# sourceMappingURL=component---src-pages-typescript-essentials-free-guide-js-44e41df92c65d956fbc6.js.map