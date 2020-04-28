const { model, Schema } = require('mongoose');

const artistSchema = new Schema({
  name: String,
  age: String,
});

module.exports = model('Artist', artistSchema);
