jQuery(document).ready(function($) {

    // Burger Menu
    function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }


    $('.bar-container').on('click', function(x){
       if (!$(this).hasClass('closebtn')) {
         $(this).addClass('change').addClass('closebtn');
          openNav();
          $('body').css('overflow', 'hidden');
       }

      else if ($(this).hasClass('closebtn')) {
        closeNav();
         $(this).removeClass('change').removeClass('closebtn').css('position', 'absolute');
          $('body').css('overflow', 'visible');
      }

    });
    // End Burger Menu

    // Section - 4  Packages
    $('.package-wrapper').on('click', function(){
       $(this).siblings('.checkSlideToggle').click();

        if ($(this).siblings('.checkSlideToggle').is(':checked')) {
         $(this).find('.package-dots').css('background','#4f4a66');
          $(this).siblings('.package-body').slideDown(400);
        }
        else{
           $(this).find('.package-dots').css('background','#ffd22e');
          $(this).siblings('.package-body').slideUp(400);
        }
     }); 
    // End Section - 4  Packages

    // jQuery-Mask
     $('#phone').mask('+(000) 000000000000');
     $('#callBack-phone').mask('+(000) 000000000000');
     // End jQuery-Mask


    // Agree checkbox
    $('#agree-checkbox').on('change', function(){
      if ($(this).is(':checked')) {
        $('.square').css('opacity','1');
      }
      else{
        $('.square').css('opacity','0');
      }
    });
    // End Agree checkbox

    //Video

    $(function(){
      $("#video__play").click(function(){
        var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
        $(this).parents('.js-video').html('<iframe  src="https://www.youtube.com/embed/'+dataYoutube+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      });

    });
    // End Video

    // Discount DateTime

      // Set the date we're counting down to
      var countDownDate = new Date("Jun 25, 2021 16:23:00").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id
        if (days < 10) {
          days = '0' + days;
        }
        if (hours < 10) {
          hours = '0' + hours;
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

        // If the count down is finished, write some text 
        if (distance < 0) {
          clearInterval(x);

          $("#days").html('0');
          $("#hours").html('0');
          $("#minutes").html('0');
          $("#seconds").html('0');
          $("#countdown").html('АКЦИЯ ЗАКОНЧИЛОСЬ');
          $('.discount-wrapper').css('display','none');
          return;
        }
      }, 1000);

    // End Discount DateTime





//******** Modals ********//

    // id01

    // Get the modal
    var modal = $('#id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


    $('#callBack-agree-checkbox').on('change', function(){
      if ($(this).is(':checked')) {
        $('.callBack-agree-checkbox').css('background-color','#ffd22e');
      }
      else{
        $('.callBack-agree-checkbox').css('background-color','transparent');
      }
    });
    // End id01
    

//******** End Modals ********//


});  









