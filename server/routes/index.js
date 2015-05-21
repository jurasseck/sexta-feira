module.exports = function(app){

	var controller = app.controllers.index;

	app.route('/api/users')
		.get(controller.list)
		.post(controller.save);

	app.route('/api/users/:id')
		.get(controller.getById)
		.delete(controller.delete);
}