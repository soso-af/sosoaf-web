var express = require('express');
var morgan = require('morgan');
var DBMigrate = require('db-migrate');
var dotenv = require('dotenv');

var home = require('./routes/home');
dotenv.load();

// Run all migrations
var dbmigrate = DBMigrate.getInstance(true);
dbmigrate.up( () => {
  // TODO: catch errors here?
});

// Initialize logger
app = express();
app.use(morgan('dev'));

// Start server
app.listen(3000, function() {
  console.log('Listening on port 3000...')
})

app.use('/', home);
