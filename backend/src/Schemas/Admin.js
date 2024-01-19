const mongoose = require("mongoose");

const Admins = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  isStudent: {
    type: Boolean,
  },
  isCollege: {
    type: Boolean,
  },
  isAdmin: {
    type: Boolean,
  },
});

const Admin = mongoose.model("admins", Admins);

module.exports = Admin;
