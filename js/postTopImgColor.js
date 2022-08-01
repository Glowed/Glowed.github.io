topcolor()

// ******************************************** 文章页头图主色调提取 ***********************************
// 事件调用时候触发（如果页面刷新会有bug，所以需要下面在外面在获取一次）
function topcolor() {
  // 只有文章页才执行
  if (document.getElementById('body-wrap').className == 'post') {
    // 使用rgbaster脚本提取图片颜色（注：只支持https协议，所以本地效果）
    var imgStr = document.getElementById('post-cover');
    var img = imgStr.src;
    // const img = document.querySelector('#post-cover');
    // 或者
    // const img = 'https://fastly.jsdelivr.net/gh/realwds/cdn@master/blog-cover/excel.40e4likoexs0.png';
    RGBaster.colors(img, {
      // 调色板大小，就是提取的样本，越大越精确，同时性能越差
      paletteSize: 30,
      // 颜色排除
      exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ],
      success: function(payload) {
        document.body.style.setProperty('--heo-main-color', payload.dominant); // 提取后赋值给文章页需要的主色调
        document.body.style.setProperty('--heo-backSecondary-color', payload.secondary); // 次要色调
      }
    })
  }else {
    document.body.style.setProperty('--heo-main-color', 'rgb(66, 90, 239)'); // 赋值默认色调
  }
}