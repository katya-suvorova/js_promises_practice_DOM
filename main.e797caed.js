parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("body"),n=new Promise(function(n,t){e.addEventListener("click",function(){n("First promise was resolved")}),setTimeout(function(){t(Error("First promise was rejected"))},3e3)}),t=new Promise(function(n){e.addEventListener("click",function(){n("Second promise was resolved")}),e.addEventListener("contextmenu",function(){n("Second promise was resolved")})}),i=new Promise(function(n){var t,i;e.addEventListener("click",function(){(t=!0)&&i&&n("Third promise was resolved")}),e.addEventListener("contextmenu",function(){i=!0,t&&i&&n("Third promise was resolved")})});function o(n){e.insertAdjacentHTML("beforeend",'\n    <div data-qa="notification" class="success">'.concat(n,"</div>\n  "))}function s(n){e.insertAdjacentHTML("beforeend",'\n    <div data-qa="notification" class="warning">'.concat(n,"</div>\n  "))}n.then(o,s),t.then(o),i.then(o);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e797caed.js.map