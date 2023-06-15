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
var slideDurationSetting = 600;
// 目前顯示的滑動區塊的索引號
var currentSlideNumber = 0;

// ------------- 決定滾輪滾動的方向 ------------- //
function parallaxScroll(evt) {
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

    // 如果滾輪沒有被鎖定
    if (ticking != true) {

        // 滾輪向下滾動
        if (delta <= -scrollSensitivitySetting) {

            // 鎖定滾輪
            ticking = true;
            if (currentSlideNumber !== 1) {
                // 當前顯示的滑動區塊索引號加一
                currentSlideNumber++;
                // 顯示下一個滑動區塊
                nextItem();
            }
            // 鎖定滾輪一段時間
            slideDurationTimeout(slideDurationSetting);
        }

        // 滾輪向上滾動
        if (delta >= scrollSensitivitySetting) {

            // 鎖定滾輪
            ticking = true;
            if (currentSlideNumber !== 0) {
                // 當前顯示的滑動區塊索引號減一
                currentSlideNumber--;
            }
            // 顯示上一個滑動區塊
            previousItem();
            // 鎖定滾輪一段時間
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



