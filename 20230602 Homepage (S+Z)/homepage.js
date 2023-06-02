/* 滾動放大 */
// 選取具有 'zoom-svg' 類別的元素，用於放大縮小SVG
const zoomSvg = document.querySelector('.zoom-svg');
// 選取兩個 <p> 標籤
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

// 初始化縮放比例為 1
let scale = 1;
// 初始化 X 和 Y 軸位移為 0
let translateX = 0;
let translateY = 0;
// 初始階段設定為位移
let stage = 'translate';

function handleScroll(event) {
    // 阻止預設的滾動行為
    event.preventDefault();
    // 確定滾輪滾動的方向
    const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));

    // 依據現階段決定要進行的動作
    if (stage === 'translate') {
        translateX -= 10 * delta; // 適應新的滾動方向
        translateY -= 10 * delta; // 適應新的滾動方向
        if (Math.abs(translateX) >= 100 && Math.abs(translateY) >= 100) {
            stage = 'scale';
        } else if (translateX >= 0 && translateY >= 0) { // 適應新的滾動方向
            translateX = 0;
            translateY = 0;
            delta < 0 && (stage = 'scale'); // 適應新的滾動方向
        }
    } else if (stage === 'scale') {
        scale = Math.max(1, scale - 0.1 * delta); // 適應新的滾動方向
        if (scale <= 1) {
            scale = 1;
            delta > 0 && (stage = 'translate'); // 適應新的滾動方向
        } else if (scale >= 600) {
            p1.style.transform = `translateX(${translateX - 10 * delta}px)`; // 適應新的滾動方向
            p2.style.transform = `translateX(${translateX + 10 * delta}px)`; // 適應新的滾動方向
        }
    }
    zoomSvg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}


/* 全頁滾動 */
// ------------- 定義變數 ------------- //
// 用於跟蹤是否正在滑動
var ticking = false;
// 檢查使用者是否使用 Firefox
var isFirefox = (/Firefox/i.test(navigator.userAgent));
// 檢查使用者是否使用 IE
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
// 設定滾輪感度（數值越大，滾輪反應越不敏感，數值越小，滾輪反應越敏感）
var scrollSensitivitySetting = 30;
// 鎖定滑動的時間，單位為毫秒
var slideDurationSetting = 3000;
// 目前顯示的滑動區塊的索引號
var currentSlideNumber = 0;
var numberOfBackgrounds = document.querySelectorAll('.background').length;


// ------------- 決定滾輪滾動的方向 ------------- //
function parallaxScroll(evt) {
    // 當 zoomSvg 的縮放比例不等於 1 時，停止滾動
    if (scale !== 1) return;
    var delta;
    if (isFirefox) {
        // 為 Firefox 設定滾輪滾動方向
        delta = evt.detail * (-120);
    } else if (isIe) {
        // 為 IE 設定滾輪滾動方向
        delta = -evt.deltaY;
    } else {
        // 為其他瀏覽器設定滾輪滾動方向
        delta = evt.wheelDelta;
    }

    if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
            // 在這裡檢查 scale 的值
            if (scale !== 1) return;
            ticking = true;
            if (currentSlideNumber !== numberOfBackgrounds - 1) {
                currentSlideNumber++;
                nextItem();
            } else {
                handleScroll(evt);
            }
            slideDurationTimeout(slideDurationSetting);
        }

        if (delta >= scrollSensitivitySetting) {
            // 在這裡檢查 scale 的值
            if (scale !== 1) return;
            ticking = true;
            if (currentSlideNumber !== 0) {
                currentSlideNumber--;
            }
            previousItem();
            slideDurationTimeout(slideDurationSetting);
        }
    }
}

// ------------- 設定一段時間後解鎖滑動 ------------- //
function slideDurationTimeout(slideDuration) {
    setTimeout(function () {
        // 解鎖滾輪
        ticking = false;
    }, slideDuration);
}

// ------------- 添加事件監聽器 ------------- //
// 根據瀏覽器決定監聽哪一種事件
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
// 使用 lodash 的 throttle 函式來限制 parallaxScroll 函式的調用頻率
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- 處理滑動動作 ------------- //
function nextItem() {
    // 選擇前一個滑動區塊
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    // 讓前一個滑動區塊呈現向下滾動的動畫效果
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
    // 選擇當前的滑動區塊
    var $currentSlide = $(".background").eq(currentSlideNumber);
    // 讓當前的滑動區塊呈現向上滾動的動畫效果
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}
// 監聽 mousewheel 事件，當滾輪滾動時觸發 handleScroll 函式
document.addEventListener('mousewheel', handleScroll);
// 監聽 DOMMouseScroll 事件，當滾輪滾動時觸發 handleScroll 函式（針對 Firefox 瀏覽器）
document.addEventListener('DOMMouseScroll', handleScroll);


