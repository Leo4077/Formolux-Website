//表單區

/*點選textarea時placeholder自動消失*/
window.onload = function(){
    var messageBox = document.getElementById('message');

    /*點選時自動消失*/
    messageBox.onfocus = function() {
        this.setAttribute('placeholder', '');
    }
    /*沒點選時返回原狀*/
    messageBox.onblur = function() {
        if(this.value === '') {
            this.setAttribute('placeholder', 'If you have any question, please don\'t hesitate to let us know. Thanks!');
        }
    }
}

// 花花動態

let rotationInterval;

function clearRotation() {
    clearInterval(rotationInterval);
}

// FB
const svgElement1 = document.querySelector('.flower-FB');
svgElement1.addEventListener('mouseover', function () {
    clearRotation();
    let degreeFB = -65;
    rotationInterval = setInterval(function () {
        const radians = degreeFB * Math.PI / 180;
        const x1 = 0.1 + Math.cos(radians) * 0.2;
        const y1 = 0.5 + Math.sin(radians) * 0.8;
        const x2 = 0.5 - Math.cos(radians) * 0.5;
        const y2 = 0.5 - Math.sin(radians) * 0.2;

        document.getElementById('hoverGradient1').setAttribute('x1', x1);
        document.getElementById('hoverGradient1').setAttribute('y1', y1);
        document.getElementById('hoverGradient1').setAttribute('x2', x2);
        document.getElementById('hoverGradient1').setAttribute('y2', y2);

        degreeFB = ((degreeFB + 1) + 360) % 360;

        if (degreeFB === 60) { /*轉到60度停止*/ 
            clearRotation();
        }
    }, 10);
});

/* 滑鼠離開時回歸到進來前的角度 */
const svgElement11 = document.querySelector('.flower-FB');
svgElement11.addEventListener('mouseout', function () {
    clearRotation();
    document.getElementById('hoverGradient1').setAttribute('x1', "0.5");
    document.getElementById('hoverGradient1').setAttribute('y1', "0");
    document.getElementById('hoverGradient1').setAttribute('x2', "0.5");
    document.getElementById('hoverGradient1').setAttribute('y2', "0");
});


// IG
const svgElement2 = document.querySelector('.flower-IG');

svgElement2.addEventListener('mouseover', function () {
    clearRotation();
    let degreeIG = -65;
    rotationInterval = setInterval(function () {
        const radians = degreeIG * Math.PI / 180;
        const x1 = 0.1 + Math.cos(radians) * 0.2;
        const y1 = 0.5 + Math.sin(radians) * 0.8;
        const x2 = 0.5 - Math.cos(radians) * 0.5;
        const y2 = 0.5 - Math.sin(radians) * 0.2;

        document.getElementById('hoverGradient2').setAttribute('x1', x1);
        document.getElementById('hoverGradient2').setAttribute('y1', y1);
        document.getElementById('hoverGradient2').setAttribute('x2', x2);
        document.getElementById('hoverGradient2').setAttribute('y2', y2);

        degreeIG = ((degreeIG + 1) + 360) % 360;

        if (degreeIG === 60) {
            clearRotation();
        }
    }, 10);
});
/* 滑鼠離開時回歸到進來前的角度 */
const svgElement22 = document.querySelector('.flower-IG');
svgElement22.addEventListener('mouseout', function () {
    clearRotation();
    document.getElementById('hoverGradient2').setAttribute('x1', "0.5");
    document.getElementById('hoverGradient2').setAttribute('y1', "0");
    document.getElementById('hoverGradient2').setAttribute('x2', "0.5");
    document.getElementById('hoverGradient2').setAttribute('y2', "0");
});



// Email
const svgElement3 = document.querySelector('.flower-Email');

svgElement3.addEventListener('mouseover', function () {
    clearRotation();
    let degreeEmail = -65;
    rotationInterval = setInterval(function () {
        const radians = degreeEmail * Math.PI / 180;
        const x1 = 0.1 + Math.cos(radians) * 0.2;
        const y1 = 0.5 + Math.sin(radians) * 0.8;
        const x2 = 0.5 - Math.cos(radians) * 0.5;
        const y2 = 0.5 - Math.sin(radians) * 0.5;

        document.getElementById('hoverGradient3').setAttribute('x1', x1);
        document.getElementById('hoverGradient3').setAttribute('y1', y1);
        document.getElementById('hoverGradient3').setAttribute('x2', x2);
        document.getElementById('hoverGradient3').setAttribute('y2', y2);

        degreeEmail = ((degreeEmail + 1) + 360) % 360;

        if (degreeEmail === 60) {
            clearRotation();
        }
    }, 10);
});
/* 滑鼠離開時回歸到進來前的角度 */
const svgElement33 = document.querySelector('.flower-Email');
svgElement33.addEventListener('mouseout', function () {
    clearRotation();
    document.getElementById('hoverGradient3').setAttribute('x1', "0.5");
    document.getElementById('hoverGradient3').setAttribute('y1', "0");
    document.getElementById('hoverGradient3').setAttribute('x2', "0.5");
    document.getElementById('hoverGradient3').setAttribute('y2', "0");
});


//提交表單出現的動作


document.addEventListener('DOMContentLoaded', function() {
    // 獲取表單和相關元素
    var form = document.querySelector('form');
    var submitBtn = document.getElementById('taiwan-travelbtn');
    var overlay = document.querySelector('.overlay');
    var messageBox = document.querySelector('.message-box');

    // 當表單提交時觸發事件處理程序
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表單默認提交行為

        // 顯示遮罩層和訊息框
        overlay.style.display = 'block';
        messageBox.style.display = 'block';

        // 顯示填寫成功彈出視窗
        messageBox.style.display = 'flex';

        // 添加點擊事件處理程序，用於關閉訊息框和遮罩層
        document.addEventListener('click', closeMessageBox);

        // 模擬提交過程
        setTimeout(function() {
            closeMessageBox();
            // 重置表單
            form.reset();
        }, 150000);
    });

    // 關閉訊息框和遮罩層的函數
    function closeMessageBox() {
        // 隱藏遮罩層和訊息框
        overlay.style.display = 'none';
        messageBox.style.display = 'none';

        // 移除點擊事件處理程序
        document.removeEventListener('click', closeMessageBox);
    }
});




// > 玻璃擬態 下滾才出現
window.addEventListener('scroll', function () {
    var header1 = document.querySelector('.header1');
    var contactUs1 = document.querySelector('#contactUs1');
    var glassMorphism = document.querySelector('.glass-morphism');

    var headerTop = header1.getBoundingClientRect().top;
    var contactUs1Top = contactUs1.getBoundingClientRect().top;

    if (headerTop >= contactUs1Top && window.pageYOffset > 0) {
        glassMorphism.style.display = 'flex';
        console.log('玻璃擬態顯示');
    } else {
        glassMorphism.style.display = 'none';
        console.log('玻璃擬態不顯示');
    }
});
