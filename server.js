var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var session = require('express-session')
// var passport = require('./config/passport')
var path = require('path')
var controller = require('./controllers/controller')
var app = express();

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// public or client/public
app.use(express.static('client/build'));

app.use(controller);

app.use(bodyParser.text());

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});