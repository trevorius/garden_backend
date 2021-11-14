require('dotenv').config();
const express = require('express');
const app = express();

//listen on 3000
app.listen(3000, () => {
  console.log('listening on 3000');
});

