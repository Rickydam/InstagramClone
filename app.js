// express setup
var express = require('express');
var app = express();
app.use(express.static(__dirname));

// mongoose setup
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://heroku_gm3w4xqc:j6lml1quargpb15hqv2lmj2eb5@ds133328.mlab.com:33328/heroku_gm3w4xqc');
mongoose.connection.once('connected', function() {
  console.log("Connected successfully to mLab database: heroku_gm3w4xqc");
});

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
