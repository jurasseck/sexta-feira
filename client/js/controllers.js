angular.module('app').controller('contatosController',function($scope, Contato){

	function listar(){
		Contato.query(function(contatos){
			$scope.contatos = contatos;
		});
	}

	$scope.apagar = function(contato){
		Contato.delete(
				{id: contato._id},
				listar()
			);
	}

	listar();


});

angular.module('app').controller('contatoController',function($scope, $routeParams, Contato){

	if ($routeParams.id) {
		Contato.get({"id": $routeParams.id}, function(contato){
			$scope.contato = contato;
		});
	} else {
		$scope.contato = new Contato();
	}

	$scope.gravar = function(){
		$scope.contato.$save($scope.contato).then(function(){
			$scope.contato = new Contato();
		})
	}

});
