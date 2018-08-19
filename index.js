/* For bouncing the logo */
$(document).ready(function(){
     setTimeout(() => {
       $('.js-animate-1').addClass('animated bounce');
    }, 1000)
});


/* For Scrolling to the specific points */
$('.js-scroll-me').click(function(){
    $('html,body').animate({scrollTop:$('.aboutme').offset().top},1000);
});

$('.js-scroll-projects').click(function(){
    $('html,body').animate({scrollTop:$('.projects').offset().top},1000);
});

$('.js-scroll-contact').click(function(){
    $('html,body').animate({scrollTop:$('.contact').offset().top},1000);
});

$('.js-scroll-open').click(function(){
    $('html,body').animate({scrollTop:$('.dirt').offset().top},1000);
});
