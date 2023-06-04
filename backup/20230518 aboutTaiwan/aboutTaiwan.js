
// 資訊區smoove
    $('.smoove').smoove({
        offset : '40%',
        moveX  : '-20px',
    });

    $('.smoove_z').smoove({
        offset : '40%',
        moveX  : '20px',    
    });


    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
       
    })
      


    
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

  