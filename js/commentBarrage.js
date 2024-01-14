var commentBarrageConfig={lightColors:[["var(--lyx-white-acrylic2)","var(--lyx-black)"]],darkColors:[["var(--lyx-black-acrylic2)","var(--lyx-white)"]],maxBarrage:1,barrageTime:5e3,twikooUrl:"https://twikoo.yeooe.cn",accessToken:"{f28eaefe40ae4ccb97b95cb9c0b1391c}",pageUrl:window.location.pathname,barrageTimer:[],barrageList:[],barrageIndex:0,noAvatarType:"retro",dom:document.querySelector(".comment-barrage"),displayBarrage:!0,avatarCDN:"cravatar.cn"};function isInViewPortOfOne(e){const a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return e.offsetTop-document.documentElement.scrollTop<=a}function initCommentBarrage(){var e=JSON.stringify({event:"COMMENT_GET","commentBarrageConfig.accessToken":commentBarrageConfig.accessToken,url:commentBarrageConfig.pageUrl}),a=new XMLHttpRequest;a.withCredentials=!0,a.addEventListener("readystatechange",(function(){4===this.readyState&&(commentBarrageConfig.barrageList=commentLinkFilter(JSON.parse(this.responseText).data),commentBarrageConfig.dom.innerHTML="")})),a.open("POST",commentBarrageConfig.twikooUrl),a.setRequestHeader("Content-Type","application/json"),a.send(e),setInterval((()=>{commentBarrageConfig.barrageList.length&&(popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]),commentBarrageConfig.barrageIndex+=1,commentBarrageConfig.barrageIndex%=commentBarrageConfig.barrageList.length),commentBarrageConfig.barrageTimer.length>(commentBarrageConfig.barrageList.length>commentBarrageConfig.maxBarrage?commentBarrageConfig.maxBarrage:commentBarrageConfig.barrageList.length)&&removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())}),commentBarrageConfig.barrageTime)}function commentLinkFilter(e){e.sort(((e,a)=>e.created-a.created));let a=[];return e.forEach((e=>{a.push(...getCommentReplies(e))})),a}function getCommentReplies(e){if(e.replies){let a=[e];return e.replies.forEach((e=>{a.push(...getCommentReplies(e))})),a}return[]}function popCommentBarrage(e){let a=document.createElement("div");commentBarrageConfig.dom.clientWidth,commentBarrageConfig.dom.clientHeight;a.className="comment-barrage-item";Math.floor(Math.random()*commentBarrageConfig.lightColors.length);a.innerHTML=`\n      <div class="barrageHead">\n          <img class="barrageAvatar" src="https://${commentBarrageConfig.avatarCDN}/avatar/${e.mailMd5}?d=${commentBarrageConfig.noAvatarType}"/>\n          <div class="barrageNick">${e.nick}</div>\n          <a href="javascript:switchCommentBarrage()" style="font-size:20px">×</a>\n      </div>\n      <div class="barrageContent">${e.comment}</div>\n  `,commentBarrageConfig.barrageTimer.push(a),commentBarrageConfig.dom.append(a)}function removeCommentBarrage(e){e.className="comment-barrage-item out",1!=commentBarrageConfig.maxBarrage?setTimeout((()=>{commentBarrageConfig.dom.removeChild(e)}),1e3):commentBarrageConfig.dom.removeChild(e)}document.onscroll=function(){commentBarrageConfig.displayBarrage&&(isInViewPortOfOne(document.getElementById("post-comment"))?document.getElementsByClassName("comment-barrage")[0].setAttribute("style","display:none;"):document.getElementsByClassName("comment-barrage")[0].setAttribute("style",""))},switchCommentBarrage=function(){if(localStorage.setItem("isBarrageToggle",Number(!Number(localStorage.getItem("isBarrageToggle")))),!isInViewPortOfOne(document.getElementById("post-comment"))){commentBarrageConfig.displayBarrage=!commentBarrageConfig.displayBarrage;let e=document.querySelector(".comment-barrage");e&&$(e).fadeToggle()}},null==localStorage.getItem("isBarrageToggle")?localStorage.setItem("isBarrageToggle","0"):"1"==localStorage.getItem("isBarrageToggle")&&(localStorage.setItem("isBarrageToggle","0"),switchCommentBarrage()),initCommentBarrage();