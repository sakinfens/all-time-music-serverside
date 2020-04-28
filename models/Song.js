const { model, Schema } = require('mongoose');

const songsSchema = new Schema({
  title: String,
  genre: String,
});

module.exports = model('Songs', songsSchema);
