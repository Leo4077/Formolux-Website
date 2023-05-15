function scrollAppear() {
    let items = document.querySelectorAll('.homepage-introimage-content');

    items.forEach(function(item) {
        let position = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 0.8;

        if (position < screenPosition) {
            item.classList.add('showIntrocontent');
            item.classList.remove('hideIntrocontent');
        } else {
            item.classList.remove('showIntrocontent')
            item.classList.add('hideIntrocontent');
        }
    });
}
window.addEventListener('scroll', scrollAppear);



/* 自動回到頂部 */
window.onbeforeunload = function(){
    //刷新后页面自动回到顶部
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
}