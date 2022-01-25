var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const dotenv = require("dotenv").config();


var usersRouter = require('./routes/users');
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', usersRouter);
app.use('/user_register', usersRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var listener = app.listen(8080, function () {
    console.log('Listening on port ' + listener.address().port);

});


module.exports = app;
