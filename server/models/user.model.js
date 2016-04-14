"use strict";

const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  createdAt: Date
});

let User = mongoose.model('User', userSchema);

module.exports = User;
