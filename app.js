// express setup
var express = require('express');
var app = express();
app.use(express.static(__dirname));

// morgan setup
var morgan = require('morgan'); // log request details
app.use(morgan('dev'));

// Let Heroku pick a port or else use 8080
var port = process.env.PORT || 8080;
app.listen(port);
console.log("App running.");

// Prevent the Heroku app from sleeping
var http = require('http');
setInterval(function() {
  http.get('http://rickydam-instagram.herokuapp.com');
}, 1500000); // Ping the website every 25 minutes
