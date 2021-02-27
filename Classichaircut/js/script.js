

function openCustomer(prices) {
  var i;
  var x = $(".prices");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
 $('.'+ prices).css("display", "block");  
}

$(document).ready(function(){

    // Scroll to sections
    $('.nav-partners, .nav-services, .nav-masters, .nav-comments, .nav-contacts, .mob-partners,.mob-services,.mob-masters, .mob-comments, .mob-contacts').on('click', function(){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function(){
                window.location.hash = hash;
            });
        } 
    });

    // Mobile menu
    function openNav(x) {
        $('body').toggleClass('noscroll');
        $(x).toggleClass("change");
        $('.mob-menu-container div').toggleClass('black');
        $(x).toggleClass("overlay-height");
        $("#mob-nav").toggleClass("overlay-height");
    }

    // on click open mobile navigation
    $('.mob-menu-container').on('click', function(){
        openNav(this);
    });

    $('.overlay-content a').on('click', function(){
      $('body').removeClass('noscroll');
      $('.mob-menu-container').removeClass('change')
      $('.mob-menu-container div').removeClass('black');
      $("#mob-nav").removeClass("overlay-height");
    });

    // Services Accordion
    var acc = $(".svc-accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      $(acc[i]).on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings('.svc-panel').toggleClass("hide");
      });
    }
    $('.svc-item-names a').on('click', function(){
      $('.svc-item-names a').removeClass('chosen');
      $(this).addClass('chosen');
    });


    // Scroll to top 
    var toTop = $("#scroll-top");

    $('#scroll-top').on('click', function(){
      topFunction();
    });

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.css('display', 'block');
      } else {
        toTop.css('display','none');
      }
    }

    function topFunction() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }


   // Masters / slick slider
    var $status = $('.pagingInfo');
    var $slickElement = $('.masters-slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html("<span class='current-page'>" + i + "</span> </span> <span class='last-page'>/" + slick.slideCount + '</span> ');
    
    });

    $slickElement.slick({
       arrows: true,
       prevArrow:  $('.prev-master'),
       nextArrow:  $('.next-master')
    });


});

 

// Comments / sending 

$(document).on('submit', 'form', function (event){
  //event.preventDefault();
  this_ = this;
  if ($(this_).hasClass('formbigmodal')==true){
      event.preventDefault();
      
      $('body').prepend('<div class="lp-loading" style="position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;"><div style="text-align:center;color:#fff;">подождите...</div></div>');
      
      body = '';
      $(this_).find('input[type=text]').each(function(i,elem) {
          body += 'input[]='+encodeURIComponent($(elem).val())+'&name[]='+encodeURIComponent($(elem).attr('data-name'))+'&';
          $(elem).val('');
      });

      $.post(window.location.protocol+'//'+window.location.host+'/mail.php', {'query':body}, function(data){
          $('body').removeClass('modal-open').css({"padding-right":"0"});
          $('.lp-loading').remove();
          $('body').prepend('<div onclick="$(this).remove();" class="lp-success" style="position:fixed;z-index:999;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;"><div style="text-align:center;color:#fff;">успешно отправлено</div></div>');
          
      });
      
  }

  if ($(this_).hasClass('form-html')==true){
      event.preventDefault();
      
      $('body').prepend('<div class="lp-loading" style="position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;"><div style="text-align:center;color:#fff;">подождите...</div></div>');
      
      body = '';
      $(this_).find('input[type=text]').each(function(i,elem) {
          body += 'input[]='+encodeURIComponent($(elem).val())+'&name[]='+encodeURIComponent($(elem).attr('data-name'))+'&';
          $(elem).val('');
      });

      $.post(window.location.protocol+'//'+window.location.host+'/mail.php', {'query':body}, function(data){
          $('.lp-loading').remove();
          $('body').prepend('<div onclick="$(this).remove();" class="lp-success" style="position:fixed;z-index:999;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;"><div style="text-align:center;color:#fff;">успешно отправлено</div></div>');
      });
      
  }
});