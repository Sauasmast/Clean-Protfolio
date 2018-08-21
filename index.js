/* For bouncing the logo */
$(document).ready(function(){
     setTimeout(() => {
       $('.js-animate-1').addClass('animated zoomIn');
    }, 500);

    var typed3 = new Typed('.js-type', {
        strings: ['Glitch', 'Hi It\'s me:  Sauasmast','Hi It\'s me: Saugat', ' Programmer and Web Designer', 'IOT Developer', 'Check out my protfolio','Reach Out'],
        typeSpeed: 100,
        backSpeed: 100,
        smartBackspace: true, // this is a default
        loop: true
      });
        
});

/* For Scrolling to the specific points */
$('.js-scroll-me').click(function(){
    $('html,body').animate({scrollTop:$('.aboutme').offset().top},1000);
});

$('.js-scroll-projects').click(function(){
    $('html,body').animate({scrollTop:$('.projects').offset().top},1000);
});

$('.js-scroll-contact').click(function(){
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

$('.js-animate-8').waypoint(function(direction){
    $('.js-animate-8').addClass('animated fadeInUpBig');
},{offset: '80%'});


$('#feedback-btn').click(function(){
    var Name= $('#name').val();
    var Email= $('#email').val();
    var Comment = $('#message').val();  
      
      if(Name=="" || Email=="" || Comment==""){
        alert("You need to fill out all the requirements");
      }
      
      else if(!(Email.includes('@'))){
        alert("Please input the valid Email address.");
      }
      else{
   $.ajax({
          url: "./into.php", 
          type:'POST',
          data:{Name : Name,
               Email : Email,
               Comment: Comment},
           success: function (){
             $('#feedback-form').fadeOut(300, function()
                                         { $(this).remove();
                                         });
              $('#change').hide().html("<h1> Thank you </h1>").fadeIn('slow');
          },
          error: function(jqXHR, textStatus, errorThrown) {
             console.log(textStatus, errorThrown);
          }            
      });
      }
  });