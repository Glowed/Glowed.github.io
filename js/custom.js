var scrollTop,moveWheel1=!0,urlinfo=window.location.pathname;function scroll(){document.addEventListener("wheel",(function(e){e=e||window.event,scrollTop=document.documentElement.scrollTop||document.body.scrollTop,1==moveWheel1&&e.wheelDelta&&(e.wheelDelta<0&&"/fcircle/"==urlinfo?document.getElementById("page-header").className="not-home-page nav-fixed":scrollTop>=0&&scrollTop<=100&&"/fcircle/"==urlinfo?document.getElementById("page-header").className="not-home-page":e.wheelDelta>0&&"/fcircle/"==urlinfo&&(document.getElementById("page-header").className="not-home-page nav-fixed nav-visible"))}),!1)}function btntop(){"/fcircle/"==urlinfo&&(document.getElementById("page-header").className="not-home-page")}function newPost(){let e=document.querySelectorAll(".recent-post-info"),t=new Date(e[0].querySelector("#recent-posts .post-meta-date").getElementsByTagName("time")[0].getAttribute("datetime")).getTime(),n=0;e.forEach(((e,o)=>{let a=new Date(e.querySelector("#recent-posts .post-meta-date").getElementsByTagName("time")[0].getAttribute("datetime")).getTime();a>t&&(t=a,n=o)}));var o=document.createElement("span");if(o.innerHTML="最新文章",o.className="lastestpost",e[n].querySelector(".article-meta.newpost")){o.className="meta-lastestpost";var a=e[n].querySelector(".article-meta").firstChild;e[n].querySelector(".article-meta").insertBefore(o,a)}else a=e[n].firstChild,e[n].insertBefore(o,a)}function toRandomFlink(){var e=document.getElementById("article-container").getElementsByClassName("flink-list-item").length,t=document.getElementById("article-container").getElementsByClassName("flink-list-item")[Math.floor(Math.random()*e)].getElementsByClassName("cf-friends-link")[0].href;document.getElementsByClassName("secondary")[0].href=t}function addFriendLink(){var e=document.getElementsByClassName("el-textarea__inner")[0];let t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),e.value="昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n",e.dispatchEvent(t),document.getElementById("post-comment").focus(),e.focus(),e.setSelectionRange(-1,-1)}function scrollTocomment(e){var t=document.querySelector(e).offsetTop;window.scrollTo(0,t-80)}function myFunction(){console.clear()}scroll(),$("#nav-totop").on("click",(function(){btntop()})),"/"==location.pathname&&newPost(),myFunction();var overtime,musciPlayiS,isOnOff=!1;function moreBarClick(){isOnOff?(document.querySelector("#category-bar-items").classList.remove("tag-bar-items"),document.querySelector("#category-bar").classList.remove("tag-bar-off"),document.querySelector("#more-bar").innerHTML="展开",isOnOff=!1):(document.querySelector("#category-bar-items").classList.add("tag-bar-items"),document.querySelector("#category-bar").classList.add("tag-bar-off"),document.querySelector("#more-bar").innerHTML="收起",isOnOff=!0)}function qq_musicpage(){if("/music/"!=urlinfo)document.querySelector("#web_bg").classList.remove("bgCls"),document.getElementById("web_bg").style.backgroundImage="none",document.getElementById("footer").style.display="flex",document.getElementById("nav-music").style.display="block",document.getElementsByClassName("pace-running")[0].style.background="var(--global-bg)",document.getElementsByTagName("body")[0].style.background="var(--global-bg)",clearInterval(overtime);else{document.querySelector("#web_bg").classList.add("bgCls"),document.getElementById("footer").style.display="none",document.getElementById("nav-music").style.display="none",document.getElementById("content-inner").style.background="none",document.getElementById("page").style.margin="auto",document.getElementById("nav").setAttribute("style","background:none !important"),document.getElementById("page").style.background="rgba(0,0,0,0)",document.getElementsByTagName("body")[0].style.background="#0d0d0d",document.getElementById("site-name").style.color="#F7F7FA";for(var e=document.getElementById("nav-group").getElementsByClassName("site-page"),t=0;t<e.length;t++)e[t].style.color="#fff";overtime=window.setInterval("setOverTime()","500"),1==musciPlayiS&&musicStop()}document.body.onmousedown=function(e){if(0==e.button){var t=e.target,n=t.tagName,o=t.classList[1],a=t.id;"/music/"==urlinfo&&("svg"==n?"aplayer-icon-menu"!=t.parentNode.classList[1]&&"aplayer-icon-menu"!=o||setTimeout((function(){document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"}),100):"path"==n&&"aplayer-icon-menu"==t.parentNode.parentNode.classList[1]&&setTimeout((function(){document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"}),100),"menu-mask"==a&&domAplyerList().classList.remove("aplayer-list-hide"))}}}function domAplyerList(){return document.getElementById("qq-music").childNodes[3]}function setOverTime(){imgs=document.getElementById("qq-music").getElementsByClassName("aplayer-pic")[0].style.backgroundImage,document.getElementById("web_bg").style.backgroundImage=imgs}urlinfo=window.location.pathname,qq_musicpage();