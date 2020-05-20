const mongoose = require("mongoose") // returns module.exports object from the "mongoose" module

const userSchema = mongoose.Schema({
  // structure of db

  firstName: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // white space removed
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastName: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
})

const User = mongoose.model("User", userSchema)

module.exports = { User }
