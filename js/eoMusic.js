var eo={changeMusicBg:function(e=!0){if("/music/"!=window.location.pathname)return void document.querySelector("html").classList.remove("musicScroll");document.querySelector("html").classList.add("musicScroll");const t=document.getElementById("eo_music_bg");if(e){const e=document.querySelector("#eoMusic-page .aplayer-pic");t.style.backgroundImage=e.style.backgroundImage}else{let e=setInterval((()=>{const n=document.querySelector("#eoMusic-page .aplayer-pic");n&&(clearInterval(e),t.style.backgroundImage=n.style.backgroundImage,eo.addEventListenerChangeMusicBg(),document.querySelector("#eoMusic-page .eoHide").aplayer.volume(.8,!0),musciPlayiS&&musicStop())}),100)}},addEventListenerChangeMusicBg:function(){const e=document.getElementById("eoMusic-page"),t=e.querySelector(".eoHide .aplayer-info .aplayer-time .aplayer-icon-menu"),n=e.querySelector(".eoHide .aplayer-info .aplayer-lrc");e.querySelector("#eoMusic-page .eoHide").aplayer.on("loadeddata",(function(){eo.changeMusicBg()})),e.querySelector("#eoMusic-page .eoHide").aplayer.on("play",(function(){clocClass(),window.screen.width>768&&(document.getElementById("eolistbg"+indexNum).classList.add("playlistimgbg"),document.getElementById("eolistbg"+indexNum).classList.add("animaito"),document.getElementById("eolistbg"+indexNum).classList.add("playimgbg"))})),e.querySelector("#eoMusic-page .eoHide").aplayer.on("pause",(function(){indexNex=indexNum,document.getElementById("eolistbg"+indexNex).classList.remove("animaito"),indexNum!=indexNex&&clocClass()})),t.addEventListener("click",(function(){document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"})),n.addEventListener("click",(function(){window.screen.width<768&&(document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show",e.querySelector(".eoHide .aplayer-list").classList.add("aplayer-list-hide"))})),document.getElementById("menu-mask").addEventListener("click",(function(){"/music/"==window.location.pathname&&(e.querySelector(".eoHide .aplayer-list").classList.remove("aplayer-list-hide"),document.getElementById("eo-music-list").classList.remove("eomusic-onoff"))}))}};eo.changeMusicBg(!1);var musicLength,indexNum=0,indexNex=0,volume=.8;function musicListClick(e,t,n){indexNex=indexNum,indexNum=n,clocClass(),musicListHide(),document.getElementById("eolistbg"+indexNex).classList.remove("animaito"),document.getElementById("eolistbg"+indexNum).classList.add("playlistimgbg"),document.getElementById("eolistbg"+indexNum).classList.add("playimgbg"),indexNum!=indexNex&&(document.getElementsByClassName("eo-music")[0].style.left="-200%",document.getElementsByClassName("eo-music")[0].style.right="0%",document.getElementsByClassName("eo-music")[0].style.opacity=0,setTimeout((()=>{document.getElementsByClassName("eo-music")[0].style.right="-200%",document.getElementsByClassName("eo-music")[0].style.left="0%",document.getElementsByClassName("eo-music")[0].style.opacity=0;const n=document.querySelector("#musics .eo-music").aplayer;var s=`https://api.injahow.cn/meting/?server=${t}&type=playlist&id=${e}`;n.list.clear(),fetch(s).then((e=>e.json())).then((e=>{musicLength=e.length,n.list.add(e)})).catch((e=>console.error(e))),setTimeout((()=>{document.getElementsByClassName("eo-music")[0].style.right="0%",document.getElementsByClassName("eo-music")[0].style.left="0%",document.getElementsByClassName("eo-music")[0].style.opacity=1}),200)}),600))}function musicBtnClis(){document.getElementById("eo-music-list").classList.add("eomusic-onoff"),document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"}function musicListHide(){document.getElementById("eo-music-list").classList.remove("eomusic-onoff"),document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_hide",setTimeout((()=>{document.getElementById("menu-mask").style.removeProperty("display"),document.getElementById("menu-mask").style.removeProperty("animation")}),400)}function clocClass(){var e=document.querySelectorAll("#eo-music-list .eolistbg");for(let t=0;t<e.length;t++)e[t].classList.remove("playlistimgbg"),e[t].classList.remove("playimgbg")}function getStyle(){let e=setInterval((()=>{var t;if(t="/music/"==window.location.pathname?document.querySelector("#eoMusic-page .aplayer-lrc-contents > p:nth-child(2)"):document.querySelector("#nav-music .aplayer-lrc-contents > p:nth-child(2)")){if(!document.documentMode){var n=getComputedStyle(t,null);fontHight=Number(n.height.replace("px",""))+Number(n.marginBottom.replace("px",""))}clearInterval(e)}}),600)}getStyle();