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
let vh;
let start;
let end;

// 創建一個函數來計算和更新 start 和 end 的值
function calculateVH() {
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    start = 0.324 * vh;  // 將 32.4vh 轉換為像素
    end = 1.66 * vh;  // 將 166vh 轉換為像素
}

// 現在，我們首先調用一次 calculateVH 函數來進行初始計算
calculateVH();

// 定義一個函數名為 scrollAppear
function scrollAppear() {
    let items = document.querySelectorAll('.homepage-introimage-content');

    items.forEach(function (item) {
        if (window.scrollY < start) {
            item.classList.remove('showIntrocontent');
            item.classList.add('hideIntrocontent');
        }
        else if (end >= window.scrollY && window.scrollY >= start) {
            item.classList.add('showIntrocontent');
            item.classList.remove('hideIntrocontent');
        }
        else if (window.scrollY > end) {
            item.classList.remove('showIntrocontent');
            item.classList.add('hideIntrocontent');
        }
    });
}

// 當頁面滾動時，執行 scrollAppear 函數，實現視窗滾動時的元素顯示和隱藏效果
window.addEventListener('scroll', scrollAppear);
// 最後，添加一個監聽器來監聽窗口大小的改變。當窗口大小改變時，重新計算 start 和 end 的值
window.addEventListener('resize', calculateVH);



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
        `<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="36.5" transform="rotate(-180 37.5 37.5)" fill="#FFFCEB"
        fill-opacity="0.5" stroke="white" stroke-width="2" />
    <path d="M43 51L28 36.9882L43 23.7407" stroke="white" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
// 右按鈕
        `<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            nav: true,
            loop: true,
        },
        767: {
            items: 1.5,
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