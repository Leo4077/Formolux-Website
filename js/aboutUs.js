
// > 用於存儲當前已激活按鈕的ID
var activeButton = null;
var buttons = null;

// > 設定每個按鈕對應的內容
const contents = {
    // -電腦版
    btn1: {
        title: 'Luxury experiences',
        content: 'Our travel agency specializes in luxury experiences for foreign travelers seeking unique, tailor-made adventures.<br><br>We offer a variety of one-day packages, allowing our clients to immerse themselves in Taiwanese culture within a limited time frame.',
        flowerRotation1: 'rotate(0deg)',
        flowerRotation2: 'rotate(0deg)',
        flowerMove: '-100%',
        img1: '../images/Aboutus-a1.png',
        img2: '../images/Aboutus-a2.png',
        background: '../images/AboutUs-BG1.png',
        marginLeft: '0px',
        contentBoxWidth: '74%',
        contentBoxHeight: '58.72%',
    },

    btn2: {
        title: 'Deluxe hotel',
        content: 'We prioritize exceptional accommodations, handpicking five-star hotels.<br><br>Which all with premium amenities like pools, fitness centers, and spas to ensure a comfortable and relaxing stay during your trip.',
        flowerRotation1: 'rotate(30deg)',
        flowerRotation2: 'rotate(-20deg)',
        flowerMove: '-96%',
        img1: '../images/Aboutus-b1.png',
        img2: '../images/Aboutus-b2.png',
        background: '../images/AboutUs-BG2.png',
        marginLeft: '5px',
        contentBoxWidth: '75.7%',
        contentBoxHeight: '63.29%',
    },

    btn3: {
        title: 'Luxury rides',
        content: 'We provide top-tier transportation using luxury brands like Rolls-Royce for airport and attraction transfers.<br><br>Our cars, combined with our professional, safe, and reliable drivers, ensure an unparalleled comfortable experience throughout your journey.',
        flowerRotation1: 'rotate(60deg)',
        flowerRotation2: 'rotate(-40deg)',
        flowerMove: '-92%',
        img1: '../images/Aboutus-c1.png',
        img2: '../images/Aboutus-c2.png',
        background: '../images/AboutUs-BG3.png',
        marginLeft: '10px',
        contentBoxWidth: '77.4%',
        contentBoxHeight: '67.86%',
    },

    btn4: {
        title: 'Expert guides',
        content: 'Our multilingual and experienced tour guides expertly plan your itinerary, immersing you in authentic local culture, cuisine, and scenery.<br><br>Our tour guides are your best travel companions, making your journey unforgettable and wonderful!',
        flowerRotation1: 'rotate(90deg)',
        flowerRotation2: 'rotate(-60deg)',
        flowerMove: '-88%',
        img1: '../images/Aboutus-d1.png',
        img2: '../images/Aboutus-d2.png',
        background: '../images/AboutUs-BG4.png',
        marginLeft: '15px',
        contentBoxWidth: '79.1%',
        contentBoxHeight: '72.43%',
    },

    btn5: {
        title: 'Dedicated  team',
        content: 'We take pride in offering exceptional 24/7 online customer service.<br><br>Our dedicated team is available around the clock to promptly address any questions or concerns, providing personalized assistance to ensure an unparalleled experience for our discerning clients.',
        flowerRotation1: 'rotate(120deg)',
        flowerRotation2: 'rotate(-80deg)',
        flowerMove: '-84%',
        img1: '../images/Aboutus-e1.png',
        img2: '../images/Aboutus-e2.png',
        background: '../images/AboutUs-BG5.png',
        marginLeft: '20px',
        contentBoxWidth: '80.8%',
        contentBoxHeight: '76.99%',
    },

    btn6: {
        title: 'Media recommending',
        content: "Formolux Travel has garnered acclaim from top media outlets like BBC, CNN, and ELLE for our exceptional travel experiences.<br><br>Celebrated by industry experts, we excel in crafting personalized itineraries tailored to our clients' distinct interests and preferences.",
        flowerRotation1: 'rotate(150deg)',
        flowerRotation2: 'rotate(-100deg)',
        flowerMove: '-80%',
        img1: '../images/Aboutus-f1.png',
        img2: '../images/Aboutus-f2.png',
        background: '../images/AboutUs-BG6.png',
        marginLeft: '25px',
        contentBoxWidth: '84.37%',
        contentBoxHeight: '81.56%',
    },

    // -手機版
    btnA: {
        title: 'Luxury experiences',
        content: 'Our travel agency specializes in luxury experiences for foreign travelers seeking unique, tailor-made adventures.<br><br>We offer a variety of one-day packages, allowing our clients to immerse themselves in Taiwanese culture within a limited time frame.',
        flowerRotation1: 'rotate(0deg)',
        flowerRotation2: 'rotate(0deg)',
        flowerMove: '-100%',
        img1: '../images/Aboutus-a1.png',
        img2: '../images/Aboutus-a2.png',
        background: '../images/AboutUs-BG1.png',
        marginLeft: '0px',
        contentBoxWidth: '100%',
        contentBoxHeight: '62.7%',
    },

    btnB: {
        title: 'Deluxe hotel',
        content: 'We prioritize exceptional accommodations, handpicking five-star hotels.<br><br>Which all with premium amenities like pools, fitness centers, and spas to ensure a comfortable and relaxing stay during your trip.',
        flowerRotation1: 'rotate(30deg)',
        flowerRotation2: 'rotate(-20deg)',
        flowerMove: '-96%',
        img1: '../images/Aboutus-b1.png',
        img2: '../images/Aboutus-b2.png',
        background: '../images/AboutUs-BG2.png',
        marginLeft: '5px',
        contentBoxWidth: '100%',
        contentBoxHeight: '66.5%',
    },

    btnC: {
        title: 'Luxury rides',
        content: 'We provide top-tier transportation using luxury brands like Rolls-Royce for airport and attraction transfers.<br><br>Our cars, combined with our professional, safe, and reliable drivers, ensure an unparalleled comfortable experience throughout your journey.',
        flowerRotation1: 'rotate(60deg)',
        flowerRotation2: 'rotate(-40deg)',
        flowerMove: '-92%',
        img1: '../images/Aboutus-c1.png',
        img2: '../images/Aboutus-c2.png',
        background: '../images/AboutUs-BG3.png',
        marginLeft: '10px',
        contentBoxWidth: '100%',
        contentBoxHeight: '70.3%',
    },

    btnD: {
        title: 'Expert guides',
        content: 'Our multilingual and experienced tour guides expertly plan your itinerary, immersing you in authentic local culture, cuisine, and scenery.<br><br>Our tour guides are your best travel companions, making your journey unforgettable and wonderful!',
        flowerRotation1: 'rotate(90deg)',
        flowerRotation2: 'rotate(-60deg)',
        flowerMove: '-88%',
        img1: '../images/Aboutus-d1.png',
        img2: '../images/Aboutus-d2.png',
        background: '../images/AboutUs-BG4.png',
        marginLeft: '15px',
        contentBoxWidth: '100%',
        contentBoxHeight: '74.1%',
    },

    btnE: {
        title: 'Dedicated  team',
        content: 'We take pride in offering exceptional 24/7 online customer service.<br><br>Our dedicated team is available around the clock to promptly address any questions or concerns, providing personalized assistance to ensure an unparalleled experience for our discerning clients.',
        flowerRotation1: 'rotate(120deg)',
        flowerRotation2: 'rotate(-80deg)',
        flowerMove: '-84%',
        img1: '../images/Aboutus-e1.png',
        img2: '../images/Aboutus-e2.png',
        background: '../images/AboutUs-BG5.png',
        marginLeft: '20px',
        contentBoxWidth: '100%',
        contentBoxHeight: '77.9%',
    },

    btnF: {
        title: 'Media recommending',
        content: "Formolux Travel has garnered acclaim from top media outlets like BBC, CNN, and ELLE for our exceptional travel experiences.<br><br>Celebrated by industry experts, we excel in crafting personalized itineraries tailored to our clients' distinct interests and preferences.",
        flowerRotation1: 'rotate(150deg)',
        flowerRotation2: 'rotate(-100deg)',
        flowerMove: '-80%',
        img1: '../images/Aboutus-f1.png',
        img2: '../images/Aboutus-f2.png',
        background: '../images/AboutUs-BG6.png',
        marginLeft: '25px',
        contentBoxWidth: '100%',
        contentBoxHeight: '81.7%',
    },

};

