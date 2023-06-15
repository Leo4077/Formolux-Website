// > 宣告一些變數，包括瀏覽器檢測，滾動靈敏度設定，當前背景圖片的編號，以及背景圖片的總數量
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30;
var slideDurationSetting = 1500;
var currentSlideNumber = 0;
var numberOfBackgrounds = document.querySelectorAll('.background').length;

// > 定義一個函數來處理滾動時的視差效果
function parallaxScroll(evt) {
    var delta;
    if (isFirefox) {
        delta = evt.detail * (-120);
    } else if (isIe) {
        delta = -evt.deltaY;
    } else {
        delta = evt.wheelDelta;
    }

    if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
            ticking = true;
            if (currentSlideNumber !== numberOfBackgrounds - 1) {
                currentSlideNumber++;
                nextItem();
            }
            slideDurationTimeout(slideDurationSetting);
        }

        if (delta >= scrollSensitivitySetting) {
            ticking = true;
            if (currentSlideNumber !== 0) {
                currentSlideNumber--;
                previousItem();
            }
            slideDurationTimeout(slideDurationSetting);
        }
    }
}

// > 定義一個函數來設定滾動後的暫停時間
function slideDurationTimeout(slideDuration) {
    setTimeout(function () {
        ticking = false;
    }, slideDuration);
}

// > 定義一個函數來處理滾動到下一個背景圖片的情況
function nextItem() {
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

// > 定義一個函數來處理滾動到上一個背景圖片的情況
function previousItem() {
    var $currentSlide = $(".background").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}

// > 定義一個函數來處理縮放滾動的事件
const zoomSvg = document.querySelector('.zoom-svg');
let scale = 1;

function handleZoomScroll(event) {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    scale = Math.max(1, scale - 0.1 * delta);
    zoomSvg.style.transformOrigin = 'center center'; // > 這裡設置 transformOrigin
    zoomSvg.style.transform = `scale(${scale})`;
}

// > 定義一個函數來處理滾動事件的分派
function scrollEventHandler(evt) {
    var delta = evt.wheelDelta || -evt.detail;
    if (currentSlideNumber === 0 && delta > 0) {
        evt.preventDefault();
        return;
    }
    if (currentSlideNumber === 1 && scale !== 1) {
        // > 在第二個 .background 上並且比例不為 1
        handleZoomScroll(evt);
        evt.stopPropagation();  // > 阻止事件的進一步傳播
        return;
    }
    else if (currentSlideNumber === numberOfBackgrounds - 1) {
        if (scale > 1 || delta < 0) {
            handleZoomScroll(evt);
        } else if (scale === 1 && delta > 0) {
            parallaxScroll(evt);
        }
    } else {
        parallaxScroll(evt);
    }
}

// > 為滾動事件添加事件監聽器
document.addEventListener('mousewheel', scrollEventHandler);
document.addEventListener('DOMMouseScroll', scrollEventHandler);

