// > 預先載入
var imagesToPreload = [
  '../images/soloBG.png',
  '../images/familyBG.png',
  '../images/besties_BG.png',
  '../images/travelstyle_BG.png',
  '../images/ipad_solo_BG.png',
  '../images/ipad_family_BG.png',
  '../images/ipad_besties_BG.png',
  '../images/ipad_travelsty_BG.png',
  '../images/phone_solo_BG.png',
  '../images/phone_family_BG.png',
  '../images/phone_besties_BG.png',
  '../images/phone_honeymoon_BG.png'
  
];

imagesToPreload.forEach(function(src) {
  var img = new Image();
  img.src = src;
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

/*手機swiper*/

if (window.matchMedia("(max-width: 576.98px)").matches) {
  new Swiper("#swiper-2", {

    slidesPerView: 2.4,
    spaceBetween: 18.24,
    centeredSlides: false,
    lazy: true,
    loop: true,
    keyboard: {
      enabled: false,
    },
    navigation: {
      nextEl: "#stylenav-right",
      prevEl: "#stylenav-left"
    },
  });
}

/*點選卡牌的樣式變化*/

// 全局定義 details 對象
var cardDetails = { // 桌機板的細節
  desktop: { 
    solo: {
    text1: "1 person",
    text2: "SOLO<br>TRAVEL",
    text3: "# spiritual # cultural # fineart",
    text4: "Experience a valuable travel that allows one to explore oneself, and grow.",
    bg: "url('../images/soloBG.png')",
    link: "../html/soloTravel.html" 
  },
  family: {
    text1: "3-6 people",
    text2: "FAMILY<br>TRAVEL",
    text3: "# hotAirBallon # deerPark #hiking",
    text4: "Sharing joy to strengthen familial bonds, interacting to deepen affections.",
    bg: "url('../images/familyBG.png')",
    link: "../html/familyTrip.html" 
  },
  besties: {
    text1: "2-4 people",
    text2: "BESTIES<br>TRIP",
    text3: "# spa # relaxing #photoshoot",
    text4: "Enjoying a luxurious trip with my best friend like a privileged lady, relaxing both mind and body.",
    bg: "url('../images/besties_BG.png')",
    link: "../html/bestiesTrip.html"
  },
  honeymoonCard: {
    text1: "2 people",
    text2: "HONEY<br>MOON",
    text3: "# romantic # sweet # night view",
    text4: "Experience a luxurious and laid-back honeymoon trip, unwind and create unforgettable memories with your loved one.",
    bg: "url('../images/travelstyle_BG.png')",
    link: "../html/honeyMoon.html"
  },
},  

  tablet: { // 平板裝置的細節
    solo: {
      text1: "1 person",
      text2: "SOLO TRAVEL",
      text3: "# spiritual # cultural # fineart",
      text4: "Experience a valuable travel that allows one to explore oneself, and grow.",
      bg: "url('../images/ipad_solo_BG.png')",
      link: "../html/soloTravel.html" 
    },
    family: {
      text1: "3-6 people",
      text2: "FAMILY TRIP",
      text3: "# nature  # animals  # spring",
      text4: "Sharing joy to strengthen familial bonds, interacting to deepen affections.",
      bg: "url('../images/ipad_family_BG.png')",
      link: "../html/familyTrip.html" 
    },
    besties: {
      text1: "2-4 people",
      text2: "BESTIES TRIP",
      text3: "# spa # relaxing # photoshoot",
      text4: "Enjoying a luxurious trip with my best friend like a privileged lady, relaxing both mind and body.",
      bg: "url('../images/ipad_besties_BG.png')",
      link: "../html/bestiesTrip.html"
    },
    honeymoonCard: {
      text1: "2 people",
      text2: "HONEY MOON",
      text3: "# romantic # sweet # night view",
      text4: "Experience a luxurious and laid-back honeymoon trip, unwind and create unforgettable memories with your loved one.",
      bg: "url('../images/ipad_travelsty_BG.png')",
      link: "../html/honeyMoon.html"
    },
  },   

  mobile: { // 手機裝置的細節
    solo: {
      text1: "1 person",
      text2: "SOLO TRAVEL",
      text3: "# spiritual # cultural # fineart",
      text4: "Experience a valuable travel that allows one to explore oneself, and grow.",
      bg: "url('../images/phone_solo_BG.png')",
      link: "../html/soloTravel.html" 
    },
    family: {
      text1: "3-6 people",
      text2: "FAMILY TRIP",
      text3: "# nature  # animals  # spring",
      text4: "Sharing joy to strengthen familial bonds, interacting to deepen affections.",
      bg: "url('../images/phone_family_BG.png')",
      link: "../html/familyTrip.html" 
    },
    besties: {
      text1: "2-4 people",
      text2: "BESTIES TRIP",
      text3: "# spa # relaxing # photoshoot",
      text4: "Enjoying a luxurious trip with my best friend like a privileged lady, relaxing both mind and body.",
      bg: "url('../images/phone_besties_BG.png')",
      link: "../html/bestiesTrip.html"
    },
    honeymoonCard: {
      text1: "2 people",
      text2: "HONEY MOON",
      text3: "# romantic # sweet # night view",
      text4: "Experience a luxurious and laid-back honeymoon trip, unwind and create unforgettable memories with your loved one.",
      bg: "url('../images/phone_honeymoon_BG.png')",
      link: "../html/honeyMoon.html"
    },
  }    
};


var details = cardDetails.desktop; // 初始化 details 對象為桌機板的細節
var travelBG = document.querySelector("#slider-2")
var learnMoreButton = document.querySelector(".more");

document.addEventListener("DOMContentLoaded", function () {

  function clickHandler(event) {
    event.preventDefault();

    var windowWidth = window.innerWidth;

    // 根據視窗大小決定使用哪個版型的細節
    if (windowWidth > 1024) {
      details = cardDetails.desktop;
    } else if (windowWidth <= 1024 && windowWidth > 576) {
      details = cardDetails.tablet;
    } else {
      details = cardDetails.mobile;
    }

    // 使用對應版型的細節更新內容
    var currentDetails = details[this.id];
    if (currentDetails) {
      travelBG.style.backgroundImage = currentDetails.bg;
      document.getElementById("slider-text-1").textContent = currentDetails.text1;
      document.getElementById("slider-text-2").innerHTML = currentDetails.text2;
      document.getElementById("slider-text-3").textContent = currentDetails.text3;
      document.getElementById("slider-text-4").textContent = currentDetails.text4;
      learnMoreButton.href = currentDetails.link;
    }
  }

  // 為每個連結添加點擊事件監聽器
  document.querySelectorAll("#swiper-2 a").forEach(function (el) {
    el.addEventListener("click", clickHandler);
  });

  // 為視窗大小變化添加事件監聽器
  window.addEventListener("resize", function () {
    var activeLink = document.querySelector("#swiper-2 a.active");
    if (activeLink) {
      activeLink.dispatchEvent(new Event("click"));
    }
  });

  // 在頁面加載時觸發一次點擊事件
  var activeLink = document.querySelector("#swiper-2 a.active");
  if (activeLink) {
    activeLink.dispatchEvent(new Event("click"));
  }
});


// > 玻璃擬態 下滾才出現
window.addEventListener('scroll', function () {
  var header1 = document.querySelector('.header1');
    var pageStyle = document.querySelector('#pageStyle');
  var glassMorphism = document.querySelector('.glass-morphism');

  var headerTop = header1.getBoundingClientRect().top;
  var pageStyleTop = pageStyle.getBoundingClientRect().top;

  if (headerTop >= pageStyleTop && window.pageYOffset > 0) {
      glassMorphism.style.display = 'flex';
      console.log('玻璃擬態顯示');
  } else {
      glassMorphism.style.display = 'none';
      console.log('玻璃擬態不顯示');
  }
});






