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

var cardDetails = {
  solo: {
    text1: "1 person",
    text2: "SOLO<br>TRAVEL",
    text3: "# spiritual # cultural # fineart",
    text4: "Unlock the mysteries of a captivating solo adventure where culture and spirituality intertwine. Immerse yourself in the tranquility of a Chinese temple, engage in enriching spiritual activities, and explore fascinating museums.",
    bg: "url('../images/soloBG.png')"
  },
  family: {
    text1: "3-6 person",
    text2: "FAMILY<br>TRAVEL",
    text3: "# hotAirBallon # deerPark #hiking",
    text4: "Get up close with adorable animals at the charming farm, bask in the sun on pristine beaches, and let your spirits soar with a breathtaking hot air balloon ride. Experience joy, adventure, and togetherness on this magical family getaway.",
    bg: "url('../images/familyBG.png')"
  },
  besties: {
    text1: "2-4 people",
    text2: "BESTIES<br>TRIP",
    text3: "# spa # relaxing #photoshoot",
    text4: "Enjoy the ultimate freedom of a solo travel experience. Discover new places at your own pace.",
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
  // 獲取要改變背景圖片的元素
  var travelBG = document.querySelector("#slider-2");
  
  // 為每一個 "a" 元素添加點擊事件監聽器
  document.querySelectorAll("#swiper-2 a").forEach(function(el) {
    el.addEventListener("click", function(event) {
      event.preventDefault();

      // 获取对应的对象
      var details = cardDetails[this.id];
      if (!details) {
        // 如果没有找到对应的对象，就直接返回
        return;
      }

      // 更新背景图片
      travelBG.style.backgroundImage = details.bg;

      // 更新其他元素的内容
      document.getElementById("slider-text-1").textContent = details.text1;
      document.getElementById("slider-text-2").innerHTML = details.text2;
      document.getElementById("slider-text-3").textContent = details.text3;
      document.getElementById("slider-text-4").textContent = details.text4;
    });
  });
});



// 看滾輪位置
// window.onscroll=function(){
//   console.log( 
//     'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
//     'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
//   );
// }


//滾動至不同section
$(function() {
  // 檢查頁面上是否存在 id 為 'pageStyle' 的元素，有的話就執行這段JS
  if ($("#pageStyle").length > 0) {
    var scrolling = false; // 追蹤目前是否正在滾動的變數
    var currentPos = 0; // 追蹤目前所在區塊位置的變數
    var scrollToSection = $("section"); // 所有 "section" 標籤的集合

    function scrollUp() { // 定義向上滾動的函數
      // 若目前沒在滾動且不在第一個區塊
      if (!scrolling && currentPos > 0) { 
        scrolling = true; // 設定為正在滾動
        currentPos--; // 往上一個區塊
        var scrollToElement = scrollToSection[currentPos]; // 取得目前區塊元素

        // 滾動到目前的區塊
        $("html, body").animate(
          { scrollTop: $(scrollToElement).offset().top },
          100,
          function() { // 滾動完成後的回調函數
            scrolling = false; // 設定為滾動完畢
          }
        );
      }
    }

    function scrollDown() {
      if (!scrolling && currentPos < scrollToSection.length - 1) {
        scrolling = true;
        currentPos++;
        var scrollToElement = scrollToSection[currentPos];
        $("html, body").animate({
            scrollTop: $(scrollToElement).offset().top
          }, 100,
          function() {
            scrolling = false;
          });
      }
    }

    //初始設定，判斷目前位置

    for (var i = 0; i < scrollToSection.length; i++) {
      var elm = scrollToSection[i];

      if ($(document).scrollTop() >= $(elm).offset().top) {
        currentPos = i;
      }
    }

    $(document).on("DOMMouseScroll mousewheel wheel", function(e) {
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        scrollDown(); // 如果滾輪向下，則呼叫 scrollDown 函數
      } else {
        scrollUp();
      }
      if (currentPos == scrollToSection.length - 1) {
        console.log("last one");
      } else {
        return false;
      }
    });
  }
});


// document.addEventListener("DOMContentLoaded", function() {
//   // 滚动到指定元素的最上方
//   function scrollToElement() {
//     var element = document.getElementById("bottom");
//     var offset = 10; // 滚动10px

//     // 计算目标元素的相对页面顶部的位置
//     var position = element.offsetTop;

//     // 执行滚动动画
//     window.scrollTo({
//       top: position - offset,
//       behavior: "auto"
//     });
//   }

//   // 监听页面滚动事件
//   function handleScroll() {
//     var element = document.getElementById("bottom");
//     var footer = document.getElementById("footerBar");
//     var elementTop = element.getBoundingClientRect().top;
//     var footerTop = footer.getBoundingClientRect().top;

//     // 当元素进入视窗时，触发滚动到元素的最上方
//     if (elementTop <= window.innerHeight && footerTop > window.innerHeight) {
//       scrollToElement();

//       // 移除滚动事件监听器
//       window.removeEventListener("scroll", handleScroll);
//     }
//   }

