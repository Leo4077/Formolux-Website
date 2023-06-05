/* 全頁滾動 */
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30;
var slideDurationSetting = 1500;
var currentSlideNumber = 0;
var numberOfBackgrounds = document.querySelectorAll('.background').length;

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

function slideDurationTimeout(slideDuration) {
    setTimeout(function () {
        ticking = false;
    }, slideDuration);
}

function nextItem() {
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
    var $currentSlide = $(".background").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}

/* 滾動放大 */
const zoomSvg = document.querySelector('.zoom-svg');
let scale = 1;

function handleZoomScroll(event) {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    scale = Math.max(1, scale - 0.1 * delta);
    zoomSvg.style.transformOrigin = 'center center'; // 這裡設置 transformOrigin
    zoomSvg.style.transform = `scale(${scale})`;
}

function scrollEventHandler(evt) {
    var delta = evt.wheelDelta || -evt.detail;
    if (currentSlideNumber === 0 && delta > 0) {
        evt.preventDefault();
        return;
    }
    if (currentSlideNumber === 1 && scale !== 1) {
        // 在第二個 .background 上並且比例不為 1
        handleZoomScroll(evt);
        evt.stopPropagation();  // 阻止事件的進一步傳播
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

document.addEventListener('mousewheel', scrollEventHandler);
document.addEventListener('DOMMouseScroll', scrollEventHandler);
