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
	db.createTable('posts', {
		id: { type: 'int', primaryKey: true },
		title: 'string',
		body: 'text',
		created_on: 'timestamp', 
		updated_on: 'timestamp',
		cover_photo: 'string',
		post_type_id: { type: 'int', foreignKey: {
				name: 'post_type_id_id',
				table: 'post_types',
				rules: {
					onDelete: 'RESTRICT',
					onUpdate: 'RESTRICT'
				},
				mapping: {
					post_type_id: 'id'
				}
			}
		}
	});
  return null;
};

exports.down = function(db) {
	db.dropTable('posts');
  return null;
};

exports._meta = {
  "version": 1
};
