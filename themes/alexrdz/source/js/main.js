$(function() {

  // Fade-in onLoad
  /*----------------------------------------------------------------*/  
  var $window = $(window),
      $wrapper = $('.Home'),
      $wrapper_secondary = $('.Page'),
      $loader = $('.preloader');

  // Add animate class to wrappers
  $wrapper.addClass('animate');
  $wrapper_secondary.addClass('animate');

  $window.on('load', function() {
    
      if($wrapper) {
        $wrapper.addClass('fade-in');
      } 
      if($wrapper_secondary) {
        $wrapper_secondary.addClass('fade-in');
      }
      $loader.remove();
    
  });




  // Page Scroll
  /*----------------------------------------------------------------*/  

      $(document).on('click', '.js-contact', function() {
        var target = this.hash;
        var $target = $(target);
        var pagetop = $('body').height();
        
        
        $('html, body').stop().animate({
            scrollTop: $target.offset().top + pagetop
        }, 250);

        return false;
      });



  // Responsive Menu
  /*----------------------------------------------------------------*/  
  var $body = $('body'),
      $trigger = $('.js-nav-trigger');

  $trigger.on('click', function() {
    ($trigger, $body).toggleClass('is-active'); 
  });


});