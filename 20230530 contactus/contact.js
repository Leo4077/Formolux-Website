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
    let degreeFB = 0;
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

        if (degreeFB === 70) { /*轉到60度停止*/ 
            clearRotation();
        }
    }, 5);
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
    let degreeIG = 0;
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
    }, 5);
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
    let degreeEmail = 0;
    rotationInterval = setInterval(function () {
        const radians = degreeEmail * Math.PI / 180;
        const x1 = 0.1 + Math.cos(radians) * 0.2;
        const y1 = 0.5 + Math.sin(radians) * 0.8;
        const x2 = 0.5 - Math.cos(radians) * 0.5;
        const y2 = 0.5 - Math.sin(radians) * 0.2;

        document.getElementById('hoverGradient3').setAttribute('x1', x1);
        document.getElementById('hoverGradient3').setAttribute('y1', y1);
        document.getElementById('hoverGradient3').setAttribute('x2', x2);
        document.getElementById('hoverGradient3').setAttribute('y2', y2);

        degreeEmail = ((degreeEmail + 1) + 360) % 360;

        if (degreeEmail === 60) {
            clearRotation();
        }
    }, 5);
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



        




