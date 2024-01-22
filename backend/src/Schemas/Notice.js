const mongoose = require("mongoose");

const clgnoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  collegeId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Notice = mongoose.model("clgnotice", clgnoticeSchema);

module.exports = Notice;
