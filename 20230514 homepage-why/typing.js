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

    /* 子標題的打字效果 */
    /* function subType() {
                    subString = strings[lineCount - 1];
                    subEl.html(subString.substr(0, x++) + '<span class="cursor blink">|</span>');
                    if (x < subString.length + 1) {
                        setTimeout(subType, 100);
                    }
                } */

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