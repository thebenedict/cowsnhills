'use strict'

app.service('Auth', ['$rootScope', '$firebaseSimpleLogin', 'FBURL', function($rootScope, $firebaseSimpleLogin, FBURL){
	var FBRef = new Firebase(FBURL)
	var auth = null;

	var Auth = {
		init: function() {
           return auth = $firebaseSimpleLogin(FBRef);
        },
        login: function(email, pass, cb){
        	auth.$login('password', {
        		email: email,
        		password: pass,
        		rememberMe: true
        	}).then(function(user){
        		// user logged in success
        		if(cb){
        			cb(null, user)
        		}
        	}, cb);
        },
        loginWithTwitter: function(cb){
            auth.$login('twitter').then(function(user){
                if (cb) cb(null, user)
            }, cb)
        },
        register: function(email, pass, cb){
            
            // authenticated firebase user
            auth.$createUser(email, pass).then(function(user){
                if(cb){
                    cb(null, user)
                }
            }, cb)
        },
        logout: function(){
        	auth.$logout()
        },
        sendPasswordResetEmail: function(email){
            // send email, return promise
            return auth.$sendPasswordResetEmail(email);
        }
	};

	return Auth;
}])