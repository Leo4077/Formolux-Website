let svgElement = document.querySelector('.flower');
let degree = -60; // Start at -60 degrees
let rotationInterval;

// Clear the interval if it exists
function clearRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
        degree = -60; // Reset to start angle
    }
}

svgElement.addEventListener('mouseover', function () {
    clearRotation(); // Clear the existing rotation

    rotationInterval = setInterval(function () {
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

        /* 只轉到45度 */
        // Stop the interval after one full rotation
        if (degree === 60) { // Check for target angle
            clearRotation();
        }
    }, 5);
});

// Clear rotation when the mouse leaves the SVG, and reset the gradient
svgElement.addEventListener('mouseout', function() {
    clearRotation();
    document.getElementById('hoverGradient1').setAttribute('x1', "0.5");
    document.getElementById('hoverGradient1').setAttribute('y1', "0");
    document.getElementById('hoverGradient1').setAttribute('x2', "0.5");
    document.getElementById('hoverGradient1').setAttribute('y2', "0");
});


