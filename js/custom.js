var scrollTop,moveWheel1=!0,urlinfo=window.location.pathname;function scroll(){document.addEventListener("wheel",(function(e){e=e||window.event,scrollTop=document.documentElement.scrollTop||document.body.scrollTop,1==moveWheel1&&e.wheelDelta&&(e.wheelDelta<0&&"/fcircle/"==urlinfo?document.getElementById("page-header").className="not-home-page nav-fixed":scrollTop>=0&&scrollTop<=100&&"/fcircle/"==urlinfo?document.getElementById("page-header").className="not-home-page":e.wheelDelta>0&&"/fcircle/"==urlinfo&&(document.getElementById("page-header").className="not-home-page nav-fixed nav-visible"))}),!1)}function btntop(){"/fcircle/"==urlinfo&&(document.getElementById("page-header").className="not-home-page")}function newPost(){let e=document.querySelectorAll(".recent-post-info"),t=new Date(e[0].querySelector("#recent-posts .post-meta-date").getElementsByTagName("time")[0].getAttribute("datetime")).getTime(),n=0;e.forEach(((e,o)=>{let l=new Date(e.querySelector("#recent-posts .post-meta-date").getElementsByTagName("time")[0].getAttribute("datetime")).getTime();l>t&&(t=l,n=o)}));var o=document.createElement("span");if(o.innerHTML="最新文章",o.className="lastestpost",e[n].querySelector(".article-meta.newpost")){o.className="meta-lastestpost";var l=e[n].querySelector(".article-meta").firstChild;e[n].querySelector(".article-meta").insertBefore(o,l)}else l=e[n].firstChild,e[n].insertBefore(o,l)}function toRandomFlink(){var e=document.getElementById("article-container").getElementsByClassName("flink-list-item").length,t=document.getElementById("article-container").getElementsByClassName("flink-list-item")[Math.floor(Math.random()*e)].getElementsByClassName("cf-friends-link")[0].href;document.getElementsByClassName("secondary")[0].href=t}function addFriendLink(){var e=document.getElementsByClassName("wl-editor")[0];let t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),e.value="昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n",e.dispatchEvent(t),document.getElementById("wl-edit").focus(),e.focus(),e.setSelectionRange(-1,-1)}function scrollTocomment(e){var t=document.querySelector(e).offsetTop;window.scrollTo(0,t-80)}function myFunction(){console.clear()}scroll(),$("#nav-totop").on("click",(function(){btntop()})),"/"==location.pathname&&newPost(),myFunction();