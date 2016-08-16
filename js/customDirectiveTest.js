var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('tweetHello', function(){
	return {
		// this directive is only going to be abailable to elements bc of this
		restrict: 'E', //E = Element A = Attribute, C = Class, M = Comment
		templateUrl: "Hello, Class!"
	}
})

tweetApp.directive('helloAttr', function(){
	return {
		// this directive is only going to be abailable to attributes bc of this
		restrict: 'A', //E = Element A = Attribute, C = Class, M = Comment
		template: "Hello, Class from an Attribute!"
	}
})

tweetApp.directive('helloClass', function(){
	return {
		// this directive is only going to be abailable to class bc of this
		restrict: 'C', //E = Element A = Attribute, C = Class, M = Comment
		template: "Hello, Class! from another type of class"
	}
})

tweetApp.directive('turnMeBlue', function(){
	return{
		link: function($scope, element, attrs){
			element.bind('mouseenter', function(){
				element.css('color', $scope.myColor);
				console.log(element);
			})
			element.bind('mouseleave', function(){
				element.css('color', 'black');
			})
		}
	}
})