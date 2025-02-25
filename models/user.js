const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    enum: ["Houston", "Dallas", "Austin", "San Antonio",],
  },
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  website: {
    type: String,
  },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  restaurants: [restaurantSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
