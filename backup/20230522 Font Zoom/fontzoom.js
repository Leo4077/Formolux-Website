// 選取具有 'zoom-text' 類別的元素，用於放大字體
const zoomText = document.querySelector('.zoom-text');
// 初始化字體大小為 2
let fontSize = 2;

function handleScroll(event) {
    // 阻止預設的滾動行為
    event.preventDefault();
    // 確定滾輪滾動的方向
    const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
    // 如果滾輪往下滾，將字體大小減 1
    if (delta < 0) {
        fontSize -= 3;
        // 如果滾輪往上滾，將字體大小加 1
    } else {
        fontSize += 3;
    }

    // 將新的字體大小套用到元素上
    zoomText.style.fontSize = `${fontSize}rem`; 
}
// 監聽 mousewheel 事件，當滾輪滾動時觸發 handleScroll 函式
document.addEventListener('mousewheel', handleScroll); 
// 監聽 DOMMouseScroll 事件，當滾輪滾動時觸發 handleScroll 函式（針對 Firefox 瀏覽器）
document.addEventListener('DOMMouseScroll', handleScroll); 
