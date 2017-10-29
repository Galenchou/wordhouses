var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon=require('express-favicon');

var index = require('./routes/index');
var users = require('./routes/users');
var find  = require("./routes/find");
var addWord=require("./routes/addWord");
var addWordsubmit=require('./routes/addWordsubmit');
var findWordSubmit=require('./routes/findWordSubmit');
var wordList=require('./routes/wordList');
var findedit=require('./routes/findedit');
var login=require('./routes/login');

var addType=require('./routes/addType');
// var addTypeSubmit=require('./routes/addTypeSubmit');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname+'/public/images/logo.png'));

app.use('/', login);
app.use('/users', users);



app.use('/find',find);
app.use('/addWord',addWord);
app.use('/addWordsubmit',addWordsubmit);
app.use('/findword',findWordSubmit);
app.use('/wordList',wordList);
app.use('/addType',addType);
app.use('/findedit',findedit);
// app.use('/addTypeSubmit',addTypeSubmit);

//数据库链接
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/dictionary");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
