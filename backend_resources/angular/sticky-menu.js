var  mn = $(".sticky-menu");
mns = "sticky-menu-scrolled";
hdr = $('.pugc-header').height();
sectionMain = $('.main-section');


$(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
      //sectionMain.css('margin-top: 30px');
      } else {
      mn.removeClass(mns);
      //sectionMain.css('margin-top: 0px');
      }
    });
