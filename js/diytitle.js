var urlinfo=window.location.pathname;urlinfo=decodeURIComponent(urlinfo);var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){"/"==urlinfo?document.title=OriginTitile:document.hidden?(document.title="w(ﾟДﾟ)w 不要走！再看看嘛！",clearTimeout(titleTime)):(document.title="♪(^∇^*)欢迎回来！"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))})),document.body.addEventListener("touchstart",(function(){}));