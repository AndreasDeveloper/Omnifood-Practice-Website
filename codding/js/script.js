$(document).ready(function() {

    /* Sticky Navigation Setup */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
       offset: '60px;'
    });

    /* Scroll on Buttons Setup */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-pricing').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    /* SETUP FOR SMOOTH SCROLLING FOR ELEMETS */
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  /* SETUP FOR SMOOTH SCROLLING FOR ELEMENTS */

  /* ANIMATIONS ON SCROLL */

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated slideInLeft');
    }, {
         offset: '50%'
    });


    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated slideInUp');
    }, {
       offset: '50%'
    });


    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated slideInLeft');
    }, {
        offset: '50%'
    });


    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse');
    }, {
       offset: '50%'
    });




    /* Mobile Nav */
    $('.js--nav-icon i').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');

       nav.slideToggle(200);

        if  (icon.hasClass('icon ion-ios-menu')) {
            icon.addClass('icon ion-ios-close');
            icon.removeClass('icon ion-ios-menu');
        } else {
            icon.addClass('icon ion-ios-menu');
            icon.removeClass('icon ion-ios-close');
        }
    });
});