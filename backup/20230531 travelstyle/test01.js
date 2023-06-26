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



// window.addEventListener('scroll', function() {
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
//   if (scrollPosition > 100) {
//     var targetElement = document.getElementById('slider-2');
//     targetElement.style.scrollBehavior = 'auto'; // 暫時取消平滑滾動效果
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//     targetElement.style.scrollBehavior = 'smooth'; // 恢復平滑滾動效果
//   }
// });

//page scroll頁面滾動
// window.addEventListener('scroll', function() {
//   var scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;


//   if (scrollDistance >= 10) {
//       var targetElement = document.getElementById('slider-2');

//       targetElement.scrollIntoView({
//           behavior: 'auto'
//       },100);
//       window.removeEventListener('scroll', arguments.callee); // 將arguments.callee改為匿名函數
//   }
// });

// console.log(scrollDistance);


//page scroll頁面滾動
// var slider = document.getElementById('slider-2');
// var isScrolling = false; //滾動過程中只執行一次滾動動作

// window.addEventListener('scroll', function() {
//   var sliderPosition = slider.getBoundingClientRect().top;


//   if (!isScrolling && sliderPosition - 950 <= 0) {
//     isScrolling = true;
//     slider.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
//     setTimeout(function() {
//       isScrolling = false;
//     }, 1000);
//   }
// });

// window.addEventListener('scroll', function() {
//   var pageStyle = document.getElementById('pageStyle');
//   var slider2 = document.getElementById('slider-2');
  
//   var pageStyleOffset = pageStyle.offsetTop;
//   var slider2Offset = slider2.offsetTop;
  
//   var scrollPosition = window.scrollY;
  
//   if (scrollPosition >= (pageStyleOffset + 10) && scrollPosition < (slider2Offset - 10)) {
//     window.scrollTo(0, slider2Offset);
//   } else if (scrollPosition >= (slider2Offset + 20) && scrollPosition < (slider2Offset + 40)) {
//     window.scrollTo(0, pageStyleOffset);
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
