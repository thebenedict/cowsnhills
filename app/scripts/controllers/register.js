'use strict'

app.controller('RegisterCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth){
	$scope.errors = []
	$scope.registerUser = {
		email: '',
		password: ''
	}

	$scope.register = function(){
		var errors = [],
			registerUser = $scope.registerUser;

		// turn these client side validations into directives and html markup
		if(registerUser.email === ''){
			errors.push('Please enter an email')
		}
		if(registerUser.screename === ''){
			errors.push('Please enter a screen name')
		}
		if(registerUser.password === ''){
			errors.push('Password cannot be blank')
		}
		if (errors.length > 0){
			$scope.errors = errors; return;
		}

		// create authentication
		Auth.register(registerUser.email, registerUser.password, function(err, user){
			if (err){
				$scope.errors.push(err)
			} else {
				// create User object in database
				//.................................
     //        	User.create(user, registerUser).then(function(refToUser){

					
     //        	})

				// log user in with their new credential
				Auth.login(registerUser.email, registerUser.password)

				$location.path('/')
			}
		})

	}
}])

