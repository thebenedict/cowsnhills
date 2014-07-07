'use strict'

app.controller('ViewCooperativeCtrl', ['$scope', '$state', '$stateParams', 'Cooperative', function($scope, $state, $stateParams, Cooperative){

	// get cooperative data from URL
	$scope.cooperative = Cooperative.read($stateParams.cooperativeId)

}])
