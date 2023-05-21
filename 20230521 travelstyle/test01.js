new Swiper("#swiper-2", {
    slidesPerView: 3.6,
    centeredSlides: false,
    spaceBetween: 40,
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: "#stylenav-right",
        prevEl: "#stylenav-left"
    },
});

// page scroll頁面滾動
var slider = document.getElementById('slider-2');
var isScrolling = false;

window.addEventListener('scroll', function() {
  var sliderPosition = slider.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (!isScrolling && sliderPosition - 950 <= 0) {
    isScrolling = true;
    slider.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    setTimeout(function() {
      isScrolling = false;
    }, 1000);
  }
});