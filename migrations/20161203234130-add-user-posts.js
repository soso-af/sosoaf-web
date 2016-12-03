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
	db.createTable('user_posts', {
		id: { type: 'int', primaryKey: true },
		user_id: {
			type: 'int',
			foreignKey: {
				name: 'fuck',
				table: 'users',
				rules: {
					// want to restrict deleting users
					onDelete: 'RESTRICT',
					onUpdate: 'RESTRICT'
				},
				mapping: {
					user_id: 'id'
				}
			}
		},
		post_id: {
			type: 'int',
			foreignKey: {
				name: 'shit',
				table: 'posts',
				rules: {
					onDelete: 'RESTRICT',
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
	db.dropTable('user_posts');
  return null;
};

exports._meta = {
  "version": 1
};
