
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