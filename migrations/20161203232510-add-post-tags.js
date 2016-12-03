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
	db.createTable('post_tags', {
		id: { type: 'int', primaryKey: true },
		post_id: { 
			type: 'int',
			foreignKey: {
				name: 'abcd',
				table: 'posts',
				rules: {
					// if we delete a post, delete this post-tag linkage
					onDelete: 'CASCADE',
					onUpdate: 'NO ACTION'
				},
				mapping: {
					post_id: 'id'
				}
			}
		},
		tag_id: {
			// for some reason we need to include a name, i intentionally made xyz the name to verify that this does absolutely nothing
			// to the table
			name: 'xyz',
			type: 'int',
			foreignKey: {
				table: 'tags',
				rules: {
					onDelete: 'RESTRICT',
					onUpdate: 'NO ACTION'
				},
				mapping: {
					tag_id: 'id'
				}
			}
		}
	});
  return null;
};

exports.down = function(db) {
	db.dropTable('post_tags');
  return null;
};

exports._meta = {
  "version": 1
};
