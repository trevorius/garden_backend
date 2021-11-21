require('dotenv').config();

module.exports = {
  // development database
  development: {
    dialect: "postgres",
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    host: process.env.DB_host,
    port: process.env.DB_port,
  },
  //test database
  test: {
    dialect: "postgres",
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: 'test_jardin',
    host: process.env.DB_host,
    port: process.env.DB_port,
  },
  //production database
  production: {
    dialect: "postgres",
    username: process.env.DB_prod_username,
    password: process.env.DB_prod_password,
    database: process.env.DB_prod_database,
    host: process.env.DB_prod_host,
    port: process.env.DB_prod_port,
  }

};

//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "jardin_dantoine_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "jardin_dantoine_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
