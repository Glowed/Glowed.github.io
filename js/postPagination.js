// 根据滚动情况判断是否显示 上一篇 或者 下一篇
document.addEventListener('scroll',function(){
  // 判断当前设备是否为PC
  // if (window.screen.width > 800) {

  // }

  // 判断是否为文章页面
  var postname = document.getElementById("body-wrap").className;
  postname = decodeURIComponent(postname);
  if (postname == 'post'){
    //滚动条高度+视窗高度 = 可见区域底部高度
    var visibleBottom = window.scrollY + document.documentElement.clientHeight;
    //可见区域顶部高度
    var visibleTop = window.scrollY;
    // 获取翻页按钮容器
    var pagination = document.getElementById('pagination');
    // 获取位置监测容器，此处采用自定义工具区
    var eventlistner = document.getElementById('post-tools');
    if (eventlistner&&pagination){
      var centerY = eventlistner.offsetTop+(eventlistner.offsetHeight/2);
      if(centerY>visibleTop&&centerY<visibleBottom){
        // pagination.style.display = 'flex';
        pagination.style.bottom = '0px';
      }else{
        // pagination.style.display = 'none';
        pagination.style.bottom = '-100px';
      }
    }

    var footerwrap = document.getElementById('footer');
    var centerB = footerwrap.offsetTop+(footerwrap.offsetHeight/2);
    if(centerB>visibleTop&&centerB<visibleBottom) {
      pagination.style.bottom = '-100px';
    }
  }
})