$(function(){


    $('.counter_number').counterUp({
        delay: 10,
        time: 2000
      });

      
      var html_body = $('html,body');
      var backtotop = $('.back2top');
      var navbar = $('.navbar');
  
      backtotop.on('click',function(){
          html_body.animate({scrollTop:0},1000);
      });
      
      $(window).on('scroll',function(){
          
          var scrolling = $(this).scrollTop();
          
          if(scrolling > 50){
             $('.navbar').addClass("bg");
             }
          else{
              navbar.removeClass('bg');
          }
          
          if(scrolling > 300){
              backtotop.fadeIn();
             }
          else{
              backtotop.fadeOut();
          }
      });

// loader js
$(window).on("load",function(){
  $("#loadeer_container").fadeOut(2500);

});

      $('.slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
      });

    // type js
    var typed = new Typed('.type', {
    strings: ['A Web Designer', 'A Web Developer', 'A Graphics Designer'],
    smartBackspace: true,
    typeSpeed: 100,
    startDelay: 50,
    loop: true,
    backDelay: 1500,
    
    // Default value
  });

   
})