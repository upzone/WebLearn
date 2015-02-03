var http = require('http');

var options = {
	host: 'www.baidu.com',
	port: 80,
	path: '/index.html'
};

http.get(options, function(response){
	console.log(response.statusCode);
}).on('error', function(err){
	console.log(err.message);
});