//   // 添加滚动事件监听器
//   window.addEventListener("scroll", handleScroll);
// });

// /**********************************/ 

// document.addEventListener("DOMContentLoaded", function() {
//   // 滚动到指定元素的最上方
//   function scrollToElement(elementId) {
//     var element = document.getElementById(elementId);
//     var offset = 10; // 滚动10px

//     // 计算目标元素的相对页面顶部的位置
//     var position = element.offsetTop;

//     // 执行滚动动画
//     window.scrollTo({
//       top: position - offset,
//       behavior: "auto"
//     });
//   }

//   // 监听页面滚动事件
//   function handleScroll() {
//     var bottomElement = document.getElementById("bottom");
//     var pageStyleElement = document.getElementById("pageStyle");
//     var footer = document.getElementById("footerBar");
//     var bottomElementTop = bottomElement.getBoundingClientRect().top;
//     var pageStyleElementTop = pageStyleElement.getBoundingClientRect().top;
//     var footerTop = footer.getBoundingClientRect().top;

//     // 当元素进入视窗时，触发滚动到元素的最上方
//     if (bottomElementTop <= window.innerHeight && footerTop > window.innerHeight) {
//       scrollToElement('bottom');
//     }

//     if (pageStyleElementTop >= 0) {
//       scrollToElement('pageStyle');
//     }
//   }

//   // 添加滚动事件监听器
//   window.addEventListener("scroll", handleScroll);
// });




// document.addEventListener("DOMContentLoaded", function () {
//   // 獲取要點擊的元素
//   var soloActive = document.getElementById("solo");
//   var familyActive = document.getElementById("family");
//   var bestiesActive = document.getElementById("besties");
//   var honeyActive = document.getElementById("honeymoonCard"); 

//   // 獲取要改變背景圖片的元素
//   var travelBG = document.querySelector("#slider-2");
//   // 獲取要改變LOGO顏色的元素
//   // var menuLogo = document.querySelector(".menu_logo");

//   // 為 solo 添加點擊事件監聽器
//   soloActive.addEventListener("click", function () {
//     event.preventDefault(); //避免頁面跳到上面
//     travelBG.style.backgroundImage = "url('../images/soloBG.png')";

//   });

//   // 為 family 添加點擊事件監聽器
//   familyActive.addEventListener("click", function () {
//     event.preventDefault();
//     travelBG.style.backgroundImage = "url('../images/familyBG.png') ";
//       // menuLogo.style.color = "#FFFFFF";

//   });

//   // 為 besties 添加點擊事件監聽器
//   bestiesActive.addEventListener("click", function () {
//     event.preventDefault();
//     travelBG.style.backgroundImage = "url('../images/besties_BG.png')"
//     // menuLogo.style.color = "#FFFFFF";

//   });

//   // 為 party 添加點擊事件監聽器
//   contactUs.addEventListener("click", function () {
//     event.preventDefault();
//     travelBG.style.backgroundImage = "url('')";

//   });
// });


// 點擊圖像時整個容器向左移動

// var images = document.getElementsByClassName('swiper-slide');

// for (var i = 0; i < images.length; i++) {
//   images[i].addEventListener('click', function() {
//     var clickedImage = this;
//     var parent = clickedImage.parentNode;

//     parent.removeChild(clickedImage); // 从父容器中移除被点击的图像
//     parent.appendChild(clickedImage); // 将被点击的图像添加到末尾

//     // 更新图像的位置
//     var children = parent.children;
//     for (var j = 0; j < children.length; j++) {
//       var leftPos = (j * 40) + 'px';
//       children[j].style.left = leftPos;
//     }
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   var images = document.getElementsByClassName('image');

//   for (var i = 0; i < images.length; i++) {
//     images[i].addEventListener('click', function() {
//       var clickedImage = this;
//       var parent = clickedImage.parentNode;
//       var containerWidth = parent.offsetWidth;
//       var imageWidth = clickedImage.offsetWidth;
//       var containerLeft = parent.offsetLeft;
//       var clickedImageLeft = clickedImage.offsetLeft;
//       var offset = containerLeft - clickedImageLeft - imageWidth;

//       clickedImage.style.left = offset + 'px';

//       setTimeout(function() {
//         parent.removeChild(clickedImage);
//         parent.appendChild(clickedImage);
//         var images = parent.getElementsByClassName('image');
//         for (var j = 0; j < images.length; j++) {
//           images[j].style.left = '0';
//         }
//       }, 500);
//     });
//   }
// });

// const images = document.querySelectorAll('.swiper-slide img');
// const container = document.querySelector('.swiper-slide');

// container.addEventListener('click', handleClick);

// function handleClick(event) {
//   if (event.target.tagName === 'IMG') {
//     const clickedImage = event.target;
//     const index = Array.from(images).indexOf(clickedImage);
//     const shiftedImages = Array.from(images).slice(index).concat(Array.from(images).slice(0, index));

//     shiftedImages.forEach((image, i) => {
//       image.style.transform = `translateX(-${(shiftedImages.length - i - 1) * 280}px)`;
//     });
//   }
// }
