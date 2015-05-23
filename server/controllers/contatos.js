module.exports = function(app){
	var controller = {};
	var Contato = app.models.contato;

	controller.save = function(req,res){
		var _id = req.body._id;

		if (_id) {
			Contato.findByIdAndUpdate(_id,req.body).exec().then(function(contato){
				res.json(contato);
			});
		} else {
			Contato.create(req.body).then(function(contato){
				res.json(contato);
			});
		}
	}

	controller.list = function(req,res){
		Contato.find().exec().then(function(contatos){
			res.json(contatos);
		});
	}

	controller.findById = function(req,res){
		Contato.findById(req.params.id).exec().then(function(contato){
			res.json(contato);
		})
	}

	controller.delete = function(req,res){
		Contato.remove({"_id":req.params.id}).exec().then(function(){
			res.end();
		});
	}

	return controller;
}