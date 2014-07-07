'use strict'

app.controller('DashboardCtrl', ['$scope', 'Cooperative', function($scope, Cooperative){

	$scope.cooperatives = Cooperative.all;

	
}])
