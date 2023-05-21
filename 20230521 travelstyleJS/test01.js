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
// var slider = document.getElementById('slider-2');
// var isScrolling = false;

// window.addEventListener('scroll', function() {
//   var sliderPosition = slider.getBoundingClientRect().top;
//   var windowHeight = window.innerHeight;

//   if (!isScrolling && sliderPosition - 950 <= 0) {
//     isScrolling = true;
//     slider.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
//     setTimeout(function() {
//       isScrolling = false;
//     }, 1000);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // 獲取要點擊的元素
  var soloActive = document.getElementById("solo");
  var familyActive = document.getElementById("family");
  var bestiesActive = document.getElementById("besties");
  var partyActive = document.getElementById("party");
  var bespokeActive = document.getElementById("bespoke"); 
  var pilgramActive = document.getElementById("pilgram");
  var honeyActive = document.getElementById("honeymoonCard"); 

  // 獲取要改變背景圖片的元素
  var travelBG = document.querySelector("#slider-2");
  // 獲取要改變LOGO顏色的元素
  // var menuLogo = document.querySelector(".menu_logo");

  // 為 solo 添加點擊事件監聽器
  soloActive.addEventListener("click", function () {
    event.preventDefault(); //避免頁面跳到上面
    travelBG.style.backgroundImage = "url('../images/soloBG.png')";

  });

  // 為 family 添加點擊事件監聽器
  familyActive.addEventListener("click", function () {
    event.preventDefault();
    travelBG.style.backgroundImage = "url('../images/familyBG.png') ";
      // menuLogo.style.color = "#FFFFFF";

  });

  // 為 besties 添加點擊事件監聽器
  bestiesActive.addEventListener("click", function () {
    event.preventDefault();
    travelBG.style.backgroundImage = "url('../images/bestiesBG.png')"
    // menuLogo.style.color = "#FFFFFF";

  });

  // 為 party 添加點擊事件監聽器
  contactUs.addEventListener("click", function () {
    event.preventDefault();
    travelBG.style.backgroundImage = "url('')";

  });
});
