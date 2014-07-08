app.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/main.html'
		})
		.state('dashboard', {
			url: '/dashboard',
			controller: 'DashboardCtrl',
			templateUrl: 'views/dashboard.html',
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
		.state('dashboard.cooperatives', {
			url: '/cooperatives',
			controller: 'CooperativesCtrl',
			templateUrl: 'views/cooperatives/all.html'
		})
		.state('dashboard.newCooperative', {
			url: '/cooperatives/create',
			controller: 'CooperativesCtrl',
			templateUrl: 'views/cooperatives/create.html'
		})
		.state('dashboard.cooperative', {
			url: '/cooperatives/{cooperativeId}',
			controller: 'ViewCooperativeCtrl',
			templateUrl: 'views/cooperatives/read.html'
		})

	$urlRouterProvider.otherwise('/')
}])