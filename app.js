const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000
const url = "https://raw.githubusercontent.com/pineapplehq/hiring-exercises/master/shared/salary_datasets/salary_survey-1.json"
const https = require('https');
var bodyParser = require('body-parser');
import db from "./db/query.js"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This function process the filter parameters.
function proccessData(req){
  // If we need to sort.
  if(req.query.sort){
    db.sortSalaries(req.query.sort)
  }
  
  for (var param in req.query) {
    console.log(param, req.query[param]);
  }
}

// Routes 
app.get('/compensation_data', (req, res) => {
  proccessData(req)
  res.send('id: ' + req.query);
})

// Start listening.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})