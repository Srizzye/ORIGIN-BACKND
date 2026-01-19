const mongoose = require("mongoose");

const UserConfSchema = mongoose.Schema({
  password: String,
});

const UserConf = mongoose.model("UserConfs", UserConfSchema);
module.exports = UserConf;
