var slider = document.getElementById("slider");
var sliderImage = document.getElementById("sliderImage");
var sliderText = document.getElementById("sliderText");
var sliderLink = document.getElementById("sliderLink");
var sliderCtrl = document.getElementById("sliderCtrl");
var slides = [
	{image: 'backend_resources/images/rogue-spend-smaller.png', description: "<p class='bold sans text-25 italic'>Knock Out Rogue Spend</p><p class='bold sans text-20'>Watch Puridiom Man's Latest Adventure Now</p>", link: 'http://vimeo.com/111857724' },
	{image: 'backend_resources/images/paystream-report_bannerBG.jpg', description: "<p class='bold sans text-25 blue'>PayStream eProcurement Report 2014:<br>Unlocking the Keys to Dynamic P2P</p><p class='bold sans text-20'>Find the Procurement Solution that Fits <span class='blue'>Your</span> Needs</p>", link: 'http://post.puridiom.com/acton/media/5671/puridiom-50-preview'},	
	{image: 'backend_resources/images/austin.jpg', description: "<p class='bold sans text-25'>Puridiom Purchasing Solutions is Solid Where it Counts</p><p class='sans bold text-20 orange'>Read the Next Level Purchasing Review</p>", link: 'http://www.purchasing-certification.com/2014/06/nlpa-vendor-review-puridiom-eprocurement-is-solid-where-it-counts.html'},
	{image: 'backend_resources/images/zach.jpg', description: "<p class='bold sans text-20'>Follow 2014 Procurement <span class='orange text-25'>Trends and Predictions</span><br><span class='orange text-25'>Click</span> to read the report</p>", link: 'http://post.puridiom.com/acton/fs/blocks/showLandingPage/a/5671/p/p-007a/t/page/fm/2'},
	{image: 'backend_resources/images/cindy.jpg', description: "<p class='bold sans text-20 orange'>Need more information?</p><p class='bold sans text-25'>Check out our Procurement Resources Library.</p>", link: 'resources.html'},
];
var openCircle = "  &#9675;  ";
var closedCircle = "  &#9679;  ";
var currentIndex = 0;
function fwdCurrentSlideIndex(){
	slider.style.opacity = "0";
	setTimeout(function(){
	if (currentIndex<slides.length-1){
		currentIndex++;
	}
	else{
		currentIndex = 0;
	}
	sliderImage.src = slides[currentIndex].image;
	sliderText.innerHTML = slides[currentIndex].description;
	sliderLink.href = slides[currentIndex].link;
	buttonSwitch(currentIndex);
	slider.style.opacity="1";}, 1000);
};
function setTimer (){
	timer = window.setInterval("fwdCurrentSlideIndex()", 7000);
} ;
slider.onmouseover = function(){clearInterval(timer)};
slider.onmouseout = function(){setTimer()};
sliderImage.src = slides[currentIndex].image;
sliderText.innerHTML = slides[currentIndex].description;
sliderLink.href = slides[currentIndex].link;
var slideButtons = "";
for (i=0; i<slides.length; i++){
	slideButtons = slideButtons + "<span class='slideButton orange text-25 bold sans'>" + openCircle + "</span>";
};
sliderCtrl.innerHTML = slideButtons;
setTimer();

var slideButton = document.getElementsByClassName("slideButton");

var buttonSwitch=function(currentIndex){
	for (i=0; i<slideButton.length; i++){
		if (i==currentIndex){
			slideButton[i].innerHTML=closedCircle;
		}
		else{
			slideButton[i].innerHTML=openCircle;
		}
	};
};
buttonSwitch(currentIndex);

for (i=0; i<slideButton.length; i++){
	(function(index){
		slideButton[i].addEventListener('click', function(){
			clearInterval(timer);
			slider.style.opacity = "0";
			setTimeout(function(){
				currentIndex=index;
				sliderImage.src = slides[currentIndex].image;
				sliderText.innerHTML = slides[currentIndex].description;
				sliderLink.href = slides[currentIndex].link;
				buttonSwitch(currentIndex);
				slider.style.opacity="1";		
			}, 1000);
			setTimer();
		}, 'false');
		slideButton[i].addEventListener('mouseover', function(){
			slideButton[index].innerHTML=closedCircle;
		}, 'true');
		slideButton[i].addEventListener('mouseout', function(){
			if (currentIndex != index){
				slideButton[index].innerHTML=openCircle;
			}
		}, 'true');
	})(i);
};
