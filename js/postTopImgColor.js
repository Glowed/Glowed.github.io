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
        // 提取后赋值给文章页需要的色调
        var value = payload.dominant;   // 主色调：payload.dominant
        var svalue = payload.secondary; // 次要色调：payload.secondary
        // 先判断是否为亮色
        if(getContrastColor(value) == "light") {
          value = LightenDarkenColor(colorHex(payload.dominant), -40);
          svalue = LightenDarkenColor(colorHex(payload.dominant), -70);
        }

        // 主色调
        document.body.style.setProperty('--heo-main-color', value); 
        document.body.style.setProperty('--heo-main', value);
        document.styleSheets[0].addRule(':root', '--heo-main-op:' + value + '23!important');
        document.styleSheets[0].addRule(':root', '--heo-main-op-deep:' + value + 'dd!important');
        // document.body.style.setProperty('--heo-shadow-theme', '0 8px 12px -10px ' + payload.dominant);

        // 次要色调
        document.body.style.setProperty('--heo-backnav-color', svalue);
        // document.body.style.setProperty('--heo-backSecondary-color', payload.secondary);
      }
    })
  }else {
    // 赋值默认色调
    document.body.style.setProperty('--heo-main-color', 'rgb(66, 90, 239)'); 
    document.body.style.setProperty('--heo-main', 'var(--heo-theme)');
    document.body.style.setProperty('--heo-backnav-color', '#031764,#150136,#67044d');
    document.styleSheets[0].addRule(':root', '--heo-main-op: var(--heo-theme-op)!important');
    document.styleSheets[0].addRule(':root', '--heo-main-op-deep:var(--heo-theme-op-deep)!important');
    // document.body.style.setProperty('--heo-shadow-theme', '0 8px 12px -3px var(--heo-theme-op)');
  }
}


// 判断是否为亮色
function getContrastColor(topcolor) {
  var colorrgb = colorRgb(topcolor);
  var colorrs = colorrgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  var red = colorrs[1];
  var green = colorrs[2];
  var blue = colorrs[3];
  var brightness;
  brightness = (red * 299) + (green * 587) + (blue * 114);
  brightness = brightness / 255000;
  if(brightness >= 0.5) {
    // console.log('light');
    return 'light';
  }else {
    // console.log('dark');
    return 'dark';
  }
}
//RGB颜色转化为16进制颜色
function colorHex(str) {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var that = str;
  if (/^(rgb|RGB)/.test(that)) {
    var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = that;
    }
    return strHex;
  } else if (reg.test(that)) {
    var aNum = that.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return that;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var i = 0; i < aNum.length; i += 1) {
        numHex += (aNum[i] + aNum[i]);
      }
      return numHex;
    }
  } else {
    return that;
  }   
}
//16进制颜色转化为RGB颜色
function colorRgb(str) {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var sColor = str.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return "rgb(" + sColorChange.join(",") + ")";
  } else {
    return sColor;
  }                   
}
//变暗变亮主方法
function LightenDarkenColor (col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  
  return (usePound ? "#" : "") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
}