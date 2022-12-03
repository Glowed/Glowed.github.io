// 浏览器提示已经定义了，所以取消变量声明，备忘下
// let kk = {};
kk = {};

// 鼠标右击a标签的href信息存储
var strUrl;

// 阅读按钮信息存储
// var altStr = 1;

kk.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}

// 浏览器提示已经定义了，所以取消变量声明，备忘下
var rigmtrue = true;
var rmWidth = $('#rightMenu').width();
var rmHeight = $('#rightMenu').height();
// rmWidth = $('#rightMenu').width();
// rmHeight = $('#rightMenu').height();
// 重新定义尺寸
kk.reloadrmSize = function(){
  rmWidth = $('#rightMenu').width();
  rmHeight = $('#rightMenu').height();
}

// 监控鼠标右键点击
window.oncontextmenu = function(event){
    let pageX = event.clientX + 10;	//加10是为了防止显示时鼠标遮在菜单上
    let pageY = event.clientY;
    kk.reloadrmSize();


    //如果有文字选中，则显示 文字选中相关的菜单项
    $('.rightMenu-group.hide').hide();  /* 默认隐藏 */
    $('#menu-herf').hide();
    $('#menu-music').hide();

    if(musciPlayiS) {
      $('#menu-music-stop').show();
    }else {
      $('#menu-music-stop').hide();
    }

    $('#menu-other').show();
    $('#other-share').show();
    $('#ment-defl').show();


    // 选中文本右键点击
    if(document.getSelection().toString()){   /* 选中文本后 */
      $('#menu-text').show(); /* 显示 */

      $('#menu-other').hide();
      $('#other-share').hide();
    }


    // 右键点击 a 标签时
    function showelem() {
      var e = window.event;
      var targ = e.target;  /* 获取鼠标点击的元素 */
      var tname = targ.tagName;
      // console.log(tname);
      // 判断是否为 a 标签
      if (tname == "A") {
        if (targ.getAttribute('href') != null) {
          $('#menu-herf').show();
          $('#menu-other').hide();
          $('#other-share').hide();
          strUrl = targ.getAttribute('href');
          // console.log(strUrl);
        }
      }
    }
    showelem();


    //判断是否是音乐
    function nammuicc() {
      let pluginMode = false;
      if (event.target.nodeName == "YEOOE") {
        // console.log('这是一个音乐');
        pluginMode = true;
        $('#menu-music').show();
        $('#other-share').hide();
        $('#menu-other').hide();
        $('#ment-defl').hide();
      }

      var targ = event.target;  /* 获取鼠标点击的元素 */
      var tname = targ.tagName;   /* 获取鼠标点击的元素 标签名称 */
      var tClassname = targ.classList[0];   /* 获取鼠标点击的元素 class名称 */
      var tid = targ.id; /* 获取点击元素的 id名称 */
      // console.log('标签名：'+ tname, 'id名:' + tid, '类名：'+tClassname);
      if(tid == 'aplayer-played-id' || tid == 'aplayer-bar-id' || tid == 'aplayer-controller-id') {
        // console.log('这是一个音乐');
        pluginMode = true;
        $('#menu-music').show();
        $('#other-share').hide();
        $('#menu-other').hide();
        $('#ment-defl').hide();
      }
    }
    nammuicc();


    // 判断是否为文章外的其他页面，因为没有刷新右击菜单，所以只有这里重新给主色调重新赋值
    // var urlinfo = window.location.pathname;
    // var urlinfoname = document.getElementById("body-wrap").className;
    // urlinfoname = decodeURIComponent(urlinfoname);
    // // console.log(urlinfoname);
    // if (urlinfoname == 'page'){
    //   document.body.style.setProperty('--heo-main-color', 'rgb(66, 90, 239)'); // 赋值默认主色调
    // }
    // 判断是否为文章页
    // if (urlinfoname == 'post'){
    //   // 判断是否点击过阅读模式
    //   if (altStr == 1) {
    //     $('#menu-reading').show();
    //     $('#menu-exitreading').hide();
    //   }
    // }

    
    if(rigmtrue) {
      kk.reloadrmSize();
      rigmtrue = false
    }
    // 鼠标默认显示在鼠标右下方，当鼠标靠右或考下时，将菜单显示在鼠标左方\上方
    if(pageX + rmWidth > window.innerWidth){
        // pageX -= rmWidth;
        pageX -= rmWidth+10;
    }
    if(pageY + rmHeight > window.innerHeight){
        // pageY -= rmHeight;
        pageY -= pageY + rmHeight - window.innerHeight;
    }
    
    kk.showRightMenu(true, pageY, pageX);
    $('#rightmenu-mask').attr('style','display: flex');
    return false;
};

