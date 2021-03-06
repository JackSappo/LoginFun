
//Creates test schema

const config = require('./config')

console.log("config.host", config.host)
const db = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  }
});

db.raw('select 1+1 as result').then(function () {
  console.log('CONNECTED TO DB');
});

db.schema.hasTable('testeroo').then(function(exists){
  if(!exists){
    return db.schema.createTable('testeroo', function(user) {
      user.increments('id').primary();
      user.string('email', 50).unique();
      user.string('password', 50);
      user.timestamps();
      console.log('Created test table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});


module.exports = db;
