'use strict';

app.controller('NavCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location){
	$scope.logout = function(){
		Auth.logout();
		$location.path('/login')
	}
}])