'use strict';

var app = angular.module('cowsnhillsApp', [
  'ngCookies',
  'ngSanitize',
  'firebase',
  'ui.router',
  'ui.bootstrap',
  'simpleLoginTools',
  'ui.routeSecurity'	// https://gist.github.com/mattvv/183e2a4073557b77ecb3
]);

app.constant('FBURL', "https://cowsnhills.firebaseio.com/");

app.constant('loginRedirectPath', '/login')

// initialization
app.run(['$rootScope', '$state', '$stateParams', 'FBURL', 'Auth', 
	function($rootScope, $state, $stateParams, FBURL, Auth){
	  // establish authentication
	  $rootScope.auth = Auth.init('/login');
	  $rootScope.FBURL = FBURL;
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	}])