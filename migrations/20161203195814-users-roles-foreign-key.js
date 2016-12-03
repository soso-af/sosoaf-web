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
	db.addColumn('users', 'role_id', {
		type: 'int',
		notNull: true
	});
	db.addForeignKey('users', 'roles', 'role_id', { 'role_id': 'id' }, { onDelete: 'RESTRICT', onUpdate: 'NO ACTION' });
  return null;
};

exports.down = function(db) {
	db.removeForeignKey('users', 'role_id');
	db.removeColumn('users', 'role_id');
  return null;
};

exports._meta = {
  "version": 1
};
