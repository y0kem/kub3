var count = 1;
  $('.mobile div').on('click', function () {
      $('.mobile div').toggleClass('active');
  
      if (count % 2 == 0) {
          $('.mobile div span').removeClass("backgr-white").addClass("backgr-black");
          count++;
      } else {
          $('.mobile div span').removeClass("backgr-black").addClass("backgr-white");
          count++;
      } // $('.mobile div span').addClass('backgr-white');
  
  
      $('.mobile nav').toggleClass('open');
      $('.mobile nav ul').toggleClass('show');
  });
  
  $('.mobile nav ul').on('click', function () {
      $('.mobile div').toggleClass('active');
      $('.mobile nav').removeClass('open');
  });
  
  $('a.open-modal').click(function(event) {
      $(this).modal({
        fadeDuration: 250
      });
      return false;
    });