const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: String,
  password: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
