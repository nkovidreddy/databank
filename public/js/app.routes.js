// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
 .config(function($routeProvider, $locationProvider) {
$routeProvider


// route for the index page
 	.when('/index', {
 	templateUrl : '/index.html',
 	controller : 'mainController',
 	controllerAs: 'main'
 	})

 	.when('/home', {
 	templateUrl : '/home.html',
 	controller : 'homeController',
 	controllerAs: 'home'
 	})

 // route for the about page
 	.when('/getanalytics', {
 	templateUrl : '/getanalytics.html',
	controller : 'analyticsController',
	controllerAs: 'analytics'
	});

 // set our app up to have pretty URLS
$locationProvider.html5Mode(true);
});