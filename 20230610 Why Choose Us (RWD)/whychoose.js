/* 頁面刷新後自動回到頂部 */
// 當頁面準備卸載時（即刷新或關閉頁面），執行此函數
/* window.onbeforeunload = function () {
    // 將頁面滾動的位置設置為0（頂部），IE 瀏覽器對此的處理方式
    document.documentElement.scrollTop = 0;
    // 將頁面滾動的位置設置為0（頂部），非 IE 瀏覽器對此的處理方式
    document.body.scrollTop = 0;
}
 */

/* 打字機效果 */
$(document).ready(function () {
    $('.sub').hide();

    var x = null;
    var headEl = $('#head');
    var subEl = $('#sub');
    var string = '';
    var subString = '';
    var strings = ['Luxury', 'Sparkle', 'Relax'];
    var stringLength = 0;
    var lineCount = 0;

    function typeHeader() {
        x = 0;
        string = strings[lineCount];
        stringLength = string.length;

        if (lineCount < strings.length) {
            type();
            lineCount = lineCount + 1
        }
    }

    function type() {
        headEl.html(string.substr(0, x++) + '<span class="cursor blink">|</span>');
        if (x < string.length + 1) {
            /* 打字速度 */
            setTimeout(type, 300);
        } else if (lineCount < strings.length) {
            /* 打字後延遲擦除時間 */
            setTimeout(erase, 800);
            /* erase(); */
        }
        /* 這段代表最後會在子標題重複一次最後一段文字 */
        /* else if (lineCount === strings.length) {
            $('.sub').show();
            x = 0;
            subType();
        } */

        // 檢查是否已經到達了strings陣列的末尾
        // 如果已經到達了末尾，則需要將lineCount重置為0
        // 讓程式從陣列的第一個元素重新開始
        if (lineCount === strings.length) {
            lineCount = 0;
        }

    }
    function erase() {
        content = headEl.html();
        headEl.html(content.substring(0, stringLength--) + '<span class="cursor blink">|</span>');
        if (stringLength >= 0) {
            /* 刪除字的速度 */
            setTimeout(erase, 200);
        } else if (lineCount < strings.length) {
            typeHeader();
        }
    }
    typeHeader();
});




/* 滾動顯示效果 */
// 定義每一個 intro 與 content 的對應
const items = [
    { intro: 'intro-1', content: 'content-A' },
    { intro: 'intro-2', content: 'content-B' },
    { intro: 'intro-3', content: 'content-C' }
];

// 定義不同螢幕寬度對應的閾值
const thresholds = {
    mobile: [0, 0.3, 1],  // 手機
    tablet: [0, 1],  // 平板
    desktop: [0, 0.3, 0.5, 1]  // 電腦
};

// 定義觀察者的選項
let observerOptions = {
    root: null,  // 觀察的根元素，null 表示為 viewport
    rootMargin: '0px',  // 根元素的邊距，用來調整觀察範圍
    threshold: thresholds.desktop  // 預設為電腦的閾值
};

let tabletMode = false;

// 建立 Intersection Observer
let observer = new IntersectionObserver((entries, observer) => {
    // 迴圈處理每一個觀察的元素(entry)
    entries.forEach(entry => {
        // 迴圈處理每一個 intro 與 content 的對應
        items.forEach(item => {
            // 取得對應的 intro 元素與 content 元素
            const intro = document.querySelector(`.${item.intro}`);
            const content = document.querySelector(`.${item.content}`);

            // 如果找不到元素，則跳過此次迴圈
            if (!intro || !content) {
                return;
            }

            // 如果 entry 的目標與 intro 元素相同
            if (entry.target === intro) {
                // 平板模式下，元素一直保持顯示狀態
                if (tabletMode) {
                    content.classList.add('showIntrocontent');
                    content.classList.remove('hideIntrocontent');
                } else {
                    // 當元素至少進入視窗50%時
                    if (entry.intersectionRatio >= 0.5) {
                        content.classList.add('showIntrocontent');
                        content.classList.remove('hideIntrocontent');
                    }
                    // 當元素在視窗中少於20%時（也就是已經離開視窗80%時）
                    else if (entry.intersectionRatio < 0.5) {
                        content.classList.remove('showIntrocontent');
                        content.classList.add('hideIntrocontent');
                    }
                }
            }
        });
    });
}, observerOptions);

