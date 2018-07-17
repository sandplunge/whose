// var express = require('express');
// var router = express.Router();
var Model = require('../models/Models');

exports.Index = function(request, response) {
  Model.EntryModel.find(function (error, result){
    if (error) {
      console.log('Error accessing Entries');
    } else {
      response.pageData = {
        title:  'WhoSE Shared Entries?',
        entries: result
      };
      //TODO del
      console.log('about to render from the controller');
      response.render('entries/index', response.pageData);
    }
  }).sort({timestamp: -1});
};

exports.EntryAdd = function (request, response) {
  response.pageData = { title: 'Submit Entry' };
  response.render('entries/add', response.pageData);
};

exports.EntryCreate = function (request, response) {
  var title = request.body.title;
  var author = request.body.author;
  var stamp = new Date(); 
  var content = request.body.content;

  // sanity checks

  var e = new Model.EntryModel({
    title: title,
    author: author,
    timestamp: stamp,
    content: content
  });

  e.save( function (err) {
    if (err) {
      console.log('Error recording new Entry in DB');
    } else {
      console.log('New Entry recorded in DB');
    }
    response.redirect('/entries');
  });
};
