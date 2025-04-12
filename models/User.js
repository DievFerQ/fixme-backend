// backend/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  clerkUserId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["client", "tech"], required: true },
  fullName: String,
  city: String,
});

module.exports = mongoose.model("User", UserSchema);

