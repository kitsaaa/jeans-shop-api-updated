const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  _id: ObjectId,
  title: String,
  price: String,
  images: [String],
  about: String
});

module.exports = mongoose.model("Post", schema);
