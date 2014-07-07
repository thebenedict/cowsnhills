'use strict';

app.service('Cooperative', ['FBURL', '$firebase', function(FBURL, $firebase){
	var ref = new Firebase(FBURL + 'cooperatives');
	var cooperatives = $firebase(ref);

	return {
		all: cooperatives,
		create: function(newCooperative){
			return cooperatives.$add(newCooperative);
		},
		read: function(cooperativeId){
			return cooperatives.$child(cooperativeId);

		},
		update: function(cooperativeId){
			
		},
		delete: function(cooperativeId){
			return cooperatives.$remove(cooperativeId);	
		}
	}
}])