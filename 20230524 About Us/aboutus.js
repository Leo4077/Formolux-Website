window.onload = function () {
    // 獲取所有的按鈕元素
    var buttons = document.querySelectorAll('.aboutus-btn');

    // 遍歷所有的按鈕
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        // 當滑鼠移入按鈕時，觸發此事件
        button.addEventListener('mouseover', function () {
            // 如果此按鈕並非當前已激活的按鈕，則改變背景色
            if (this.id !== activeButton) {
                this.style.backgroundColor = '#FFFCEB';
            }
        });

        // 當滑鼠移出按鈕時，觸發此事件
        button.addEventListener('mouseout', function () {
            // 如果此按鈕並非當前已激活的按鈕，則改變背景色回白色
            if (this.id !== activeButton) {
                this.style.backgroundColor = 'white';
            }
        });
    }

    // 預設第一個按鈕被點擊
    buttonClicked('btn1');
};


// 用於存儲當前已激活按鈕的ID
var activeButton = null;

// 當按鈕被點擊時執行此函數
function buttonClicked(id) {
    // 如果有已激活的按鈕，則將其背景色和文字顏色還原
    if (activeButton) {
        document.getElementById(activeButton).style.backgroundColor = 'white';
        document.getElementById(activeButton).firstElementChild.style.color = '#000537';
        document.getElementById(activeButton).firstElementChild.style.borderBottom = '2px solid transparent';
    }
    /* 按鈕顏色 */
    document.getElementById(id).style.backgroundColor = '#FFFCEB';
    /* 文字顏色 */
    var textElement = document.getElementById(id).firstElementChild;
    textElement.style.color = '#47BFD9';
    textElement.style.borderBottom = '2px solid #47BFD9';
    // 更新已激活的按鈕ID
    activeButton = id;
}
