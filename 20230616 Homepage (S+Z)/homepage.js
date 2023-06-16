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
// > 初始化縮放比例為 1
let scale = 1;

// !
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
// > 初始化 X 和 Y 軸位移為 0
let translateX = 0;
let translateY = 0;
// > 初始階段設定為位移
let stage = 'translate';
// !


function handleZoomScroll(event) {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    // > delta 前的數值影響每次滾動縮放的比例
    scale = Math.max(1, scale - 5 * delta);

    // !
    // > delta 前的數值影響每次滾動的移動距離
    // translateX += 0.1 * delta;
    // !

    // > 透過設置 transformOrigin調整中心點
    zoomSvg.style.transformOrigin = '58.685% 50%';
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

        // !
        // > 當縮放到一定程度時，開始滑動 <p> 標籤
        if (scale >= 120) {
            // 每次滾動時，translateX 變化的固定量
            let translatePercentage = 10;
            let parentWidth = p1.parentElement.offsetWidth;
            const translateChange = (translatePercentage / 100) * parentWidth;
            const maxTranslate = parentWidth;  // 定義最大移動距離
    
            if (delta > 0) {
                // 向上滾動
                translateX = Math.max(0, translateX - translateChange);

            } else {
                // 向下滾動
                translateX = Math.min(maxTranslate, translateX + translateChange);

            }
    
            p1.style.transform = `translateX(${translateX}px)`;
            p2.style.transform = `translateX(${-translateX}px)`;
        }
        // !

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

// !
// > 為滾動事件添加事件監聽器
document.addEventListener('mousewheel', scrollEventHandler, { passive: false });
document.addEventListener('DOMMouseScroll', scrollEventHandler, { passive: false });