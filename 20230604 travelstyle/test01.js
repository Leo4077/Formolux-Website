/*桌機板swiper*/
new Swiper("#swiper-2", {
  slidesPerView: 3.6,
  centeredSlides: false,
  spaceBetween: 40,
  lazy: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#stylenav-right",
    prevEl: "#stylenav-left"
  },
});

/*平板swiper*/

// if (window.matchMedia("(min-width: 577px) and (max-width: 1024px)").matches) {
//   new Swiper("#swiper-2", {

//     slidesPerView: 3.6,
//     spaceBetween: 35,
//     centeredSlides: false,
//     lazy: true,
//     loop: true,
//     keyboard: {
//       enabled: false,
//     },
//     navigation: {
//       nextEl: "#stylenav-right",
//       prevEl: "#stylenav-left"
//     },
//   });
// }

/*桌機板:點選樣式改變*/

var cardDetails = {
  solo: {
    text1: "1 person",
    text2: "SOLO<br>TRAVEL",
    text3: "# spiritual # cultural # fineart",
    text4: "Experience a valuable travel that allows one to explore oneself, and grow.",
    bg: "url('../images/soloBG.png')"
  },
  family: {
    text1: "3-6 people",
    text2: "FAMILY<br>TRAVEL",
    text3: "# hotAirBallon # deerPark #hiking",
    text4: "Sharing joy to strengthen familial bonds, interacting to deepen affections.",
    bg: "url('../images/familyBG.png')"
  },
  besties: {
    text1: "2-4 people",
    text2: "BESTIES<br>TRIP",
    text3: "# spa # relaxing #photoshoot",
    text4: "Enjoying a luxurious trip with my best friend like a privileged lady, relaxing both mind and body.",
    bg: "url('../images/besties_BG.png')"
  },
  honeymoonCard: {
    text1: "2 people",
    text2: "HONEY<br>MOON",
    text3: "# romantic # sweet # night view",
    text4: "Experience a luxurious and laid-back honeymoon trip, unwind and create unforgettable memories with your loved one.",
    bg: "url('../images/travelstyle_BG.png')"
  },
};

document.addEventListener("DOMContentLoaded", function () {
  var travelBG = document.querySelector("#slider-2");

  // 為每一個 "a" 元素添加點擊事件監聽器
  document.querySelectorAll("#swiper-2 a").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();

      // 獲取對應的對象
      var details = cardDetails[this.id];
      if (!details) {
        // 如果沒有找到對象，就直接返回
        return;
      }

      // 更新背景圖片
      travelBG.style.backgroundImage = details.bg;

      // 更新其他元素的內容
      document.getElementById("slider-text-1").textContent = details.text1;
      document.getElementById("slider-text-2").innerHTML = details.text2;
      document.getElementById("slider-text-3").textContent = details.text3;
      document.getElementById("slider-text-4").textContent = details.text4;
    });
  });

  /*平板:點選樣式改變*/
  // 添加平板裝置的事件監聽器
  function tabletDeviceHandler(event) {
    event.preventDefault();

    var details;
    var windowWidth = window.innerWidth;

    // 根據裝置寬度選擇對應的卡片細節
    if (windowWidth >= 577 && windowWidth <= 1024) {
      // 平板裝置的卡片細節
      details = {
        solo: {
          text1: "1 person",
          text2: "SOLO TRAVEL",
          text3: "# spiritual # cultural # fineart",
          text4: "Experience a valuable travel that allows one to explore oneself, and grow.",
          bg: "url('../images/ipad_solo_BG.png')"
        },
        family: {
          text1: "3-6 people",
          text2: "FAMILY TRIP",
          text3: "# nature  # animals  # spring",
          text4: "Sharing joy to strengthen familial bonds, interacting to deepen affections.",
          bg: "url('../images/ipad_family_BG.png')"
        },
        besties: {
          text1: "2-4 people",
          text2: "BESTIES TRIP",
          text3: "# spa # relaxing # photoshoot",
          text4: "Enjoying a luxurious trip with my best friend like a privileged lady, relaxing both mind and body.",
          bg: "url('../images/ipad_besties_BG.png')"
        },
        honeymoonCard: {
          text1: "2 people",
          text2: "HONEY MOON",
          text3: "# romantic # sweet # night view",
          text4: "Experience a luxurious and laid-back honeymoon trip, unwind and create unforgettable memories with your loved one.",
          bg: "url('../images/ipad_travelsty_BG.png')"
        },
      };

      // 更新背景圖片
      travelBG.style.backgroundImage = details[this.id].bg;

      // 更新其他元素的內容
      document.getElementById("slider-text-1").textContent = details[this.id].text1;
      document.getElementById("slider-text-2").innerHTML = details[this.id].text2;
      document.getElementById("slider-text-3").textContent = details[this.id].text3;
      document.getElementById("slider-text-4").textContent = details[this.id].text4;
    }
  }

  // 綁定平板裝置的點擊事件
  document.querySelectorAll("#swiper-2 a").forEach(function (el) {
    el.addEventListener("click", tabletDeviceHandler);
  });

  // 添加視窗大小變化時的事件監聽器，以便在平板裝置的寬度範圍內更新內容
  window.addEventListener("resize", function () {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 577 && windowWidth <= 1024) {
      // 觸發平板裝置的點擊事件
      var activeLink = document.querySelector("#swiper-2 a.active");
      if (activeLink) {
        activeLink.dispatchEvent(new Event("click"));
      }
    }
  });

  // 在頁面加載時觸發平板裝置的點擊事件
  var initialWindowWidth = window.innerWidth;
  if (initialWindowWidth >= 577 && initialWindowWidth <= 1024) {
    var activeLink = document.querySelector("#swiper-2 a.active");
    if (activeLink) {
      activeLink.dispatchEvent(new Event("click"));
    }
  }
});



//滾動至不同section


let isFirstScroll = true;
let hasVisitedSlider = false;
let lastScrollY = 0;

window.addEventListener('wheel', function(event) {
  const scrollY = window.pageYOffset;
  const slider = document.querySelector('#slider-2');
  const pageStyle = document.querySelector('#pageStyle');

  // 檢查我們是否在 #pageStyle 區域內
  const isInPageStyle = scrollY >= pageStyle.offsetTop && scrollY < slider.offsetTop;

  // 檢查滾動方向
  const isScrollingUp = event.deltaY < 0;

  if ((isFirstScroll && !isScrollingUp) || (isInPageStyle && !isScrollingUp)) {
    // 不管滾動方向如何，只要滾動滾輪，且滾動方向為向下時，就會跳轉到 #slider-2
    isFirstScroll = false;
    hasVisitedSlider = true;
    window.scrollTo({
      top: slider.offsetTop,
      behavior: 'smooth'
    });
  } else if (hasVisitedSlider && isScrollingUp && scrollY <= pageStyle.offsetHeight - 5) {
    // 當用戶向上滾動並且到達 "#pageStyle" 區域的尾端10px處時，跳轉到頁面最頂端
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // 如果用戶已經回到頁面頂部，則重設變數以重新觸發滾動效果
  if (scrollY === 0) {
    isFirstScroll = true;
    hasVisitedSlider = false;
  }

  // 儲存這次的滾動位置以供下次判斷滾動方向
  lastScrollY = scrollY;
});

