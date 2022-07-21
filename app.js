const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000
const https = require('https');
var bodyParser = require('body-parser');
const db = require("./db/query.js")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes 
app.get('/compensation_data', async (req, res) => {
  const response = await db.matchQuery(req.query)
  //proccessData(req)
  res.status(200).json({response});
})

// Start listening.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})