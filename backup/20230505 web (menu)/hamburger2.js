

document.addEventListener("DOMContentLoaded", function () {
    // 獲取要懸停的元素
    var travelStyle = document.getElementById("travelStyle");
    var aboutTaiwan = document.getElementById("aboutTaiwan");
    var aboutUs = document.getElementById("aboutUs");
    var contactUs = document.getElementById("contactUs"); // 確保您在HTML中有一個具有此ID的元素

    // 獲取要改變背景圖片的元素
    var menuDiv = document.querySelector(".menu>div");
    // 獲取要改變LOGO顏色的元素
    var menuLogo = document.querySelector(".menu_logo");

    // 為 travelStyle 添加懸停事件監聽器
    travelStyle.addEventListener("mouseover", function () {
        menuDiv.classList.add("transition-background");
        menuDiv.style.backgroundImage = "url('./images/travel_bg.jpg')";
    });

    // 為 aboutTaiwan 添加懸停事件監聽器
    aboutTaiwan.addEventListener("mouseover", function () {
        menuDiv.classList.add("transition-background");
        menuDiv.style.backgroundImage = "url('./images/Taiwan_bg.jpg') ";
        menuLogo.style.color = "#FFFFFF";
    });

    // 為 aboutUs 添加懸停事件監聽器
    aboutUs.addEventListener("mouseover", function () {
        menuDiv.classList.add("transition-background");
        menuDiv.style.backgroundImage = "url('./images/BG-3.jpg')"
        menuLogo.style.color = "#FFFFFF";
    });

    // 為 contactUs 添加懸停事件監聽器
    contactUs.addEventListener("mouseover", function () {
        menuDiv.classList.add("transition-background");
        menuDiv.style.backgroundImage = "url('./images/BG-4.jpg')";
    });



    // 在懸停其他部分時恢復原始背景圖片

    travelStyle.addEventListener("mouseleave", function () {
        menuDiv.classList.add("transition-background");
        menuLogo.style.color = "#000537";
        setTimeout(function () {
            menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
        }, 50); // 延遲時間應該非常短，這樣當 setTimeout 觸發時，背景圖片會在動畫開始時改變

        setTimeout(function () {
            menuDiv.classList.remove("transition-background");
        }, 300); // 延遲時間應該和你的轉場動畫時間相同
    });

    aboutTaiwan.addEventListener("mouseleave", function () {
        menuDiv.classList.add("transition-background");
        menuLogo.style.color = "#000537";
        setTimeout(function () {
            menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
        }, 50); // 延遲時間應該非常短，這樣當 setTimeout 觸發時，背景圖片會在動畫開始時改變

        setTimeout(function () {
            menuDiv.classList.remove("transition-background");
        }, 300); // 延遲時間應該和你的轉場動畫時間相同
    });

    aboutUs.addEventListener("mouseleave", function () {
        menuDiv.classList.add("transition-background");
        menuLogo.style.color = "#000537";
        setTimeout(function () {
            menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
            menuDiv.classList.remove("transition-background");
        }, 50); // 延遲時間應該非常短，這樣當 setTimeout 觸發時，背景圖片會在動畫開始時改變

        setTimeout(function () {
            menuDiv.classList.remove("transition-background");
        }, 300); // 延遲時間應該和你的轉場動畫時間相同
    });

    contactUs.addEventListener("mouseleave", function () {
        menuDiv.classList.add("transition-background");
        menuLogo.style.color = "#000537";
        setTimeout(function () {
            menuDiv.style.backgroundImage = "url('./images/Hamburger_bg.jpg')";
            menuDiv.classList.remove("transition-background");
        }, 50); // 延遲時間應該非常短，這樣當 setTimeout 觸發時，背景圖片會在動畫開始時改變

        setTimeout(function () {
            menuDiv.classList.remove("transition-background");
        }, 300); // 延遲時間應該和你的轉場動畫時間相同
    });
});