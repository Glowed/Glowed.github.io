var urlinfo = window.location.pathname;
urlinfo = decodeURIComponent(urlinfo)

//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (urlinfo == '/'){
        //首页离开当前页面时标签显示内容（排除首页）
        document.title = OriginTitile;
    }else if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});


// hover伪类在移动端跳转需二次点击的解决方案
document.body.addEventListener('touchstart', function(){ });


// 只给首页第一页第一篇文章添加额外类名
// function homeClass() {
//     var urlinfo = window.location.pathname;
//     urlinfo = decodeURIComponent(urlinfo);
//     //判断是否是首页
//     if (urlinfo == '/'){
//       document.getElementsByClassName('recent-post-item')[0].classList.add('lastestpost-item');
//     }
// }
// homeClass()