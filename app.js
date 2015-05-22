var http = require('http'),
	app = require('./config/express')();
	require('./config/banco')('mongodb://localhost/conccepar');


http.createServer(app).listen(app.get('port'), function(){
	console.log('Servidor rodando! ');
});