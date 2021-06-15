const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const sum = num1 + num2;
  res.send(`<h1>Answer: ${sum}</h1>`);
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/BMICalculator.html');
});

app.post('/bmicalculator', function(req, res) {
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);
  const bmi = weight / (Math.pow(height, 2));  
  res.send(`<h1>Your BMI is ${bmi}</h1>`);
});

app.listen('3000', function() {
  console.log('Server started and listening on port 3000');
});