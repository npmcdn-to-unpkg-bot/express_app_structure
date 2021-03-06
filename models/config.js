'use strict';

let config = {
	initAssociations: function (db) {
		db.BoardCategory.hasMany(db.Board, {
			foreignKey : 'board_category'
		});

		db.User.hasMany(db.Board, {
			foreignKey: 'user_id'
		});

		db.User.hasMany(db.BoardComment, {
			foreignKey: 'user_id'
		});

		db.Board.hasMany(db.BoardComment, {
			foreignKey: 'board_id'
		});		

		db.Board.belongsTo(db.BoardCategory, {
			foreignKey: 'board_category'
		});

		db.Board.belongsTo(db.User, {
			foreignKey: 'user_id'
		});

		db.BoardComment.belongsTo(db.User, {
			foreignKey: 'user_id'
		});

		db.BoardComment.belongsTo(db.Board, {
			foreignKey: 'board_id'
		});




	},
	initHooks: function (db) {
		// db.Publisher.hook('beforeCreate', function () {
		// 	//TODO; create작업 전에 해야할 사항들.
		// });

		// db.Publisher.beforeCreate(function () {
		// 	//TODO; create작업 전에 해야할 사항들.
		// });
	}
};

module.exports = config;