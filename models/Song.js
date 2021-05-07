const { model, Schema } = require('mongoose');

const songsSchema = new Schema({
  title: String,
  genre: String,
  artist: String,
});

module.exports = model('Songs', songsSchema);
