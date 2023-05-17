function scrollAppear() {
    let items = document.querySelectorAll('.homepage-introimage-content');

    items.forEach(function (item) {
        let position = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 0.8;

        if (window.scrollY < 350) {
            // hidden
            item.classList.remove('showIntrocontent');
            item.classList.add('hideIntrocontent');
        } else if (1800 >= window.scrollY && window.scrollY >= 350) {
            // show
            item.classList.add('showIntrocontent');
            item.classList.remove('hideIntrocontent');
        } else if (window.scrollY > 1800) {
            // hidden
            item.classList.remove('showIntrocontent');
            item.classList.add('hideIntrocontent');
        }
    });
}
window.addEventListener('scroll', scrollAppear);

/* 頁面刷新後自動回到頂部 */
window.onbeforeunload = function () {
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
}

/* function scrollAppear() {
    let items = document.querySelectorAll('.homepage-introimage-content');

    items.forEach(function (item) {
        let position = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 0.8;

        console.log(`position:${position}, screenPosition:${screenPosition}`)

        if (position < screenPosition) {
            //item.classList.add('showIntrocontent');
            item.classList.add('showIntrocontent');

        } else {
            item.classList.add('hideIntrocontent');
            //item.classList.remove('showIntrocontent');
            //item.classList.add('hideIntrocontent');
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', scrollAppear);
}); */







// function scrollAppear() {
//     let items = document.querySelectorAll('.homepage-introimage-content');

//     items.forEach(function (item) {
//         let position = item.getBoundingClientRect().top;
//         let screenPosition = window.innerHeight / 0.8;

//         //console.log(`position:${position}, screenPosition:${screenPosition}`)
//         // console.log(window.scrollY);

//         // if (position < screenPosition) {
//         //     item.classList.add('showIntrocontent');
//         //     item.classList.remove('hideIntrocontent');
//         // } else {
//         //     item.classList.remove('showIntrocontent')
//         //     item.classList.add('hideIntrocontent');
//         // }

//         if (window.scrollY >= 415) {
//             // show
//             item.classList.add('showIntrocontent');
//             item.classList.remove('hideIntrocontent');
//         } else {
//             // hidden
//             item.classList.remove('showIntrocontent');
//             item.classList.add('hideIntrocontent');
//         }
//         if (window.scrollY >= 1800) {
//             // hidden
//             item.classList.remove('showIntrocontent');
//             item.classList.add('hideIntrocontent');
//         } else {
//             // show
//             item.classList.add('showIntrocontent');
//             item.classList.remove('hideIntrocontent');
//         }
//     });
// }
// window.addEventListener('scroll', scrollAppear);




