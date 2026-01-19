const mongoose = require("mongoose");

const ConnectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Error In Connecting Database", err));
};

module.exports = ConnectDB;
