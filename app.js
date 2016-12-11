// Express setup
var express = require('express');
var app = express();
app.use(express.static(__dirname));

// Let Heroku pick a port or else use 8080
var port = process.env.PORT || 8080;
app.listen(port);
console.log("App running.");
