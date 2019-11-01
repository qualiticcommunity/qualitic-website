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

    /* ==========================================================================
       countdown timer
       ========================================================================== */

    function toFa(enText) {
      const enToFaNumberMap = {
          "0": "۰",
          "1": "۱",
          "2": "۲",
          "3": "۳",
          "4": "۴",
          "5": "۵",
          "6": "۶",
          "7": "۷",
          "8": "۸",
          "9": "۹"
      };

      return enText !== undefined
          ? enText
                .toString()
                .split("")
                .map(enChar => enToFaNumberMap[enChar] || enChar)
                .join("")
          : "";
    };

     jQuery('#clock').countdown('2019/11/12 17:00',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry seconds"><span>' + toFa(event.offset.seconds) + '</span><strong>ثانیه</strong></div> '
	  +'<div class="time-entry minutes"><span>' + toFa(event.offset.minutes) + '</span><strong>دقیقه</strong></div>'
      +'<div class="time-entry hours"><span>' + toFa(event.offset.hours) + '</span><strong>ساعت</strong></div> '
      +'<div class="time-entry days"><span>' + toFa(event.offset.totalDays) + '</span><strong>روز</strong></div> '));
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