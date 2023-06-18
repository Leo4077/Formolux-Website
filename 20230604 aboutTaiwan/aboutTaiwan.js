//ukiyo圖片視差效果
let parallaxes;
let scale, speed;

if (window.matchMedia("(min-width: 577px) and (max-width: 1024.98px)").matches) {
  /* the viewport is at least 577 pixels wide and at most 1024.98 pixels wide, 
     so we select the iPad images and set the parameters */
  parallaxes = document.querySelectorAll('.ipad_taiwanpic');
  scale = 1.2;
  speed = 1.5;
} else {
  /* the viewport is not between 577 and 1024.98 pixels wide, 
     so we select the desktop images and set the parameters */
  parallaxes = document.querySelectorAll('.taiwanpic');
  scale = 1.1;
  speed = 1.3;
}

parallaxes.forEach(parallax => {
    new Ukiyo(parallax, {
        scale: scale,
        speed: speed,
        willChange: true, // This may not be valid in all cases
        externalRAF: false
    });
});



// smoove 动画
let offset, moveX, moveX_z;

if (window.matchMedia("(min-width: 577px) and (max-width: 1024.98px)").matches) {

  offset = '50%'; 
  moveX = '-10px'; 
  moveX_z = '10px';
} else {

  offset = '30%';
  moveX = '-15px';
  moveX_z = '15px';
}

$('.smoove').smoove({
    offset: offset,
    moveX: moveX,
});

$('.smoove_z').smoove({
    offset: offset,
    moveX: moveX_z,   
});



