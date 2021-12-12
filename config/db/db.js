const { Sequelize } = require('sequelize');
const config = require('../config');

const environment = process.env.Node_Env;

const options = () => {
  switch (environment) {
    case 'production':
      return config.production;
      break;
    case 'test':
      return config.test;
      break;
    default:
      return config.development;
      break;
  };
};

// console.log(options());

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(options());


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.beds = require('./models/bed');

module.exports = { db: db, sequelize: sequelize };