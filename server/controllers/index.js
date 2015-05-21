module.exports = function(app){

	var controller = {};
	
	controller.list = function(req,res){
		res.json('list');
	}

	controller.getById = function(req,res){
		res.json('get '+req.params.id);
	}

	controller.save = function(req,res){
		res.json(req.body);
	}

	controller.delete = function(req,res){
		res.json('delete ' + req.params.id);
	}

	return controller;
	
}