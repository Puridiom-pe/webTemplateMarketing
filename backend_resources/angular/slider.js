var slider = document.getElementById("slider");
var sliderCtrl = document.getElementById("sliderCtrl");
var slides = slider.getElementsByTagName("li");
var numberofSlides = slides.length;
var step = 0;
var sliderTimeout;

// adding a unique ID to each of the slides
function idSlides() {
	for (var i = 0; i < numberofSlides; i++) {
		slides[i].setAttribute("id", "slide"+i+"");
	}
};


// function to build the circles based on the number of li's that are in the slider
function buildCircles() {
	var pages = document.getElementById("sliderCtrl");
	for(i=0;i<numberofSlides;i++) {
		pages.innerHTML += "<div onClick='switchPageTo("+i+")' id='circle" + i + "' class='pager'></div>";
	};
	switchPageTo();
}
idSlides();
buildCircles();

// This function when a circle is clicked, meaning the user wanted to go to that page
// The page number is passed to this function and then fader is run with the new vaiable
// that is selected.
function switchPageTo(pageNumber) {
	if(pageNumber == undefined || pageNumber == null) {
		fader();
	} else {
		step = pageNumber;
		clearTimeout(sliderTimeout);
		fader(step);
	}
}

function fader() {
	
	// loop through all slides to check for the current one
	for(var i =0; i < numberofSlides; i++) {
		var currentSlide = document.getElementById("slide" + i);
		var currentCircle = document.getElementById("circle" + i);
		
		// if the current one is selected, give it activeSlide and
		// give the circle associated with that one a class of activeCircle.
		// then, remove the hidden classes from each.
		// do the opposite for all the other slides via else statement.
		if(i == step) {
			// showing the current slide
			currentSlide.classList.add("activeSlide");
			currentSlide.classList.remove("hiddenSlide");
			currentCircle.classList.add("activeCircle");
			currentCircle.classList.remove("hiddenCircle");
		} else {
			// hiding the slides that are not current
			currentSlide.classList.add("hiddenSlide");
			currentSlide.classList.remove("activeSlide");
			currentCircle.classList.add("hiddenCircle");
			currentCircle.classList.remove("activeCircle");
		}
	}
	
	// After each slide is looped through to find the current,
	// incriment the step number so that the next slide can be shown
	if(step < numberofSlides - 1) {
		step++;
	} else {
		step = 0;
	}
	
	// Rerun the fader function after 7 seconds so that the current
	// slide is shown for that ammount of time before it switches.
	sliderTimeout = setTimeout("fader()", 7000);
}