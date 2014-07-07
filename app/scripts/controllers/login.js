'use strict'

app.controller('LoginCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth){
	$scope.resetForm = false;
	$scope.errors = []
	$scope.notifications = []
	$scope.user = {
		email: '',
		password: ''
	}

	$scope.login = function(){
		$scope.errors = []

		if ($scope.user.email === ''){
			$scope.errors.push('Please enter your email')
		}

		if($scope.user.password === ''){
			$scope.errors.push('Please enter your password')
		}

		if($scope.errors.length > 0) return;

		// Log user in
		Auth.login($scope.user.email, $scope.user.password, function(err, user){
			if (err){
				console.log(err)
				// error codes returned from firebase
				if (err.code === 'INVALID_EMAIL'){
					$scope.errors.push('That\'s an invalid email')
				}
				if (err.code === 'INVALID_USER'){
					$scope.errors.push("Account doesn't exist. Try <a href='#/register'>Signing up</a>")
				}
				if(err.code === 'INVALID_PASSWORD'){
					$scope.errors.push('Invalid password')
				}
			} else {
				// successful login, setCurrentUser

				
				$location.path('/chat')
			}
		})
	};

	$scope.sendPasswordResetEmail = function(email){
		Auth.sendPasswordResetEmail(email).then(function(){
			// show flash notification that email was sent
			$scope.resetForm = false;
			$scope.resetEmail = '';
			$scope.notifications.push('Temporary password sent! Try logging in')

			$location.path('/login')
		}, function(err){

			if (err.code === 'INVALID_EMAIL'){
				$scope.errors.push('There is no account associated with that email')
				$scope.resetForm = false;
			} else {
				$scope.errors.push('Something went wrong..')
			}
		})
	}
}])