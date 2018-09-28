const http = require('http');
const fs = require('fs');
const scraper = require('./potusScraper');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
}).listen(8080);

scraper.execute().then( data => scraper.toJSON(data));