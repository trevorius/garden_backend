const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares...

// Routes...

// GET /test route response is message: "pass!" as json
app.get('/test', async (req, res) => {
  response = { message: 'pass!' };
  console.log(response);
  res.status(200).json(response);
});

app.post('/watered', async (req, res) => {
  const bedId = req.body.id;
  console.log('req.body: ', req.body);
  response = { message: 'watered!' };
  console.log(response);
  res.status(201).json(response);
});

module.exports = app;