function buttonClicked(id) {
    const isMobile = window.innerWidth <= 480;
    var buttons = document.querySelectorAll(isMobile ? '.aboutus-btn-phone' : '.aboutus-btn');

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (button.id === id) {
            button.style.backgroundColor = '#FFFCEB';
        } else {
            button.style.backgroundColor = 'white';
        }
    }
    activeButton = id;
}

function updateButtons() {
    // -檢查螢幕寬度
    const isMobile = window.innerWidth <= 480;
    console.log('isMobile', isMobile);

    // -獲取所有的按鈕元素
    var buttons = document.querySelectorAll('.aboutus-btn, .aboutus-btn-phone');

    // -設定預設被激活的按鈕ID
    activeButton = isMobile ? 'btnA' : 'btn1';

    // -遍歷所有的按鈕
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        // -當滑鼠移入按鈕時，觸發此事件
        button.addEventListener('mouseover', function () {
            if (this.id !== activeButton) {
                // -如果此按鈕並非當前已激活的按鈕，則改變背景色
                this.style.backgroundColor = '#FFFCEB';
            }
        });

        // -當滑鼠移出按鈕時，觸發此事件
        button.addEventListener('mouseout', function () {
            if (this.id !== activeButton) {
                // -如果此按鈕並非當前已激活的按鈕，則改變背景色回白色
                this.style.backgroundColor = 'white';
            }
        });
    }

    // 調用 buttonClicked 來應用預設被激活的按鈕狀態
    buttonClicked(activeButton);
}

