!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VkAutocompleteHttp=e():t.VkAutocompleteHttp=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){var i,r;i=n(1),r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),t.exports=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),s=n(18),u=i(s);e["default"]={mixins:[o["default"]],data:function(){return{processUrlDebounced:null}},props:{url:{type:String},httpHeaders:{type:Array,"default":function(){return[]}},debounce:{type:Number,"default":500},filter:{type:Function,"default":function(t){return t}},animate:{type:Boolean}},watch:{url:function(t){this.processUrl(t)}},methods:{processUrl:function(){this.processUrlDebounced()},onChange:function(t){this.inputValue=t,this.inputValue.length>0?this.$emit("change",t):(this.listVisible=!1,this.localItems=[])},emitError:function(t){this.$emit("error",t),this.hideList()}},created:function(){this.processUrlDebounced=(0,u["default"])(function(){var t=this;this.animate&&(this.flipIcon=!0),this.url&&(this.filter?!function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE){if(t.flipIcon=!1,200!==e.status)return void t.emitError("Network problems: "+e.status);if(""==t.inputValue)return t.hideList();var n=null;try{n=JSON.parse(e.responseText)}catch(i){return t.emitError(i.message)}var r=t.filter(n);Array.isArray(r)?(t.localItems=r,t.listVisible=!0):t.emitError("Wrong format from the filter")}},e.open("GET",t.url);var n=!0,i=!1,r=void 0;try{for(var o,s=t.httpHeaders[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;e.setRequestHeader(u.key,u.value)}}catch(a){i=!0,r=a}finally{try{!n&&s["return"]&&s["return"]()}finally{if(i)throw r}}e.send()}():console.err("You must provide both url and filter"))},this.debounce)}}},function(t,e,n){var i,r;n(3),i=n(7);var o=n(17);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.id,i,""]]);n(6)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".uk-dropdown{background:#fff;border:1px solid #d3d3d3;box-shadow:0 2px 5px rgba(0,0,0,.1);overflow-y:scroll;min-height:50px}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=f[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(a(i.parts[o],e))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(a(i.parts[o],e));f[i.id]={id:i.id,refs:1,parts:s}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],s=r[1],u=r[2],a=r[3],c={css:s,media:u,sourceMap:a};n[o]?n[o].parts.push(c):e.push(n[o]={id:o,parts:[c]})}return e}function o(t,e){var n=h(),i=y[y.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function a(t,e){var n,i,r;if(e.singleton){var o=v++;n=m||(m=u(e)),i=c.bind(null,n,o,!1),r=c.bind(null,n,o,!0)}else n=u(e),i=l.bind(null,n),r=function(){s(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function c(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function l(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var u=n[s],a=f[u.id];a.refs--,o.push(a)}if(t){var c=r(t);i(c,e)}for(var s=0;s<o.length;s++){var a=o[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete f[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=n(8),s=i(o),u=n(13),a=i(u),c=n(16),l=i(c);e["default"]={components:{VkInput:s["default"],VkAutocompleteItem:a["default"]},directives:{adjust:l["default"]},data:function(){return{active:0,listVisible:!1,localItems:[],inputValue:"",timestamp:(new Date).getTime(),flipIcon:!1,dontUpdate:!1}},props:{value:{type:String,"default":""},type:{type:String,"default":"text"},placeholder:{type:String},icon:{type:String},color:{type:String},disabled:{type:Boolean},size:{type:String},wide:{type:String},flipIcon:{type:Boolean},items:{type:Array,"default":[]},field:{type:String,"default":"text"},delegate:{type:String,"default":"vk-autocomplete-item"}},watch:{items:function(t){this.processStatic(t)},value:{immediate:!0,handler:function(t){this.inputValue=t}},inputValue:function(t){return this.dontUpdate?void(this.dontUpdate=!1):void this.onChange(t)}},computed:{resultItems:function(){var t=this,e=new RegExp("("+this.inputValue+")","ig");return this.localItems.map(function(n){if(!n[t.field])return n;var i={};return r(i,n),i[t.field]=i[t.field].replace(e,"<b>$1</b>"),i})}},methods:{onMouseEnter:function(t){this.active=t},onMove:function(t){if(this.resultItems&&this.resultItems.length){var e=this.active+t;if(e>=0&&e<this.resultItems.length){this.active=e;var n=document.querySelector("#_"+this.timestamp+"_"+this.active);n.focus(),this.$refs.input.focus()}}},hideList:function(){this.listVisible=!1,this.localItems=[],this.active=0},onClickOutside:function(t){this.$el.contains(t.target)||this.hideList()},onEsc:function(t){27===t.keyCode&&this.hideList()},onChange:function(t){var e=this;if(!t||0==t.length)return void this.hideList();var n=new RegExp("("+t+")","ig"),i=[];this.items&&(i=this.items.filter(function(t){if(t[e.field]&&t[e.field].search(n)!==-1)return!0})),i.length>0?(this.localItems=i,this.listVisible=!0):this.hideList()},processStatic:function(t){t&&this.onChange()},onSelect:function(){this.localItems.length>this.active&&this.active>=0?(this.dontUpdate=!0,this.inputValue=this.localItems[this.active][this.field],this.$emit("select",this.localItems[this.active])):this.$emit("select",this.inputValue),this.hideList()},onInput:function(t){this.$emit("input",t)}},created:function(){document.body.addEventListener("click",this.onClickOutside)},beforeDestroy:function(){document.body.addEventListener("click",this.onClickOutside)}}},function(t,e,n){var i,r;n(9),i=n(11);var o=n(12);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.id,i,""]]);n(6)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".flip-icon{-webkit-animation-name:spinner;-webkit-animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-webkit-animation-duration:1s;animation-name:spinner;animation-timing-function:linear;animation-iteration-count:infinite;animation-duration:1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@-webkit-keyframes spinner{0%{-webkit-transform:rotateY(0deg)}to{-webkit-transform:rotateY(-1turn)}}@keyframes spinner{0%{transform:rotateY(0deg)}to{transform:rotateY(-1turn)}}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{currentValue:""}},props:{value:[String,Number],type:{type:String,"default":"text"},placeholder:{type:String},icon:{type:String},color:{type:String},disabled:{type:Boolean},size:{type:String},wide:{type:String},flipIcon:{type:Boolean,"default":!1}},computed:{iconName:function(){if(this.icon)return"uk-icon-"+this.icon},colorName:function(){if(this.color)return"uk-form-"+this.color},sizeName:function(){if(this.size)return"uk-form-"+this.size},wideName:function(){if(this.wide)return"uk-form-width-"+this.wide}},methods:{focus:function(){this.$refs.input.focus()}},watch:{value:{immediate:!0,handler:function(t){this.currentValue=t}},currentValue:function(t){this.$emit("input",t)}}}},function(module,exports){module.exports={render:function(){with(this)return _h("span",{"class":["uk-form",{"uk-form-icon":icon}]},[icon?_h("i",{"class":[iconName,{"flip-icon":flipIcon}]}):_e()," ",_h("input",{directives:[{name:"model",value:currentValue,expression:"currentValue"}],ref:"input","class":[colorName,wideName,sizeName],attrs:{type:type,name:"",tabindex:"-1",placeholder:placeholder,autocomplete:"off",disabled:disabled},domProps:{value:_s(currentValue)},on:{input:function(t){t.target.composing||(currentValue=t.target.value)}}})])},staticRenderFns:[]}},function(t,e,n){var i,r;i=n(14);var o=n(15);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{data:{},field:{}}}},function(module,exports){module.exports={render:function(){with(this)return _h("span",{domProps:{innerHTML:_s(data[field])}})},staticRenderFns:[]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={componentUpdated:function(t){var e=window.innerHeight-t.getBoundingClientRect().top;e=e-15>0?e-15:e,t.style.maxHeight=e+"px"}}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"uk-autocomplete uk-form","class":{"uk-open":this.listVisible}},[_h("vk-input",{directives:[{name:"model",value:inputValue,expression:"inputValue"}],ref:"input",attrs:{type:type,placeholder:placeholder,icon:icon,color:color,disabled:disabled,size:size,wide:wide,"flip-icon":flipIcon},domProps:{value:inputValue},on:{input:[function(t){inputValue=t},onInput]},nativeOn:{keydown:[function(t){38===t.keyCode&&(t.preventDefault(),onMove(-1))},function(t){40===t.keyCode&&(t.preventDefault(),onMove(1))},function(t){27===t.keyCode&&hideList(t)},function(t){13===t.keyCode&&onSelect(t)}]}})," ",listVisible?_h("div",{directives:[{name:"adjust"}],staticClass:"uk-dropdown",attrs:{"aria-expanded":"true"}},[_h("ul",{staticClass:"uk-nav uk-nav-autocomplete uk-autocomplete-results"},[resultItems&&_l(resultItems,function(t,e){return _h("li",{"class":{"uk-active":e==active},attrs:{id:"_"+timestamp+"_"+e,tabindex:"-1"},on:{mouseenter:function(t){onMouseEnter(e)}}},[_h("a",[_h(delegate,{tag:"component",attrs:{data:t,field:field}})])])})])]):_e()])},staticRenderFns:[]}},function(t,e){(function(e){function n(t,e,n){function r(e){var n=m,i=v;return m=v=void 0,_=e,g=t.apply(i,n)}function o(t){return _=t,b=setTimeout(l,e),V?r(t):g}function a(t){var n=t-S,i=t-_,r=e-n;return j?k(r,y-i):r}function c(t){var n=t-S,i=t-_;return void 0===S||n>=e||n<0||j&&i>=y}function l(){var t=w();return c(t)?f(t):void(b=setTimeout(l,a(t)))}function f(t){return b=void 0,I&&m?r(t):(m=v=void 0,g)}function d(){void 0!==b&&clearTimeout(b),_=0,m=S=v=b=void 0}function p(){return void 0===b?g:f(w())}function h(){var t=w(),n=c(t);if(m=arguments,v=this,S=t,n){if(void 0===b)return o(S);if(j)return b=setTimeout(l,e),r(S)}return void 0===b&&(b=setTimeout(l,e)),g}var m,v,y,g,b,S,_=0,V=!1,j=!1,I=!0;if("function"!=typeof t)throw new TypeError(u);return e=s(e)||0,i(n)&&(V=!!n.leading,j="maxWait"in n,y=j?x(s(n.maxWait)||0,e):y,I="trailing"in n?!!n.trailing:I),h.cancel=d,h.flush=p,h}function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||r(t)&&b.call(t)==c}function s(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=d.test(t);return n||p.test(t)?h(t.slice(2),n?2:8):f.test(t)?a:+t}var u="Expected a function",a=NaN,c="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,h=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,y=m||v||Function("return this")(),g=Object.prototype,b=g.toString,x=Math.max,k=Math.min,w=function(){return y.Date.now()};t.exports=n}).call(e,function(){return this}())}])});