function RemoveRightMenu(){
    kk.showRightMenu(false);
    hideConsole();
    $('#rightmenu-mask').attr('style','display: none');
}

// 后退
$('#menu-backward').on('click',function(){window.history.back(); RemoveRightMenu();});
// 前进
$('#menu-forward').on('click',function(){window.history.forward(); RemoveRightMenu();});
// 刷新
$('#menu-refresh').on('click',function(){window.location.reload();});


// 切换模式
// kk.switchDarkMode = function(){
function rswitchDarkMode (){
    RemoveRightMenu();
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
};
// $('#menu-darkmode').on('click',kk.switchDarkMode);

// 回到首页
// $('#menu-home').on('click',function(){window.location.href = window.location.origin;});
// 回到顶部
$('#menu-top').on('click',function(){window.location.onclick = btf.scrollToDest(0, 500); RemoveRightMenu();});

// // 博客分类
// $('#rightMenu-categories').on('click',function(){
//   window.location.href = window.location.origin+'/categories/';
//   RemoveRightMenu();
// });
// // 博客标签
// $('#rightMenu-tags').on('click',function(){
//   window.location.href = window.location.origin+'/tags/';
//   RemoveRightMenu();
// });


//复制选中文字
kk.copySelect = function(){
  document.execCommand('Copy',false,null);
  RemoveRightMenu();
  //这里可以写点东西提示一下 已复制
}

//引用到评论
function reference() {
  // document.getElementById("rightMenu-reference").href = '#post-comment';
  var valueStr = window.getSelection();
  document.getElementById('wl-edit').value = '> ' + valueStr.toString().trim() + '\n>\n>\n';
  // console.log(valueStr);
  RemoveRightMenu();
  document.getElementById('wl-edit').focus();
  //这里可以写点东西提示一下 已复制
}

//站内搜索（未完成）
function rightMenuonsite() {
  // 方法一：自己写的方法，但是很麻烦，还有打开后一直数据加载的问题
  // document.querySelector('#local-search .search-dialog').style.display= 'block';
  // document.querySelector('#local-search .search-dialog').style.animation= '0.5s ease 0s 1 normal none running titleScale';
  // document.getElementById('search-mask').style.display= 'block';
  // document.getElementById('search-mask').style.animation= '0.5s ease 0s 1 normal none running to_show';

  // 方法二：直接调用原生事件响应事件，更方便快捷
  document.querySelector('#search-button .search').click();

  var onsiteStr = window.getSelection();
  // console.log(onsiteStr.toString());
  document.querySelector('.local-search-box .local-search-box--input').value = onsiteStr.toString().trim();
  // $('.local-search-box .local-search-box--input').val(onsiteStr).trigger('input');

  RemoveRightMenu();
}

// 百度搜索
function rightMenubaidu() {
  var onsiteStr = window.getSelection();
  var baiduStr = 'https://www.baidu.com/s'+'?'+'wd='+ onsiteStr.toString().trim();
  document.getElementById("rightMenu-baidu").href = baiduStr;
  RemoveRightMenu();
}


