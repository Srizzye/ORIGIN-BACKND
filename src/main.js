const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const main = express();
const AuthRoutes = require("../Routes/AuthRoutes.js");
const MenRoutes = require("../Routes/MenRoutes.js");
const WomenRoutes = require("../Routes/WomenRoutes.js");
const ConnectDB = require("../Database/ConnectDB.js");
const cookieParser = require("cookie-parser");
main.use(express.json());
main.use(cookieParser());

main.listen(process.env.PORT, () =>
  console.log("Server Running In Port", process.env.PORT),
);

ConnectDB();

main.use("/auth", AuthRoutes);
main.use("/home", HomeRoutes);
// main.use("/men", MenRoutes);
// main.use("/women", WomenRoutes);
