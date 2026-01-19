const mongoose = require("mongoose");
const UserDetailSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  pass_id: mongoose.Types.ObjectId,
  gender: String,
  DOB: Date,
  address: [String],
  created_on: Date,
  image: String,
  refresh_Token: String,
});

const UserDetails = mongoose.model("UserCredential", UserDetailSchema);

module.exports = UserDetails;
