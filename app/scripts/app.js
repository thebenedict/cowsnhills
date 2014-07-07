'use strict';

var app = angular.module('cowsnhillsApp', [
  'ngCookies',
  'ngSanitize',
  'firebase',
  'ui.router',
  'simpleLoginTools',
  'ui.routeSecurity'	// https://gist.github.com/mattvv/183e2a4073557b77ecb3
]);

app.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'MainCtrl',
			authRequired: true
		})
		.state('login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'views/auth/login.html'
		})
		.state('register', {
			url: '/register',
			controller: 'RegisterCtrl',
			templateUrl: 'views/auth/register.html'
		})

	$urlRouterProvider.otherwise('/')
}])

app.constant('FBURL', "https://cowsnhills.firebaseio.com/");

app.constant('loginRedirectPath', '/login')

app.run(['$rootScope', 'FBURL', 'Auth', function($rootScope, FBURL, Auth){
  // establish authentication
  $rootScope.auth = Auth.init('/login');
  $rootScope.FBURL = FBURL;
}])