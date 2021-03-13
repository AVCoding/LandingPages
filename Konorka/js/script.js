
function openCustomer(currentTab) {
  $('.product-types > a').removeClass('active-type');
  var i;
  var x = $(".product-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
 $('.'+ currentTab).css("display", "block");  
}


jQuery(document).ready(function($) {
    $('.product-types a').on('click', function(){
    	$('.product-types  a').removeClass('active-type');
  		$(this).addClass('active-type');
    });

     // Mobile menu
    function openNav(x) {
        $(x).toggleClass("change");
         $('.menu-items').toggleClass('hide');
         $('.menu-items').slideToggle(250);
    }

    // on click open mobile navigation
    $('.mob-menu-container').on('click', function(){
        openNav(this);
    });

    // Main slider / slick slider
    var $status = $('.pagingInfo');
    var $slickElement = $('.main-slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html("<span class='current-page'>" + i + "</span> </span> <span class='last-page'>/" + slick.slideCount + '</span> ');
    
    });

    $slickElement.slick({
       arrows: true,
       // fade: true,
       infinite: true,
       autoplay: true,
       autoplaySpeed: 3000,
       prevArrow:  $('.prev-service'),
       nextArrow:  $('.next-service')
    });


    // Services slider
    var $svc = $('.svc-slider');
    $svc.slick({
       arrows: true,
       // fade: true,
       prevArrow:  $('.prev-svc'),
       nextArrow:  $('.next-svc')
    });

    // Comments slider
    var $comments = $('.comments-slider');
    $comments.slick({
       arrows: true,
       dots: true,
       // fade: true,
       dotsClass: 'com-dots',
       appendDots: $('.comments-dots-wrapper'),
       slidesToShow: 3,
       slidesToScroll: 3,
       prevArrow:  $('.prev-comment'),
       nextArrow:  $('.next-comment'),
       responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
         {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

    // AOS animation
    AOS.init();

});




