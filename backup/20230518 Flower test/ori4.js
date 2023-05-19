let degree = 0;
setInterval(function(){
    document.getElementById('grad1').setAttribute('gradientTransform', 'rotate(' + degree + ', 0.5, 0.5)');
    degree = (degree + 1) % 360;
}, 20);
