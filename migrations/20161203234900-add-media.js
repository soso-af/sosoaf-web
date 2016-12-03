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
	db.createTable('media', {
		id: { type: 'int', primaryKey: true },
		post_id: {
			type: 'int',
			foreignKey: {
				name: 'whatever the fuck we want',
				table: 'posts',
				rules: {
					onDelete: 'CASCADE',
					onUpdate: 'RESTRICT'
				},
				mapping: {
					post_id: 'id'
				}
			}
		}
	});
  return null;
};

exports.down = function(db) {
	db.dropTable('media');
  return null;
};

exports._meta = {
  "version": 1
};
