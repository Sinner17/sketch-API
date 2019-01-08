const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const superAdmin = new Schema({

   email: {
     type: String,
     required: [true, "email can't be an empty field"],
     lowercase: true,
     trim: true,
     unique : [true, "email is already used in system!"]
   },
  password: {
      type: String,
      required: true,
      minlength: [6, "password is too short!"],
      maxlength: [30, "password is too long!"]
  }
});

superAdmin.path("email").validate((value) =>{
  value = value.trim();
  return value.match(/.*@.*/)
});

superAdmin.pre("save", function(next) {
  this.options.runValidators = true;
  next();
});

module.exports = mongoose.model("SuperAdmin",superAdmin);