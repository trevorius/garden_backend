const express = require('express');
const app = express();

// Middlewares...

// Routes...

// GET /test route response is message: "pass!" as json
app.get('/test', async (req, res) => {
  response = { message: 'pass!' };
  console.log(response);
  res.status(200).json(response);
});

module.exports = app;