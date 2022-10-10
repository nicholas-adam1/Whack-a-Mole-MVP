const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');

const scoresSchema = new mongoose.Schema({
  username: String,
  score: Number
});

const Scores = mongoose.model('Scores', scoresSchema);

var getAllScores = (callback) => {
  Scores.find({}).sort({score: -1}).limit(6).exec((err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  })
}

var addScore = (scoreData, callback) => {
  Scores.create(scoreData, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  })
}

var deleteScore = (scoreData, callback) => {
  Scores.deleteOne(scoreData, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  })
}



exports.getAllScores = getAllScores;
exports.addScore = addScore;