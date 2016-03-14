function isScrolledTo(elem) {
  var docViewTop = $(window).scrollTop(); //num of pixels hidden above current screen
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top; //num of pixels above the elem
  var elemBottom = elemTop + $(elem).height();

  return (elemTop <= docViewBottom); //if the bottom of the current viewing area is lower than the top of the trigger
}


var deletePopup = $('.delete-popup')
var trigger = $('.footer');    //set the trigger
var reached = false;
var done = false;


var viewportWidth = $(window).width();
var minWidth = 767;
//alert(minWidth);


$(window).scroll(function() {
  if(isScrolledTo(trigger)) {
    if(viewportWidth > minWidth){
    //slide CTA onto screen
    if(!reached){
      if(!done){
      $('.slide-in-CTA').animate({
        bottom: 0
      }, "fast");

      reached = true;
      done = false;
    }
    }
  }
  }

  if (!isScrolledTo(trigger)) {

    //slide CTA off of screen
    if(reached){
      if(!done){
      $('.slide-in-CTA').animate({
        bottom: -260
      }, "fast");

      reached = false;
      done = false;
    }
    }
  }
});


$('.delete-popup').click(function(){
  //slide CTA off of screen
    $('.slide-in-CTA').animate({
      bottom: -260
    }, "fast");

    reached = true;
    done = true;
});
