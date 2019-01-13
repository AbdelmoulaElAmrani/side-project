let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}
//


$('.suggestedQuestions').click(function () {
    $('.options').fadeOut();
    let question = $(this).html();
    $('.message').append(`<div class="you"> ${question} </div>`);
    let messageBody = document.querySelector('.messages');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    let id = $(this).attr('id');
    // console.log(id);
    setTimeout(function () {

        loadingMsg()
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    },1000)

    setTimeout( function() {
        // $(this).remove();
        $('.dots').remove();
        answers(id);
        plusSlides(1);
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
        $('.options').fadeIn();

    }, 5000);
});


function loadingMsg() {
    $('.message').append(`<div class="pibo dots"> <span class="jumping-dots"><span>.</span><span>.</span><span>.</span></span></div>`)
    $('.dots').css('width' , '30px')
}


function answers(q) {
    switch (q) {
        case 'q1':
            $('.message').append(`<div class="pibo piboSlide"> My full name is Abdelmoula El Amrani but everyone that I know called me pibo 😄 ,I'm 24 years old and I'm @imported from Morocco , Now living in the most friendly and welcoming city 🤠,San Antonio. </div>`);
            break;
        case 'q2':
            $('.message').append(`<div class="pibo piboSlide"> As you can tell my name is really hard to pronounce 😶, so I growing up i had been called all kind of nicknames 😅 until high school my friend and family came up with this weird nickname Pibo and until today I'm still using it</div>`);
            break;
        case 'q3':
            $('.message').append(`<div class="pibo piboSlide"> I love being creative 🖌 and artistic 🎭 , in the same time I love logic 🧠, algorithms and seeing my projects executed and shared , also I love helping others by whatever I can , and I enjoy solving problems 🕵 all this is giving to you by a simple file of code</div>`);
            break;
        case 'q4':
            $('.message').append(`<div class="pibo piboSlide">Yes I saw someone project at the first and I thought it's pretty challenging ! and later I did code it during the weekend , it was pretty fun to do😊</div>`);
            break;
        case 'q5':
            $('.message').append(`<div class="pibo piboSlide">Most of my background was Marketing , especially digital marketing and enjoy wring so I did wrote to a lot of magazines and did some commercials script writing to</div>`);
            break;
        case 'q6':
            $('.message').append(`<div class="pibo piboSlide">That the best part , I was interested in learning coding via a bootcamp , so I searched 🧐 online and the first result in my city was CODEUP , I went for their tour and I loved the placed and then I started and it became the best experience of my life </div>`);
           setTimeout(function () {

            $('.message').append(`<div class="pibo piboSlide">by the way if you are interested in coding and you are based in San Antonio contact them and just mention Pibo 🤗, they will take a good care of you </div>`);
           },2000);
            break;
        case 'q7':
            $('.message').append(`<div class="pibo piboSlide"> I will be happy to answer all of them just let me know from <a href="CONTACT.html">HERE</a></div>`);
            break;

    }

    // if (q = 'q1'){
    //     $('.message').append(`<div class="pibo"> I'm ...</div>`);
    // } else if (q = 'q2'){
    //     $('.message').append(`<div class="pibo"> yes i did ....</div>`);
    // } else if (q = 'q3'){
    //     $('.message').append(`<div class="pibo"> because</div>`);
    // }

}