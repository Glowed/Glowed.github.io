//*********************************** */ 公共 js 方法 ********************************

// 判断鼠标上下滚动（只在鱼塘页执行）
var moveWheel1 = true;
var urlinfo = window.location.pathname;
var scrollTop;
function scroll() {
    // var classNamess = document.getElementById('page-header').className;
    function moveWheel(e){
      var e = e || window.event;
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(moveWheel1==true){
        if(e.wheelDelta){
          if(e.wheelDelta < 0 && urlinfo == "/fcircle/"){
            // console.log('向下',scrollTop, e.wheelDelta);
            document.getElementById('page-header').className = 'not-home-page nav-fixed';
          }else if(scrollTop >=0 && scrollTop <= 100 && urlinfo == "/fcircle/") {
            // console.log('顶部',scrollTop, e.wheelDelta);
            document.getElementById('page-header').className = 'not-home-page';
          }else if(e.wheelDelta > 0 && urlinfo == "/fcircle/") {
            // console.log('向上',scrollTop, e.wheelDelta);
            document.getElementById('page-header').className = 'not-home-page nav-fixed nav-visible';
          }
        }
      }
    }
    document.addEventListener('wheel', moveWheel, false);
}
scroll();

$('#nav-totop').on('click',function(){btntop()});
function btntop() {
  if(urlinfo == "/fcircle/") {
    // console.log('sssssssssssss');
    document.getElementById('page-header').className = 'not-home-page';
  }
}




// 新代码，利用创建时间来判断
// 确保其他页面第一个不添加
if (location.pathname == '/') newPost();
// 最新文章
function newPost() {
    let ls = document.querySelectorAll('.recent-post-info')
    // 先让时间和索引值都等于第一个的
    let time = new Date(ls[0].querySelector('#recent-posts .post-meta-date').getElementsByTagName('time')[0].getAttribute('datetime')).getTime();
    let index = 0
    // 遍历数组，如果有时间比time大的则替换
    ls.forEach((i, num) => {
        let t = new Date(i.querySelector('#recent-posts .post-meta-date').getElementsByTagName('time')[0].getAttribute('datetime')).getTime()
        if (t > time) {
            time = t;
            index = num
        }
    })
    
    var style = document.createElement("span"); //新建 style 标签 
    style.innerHTML = "最新文章"; //style 添加属性
    style.className = "lastestpost";  //style 添加属性

    if(ls[index].querySelector('.article-meta.newpost')) {
      style.className = "meta-lastestpost";  //style 添加属性
      var first = ls[index].querySelector('.article-meta').firstChild; // 获取.article-meta标签的第一个子元素
      ls[index].querySelector('.article-meta').insertBefore(style, first); 
    }else {
      var first = ls[index].firstChild; // 获取.recent-post-info标签的第一个子元素
      ls[index].insertBefore(style, first); // 在.recent-post-info标签的第一个子元素，前插入style标签
    }
}



// butterfly 弹出提示框
// function sss() {
//   btf.snackbarShow('复制成功，复制和转载请标注本文地址');
// }
// sss()



// 友链页随机访问友链
function toRandomFlink() {
  var linkleng = document.getElementById('article-container').getElementsByClassName('flink-list-item').length;
  var linklist = document.getElementById('article-container').getElementsByClassName('flink-list-item');
  var numindex = linklist[Math.floor(Math.random() * linkleng)];
  var linkurl = numindex.getElementsByClassName('cf-friends-link')[0].href;
  document.getElementsByClassName("secondary")[0].href = linkurl;
  // console.log(linkurl);
  // console.log(linklist[i].getElementsByClassName('cf-friends-link')[0].href)
}




// 友链页申请友链事件
function addFriendLink() {
  var input = document.getElementsByClassName('wl-editor')[0];
  let evt = document.createEvent('HTMLEvents');
  evt.initEvent('input', true, true);
  input.value = '昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n';
  input.dispatchEvent(evt);
  document.getElementById('wl-edit').focus();
  input.focus();
  input.setSelectionRange(-1, -1);
}



//滚动到指定id
function scrollTocomment(id) {
  var domTop = document.querySelector(id).offsetTop;
  window.scrollTo(0,domTop - 80);
}




// 清空控制台信息
function myFunction() {
  console.clear();
}
myFunction();