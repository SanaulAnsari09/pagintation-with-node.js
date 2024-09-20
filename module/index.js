const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
});

const userModal = mongoose.model("user", userSchema);

module.exports = userModal;