$("dd").hide().first().show();

$("<button></button>", {
  text: "Click to see answer",
  class: "faqControl"
}).appendTo("dt");

$(".question")
  .click(function(){
    $(this).next("dd").slideToggle();
  });

$(".faqControl")
	.focus(function(){
	  $(this).parent().next("dd").slideDown();
	});

$(".faqControl")
	.blur(function(){
	  $(this).parent().next("dd").slideUp();
	});