window.onload = function () {
    // -檢查螢幕寬度
    const isMobile = window.innerWidth <= 480;

    // -當畫面載入時，更新按鈕
    updateButtons();

    // -當畫面大小改變時，也更新按鈕
/*     window.onresize = updateButtons;
 */
    // -預設第一個按鈕被點擊
    buttonClicked(isMobile ? 'btnA' : 'btn1');
};


// > 花區
function adjustFlowerPosition(id) {
    // -旋轉SVG花
    document.querySelector('#aboutus-content-flower-1').style.transform = contents[id].flowerRotation1;
    document.querySelector('#aboutus-content-flower-2').style.transform = contents[id].flowerRotation2;
    // -平板的花移動
    if (window.innerWidth <= 1200) {
        document.querySelector('.aboutus-content-flower-box').style.bottom = contents[id].flowerMove;
        document.querySelector('.aboutus-content-flower-box').style.right = "-23%";
        document.querySelector('.aboutus-content-flower-box').style.position = "absolute";
    } else {
        // -將花的位置設定回初始位置
        document.querySelector('.aboutus-content-flower-box').style.bottom = 'auto';
        document.querySelector('.aboutus-content-flower-box').style.right = 'auto';
        document.querySelector('.aboutus-content-flower-box').style.position = "relative";
    }
}

// > 背景模糊
// > 當視窗大小變化時調整 #aboutus-bg-box 的大小
function adjustBoxSize(id) {
    if (window.innerWidth <= 1200) {
        document.querySelector('#aboutus-bg-box').style.height = contents[id].contentBoxHeight;
        document.querySelector('#aboutus-bg-box').style.width = '100%';
    } else {
        document.querySelector('#aboutus-bg-box').style.height = '100%';
        document.querySelector('#aboutus-bg-box').style.width = contents[id].contentBoxWidth;
    }
}


