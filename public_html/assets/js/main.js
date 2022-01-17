(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    // $('.navbar-nav').onePageNav({
    //     currentClass: 'active',
            
    // }); 


    $('[href^=#]').on('click',function(e) {
      e.preventDefault();
      
      $('#main-navbar > ul > li').removeClass("active")
      $('.slicknav_menu > ul > li').removeClass("active")
      
      $(this).parent().addClass('active')
          
      const id = e.currentTarget.getAttribute("href")
      const goTo = document.querySelector(id).offsetTop;

      $('html, body').animate({
        scrollTop: goTo  -75
      }, 600);
      return false;
    });

    
    // $('a[href=#counter]').on('click',function(event) {
    //   event.preventDefault();
    //   $('html, body').animate({
    //     scrollTop: document.querySelector("#counter").offsetTop -75
    //   }, 600);
    //   return false;
    // });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));