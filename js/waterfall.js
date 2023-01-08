// ********************************** 即刻短文瀑布流实现 *******************************

// var yeoe = {
// reflashEssayWaterFall: function () {
//   document.querySelector("#waterfall") &&
//     setTimeout(function () {
//       waterfall("#waterfall");
//       document.getElementById("waterfall").classList.add("show");
//     }, 500);
// }}
// yeoe.reflashEssayWaterFall();


waterfall(document.getElementById('waterfall'))
function waterfall(a) {
  // 判断是否在即刻短文页，只在即刻短文页面执行
  var urlinfo = window.location.pathname;
  if(urlinfo == "/essay/") {
    function b(a, b) {
      var c = window.getComputedStyle(b);
      return parseFloat(c["margin" + a]) || 0
    }
  
    function c(a) {
      return a + "px"
    }
  
    function d(a) {
      return parseFloat(a.style.top)
    }
  
    function e(a) {
      return parseFloat(a.style.left)
    }
  
    function f(a) {
      return a.clientWidth
    }
  
    function g(a) {
      return a.clientHeight
    }
  
    function h(a) {
      return d(a) + g(a) + b("Bottom", a)
    }
  
    function i(a) {
      return e(a) + f(a) + b("Right", a)
    }
  
    function j(a) {
      a = a.sort(function(a, b) {
        return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a)
      })
    }
  
    function k(b) {
      f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a))
    }
    "string" == typeof a && (a = document.querySelector(a));
    var l = [].map.call(a.children, function(a) {
      return a.style.position = "absolute", a
    });
    a.style.position = "relative";
    var m = [];
    l.length && (l[0].style.top = "0px", l[0].style.left = c(b("Left", l[0])), m.push(l[0]));
    for (var n = 1; n < l.length; n++) {
      var o = l[n - 1],
        p = l[n],
        q = i(o) + f(p) <= f(a);
      if (!q) break;
      p.style.top = o.style.top, p.style.left = c(i(o) + b("Left", p)), m.push(p)
    }
    for (; n < l.length; n++) {
      j(m);
      var p = l[n],
        r = m.pop();
      p.style.top = c(h(r) + b("Top", p)), p.style.left = c(e(r)), m.push(p)
    }
    j(m);
    var s = m[0];
    a.style.height = c(h(s) + b("Bottom", s));
    var t = f(a);
    window.addEventListener ? window.addEventListener("resize", k) : document.body.onresize = k
  }
}


// 首页即刻短文滚动函数
if (document.querySelector('#bber-talk')) {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
  });
}