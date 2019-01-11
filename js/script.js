

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

$('#lookDownBtn ').mouseenter(() => {
    $('#lookDownBtn').css("background" , '#F15025')
        .children().css('transform' , 'rotate(90deg)');
        $('#particles-js').css('width', '110%')
    }).mouseleave(() => {
    $('#lookDownBtn').css("background" , 'transparent')
    .children().text('arrow_forward')
    .css('transform' , 'rotate(0deg)');
    $('#particles-js').css('width', '100%')

});
$('.item').mouseenter(() => {
    $('#particles-js').css('width', '130%');
}).mouseleave(() => {
    $('#particles-js').css('width', '100%');
})

ScrollReveal().reveal('.headline', );
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });
ScrollReveal().reveal('.widget', { interval: 500 });

//nav
$(document).ready(function() {
    $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
// balls bouncing

let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
c.fillText("Hello World!", 10, 50);
let tx = window.innerWidth;
let ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

let mousex = 0;
let mousey = 0;

addEventListener("mousemove", function() {
    mousex = event.clientX;
    mousey = event.clientY;
});

//getting random word



let grav = 0.99;
c.strokeWidth=5;
function color() {
    return (
        'rgb(2, 1, 34)'
    );
}

function Ball() {
    this.color = color();
    this.radius = Math.random() * 20 + 14;
    this.startradius = this.radius;
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() /5;
    this.update = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.strokeStyle = this.color;
        c.stroke();
    };
}

let bal = [];
for (let i=0; i<10; i++){
    bal.push(new Ball());
}

function animate() {
    if (tx != window.innerWidth || ty != window.innerHeight) {
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, tx, ty);
    for (let i = 0; i < bal.length; i++) {
        bal[i].update();
        // bal[i].measureText(randomWord());
        bal[i].y += bal[i].dy;
        bal[i].x += bal[i].dx;
        if (bal[i].y + bal[i].radius >= ty) {
            bal[i].dy = -bal[i].dy * grav;
        } else {
            bal[i].dy += bal[i].vel;
        }
        if(bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0){
            bal[i].dx = -bal[i].dx;
        }
        if(mousex > bal[i].x - 20 &&
            mousex < bal[i].x + 20 &&
            mousey > bal[i].y -50 &&
            mousey < bal[i].y +50 &&
            bal[i].radius < 70){
            bal[i].radius +=5;
        } else {
            if(bal[i].radius > bal[i].startradius){
                bal[i].radius += -5;
            }
        }

        //forloop end
    }
//animation end
}

animate();

setInterval(function() {
    bal.push(new Ball());
    bal.splice(0, 1);
}, 400);
//modal
M.AutoInit();
$(document).ready(function(){
    $('.modal').modal();
});