require('dotenv').config();
const ENV = process.env.NODE_ENV || 'development';

// import server and listen
const app = require('./app/server');
const db = require('./config/db/db');

testConnection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
testConnection();

console.log(`ENV: ${ENV}`);


const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ${port}`);