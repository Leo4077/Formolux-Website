//ukiyo圖片視差效果
const parallaxes = document.querySelectorAll('.taiwanpic')

parallaxes.forEach(parallax => {
    new Ukiyo(parallax, {
        scale: 1.05, // 1~2 is recommended
        speed: 1.3, // 1~2 is recommended
        willChange: true, // This may not be valid in all cases
        // wrapperClass: "ukiyo-wrapper",
        externalRAF: false
    });
})

// smoove 动画
$('.smoove').smoove({
    offset : '30%',
    moveX  : '-15px',
});

$('.smoove_z').smoove({
    offset : '30%',
    moveX  : '15px',    
});


