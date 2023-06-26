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
let startY = 0;

// > 將觸控事件的參數模擬為滾動參數  
window.addEventListener('touchstart', function (event) {
    startY = event.touches[0].clientY;
}, false);

window.addEventListener('touchend', function (event) {
    let endY = event.changedTouches[0].clientY;
    let deltaY = (startY - endY) / 100000;

    handleZoomScroll({ delta: deltaY });
}, false);

// ! 定義處理縮放滾動星星事件的函數
function handleZoomScroll(event) {
/*     event.preventDefault();
 */    const delta = event.delta || Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

    if (ticking) {  // 如果頁面滾動動畫正在播放，則不進行星星放大或縮小
        return;
    }

    // > 在縮放時，確保 p1 和 p2 完全移動回原位
    if (translateX !== 0 && delta > 0) {
        return;
    }

    // ?设备检测
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // > delta 前的數值影響每次滾動縮放的比例
    if (delta > 0) {
        scale = Math.max(1, scale - (isMobile ? 2 : 15) * delta);
    } else if (delta < 0 && scale < 250) {
        // > 当放大到指定比例后不再继续放大
        scale = Math.min(250, scale - (isMobile ? 2 : 15) * delta);
    }

    // > 取得視窗寬度
    var windowWidth = window.innerWidth;
    // > 根據視窗寬度設置 transformOrigin
    if (windowWidth < 577) {
        zoomSvg.style.transformOrigin = '58.59% 50%';  // -手機
    } else if (windowWidth < 1200) {
        zoomSvg.style.transformOrigin = '58.67% 50.3%';  // -平板
    } else if (windowWidth < 1500) {
        zoomSvg.style.transformOrigin = '58.71% 50%';  // -小電腦
    } else {
        zoomSvg.style.transformOrigin = '58.685% 50%';  // -電腦
    }
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
    var glassMorphism = document.querySelector('.glass-morphism');

    var style = window.getComputedStyle(whyChoose);
    var top = style.getPropertyValue('top');

    let isAtTop = whyChoose.scrollTop === 0;

    var translateY = whyChoose.style.transform === "translateY(100vh)";

    if (currentSlideNumber === 0 && delta > 0) {
        evt.preventDefault();
        return;
    }
    // > 在第二個 .background 上並且比例不為 1
    if (currentSlideNumber === 1 && scale !== 1) {

        // > 當縮放到一定程度時，開始滑動 <p> 標籤
        if (scale >= 220) {
            // > 每次滾動時，translateX 變化的固定量
            // ? 设备检测
            let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            // > 定義移動係數
            let translatePercentage = isMobile ? 1.5 : 10;
            let parentWidth = p1.parentElement.offsetWidth;
            const translateChange = (translatePercentage / 100) * parentWidth;
            // > 定義最大移動距離
            const maxTranslate = parentWidth;

            if (delta > 0) {
                console.log('Scrolling up...');
                console.log(top);
                console.log('isAtTop', isAtTop);

                translateX = Math.max(0, translateX - translateChange);
                p1.style.transform = `translateX(${translateX}px)`;
                p2.style.transform = `translateX(${-translateX}px)`;
/* 
                // ! 向上滾動
                // > 檢查是否已經滾動到頂部

                // ? 如果物件位於 top=100vh 的位置 
                if (parseInt(top, 10) === window.innerHeight) {
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
                    } */
                    // ? 如果物件不位於 top=100vh 的位置 且滾動到頂時
              /*   } else */ if (isAtTop && parseInt(top, 10) === 0) {
                    // > 將 top 樣式設為 "100"，將物件移動到下面
                    whyChoose.style.top = "100vh";
                    // > 將 position 設為 fixed
                    whyChoose.style.position = "fixed";
                } else {
                    // > .whyChoose 正常捲動
                    whyChoose.scrollTop -= evt.deltaY;
                }

            } else {
                // ! 向下滾動
                console.log('向下滾動')
                console.log(top);
                console.log('isAtTop', isAtTop);

                // -Math.min() 函數用於比較兩個值，並返回其中較小的值
                // -確保 translateX 不會超過指定的最大位移量，並達到限制元素位移的效果
                translateX = Math.min(maxTranslate, translateX + translateChange);
                // ? 當滾輪向下滾動（也就是 delta < 0），且 p1p2 還未達到最大位移量時
                if (delta < 0 && translateX < maxTranslate) {
                    // > 進行 p1p2 的位移
                    translateX = Math.min(maxTranslate, translateX + translateChange);
                    p1.style.transform = `translateX(${translateX}px)`;
                    p2.style.transform = `translateX(${-translateX}px)`;

                    // ? 當滾輪向下滾動（也就是 delta < 0），且 p1p2 已達到最大位移量時
                } else if (delta < 0 && translateX === maxTranslate) {
                    // > 將 top 樣式設為 "0"，將物件移動到頂部
                    whyChoose.style.top = "0";

                    // > 將 position 設為 absolute，以便元素能夠正常滾動
                    whyChoose.style.position = "absolute";

                    // > .whyChoose 正常捲動
                    whyChoose.scrollTop -= evt.deltaY;

                    console.log('whyChoose.scrollTop', whyChoose.scrollTop)
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





// > 初始化 whyChooseDelta
var whyChooseDelta = 0;

// > 監聽 wheel 事件來獲取滾動方向
window.addEventListener('wheel', function (evt) {
    whyChooseDelta = evt.wheelDelta || -evt.detail;
});

// > 玻璃擬態 滾動才顯示
window.addEventListener('scroll', function () {
    var whyChoose = document.querySelector('.why-choose');
    var glassMorphism = document.querySelector('.glass-morphism');

    console.log('偵測執行')
    console.log('whyChoose.scrollTop', whyChoose.scrollTop)
    console.log('window.pageYOffset', window.pageYOffset)

    if (window.pageYOffset >= 10) {
        glassMorphism.style.display = 'flex';
        console.log('玻璃擬態顯示Z')
    } else {
        glassMorphism.style.display = 'none';
        console.log('玻璃擬態不顯示')
        if (whyChooseDelta > 0) {
            console.log('whyChooseDelta>0')
            // > 將 top 樣式設為 "100"，將物件移動到下面
            whyChoose.style.top = "100vh";
            // > 將 position 設為 fixed
            whyChoose.style.position = "fixed";
        }
    }
});





// ! 為 container 物件移除預設的滾動效果
var bigContainer = document.querySelector('.big-container');
bigContainer.addEventListener('mousewheel', scrollEventHandler, { passive: false });
bigContainer.addEventListener('DOMMouseScroll', scrollEventHandler, { passive: false });





// ! 手機板
var touchStartY;
var touchEndY;

bigContainer.addEventListener('touchstart', function (event) {
    touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

bigContainer.addEventListener('touchmove', function (event) {
    touchEndY = event.changedTouches[0].clientY;
    var deltaY = touchStartY - touchEndY;
    var fakeEvent = { detail: {}, wheelDelta: 0, deltaY: 0 };

    // -觸發偽滾輪事件
    // -根據 deltaY 的大小來決定滾動的速度，而不僅僅是滾動的方向
    // -使滾動看起來更自然
    if (deltaY > 0) {
        fakeEvent.wheelDelta = -120 * deltaY;
        fakeEvent.deltaY = deltaY;
    } else {
        fakeEvent.wheelDelta = 120 * Math.abs(deltaY);
        fakeEvent.deltaY = deltaY;
    }
    scrollEventHandler(fakeEvent);
}, { passive: true });



