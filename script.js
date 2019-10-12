var firstimg = document.querySelector('.box1');
var tl = anime.timeline({
    targets: 'div',
    // delay: function(el, i) {
    //     return i * 100
    // },
    duration: 5000,
    easing: 'easeOutExpo'
});
tl.add({
    targets: '.box1',
    translateX: ['100%', '0%'],
    opacity: [.5, 1]
});
tl.add({
    targets: '.box2',
    translateX: ['100%', '0%'],
    opacity: [0, 1],
    borderWidth: {
        value: ['200px', '15px'],
        delay: 2000,
    }
}, 2000);
tl.add({
    targets: ['menu', 'a', '.menu'],
    translateX: [-50, 0],
    opacity: [0, 1]
}, 3000);
tl.add({
    targets: 'h1',
    translateX: [-100, 0],
    opacity: [0, 1]
}, 3000);
tl.add({
    targets: ['p', 'cite'],
    rotateX: [90, 0],

}, 3000);

var menu = document.querySelector('.menulist');
var header = document.querySelector('header');
var sohide = document.querySelector('menu').onclick = function() {
    menu.style.left = 'calc(100% - 500px)';
    header.style.filter = 'blur(4px)';
    anime({
        targets: '.list',
        opacity: [0, 1],
        duration: 2000,
        delay: function(el, i, l) {
            return i * 150;
        }
    })
}
var close = document.querySelector('.close').onclick = function() {
    menu.style.left = '100%';
    header.style.filter = 'blur(0px)';
};