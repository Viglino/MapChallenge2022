var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequirecc54;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return r[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequirecc54=n);var l=n("iQyfo");const o=document.querySelector("ul.galery");document.querySelectorAll("ul.list a").forEach((e=>{const r=l.default.create("LI",{html:l.default.create("IMG",{src:e.href.replace(/html$/,"png"),title:e.innerText,click:()=>{window.location=e.href}}),parent:o});l.default.create("LABEL",{text:e.innerText,parent:r})}));