require('dotenv').config();


// import server and listen
const app = require('./app/server');
const port = process.env.PORT || 3000;
app.listen(port);