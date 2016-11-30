'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  // V1 models
  db.createTable('user', {
    id: {type: 'int', primaryKey: true, autoIncrement: true},
    username: 'string',
    password: 'string'
  });

  db.createTable('profile', {
    id: {type: 'int', primaryKey: true, autoIncrement: true},
    picture: 'string',
    //TODO: textfield here
    biography: 'string'
  });
  return null;
};

exports.down = function(db) {
  db.dropTable('user');
  db.dropTable('profile');
  return null;
};

exports._meta = {
  "version": 1
};
