// ! 宣告一些變數，包括瀏覽器檢測，滾動靈敏度設定，當前背景圖片的編號，以及背景圖片的總數量
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30;
var slideDurationSetting = 1500;
var currentSlideNumber = 0;
var numberOfBackgrounds = document.querySelectorAll('.background').length;

// ! 定義處理視差滾動的函數
function parallaxScroll(evt) {
    var delta;
    // > 判斷瀏覽器類型，獲取滾動距離值
    if (isFirefox) {
        delta = evt.detail * (-120);
    } else if (isIe) {
        delta = -evt.deltaY;
    } else {
        delta = evt.wheelDelta;
    }

    // >檢查滾動的方向與距離，並移動背景
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

// ! 定義滾動完成後暫停的時間
function slideDurationTimeout(slideDuration) {
    setTimeout(function () {
        ticking = false;
    }, slideDuration);
}

// ! 定義滾動到下一個背景的函數
function nextItem() {
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

// ! 定義滾動到上一個背景的函數
function previousItem() {
    var $currentSlide = $(".background").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}

// ! 定義縮放滾動及移動的物件
// > 指定縮放的物件
const zoomSvg = document.querySelector('.zoom-svg');
// > 初始化縮放比例為 1
let scale = 1;

// > 指定移動的物件
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
// > 初始化 X 和 Y 軸位移為 0
let translateX = 0;
let translateY = 0;
// > 初始階段設定為位移
let stage = 'translate';

// ! 定義處理縮放滾動星星事件的函數
function handleZoomScroll(event) {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

    // > 在縮放時，確保 p1 和 p2 完全移動回原位
    if (translateX !== 0 && delta > 0) {
        return;
    }


    // > delta 前的數值影響每次滾動縮放的比例
    if (delta > 0) {
        scale = Math.max(1, scale - 8 * delta);
    } else if (delta < 0 && scale < 150) {
        // > 当放大到指定比例后不再继续放大
        scale = Math.min(150, scale - 8 * delta);
    }

    // > 透過設置 transformOrigin調整中心點
    zoomSvg.style.transformOrigin = '58.685% 50%';
    zoomSvg.style.transform = `scale(${scale})`;

    // > 改變 content-wrapper7 的 z-index 值
    const contentWrapper7 = document.getElementById('content-wrapper7');
    if (scale !== 1) {
        // > 當比例不為 1，也就是星星開始放大時
        contentWrapper7.style.zIndex = 100;
    } else {
        // > 當星星比例為 1，回復原本 z-index 的值
        contentWrapper7.style.zIndex = 60;
    }
}


// ! 定義處理滾動事件的函數
function scrollEventHandler(evt) {
    var delta = evt.wheelDelta || -evt.detail;
    var whyChoose = document.querySelector('.why-choose');
    var isAt100vh = whyChoose.style.top === "100vh";
    var isAt0vh = whyChoose.style.top === "0vh";
    var translateY = whyChoose.style.transform === "translateY(100vh)";


    if (currentSlideNumber === 0 && delta > 0) {
        evt.preventDefault();
        return;
    }
    // > 在第二個 .background 上並且比例不為 1
    if (currentSlideNumber === 1 && scale !== 1) {

        // > 當縮放到一定程度時，開始滑動 <p> 標籤
        if (scale >= 120) {
            // > 每次滾動時，translateX 變化的固定量
            let translatePercentage = 10;
            let parentWidth = p1.parentElement.offsetWidth;
            const translateChange = (translatePercentage / 100) * parentWidth;
            // > 定義最大移動距離
            const maxTranslate = parentWidth;


            if (delta > 0) {

                console.log('Scrolling up...');

                // ! 向上滾動
                let whyChoose = document.querySelector('.why-choose');
                // > 檢查是否已經滾動到頂部
                let isAtTop = whyChoose.scrollTop === 0;

                // ?
                console.log('isAtTop:', isAtTop);  // 將isAtTop的值輸出到控制台

                // > 檢查是否已經移到 top=100vh 的位置
                let isAt100vh = whyChoose.style.top === "100vh";

                /// ?
                console.log('isAt100vh:', isAt100vh);  // 將isAt100vh的值輸出到控制台

                let isAt0vh = whyChoose.style.top === "0vh";


                // ? 如果滾動到頂部，且物件位於 top=100vh 的位置 
                if (isAtTop && isAt100vh) {
                    // ? p1p2 尚未達到最大位移量時
                    if (translateX < maxTranslate) {
                        // > p1p2正常位移
                        translateX = Math.max(0, translateX - translateChange);
                        p1.style.transform = `translateX(${translateX}px)`;
                        p2.style.transform = `translateX(${-translateX}px)`;
                    } else {
                        // ? p1p2 達到最大位移量時
                        // > p1p2正常位移
                        translateX = Math.max(0, translateX - translateChange);
                        p1.style.transform = `translateX(${translateX}px)`;
                        p2.style.transform = `translateX(${-translateX}px)`;
                    }
                } else if (isAtTop && isAt0vh) {

                    console.log('This condition is triggered!');


                    // ? 滾動到頂部，但尚未移動到 top=100vh 的位置
                    // > 將 top 樣式設為 "100"，將物件移動到下面
                    whyChoose.style.top = "100vh";
                    // > 將 position 設為 fixed
                    whyChoose.style.position = "fixed";
                    // !
                } else {
                    // ? 向上滾動，但未滿足以上兩個條件
                    if (whyChoose.style.top !== "0") {
                        whyChoose.style.top = "0";
                    }
                    // > .whyChoose 正常捲動
                    whyChoose.scrollTop -= evt.deltaY;
                }
            } else {
                // ! 向下滾動
                // ? p1p2 尚未達到最大位移量時
                // -Math.min() 函數用於比較兩個值，並返回其中較小的值
                // -確保 translateX 不會超過指定的最大位移量，並達到限制元素位移的效果
                translateX = Math.min(maxTranslate, translateX + translateChange);
                // > 當滾輪向下滾動（也就是 delta < 0），且 p1p2 還未達到最大位移量時
                if (delta < 0 && translateX < maxTranslate) {
                    // > 進行 p1p2 的位移
                    translateX = Math.min(maxTranslate, translateX + translateChange);
                    p1.style.transform = `translateX(${translateX}px)`;
                    p2.style.transform = `translateX(${-translateX}px)`;

                    // > 當滾輪向下滾動（也就是 delta < 0），且 p1p2 已達到最大位移量時
                } else if (delta < 0 && translateX === maxTranslate) {
                    // > 將 top 樣式設為 "0"，將物件移動到頂部
                    whyChoose.style.top = "0";

                    // > 將 position 設為 absolute，以便元素能夠正常滾動
                    whyChoose.style.position = "absolute";

                    // > .whyChoose 正常捲動
                    whyChoose.scrollTop -= evt.deltaY;
                }
                // > 其他的情況，比如滾輪向上滾動或者 scale < 120
                // > p1p2正常位移
                p1.style.transform = `translateX(${translateX}px)`;
                p2.style.transform = `translateX(${-translateX}px)`;
            }
        }

        // > 確保在 p1 和 p2 完全移動回原位前不要縮放
        if (translateX === 0 || delta < 0) {
            handleZoomScroll(evt);
        }

        // > 阻止事件的進一步傳播
        evt.stopPropagation();
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




// ! 為 window 物件添加滾動事件處理器
var bigContainer = document.querySelector('.big-container');
bigContainer.addEventListener('mousewheel', scrollEventHandler, { passive: false });
bigContainer.addEventListener('DOMMouseScroll', scrollEventHandler, { passive: false });

