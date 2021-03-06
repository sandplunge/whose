var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var HomeController = require('./controllers/homeController');
var EntriesController = require('./controllers/entriesController');

var app = express();

// view engine setup
var hbs = require('express-handlebars');
app.engine('hbs', hbs ({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir:  __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', HomeController.Index);
app.get('/about', HomeController.About);
app.get('/entries', EntriesController.Index);
app.get('/entries/add', EntriesController.EntryAdd);
app.post('/entries/add', EntriesController.EntryCreate);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
