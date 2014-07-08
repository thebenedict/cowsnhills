'use strict'

app.controller('CooperativesCtrl', ['$scope', '$state', '$modal', 'Cooperative',
	function($scope, $state, $modal, Cooperative){

	$scope.cooperatives = Cooperative.all;

	$scope.create = function(newCooperative){
		Cooperative.create(newCooperative).then(function(data){
			$state.go('dashboard.cooperatives');
			$scope.cooperative = {};
		})
	};

	// more about the modal here: http://angular-ui.github.io/bootstrap/
	$scope.deletionModal = function(cooperativeId){
		var deletionModal = $modal.open({
			templateUrl: 'views/cooperatives/modals/delete.html',
			controller: function($scope, $modalInstance){
				$scope.delete = function () {
					// delete cooperative
					var deletePromise = Cooperative.delete(cooperativeId);

					deletePromise.then(function(){
						// close modal window
						$modalInstance.close();
					})
				  };

				$scope.cancel = function () {
					$modalInstance.dismiss('cancel');
				};
			}
		});
	};

}]);