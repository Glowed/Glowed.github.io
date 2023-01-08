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
  var input = document.getElementsByClassName('el-textarea__inner')[0];
  let evt = document.createEvent('HTMLEvents');
  evt.initEvent('input', true, true);
  input.value = '昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n';
  input.dispatchEvent(evt);
  document.getElementById('post-comment').focus();
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









// ******************************* 过年烟花动画 *************************
// 动画1（很占用内存，弃用）
// function fireworks() {
//   if(urlinfo){
//     // fun options!
//     var PARTICLES_PER_FIREWORK = 150; // 100 - 400 or try 1000
//     var FIREWORK_CHANCE = 0.02; // percentage, set to 0 and click instead
//     var BASE_PARTICLE_SPEED = 0.6; // between 0-4, controls the size of the overall fireworks
//     var FIREWORK_LIFESPAN = 600; // ms
//     var PARTICLE_INITIAL_SPEED = 4.5; // 2-8

//     // not so fun options =\
//     var GRAVITY = 9.8;


//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');

//     let particles = [];
//     let disableAutoFireworks = false;
//     let resetDisable = 0;

//     let loop = () => {

//       if (!disableAutoFireworks && Math.random() < FIREWORK_CHANCE) {
//         createFirework();
//       }

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle, i) => {
//         particle.animate();
//         particle.render();
//         if (particle.y > canvas.height ||
//         particle.x < 0 ||
//         particle.x > canvas.width ||
//         particle.alpha <= 0)
//         {
//           particles.splice(i, 1);
//         }
//       });

//       requestAnimationFrame(loop);

//     };

//     let createFirework = (
//     x = Math.random() * canvas.width,
//     y = Math.random() * canvas.height) =>
//     {

//       let speed = Math.random() * 2 + BASE_PARTICLE_SPEED;
//       let maxSpeed = speed;

//       let red = ~~(Math.random() * 255);
//       let green = ~~(Math.random() * 255);
//       let blue = ~~(Math.random() * 255);

//       // use brighter colours
//       red = red < 150 ? red + 150 : red;
//       green = green < 150 ? green + 150 : green;
//       blue = blue < 150 ? blue + 150 : blue;

//       // inner firework
//       for (let i = 0; i < PARTICLES_PER_FIREWORK; i++) {
//         let particle = new Particle(x, y, red, green, blue, speed);
//         particles.push(particle);

//         maxSpeed = speed > maxSpeed ? speed : maxSpeed;
//       }

//       // outer edge particles to make the firework appear more full
//       for (let i = 0; i < 40; i++) {
//         let particle = new Particle(x, y, red, green, blue, maxSpeed, true);
//         particles.push(particle);
//       }

//     };

//     class Particle {

//       constructor(
//       x = 0,
//       y = 0,
//       red = ~~(Math.random() * 255),
//       green = ~~(Math.random() * 255),
//       blue = ~~(Math.random() * 255),
//       speed,
//       isFixedSpeed)
//       {

//         this.x = x;
//         this.y = y;
//         this.red = red;
//         this.green = green;
//         this.blue = blue;
//         this.alpha = 0.05;
//         this.radius = 1 + Math.random();
//         this.angle = Math.random() * 360;
//         this.speed = Math.random() * speed + 0.1;
//         this.velocityX = Math.cos(this.angle) * this.speed;
//         this.velocityY = Math.sin(this.angle) * this.speed;
//         this.startTime = new Date().getTime();
//         this.duration = Math.random() * 300 + FIREWORK_LIFESPAN;
//         this.currentDiration = 0;
//         this.dampening = 30; // slowing factor at the end

//         this.colour = this.getColour();

//         if (isFixedSpeed) {
//           this.speed = speed;
//           this.velocityY = Math.sin(this.angle) * this.speed;
//           this.velocityX = Math.cos(this.angle) * this.speed;
//         }

//         this.initialVelocityX = this.velocityX;
//         this.initialVelocityY = this.velocityY;

//       }

//       animate() {

//         this.currentDuration = new Date().getTime() - this.startTime;

//         // initial speed kick
//         if (this.currentDuration <= 200) {

//           this.x += this.initialVelocityX * PARTICLE_INITIAL_SPEED;
//           this.y += this.initialVelocityY * PARTICLE_INITIAL_SPEED;
//           this.alpha += 0.01;

//           this.colour = this.getColour(240, 240, 240, 0.9);

//         } else {

//           // normal expansion
//           this.x += this.velocityX;
//           this.y += this.velocityY;
//           this.colour = this.getColour(this.red, this.green, this.blue, 0.4 + Math.random() * 0.3);

//         }

//         this.velocityY += GRAVITY / 1000;

//         // slow down particles at the end
//         if (this.currentDuration >= this.duration) {
//           this.velocityX -= this.velocityX / this.dampening;
//           this.velocityY -= this.velocityY / this.dampening;
//         }

//         if (this.currentDuration >= this.duration + this.duration / 1.1) {

//           // fade out at the end
//           this.alpha -= 0.02;
//           this.colour = this.getColour();

//         } else {

//           // fade in during expansion
//           if (this.alpha < 1) {
//             this.alpha += 0.03;
//           }

//         }
//       }

//       render() {

//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         ctx.lineWidth = this.lineWidth;
//         ctx.fillStyle = this.colour;
//         ctx.shadowBlur = 8;
//         ctx.shadowColor = this.getColour(this.red + 150, this.green + 150, this.blue + 150, 1);
//         ctx.fill();

//       }

//       getColour(red, green, blue, alpha) {

//         return `rgba(${red || this.red}, ${green || this.green}, ${blue || this.blue}, ${alpha || this.alpha})`;

//       }}



//     let updateCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };


//     // run it!

//     updateCanvasSize();
//     $(window).resize(updateCanvasSize);
//     $(canvas).on('click', e => {

//       createFirework(e.clientX, e.clientY);

//       // stop fireworks when clicked, re-enable after short time
//       disableAutoFireworks = true;
//       clearTimeout(resetDisable);
//       resetDisable = setTimeout(() => {
//         disableAutoFireworks = false;
//       }, 5000);

//     });

//     loop();
//   }
// }
// fireworks();
