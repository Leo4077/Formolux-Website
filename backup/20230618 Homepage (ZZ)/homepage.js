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
    var thirdBackground = document.querySelector('.why-choose');
    var isAtTop = thirdBackground.scrollTop === 0;
    var translateY100vh = thirdBackground.style.transform === "translateY(100vh)";
    var translateY0vh = thirdBackground.style.transform === "translateY(0vh)";

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
                // 向上滾動
                if (translateY100vh && translateX < maxTranslate) {
                    // p1p2正常位移
                    translateX = Math.max(0, translateX - translateChange);
                    p1.style.transform = `translateX(${translateX}px)`;
                    p2.style.transform = `translateX(${-translateX}px)`;
                } else if (translateY100vh && translateX >= maxTranslate) {
                    // p1p2正常位移
                    translateX = Math.max(0, translateX - translateChange);
                    p1.style.transform = `translateX(${translateX}px)`;
                    p2.style.transform = `translateX(${-translateX}px)`;
                } else if (isAtTop && !translateY100vh) {
                    // 物件位於頂部，但尚未滾動到 translateY(100vh) 的位置
                    // 將 transform 設為 "translateY(100vh)"，將物件移動到下面
                    thirdBackground.style.transform = "translateY(100vh)";
                } else {
                    if (!translateY0vh) {
                        thirdBackground.style.transform = "translateY(0vh)";
                    }
                    thirdBackground.scrollTop -= evt.deltaY;
                }
            } else {
                // 向下滾動
                if (translateY100vh && translateX < maxTranslate) {
                    translateX = Math.min(maxTranslate, translateX + translateChange);
                    p1.style.transform = `translateX(${translateX}px)`;
                    p2.style.transform = `translateX(${-translateX}px)`;
                } else if (translateY100vh && translateX >= maxTranslate) {
                    thirdBackground.style.transform = "translateY(0vh)";
                    thirdBackground.scrollTop -= evt.deltaY;
                }
            }
        }

        if (translateX === 0 || delta < 0) {
            handleZoomScroll(evt);
        }

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

function scrollWhyChoose(evt) {
    var delta = evt.wheelDelta || -evt.detail;
    var thirdBackground = document.querySelector('.why-choose');
    var translateY0vh = thirdBackground.style.transform === "translateY(0vh)";

    if (translateY0vh) {
        if (delta > 0) {
            thirdBackground.style.transform = "translateY(100vh)";
        } else {
            thirdBackground.scrollTop -= evt.deltaY;
        }
    } else {
        thirdBackground.style.transform = "translateY(0vh)";
    }

    evt.stopPropagation();
}


/* // ! 為 window 物件添加滾動事件處理器
document.addEventListener('mousewheel', scrollEventHandler, { passive: false });
document.addEventListener('DOMMouseScroll', scrollEventHandler, { passive: false }); */
var elements = document.querySelectorAll('.background');
elements.forEach(function (element) {
    element.addEventListener('mousewheel', scrollEventHandler, { passive: false });
    element.addEventListener('DOMMouseScroll', scrollEventHandler, { passive: false });
});

var whyChooseElement = document.querySelector('.why-choose');
whyChooseElement.addEventListener('mousewheel', scrollWhyChoose, { passive: false });
whyChooseElement.addEventListener('DOMMouseScroll', scrollWhyChoose, { passive: false });

