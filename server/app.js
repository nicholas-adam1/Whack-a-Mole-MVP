var express = require('express');
const db = require('./db.js');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 'content-type, accept, authorization');
  next();
});

app.get('/', function (req, res) {

  db.getAllScores((err, response) => {
    if (err) {
      res.status(500).end()
    } else {
      res.status(200).send(response)
    }
  })
})

app.post('/', function (req, res) {

  var scoreData = req.body;

  db.addScore(scoreData, (err, response) => {
    if (err) {
      res.status(500).end()
    } else {
      res.status(201).end()
    }
  })

})

app.listen(3000)
console.log('listening at localhost:3000')
