var pg = require('pg');
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
connectionString = `postgres://${DB_HOST}:${DB_PORT}/${DB_NAME}`
// TODO: check for errors here
var client = new pg.Client(connectionString);

module.exports = client;
