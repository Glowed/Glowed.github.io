const vh=1*window.innerHeight;document.documentElement.style.setProperty("--vh",`${vh}px`),window.addEventListener("resize",(()=>{let e=1*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)})),document.addEventListener("keydown",(function(e){"/music/"==window.location.pathname&&("Space"===e.code&&(e.preventDefault(),document.querySelector("#eoMusic-page .eoHide").aplayer.toggle()),39===e.keyCode&&(e.preventDefault(),document.querySelector("#eoMusic-page .eoHide").aplayer.skipForward()),37===e.keyCode&&(e.preventDefault(),document.querySelector("#eoMusic-page .eoHide").aplayer.skipBack()),38===e.keyCode&&volume<=1&&(volume+=.1,document.querySelector("#eoMusic-page .eoHide").aplayer.volume(volume,!0)),40===e.keyCode&&volume>=0&&(volume+=-.1,document.querySelector("#eoMusic-page .eoHide").aplayer.volume(volume,!0)))}));