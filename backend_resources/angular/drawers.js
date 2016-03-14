/*var drawers = document.getElementsByClassName("drawer");
window.onload=function(){
	for(i=0; i<drawers.length; i++){
		drawers[i].children[1].addEventListener('click', function(index){
			function toggleDrawer (index){
				console.log("toggle drawer" + index);
				
			};
		}(i));
	};
};*/

var toggleDrawer = function(e){
	var drawer = e.target.parentNode;
	var drawerBottom = drawer.children[1];
	if (drawerBottom.classList.contains('open-drawer')){
		drawerBottom.className = "drawer-bottom";
	}
	else{
		drawerBottom.className = "drawer-bottom open-drawer";
	}
};