// 新窗口打开
$('#new-herf-window').on('click',function(){
  document.getElementById("new-herf-window").href = strUrl;
  RemoveRightMenu();
});
// 复制链接地址
$('#new-herf-address').on('click',function(){
  var inputUrl = document.createElement("input");
  // var body = document.body;
  document.body.appendChild(inputUrl);
  inputUrl.value = window.location.origin + strUrl;
  inputUrl.select();
  document.execCommand('Copy');
  document.body.removeChild(inputUrl);
  RemoveRightMenu();
  //这里可以写点东西提示一下 已复制
});

// 分享本页
$('#menu-share').on('click',function(){
  var input = document.createElement("input");
  // var body = document.body;
  document.body.appendChild(input);
  input.value = window.location.href;
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  RemoveRightMenu();
});


// // 阅读模式
// $('#menu-reading').on('click',function(){
//   RemoveRightMenu();
//   document.querySelector('#readmode').click();
//   document.querySelector('#post').style.width = '100%';
//   altStr = 2;
//   $('#menu-reading').hide();
//   $('#menu-exitreading').show();
// });
// // 退出阅读
// $('#menu-exitreading').on('click',function(){
//   RemoveRightMenu();
//   document.getElementsByClassName('fas fa-sign-out-alt exit-readmode')[0].click();
//   document.querySelector('#post').style.width = '80%';
//   altStr = 1;
//   $('#menu-reading').show();
//   $('#menu-exitreading').hide();
// });


// 点击右击菜单元素外面
document.addEventListener('click', handlerClick)  // 监听 document 点击事件
function handlerClick(event) {
  let isSelf = document.getElementById('rightMenu').contains(event.target)  // 这个是自己的区域
  if(!isSelf) {
    
    var bb = document.querySelector("#rightMenu");
    // console.log(getComputedStyle(bb,null)["display"]);
    // 判断右键菜单是否打开
    if(getComputedStyle(bb,null)["display"] != "none") {
      RemoveRightMenu();
    }
    // console.log('没在区域里面-->>>')
  }
}
// setTimeout(() => {  //  在不需要的时候移除监听事件
//   document.removeEventListener('click', handlerClick)
// },5000)


// 简体繁体切换
$('#menu-translate').on('click',function(){
  RemoveRightMenu();
  // 原本调用方案（会时灵时不灵）
  // translateInitialization();
  // 直接调用 butterfly 原生按钮方法
  document.querySelector('#translateLink').click();
});


