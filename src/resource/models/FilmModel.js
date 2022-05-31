const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Film = new Schema({
  name: String,
  img: String,
  videoId: String,
  filmLink: {type: String, slug: "name", unique:true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Film', Film);
