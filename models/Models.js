var config = require('../config');

// Mongoose DB Connection
var mongoose = require('mongoose');
var connectOptions = config.mongoOptions;
var connectionString = config[config.env].db.connectString;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function() {
  console.log('Mongoose DB connection successful!');
});

mongoose.connect(connectionString + connectOptions);

var Entry = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  timestamp: Date
});

var EntryModel = mongoose.model('Entry', Entry);

module.exports = {
  EntryModel: EntryModel
};
