$("#btnDr , #btnRide").mouseenter(function () {
    $(this).children().css({
        position: 'relative' ,
        left: '5px',
    })
}).mouseleave(function () {
    $(this).children().css({
        position: 'relative' ,
        left: '0',

    })
});
$(".mapBg , .learnMore").hover(function () {
    $(this).children().last().css({
        position: 'relative' ,
        left: '30px',

    })
}).mouseleave(function () {
    $(this).children().css({
        position: 'relative' ,
        left: '0',

    })
})