/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
    const translate = GLOBAL_CONFIG.translate
    const snackbarData = GLOBAL_CONFIG.Snackbar
    const defaultEncoding = translate.defaultEncoding // 網站默認語言，1: 繁體中文, 2: 簡體中文
    const translateDelay = translate.translateDelay // 延遲時間,若不在前, 要設定延遲翻譯時間, 如100表示100ms,默認為0
    const msgToTraditionalChinese = translate.msgToTraditionalChinese // 此處可以更改為你想要顯示的文字
    const msgToSimplifiedChinese = translate.msgToSimplifiedChinese // 同上，但兩處均不建議更改
    let currentEncoding = defaultEncoding
    const targetEncodingCookie = 'translate-chn-cht'
    let targetEncoding =
    saveToLocal.get(targetEncodingCookie) === undefined
      ? defaultEncoding
      : Number(saveToLocal.get('translate-chn-cht'))
    let translateButtonObject
    const isSnackbar = GLOBAL_CONFIG.Snackbar !== undefined
  
    function translateText (txt) {
      if (txt === '' || txt == null) return ''
      if (currentEncoding === 1 && targetEncoding === 2) return Simplized(txt)
      else if (currentEncoding === 2 && targetEncoding === 1) { return Traditionalized(txt) } else return txt
    }
    function translateBody (fobj) {
      let objs
      if (typeof fobj === 'object') objs = fobj.childNodes
      else objs = document.body.childNodes
      for (let i = 0; i < objs.length; i++) {
        const obj = objs.item(i)
        if (
          '||BR|HR|'.indexOf('|' + obj.tagName + '|') > 0 ||
        obj === translateButtonObject
        ) { continue }
        if (obj.title !== '' && obj.title != null) { obj.title = translateText(obj.title) }
        if (obj.alt !== '' && obj.alt != null) obj.alt = translateText(obj.alt)
        if (obj.placeholder !== '' && obj.placeholder != null) obj.placeholder = translateText(obj.placeholder)
        if (
          obj.tagName === 'INPUT' &&
        obj.value !== '' &&
        obj.type !== 'text' &&
        obj.type !== 'hidden'
        ) { obj.value = translateText(obj.value) }
        if (obj.nodeType === 3) obj.data = translateText(obj.data)
        else translateBody(obj)
      }
    }
    function translatePage () {
      if (targetEncoding === 1) {
        currentEncoding = 1
        targetEncoding = 2
        saveToLocal.set(targetEncodingCookie, targetEncoding, 2)
        translateBody()
        if (isSnackbar) btf.snackbarShow(snackbarData.cht_to_chs)
      } else if (targetEncoding === 2) {
        currentEncoding = 2
        targetEncoding = 1
        saveToLocal.set(targetEncodingCookie, targetEncoding, 2)
        translateBody()
        if (isSnackbar) btf.snackbarShow(snackbarData.chs_to_cht)
      }
    }
    function JTPYStr () {
      return '万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾'
    }
    function FTPYStr () {
      return '萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽'
    }
    function Traditionalized (cc) {
      let str = ''
      const ss = JTPYStr()
      const tt = FTPYStr()
      for (let i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) !== -1) { str += tt.charAt(ss.indexOf(cc.charAt(i))) } else str += cc.charAt(i)
      }
      return str
    }
    function Simplized (cc) {
      let str = ''
      const ss = JTPYStr()
      const tt = FTPYStr()
      for (let i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) !== -1) { str += ss.charAt(tt.indexOf(cc.charAt(i))) } else str += cc.charAt(i)
      }
      return str
    }
    function translateInitialization () {
      translateButtonObject = document.getElementById('menu-translate')
      if (translateButtonObject) {
        if (currentEncoding !== targetEncoding) {
          setTimeout(translateBody, translateDelay)
        }
        translateButtonObject.addEventListener('click', translatePage, false)
      }
    }
    translateInitialization()
    document.addEventListener('pjax:complete', translateInitialization)
  })









// ***************************** 音乐灵动球事件 ****************************
$('#menu-music-toggle').on('click', musicPlay)
$('#menu-music-stop').on('click', musicStop)
$('#menu-music-back').on('click', musicSkipBack)
$('#menu-music-forward').on('click', musicSkipForward)
$('#menu-music-copyMusicName').on('click', musicGetName)

// 记录是否点击播放音乐
var musciPlayiS = false;

// 监控鼠标悬停
document.onmouseover = function(event) {
  var targ = event.target;  /* 获取鼠标点击的元素 */
  var tid = targ.id;  /* 获取点击元素的 id名称 */
  var tname = targ.tagName;   /* 获取鼠标点击的元素 标签名称 */
  var tClassname = targ.classList[0];   /* 获取鼠标点击的元素 class名称 */
  // console.log('标签名：'+tname,'id名: '+tid, '类名：'+tClassname);
  if(tid == 'aplayermusic' || tid == 'aplayer-controller-id') {
    // console.log('鼠标进入');
    // 延迟执行，只执行一次
    var overtime = setTimeout(() => {
      document.querySelector("#nav-music .aplayer-controller").removeAttribute("id");
    }, 800);
    // 鼠标离开
    targ.onmouseleave = function(event) {
      // console.log('鼠标移出');
      // 鼠标移出后清除计时
      clearTimeout(overtime);
      document.querySelector("#nav-music .aplayer-controller").setAttribute("id","aplayer-controller-id");
    }
  }
}

