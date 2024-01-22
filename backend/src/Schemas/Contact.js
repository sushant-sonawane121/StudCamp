const mongoose = require("mongoose");

const contacts = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("contacts", contacts);

module.exports = Contact;
