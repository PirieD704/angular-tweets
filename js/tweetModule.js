var tweetApp = angular.module('tweetApp', ['ngRoute']);

var tweets = {prop: "Property"}


tweetApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	})
	// At /trump, load up the same template, but new controller
	$routeProvider.when('/:searchTerm',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	})
	// At /hillary, load up the same template, but new controller
	$routeProvider.when('/:searchTerm*',{
		templateUrl: 'home.html',
		controller: 'hillaryController'
	})
// 	$routeProvider.otherwise('/');
});

// function Tweet(subject, content, time){
// 	this.subject = subject;
// 	this.tweet = content;
// 	this.time = time;
// }


