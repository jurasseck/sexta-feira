var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
		
		$routeProvider.when('/', {
			templateUrl: 'partials/list.html',
			controller: 'appController'
		}).otherwise({redirectTo: '/'});
});

app.controller('appController', ['$scope','$rootScope', function($scope, $rootScope){
	$scope.nome = '';
	$rootScope.title = 'AEHOOOO';

}]);