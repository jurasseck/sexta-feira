angular.module('app', ['ngRoute', 'ngResource'])
	.config(function($routeProvider){

			$routeProvider.when('/',{
				templateUrl: 'partials/contatos.html',
				controller: 'contatosController'
			})
			.when('/contato', {
				templateUrl: 'partials/contato.html',
				controller: 'contatoController'
			})
			.when('/contato/:id', {
				templateUrl: 'partials/contato.html',
				controller: 'contatoController'
			});
	});