function timeago(){var e=document.getElementById("body-wrap").className;if("page"==(e=decodeURIComponent(e)))for(var n=document.getElementsByTagName("time"),r=new Date,i=36e5,t=24*i,o=24192e5,a=0,T=0,m=0,M=0,u=0,H=" ",h=" ",l=" ",L=" ",s=/^(\d{4})-(\d{1,2})-(\d{1,2})$/,g=0;g<n.length;g++){a=r.getTime()-new Date(n[g].dateTime).getTime(),T=Math.floor(a/o),m=Math.floor(a/t),M=Math.floor(a/i),u=Math.floor(a/6e4),H=n[g].innerHTML.substring(0,4),null!=(L="/essay/"==window.location.pathname?n[g].innerHTML.substring(0,10).match(s):n[g].innerHTML.match(s))&&(h=L[2],l=L[3],H==r.getFullYear().toString()&&(T<=12&&T>=0&&("0"==h[0]&&(h=h.slice(1)),"0"==l[0]&&(l=l.slice(1)),n[g].innerHTML=h+"-"+l),m>7?("0"==h[0]&&(h=h.slice(1)),"0"==l[0]&&(l=l.slice(1)),n[g].innerHTML=h+"-"+l):m<7&&m&&m>0?n[g].innerHTML=m+"天前":M<24&&M>0?n[g].innerHTML=M+"小时前":m<0?n[g].innerHTML="今天":(u<=10&&(n[g].innerHTML="刚刚"),u>10&&u<60&&(n[g].innerHTML=u+"分钟前"))))}}function webmasterTime(){var e=document.getElementById("author-info__sayhi");e&&(now=new Date,hour=now.getHours(),hour<6?e.innerHTML="👋 夜深了，快去休息！":hour<9?e.innerHTML="👋 早上好！我是":hour<12?e.innerHTML="👋 上午好！我是":hour<14?e.innerHTML="👋 中午好！我是":hour<17?e.innerHTML="👋 下午好！我是":hour<19?e.innerHTML="👋 傍晚好！我是":hour<22?e.innerHTML="👋 晚上好！我是":e.innerHTML="👋 夜里好！我是")}timeago(),webmasterTime();