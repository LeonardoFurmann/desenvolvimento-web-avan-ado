const http = require('http')

http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
    response.end('Olá mundo node.js\n'); 
}).listen(8000, 'localhost');

console.log('Rodando o server');