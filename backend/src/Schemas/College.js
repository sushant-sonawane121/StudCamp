const mongoose = require("mongoose");

const Colleges = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  collegeId: {
    type: String,
    required: true,
    unique: true,
  },
  collegename: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
    type:Boolean,
  }
});

const College = mongoose.model("colleges", Colleges);

module.exports = College;
