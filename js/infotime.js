 //**************************** 友好地显示时间
function timeago() { 
  // 判断是否为首页，只在首页执行
  var urlinfoname = document.getElementById("body-wrap").className;
  urlinfoname = decodeURIComponent(urlinfoname);
  // console.log(urlinfoname);
  if (urlinfoname == 'page'){
    // var date1 = '2022/05/01 00:00:00'; // 获取文章时间
    var pallArr = document.getElementsByTagName("time"); // 获取首页的时间标签
    var date2 = new Date(); // 获取当前时间

    // var date3 = date2.getTime() - new Date(pallArr[0].dateTime).getTime(); // 计算时间差
    // var days = Math.floor(date3/(24*3600*1000)); // 计算过去了多少天
    // console.log(days);


    // 单位换算
    var min = 60 * 1000;
    var hour = min * 60;
    var day = hour * 24;
    var week = day * 7;
    var month =  week*4;
    var year = month*12;

    // 计算发布时间距离当前时间的周、天、时、分
    // var  exceedyear = Math.floor(date3/year); // 年
    // var exceedmonth = Math.floor(date3/month); // 月
    // var exceedWeek = Math.floor(date3/week); // 周
    // var exceedDay = Math.floor(date3/day); // 天
    // var exceedHour = Math.floor(date3/hour); // 时
    // var exceedMin = Math.floor(date3/min); // 分

    var date3 = 0;
    var exceedmonth = 0;
    var exceedDay = 0;
    var exceedHour = 0;
    var exceedMin = 0;

    // 存储重新自定义日期显示样式
    var exceeYearStr = " ";
    var exceeMonthStr = " "; 
    var exceeDayStr = " ";
    var dateStr = " ";
    var regStr = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;

    for(var i = 0; i < pallArr.length; i++){
      date3 = date2.getTime() - new Date(pallArr[i].dateTime).getTime(); // 计算时间差
      exceedmonth = Math.floor(date3/month);
      exceedDay = Math.floor(date3/day); 
      exceedHour = Math.floor(date3/hour);
      exceedMin = Math.floor(date3/min);

      // pallArr[i].innerHTML = exceedmonth + "月前";
      // 处理字符串（修改显示样式）
      exceeYearStr = pallArr[i].innerHTML.substring(0,4);

      // 判断是否在即刻短文页，只在即刻短文页面执行
      var urlinfo = window.location.pathname;
      if(urlinfo == "/essay/") {
        dateStr = pallArr[i].innerHTML.substring(0,10).match(regStr);
      }else {
        dateStr = pallArr[i].innerHTML.match(regStr);
      }

      // console.log(dateStr);
      // 先判断dateStr是否为null
      if(dateStr != null) {
        exceeMonthStr = dateStr[2];
        exceeDayStr = dateStr[3];
        // 先判断下是不是现在年份
        if(exceeYearStr == date2.getFullYear().toString()) {
          // console.log(exceedmonth);
          if(exceedmonth <= 12 && exceedmonth >= 0) {
            if(exceeMonthStr[0] == '0') {
              exceeMonthStr = exceeMonthStr.slice(1);
            }
            if(exceeDayStr[0] == '0') {
              exceeDayStr = exceeDayStr.slice(1);
            }
            pallArr[i].innerHTML = exceeMonthStr + "/" + exceeDayStr;
            // console.log(exceeMonthStr, exceeDayStr, exceeYearStr, date2.getFullYear().toString());
          }
          if(exceedDay > 7) {
            if(exceeMonthStr[0] == '0') {
              exceeMonthStr = exceeMonthStr.slice(1);
            }
            if(exceeDayStr[0] == '0') {
              exceeDayStr = exceeDayStr.slice(1);
            }
            pallArr[i].innerHTML = exceeMonthStr + "/" + exceeDayStr;
            // console.log(exceeMonthStr, exceeDayStr, exceeYearStr, date2.getFullYear().toString());
          }else if(exceedDay < 7 && exceedDay && exceedDay > 0) {
            pallArr[i].innerHTML = exceedDay + "天前";
          }else if(exceedHour < 24 && exceedHour > 0) {
            pallArr[i].innerHTML = exceedHour + "小时前";
          }else if(exceedDay < 0) {
            pallArr[i].innerHTML = "今天";
          }else {
            if(exceedMin <= 10) {
              pallArr[i].innerHTML = "刚刚";
            }
            if(exceedMin > 10 && exceedMin < 60) {
              pallArr[i].innerHTML = exceedMin + "分钟前";
            }
          }
        }
      }
      
      // console.log(exceedDay);
    }
  }
} 

//  *********** 站长信息
function webmasterTime() {
  var mastTime = document.getElementById("author-info__sayhi");
  // console.log(mastTime.innerHTML);

  if(mastTime) {
    now = new Date(),hour = now.getHours() 
    if(hour < 6){
      // document.write("夜深了，快休息！");
      // console.log("夜深了，快休息！");
      mastTime.innerHTML = "👋 夜深了，快去休息！";
    }else if (hour < 9){
      // document.write("早上好！");
      // console.log("早上好！");
      mastTime.innerHTML = "👋 早上好！我是";
    }else if (hour < 12){
      // document.write("上午好！");
      // console.log("上午好！");
      mastTime.innerHTML = "👋 上午好！我是";
    }else if (hour < 14){
      // document.write("中午好！");
      // console.log("中午好！");
      mastTime.innerHTML = "👋 中午好！我是";
    }else if (hour < 17){
      // document.write("下午好！");
      // console.log("下午好！");
      mastTime.innerHTML = "👋 下午好！我是";
    }else if (hour < 19){
      // document.write("傍晚好！");
      // console.log("傍晚好！");
      mastTime.innerHTML = "👋 傍晚好！我是";
    }else if (hour < 22){
      // document.write("晚上好！");
      // console.log("晚上好！");
      mastTime.innerHTML = "👋 晚上好！我是";
    }else {
      // document.write("夜里好！");
      // console.log("夜里好！");
      mastTime.innerHTML = "👋 夜里好！我是";
    } 
  }
}


timeago();
webmasterTime();