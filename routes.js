var HomeController = require('./controllers/homeController');
var express = require('express');

module.exports = function (app) {
  
  // home routes
  app.get('/', HomeController.Index(app));

};
