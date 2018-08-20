/* For bouncing the logo */
$(document).ready(function(){
     setTimeout(() => {
       $('.js-animate-1').addClass('animated zoomIn');
    }, 500);

    $(window).resize(function(){
        alterClass();
    });
    
    //Fire it when the page first loads:
    alterClass();
});

var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 400) {
        $('.test').removeClass('blue');
    } else if (ww >= 401) {
        $('.test').addClass('blue');
      };
    };

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

/* Adding the animation on scroll with the waypoints */

$('.js-animate-2').waypoint(function(direction){
        $('.js-animate-2').addClass('animated fadeInDown')}
        ,{offset: '75%'});

$('.js-animate-3').waypoint(function(direction){
    $('.js-animate-3').addClass('animated fadeIn')}
    ,{offset: '75%'});

$('.js-animate-4').waypoint(function(direction){
    $('.js-animate-4').addClass('animated fadeInLeft')}
    ,{offset: '75%'});

$('.js-animate-5').waypoint(function(direction){
    $('.js-animate-5').addClass('animated fadeInRight');
    $('.big-line').addClass('animation');
},{offset: '75%'});

$('.js-animate-7').waypoint(function(direction){
    $('.contact .row:nth-child(3)>div').addClass('animated rotateIn');
},{offset: '60%'});
