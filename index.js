const PORT = process.env.PORT || 5000;

var express = require('express');
var http = require('http');
var pretty = require('express-prettify');
var app = express();

app.use(pretty({ query: 'pretty' }));

app.get('/', function (req, res) {
    res.status(200);
    res.json(req.headers);
});

http.createServer(app).listen(PORT);