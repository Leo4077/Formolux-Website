
// // 資訊區smoove
//     $('.smoove').smoove({
//         offset : '40%',
//         moveX  : '-20px',
//     });

//     $('.smoove_z').smoove({
//         offset : '40%',
//         moveX  : '20px',    
//     });

// //視差
    const parallax = document.querySelector('.taiwanpic')

    new Ukiyo(parallax, {
        scale: 1.2, // 1~2 is recommended
        speed: 1, // 1~2 is recommended
        willChange: true, // This may not be valid in all cases
        wrapperClass: "ukiyo-wrapper",
        externalRAF: false
    });

    // smoove 动画
$('.smoove').smoove({
    offset : '30%',
    moveX  : '-20px',
});

$('.smoove_z').smoove({
    offset : '30%',
    moveX  : '20px',    
});

// // 設定閾值，例如滾動超過500px時開始視差效果
// const threshold = 200;

// // 視差元素
// const parallax = document.querySelector('#taiwangeo');

// // 初始化視差物件，但暫時不啟動
// let ukiyo = new Ukiyo(parallax, {
//     scale: 1.2,
//     speed: 1,
//     willChange: true,
//     wrapperClass: "ukiyo-wrapper",
//     externalRAF: false,
//     // 假设 Ukiyo 有一个可用的启用和禁用方法
//     enabled: false // 这需要 Ukiyo 类支持这个选项
// });

// // 當滾動事件發生時
// window.onscroll = function() {
//     // 獲取滾動的距離
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // 如果滾動超過閾值且視差動畫尚未開始
//     if (scrollTop > threshold && !ukiyo.enabled) {
//         // 啟動視差動畫
//         ukiyo.enabled = true;
//     }
// }


    // window.addEventListener("load", () => gsap.set("body", { autoAlpha: 1 }));
    
    // const locoScroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });
    
    // locoScroll.on("scroll", ScrollTrigger.update);
    
    // ScrollTrigger.scrollerProxy(".scrollContainer", {
    //     scrollTop(value) {
    //         return arguments.length
    //             ? locoScroll.scrollTo(value, 0, 0)
    //             : locoScroll.scroll.instance.scroll.y;
    //     },
    //     getBoundingClientRect() {
    //         return {
    //             top: 0,
    //             left: 0,
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         };
    //     },
    
    //     pinType: document.querySelector(".scrollContainer").style.transform
    //         ? "transform"
    //         : "fixed"
    // });
    
    // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // ScrollTrigger.refresh();
    
    // gsap.to(".panel", {
    //     scaleY: 0,
    //     duration: 1.65,
    //     ease: "power4.inOut"
    // });
    
    
      


    
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     var translateY = -15 - (scroll * 0.1); // 根据滚动距离计算新的 translateY 值
        
    //     if (translateY < -25) {
    //       translateY = -25; // 限制最小值为 -25
    //     }
        
    //     $('#taiwangeo').css('transform', 'translateY(' + translateY + '%)');
    //   });
      
    


//圖片視差
// $(document).ready(function() {
//     var onScroll = function() {
//       var scrollTop = $(this).scrollTop();
//       $('.parallaximg').each(function(index, elem) {
//         var $elem = $(elem);
//         $elem.find('img').css('top', scrollTop - $elem.offset().top);
//       });
//     };
//     onScroll.apply(window);
//     $(window).on('scroll', onScroll);
//   });

  