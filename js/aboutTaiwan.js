//ukiyo圖片視差效果
let parallaxes;
let scale, speed;


if (window.matchMedia("(max-width: 576.98px)").matches) {

  parallaxes = document.querySelectorAll('.ipad_taiwanpic');
  scale = 1.1;
  speed = 1.3;
} else if (window.matchMedia("(min-width: 577px) and (max-width: 1024.98px)").matches) {

  parallaxes = document.querySelectorAll('.ipad_taiwanpic');
  scale = 1.2;
  speed = 2;
} else {

  parallaxes = document.querySelectorAll('.taiwanpic');
  scale = 1.1;
  speed = 1.3;
}

parallaxes.forEach(parallax => {
    new Ukiyo(parallax, {
        scale: scale,
        speed: speed,
        willChange: true,
        externalRAF: false
    });
});



// smoove 動畫效果


let offset, moveX, moveX_z;

//手機板smoove調整
if (window.matchMedia("max-width: 576.98px").matches) {
  offset = '15%'; 
  moveX = '-10px'; 
  moveX_z = '10px'; 
} else {
  offset = '30%';
  moveX = '-15px';
  moveX_z = '15px';
}

$('.smoove').smoove({
    min_width: 0, /*smoove預設會在裝置768px以下禁用，因此新增此啟用*/ 
    offset: offset,
    moveX: moveX,
});

$('.smoove_z').smoove({
    min_width: 0,
    offset: offset,
    moveX: moveX_z,   
});



// > 玻璃擬態 下滾才出現
window.addEventListener('scroll', function () {
  var header1 = document.querySelector('.header1');
  var aboutTaiwan01 = document.querySelector('#aboutTaiwan01');
  var glassMorphism = document.querySelector('.glass-morphism');

  var headerTop = header1.getBoundingClientRect().top;
  var aboutTaiwan01Top = aboutTaiwan01.getBoundingClientRect().top;

  if (headerTop >= aboutTaiwan01Top && window.pageYOffset > 0) {
      glassMorphism.style.display = 'flex';
      console.log('玻璃擬態顯示');
  } else {
      glassMorphism.style.display = 'none';
      console.log('玻璃擬態不顯示');
  }
});