// > 當按鈕被點擊時執行此函數
function buttonClicked(id) {
    // > 如果有已激活的按鈕，則將其背景色和文字顏色還原
    if (activeButton) {
        // -按鈕顏色
        document.getElementById(activeButton).style.backgroundColor = 'white';
        // -文字樣式
        document.getElementById(activeButton).firstElementChild.style.color = '#000537';
        document.getElementById(activeButton).firstElementChild.style.borderBottom = '2px solid transparent';
    }
    document.getElementById(id).style.backgroundColor = '#FFFCEB';
    var textElement = document.getElementById(id).firstElementChild;
    textElement.style.color = '#47BFD9';
    textElement.style.borderBottom = '2px solid #47BFD9';


    // > 花區
    // -調用 adjustFlowerPosition，並傳遞 id
    adjustFlowerPosition(id);
    // -移除舊的事件處理器以避免事件處理器堆疊的問題
    window.removeEventListener('resize', adjustFlowerPosition);
    // -當視窗大小變化時再次調整花的位置
    window.addEventListener('resize', function () {
        adjustFlowerPosition(id);
    });

    // > 移動 aboutus-content 
    if (window.innerWidth > 1200) {
        document.querySelector('.aboutus-content').style.marginLeft = contents[id].marginLeft;
    }

    // > 背景模糊
    adjustBoxSize(id);
    // -移除舊的事件處理器以避免事件處理器堆疊的問題
    window.removeEventListener('resize', adjustBoxSize);
    // -當視窗大小變化時再次調整 #aboutus-bg-box 的大小
    window.addEventListener('resize', function () {
        adjustBoxSize(id);
    });


    // ! 更換標題
    var isTransitioningTitle = false;
    var oldTitle = document.getElementById('oldTitle');
    var newTitle = document.getElementById('newTitle');

    if (!isTransitioningTitle) {  // -如果不再進行過渡，則載入新標題
        newTitle.textContent = contents[id].title;
    }
    oldTitle.style.transition = 'opacity 0.5s ease-out';  // -動態添加 transition 屬性
    newTitle.style.transition = 'opacity 0.5s ease-out';  // -動態添加 transition 屬性
    oldTitle.style.opacity = '0';
    newTitle.style.opacity = '1';

    // > 當舊標題完全淡出後，將其刪除，並將新標題設定為當前標題
    oldTitle.addEventListener('transitionend', function handler() {
        this.removeEventListener('transitionend', handler);
        oldTitle.textContent = newTitle.textContent;
        oldTitle.style.opacity = '1';
        newTitle.style.opacity = '0';
        oldTitle.style.transition = '';  // -移除 transition 屬性
        newTitle.style.transition = '';  // -移除 transition 屬性
    });

    // ! 更換內容
    var isTransitioningContent = false;
    var oldContent = document.getElementById('oldContent');
    var newContent = document.getElementById('newContent');

    if (!isTransitioningContent) {  // -如果不再進行過渡，則載入新內容
        newContent.innerHTML = contents[id].content;
    }
    oldContent.style.transition = 'opacity 0.5s ease-out';  // -動態添加 transition 屬性
    newContent.style.transition = 'opacity 0.5s ease-out';  // -動態添加 transition 屬性
    oldContent.style.opacity = '0';
    newContent.style.opacity = '1';

    // > 當舊內容完全淡出後，將其刪除，並將新內容設定為當前內容
    oldContent.addEventListener('transitionend', function handler() {
        this.removeEventListener('transitionend', handler);
        oldContent.innerHTML = newContent.innerHTML;
        oldContent.style.opacity = '1';
        newContent.style.opacity = '0';
        oldContent.style.transition = '';  // -移除 transition 屬性
        newContent.style.transition = '';  // -移除 transition 屬性
    });

    // ! 更換圖片
    var isTransitioning1 = false;
    var isTransitioning2 = false;
    var oldImg1 = document.getElementById('oldImg1');
    var newImg1 = document.getElementById('newImg1');
    var oldImg2 = document.getElementById('oldImg2');
    var newImg2 = document.getElementById('newImg2');

    // > 設定新圖片的來源（觸發加載）
    if (!isTransitioning1) {  // -如果不在進行過渡，則載入新圖片
        newImg1.src = contents[id].img1;
    }
    if (!isTransitioning2) {  // -如果不在進行過渡，則載入新圖片
        newImg2.src = contents[id].img2;
    }

    // > 新圖片加載完成後，將新圖片淡入，舊圖片淡出
    newImg1.onload = function () {
        if (isTransitioning1) return;  // -如果正在進行過渡，就不進行切換
        isTransitioning1 = true;  // -開始過渡
        oldImg1.style.transition = 'opacity 0.4s ease-out';  // -動態添加 transition 屬性
        newImg1.style.transition = 'opacity 0.4s ease-out';  // -動態添加 transition 屬性
        oldImg1.style.opacity = '0';
        newImg1.style.opacity = '1';
    }

    newImg2.onload = function () {
        if (isTransitioning2) return;  // -如果正在進行過渡，就不進行切換
        isTransitioning2 = true;  // -開始過渡
        oldImg2.style.transition = 'opacity 0.4s ease-out';  // -動態添加 transition 屬性
        newImg2.style.transition = 'opacity 0.4s ease-out';  // -動態添加 transition 屬性
        oldImg2.style.opacity = '0';
        newImg2.style.opacity = '1';
    }

    // > 當舊圖片完全淡出後，將其刪除，並將新圖片設定為當前圖片
    oldImg1.addEventListener('transitionend', function handler() {
        this.removeEventListener('transitionend', handler);
        oldImg1.src = newImg1.src;
        oldImg1.style.opacity = '1';
        newImg1.style.opacity = '0';
        oldImg1.style.transition = '';  // -移除 transition 屬性
        newImg1.style.transition = '';  // -移除 transition 屬性
        newImg1.onload = null;
        isTransitioning1 = false;  // -過渡結束
    });

    oldImg2.addEventListener('transitionend', function handler() {
        this.removeEventListener('transitionend', handler);
        oldImg2.src = newImg2.src;
        oldImg2.style.opacity = '1';
        newImg2.style.opacity = '0';
        oldImg2.style.transition = '';  // -移除 transition 屬性
        newImg2.style.transition = '';  // -移除 transition 屬性
        newImg2.onload = null;
        isTransitioning2 = false;  // -過渡結束
    });


    // ! 更換背景圖片
    var isTransitioningBg = false;
    var oldBg = document.getElementById('oldBg');
    var newBg = document.getElementById('newBg');

    if (!isTransitioningBg) {  // -如果不在進行過渡，則載入新背景
        newBg.src = contents[id].background;
    }

    // > 新背景加載完成後，將新背景淡入，舊背景淡出
    newBg.onload = function () {
        if (isTransitioningBg) return;  // -如果正在進行過渡，就不進行切換
        isTransitioningBg = true;  // -開始過渡
        oldBg.style.transition = 'opacity 0.5s ease-out';  // -動態添加 transition 屬性
        newBg.style.transition = 'opacity 0.5s ease-out';  // -動態添加 transition 屬性
        oldBg.style.opacity = '0';
        newBg.style.opacity = '1';
    }

    // > 當舊背景完全淡出後，將其刪除，並將新背景設定為當前背景
    oldBg.addEventListener('transitionend', function handler() {
        this.removeEventListener('transitionend', handler);
        oldBg.src = newBg.src;
        oldBg.style.opacity = '1';
        newBg.style.opacity = '0';
        oldBg.style.transition = '';  // -移除 transition 屬性
        newBg.style.transition = '';  // -移除 transition 屬性
        newBg.onload = null;
        isTransitioningBg = false;  // -過渡結束
    });
    // -更新已激活的按鈕ID
    activeButton = id;
}







// > 玻璃擬態 下滾才出現
window.addEventListener('scroll', function () {
    var header1 = document.querySelector('.header1');
    var whyChoose = document.querySelector('.why-choose');
    var glassMorphism = document.querySelector('.glass-morphism');

    var headerTop = header1.getBoundingClientRect().top;
    var whyChooseTop = whyChoose.getBoundingClientRect().top;

    if (headerTop >= whyChooseTop && window.pageYOffset > 0) {
        glassMorphism.style.display = 'flex';
        console.log('玻璃擬態顯示');
    } else {
        glassMorphism.style.display = 'none';
        console.log('玻璃擬態不顯示');
    }
});

