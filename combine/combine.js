

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
        menuDiv.style.backgroundImage = "url('../images/travel_bg.jpg')";

    });

    // 為 aboutTaiwan 添加懸停事件監聽器
    aboutTaiwan.addEventListener("mouseover", function () {
        menuDiv.style.backgroundImage = "url('../images/Taiwan_bg.jpg') ";
        menuLogo.style.color = "#FFFFFF";

    });

    // 為 aboutUs 添加懸停事件監聽器
    aboutUs.addEventListener("mouseover", function () {
        menuDiv.style.backgroundImage = "url('../images/BG-3.jpg')"
        menuLogo.style.color = "#FFFFFF";

    });

    // 為 contactUs 添加懸停事件監聽器
    contactUs.addEventListener("mouseover", function () {
        menuDiv.style.backgroundImage = "url('../images/BG-4.jpg')";

    });

    // 平板懸停事件監聽器
    travelStyle.addEventListener("touchstart", function () {
        menuDiv.style.backgroundImage = "url('../images/ipad_travel_BG.png')";
    });

    aboutTaiwan.addEventListener("touchstart", function () {
        menuDiv.style.backgroundImage = "url('../images/ipad_contact_BG.png')";
    });

    aboutUs.addEventListener("touchstart", function () {
        menuDiv.style.backgroundImage = "url('../images/ipad_us_BG.png')";
    });

    contactUs.addEventListener("touchstart", function () {
        menuDiv.style.backgroundImage = "url('../images/ipad_contact_BG.png')";
    });

    // 在懸停其他部分時恢復原始背景圖片
    travelStyle.addEventListener("mouseleave", function () {
        menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
        menuLogo.style.color = "#000537";

    });

    aboutTaiwan.addEventListener("mouseleave", function () {
        menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
        menuLogo.style.color = "#000537";

    });

    aboutUs.addEventListener("mouseleave", function () {

        menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
        menuLogo.style.color = "#000537";

    });

    contactUs.addEventListener("mouseleave", function () {

        menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
        menuLogo.style.color = "#000537";

    });
});

/*還是沒有辦法有觸發*/ 

// function triggerAnimation() {
//     var menu = document.querySelector(".menu");
//     menu.classList.add("move-up"); // Add the "move-up" class to trigger the animation
//   }
  
//   // Trigger animation on menu open
//   var toggler = document.querySelector(".toggler");
//   toggler.addEventListener("change", function () {
//     if (toggler.checked) {
//       triggerAnimation();
//     }
    
//   });
  
  
  

