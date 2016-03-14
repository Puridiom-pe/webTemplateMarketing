var puridiom = angular.module('puridiom', ['ngAnimate'])

puridiom.controller('MainController', function($scope, $location, $interval){
	$scope.$on("$locationChangeStart", function (event, nextLocation, currentLocation) {
   		$scope.isActive=false;
	});
	$scope.$on("$locationChangeStart", function (){
		stop = function () {$interval.cancel(go);};
	});
});