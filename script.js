

$('#nameHover').mouseenter(() => {
    console.log("lll");
    // $('#pibo').css({
    //     position : 'relative',
    //     top: '30px'
    // })
}).mouseleave(() => {
    $('#nameHover').css({
        // position : 'relative',
        // top: '0px'
    })
});

$('#lookDownBtn').mouseenter(() => {
        $('#lookDownBtn').css("background" , '#F15025')
        .children().css('transform' , 'rotate(90deg)');
        $('#particles-js').css('width', '110%')
    }).mouseleave(() => {
    $('#lookDownBtn').css("background" , 'transparent')
    .children().text('arrow_forward')
    .css('transform' , 'rotate(0deg)');
    $('#particles-js').css('width', '100%')

});



