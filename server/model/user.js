const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    username: String,
    salt: String,
    password: String,

    email: String,
    image: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