// 监控鼠标左键（音乐推荐页bug处理）
var clknum = 1; /* 点击计数 */
document.onmousedown = function(event) {
  // var event = event || window.event//兼容ie低版本的
  if (event.button == 0) {
    //鼠标左键 
    var targ = event.target;  /* 获取鼠标点击的元素 */
    var tname = targ.tagName;   /* 获取鼠标点击的元素 标签名称 */
    var tClassname = targ.classList[0];   /* 获取鼠标点击的元素 class名称 */
    // console.log('标签名：'+tname, 'id名: '+targ.id, '类名：'+tClassname);
    // 点击标签为其他页音乐时候执行
    if(tClassname == 'aplayer-pic' || tClassname == 'aplayer-button' || tname == 'path' || tname == 'svg') {
      if(musciPlayiS) {
        musicStop();
      }
    }

    // 判断是双击还是单击
    // console.log(document.querySelector('#aplayermusic').id)
    // console.log('id名：'+targ.id, '类名：'+tClassname)
    var tid = targ.id;  /* 获取点击元素的 id名称 */
    if(clknum == 2) {
      // console.log('双击');
      if(tid == 'aplayer-bar-id' || tid == 'aplayer-played-id' || tid == 'aplayer-controller-id') {
        if(musciPlayiS) {
          musicStop();
        }
      }
      clknum = 1;
    }else {
      // console.log('单击', clknum);
      // console.log('标签名：'+tname, 'id名: '+targ.id, '类名：'+tClassname);
      if(tid == 'aplayer-controller-id') {
        if(musciPlayiS) {
          musicStop();
        }
      }
      clknum++;
    }
    // 延迟执行，只执行一次
    setTimeout(() => {
      clknum = 1;
      // console.log('超时');
    }, 200);

    if(tid == 'aplayer-bar-id' || tid == 'aplayer-played-id' || tid == 'aplayer-controller-id') {
      document.querySelector("#nav-music").classList.add("togglehove");
      targ.onmouseup = function(e) {
        // console.log('鼠标释放');
        document.querySelector("#nav-music").classList.remove("togglehove");
      }
    }
    // console.log("您点击了鼠标左键!");
  } 
  // else if (event.button == 2) {
  //   //鼠标右键 
  //   console.log("您点击了鼠标右键!");
  // } else if (event.button == 1) {
  //   //鼠标中键 
  //   console.log("您点击了鼠标中键!");
  // } else if (event.button == 3) {
  //   //鼠标侧键3 
  //   console.log("您点击了鼠标侧键(后退)");
  // } else if (event.button == 4) {
  //   //鼠标侧键4 
  //   console.log("您点击了鼠标侧键(前进)");
  // }
}
// 判断歌曲是否有歌词（顺便根据歌曲名称长度和演唱者名字长度判断是否显示演唱作者）
function musiclrctrue() {
  // console.log(document.querySelector('#aplayermusic').getElementsByClassName('aplayer-lrc-contents')[0].getElementsByClassName('aplayer-lrc-current').length);

  // 切歌后不会马上更新歌词，需要延迟执行
  // setTimeout(function() {}, 100)    # 延迟100毫秒后执行，只执行一次
  // 每100毫秒执行一次（循环执行）
  if(musciPlayiS) {
    window.lrcs = window.setInterval(function() {
      // 歌曲名称标题长度判断
      // console.log(document.querySelector('#aplayermusic').getElementsByClassName('aplayer-author')[0].innerHTML.length);
      var title = document.querySelector('#aplayermusic').getElementsByClassName('aplayer-title')[0].innerHTML.length;
      var author = document.querySelector('#aplayermusic').getElementsByClassName('aplayer-author')[0].innerHTML.length;
      if (title > 5 || author >= 10) {
        document.querySelector("#nav-music").classList.add("titleleng");
      }else {
        document.querySelector("#nav-music").classList.remove("titleleng");
      }

      // 歌词判断
      var lrcleng = document.querySelector('#aplayermusic').getElementsByClassName('aplayer-lrc-contents')[0].getElementsByClassName('aplayer-lrc-current').length;
      if(lrcleng == 0) {
        // console.log('没有歌词');
        document.querySelector("#nav-music").classList.add("lrcnull");
        // console.log('执行中');
      }else {
        // console.log('有歌词');
        document.querySelector("#nav-music").classList.remove("lrcnull");
        // console.log('执行中');
      }
    }, 100);
  }else {
    window.clearInterval(lrcs);
  }
}

