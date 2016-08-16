var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('customMenu', function(){
	return {
		// this directive is only going to be abailable to elements bc of this
		restrict: 'E', //E = Element A = Attribute, C = Class, M = Comment
		templateUrl: "views/menu.html"
	}
})


tweetApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'home.html',
		controller: 'homeController'
	})
	// At /trump, load up the same template, but new controller
	$routeProvider.when('/trump',{
		templateUrl: 'home.html',
		controller: 'trumpController'
	})
	// At /hillary, load up the same template, but new controller
	$routeProvider.when('/hillary',{
		templateUrl: 'home.html',
		controller: 'hillaryController'
	})
	$routeProvider.otherwise('/');
});