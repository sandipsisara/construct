$(document).ready(function () {

    $('#banner').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#portfolio1').owlCarousel({
        loop: false,
        rewind: true,
        margin: 15,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $(window).scroll(function(){
        var sticky = $('.sticky'),
              scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
        });

        

    $('#news').owlCarousel({
        loop: false,
        rewind: true,
        margin: 15,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $('#testi1').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#team').owlCarousel({
        loop: false,
        rewind: true,
        margin: 15,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });


    setTimeout(function () {
        $('.loaderes').fadeOut();
    }, 2000)

    $('.bottom_top').click(function () {
        $("html, body").animate({
            scrollTop: '0px'
        }, 500);
        return false;
    });

    $('.bottom_top').hide();

   $(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.bottom_top').fadeIn();
    }
    else {
        $('.bottom_top').fadeOut();
    }
   });

   var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter li a').click(function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

//   var owl = $('#banner');
//         owl.owlCarousel();
//         // Listen to owl events:
//         owl.on('changed.owl.carousel', function(event) {
//            new WOW().init();
//         });

//         wow = new WOW(
//                       {
//                       boxClass:     'wow',      // default
//                       animateClass: 'animated', // default
//                       offset:       0,          // default
//                       mobile:       true,       // default
//                       live:         true        // default
//                     }
//                     )
//                     wow.init();
  
});