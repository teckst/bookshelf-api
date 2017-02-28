// let knex = require('knex')({
// 	client: 'sqlite3',
// 	useNullAsDefault: true,
// 	connection: {
// 		filename: './test/test.sqlite3'
// 	},
// 	seeds: {
// 		directory: './test/seeds'
// 	}
// });

// Note: for Postgresql on Linux, you'll need to update permissions
// by adding the following (to allow no-password logins from localhost):
// sudo vi /etc/postgresql/9.6/main/pg_hba.conf
// host    all             all             127.0.0.1/32            trust
let knex = require('knex')({
	client: 'pg',
	useNullAsDefault: true,
	connection: {
		host: 'localhost',
		user: 'postgres',
		database: 'test'
	},
	seeds: {
		directory: './test/seeds'
	}
});
global.bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

// knex.client.on('start', function listen(builder) {
// 	builder.on('query', function(query) {
// 		console.log(query.sql);
// 		console.log(query.bindings);
// 	});
// });
