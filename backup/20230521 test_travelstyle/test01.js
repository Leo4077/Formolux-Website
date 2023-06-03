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

document.addEventListener("DOMContentLoaded", function () {
  // 獲取要懸停的元素
  var soloActive = document.getElementById("solo");
  var aboutTaiwan = document.getElementById("aboutTaiwan");
  var aboutUs = document.getElementById("aboutUs");
  var contactUs = document.getElementById("contactUs"); // 確保您在HTML中有一個具有此ID的元素

  // 獲取要改變背景圖片的元素
  var travelBG = document.querySelector("#slider-2");
  // 獲取要改變LOGO顏色的元素
  var menuLogo = document.querySelector(".menu_logo");

  // 為 travelStyle 添加懸停事件監聽器
  soloActive.addEventListener("click", function () {
    travelBG.style.backgroundImage = "url('../images/soloBG.png')";

  });

  // 為 aboutTaiwan 添加懸停事件監聽器
  aboutTaiwan.addEventListener("click", function () {
      travelBG.style.backgroundImage = "url('../images/familyBG.png') ";
      menuLogo.style.color = "#FFFFFF";

  });

  // 為 aboutUs 添加懸停事件監聽器
  aboutUs.addEventListener("click", function () {
      travelBG.style.backgroundImage = "url('../images/BG-3.jpg')"
      menuLogo.style.color = "#FFFFFF";

  });

  // 為 contactUs 添加懸停事件監聽器
  contactUs.addEventListener("click", function () {
      travelBG.style.backgroundImage = "url('../images/BG-4.jpg')";

  });
});