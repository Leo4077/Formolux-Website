// > 玻璃擬態 下滾才出現
window.addEventListener('scroll', function () {
    var header1 = document.querySelector('.header1');
    var hms = document.querySelector('.honeymoon-section1');
    var glassMorphism = document.querySelector('.glass-morphism');

    var headerTop = header1.getBoundingClientRect().top;
    var hmsTop = hms.getBoundingClientRect().top;

    if (headerTop >= hmsTop && window.pageYOffset > 0) {
        glassMorphism.style.display = 'flex';
        console.log('玻璃擬態顯示');
    } else {
        glassMorphism.style.display = 'none';
        console.log('玻璃擬態不顯示');
    }
});
