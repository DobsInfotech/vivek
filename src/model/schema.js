const mongoose = require("mongoose");
var validator = require("validator");

const blogSchema = new mongoose.Schema({
  App: {
    type: String,
  },
  Data: [],
});

const blog = new mongoose.model("collections", blogSchema);

module.exports = blog;
