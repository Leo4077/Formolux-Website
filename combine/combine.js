/*Hamburger選單變化*/ 

document.addEventListener("DOMContentLoaded", function () {
    var travelStyle = document.getElementById("travelStyle");
    var aboutTaiwan = document.getElementById("aboutTaiwan");
    var aboutUs = document.getElementById("aboutUs");
    var contactUs = document.getElementById("contactUs");
    var menuDiv = document.querySelector(".menu>div");
    // var menuLogo = document.querySelector(".logo_color");
    var toggler = document.querySelector(".toggler");
    var menuIcon = document.querySelector(".icon");
    var textFade = document.querySelectorAll(".fadeText");

    /*設定平板與手機尺寸*/
    var isMobileOrTablet = window.matchMedia("(max-width: 1024px)").matches;

    /*桌機板hover效果*/
    if (!isMobileOrTablet) {
        travelStyle.addEventListener("mouseover", function () {
            menuDiv.style.backgroundImage = "url('../images/travel_bg.jpg')";
        });

        aboutTaiwan.addEventListener("mouseover", function () {
            menuDiv.style.backgroundImage = "url('../images/Taiwan_bg.jpg')";
            /*menuLogo.style.color = "#FFFFFF";*/
        });

        aboutUs.addEventListener("mouseover", function () {
            menuDiv.style.backgroundImage = "url('../images/BG-3.jpg')";
            /*menuLogo.style.color = "#FFFFFF";*/
        });

        contactUs.addEventListener("mouseover", function () {
            menuDiv.style.backgroundImage = "url('../images/BG-4.jpg')";
        });

        travelStyle.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });

        aboutTaiwan.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });

        aboutUs.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });

        contactUs.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });

        // 在懸停其他部分時恢復原始背景圖片
        travelStyle.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });

        aboutTaiwan.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });

        aboutUs.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });

        contactUs.addEventListener("mouseleave", function () {
            menuDiv.style.backgroundImage = "url('../images/Hamburger_bg.jpg')";
            /*menuLogo.style.color = "#000537";*/
        });
    } else {
        // 平板與手機的觸動效果

        travelStyle.addEventListener("click", function () {
            menuDiv.style.backgroundImage = "url('../images/ipad_travel_BG.png')";
            menuDiv.style.backgroundPosition = "0 0";
            menuDiv.style.animation = "none";
            event.stopPropagation(); // 阻止事件冒泡
        });

        aboutTaiwan.addEventListener("click", function () {
            menuDiv.style.backgroundImage = "url('../images/ipad_about_BG.png')";
            menuDiv.style.backgroundPosition = "0 0";
            menuDiv.style.animation = "none";
            event.stopPropagation(); // 阻止事件冒泡
        });

        aboutUs.addEventListener("click", function () {
            menuDiv.style.backgroundImage = "url('../images/ipad_us_BG.png')";
            menuDiv.style.backgroundPosition = "0 0";
            menuDiv.style.animation = "none";
            event.stopPropagation(); // 阻止事件冒泡
        });

        contactUs.addEventListener("click", function () {
            menuDiv.style.backgroundImage = "url('../images/ipad_contact_BG.png')";
            menuDiv.style.backgroundPosition = "0 0";
            menuDiv.style.animation = "none";
            event.stopPropagation(); // 阻止事件冒泡
        });

        /*在每次點擊toggler都重新這段動畫*/

        toggler.addEventListener("click", function () {
            menuDiv.style.backgroundImage = "url('../images/ipad-ham-BG.png')";
            menuDiv.style.backgroundPosition = "0 -20px";
            menuIcon.style.bottom = "6%" ;
        
            // 遍歷每個 textFade 元素並應用樣式
            textFade.forEach(function(el) {
                el.style.top = "50px";
                el.style.opacity = "0.5";
                el.style.animation = "none";
            });
        
            // 移除原本的動畫 (這樣才可以重複被觸發)
            menuDiv.style.animation = "none";
            menuIcon.style.animation = "none";
        
            // 在下一個 JavaScript 執行周期設定新的動畫
            setTimeout(function () {
                menuDiv.style.animation = "moveUp 1.5s both ease-in-out";
                menuIcon.style.animation = "iconUp 1.5s both ease-in-out";
                // 同樣的，遍歷每個 textFade 元素並應用動畫
                textFade.forEach(function(el) {
                    el.style.animation = "fadeUpIn 1.5s both ease-in-out";
                });
            }, 0);
        });
    }
});

/*還是沒有辦法有觸發*/

// function triggerAnimation() {
//     var menu = document.querySelector(".menu");
//     menu.classList.add("moveUp"); // Add the "move-up" class to trigger the animation
//   }

//   // Trigger animation on menu open
//   document.addEventListener("DOMContentLoaded", function() {
//     var toggler = document.querySelector(".toggler");
//     toggler.addEventListener("change", function() {
//       if (toggler.checked) {
//         triggerAnimation();
//       }
//     });
//   });
