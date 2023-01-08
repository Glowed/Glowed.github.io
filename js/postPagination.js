var length = 1;

var postname = document.getElementById("body-wrap").className;
postname = decodeURIComponent(postname);

// 根据滚动情况判断是否显示 上一篇 或者 下一篇
document.addEventListener('scroll',function(){
  // 判断当前设备是否为PC
  // if (window.screen.width > 800) {

  // }

  // 判断是否为文章页面
  if (postname == 'post' && length != 0){
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


// 判断翻页是否有内容
nexpostrig();
function nexpostrig() {
  // 判断是否为文章页面
  if (postname == 'post'){
    var nexpost = document.getElementById('pagination');
    var numlength = nexpost.getElementsByTagName("div").length;
    length = numlength;
    if (numlength == 0) {
      // 没有内容
      nexpost.parentNode.removeChild(nexpost);
    }
  }
}