// 判断遮罩播放点击状态
function musicToggleBtn() {
  var box = document.querySelector('#nav-music-hoverTips');
  box.onmousedown = function(e) {
    // console.log('鼠标按下');
    document.querySelector("#nav-music").classList.add("togglehove");
  }
  box.onmouseup = function(e) {
    // console.log('鼠标释放');
    document.querySelector("#nav-music").classList.remove("togglehove");
  }
  // box.onmousemove = function(e) {
  //   console.log('鼠标移动');
  // }
  // box.onclick = function(e) {
  //   console.log('点击');
  // }
}
musicToggleBtn();
// 遮罩播放事件
function musicToggle() {
  // console.log('ssss');
  if(musciPlayiS) {
    musicStop();
  }else {
    musicPlay();
  }
}

//播放音乐
function musicPlay() {
  musciPlayiS = true;
  $('#menu-music-toggle').hide();
  RemoveRightMenu();
  musiclrctrue();
  document.querySelector('#aplayermusic').getElementsByClassName('aplayer-play')[0].click();
  document.querySelector('#aplayermusic').classList.remove('aplayer-narrow');

  document.querySelector("#nav-music").classList.add("playing");
  
  document.querySelector("#nav-music .aplayer-controller").setAttribute("id","aplayer-controller-id");
  document.querySelector("#nav-music .aplayer-bar").setAttribute("id","aplayer-bar-id");
  document.querySelector("#nav-music .aplayer-played").setAttribute("id","aplayer-played-id");
}

//暂停音乐
function musicStop() {
  musciPlayiS = false;
  $('#menu-music-toggle').show();
  RemoveRightMenu();
  musiclrctrue();
  document.querySelector('#aplayermusic').getElementsByClassName('aplayer-pause')[0].click();
  document.querySelector('#aplayermusic').classList.add('aplayer-narrow');

  document.querySelector("#nav-music").classList.remove("playing");
  document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";

  document.querySelector("#nav-music .aplayer-controller").removeAttribute("id");
  document.querySelector("#nav-music .aplayer-bar").removeAttribute("id");
  document.querySelector("#nav-music .aplayer-played").removeAttribute("id");
}

//音乐上一曲
function musicSkipBack() {
  RemoveRightMenu();
  // musiclrctrue();
  document.querySelector('#aplayermusic').getElementsByClassName('aplayer-icon-back')[0].click();
}

//音乐下一曲
function musicSkipForward() {
  RemoveRightMenu();
  // musiclrctrue();
  document.querySelector('#aplayermusic').getElementsByClassName('aplayer-icon-forward')[0].click();
}

//获取音乐中的名称
function musicGetName() {
  RemoveRightMenu();
  var x = $('.aplayer-title')
  // var x = document.getElementsByClassName('txt');
  // for (var i = x.length - 1; i >= 0; i--) {
  // console.log(x[i].innerText)
  // }
  var arr = []
  for (var i = x.length - 1; i >= 0; i--) {
    arr[i] = x[i].innerText
    // console.log(x[i].innerText)

    var input = document.createElement("input");
    document.body.appendChild(input);
    input.value = x[i].innerText;
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    RemoveRightMenu();
  }
  return arr[0]
}