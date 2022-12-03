
//***************************************************** */ 导航栏添加黑夜白天按钮后需要的文件
function switchDarkMode() { // Switch Between Light And Dark Mode
  var nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  if (nowMode === 'light') {
    activateDarkMode()
    saveToLocal.set('theme', 'dark', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
  } else {
    activateLightMode()
    saveToLocal.set('theme', 'light', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme()
  typeof FB === 'object' && window.loadFBComment()
  window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
}

// *************************************************** 导航返回顶部按钮方法
// 返回顶部按钮
function scrollToTop() {
  btf.scrollToDest(0, 500);
  
  var urlinfo = window.location.pathname;
  if(urlinfo == "/fcircle/") {
    // console.log('sssssssssssss');
    document.getElementById('page-header').className = 'not-home-page';
  }
}
// 根据滚动条判断顶部header选择引用样式（优化）
window.onload = function() {
  var classNamess = document.getElementById('page-header').className;
  if (classNamess == 'full_page') {
    if (document.documentElement.scrollTop > 0) {
      document.getElementById('page-header').className = 'full_page nav-fixed';
    }
  } else if (classNamess == 'post-bg') {
    if (document.documentElement.scrollTop > 0) {
      document.getElementById('page-header').className = 'post-bg nav-fixed';
    }
  } else if (classNamess == 'not-home-page') {
    if (document.documentElement.scrollTop > 0) {
      document.getElementById('page-header').className = 'not-home-page nav-fixed';
    }
  }
}


// 获取css里面某个颜色值
// var mode = getComputedStyle(document.documentElement).getPropertyValue('--heo-vip').trim();
// console.log(mode);
// 通过js改变css属性值
// document.body.style.setProperty('--heo-white', '#bf539f');




// 跳转按钮
function textbtn() {
  // 获取页数数组取最后一个页数信息，并转换为number数字类型
  var pall = document.querySelectorAll(".page-number");
  var pallmax = pall[pall.length - 1].innerHTML;
  // console.log(pall[pall.length - 1].innerHTML);
  var pallmaxnum = Number(pallmax);

  // 获取输入的内容，并转换为number数字类型
  var text = document.getElementById("textnumer");
  var textnum = Number(text.value);
  
  // 判断是否为整数数字
  if (textnum != '' && !isNaN(textnum) && textnum % 1 === 0) {
    // 判断是否为第一页
    if (textnum == 1) {
      document.getElementById("textbtn").href = '/';
    } else if (textnum > pallmaxnum) {
      var url = "/page/" + pallmaxnum + "/#anchor";
      document.getElementById("textbtn").href = url;
    } else {
      var url = "/page/" + text.value + "/#anchor";
      document.getElementById("textbtn").href = url;
      // console.log(textnum);
    }
  }
}


// 首页上的点击文章信息事件 (post-ui.pug)
// function myBtncc() {
//   var e = window.event;
//   var targ = e.target;  /* 获取鼠标点击的元素 */
//   var thref = targ.getAttribute('href');
//   // console.log(tname);
//   var pjax = new Pjax();
//   pjax.loadUrl(window.location.origin+thref);
//   // console.log(window.location.origin+thref);
// }


// 关于页 追求栏 滚动效果
function aboutAutoScroll() {
  // 判断是否在关于页，只在关于页面执行
  var urlinfo = window.location.pathname;
  // var urlinfoname = document.getElementById("body-wrap").className;
  // urlinfoname = decodeURIComponent(urlinfoname);
  console.log(urlinfo);
  if(urlinfo == "/about/" || urlinfo == "/music/") {
    var pursuitInterval = null;
    pursuitInterval = setInterval(function () {
      var show = document.querySelector('span[data-show]')
      var next = show.nextElementSibling || document.querySelector('.first-tips')
      var up = document.querySelector('span[data-up]')
      
      if (up) {
        up.removeAttribute('data-up')
      }
      
      show.removeAttribute('data-show')
      show.setAttribute('data-up', '')
      
      next.setAttribute('data-show', '')
    }, 2000)
    
    document.addEventListener('pjax:send', function(){
    clearInterval(pursuitInterval)});
  }
}
aboutAutoScroll();




// 鱼塘页面朋友圈
// var numsss = 0;
// function fcicleromove() {
//   // 判断是否在鱼塘页，只在鱼塘页面执行
//   var urlinfo = window.location.pathname;
//   if(urlinfo == "/fcircle/") {
//     // 每隔100毫秒执行一次
//     var s = window.setInterval(function() {
//       // 去掉管理面板
//       if (document.getElementById('panel-btn')) {
//         document.getElementById('panel-btn').remove();
//       }

//       // 更改排序名称
//       if (document.getElementById('app').getElementsByClassName('cf-change-now')) {
//         // console.log(document.getElementById('cf-change').getElementsByTagName('span')[1]);
//         document.getElementById('cf-change').getElementsByTagName('span')[0].innerHTML= '发布排序';
//         document.getElementById('cf-change').getElementsByTagName('span')[1].innerHTML= '更新排序';
//       }

//       // 更改订阅、活跃、日志名称
//       if (document.getElementById('app').getElementsByClassName('cf-label')) {
//         // console.log(document.getElementById('app').getElementsByClassName('cf-label').length);
//         document.getElementById('app').getElementsByClassName('cf-label')[0].innerHTML= '订阅友链';
//         document.getElementById('app').getElementsByClassName('cf-label')[1].innerHTML= '活跃友链';
//         document.getElementById('app').getElementsByClassName('cf-label')[2].innerHTML= '获取日志';
//       }

//       // 添加标题 (鱼塘)
//       if (document.getElementById('cf-change') && numsss == 0) {
//         numsss = 1;
//         // 创建一个元素
//         var h2s = document.createElement('h2');
//         h2s.className= 'cf-change-htit';
//         h2s.innerHTML= '🐟 鱼塘';
//         h2s.style.position= 'absolute';
//         h2s.style.left= '0px';
//         h2s.style.margin= '0px';
//         h2s.style.fontSize= '1.5rem';
//         // 获取标签
//         var divs = document.getElementById('cf-change');
//         var spans = document.getElementsByClassName('cf-change-now')[0];
//         // 添加标签(在 divs 标签里面，spans 标签之前添加)
//         divs.insertBefore(h2s, spans);
//       }
//     }, 100);
//     // 执行5000毫米后停止执行
//     setTimeout(function() {
//       window.clearInterval(s);
//     }, 5000);
//   }
// }
// fcicleromove();