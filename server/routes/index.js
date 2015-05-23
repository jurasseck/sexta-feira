module.exports = function(app){

	var controller = app.controllers.contatos;

	app.route('/contatos')
			.get(controller.list)
			.post(controller.save);

	app.route('/contatos/:id')
			.get(controller.findById)
			.delete(controller.delete);


}