const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let o;e.addEventListener("click",(function(){o=setInterval((()=>{let o=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=o,e.disabled=!0,d.disabled=!1}),1e3)})),d.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.2e9b59bf.js.map
