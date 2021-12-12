const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const bedsController = require('./controllers/beds.controller');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares...
const { db, sequelize } = require('../config/db/db');

// Routes...

// GET /test route response is message: "pass!" as json
app.get('/test', async (req, res) => {
  response = { message: 'pass!' };
  console.log(response);
  res.status(200).json(response);
});

app.post('/beds/watered', async (req, res) => {

  await bedsController.watered(req, res);


});

module.exports = app;