// 將每一個 intro 元素加入到觀察者
items.forEach(item => {
    const intro = document.querySelector(`.${item.intro}`);
    if (intro) {
        observer.observe(intro);
    }
});

// 監聽窗口大小變化
window.addEventListener('resize', () => {
    // 取得窗口的寬度
    const width = window.innerWidth;

    // 先清除原本 Observer 監控的元素
    items.forEach(item => {
        const intro = document.querySelector(`.${item.intro}`);
        if (intro) {
            observer.unobserve(intro);
        }
    });

    // 根據窗口的寬度設定對應的閾值
    if (width <= 577) {  // 手機
        observerOptions.threshold = thresholds.mobile;
        tabletMode = false;
    }
    else if (width <= 1200) {  // 平板
        observerOptions.threshold = thresholds.tablet;
        tabletMode = true;
    }
    else {  // 電腦
        observerOptions.threshold = thresholds.desktop;
        tabletMode = false;
    }

    // 更新觀察者的選項
    observer = new IntersectionObserver((entries, observer) => {
        // 迴圈處理每一個觀察的元素(entry)
        entries.forEach(entry => {
            // 迴圈處理每一個 intro 與 content 的對應
            items.forEach(item => {
                // 取得對應的 intro 元素與 content 元素
                const intro = document.querySelector(`.${item.intro}`);
                const content = document.querySelector(`.${item.content}`);

                // 如果找不到元素，則跳過此次迴圈
                if (!intro || !content) {
                    return;
                }

                // 如果 entry 的目標與 intro 元素相同
                if (entry.target === intro) {
                    // 平板模式下，元素一直保持顯示狀態
                    if (tabletMode) {
                        content.classList.add('showIntrocontent');
                        content.classList.remove('hideIntrocontent');
                    } else {
                        // 當元素至少進入視窗50%時
                        if (entry.intersectionRatio >= 0.5) {
                            content.classList.add('showIntrocontent');
                            content.classList.remove('hideIntrocontent');
                        }
                        // 當元素在視窗中少於20%時（也就是已經離開視窗80%時）
                        else if (entry.intersectionRatio < 0.5) {
                            content.classList.remove('showIntrocontent');
                            content.classList.add('hideIntrocontent');
                        }
                    }
                }
            });
        });
    }, observerOptions);


    // 將每一個 intro 元素加入到新的觀察者
    items.forEach(item => {
        const intro = document.querySelector(`.${item.intro}`);
        if (intro) {
            observer.observe(intro);
        }
    });
});











/* Owl Carousel */
$('.carousel-main').owlCarousel({
    items: 3.5,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
        // 使用SVG作為導航按鈕
        // 左按鈕
        `<svg id="svg-left" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="36.5" transform="rotate(-180 37.5 37.5)" fill="#FFFCEB"
        fill-opacity="0.5" stroke="white" stroke-width="2" />
    <path d="M43 51L28 36.9882L43 23.7407" stroke="white" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
        // 右按鈕
        `<svg id="svg-right" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="36.5" fill="#FFFCEB" fill-opacity="0.5" stroke="white"
        stroke-width="2" />
    <path d="M32 24L47 38.0118L32 51.2593" stroke="white" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
</svg>`
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1.5,
            nav: false,
            loop: true,
        },
        767: {
            items: 3.5,
            nav: true,
            loop: true,
        },
        1200: {
            items: 3.5,
            nav: true,
            loop: true,
        }
    }
})