var mongoose = require('mongoose');

module.exports = function(app){
	var contatoSchema = mongoose.Schema({
		nome: {type: String, default: ''},
		email: {type: String, default: '', index: {unique: true}},
		telefone: {type: String, default: '' }
	});

	return mongoose.model('Contato', contatoSchema);
}