export default()=>{const o=document.querySelector(".tool-scroll-to-top"),t=document.querySelector(".tool-scroll-to-bottom"),backToTop=()=>{window.scrollTo({top:0,behavior:"smooth"})},backToBottom=()=>{const o=document.body.scrollHeight;window.scrollTo({top:o,behavior:"smooth"})};o.addEventListener("click",backToTop),t.addEventListener("click",backToBottom)};
//# sourceMappingURL=scrollTopBottom.js.map