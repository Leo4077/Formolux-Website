window.onload = function () {
    // 獲取所有的按鈕元素
    var buttons = document.querySelectorAll('.aboutus-btn');
    // 遍歷所有的按鈕
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        // 當滑鼠移入按鈕時，觸發此事件
        button.addEventListener('mouseover', function () {
            if (this.id !== activeButton) {
                // 如果此按鈕並非當前已激活的按鈕，則改變背景色
                this.style.backgroundColor = '#FFFCEB';
            }
        });
        // 當滑鼠移出按鈕時，觸發此事件
        button.addEventListener('mouseout', function () {
            if (this.id !== activeButton) {
                // 如果此按鈕並非當前已激活的按鈕，則改變背景色回白色
                this.style.backgroundColor = 'white';
            }
        });
    }
    // 預設第一個按鈕被點擊
    buttonClicked('btn1');
};
// 用於存儲當前已激活按鈕的ID
var activeButton = null;

/* 設定每個按鈕對應的內容 */
const contents = {
    btn1: {
        title: 'Luxury experiences',
        content1: 'Our travel agency specializes in luxury experiences for foreign travelers seeking unique, tailor-made adventures.',
        content2: 'We offer a variety of one-day packages, allowing our clients to immerse themselves in Taiwanese culture within a limited time frame.',
        flowerRotation1: 'rotate(0deg)',
        flowerRotation2: 'rotate(0deg)',
        img1: '../images/Aboutus-a1.png',
        img2: '../images/Aboutus-a2.png',
        background: '../images/AboutUs-BG1.png',
        marginLeft: '0px',
        contentBoxWidth: '74%',
    },

    btn2: {
        title: 'Deluxe hotel',
        content1: 'We prioritize exceptional accommodations, handpicking five-star hotels.',
        content2: 'Which all with premium amenities like pools, fitness centers, and spas to ensure a comfortable and relaxing stay during your trip.',
        flowerRotation1: 'rotate(30deg)',
        flowerRotation2: 'rotate(-20deg)',
        img1: '../images/Aboutus-b1.png',
        img2: '../images/Aboutus-b2.png',
        background: '../images/AboutUs-BG2.png',
        marginLeft: '5px',
        contentBoxWidth: '75.7%',
    },

    btn3: {
        title: 'Luxury rides',
        content1: 'We provide top-tier transportation using luxury brands like Rolls-Royce for airport and attraction transfers.',
        content2: 'Our cars, combined with our professional, safe, and reliable drivers, ensure an unparalleled comfortable experience throughout your journey.',
        flowerRotation1: 'rotate(60deg)',
        flowerRotation2: 'rotate(-40deg)',
        img1: '../images/Aboutus-c1.png',
        img2: '../images/Aboutus-c2.png',
        background: '../images/AboutUs-BG3.png',
        marginLeft: '10px',
        contentBoxWidth: '77.4%',
    },

    btn4: {
        title: 'Expert guides',
        content1: 'Our multilingual and experienced tour guides expertly plan your itinerary, immersing you in authentic local culture, cuisine, and scenery.',
        content2: 'Our tour guides are your best travel companions, making your journey unforgettable and wonderful!',
        flowerRotation1: 'rotate(90deg)',
        flowerRotation2: 'rotate(-60deg)',
        img1: '../images/Aboutus-d1.png',
        img2: '../images/Aboutus-d2.png',
        background: '../images/AboutUs-BG4.png',
        marginLeft: '15px',
        contentBoxWidth: '79.1%',
    },

    btn5: {
        title: 'Dedicated  team',
        content1: 'We take pride in offering exceptional 24/7 online customer service.',
        content2: 'Our dedicated team is available around the clock to promptly address any questions or concerns, providing personalized assistance to ensure an unparalleled experience for our discerning clients.',
        flowerRotation1: 'rotate(120deg)',
        flowerRotation2: 'rotate(-80deg)',
        img1: '../images/Aboutus-e1.png',
        img2: '../images/Aboutus-e2.png',
        background: '../images/AboutUs-BG5.png',
        marginLeft: '20px',
        contentBoxWidth: '80.8%',
    },

    btn6: {
        title: 'Media recommending',
        content1: 'Formolux Travel has garnered acclaim from top media outlets like BBC, CNN, and ELLE for our exceptional travel experiences.',
        content2: "Celebrated by industry experts, we excel in crafting personalized itineraries tailored to our clients' distinct interests and preferences.",
        flowerRotation1: 'rotate(150deg)',
        flowerRotation2: 'rotate(-100deg)',
        img1: '../images/Aboutus-f1.png',
        img2: '../images/Aboutus-f2.png',
        background: '../images/AboutUs-BG6.png',
        marginLeft: '25px',
        contentBoxWidth: '82.5%',
    },


};

// 當按鈕被點擊時執行此函數
function buttonClicked(id) {
    // 如果有已激活的按鈕，則將其背景色和文字顏色還原
    if (activeButton) {
        /* 按鈕顏色 */
        document.getElementById(activeButton).style.backgroundColor = 'white';
        /* 文字樣式 */
        document.getElementById(activeButton).firstElementChild.style.color = '#000537';
        document.getElementById(activeButton).firstElementChild.style.borderBottom = '2px solid transparent';
    }

    document.getElementById(id).style.backgroundColor = '#FFFCEB';
    var textElement = document.getElementById(id).firstElementChild;
    textElement.style.color = '#47BFD9';
    textElement.style.borderBottom = '2px solid #47BFD9';

    // 更改內容
    document.querySelector('.aboutus-content-title').innerText = contents[id].title;
    document.querySelector('.aboutus-content-1').innerText = contents[id].content1;
    document.querySelector('.aboutus-content-2').innerText = contents[id].content2;

    // 旋轉SVG花
    document.querySelector('#aboutus-content-flower-1').style.transform = contents[id].flowerRotation1;
    document.querySelector('#aboutus-content-flower-2').style.transform = contents[id].flowerRotation2;

    // 更換圖片
    var imgBox1 = document.querySelector('.aboutus-content-img-box1 img');
    var imgBox2 = document.querySelector('.aboutus-content-img-box2 img');
    var newImg1 = new Image();
    var newImg2 = new Image();

    newImg1.src = contents[id].img1;
    newImg2.src = contents[id].img2;

    newImg1.onload = function () {
        // 當新圖片加載完成後，將當前圖片淡出
        imgBox1.style.opacity = '0';
    }

    newImg2.onload = function () {
        // 當新圖片加載完成後，將當前圖片淡出
        imgBox2.style.opacity = '0';
    }

    // 當當前圖片完全淡出後，更換圖片並將其淡入
    imgBox1.addEventListener('transitionend', function handler() {
        this.removeEventListener('transitionend', handler);
        imgBox1.src = newImg1.src;
        imgBox1.style.opacity = '1';
    });

    imgBox2.addEventListener('transitionend', function handler() {
        this.removeEventListener('transitionend', handler);
        imgBox2.src = newImg2.src;
        imgBox2.style.opacity = '1';
    });


    // 更換背景圖片
    document.querySelector('.aboutus-second-section').style.backgroundImage = 'url(' + contents[id].background + ')';

    // 移動 aboutus-content 
    document.querySelector('.aboutus-content').style.marginLeft = contents[id].marginLeft;

    // 改變 aboutus-content-box 的 width
    document.querySelector('.aboutus-content-box').style.width = contents[id].contentBoxWidth;



    // 更新已激活的按鈕ID
    activeButton = id;
}
