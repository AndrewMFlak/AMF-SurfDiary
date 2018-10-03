var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
// var passport = require('./config/passport')
var path = require('path')

var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// public or client/public
app.use(express.static('public'));

app.use(bodyParser.text());

app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});