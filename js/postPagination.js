var length=1,postname=document.getElementById("body-wrap").className;function nexpostrig(){if("post"==postname){var e=document.getElementById("pagination"),t=e.getElementsByTagName("div").length;length=t,0==t&&e.parentNode.removeChild(e)}}postname=decodeURIComponent(postname),document.addEventListener("scroll",(function(){if("post"==postname&&0!=length){var e=window.scrollY+document.documentElement.clientHeight,t=window.scrollY,o=document.getElementById("pagination"),n=document.querySelector("#post .post-copyright");if(n&&o){var m=n.offsetTop+n.offsetHeight/2;o.style.bottom=m<e?"0px":"-100px"}var s=document.getElementById("footer"),d=s.offsetTop+s.offsetHeight/2;d>t&&d<e&&(o.style.bottom="-100px")}})),nexpostrig();