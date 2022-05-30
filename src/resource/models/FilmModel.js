const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Film = new Schema({
  name: String,
  img: String,
  videoId: String,
});

module.exports = mongoose.model('Film', Film);
