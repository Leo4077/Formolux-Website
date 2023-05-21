// 選取輪播容器和所有的圖片
var slideshowContainer = document.querySelector('.slideshow-container');
var slides = document.querySelectorAll('.slide');

// 設定輪播速度和輪播間隔時間（以毫秒為單位）
var slideSpeed = 1000; // 圖片輪播的速度
var intervalTime = 3000; // 圖片之間的間隔時間

// 計算輪播容器的寬度
// var containerWidth = slideshowContainer.offsetWidth;
// var containerHeight = slideshowContainer.offsetHeight;

// // 設定輪播容器的寬度和每個圖片的寬度
// slideshowContainer.style.width = containerWidth + 'px';
// slideshowContainer.style.height = containerHeight + 'px';
// slides.forEach(function(slide) {
//   slide.style.width = containerWidth + 'px';
//   slide.style.height = containerHeight + 'px';
// });

// 設定輪播動畫的持續時間和循環播放
slides.forEach(function(slide) {
  slide.style.animationDuration = slideSpeed + 'ms';
  slide.style.animationIterationCount = 'infinite';
});

// 開始輪播
var slideshowInterval;

function startSlideshow() {
  slideshowInterval = setInterval(function() {
    // 將第一張圖片移到最後
    var firstSlide = slides[0];
    slideshowContainer.appendChild(firstSlide);
    slides = document.querySelectorAll('.slide');
    slides[0].style.animationName = 'none'; // 重置第一張圖片的動畫
    slides[0].offsetHeight; // 強制重新繪製
    slides[0].style.animationName = 'slideAnimation'; // 啟動動畫
  }, intervalTime);
}

// 停止輪播
function stopSlideshow() {
  clearInterval(slideshowInterval);
}

// 將指定的圖片輪播至最左邊
function slideToStart(index) {
  if (index >= slides.length) {
    return;
  }

  var slideToMove = slides[index];
  slideshowContainer.insertBefore(slideToMove, slides[0]);

  // 停止輪播並重新啟動
  stopSlideshow();
  startSlideshow();
}

// 開始輪播
startSlideshow();

