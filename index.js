require('dotenv').config();
const ENV = process.env.NODE_ENV || 'development';

// import server and listen
const app = require('./app/server');
const { db, sequelize } = require('./config/db/db');
const syncDB = async () => {
  await db.sequelize.sync();
};

testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
testConnection();
syncDB();

console.log(`ENV: ${ENV}`);


const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ${port} in ${ENV} mode`);