const mongoose = require("mongoose");

const schema = mongoose.Schema({
  _id: String,
  title: String,
  price: String,
  images: [String],
  about: String
});

module.exports = mongoose.model("Post", schema);
