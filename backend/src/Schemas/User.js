const mongoose = require('mongoose');

const Users = new mongoose.Schema({
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
      bdate:{
        type: Date,
        required: true,
      
      },
      collegeId:{
        type: String,
        required: true,
      
      },
      regiId:{
        type: String,
        required: true,
      
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean
      }

});

const User = mongoose.model('Users',Users);

module.exports = User;