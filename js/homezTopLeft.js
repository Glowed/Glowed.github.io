"use strict";
var hoverOnCommentBarrage;


function RemoveRewardMask() {
	$(".reward-main")
		.attr("style", "display: none"), $("#quit-box")
		.attr("style", "display: none")
}

function AddRewardMask() {
	$(".reward-main")
		.attr("style", "display: flex")
}


function percent() {
	var e = document.documentElement.scrollTop || window.pageYOffset,
		t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight,
		o = Math.round(e / t * 100),
		n = document.querySelector("#percent"),
		r = window.scrollY + document.documentElement.clientHeight,
		a = document.getElementById("post-tools") || document.getElementById("footer");
	a.offsetTop + a.offsetHeight / 2 < r || 90 < o ? (document.querySelector("#nav-totop")
		.classList.add("long"), n.innerHTML = "返回顶部") : (document.querySelector("#nav-totop")
		.classList.remove("long"), n.innerHTML = o)
}

document.addEventListener("touchstart", function(e) {
		RemoveRewardMask()
	}, !1), $(document)
	document.addEventListener("scroll", btf.throttle(function() {
		// initThemeColor()
		// percent()
	}, 200)), navigator.serviceWorker.getRegistrations()
	//  window.addEventListener("resize", function() {
	// 	document.querySelector("#waterfall") && heo.reflashEssayWaterFall()
	// }), 
	$(".top_post_group")
	.hover(function() {
		// console.log("卡片悬浮")
	}, function() {
		hoverOnCommentBarrage = !1, document.getElementById("todayCard")
			.classList.remove("hide"), document.getElementById("todayCard")
			.style.zIndex = 1
			// console.log("卡片停止悬浮")
	})


function hideTodayCard() {
  // console.log('22342342')
  document.getElementById("todayCard").classList.add("hide");
}


// 百分比灵动球
function initThemeColor(){
	let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100) // 计算百分比

  // console.log(parseInt(result))
	if(result == 100){
		document.getElementById("nav-totop").classList.add("long");
		document.getElementById("percent").innerHTML = "返回顶部"
	}else {
		document.getElementById("nav-totop").classList.remove("long")
		document.getElementById("percent").innerHTML = result
	}
}
window.onscroll = initThemeColor;// 执行函数



function showConsole() {
	document.querySelector("#console").classList.add("show")
	if (window.screen.width < 768) {
		// 当前设备是移动端
		document.querySelector("html").classList.add("overflhid")
	}
	// console.log(document.querySelector("html").classList)
	// document.documentElement.style.overflowY = 'hidden'; 
	domscrooll() 
}
function hideConsole() {
	document.querySelector("#console").classList.remove("show")
	if (window.screen.width < 768) {
		// 当前设备是移动端
		document.querySelector("html").classList.remove("overflhid")
	}
	domscrooll() 
}


// 禁止鼠标滚动（不隐藏滚动条）
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
	e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}
var supportsPassive = false;
try {
	window.addEventListener("test", null, Object.defineProperty({}, "passive", {
			get: function () {
				supportsPassive = true;
			},
		})
	);
} catch (e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
function domscrooll() {
	// call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }
  // call this to Enable
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

	var domsrl = document.querySelector("#console");
	// console.log(domsrl.className);
	if(domsrl.className == "show") {
		// console.log('1');
		if (window.screen.width > 768) {
			// 当前设备是PC
			disableScroll();
		}
	}else {
		// console.log('2');
		enableScroll();
	}
}