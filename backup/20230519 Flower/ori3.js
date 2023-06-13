let svgElement = document.querySelector('.flower');
/* 起始角度 */
let degree = -60;
let rotationInterval;


function clearRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
        /* 起始角度重整 */
        degree = -60;
    }
}
/* 監聽滑鼠懸停在 SVG 元素上的事件 */
svgElement.addEventListener('mouseover', function () {

    /* 清除旋轉並重設角度為起始角度 */
    clearRotation();

    /* 設定間隔定時器，以定期執行旋轉動畫 */
    rotationInterval = setInterval(function () {
        /* 將度數轉換為弧度 */
        const radians = degree * Math.PI / 180;
        const x1 = 0.5 + Math.cos(radians) * 0.5;
        const y1 = 0.5 + Math.sin(radians) * 0.5;
        const x2 = 0.5 - Math.cos(radians) * 0.5;
        const y2 = 0.5 - Math.sin(radians) * 0.5;

        document.getElementById('hoverGradient1').setAttribute('x1', x1);
        document.getElementById('hoverGradient1').setAttribute('y1', y1);
        document.getElementById('hoverGradient1').setAttribute('x2', x2);
        document.getElementById('hoverGradient1').setAttribute('y2', y2);

        degree = ((degree + 1) + 360) % 360;

        /* 只轉到60度 */
        if (degree === 60) {
            clearRotation();
        }
    }, 5);
});

/* 滑鼠離開時回歸到進來前的角度 */
svgElement.addEventListener('mouseout', function () {
    clearRotation();
    document.getElementById('hoverGradient1').setAttribute('x1', "0.5");
    document.getElementById('hoverGradient1').setAttribute('y1', "0");
    document.getElementById('hoverGradient1').setAttribute('x2', "0.5");
    document.getElementById('hoverGradient1').setAttribute('y2', "0");
});


