// 選取具有 'zoom-svg' 類別的元素，用於放大縮小SVG
const zoomSvg = document.querySelector('.zoom-svg');
// 選取兩個 <p> 標籤
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

// 初始化縮放比例為 1
let scale = 1;
// 初始化 X 和 Y 軸位移為 0
let translateX = 0;
let translateY = 0;
// 初始階段設定為位移
let stage = 'translate';

function handleScroll(event) {
    // 阻止預設的滾動行為
    event.preventDefault();
    // 確定滾輪滾動的方向
    const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
    
    // 依據現階段決定要進行的動作
    if (stage === 'translate') {
        translateX += 10 * delta;
        translateY += 10 * delta;
        // 如果已經移動到指定位置，則進入縮放階段
        if (Math.abs(translateX) >= 100 && Math.abs(translateY) >= 100) {
            stage = 'scale';
        } else if (translateX <= 0 && translateY <= 0) {
            // 如果已經回到初始位置，防止過度滾動
            translateX = 0;
            translateY = 0;
            delta > 0 && (stage = 'scale');
        }
    } else if (stage === 'scale') {
        // 當滾輪滾動時，會增加或減少縮放比例（scale）。具體增加或減少的數值為 x * delta
        scale = Math.max(1, scale + 10 * delta);
        if (scale <= 1) {
            // 如果已經縮放到最小尺寸，防止過度滾動
            scale = 1;
            delta < 0 && (stage = 'translate');
        } else if (scale >= 600) { // 當縮放到一定程度時，開始滑動 <p> 標籤
            p1.style.transform = `translateX(${translateX + 10 * delta}px)`;
            p2.style.transform = `translateX(${translateX - 10 * delta}px)`;
        }
    }

    // 將新的縮放比例和位移套用到元素上
    zoomSvg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`; 
}

// 監聽 mousewheel 事件，當滾輪滾動時觸發 handleScroll 函式
document.addEventListener('mousewheel', handleScroll); 
// 監聽 DOMMouseScroll 事件，當滾輪滾動時觸發 handleScroll 函式（針對 Firefox 瀏覽器）
document.addEventListener('DOMMouseScroll', handleScroll);


