//ukiyo圖片視差效果
let parallaxes;
let scale, speed;

if (window.matchMedia("(min-width: 577px) and (max-width: 1024.98px)").matches) {

  parallaxes = document.querySelectorAll('.ipad_taiwanpic');
  scale = 1.2;
  speed = 1.5;
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
$('.smoove').smoove({
    min_width: 0, /*smoove預設會在裝置768px以下禁用，因此新增此啟用*/ 
    offset : '30%',
    moveX  : '-15px',
});

$('.smoove_z').smoove({
    min_width: 0,
    offset : '30%',
    moveX  : '15px',     
});



