var eo={changeMusicBg:function(e=!0){if("/music/"!=window.location.pathname)return void eo.removDelt();eo.addDeltInfo();const t=document.getElementById("eo_music_bg");if(e){const e=document.querySelector("#eoMusic-page .eoHide"+indexNum+" .aplayer-pic");t.style.backgroundImage=e.style.backgroundImage}else{let e=setInterval((()=>{const n=document.querySelector("#eoMusic-page .eoHide0 .aplayer-pic");if(n){clearInterval(e),t.style.backgroundImage=n.style.backgroundImage,eo.addEventListenerChangeMusicBg(),picleng=document.getElementById("eoMusic-page").getElementsByClassName("eo-music");for(var o=0;o<picleng.length;o++)document.querySelector("#eoMusic-page .eoHide"+o).aplayer.volume(.8,!0)}}),100)}},addEventListenerChangeMusicBg:function(){const e=document.getElementById("eoMusic-page"),t=e.querySelector(".eoHide"+indexNum+" .aplayer-info .aplayer-time .aplayer-icon-menu");e.querySelector("#eoMusic-page .eoHide"+indexNum).aplayer.on("loadeddata",(function(){eo.changeMusicBg()})),t.addEventListener("click",(function(){document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"})),document.getElementById("menu-mask").addEventListener("click",(function(){"/music/"==window.location.pathname&&(e.querySelector(".eoHide"+indexNum+" .aplayer-list").classList.remove("aplayer-list-hide"),document.getElementById("eo-music-list").classList.remove("eomusic-onoff"),document.getElementsByTagName("body")[0].style.overflow="hidden")}))},addDeltInfo:function(){document.querySelector("#web_bg").classList.add("bgCls"),document.getElementById("eo_music_bg").style.display="block",document.getElementById("footer").style.display="none",document.getElementById("nav-music").style.display="none",document.getElementById("content-inner").style.background="none",document.getElementById("page").style.margin="auto",document.getElementById("nav").setAttribute("style","background:none !important; backdrop-filter:none !important; -webkit-backdrop-filter:none !important"),document.getElementById("nav-totop").style.display="none",document.getElementById("page").style.background="rgba(0,0,0,0)",document.getElementsByTagName("body")[0].style.background="#0d0d0d",document.getElementsByTagName("body")[0].style.overflow="hidden",document.getElementById("site-name").getElementsByTagName("i")[0].setAttribute("style","color:#F7F7FA !important");for(var e=document.getElementById("nav-group").getElementsByClassName("site-page"),t=0;t<e.length;t++)e[t].style.color="#fff"},removDelt:function(){document.querySelector("#web_bg").classList.remove("bgCls"),document.getElementById("eo_music_bg").style.display="none",document.getElementById("web_bg").style.backgroundImage="none",document.getElementById("footer").style.display="flex",document.getElementById("nav-music").style.display="block",document.getElementsByClassName("pace-running")[0].style.background="var(--global-bg)",document.getElementsByTagName("body")[0].style.background="var(--global-bg)",document.getElementsByTagName("body")[0].style.overflow="auto"}};eo.changeMusicBg(!1);var indexNum=0,picleng=0,volume=.8;function musicListClick(e){var t="eoHide"+indexNum,n="eoHide"+e,o=document.getElementsByClassName(n)[0];indexNum!==e&&(document.getElementsByClassName(t)[0].style.left="-200%",document.getElementsByClassName(t)[0].style.right="0%",document.getElementsByClassName(t)[0].style.opacity=0,window.screen.width<768&&(document.querySelector("."+t+" .aplayer-body").style.left="-200%",document.querySelector("."+t+" .aplayer-body").style.opacity=0),setTimeout((()=>{document.getElementsByClassName(t)[0].style.right="-200%",document.getElementsByClassName(t)[0].style.left="0%",document.getElementsByClassName(t)[0].style.opacity=0,window.screen.width<768&&(document.querySelector("."+t+" .aplayer-body").style.right="-200%",document.querySelector("."+t+" .aplayer-body").style.left="0%",document.querySelector("."+t+" .aplayer-body").style.opacity=0)}),600)),o.style.right="0%",o.style.opacity=1,document.querySelector("."+t+" .aplayer-controller").style.display="none",document.querySelector("."+n+" .aplayer-controller").style.display="flex",window.screen.width<768&&(document.querySelector("."+n+" .aplayer-body").style.right="0%",document.querySelector("."+n+" .aplayer-body").style.left="0%",document.querySelector("."+n+" .aplayer-body").style.opacity=1),indexNum=e,eo.addEventListenerChangeMusicBg(),eo.changeMusicBg(),document.getElementById("eo-music-list").classList.remove("eomusic-onoff"),setTimeout((function(){document.getElementById("menu-mask").style.display="none"}),500),document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_hide"}var isclik=!0;function musicBtnClis(){isclik&&(musicListSrcbg(),isclik=!1),document.getElementById("eo-music-list").classList.add("eomusic-onoff"),document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"}function musicListSrcbg(){for(var e=document.getElementById("eo-music-list").getElementsByTagName("img"),t=0;t<picleng.length;t++)imgs=picleng[t].getElementsByClassName("aplayer-pic")[0].style.backgroundImage,e[t].src=imgs.split('"')[1].split('"')[0]}