document.addEventListener("DOMContentLoaded", function () {
    // 獲取要懸停的元素
    var travelStyle = document.getElementById("travelStyle");
    var aboutTaiwan = document.getElementById("aboutTaiwan");
    var aboutUs = document.getElementById("aboutUs");
    var contactUs = document.getElementById("contactUs"); // 確保您在HTML中有一個具有此ID的元素

    // 獲取要改變背景圖片的元素
    var menuDiv = document.querySelector(".menu>div");

    // 為 travelStyle 添加懸停事件監聽器
    travelStyle.addEventListener("mouseover", function () {
        menuDiv.classList.add("background-transition");
        menuDiv.style.backgroundImage = "url('./images/travel_bg.jpg')";
    });

    // 為 aboutTaiwan 添加懸停事件監聽器
    aboutTaiwan.addEventListener("mouseover", function () {
        menuDiv.classList.add("background-transition");
        menuDiv.style.backgroundImage = "url('./images/Taiwan_bg.jpg')";
    });


    // 為 aboutUs 添加懸停事件監聽器
    aboutUs.addEventListener("mouseover", function () {
        menuDiv.classList.add("background-transition");
        menuDiv.style.backgroundImage = "url('./images/BG-3.jpg')";
    });

    // 為 contactUs 添加懸停事件監聽器
    contactUs.addEventListener("mouseover", function () {
        menuDiv.classList.add("background-transition");
        menuDiv.style.backgroundImage = "url('./images/BG-4.jpg')";
    });

    // 在懸停其他部分時恢復原始背景圖片
    travelStyle.addEventListener("mouseleave", function () {
        menuDiv.classList.remove("background-transition");
        menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
    });

    aboutTaiwan.addEventListener("mouseleave", function () {
        menuDiv.classList.remove("background-transition");
        menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
    });

    aboutUs.addEventListener("mouseleave", function () {
        menuDiv.classList.remove("background-transition");
        menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
    });

    contactUs.addEventListener("mouseleave", function () {
        menuDiv.classList.remove("background-transition");
        menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
    });
});