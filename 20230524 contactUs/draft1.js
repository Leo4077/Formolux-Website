// let svgElement = document.querySelector('.flower');
// /* 起始角度 */
// let degree = -60;
// let rotationInterval;


// function clearRotation() {
//     if (rotationInterval) {
//         clearInterval(rotationInterval);
//         rotationInterval = null;
//         /* 起始角度重整 */
//         degree = -60;
//     }
// }
// /* 監聽滑鼠懸停在 SVG 元素上的事件 */
// svgElement.addEventListener('mouseover', function () {

//     /* 清除旋轉並重設角度為起始角度 */
//     clearRotation();

//     /* 設定間隔定時器，以定期執行旋轉動畫 */
//     rotationInterval = setInterval(function () {
//         /* 將度數轉換為弧度 */
//         const radians = degree * Math.PI / 180;
//         const x1 = 0.5 + Math.cos(radians) * 0.5;
//         const y1 = 0.5 + Math.sin(radians) * 0.5;
//         const x2 = 0.5 - Math.cos(radians) * 0.5;
//         const y2 = 0.5 - Math.sin(radians) * 0.5;

//         document.getElementById('hoverGradient1').setAttribute('x1', x1);
//         document.getElementById('hoverGradient1').setAttribute('y1', y1);
//         document.getElementById('hoverGradient1').setAttribute('x2', x2);
//         document.getElementById('hoverGradient1').setAttribute('y2', y2);

//         degree = ((degree + 1) + 360) % 360;

//         /* 只轉到60度 */
//         if (degree === 60) {
//             clearRotation();
//         }
//     }, 5);
// });

// /* 滑鼠離開時回歸到進來前的角度 */
// svgElement.addEventListener('mouseout', function () {
//     clearRotation();
//     document.getElementById('hoverGradient1').setAttribute('x1', "0.5");
//     document.getElementById('hoverGradient1').setAttribute('y1', "0");
//     document.getElementById('hoverGradient1').setAttribute('x2', "0.5");
//     document.getElementById('hoverGradient1').setAttribute('y2', "0");
// });

let parentElement = document.querySelector('.flowersvg');
let svgElementFB = parentElement.querySelector('#FB');
let svgElementIG = parentElement.querySelector('#IG');
let svgElementEmail = parentElement.querySelector('#Email');
let degree = -60;
let rotationInterval;
let activeElement = null;

function clearRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
        degree = -60;
    }
}

parentElement.addEventListener('mouseover', function(event) {
    const targetElement = event.target;

    if (targetElement === svgElementFB || targetElement === svgElementIG || targetElement === svgElementEmail) {
        // 只有當前被懸停的 SVG 元素才執行動畫效果
        if (targetElement !== activeElement) {
            // 清除先前的動畫效果
            clearRotation();

            // 設定當前被懸停的 SVG 元素為活動元素
            activeElement = targetElement;

            // 執行動畫效果
            rotationInterval = setInterval(function() {
                const radians = degree * Math.PI / 180;
                const x1 = 0.5 + Math.cos(radians) * 0.5;
                const y1 = 0.5 + Math.sin(radians) * 0.5;
                const x2 = 0.5 - Math.cos(radians) * 0.5;
                const y2 = 0.5 - Math.sin(radians) * 0.5;

                activeElement.querySelector('#hoverGradient1').setAttribute('x1', x1);
                activeElement.querySelector('#hoverGradient1').setAttribute('y1', y1);
                activeElement.querySelector('#hoverGradient1').setAttribute('x2', x2);
                activeElement.querySelector('#hoverGradient1').setAttribute('y2', y2);

                degree = ((degree + 1) + 360) % 360;

                if (degree === 60) {
                    clearRotation();
                }
            }, 5);
        }
    }
});

parentElement.addEventListener('mouseout', function(event) {
    const targetElement = event.target;

    if (targetElement === activeElement) {
        // 清除動畫效果
        clearRotation();

        // 重置活動元素和樣式
        activeElement.querySelector('#hoverGradient1').setAttribute('x1', '0.5');
        activeElement.querySelector('#hoverGradient1').setAttribute('y1', '0');
        activeElement.querySelector('#hoverGradient1').setAttribute('x2', '0.5');
        activeElement.querySelector('#hoverGradient1').setAttribute('y2', '0');
        activeElement = null;
    }
});

        




