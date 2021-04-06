$(window).scroll(function(){
    if ($(window).scrollTop() > 100){
       $('.header').addClass('scroll');
    } else {
       $('.header').removeClass('scroll');
    }
 });

 $(".reason-blocks__list__hidden-button").click(function() {
    $(this).text(function(i, text) {
      return text === "More" ? "Hide" : "More";
    })
  });

 $('.reason-blocks__list__hidden-button').click(function(){
    $(".reason-blocks__list__hidden").fadeToggle(500);
  });  